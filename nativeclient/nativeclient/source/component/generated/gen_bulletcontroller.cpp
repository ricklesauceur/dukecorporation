// Generated file : do not edit manually 


#include "component/gameplay/bulletcontroller.h"

#include "base/component.h"
#include "base/entity.h"
#include "base/serializer.h"



namespace Natorium
{


void BulletController::Clone(Entity* _entity, ref_t _type) const
{
	BulletController* component;
	ref_t base_type = BulletController::GetType();
	if(_type == 0)
	{
		component = _entity->AddComponent<BulletController>();
	}
	else
	{
		component = static_cast<BulletController*>(_entity->GetComponentByType(_type));
		base_type = _type;
	}

	component->m_damage = m_damage;
	component->m_lifetime = m_lifetime;
}


void BulletController::WriteData(Serializer& _ser)
{
	_ser << m_damage;
	_ser << m_lifetime;
}


void BulletController::ReadData(Serializer& _ser)
{
	_ser >> m_damage;
	_ser >> m_lifetime;
}



}
