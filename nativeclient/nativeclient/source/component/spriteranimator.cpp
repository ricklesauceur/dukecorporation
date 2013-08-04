#include "component/spriteranimator.h"


#include "base/entity.h"
#include "base/kernel.h"
#include "base/layer.h"
#include "base/component.h"
#include "base/hash.h"

#include "component/glrender.h"
#include "component/squareshape.h"
#include "component/transform.h"

#include "component/spritermanager.h"
#include "component/texturemanager.h"

#include <glm/gtc/type_ptr.hpp>
#include <glm/gtc/matrix_transform.hpp>

namespace Natorium
{

SpriterAnimator::SpriterAnimator()
	: m_animatorRef(0)
	, m_defaultAction(0)
	, m_keyIndex(0)
	, m_sprite(nullptr)
	, m_currentAnimation(nullptr)
{

}

SpriterAnimator::~SpriterAnimator()
{

}

void SpriterAnimator::OnInit()
{
	SpriterManager* spritermanager = GetEntity()->GetKernel()->GetLayer(Layer::Layer_0)->GetRootEntity()->GetComponent<SpriterManager>();
	assert(spritermanager);

	m_sprite = spritermanager->Get(m_animatorRef);
	assert(m_sprite);

	if(m_defaultAction)
	{
		Play(m_defaultAction);
	}
}

void SpriterAnimator::OnTick(const natU64 _dt)
{
	if(m_currentAnimation)
	{
		m_time += _dt;

		if(m_time > m_currentAnimation->m_duration)
		{
			m_time -= m_currentAnimation->m_duration;
			m_keyIndex = 0;
			ComputeNextKey();
		}

		// while to avoid freeze
		if((m_keyIndex != m_currentAnimation->m_timelines[0].m_keys.size() -1) && m_currentAnimation->m_timelines[0].m_keys[m_keyIndexNext].m_time < m_time)
		{
			++m_keyIndex;
			ComputeNextKey();
		}

		for(size_t i = 0; i < m_currentAnimation->m_timelines.size(); ++i)
		{
			const struct timeline_sprite_t& timeline = m_currentAnimation->m_timelines[i];
			const struct key_sprite_t& key = timeline.m_keys[m_keyIndex];
			const struct key_sprite_t& nextKey = timeline.m_keys[m_keyIndexNext];

			natF32 t = ComputeLerpTime(key, nextKey);
			Interpolate(m_managedEntities[i], key, nextKey, t);
		}
	}
}

void SpriterAnimator::OnDeInit()
{

}

void SpriterAnimator::ComputeNextKey()
{
	assert(m_currentAnimation);

	m_keyIndexNext = m_keyIndex + 1;
	if(m_keyIndexNext >= m_currentAnimation->m_timelines[0].m_keys.size())
	{
		m_keyIndexNext = 0;
	}
}

natF32 SpriterAnimator::ComputeLerpTime(const struct key_sprite_t& _a,  const struct key_sprite_t& _b) const
{
	natU64 next_time = _b.m_time;

	if(next_time < _a.m_time)
	{
		next_time = m_currentAnimation->m_duration + _b.m_time;
	}

	return (m_time - _a.m_time) / natF32(next_time - _a.m_time);
}

glm::vec3 SpriterAnimator::Lerp(const glm::vec3& _a, const glm::vec3& _b, natF32 _t) const
{
	assert(_t >= 0);
	assert(_t <= 1);

	return ((_b-_a)*_t) + _a;
}

void SpriterAnimator::Interpolate(Entity* _entity, const struct key_sprite_t& _a,  const struct key_sprite_t& _b, natF32 _t)
{
	Transform *transform = _entity->GetComponent<Transform>();
	SquareShape *squareshape = _entity->GetComponent<SquareShape>();

	transform->m_pos = Lerp(_a.m_position, _b.m_position, _t);
}


void SpriterAnimator::Play(const natChar* _name)
{
	ref_t hash = Hash::Compute(_name);
	Play(hash);
}

void SpriterAnimator::Play(ref_t _hash)
{
	assert(m_sprite);

	const animationMap_t::const_iterator it = m_sprite->m_animations.find(_hash);

	if(it != m_sprite->m_animations.end())
	{
		m_currentAnimation = &(*it).second;
		InitAnimation();
	}
	else
	{
		// missing animation
		assert(false);
	}
}

void SpriterAnimator::InitAnimation()
{
	assert(m_sprite);
	assert(m_currentAnimation);

	m_time = 0;
	m_keyIndex = 0;
	ComputeNextKey();

	if(m_managedEntities.size() < m_currentAnimation->m_timelines.size())
	{
		entities_t entities_to_add;
		// create missing entities
		for(size_t i = m_managedEntities.size(); i < m_currentAnimation->m_timelines.size(); ++i)
		{
			Entity* entity = new Entity();
			entities_to_add.push_back(entity);
		}
		
		// entity settings
		size_t original_size = m_managedEntities.size();
		for(size_t i = 0; i < m_currentAnimation->m_timelines.size(); ++i)
		{
			const timeline_sprite_t& timeline = m_currentAnimation->m_timelines[i];
			Entity* entity;
			natBool is_new = false;

			if(i < original_size)
			{
				entity = m_managedEntities[i];
			}
			else
			{
				entity = entities_to_add[i - original_size];
				is_new = true;
			}

			SetupEntity(entity, timeline);

			if(is_new)
			{
				GetEntity()->GetKernel()->AddEntity(GetEntity()->GetLayer()->GetEnumLayer(), entity, GetEntity());
				m_managedEntities.push_back(entity);
			}
			else
			{
				entity->Reset();
			}
		}

		// if more entity than necessary, deactivate the rest
		for(size_t i = m_currentAnimation->m_timelines.size(); i < m_managedEntities.size(); ++i)
		{
			Entity* entity = m_managedEntities[i];
			entity->SetEnabled(false);
		}
	}
}

ref_t s_MonoTexture = Hash::Compute("monotexture");

void SpriterAnimator::SetupEntity(Entity* _entity, const timeline_sprite_t& _timeline)
{
	GLRender* glrender = _entity->AddComponent<GLRender>();
	glrender->m_shapeType = s_SquareShape;
	glrender->m_type = s_MonoTexture;

	Transform* transform = _entity->AddComponent<Transform>();
	transform->m_pos = _timeline.m_keys[0].m_position;
	transform->m_scale = _timeline.m_keys[0].m_scale;
	transform->m_rad.z = glm::radians(_timeline.m_keys[0].m_rotation);

	SquareShape* squareshape = _entity->AddComponent<SquareShape>();
	squareshape->m_color = glm::vec4(1.f, 1.f, 1.f, _timeline.m_keys[0].m_alpha);
	squareshape->m_size = _timeline.m_keys[0].m_ressource.m_size;
	squareshape->m_textureRef = _timeline.m_keys[0].m_ressource.m_ref;
	squareshape->m_repeat = 1.f;
}





}