// Generated file : do not edit manually 


#include "component/transform.h"

#include "base/component.h"
#include "base/entity.h"
#include "base/serializer.h"



namespace Natorium
{


void Transform::Clone(Entity* _entity, ref_t _type) const
{
	Transform* component;
	ref_t base_type = Transform::GetType();
	if(_type == 0)
	{
		component = _entity->AddComponent<Transform>();
	}
	else
	{
		component = static_cast<Transform*>(_entity->GetComponentByType(_type));
		base_type = _type;
	}

	component->m_pos = m_pos;
	component->m_rot = m_rot;
	component->m_scale = m_scale;
}


void Transform::WriteData(Serializer& _ser)
{
	_ser << m_pos;
	_ser << m_rot;
	_ser << m_scale;
}


void Transform::ReadData(Serializer& _ser)
{
	_ser >> m_pos;
	_ser >> m_rot;
	_ser >> m_scale;
}



}
