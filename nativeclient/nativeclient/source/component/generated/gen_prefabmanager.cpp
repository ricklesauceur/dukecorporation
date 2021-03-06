// Generated file : do not edit manually 


#include "component/prefabmanager.h"

#include "base/component.h"
#include "base/entity.h"
#include "base/serializer.h"



namespace Natorium
{


void PrefabManager::Clone(Entity* _entity, ref_t _type) const
{
	PrefabManager* component;
	ref_t base_type = PrefabManager::GetType();
	if(_type == 0)
	{
		component = _entity->AddComponent<PrefabManager>();
	}
	else
	{
		component = static_cast<PrefabManager*>(_entity->GetComponentByType(_type));
		base_type = _type;
	}

}


void PrefabManager::WriteData(Serializer& _ser)
{
}


void PrefabManager::ReadData(Serializer& _ser)
{
}



}
