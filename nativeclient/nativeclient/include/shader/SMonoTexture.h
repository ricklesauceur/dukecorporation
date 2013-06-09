#include <string>

const std::string strMonoTextureVertex(
	"#version 330\n"
	"\n"
	"\n"
	"layout(std140) uniform GlobalMatrices\n"
	"{\n"
	"    mat4 cameraToClip;\n"
	"    mat4 worldToCamera;\n"
	"};\n"
	"\n"
	"uniform mat4 modelToWorld;\n"
	"\n"
	"layout(location = 0) in vec4 position;\n"
	"layout(location = 1) in vec4 color;\n"
	"layout(location = 2) in vec2 inputTexCoord;\n"
	"\n"
	"smooth out vec4 fragmentColor;\n"
	"smooth out vec2 baseTexCoord;\n"
	"\n"
	"void main()\n"
	"{\n"
	"	//vec4 temp = modelToWorld * position;\n"
	"	//temp = worldToCamera * temp;\n"
	"	//gl_Position = cameraToClip * temp;\n"
	"	//gl_Position = modelToWorld * worldToCamera * cameraToClip * position;\n"
	"	gl_Position = cameraToClip * worldToCamera * modelToWorld * position;\n"
	"\n"
	"	fragmentColor = color;\n"
	"	baseTexCoord = inputTexCoord;\n"
	"}\n"
);


const std::string strMonoTextureFragment(
	"#version 330\n"
	"\n"
	"\n"
	"smooth in vec2 baseTexCoord;\n"
	"smooth in vec4 fragmentColor;\n"
	"uniform sampler2D baseTexture;\n"
	"\n"
	"out vec4 outputColor;\n"
	"\n"
	"void main()\n"
	"{\n"
	"\n"
	"	outputColor = fragmentColor * texture(baseTexture, baseTexCoord);\n"
	"}\n"
);
