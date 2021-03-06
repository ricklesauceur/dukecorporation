#pragma once
#include "base/natdef.h"
#include "base/component.h"

#include "base/hash.h"

#include <glm/glm.hpp>

namespace Natorium
{

static natU32 s_Shape = Hash::Compute("Shape");

class Shape : public Component
{
public:

	static natU32		GetType() { return s_Shape; }

	virtual void		GetOffset(size_t& _vertexNumber, size_t& _indicesNumber, size_t& _color, size_t& _uv) = 0;

	virtual natF32*		GetVertex(size_t &_size) = 0;
	virtual	natU16*		GetIndices(size_t &_size) = 0;

	virtual glm::vec2	GetSize() const = 0;
	virtual void		SetColor(glm::vec4& _color) = 0;
	virtual void		SetAlpha(natF32 _alpha) = 0;

	virtual natBool		IsAndRemoveDirty() = 0;
};


}