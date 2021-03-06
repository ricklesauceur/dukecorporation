#include "component/componentfactory.h"

#include "base/entity.h"
#include "base/layer.h"
#include "base/kernel.h"
#include "base/serializer.h"

#include "component/texturemanager.h"

#include <tinyxml/tinyxml2.h>

#include <glm/gtc/type_ptr.hpp>
#include <glm/gtc/matrix_transform.hpp>

#include <string>
#include <sstream>
#include <cassert>

namespace Natorium
{

ComponentFactory::ComponentFactory()
{

}

ComponentFactory::~ComponentFactory()
{

}

void ComponentFactory::OnInit()
{
	// this is generated son
	PopulateFactory();
}

void ComponentFactory::OnTick(const natU64 _dt)
{

}

void ComponentFactory::AttachComponent(Entity* _entity, natU32 _type)
{
	componentFactory_t::iterator it = m_componentFactory.find(_type);
	assert(it != m_componentFactory.end());

	Component* component = it->second;

	// add component to type
	component->Clone(_entity, 0);
}

void ComponentFactory::UnPopulateFactory()
{
	for(componentFactory_t::iterator it = m_componentFactory.begin(); it != m_componentFactory.end(); ++it)
	{
		Component* component = it->second;
		delete component;
	}

	m_componentFactory.clear();
}

void ComponentFactory::OnDeInit()
{
	UnPopulateFactory();
}


Component* ComponentFactory::ParseComponent(Entity* _entity, tinyxml2::XMLElement* _element)
{
	const natChar* component_name = _element->Attribute("class");
	assert(component_name);

	natU32 component_type = Hash::Compute(component_name);
	AttachComponent(_entity, component_type);

	Component* component = _entity->GetComponentByType(component_type);
	assert(component);

	tinyxml2::XMLElement* element = _element->FirstChildElement();
	// do not assert, there can be no public property
	Serializer serializer(2048);

	serializer.Write(component_type);
	while(element)
	{
		ParseType(serializer, element);
		element = element->NextSiblingElement();
	}
	serializer.Close();

	serializer.Read(component_type);
	component->ReadData(serializer);
	serializer.Close();

	return component;
}

const ref_t s_type_ref_t = Hash::Compute("ref_t");
const ref_t s_type_tex_t = Hash::Compute("tex_t");
const ref_t s_type_natBool = Hash::Compute("natBool");
const ref_t s_type_natChar = Hash::Compute("natChar");
const ref_t s_type_natU8 = Hash::Compute("natU8");
const ref_t s_type_natS8 = Hash::Compute("natS8");
const ref_t s_type_natU16 = Hash::Compute("natU16");
const ref_t s_type_natS16 = Hash::Compute("natS16");
const ref_t s_type_natU32 = Hash::Compute("natU32");
const ref_t s_type_natS32 = Hash::Compute("natS32");
const ref_t s_type_natU64 = Hash::Compute("natU64");
const ref_t s_type_natS64 = Hash::Compute("natS64");
const ref_t s_type_natF32 = Hash::Compute("natF32");
const ref_t s_type_natF64 = Hash::Compute("natF64");
const ref_t s_type_std_string = Hash::Compute("std::string");
const ref_t s_type_glm_vec2 = Hash::Compute("glm::vec2");
const ref_t s_type_glm_vec3 = Hash::Compute("glm::vec3");
const ref_t s_type_glm_vec4 = Hash::Compute("glm::vec4");
const ref_t s_type_glm_mat4 = Hash::Compute("glm::mat4");
const ref_t s_type_glm_mat4x2 = Hash::Compute("glm::mat4x2");
const ref_t s_type_glm_quat = Hash::Compute("glm::quat");


void ComponentFactory::ParseType(Serializer& _ser, tinyxml2::XMLElement* _element)
{
	const natChar *type_str = _element->Attribute("type");
	ref_t type = Hash::Compute(type_str);

	if(type == s_type_ref_t)
	{
		const natChar* value = _element->Attribute("value");
		ref_t ref;
		if(strcmp(value, "") != 0)
		{
			ref = Hash::Compute(value);
		}
		else
		{
			ref = 0;
		}

		_ser << ref;
	}
	else if(type == s_type_tex_t)
	{
		const natChar* value = _element->Attribute("value");
		ref_t ref;
		if(strcmp(value, "") != 0)
		{
			ref = Hash::Compute(value);

			// add it to preload
			TextureManager* texturemanager = GetEntity()->GetKernel()->GetLayer(Layer::s_LayerManager)->GetRootEntity()->GetComponent<TextureManager>();
			texturemanager->Preload(value);
		}
		else
		{
			ref = 0;
		}

		_ser << ref;
	}
	else if(type == s_type_natBool)
	{
		natBool value = _element->BoolAttribute("value");
		_ser << value;
	}
	else if(type == s_type_natChar)
	{
		const natChar* value = _element->Attribute("value");
		natChar value0 = value[0];
		_ser << value0;
	}
	else if(type == s_type_natU8)
	{
		const natU8* value = reinterpret_cast<const natU8*>(_element->Attribute("value"));
		natU8 value0 = value[0];
		_ser << value0;
	}
	else if(type == s_type_natS8)
	{
		const natS8* value = reinterpret_cast<const natS8*>(_element->Attribute("value"));
		natS8 value0 = value[0];
		_ser << value0;
	}
	else if(type == s_type_natU16)
	{
		natU16 value = static_cast<natU16>(_element->IntAttribute("value"));
		_ser << value;
	}
	else if(type == s_type_natS16)
	{
		natS16 value = static_cast<natS16>(_element->IntAttribute("value"));
		_ser << value;
	}
	else if(type == s_type_natU32)
	{
		natU32 value = static_cast<natU32>(_element->IntAttribute("value"));
		_ser << value;
	}
	else if(type == s_type_natS32)
	{
		natS32 value = static_cast<natS32>(_element->IntAttribute("value"));
		_ser << value;
	}
	else if(type == s_type_natU64)
	{
		natU64 value = static_cast<natU64>(_element->IntAttribute("value"));
		_ser << value;
	}
	else if(type == s_type_natS64)
	{
		natS64 value = static_cast<natS64>(_element->IntAttribute("value"));
		_ser << value;
	}
	else if(type == s_type_natF32)
	{
		natF32 value = static_cast<natF32>(_element->FloatAttribute("value"));
		_ser << value;
	}
	else if(type == s_type_natF64)
	{
		natF64 value = static_cast<natF64>(_element->DoubleAttribute("value"));
		_ser << value;
	}
	else if(type == s_type_std_string)
	{
		const natChar* value = _element->Attribute("value");
		std::string str = value;
		_ser << str;
	}
	else if(type == s_type_glm_vec2)
	{
		// ugly stl
		const natChar* value = _element->Attribute("value");
		std::istringstream iss(value);

		std::string value0;
		std::string value1;

		glm::vec2 ret;
		std::getline(iss, value0, ' ');
		if(!std::getline(iss, value1, ' '))
		{
			value1 = "0";
		}

		std::istringstream iss0(value0);
		iss0 >> ret.x;

		std::istringstream iss1(value1);
		iss1 >> ret.y;

		_ser << ret;
	}
	else if(type == s_type_glm_vec3)
	{
		// ugly stl
		const natChar* value = _element->Attribute("value");
		std::istringstream iss(value);

		std::string value0;
		std::string value1;
		std::string value2;

		glm::vec3 ret;
		std::getline(iss, value0, ' ');
		if(!std::getline(iss, value1, ' '))
		{
			value1 = "0";
		}
		if(!std::getline(iss, value2, ' '))
		{
			value2 = "0";
		}

		std::istringstream iss0(value0);
		iss0 >> ret.x;

		std::istringstream iss1(value1);
		iss1 >> ret.y;

		std::istringstream iss2(value2);
		iss2 >> ret.z;

		_ser << ret;
	}
	else if(type == s_type_glm_vec4)
	{
		// ugly stl
		const natChar* value = _element->Attribute("value");
		std::istringstream iss(value);

		std::string value0;
		std::string value1;
		std::string value2;
		std::string value3;

		glm::vec4 ret;
		std::getline(iss, value0, ' ');
		if(!std::getline(iss, value1, ' '))
		{
			value1 = "0";
		}
		if(!std::getline(iss, value2, ' '))
		{
			value2 = "0";
		}
		if(!std::getline(iss, value3, ' '))
		{
			value3 = "0";
		}

		std::istringstream iss0(value0);
		iss0 >> ret.x;

		std::istringstream iss1(value1);
		iss1 >> ret.y;

		std::istringstream iss2(value2);
		iss2 >> ret.z;

		std::istringstream iss3(value3);
		iss3 >> ret.w;

		_ser << ret;
	}
	else if(type == s_type_glm_mat4)
	{
		// bored to death !! NOT IMPLEMENTED
		glm::mat4 mat(0.f);
		_ser << mat;

		//assert(false);
	}
	else if(type == s_type_glm_mat4x2)
	{
		// ugly stl
		const natChar* value = _element->Attribute("value");
		std::istringstream iss(value);

		std::string value0;
		std::string value1;
		std::string value2;
		std::string value3;
		std::string value4;
		std::string value5;
		std::string value6;
		std::string value7;

		glm::mat4x2 ret(0.f);
		std::getline(iss, value0, ' ');
		if(!std::getline(iss, value1, ' '))
		{
			value1 = "0";
		}
		if(!std::getline(iss, value2, ' '))
		{
			value2 = "0";
		}
		if(!std::getline(iss, value3, ' '))
		{
			value3 = "0";
		}
		if(!std::getline(iss, value4, ' '))
		{
			value4 = "0";
		}
		if(!std::getline(iss, value5, ' '))
		{
			value5 = "0";
		}
		if(!std::getline(iss, value6, ' '))
		{
			value6 = "0";
		}
		if(!std::getline(iss, value7, ' '))
		{
			value7 = "0";
		}

		std::istringstream iss0(value0);
		iss0 >> ret[0].x;

		std::istringstream iss1(value1);
		iss1 >> ret[0].y;

		std::istringstream iss2(value2);
		iss2 >> ret[1].x;

		std::istringstream iss3(value3);
		iss3 >> ret[1].y;

		std::istringstream iss4(value4);
		iss4 >> ret[2].x;

		std::istringstream iss5(value5);
		iss5 >> ret[2].y;

		std::istringstream iss6(value6);
		iss6 >> ret[3].x;

		std::istringstream iss7(value7);
		iss7 >> ret[3].y;

		_ser << ret;
	}
	else if(type == s_type_glm_quat)
	{
		// ugly stl
		const natChar* value = _element->Attribute("value");
		std::istringstream iss(value);

		std::string value0;
		std::string value1;
		std::string value2;
		std::string value3;

		
		std::getline(iss, value0, ' ');
		if(!std::getline(iss, value1, ' '))
		{
			value1 = "0";
		}
		if(!std::getline(iss, value2, ' '))
		{
			value2 = "0";
		}
		//if(!std::getline(iss, value3, ' '))
		//{
		//	value3 = "0";
		//}

		glm::vec3 temp_ret;

		std::istringstream iss0(value0);
		iss0 >> temp_ret.x;

		std::istringstream iss1(value1);
		iss1 >> temp_ret.y;

		std::istringstream iss2(value2);
		iss2 >> temp_ret.z;

		//std::istringstream iss3(value3);
		//iss3 >> ret.w;

		glm::quat ret(glm::radians(temp_ret));
		_ser << ret;
	}
	else
	{
		assert(false);
	}
}






}