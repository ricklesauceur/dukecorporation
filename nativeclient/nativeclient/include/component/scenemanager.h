#pragma once

#include "base/natdef.h"
#include "base/component.h"
#include "base/hash.h"

#include <string>
#include <cassert>
#include <list>

namespace tinyxml2
{
	class XMLElement;
}

namespace Natorium
{

class Entity;

static natU32 s_SceneManager = Hash::Compute("SceneManager");

class SceneManager : public Component
{
public:
					SceneManager();
	virtual			~SceneManager();

	virtual void	OnInit();
	virtual void	OnTick(const natU64 _dt);
	virtual void	OnDeInit();

	static natU32	GetType() { return s_SceneManager; }

	virtual void	Clone(Entity* _entity, natU32 _type) const;
	void			WriteData(Serializer& _ser);
	void			ReadData(Serializer& _ser);

	void			Load(const natChar* _path);

public:
	std::string		m_bootScene;

private:
	void			OverridePrefab(Entity* _entity, tinyxml2::XMLElement* _element);


};




}