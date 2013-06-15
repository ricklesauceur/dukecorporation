#pragma once

#include "base/natdef.h"
#include "base/entity.h"

#include "component/transform.h"
#include "component/glrender.h"
#include "component/sdlrender.h"
#include "component/sdlinput.h"
#include "component/camera.h"
#include "component/charactercontroller.h"
#include "component/glmanager.h"
#include "component/squareshape.h"
#include "component/rigidbody.h"

#include "component/gameplay/baseweapon.h"


namespace Natorium
{

class Player : public Entity
{
public:
	Player()
		: Entity()
	{
		AddComponent<Transform>();
		AddComponent<SquareShape>();
		AddComponent<CharacterController>();
		AddComponent<BaseWeapon>();
		AddComponent<RigidBody>();
		AddComponent<Camera>();
		AddComponent<GLRender>();
	}




};



}