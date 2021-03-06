#include "component/gameplay/spawner.h"

#include "base/entity.h"
#include "base/component.h"
#include "base/kernel.h"
#include "component/transform.h"

#include "base/timeplatform.h"

#include "component/gameplay/spawned.h"
#include "component/prefabmanager.h"

#include <cassert>

namespace Natorium
{

Spawner::Spawner()
	: m_max(40)
	, m_refEntity(nullptr)
	, m_prefabType(0)
{
}

Spawner::~Spawner()
{
}

void Spawner::OnInit()
{
	assert(m_prefabType != 0);

	PrefabManager* prefabmanager = GetEntity()->GetKernel()->GetLayer(Layer::s_LayerManager)->GetRootEntity()->GetComponent<PrefabManager>();
	assert(prefabmanager);

	m_refEntity = prefabmanager->CreateFromType(m_prefabType);
	assert(m_refEntity);

	// spawn a pool of entities
	for(size_t i = 0; i < m_max; ++i)
	{
		Entity* entity = m_refEntity->Clone();
		GetEntity()->GetKernel()->AddEntity(GetEntity()->GetLayer()->GetLayerID(), entity);
		entity->SetEnabled(false);

		m_pool_entities.push_back(entity);
	}
}

void Spawner::OnTick(const natU64 _dt)
{
	for(entities_spawner_t::iterator it = m_kill_entities.begin(); it != m_kill_entities.end(); ++it)
	{
		Entity* entity = (*it);
		entity->SetEnabled(false);
		//entity->RemoveComponent<Spawned>();
		m_pool_entities.push_back(entity);
	}
	m_kill_entities.clear();
}

void Spawner::OnDeInit()
{

}

Entity* Spawner::Spawn()
{
	assert(m_pool_entities.size() != 0);
	Entity* entity = m_pool_entities.back();
	m_pool_entities.pop_back();

	Transform* transform = entity->GetComponent<Transform>();
	transform->m_pos = GetEntity()->GetComponent<Transform>()->GetPos();

	Spawned* spawned = entity->AddComponent<Spawned>();
	spawned->m_spawner = this;

	entity->Reset();
	entity->SetEnabled(true);
	m_active_entities.push_back(entity);

	return entity;
}

void Spawner::OnKilled(Entity* _entity)
{
	for(entities_spawner_t::iterator it = m_active_entities.begin(); it != m_active_entities.end(); ++it)
	{
		Entity* cmp = (*it);
		if(cmp->GetId() == _entity->GetId())
		{
			m_active_entities.erase(it);
			m_kill_entities.push_back(_entity);
			break;
		}
	}
}



}