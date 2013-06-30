#include "component/squareshape.h"

#include "base/entity.h"

namespace Natorium
{

SquareShape::SquareShape()
	: m_size(50.f, 50.f)
	, m_color(1.f, 1.f, 1.f, 1.f)
	, m_repeat(1.f)
	, m_isDirty(true)
{

}

void SquareShape::OnInit()
{
	SetSize(m_size);
	SetColor(m_color);
	SetTextureCoordinate(m_repeat);

	m_isDirty = true;
}

void SquareShape::Clone(Entity* _entity) const
{
	SquareShape* component = _entity->AddComponent<SquareShape>();
	component->m_size = m_size;
	component->m_color = m_color;
}

void SquareShape::SetSize(glm::vec2& _size)
{
	m_size = _size;

	// compute new array
	m_vertex[0] = -1*_size.x / 2.0f;
	m_vertex[1] = -1*_size.y / 2.0f;
	m_vertex[2] = 0.0f, 
	m_vertex[3] = 1.0f;

	m_vertex[4] = _size.x / 2.0f;
	m_vertex[5] = -1*_size.y / 2.0f;
	m_vertex[6] = 0.0f, 
	m_vertex[7] = 1.0f;

	m_vertex[8] = -1*_size.x / 2.0f;
	m_vertex[9] = _size.y / 2.0f;
	m_vertex[10] = 0.0f, 
	m_vertex[11] = 1.0f;

	m_vertex[12] = _size.x / 2.0f;
	m_vertex[13] = _size.y / 2.0f;
	m_vertex[14] = 0.0f, 
	m_vertex[15] = 1.0f;

	m_isDirty = true;
}

void SquareShape::SetColor(glm::vec4& _color)
{
	m_color = _color;

	m_vertex[16] = _color.r;
	m_vertex[17] = _color.g;
	m_vertex[18] = _color.b;
	m_vertex[19] = _color.a;

	m_vertex[20] = _color.r;
	m_vertex[21] = _color.g;
	m_vertex[22] = _color.b;
	m_vertex[23] = _color.a;

	m_vertex[24] = _color.r;
	m_vertex[25] = _color.g;
	m_vertex[26] = _color.b;
	m_vertex[27] = _color.a;

	m_vertex[28] = _color.r;
	m_vertex[29] = _color.g;
	m_vertex[30] = _color.b; 
	m_vertex[31] = _color.a;

	m_isDirty = true;
}

void SquareShape::SetAlpha(natF32 _alpha)
{
	m_vertex[19] = _alpha;
	m_vertex[23] = _alpha;
	m_vertex[27] = _alpha;
	m_vertex[21] = _alpha;

	m_isDirty = true;
}

void SquareShape::SetTextureCoordinate(natF32 _repeat)
{
	m_vertex[32] = 0.f;
	m_vertex[33] = 0.f;

	m_vertex[34] = _repeat;
	m_vertex[35] = 0.f;

	m_vertex[36] = 0.f;
	m_vertex[37] = _repeat;

	m_vertex[38] = _repeat;
	m_vertex[39] = _repeat;

	m_isDirty= true;
}

natF32* SquareShape::GetVertex(size_t &_size)
{
	_size = sizeof(m_vertex);
	return m_vertex;
}



}