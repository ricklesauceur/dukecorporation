#pragma once

#include "base/natdef.h"
#include "base/component.h"
#include "base/hash.h"


#include "component/gameplay/iweapon.h"

#include <glm/glm.hpp>

#include <vector>

namespace Natorium
{

class Bullet;

static natU32 s_BaseWeapon = Hash::Compute("s_BaseWeapon");

class BaseWeapon : public Component, public IWeapon
{
public:
					BaseWeapon();
	virtual			~BaseWeapon();

	virtual void	OnInit();
	virtual void	OnTick(const natU64 _dt);
	virtual void	OnDeInit();

	static natU32	GetType() { return s_BaseWeapon; }

	void			ShootAt(glm::vec3 _pos);
	void			OnHit(Contact* _contact);

private:
	natU64			m_rateShot;
	natU64			m_acc;
	size_t			m_cursor;

	typedef std::vector<Bullet*> bullets_t;
	bullets_t m_bullets;

};




}