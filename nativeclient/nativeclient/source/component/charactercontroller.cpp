#include "component/charactercontroller.h"

#include "base/entity.h"
#include "component/glmanager.h"
#include "component/input.h"
#include "component/transform.h"
#include "component/glmanager.h"
#include "component/camera.h"
#include "component/gameplay/baseweapon.h"
#include "component/gameplay/shotgunweapon.h"
#include "component/spritermanager.h"
#include "component/spriteranimator.h"
#include "component/rigidbody.h"

#include "base/kernel.h"

#include <glm/gtx/fast_trigonometry.hpp>

namespace Natorium
{

CharacterController::CharacterController()
	: m_currentWeapon(nullptr)
{
}

CharacterController::~CharacterController()
{
}

void CharacterController::OnInit()
{
	//m_currentWeapon = GetEntity()->GetComponent<BaseWeapon>();
	m_currentWeapon = GetEntity()->GetComponent<ShotgunWeapon>();
}

void CharacterController::OnTick(const natU64 _dt)
{
	Input* input = GetEntity()->GetKernel()->GetLayer(Layer::s_LayerManager)->GetRootEntity()->GetComponent<Input>();
	Transform* transform = GetEntity()->GetComponent<Transform>();
	RigidBody* rigidbody = GetEntity()->GetComponent<RigidBody>();

	glm::vec3 impulse(0.f);
	if(input->IsAction(Input::forward))
	{
		//transform->m_pos.y -= 0.1f*_dt;
		impulse.y = -1.f * _dt;
	}
	if(input->IsAction(Input::backward))
	{
		//transform->m_pos.y += 0.1f*_dt;
		impulse.y = 1.f * _dt;
	}
	if(input->IsAction(Input::left))
	{
		//transform->m_pos.x -= 0.1f*_dt;
		impulse.x = -1.f * _dt;
	}
	if(input->IsAction(Input::right))
	{
		//transform->m_pos.x += 0.1f*_dt;
		impulse.x = 1.f * _dt;
	}
	if(input->IsAction(Input::shoot1))
	{
		glm::vec2 mouse_pos;
		input->GetMousePosition(mouse_pos);
		Camera* camera = GetEntity()->GetKernel()->GetLayer(Layer::s_LayerManager)->GetRootEntity()->GetComponent<GLManager>()->GetCamera();
		glm::vec3 world_pos = camera->GetPosScreenToWorld(mouse_pos);

		if(m_currentWeapon)
		{
			m_currentWeapon->ShootAt(world_pos);
		}
	}
	if(input->IsAction(Input::jump))
	{
		SpriterAnimator* animator = GetEntity()->GetComponent<SpriterAnimator>();
		const struct scml_sprite_t* sprite = animator->GetSpriteSource();
		static animationMap_t::const_iterator it = sprite->m_animations.begin();
		
		++it;
		if(it == sprite->m_animations.end())
		{
			it = sprite->m_animations.begin();
		}
		
		animator->Play(it->second.m_name.c_str());
	}

	if(impulse.x != 0.f || impulse.y != 0.f)
	{
		rigidbody->ApplyLinearImpulse(impulse);
	}


	glm::vec2 mouse_pos;
	input->GetMousePosition(mouse_pos);
	glm::vec3 mouse_vec3(mouse_pos, 0.f);

	LookAtScreen(mouse_vec3);
}

void CharacterController::OnDeInit()
{
}


void CharacterController::LookAtScreen(glm::vec3& _look)
{
	Transform* transform = GetEntity()->GetComponent<Transform>();
	Camera* camera = GetEntity()->GetKernel()->GetLayer(Layer::s_LayerManager)->GetRootEntity()->GetComponent<GLManager>()->GetCamera();

	glm::vec2 screen_pos = camera->GetPosWorldToScreen(transform->GetPos());

	//camera->GetPosScreenToWorld(glm::vec2(10, 10));


	natF32 vector_x = screen_pos.x - _look.x;
	natF32 vector_y = screen_pos.y - _look.y;

	//glm::vec3 screen(screen_pos.x, screen_pos.y, 0.f);
	//transform->m_rad.z = glm::fastAtan(vector_y, vector_x);
	glm::vec3 euler(0.f);
	euler.z = std::atan2(vector_y, vector_x);

	transform->m_rot = glm::quat(euler);

	RigidBody* rigidbody = GetEntity()->GetComponent<RigidBody>();
	rigidbody->SetAngle(transform->m_rot);
}






}