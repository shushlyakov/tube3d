define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.property$2=_exports.property$1=_exports.property=property;_exports.removeNodesFromTemplate=removeNodesFromTemplate;_exports.insertNodeIntoTemplate=insertNodeIntoTemplate;_exports.templateFactory$1=_exports.templateFactory=templateFactory;_exports.ArrayCamera=ArrayCamera;_exports.Camera=Camera;_exports.OrthographicCamera=OrthographicCamera;_exports.PerspectiveCamera=PerspectiveCamera;_exports.Float64BufferAttribute=Float64BufferAttribute;_exports.Float32BufferAttribute=Float32BufferAttribute;_exports.Uint32BufferAttribute=Uint32BufferAttribute;_exports.Int32BufferAttribute=Int32BufferAttribute;_exports.Uint16BufferAttribute=Uint16BufferAttribute;_exports.Int16BufferAttribute=Int16BufferAttribute;_exports.Uint8ClampedBufferAttribute=Uint8ClampedBufferAttribute;_exports.Uint8BufferAttribute=Uint8BufferAttribute;_exports.Int8BufferAttribute=Int8BufferAttribute;_exports.BufferAttribute=BufferAttribute;_exports.BufferGeometry=BufferGeometry;_exports.DirectGeometry=DirectGeometry;_exports.EventDispatcher=EventDispatcher;_exports.Face3=Face3;_exports.Geometry=Geometry;_exports.Layers=Layers;_exports.Object3D=Object3D;_exports.Raycaster=Raycaster;_exports.Curve=Curve;_exports.CurvePath=CurvePath;_exports.CatmullRom=CatmullRom;_exports.QuadraticBezier=QuadraticBezier;_exports.CubicBezier=CubicBezier;_exports.Path=Path;_exports.Shape=Shape;_exports.ArcCurve$1=_exports.ArcCurve=ArcCurve;_exports.CatmullRomCurve3$1=_exports.CatmullRomCurve3=CatmullRomCurve3;_exports.CubicBezierCurve$1=_exports.CubicBezierCurve=CubicBezierCurve;_exports.CubicBezierCurve3$1=_exports.CubicBezierCurve3=CubicBezierCurve3;_exports.EllipseCurve$1=_exports.EllipseCurve=EllipseCurve;_exports.LineCurve$1=_exports.LineCurve=LineCurve;_exports.LineCurve3$1=_exports.LineCurve3=LineCurve3;_exports.QuadraticBezierCurve$1=_exports.QuadraticBezierCurve=QuadraticBezierCurve;_exports.QuadraticBezierCurve3$1=_exports.QuadraticBezierCurve3=QuadraticBezierCurve3;_exports.SplineCurve$1=_exports.SplineCurve=SplineCurve;_exports.BoxGeometry$1=_exports.BoxGeometry=BoxGeometry;_exports.BoxBufferGeometry$1=_exports.BoxBufferGeometry=BoxBufferGeometry;_exports.CircleGeometry$1=_exports.CircleGeometry=CircleGeometry;_exports.CircleBufferGeometry$1=_exports.CircleBufferGeometry=CircleBufferGeometry;_exports.ConeGeometry$1=_exports.ConeGeometry=ConeGeometry;_exports.ConeBufferGeometry$1=_exports.ConeBufferGeometry=ConeBufferGeometry;_exports.CylinderGeometry$1=_exports.CylinderGeometry=CylinderGeometry;_exports.CylinderBufferGeometry$1=_exports.CylinderBufferGeometry=CylinderBufferGeometry;_exports.DodecahedronGeometry$1=_exports.DodecahedronGeometry=DodecahedronGeometry;_exports.DodecahedronBufferGeometry$1=_exports.DodecahedronBufferGeometry=DodecahedronBufferGeometry;_exports.EdgesGeometry$1=_exports.EdgesGeometry=EdgesGeometry;_exports.ExtrudeGeometry$1=_exports.ExtrudeGeometry=ExtrudeGeometry;_exports.ExtrudeBufferGeometry$1=_exports.ExtrudeBufferGeometry=ExtrudeBufferGeometry;_exports.WireframeGeometry$1=_exports.WireframeGeometry=WireframeGeometry;_exports.ParametricGeometry$1=_exports.ParametricGeometry=ParametricGeometry;_exports.ParametricBufferGeometry$1=_exports.ParametricBufferGeometry=ParametricBufferGeometry;_exports.TetrahedronGeometry$1=_exports.TetrahedronGeometry=TetrahedronGeometry;_exports.TetrahedronBufferGeometry$1=_exports.TetrahedronBufferGeometry=TetrahedronBufferGeometry;_exports.OctahedronGeometry$1=_exports.OctahedronGeometry=OctahedronGeometry;_exports.OctahedronBufferGeometry$1=_exports.OctahedronBufferGeometry=OctahedronBufferGeometry;_exports.IcosahedronGeometry$1=_exports.IcosahedronGeometry=IcosahedronGeometry;_exports.IcosahedronBufferGeometry$1=_exports.IcosahedronBufferGeometry=IcosahedronBufferGeometry;_exports.PolyhedronGeometry$1=_exports.PolyhedronGeometry=PolyhedronGeometry;_exports.PolyhedronBufferGeometry$1=_exports.PolyhedronBufferGeometry=PolyhedronBufferGeometry;_exports.TubeGeometry$1=_exports.TubeGeometry=TubeGeometry;_exports.TubeBufferGeometry$1=_exports.TubeBufferGeometry=TubeBufferGeometry;_exports.TorusKnotGeometry$1=_exports.TorusKnotGeometry=TorusKnotGeometry;_exports.TorusKnotBufferGeometry$1=_exports.TorusKnotBufferGeometry=TorusKnotBufferGeometry;_exports.TorusGeometry$1=_exports.TorusGeometry=TorusGeometry;_exports.TorusBufferGeometry$1=_exports.TorusBufferGeometry=TorusBufferGeometry;_exports.TextGeometry$1=_exports.TextGeometry=TextGeometry;_exports.TextBufferGeometry$1=_exports.TextBufferGeometry=TextBufferGeometry;_exports.SphereGeometry$1=_exports.SphereGeometry=SphereGeometry;_exports.SphereBufferGeometry$1=_exports.SphereBufferGeometry=SphereBufferGeometry;_exports.RingGeometry$1=_exports.RingGeometry=RingGeometry;_exports.RingBufferGeometry$1=_exports.RingBufferGeometry=RingBufferGeometry;_exports.PlaneGeometry$1=_exports.PlaneGeometry=PlaneGeometry;_exports.PlaneBufferGeometry$1=_exports.PlaneBufferGeometry=PlaneBufferGeometry;_exports.LatheGeometry$1=_exports.LatheGeometry=LatheGeometry;_exports.LatheBufferGeometry$1=_exports.LatheBufferGeometry=LatheBufferGeometry;_exports.ShapeGeometry$1=_exports.ShapeGeometry=ShapeGeometry;_exports.ShapeBufferGeometry$1=_exports.ShapeBufferGeometry=ShapeBufferGeometry;_exports.AxesHelper=AxesHelper;_exports.DirectionalLight=DirectionalLight;_exports.DirectionalLightShadow=DirectionalLightShadow;_exports.Light=Light;_exports.LightShadow=LightShadow;_exports.LineBasicMaterial=LineBasicMaterial;_exports.Material=Material;_exports.MeshBasicMaterial=MeshBasicMaterial;_exports.MeshDepthMaterial=MeshDepthMaterial;_exports.MeshDistanceMaterial=MeshDistanceMaterial;_exports.MeshPhongMaterial=MeshPhongMaterial;_exports.ShaderMaterial=ShaderMaterial;_exports.Box3=Box3;_exports.Color=Color;_exports.Euler=Euler;_exports.Frustum=Frustum;_exports.Matrix3=Matrix3;_exports.Matrix4=Matrix4;_exports.Plane=Plane;_exports.Quaternion=Quaternion;_exports.Ray=Ray;_exports.Sphere=Sphere;_exports.Spherical=Spherical;_exports.Triangle=Triangle;_exports.Vector2=Vector2;_exports.Vector3=Vector3;_exports.Vector4=Vector4;_exports.Group=Group;_exports.Line=Line;_exports.LineSegments=LineSegments;_exports.Mesh=Mesh;_exports.WebGLRenderTarget=WebGLRenderTarget;_exports.WebGLRenderer=WebGLRenderer;_exports.cloneUniforms=cloneUniforms;_exports.mergeUniforms=mergeUniforms;_exports.WebGLAnimation=WebGLAnimation;_exports.WebGLAttributes=WebGLAttributes;_exports.WebGLBackground=WebGLBackground;_exports.WebGLBufferRenderer=WebGLBufferRenderer;_exports.WebGLCapabilities=WebGLCapabilities;_exports.WebGLClipping=WebGLClipping;_exports.WebGLExtensions=WebGLExtensions;_exports.WebGLGeometries=WebGLGeometries;_exports.WebGLIndexedBufferRenderer=WebGLIndexedBufferRenderer;_exports.WebGLInfo=WebGLInfo;_exports.WebGLLights=WebGLLights;_exports.WebGLMorphtargets=WebGLMorphtargets;_exports.WebGLObjects=WebGLObjects;_exports.WebGLProgram=WebGLProgram;_exports.WebGLPrograms=WebGLPrograms;_exports.WebGLProperties=WebGLProperties;_exports.WebGLRenderLists=WebGLRenderLists;_exports.WebGLRenderStates=WebGLRenderStates;_exports.WebGLShader=WebGLShader;_exports.WebGLShadowMap=WebGLShadowMap;_exports.WebGLState=WebGLState;_exports.WebGLTextures=WebGLTextures;_exports.WebGLUniforms=WebGLUniforms;_exports.WebGLUtils=WebGLUtils;_exports.WebVRManager=WebVRManager;_exports.setProjectionFromUnion=setProjectionFromUnion;_exports.WebXRManager=WebXRManager;_exports.Scene=Scene;_exports.CubeTexture=CubeTexture;_exports.DataTexture=DataTexture;_exports.DataTexture3D=DataTexture3D;_exports.Texture=Texture;_exports.arrayMin=arrayMin;_exports.arrayMax=arrayMax;_exports.$OrbitControlsDefault=OrbitControls;_exports.$Vector3=_exports.$Vector2=_exports.$Triangle=_exports.$Spherical=_exports.$Sphere=_exports.$Ray=_exports.$Quaternion=_exports.$Plane=_exports.$Matrix4=_exports.$Matrix3=_exports.$Math=_exports.$Frustum=_exports.$Euler=_exports.$Color=_exports.$Box3=_exports.$ShaderMaterial=_exports.$MeshPhongMaterial=_exports.$MeshDistanceMaterial=_exports.$MeshDepthMaterial=_exports.$MeshBasicMaterial=_exports.$Material=_exports.$LineBasicMaterial=_exports.$LightShadow=_exports.$Light=_exports.$DirectionalLightShadow=_exports.$DirectionalLight=_exports.$AxesHelper=_exports.$WireframeGeometry=_exports.$TubeGeometry=_exports.$TorusKnotGeometry=_exports.$TorusGeometry=_exports.$TextGeometry=_exports.$TetrahedronGeometry=_exports.$SphereGeometry=_exports.$ShapeGeometry=_exports.$RingGeometry=_exports.$PolyhedronGeometry=_exports.$PlaneGeometry=_exports.$ParametricGeometry=_exports.$OctahedronGeometry=_exports.$LatheGeometry=_exports.$IcosahedronGeometry=_exports.$Geometries=_exports.$ExtrudeGeometry=_exports.$EdgesGeometry=_exports.$DodecahedronGeometry=_exports.$CylinderGeometry=_exports.$ConeGeometry=_exports.$CircleGeometry=_exports.$BoxGeometry=_exports.$SplineCurve=_exports.$QuadraticBezierCurve3=_exports.$QuadraticBezierCurve=_exports.$LineCurve3=_exports.$LineCurve=_exports.$EllipseCurve=_exports.$Curves=_exports.$CubicBezierCurve3=_exports.$CubicBezierCurve=_exports.$CatmullRomCurve3=_exports.$ArcCurve=_exports.$Shape=_exports.$Path=_exports.$Interpolations=_exports.$CurvePath=_exports.$Curve=_exports.$ShapeUtils=_exports.$ImageUtils=_exports.$Earcut=_exports.$Raycaster=_exports.$Object3D=_exports.$Layers=_exports.$Geometry=_exports.$Face3=_exports.$EventDispatcher=_exports.$DirectGeometry=_exports.$BufferGeometry=_exports.$BufferAttribute=_exports.$constants=_exports.$PerspectiveCamera=_exports.$OrthographicCamera=_exports.$Camera=_exports.$ArrayCamera=_exports.$litHtml=_exports.$template=_exports.$templateResult=_exports.$templateInstance=_exports.$templateFactory=_exports.$shadyRender=_exports.$render=_exports.$parts=_exports.$part=_exports.$modifyTemplate=_exports.$dom=_exports.$directive=_exports.$defaultTemplateProcessor=_exports.$litElement=_exports.$updatingElement=_exports.$decorators=_exports.$cssTag=void 0;_exports.$backgroundVertGlsl=_exports.$backgroundFragGlsl=_exports.$ShaderLib=_exports.$worldposVertexGlsl=_exports.$uvVertexGlsl=_exports.$uvParsVertexGlsl=_exports.$uvParsFragmentGlsl=_exports.$uv2VertexGlsl=_exports.$uv2ParsVertexGlsl=_exports.$uv2ParsFragmentGlsl=_exports.$tonemappingParsFragmentGlsl=_exports.$tonemappingFragmentGlsl=_exports.$specularmapParsFragmentGlsl=_exports.$specularmapFragmentGlsl=_exports.$skinnormalVertexGlsl=_exports.$skinningVertexGlsl=_exports.$skinningParsVertexGlsl=_exports.$skinbaseVertexGlsl=_exports.$shadowmaskParsFragmentGlsl=_exports.$shadowmapVertexGlsl=_exports.$shadowmapParsVertexGlsl=_exports.$shadowmapParsFragmentGlsl=_exports.$roughnessmapParsFragmentGlsl=_exports.$roughnessmapFragmentGlsl=_exports.$projectVertexGlsl=_exports.$premultipliedAlphaFragmentGlsl=_exports.$packingGlsl=_exports.$normalmapParsFragmentGlsl=_exports.$normalFragmentMapsGlsl=_exports.$normalFragmentBeginGlsl=_exports.$morphtargetVertexGlsl=_exports.$morphtargetParsVertexGlsl=_exports.$morphnormalVertexGlsl=_exports.$metalnessmapParsFragmentGlsl=_exports.$metalnessmapFragmentGlsl=_exports.$mapParticleParsFragmentGlsl=_exports.$mapParticleFragmentGlsl=_exports.$mapParsFragmentGlsl=_exports.$mapFragmentGlsl=_exports.$logdepthbufVertexGlsl=_exports.$logdepthbufParsVertexGlsl=_exports.$logdepthbufParsFragmentGlsl=_exports.$logdepthbufFragmentGlsl=_exports.$lightsPhysicalParsFragmentGlsl=_exports.$lightsPhysicalFragmentGlsl=_exports.$lightsPhongParsFragmentGlsl=_exports.$lightsPhongFragmentGlsl=_exports.$lightsParsBeginGlsl=_exports.$lightsLambertVertexGlsl=_exports.$lightsFragmentMapsGlsl=_exports.$lightsFragmentEndGlsl=_exports.$lightsFragmentBeginGlsl=_exports.$lightmapParsFragmentGlsl=_exports.$lightmapFragmentGlsl=_exports.$gradientmapParsFragmentGlsl=_exports.$fogVertexGlsl=_exports.$fogParsVertexGlsl=_exports.$fogParsFragmentGlsl=_exports.$fogFragmentGlsl=_exports.$envmapVertexGlsl=_exports.$envmapPhysicalParsFragmentGlsl=_exports.$envmapParsVertexGlsl=_exports.$envmapParsFragmentGlsl=_exports.$envmapFragmentGlsl=_exports.$encodingsParsFragmentGlsl=_exports.$encodingsFragmentGlsl=_exports.$emissivemapParsFragmentGlsl=_exports.$emissivemapFragmentGlsl=_exports.$ditheringParsFragmentGlsl=_exports.$ditheringFragmentGlsl=_exports.$displacementmapVertexGlsl=_exports.$displacementmapParsVertexGlsl=_exports.$defaultnormalVertexGlsl=_exports.$cubeUvReflectionFragmentGlsl=_exports.$commonGlsl=_exports.$colorVertexGlsl=_exports.$colorParsVertexGlsl=_exports.$colorParsFragmentGlsl=_exports.$colorFragmentGlsl=_exports.$clippingPlanesVertexGlsl=_exports.$clippingPlanesParsVertexGlsl=_exports.$clippingPlanesParsFragmentGlsl=_exports.$clippingPlanesFragmentGlsl=_exports.$bumpmapParsFragmentGlsl=_exports.$bsdfsGlsl=_exports.$beginnormalVertexGlsl=_exports.$beginVertexGlsl=_exports.$aomapParsFragmentGlsl=_exports.$aomapFragmentGlsl=_exports.$alphatestFragmentGlsl=_exports.$alphamapParsFragmentGlsl=_exports.$alphamapFragmentGlsl=_exports.$ShaderChunk=_exports.$WebGLRenderer=_exports.$WebGLRenderTarget=_exports.$Mesh=_exports.$LineSegments=_exports.$Line=_exports.$Group=_exports.$Vector4=void 0;_exports.UpdatingElement=_exports.notEqual$2=_exports.notEqual$1=_exports.notEqual=_exports.defaultConverter$2=_exports.defaultConverter$1=_exports.defaultConverter=_exports.eventOptions$2=_exports.eventOptions$1=_exports.eventOptions=_exports.queryAll$2=_exports.queryAll$1=_exports.queryAll=_exports.query$2=_exports.query$1=_exports.query=_exports.customElement$2=_exports.customElement$1=_exports.customElement=_exports.css$2=_exports.css$1=_exports.css=_exports.unsafeCSS$2=_exports.unsafeCSS$1=_exports.unsafeCSS=_exports.CSSResult$2=_exports.CSSResult$1=_exports.CSSResult=_exports.supportsAdoptingStyleSheets$2=_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=_exports.$iconset=_exports.$baseElement=_exports.$viewPanel=_exports.$Tube=_exports.$SimpleMaterial=_exports.$OrbitControls=_exports.$utils=_exports.$Texture=_exports.$DataTexture3D=_exports.$DataTexture=_exports.$CubeTexture=_exports.$Scene=_exports.$WebXRManager=_exports.$WebVRUtils=_exports.$WebVRManager=_exports.$WebGLUtils=_exports.$WebGLUniforms=_exports.$WebGLTextures=_exports.$WebGLState=_exports.$WebGLShadowMap=_exports.$WebGLShader=_exports.$WebGLRenderStates=_exports.$WebGLRenderLists=_exports.$WebGLProperties=_exports.$WebGLPrograms=_exports.$WebGLProgram=_exports.$WebGLObjects=_exports.$WebGLMorphtargets=_exports.$WebGLLights=_exports.$WebGLInfo=_exports.$WebGLIndexedBufferRenderer=_exports.$WebGLGeometries=_exports.$WebGLExtensions=_exports.$WebGLClipping=_exports.$WebGLCapabilities=_exports.$WebGLBufferRenderer=_exports.$WebGLBackground=_exports.$WebGLAttributes=_exports.$WebGLAnimation=_exports.$UniformsUtils=_exports.$UniformsLib=_exports.$spriteVertGlsl=_exports.$spriteFragGlsl=_exports.$shadowVertGlsl=_exports.$shadowFragGlsl=_exports.$pointsVertGlsl=_exports.$pointsFragGlsl=_exports.$normalVertGlsl=_exports.$normalFragGlsl=_exports.$meshphysicalVertGlsl=_exports.$meshphysicalFragGlsl=_exports.$meshphongVertGlsl=_exports.$meshphongFragGlsl=_exports.$meshmatcapVertGlsl=_exports.$meshmatcapFragGlsl=_exports.$meshlambertVertGlsl=_exports.$meshlambertFragGlsl=_exports.$meshbasicVertGlsl=_exports.$meshbasicFragGlsl=_exports.$linedashedVertGlsl=_exports.$linedashedFragGlsl=_exports.$equirectVertGlsl=_exports.$equirectFragGlsl=_exports.$distanceRGBAVertGlsl=_exports.$distanceRGBAFragGlsl=_exports.$depthVertGlsl=_exports.$depthFragGlsl=_exports.$cubeVertGlsl=_exports.$cubeFragGlsl=void 0;_exports.AddEquation=_exports.CustomBlending=_exports.MultiplyBlending=_exports.SubtractiveBlending=_exports.AdditiveBlending=_exports.NormalBlending=_exports.NoBlending=_exports.VertexColors=_exports.FaceColors=_exports.NoColors=_exports.SmoothShading=_exports.FlatShading=_exports.DoubleSide=_exports.BackSide=_exports.FrontSide=_exports.PCFSoftShadowMap=_exports.PCFShadowMap=_exports.BasicShadowMap=_exports.FrontFaceDirectionCCW=_exports.FrontFaceDirectionCW=_exports.CullFaceFrontBack=_exports.CullFaceFront=_exports.CullFaceBack=_exports.CullFaceNone=_exports.MOUSE=_exports.REVISION=_exports.lastAttributeNameRegex=_exports.createMarker$1=_exports.createMarker=_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=_exports.Template$1=_exports.Template=_exports.boundAttributeSuffix=_exports.markerRegex=_exports.nodeMarker=_exports.marker=_exports.TemplateInstance$1=_exports.TemplateInstance=_exports.templateCaches$1=_exports.templateCaches=_exports.render$1=_exports.render$2=_exports.render=_exports.parts$1=_exports.parts=_exports.EventPart$1=_exports.EventPart=_exports.PropertyPart$1=_exports.PropertyPart=_exports.PropertyCommitter$1=_exports.PropertyCommitter=_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=_exports.NodePart$1=_exports.NodePart=_exports.AttributePart$1=_exports.AttributePart=_exports.AttributeCommitter$1=_exports.AttributeCommitter=_exports.isPrimitive$1=_exports.isPrimitive=_exports.nothing$1=_exports.nothing=_exports.noChange$1=_exports.noChange=_exports.removeNodes$1=_exports.removeNodes=_exports.reparentNodes$1=_exports.reparentNodes=_exports.isCEPolyfill=_exports.isDirective$1=_exports.isDirective=_exports.directive$1=_exports.directive=_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=_exports.LitElement$1=_exports.LitElement=_exports.SVGTemplateResult$3=_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=_exports.TemplateResult$4=_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=_exports.svg$3=_exports.svg$2=_exports.svg$1=_exports.svg=_exports.html$3=_exports.html$2=_exports.html$1=_exports.html=_exports.UpdatingElement$2=_exports.UpdatingElement$1=void 0;_exports.ZeroCurvatureEnding=_exports.InterpolateSmooth=_exports.InterpolateLinear=_exports.InterpolateDiscrete=_exports.LoopPingPong=_exports.LoopRepeat=_exports.LoopOnce=_exports.RGBA_ASTC_12x12_Format=_exports.RGBA_ASTC_12x10_Format=_exports.RGBA_ASTC_10x10_Format=_exports.RGBA_ASTC_10x8_Format=_exports.RGBA_ASTC_10x6_Format=_exports.RGBA_ASTC_10x5_Format=_exports.RGBA_ASTC_8x8_Format=_exports.RGBA_ASTC_8x6_Format=_exports.RGBA_ASTC_8x5_Format=_exports.RGBA_ASTC_6x6_Format=_exports.RGBA_ASTC_6x5_Format=_exports.RGBA_ASTC_5x5_Format=_exports.RGBA_ASTC_5x4_Format=_exports.RGBA_ASTC_4x4_Format=_exports.RGB_ETC1_Format=_exports.RGBA_PVRTC_2BPPV1_Format=_exports.RGBA_PVRTC_4BPPV1_Format=_exports.RGB_PVRTC_2BPPV1_Format=_exports.RGB_PVRTC_4BPPV1_Format=_exports.RGBA_S3TC_DXT5_Format=_exports.RGBA_S3TC_DXT3_Format=_exports.RGBA_S3TC_DXT1_Format=_exports.RGB_S3TC_DXT1_Format=_exports.RedFormat=_exports.DepthStencilFormat=_exports.DepthFormat=_exports.RGBEFormat=_exports.LuminanceAlphaFormat=_exports.LuminanceFormat=_exports.RGBAFormat=_exports.RGBFormat=_exports.AlphaFormat=_exports.UnsignedInt248Type=_exports.UnsignedShort565Type=_exports.UnsignedShort5551Type=_exports.UnsignedShort4444Type=_exports.HalfFloatType=_exports.FloatType=_exports.UnsignedIntType=_exports.IntType=_exports.UnsignedShortType=_exports.ShortType=_exports.ByteType=_exports.UnsignedByteType=_exports.LinearMipMapLinearFilter=_exports.LinearMipMapNearestFilter=_exports.LinearFilter=_exports.NearestMipMapLinearFilter=_exports.NearestMipMapNearestFilter=_exports.NearestFilter=_exports.MirroredRepeatWrapping=_exports.ClampToEdgeWrapping=_exports.RepeatWrapping=_exports.CubeUVRefractionMapping=_exports.CubeUVReflectionMapping=_exports.SphericalReflectionMapping=_exports.EquirectangularRefractionMapping=_exports.EquirectangularReflectionMapping=_exports.CubeRefractionMapping=_exports.CubeReflectionMapping=_exports.UVMapping=_exports.ACESFilmicToneMapping=_exports.CineonToneMapping=_exports.Uncharted2ToneMapping=_exports.ReinhardToneMapping=_exports.LinearToneMapping=_exports.NoToneMapping=_exports.AddOperation=_exports.MixOperation=_exports.MultiplyOperation=_exports.NotEqualDepth=_exports.GreaterDepth=_exports.GreaterEqualDepth=_exports.EqualDepth=_exports.LessEqualDepth=_exports.LessDepth=_exports.AlwaysDepth=_exports.NeverDepth=_exports.SrcAlphaSaturateFactor=_exports.OneMinusDstColorFactor=_exports.DstColorFactor=_exports.OneMinusDstAlphaFactor=_exports.DstAlphaFactor=_exports.OneMinusSrcAlphaFactor=_exports.SrcAlphaFactor=_exports.OneMinusSrcColorFactor=_exports.SrcColorFactor=_exports.OneFactor=_exports.ZeroFactor=_exports.MaxEquation=_exports.MinEquation=_exports.ReverseSubtractEquation=_exports.SubtractEquation=void 0;_exports.$skinnormalVertexGlslDefault=_exports.$skinningVertexGlslDefault=_exports.$skinningParsVertexGlslDefault=_exports.$skinbaseVertexGlslDefault=_exports.$shadowmaskParsFragmentGlslDefault=_exports.$shadowmapVertexGlslDefault=_exports.$shadowmapParsVertexGlslDefault=_exports.$shadowmapParsFragmentGlslDefault=_exports.$roughnessmapParsFragmentGlslDefault=_exports.$roughnessmapFragmentGlslDefault=_exports.$projectVertexGlslDefault=_exports.$premultipliedAlphaFragmentGlslDefault=_exports.$packingGlslDefault=_exports.$normalmapParsFragmentGlslDefault=_exports.$normalFragmentMapsGlslDefault=_exports.$normalFragmentBeginGlslDefault=_exports.$morphtargetVertexGlslDefault=_exports.$morphtargetParsVertexGlslDefault=_exports.$morphnormalVertexGlslDefault=_exports.$metalnessmapParsFragmentGlslDefault=_exports.$metalnessmapFragmentGlslDefault=_exports.$mapParticleParsFragmentGlslDefault=_exports.$mapParticleFragmentGlslDefault=_exports.$mapParsFragmentGlslDefault=_exports.$mapFragmentGlslDefault=_exports.$logdepthbufVertexGlslDefault=_exports.$logdepthbufParsVertexGlslDefault=_exports.$logdepthbufParsFragmentGlslDefault=_exports.$logdepthbufFragmentGlslDefault=_exports.$lightsPhysicalParsFragmentGlslDefault=_exports.$lightsPhysicalFragmentGlslDefault=_exports.$lightsPhongParsFragmentGlslDefault=_exports.$lightsPhongFragmentGlslDefault=_exports.$lightsParsBeginGlslDefault=_exports.$lightsLambertVertexGlslDefault=_exports.$lightsFragmentMapsGlslDefault=_exports.$lightsFragmentEndGlslDefault=_exports.$lightsFragmentBeginGlslDefault=_exports.$lightmapParsFragmentGlslDefault=_exports.$lightmapFragmentGlslDefault=_exports.$gradientmapParsFragmentGlslDefault=_exports.$fogVertexGlslDefault=_exports.$fogParsVertexGlslDefault=_exports.$fogParsFragmentGlslDefault=_exports.$fogFragmentGlslDefault=_exports.$envmapVertexGlslDefault=_exports.$envmapPhysicalParsFragmentGlslDefault=_exports.$envmapParsVertexGlslDefault=_exports.$envmapParsFragmentGlslDefault=_exports.$envmapFragmentGlslDefault=_exports.$encodingsParsFragmentGlslDefault=_exports.$encodingsFragmentGlslDefault=_exports.$emissivemapParsFragmentGlslDefault=_exports.$emissivemapFragmentGlslDefault=_exports.$ditheringParsFragmentGlslDefault=_exports.$ditheringFragmentGlslDefault=_exports.$displacementmapVertexGlslDefault=_exports.$displacementmapParsVertexGlslDefault=_exports.$defaultnormalVertexGlslDefault=_exports.$cubeUvReflectionFragmentGlslDefault=_exports.$commonGlslDefault=_exports.$colorVertexGlslDefault=_exports.$colorParsVertexGlslDefault=_exports.$colorParsFragmentGlslDefault=_exports.$colorFragmentGlslDefault=_exports.$clippingPlanesVertexGlslDefault=_exports.$clippingPlanesParsVertexGlslDefault=_exports.$clippingPlanesParsFragmentGlslDefault=_exports.$clippingPlanesFragmentGlslDefault=_exports.$bumpmapParsFragmentGlslDefault=_exports.$bsdfsGlslDefault=_exports.$beginnormalVertexGlslDefault=_exports.$beginVertexGlslDefault=_exports.$aomapParsFragmentGlslDefault=_exports.$aomapFragmentGlslDefault=_exports.$alphatestFragmentGlslDefault=_exports.$alphamapParsFragmentGlslDefault=_exports.$alphamapFragmentGlslDefault=_exports.ShaderChunk=_exports._Math=_exports.ShapeUtils=_exports.ImageUtils=_exports.Earcut=_exports.ObjectSpaceNormalMap=_exports.TangentSpaceNormalMap=_exports.RGBADepthPacking=_exports.BasicDepthPacking=_exports.RGBDEncoding=_exports.RGBM16Encoding=_exports.RGBM7Encoding=_exports.LogLuvEncoding=_exports.RGBEEncoding=_exports.GammaEncoding=_exports.sRGBEncoding=_exports.LinearEncoding=_exports.TriangleFanDrawMode=_exports.TriangleStripDrawMode=_exports.TrianglesDrawMode=_exports.WrapAroundEnding=_exports.ZeroSlopeEnding=void 0;_exports.save=_exports.add=_exports.BaseElement=_exports.ViewPanel=_exports.Tube=_exports.SimpleMaterial=_exports.UniformsUtils=_exports.UniformsLib=_exports.$spriteVertGlslDefault=_exports.$spriteFragGlslDefault=_exports.$shadowVertGlslDefault=_exports.$shadowFragGlslDefault=_exports.$pointsVertGlslDefault=_exports.$pointsFragGlslDefault=_exports.$normalVertGlslDefault=_exports.$normalFragGlslDefault=_exports.$meshphysicalVertGlslDefault=_exports.$meshphysicalFragGlslDefault=_exports.$meshphongVertGlslDefault=_exports.$meshphongFragGlslDefault=_exports.$meshmatcapVertGlslDefault=_exports.$meshmatcapFragGlslDefault=_exports.$meshlambertVertGlslDefault=_exports.$meshlambertFragGlslDefault=_exports.$meshbasicVertGlslDefault=_exports.$meshbasicFragGlslDefault=_exports.$linedashedVertGlslDefault=_exports.$linedashedFragGlslDefault=_exports.$equirectVertGlslDefault=_exports.$equirectFragGlslDefault=_exports.$distanceRGBAVertGlslDefault=_exports.$distanceRGBAFragGlslDefault=_exports.$depthVertGlslDefault=_exports.$depthFragGlslDefault=_exports.$cubeVertGlslDefault=_exports.$cubeFragGlslDefault=_exports.$backgroundVertGlslDefault=_exports.$backgroundFragGlslDefault=_exports.ShaderLib=_exports.$worldposVertexGlslDefault=_exports.$uvVertexGlslDefault=_exports.$uvParsVertexGlslDefault=_exports.$uvParsFragmentGlslDefault=_exports.$uv2VertexGlslDefault=_exports.$uv2ParsVertexGlslDefault=_exports.$uv2ParsFragmentGlslDefault=_exports.$tonemappingParsFragmentGlslDefault=_exports.$tonemappingFragmentGlslDefault=_exports.$specularmapParsFragmentGlslDefault=_exports.$specularmapFragmentGlslDefault=void 0;var _Mathtan=Math.tan,_Mathatan2=Math.atan,_Mathround=Math.round,_Mathacos=Math.acos,_Mathabs=Math.abs,_Mathcos=Math.cos,_Mathsin=Math.sin,_Mathatan=Math.atan2,_Mathsqrt=Math.sqrt,_NumberEPSILON=Number.EPSILON,_Mathpow=Math.pow,_Mathceil=Math.ceil,_MathLN=Math.LN2,_Mathlog=Math.log,_Mathfloor=Math.floor,_Mathmax=Math.max,_Mathmin=Math.min,_MathPI=Math.PI;const supportsAdoptingStyleSheets="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;_exports.supportsAdoptingStyleSheets$2=_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=supportsAdoptingStyleSheets;const constructionToken=Symbol();class CSSResult{constructor(cssText,safeToken){if(safeToken!==constructionToken){throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.")}this.cssText=cssText}get styleSheet(){if(this._styleSheet===void 0){if(supportsAdoptingStyleSheets){this._styleSheet=new CSSStyleSheet;this._styleSheet.replaceSync(this.cssText)}else{this._styleSheet=null}}return this._styleSheet}toString(){return this.cssText}}_exports.CSSResult$2=_exports.CSSResult$1=_exports.CSSResult=CSSResult;const unsafeCSS=value=>{return new CSSResult(value+"",constructionToken)};_exports.unsafeCSS$2=_exports.unsafeCSS$1=_exports.unsafeCSS=unsafeCSS;const textFromCSSResult=value=>{if(value instanceof CSSResult){return value.cssText}else{throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)}},css=(strings,...values)=>{const cssText=values.reduce((acc,v,idx)=>acc+textFromCSSResult(v)+strings[idx+1],strings[0]);return new CSSResult(cssText,constructionToken)};_exports.css$2=_exports.css$1=_exports.css=css;var cssTag={supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};_exports.$cssTag=cssTag;const legacyCustomElement=(tagName,clazz)=>{window.customElements.define(tagName,clazz);return clazz},standardCustomElement=(tagName,descriptor)=>{const{kind,elements}=descriptor;return{kind,elements,finisher(clazz){window.customElements.define(tagName,clazz)}}},customElement=tagName=>classOrDescriptor=>"function"===typeof classOrDescriptor?legacyCustomElement(tagName,classOrDescriptor):standardCustomElement(tagName,classOrDescriptor);_exports.customElement$2=_exports.customElement$1=_exports.customElement=customElement;const standardProperty=(options,element)=>{if("method"===element.kind&&element.descriptor&&!("value"in element.descriptor)){return Object.assign({},element,{finisher(clazz){clazz.createProperty(element.key,options)}})}else{return{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){if("function"===typeof element.initializer){this[element.key]=element.initializer.call(this)}},finisher(clazz){clazz.createProperty(element.key,options)}}}},legacyProperty=(options,proto,name)=>{proto.constructor.createProperty(name,options)};function property(options){return(protoOrDescriptor,name)=>name!==void 0?legacyProperty(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor)}const query=_query((target,selector)=>target.querySelector(selector));_exports.query$2=_exports.query$1=_exports.query=query;const queryAll=_query((target,selector)=>target.querySelectorAll(selector));_exports.queryAll$2=_exports.queryAll$1=_exports.queryAll=queryAll;const legacyQuery=(descriptor,proto,name)=>{Object.defineProperty(proto,name,descriptor)},standardQuery=(descriptor,element)=>({kind:"method",placement:"prototype",key:element.key,descriptor});function _query(queryFn){return selector=>(protoOrDescriptor,name)=>{const descriptor={get(){return queryFn(this.renderRoot,selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}const standardEventOptions=(options,element)=>{return Object.assign({},element,{finisher(clazz){Object.assign(clazz.prototype[element.key],options)}})},legacyEventOptions=(options,proto,name)=>{Object.assign(proto[name],options)},eventOptions=options=>(protoOrDescriptor,name)=>name!==void 0?legacyEventOptions(options,protoOrDescriptor,name):standardEventOptions(options,protoOrDescriptor);_exports.eventOptions$2=_exports.eventOptions$1=_exports.eventOptions=eventOptions;var decorators={customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions};_exports.$decorators=decorators;window.JSCompiler_renameProperty=(prop,_obj)=>prop;const defaultConverter={toAttribute(value,type){switch(type){case Boolean:return value?"":null;case Object:case Array:return null==value?value:JSON.stringify(value);}return value},fromAttribute(value,type){switch(type){case Boolean:return null!==value;case Number:return null===value?null:+value;case Object:case Array:return JSON.parse(value);}return value}};_exports.defaultConverter$2=_exports.defaultConverter$1=_exports.defaultConverter=defaultConverter;const notEqual=(value,old)=>{return old!==value&&(old===old||value===value)};_exports.notEqual$2=_exports.notEqual$1=_exports.notEqual=notEqual;const defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},microtaskPromise=Promise.resolve(!0),STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=1<<2,STATE_IS_REFLECTING_TO_ATTRIBUTE=1<<3,STATE_IS_REFLECTING_TO_PROPERTY=1<<4,STATE_HAS_CONNECTED=1<<5;class UpdatingElement extends HTMLElement{constructor(){super();this._updateState=0;this._instanceProperties=void 0;this._updatePromise=microtaskPromise;this._hasConnectedResolver=void 0;this._changedProperties=new Map;this._reflectingProperties=void 0;this.initialize()}static get observedAttributes(){this.finalize();const attributes=[];this._classProperties.forEach((v,p)=>{const attr=this._attributeNameForProperty(p,v);if(attr!==void 0){this._attributeToPropertyMap.set(attr,p);attributes.push(attr)}});return attributes}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==void 0){superProperties.forEach((v,k)=>this._classProperties.set(k,v))}}}static createProperty(name,options=defaultPropertyDeclaration){this._ensureClassProperties();this._classProperties.set(name,options);if(options.noAccessor||this.prototype.hasOwnProperty(name)){return}const key="symbol"===typeof name?Symbol():`__${name}`;Object.defineProperty(this.prototype,name,{get(){return this[key]},set(value){const oldValue=this[name];this[key]=value;this.requestUpdate(name,oldValue)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized){return}const superCtor=Object.getPrototypeOf(this);if("function"===typeof superCtor.finalize){superCtor.finalize()}this.finalized=!0;this._ensureClassProperties();this._attributeToPropertyMap=new Map;if(this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const props=this.properties,propKeys=[...Object.getOwnPropertyNames(props),...("function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[])];for(const p of propKeys){this.createProperty(p,props[p])}}}static _attributeNameForProperty(name,options){const attribute=options.attribute;return!1===attribute?void 0:"string"===typeof attribute?attribute:"string"===typeof name?name.toLowerCase():void 0}static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old)}static _propertyValueFromAttribute(value,options){const type=options.type,converter=options.converter||defaultConverter,fromAttribute="function"===typeof converter?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value}static _propertyValueToAttribute(value,options){if(options.reflect===void 0){return}const type=options.type,converter=options.converter,toAttribute=converter&&converter.toAttribute||defaultConverter.toAttribute;return toAttribute(value,type)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((_v,p)=>{if(this.hasOwnProperty(p)){const value=this[p];delete this[p];if(!this._instanceProperties){this._instanceProperties=new Map}this._instanceProperties.set(p,value)}})}_applyInstanceProperties(){this._instanceProperties.forEach((v,p)=>this[p]=v);this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|STATE_HAS_CONNECTED;if(this._hasConnectedResolver){this._hasConnectedResolver();this._hasConnectedResolver=void 0}else{this.requestUpdate()}}disconnectedCallback(){}attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value)}}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor,attr=ctor._attributeNameForProperty(name,options);if(attr!==void 0){const attrValue=ctor._propertyValueToAttribute(value,options);if(attrValue===void 0){return}this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE;if(null==attrValue){this.removeAttribute(attr)}else{this.setAttribute(attr,attrValue)}this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE}}_attributeToProperty(name,value){if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE){return}const ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);if(propName!==void 0){const options=ctor._classProperties.get(propName)||defaultPropertyDeclaration;this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY;this[propName]=ctor._propertyValueFromAttribute(value,options);this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY}}requestUpdate(name,oldValue){let shouldRequestUpdate=!0;if(name!==void 0&&!this._changedProperties.has(name)){const ctor=this.constructor,options=ctor._classProperties.get(name)||defaultPropertyDeclaration;if(ctor._valueHasChanged(this[name],oldValue,options.hasChanged)){this._changedProperties.set(name,oldValue);if(!0===options.reflect&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)){if(this._reflectingProperties===void 0){this._reflectingProperties=new Map}this._reflectingProperties.set(name,options)}}else{shouldRequestUpdate=!1}}if(!this._hasRequestedUpdate&&shouldRequestUpdate){this._enqueueUpdate()}return this.updateComplete}_enqueueUpdate(){var _this2=this;return babelHelpers.asyncToGenerator(function*(){_this2._updateState=_this2._updateState|STATE_UPDATE_REQUESTED;let resolve;const previousUpdatePromise=_this2._updatePromise;_this2._updatePromise=new Promise(res=>resolve=res);yield previousUpdatePromise;if(!_this2._hasConnected){yield new Promise(res=>_this2._hasConnectedResolver=res)}const result=_this2.performUpdate();if(null!=result&&"function"===typeof result.then){yield result}resolve(!_this2._hasRequestedUpdate)})()}get _hasConnected(){return this._updateState&STATE_HAS_CONNECTED}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}get hasUpdated(){return this._updateState&STATE_HAS_UPDATED}performUpdate(){if(this._instanceProperties){this._applyInstanceProperties()}if(this.shouldUpdate(this._changedProperties)){const changedProperties=this._changedProperties;this.update(changedProperties);this._markUpdated();if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties)}this.updated(changedProperties)}else{this._markUpdated()}}_markUpdated(){this._changedProperties=new Map;this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}get updateComplete(){return this._updatePromise}shouldUpdate(_changedProperties){return!0}update(_changedProperties){if(this._reflectingProperties!==void 0&&0<this._reflectingProperties.size){this._reflectingProperties.forEach((v,k)=>this._propertyToAttribute(k,this[k],v));this._reflectingProperties=void 0}}updated(_changedProperties){}firstUpdated(_changedProperties){}}_exports.UpdatingElement$2=_exports.UpdatingElement$1=_exports.UpdatingElement=UpdatingElement;UpdatingElement.finalized=!0;var updatingElement={defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement};_exports.$updatingElement=updatingElement;const directives=new WeakMap,directive=f=>(...args)=>{const d=f(...args);directives.set(d,!0);return d};_exports.directive$1=_exports.directive=directive;const isDirective=o=>{return"function"===typeof o&&directives.has(o)};_exports.isDirective$1=_exports.isDirective=isDirective;var directive$1={directive:directive,isDirective:isDirective};_exports.$directive=directive$1;const isCEPolyfill=window.customElements!==void 0&&window.customElements.polyfillWrapFlushCallback!==void 0;_exports.isCEPolyfill=isCEPolyfill;const reparentNodes=(container,start,end=null,before=null)=>{let node=start;while(node!==end){const n=node.nextSibling;container.insertBefore(node,before);node=n}};_exports.reparentNodes$1=_exports.reparentNodes=reparentNodes;const removeNodes=(container,startNode,endNode=null)=>{let node=startNode;while(node!==endNode){const n=node.nextSibling;container.removeChild(node);node=n}};_exports.removeNodes$1=_exports.removeNodes=removeNodes;var dom={isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};_exports.$dom=dom;const noChange={};_exports.noChange$1=_exports.noChange=noChange;const nothing={};_exports.nothing$1=_exports.nothing=nothing;var part={noChange:noChange,nothing:nothing};_exports.$part=part;const marker=`{{lit-${(Math.random()+"").slice(2)}}}`;_exports.marker=marker;const nodeMarker=`<!--${marker}-->`;_exports.nodeMarker=nodeMarker;const markerRegex=new RegExp(`${marker}|${nodeMarker}`);_exports.markerRegex=markerRegex;const boundAttributeSuffix="$lit$";_exports.boundAttributeSuffix=boundAttributeSuffix;class Template{constructor(result,element){this.parts=[];this.element=element;let index=-1,partIndex=0;const nodesToRemove=[],_prepareTemplate=template=>{const content=template.content,walker=document.createTreeWalker(content,133,null,!1);let lastPartIndex=0;while(walker.nextNode()){index++;const node=walker.currentNode;if(1===node.nodeType){if(node.hasAttributes()){const attributes=node.attributes;let count=0;for(let i=0;i<attributes.length;i++){if(0<=attributes[i].value.indexOf(marker)){count++}}while(0<count--){const stringForPart=result.strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=name.toLowerCase()+boundAttributeSuffix,attributeValue=node.getAttribute(attributeLookupName),strings=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index,name,strings});node.removeAttribute(attributeLookupName);partIndex+=strings.length-1}}if("TEMPLATE"===node.tagName){_prepareTemplate(node)}}else if(3===node.nodeType){const data=node.data;if(0<=data.indexOf(marker)){const parent=node.parentNode,strings=data.split(markerRegex),lastIndex=strings.length-1;for(let i=0;i<lastIndex;i++){parent.insertBefore(""===strings[i]?createMarker():document.createTextNode(strings[i]),node);this.parts.push({type:"node",index:++index})}if(""===strings[lastIndex]){parent.insertBefore(createMarker(),node);nodesToRemove.push(node)}else{node.data=strings[lastIndex]}partIndex+=lastIndex}}else if(8===node.nodeType){if(node.data===marker){const parent=node.parentNode;if(null===node.previousSibling||index===lastPartIndex){index++;parent.insertBefore(createMarker(),node)}lastPartIndex=index;this.parts.push({type:"node",index});if(null===node.nextSibling){node.data=""}else{nodesToRemove.push(node);index--}partIndex++}else{let i=-1;while(-1!==(i=node.data.indexOf(marker,i+1))){this.parts.push({type:"node",index:-1})}}}}};_prepareTemplate(element);for(const n of nodesToRemove){n.parentNode.removeChild(n)}}}_exports.Template$1=_exports.Template=Template;const isTemplatePartActive=part=>-1!==part.index;_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=isTemplatePartActive;const createMarker=()=>document.createComment("");_exports.createMarker$1=_exports.createMarker=createMarker;const lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;_exports.lastAttributeNameRegex=lastAttributeNameRegex;var template={marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,boundAttributeSuffix:boundAttributeSuffix,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};_exports.$template=template;class TemplateInstance{constructor(template,processor,options){this._parts=[];this.template=template;this.processor=processor;this.options=options}update(values){let i=0;for(const part of this._parts){if(part!==void 0){part.setValue(values[i])}i++}for(const part of this._parts){if(part!==void 0){part.commit()}}}_clone(){const fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),parts=this.template.parts;let partIndex=0,nodeIndex=0;const _prepareInstance=fragment=>{const walker=document.createTreeWalker(fragment,133,null,!1);let node=walker.nextNode();while(partIndex<parts.length&&null!==node){const part=parts[partIndex];if(!isTemplatePartActive(part)){this._parts.push(void 0);partIndex++}else if(nodeIndex===part.index){if("node"===part.type){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node.previousSibling);this._parts.push(part)}else{this._parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options))}partIndex++}else{nodeIndex++;if("TEMPLATE"===node.nodeName){_prepareInstance(node.content)}node=walker.nextNode()}}};_prepareInstance(fragment);if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment)}return fragment}}_exports.TemplateInstance$1=_exports.TemplateInstance=TemplateInstance;var templateInstance={TemplateInstance:TemplateInstance};_exports.$templateInstance=templateInstance;class TemplateResult{constructor(strings,values,type,processor){this.strings=strings;this.values=values;this.type=type;this.processor=processor}getHTML(){const endIndex=this.strings.length-1;let html="";for(let i=0;i<endIndex;i++){const s=this.strings[i],match=lastAttributeNameRegex.exec(s);if(match){html+=s.substr(0,match.index)+match[1]+match[2]+boundAttributeSuffix+match[3]+marker}else{html+=s+nodeMarker}}return html+this.strings[endIndex]}getTemplateElement(){const template=document.createElement("template");template.innerHTML=this.getHTML();return template}}_exports.TemplateResult$4=_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=TemplateResult;class SVGTemplateResult extends TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const template=super.getTemplateElement(),content=template.content,svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template}}_exports.SVGTemplateResult$3=_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=SVGTemplateResult;var templateResult={TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};_exports.$templateResult=templateResult;const isPrimitive=value=>{return null===value||!("object"===typeof value||"function"===typeof value)};_exports.isPrimitive$1=_exports.isPrimitive=isPrimitive;class AttributeCommitter{constructor(element,name,strings){this.dirty=!0;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(let i=0;i<strings.length-1;i++){this.parts[i]=this._createPart()}}_createPart(){return new AttributePart(this)}_getValue(){const strings=this.strings,l=strings.length-1;let text="";for(let i=0;i<l;i++){text+=strings[i];const part=this.parts[i];if(part!==void 0){const v=part.value;if(null!=v&&(Array.isArray(v)||"string"!==typeof v&&v[Symbol.iterator])){for(const t of v){text+="string"===typeof t?t:t+""}}else{text+="string"===typeof v?v:v+""}}}text+=strings[l];return text}commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}_exports.AttributeCommitter$1=_exports.AttributeCommitter=AttributeCommitter;class AttributePart{constructor(comitter){this.value=void 0;this.committer=comitter}setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;if(!isDirective(value)){this.committer.dirty=!0}}}commit(){while(isDirective(this.value)){const directive$$1=this.value;this.value=noChange;directive$$1(this)}if(this.value===noChange){return}this.committer.commit()}}_exports.AttributePart$1=_exports.AttributePart=AttributePart;class NodePart{constructor(options){this.value=void 0;this._pendingValue=void 0;this.options=options}appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker())}insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling}appendIntoPart(part){part._insert(this.startNode=createMarker());part._insert(this.endNode=createMarker())}insertAfterPart(ref){ref._insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this)}const value=this._pendingValue;if(value===noChange){return}if(isPrimitive(value)){if(value!==this.value){this._commitText(value)}}else if(value instanceof TemplateResult){this._commitTemplateResult(value)}else if(value instanceof Node){this._commitNode(value)}else if(Array.isArray(value)||value[Symbol.iterator]){this._commitIterable(value)}else if(value===nothing){this.value=nothing;this.clear()}else{this._commitText(value)}}_insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}_commitNode(value){if(this.value===value){return}this.clear();this._insert(value);this.value=value}_commitText(value){const node=this.startNode.nextSibling;value=null==value?"":value;if(node===this.endNode.previousSibling&&3===node.nodeType){node.data=value}else{this._commitNode(document.createTextNode("string"===typeof value?value:value+""))}this.value=value}_commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value instanceof TemplateInstance&&this.value.template===template){this.value.update(value.values)}else{const instance=new TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values);this._commitNode(fragment);this.value=instance}}_commitIterable(value){if(!Array.isArray(this.value)){this.value=[];this.clear()}const itemParts=this.value;let partIndex=0,itemPart;for(const item of value){itemPart=itemParts[partIndex];if(itemPart===void 0){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(0===partIndex){itemPart.appendIntoPart(this)}else{itemPart.insertAfterPart(itemParts[partIndex-1])}}itemPart.setValue(item);itemPart.commit();partIndex++}if(partIndex<itemParts.length){itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode)}}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}_exports.NodePart$1=_exports.NodePart=NodePart;class BooleanAttributePart{constructor(element,name,strings){this.value=void 0;this._pendingValue=void 0;if(2!==strings.length||""!==strings[0]||""!==strings[1]){throw new Error("Boolean attributes can only contain a single expression")}this.element=element;this.name=name;this.strings=strings}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this)}if(this._pendingValue===noChange){return}const value=!!this._pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,"")}else{this.element.removeAttribute(this.name)}}this.value=value;this._pendingValue=noChange}}_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=BooleanAttributePart;class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings);this.single=2===strings.length&&""===strings[0]&&""===strings[1]}_createPart(){return new PropertyPart(this)}_getValue(){if(this.single){return this.parts[0].value}return super._getValue()}commit(){if(this.dirty){this.dirty=!1;this.element[this.name]=this._getValue()}}}_exports.PropertyCommitter$1=_exports.PropertyCommitter=PropertyCommitter;class PropertyPart extends AttributePart{}_exports.PropertyPart$1=_exports.PropertyPart=PropertyPart;let eventOptionsSupported=!1;try{const options={get capture(){eventOptionsSupported=!0;return!1}};window.addEventListener("test",options,options);window.removeEventListener("test",options,options)}catch(_e){}class EventPart{constructor(element,eventName,eventContext){this.value=void 0;this._pendingValue=void 0;this.element=element;this.eventName=eventName;this.eventContext=eventContext;this._boundHandleEvent=e=>this.handleEvent(e)}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this)}if(this._pendingValue===noChange){return}const newListener=this._pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive),shouldAddListener=null!=newListener&&(null==oldListener||shouldRemoveListener);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options)}if(shouldAddListener){this._options=getOptions(newListener);this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)}this.value=newListener;this._pendingValue=noChange}handleEvent(event){if("function"===typeof this.value){this.value.call(this.eventContext||this.element,event)}else{this.value.handleEvent(event)}}}_exports.EventPart$1=_exports.EventPart=EventPart;const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);var parts={isPrimitive:isPrimitive,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};_exports.$parts=parts;class DefaultTemplateProcessor{handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if("."===prefix){const comitter=new PropertyCommitter(element,name.slice(1),strings);return comitter.parts}if("@"===prefix){return[new EventPart(element,name.slice(1),options.eventContext)]}if("?"===prefix){return[new BooleanAttributePart(element,name.slice(1),strings)]}const comitter=new AttributeCommitter(element,name,strings);return comitter.parts}handleTextExpression(options){return new NodePart(options)}}_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=DefaultTemplateProcessor;const defaultTemplateProcessor=new DefaultTemplateProcessor;_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=defaultTemplateProcessor;var defaultTemplateProcessor$1={DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};_exports.$defaultTemplateProcessor=defaultTemplateProcessor$1;function templateFactory(result){let templateCache=templateCaches.get(result.type);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(result.type,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}const key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){template=new Template(result,result.getTemplateElement());templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template}const templateCaches=new Map;_exports.templateCaches$1=_exports.templateCaches=templateCaches;var templateFactory$1={templateFactory:templateFactory,templateCaches:templateCaches};_exports.$templateFactory=templateFactory$1;const parts$1=new WeakMap;_exports.parts$1=_exports.parts=parts$1;const render=(result,container,options)=>{let part=parts$1.get(container);if(part===void 0){removeNodes(container,container.firstChild);parts$1.set(container,part=new NodePart(Object.assign({templateFactory},options)));part.appendInto(container)}part.setValue(result);part.commit()};_exports.render$2=_exports.render=render;var render$1={parts:parts$1,render:render};_exports.$render=render$1;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const html=(strings,...values)=>new TemplateResult(strings,values,"html",defaultTemplateProcessor);_exports.html$3=_exports.html$2=_exports.html$1=_exports.html=html;const svg=(strings,...values)=>new SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor);_exports.svg$3=_exports.svg$2=_exports.svg$1=_exports.svg=svg;var litHtml={html:html,svg:svg,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,directive:directive,isDirective:isDirective,removeNodes:removeNodes,reparentNodes:reparentNodes,noChange:noChange,nothing:nothing,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,BooleanAttributePart:BooleanAttributePart,EventPart:EventPart,isPrimitive:isPrimitive,NodePart:NodePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,parts:parts$1,render:render,templateCaches:templateCaches,templateFactory:templateFactory,TemplateInstance:TemplateInstance,SVGTemplateResult:SVGTemplateResult,TemplateResult:TemplateResult,createMarker:createMarker,isTemplatePartActive:isTemplatePartActive,Template:Template};_exports.$litHtml=litHtml;const walkerNodeFilter=133;function removeNodesFromTemplate(template,nodesToRemove){const{element:{content},parts}=template,walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;const node=walker.currentNode;if(node.previousSibling===currentRemovingNode){currentRemovingNode=null}if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);if(null===currentRemovingNode){currentRemovingNode=node}}if(null!==currentRemovingNode){removeCount++}while(part!==void 0&&part.index===nodeIndex){part.index=null!==currentRemovingNode?-1:part.index-removeCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex]}}nodesToRemoveInTemplate.forEach(n=>n.parentNode.removeChild(n))}const countNodes=node=>{let count=11===node.nodeType?0:1;const walker=document.createTreeWalker(node,walkerNodeFilter,null,!1);while(walker.nextNode()){count++}return count},nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part)){return i}}return-1};function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content},parts}=template;if(null===refNode||refNode===void 0){content.appendChild(node);return}const walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;while(walker.nextNode()){walkerIndex++;const walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode)}while(-1!==partIndex&&parts[partIndex].index===walkerIndex){if(0<insertCount){while(-1!==partIndex){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}}var modifyTemplate={removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};_exports.$modifyTemplate=modifyTemplate;const getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS){compatibleShadyCSSVersion=!1}else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn(`Incompatible ShadyCSS version detected.`+`Please update to at least @webcomponents/webcomponentsjs@2.0.2 and`+`@webcomponents/shadycss@1.3.1.`);compatibleShadyCSSVersion=!1}const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(cacheKey,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}const key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){const element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName)}template=new Template(result,element);templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template},TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=scopeName=>{TEMPLATE_TYPES.forEach(type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==void 0){templates.keyString.forEach(template=>{const{element:{content}}=template,styles=new Set;Array.from(content.querySelectorAll("style")).forEach(s=>{styles.add(s)});removeNodesFromTemplate(template,styles)})}})},shadyRenderSet=new Set,prepareTemplateStyles=(renderedDOM,template,scopeName)=>{shadyRenderSet.add(scopeName);const styles=renderedDOM.querySelectorAll("style");if(0===styles.length){window.ShadyCSS.prepareTemplateStyles(template.element,scopeName);return}const condensedStyle=document.createElement("style");for(let i=0;i<styles.length;i++){const style=styles[i];style.parentNode.removeChild(style);condensedStyle.textContent+=style.textContent}removeStylesFromLitTemplates(scopeName);insertNodeIntoTemplate(template,condensedStyle,template.element.content.firstChild);window.ShadyCSS.prepareTemplateStyles(template.element,scopeName);if(window.ShadyCSS.nativeShadow){const style=template.element.content.querySelector("style");renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild)}else{template.element.content.insertBefore(condensedStyle,template.element.content.firstChild);const removes=new Set([condensedStyle]);removeNodesFromTemplate(template,removes)}},render$2=(result,container,options)=>{const scopeName=options.scopeName,hasRendered=parts$1.has(container),needsScoping=container instanceof ShadowRoot&&compatibleShadyCSSVersion&&result instanceof TemplateResult,firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName),renderContainer=firstScopeRender?document.createDocumentFragment():container;render(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));if(firstScopeRender){const part=parts$1.get(renderContainer);parts$1.delete(renderContainer);if(part.value instanceof TemplateInstance){prepareTemplateStyles(renderContainer,part.value.template,scopeName)}removeNodes(container,container.firstChild);container.appendChild(renderContainer);parts$1.set(container,part)}if(!hasRendered&&needsScoping){window.ShadyCSS.styleElement(container.host)}};_exports.render$1=render$2;var shadyRender={render:render$2,html:html,svg:svg,TemplateResult:TemplateResult};_exports.$shadyRender=shadyRender;(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");function arrayFlat(styles,result=[]){for(let i=0,length=styles.length;i<length;i++){const value=styles[i];if(Array.isArray(value)){arrayFlat(value,result)}else{result.push(value)}}return result}const flattenStyles=styles=>styles.flat?styles.flat(1/0):arrayFlat(styles);class LitElement extends UpdatingElement{static finalize(){super.finalize();this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const userStyles=this.styles,styles=[];if(Array.isArray(userStyles)){const flatStyles=flattenStyles(userStyles),styleSet=flatStyles.reduceRight((set,s)=>{set.add(s);return set},new Set);styleSet.forEach(v=>styles.unshift(v))}else if(userStyles){styles.push(userStyles)}return styles}initialize(){super.initialize();this.renderRoot=this.createRenderRoot();if(window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot){this.adoptStyles()}}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const styles=this.constructor._styles;if(0===styles.length){return}if(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow){window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(s=>s.cssText),this.localName)}else if(supportsAdoptingStyleSheets){this.renderRoot.adoptedStyleSheets=styles.map(s=>s.styleSheet)}else{this._needsShimAdoptedStyleSheets=!0}}connectedCallback(){super.connectedCallback();if(this.hasUpdated&&window.ShadyCSS!==void 0){window.ShadyCSS.styleElement(this)}}update(changedProperties){super.update(changedProperties);const templateResult=this.render();if(templateResult instanceof TemplateResult){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this})}if(this._needsShimAdoptedStyleSheets){this._needsShimAdoptedStyleSheets=!1;this.constructor._styles.forEach(s=>{const style=document.createElement("style");style.textContent=s.cssText;this.renderRoot.appendChild(style)})}}render(){}}_exports.LitElement$1=_exports.LitElement=LitElement;LitElement.finalized=!0;LitElement.render=render$2;var litElement={LitElement:LitElement,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions,html:html,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};_exports.$litElement=litElement;var _Math={DEG2RAD:_MathPI/180,RAD2DEG:180/_MathPI,generateUUID:function(){for(var lut=[],i=0;256>i;i++){lut[i]=(16>i?"0":"")+i.toString(16)}return function generateUUID(){var d0=0|4294967295*Math.random(),d1=0|4294967295*Math.random(),d2=0|4294967295*Math.random(),d3=0|4294967295*Math.random(),uuid=lut[255&d0]+lut[255&d0>>8]+lut[255&d0>>16]+lut[255&d0>>24]+"-"+lut[255&d1]+lut[255&d1>>8]+"-"+lut[64|15&d1>>16]+lut[255&d1>>24]+"-"+lut[128|63&d2]+lut[255&d2>>8]+"-"+lut[255&d2>>16]+lut[255&d2>>24]+lut[255&d3]+lut[255&d3>>8]+lut[255&d3>>16]+lut[255&d3>>24];return uuid.toUpperCase()}}(),clamp:function(value,min,max){return _Mathmax(min,_Mathmin(max,value))},euclideanModulo:function(n,m){return(n%m+m)%m},mapLinear:function(x,a1,a2,b1,b2){return b1+(x-a1)*(b2-b1)/(a2-a1)},lerp:function(x,y,t){return(1-t)*x+t*y},smoothstep:function(x,min,max){if(x<=min)return 0;if(x>=max)return 1;x=(x-min)/(max-min);return x*x*(3-2*x)},smootherstep:function(x,min,max){if(x<=min)return 0;if(x>=max)return 1;x=(x-min)/(max-min);return x*x*x*(x*(6*x-15)+10)},randInt:function(low,high){return low+_Mathfloor(Math.random()*(high-low+1))},randFloat:function(low,high){return low+Math.random()*(high-low)},randFloatSpread:function(range){return range*(.5-Math.random())},degToRad:function(degrees){return degrees*_Math.DEG2RAD},radToDeg:function(radians){return radians*_Math.RAD2DEG},isPowerOfTwo:function(value){return 0===(value&value-1)&&0!==value},ceilPowerOfTwo:function(value){return _Mathpow(2,_Mathceil(_Mathlog(value)/_MathLN))},floorPowerOfTwo:function(value){return _Mathpow(2,_Mathfloor(_Mathlog(value)/_MathLN))}};_exports._Math=_Math;var _Math$1={_Math:_Math};_exports.$Math=_Math$1;function Quaternion(x,y,z,w){this._x=x||0;this._y=y||0;this._z=z||0;this._w=w!==void 0?w:1}Object.assign(Quaternion,{slerp:function(qa,qb,qm,t){return qm.copy(qa).slerp(qb,t)},slerpFlat:function(dst,dstOffset,src0,srcOffset0,src1,srcOffset1,t){var x0=src0[srcOffset0+0],y0=src0[srcOffset0+1],z0=src0[srcOffset0+2],w0=src0[srcOffset0+3],x1=src1[srcOffset1+0],y1=src1[srcOffset1+1],z1=src1[srcOffset1+2],w1=src1[srcOffset1+3];if(w0!==w1||x0!==x1||y0!==y1||z0!==z1){var s=1-t,cos=x0*x1+y0*y1+z0*z1+w0*w1,dir=0<=cos?1:-1,sqrSin=1-cos*cos;if(sqrSin>_NumberEPSILON){var sin=_Mathsqrt(sqrSin),len=_Mathatan(sin,cos*dir);s=_Mathsin(s*len)/sin;t=_Mathsin(t*len)/sin}var tDir=t*dir;x0=x0*s+x1*tDir;y0=y0*s+y1*tDir;z0=z0*s+z1*tDir;w0=w0*s+w1*tDir;if(s===1-t){var f=1/_Mathsqrt(x0*x0+y0*y0+z0*z0+w0*w0);x0*=f;y0*=f;z0*=f;w0*=f}}dst[dstOffset]=x0;dst[dstOffset+1]=y0;dst[dstOffset+2]=z0;dst[dstOffset+3]=w0}});Object.defineProperties(Quaternion.prototype,{x:{get:function(){return this._x},set:function(value){this._x=value;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(value){this._y=value;this.onChangeCallback()}},z:{get:function(){return this._z},set:function(value){this._z=value;this.onChangeCallback()}},w:{get:function(){return this._w},set:function(value){this._w=value;this.onChangeCallback()}}});Object.assign(Quaternion.prototype,{isQuaternion:!0,set:function(x,y,z,w){this._x=x;this._y=y;this._z=z;this._w=w;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(quaternion){this._x=quaternion.x;this._y=quaternion.y;this._z=quaternion.z;this._w=quaternion.w;this.onChangeCallback();return this},setFromEuler:function(euler,update){if(!(euler&&euler.isEuler)){throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.")}var x=euler._x,y=euler._y,z=euler._z,order=euler.order,cos=_Mathcos,sin=_Mathsin,c1=cos(x/2),c2=cos(y/2),c3=cos(z/2),s1=sin(x/2),s2=sin(y/2),s3=sin(z/2);if("XYZ"===order){this._x=s1*c2*c3+c1*s2*s3;this._y=c1*s2*c3-s1*c2*s3;this._z=c1*c2*s3+s1*s2*c3;this._w=c1*c2*c3-s1*s2*s3}else if("YXZ"===order){this._x=s1*c2*c3+c1*s2*s3;this._y=c1*s2*c3-s1*c2*s3;this._z=c1*c2*s3-s1*s2*c3;this._w=c1*c2*c3+s1*s2*s3}else if("ZXY"===order){this._x=s1*c2*c3-c1*s2*s3;this._y=c1*s2*c3+s1*c2*s3;this._z=c1*c2*s3+s1*s2*c3;this._w=c1*c2*c3-s1*s2*s3}else if("ZYX"===order){this._x=s1*c2*c3-c1*s2*s3;this._y=c1*s2*c3+s1*c2*s3;this._z=c1*c2*s3-s1*s2*c3;this._w=c1*c2*c3+s1*s2*s3}else if("YZX"===order){this._x=s1*c2*c3+c1*s2*s3;this._y=c1*s2*c3+s1*c2*s3;this._z=c1*c2*s3-s1*s2*c3;this._w=c1*c2*c3-s1*s2*s3}else if("XZY"===order){this._x=s1*c2*c3-c1*s2*s3;this._y=c1*s2*c3-s1*c2*s3;this._z=c1*c2*s3+s1*s2*c3;this._w=c1*c2*c3+s1*s2*s3}if(!1!==update)this.onChangeCallback();return this},setFromAxisAngle:function(axis,angle){var halfAngle=angle/2,s=_Mathsin(halfAngle);this._x=axis.x*s;this._y=axis.y*s;this._z=axis.z*s;this._w=_Mathcos(halfAngle);this.onChangeCallback();return this},setFromRotationMatrix:function(m){var te=m.elements,m11=te[0],m12=te[4],m13=te[8],m21=te[1],m22=te[5],m23=te[9],m31=te[2],m32=te[6],m33=te[10],trace=m11+m22+m33,s;if(0<trace){s=.5/_Mathsqrt(trace+1);this._w=.25/s;this._x=(m32-m23)*s;this._y=(m13-m31)*s;this._z=(m21-m12)*s}else if(m11>m22&&m11>m33){s=2*_Mathsqrt(1+m11-m22-m33);this._w=(m32-m23)/s;this._x=.25*s;this._y=(m12+m21)/s;this._z=(m13+m31)/s}else if(m22>m33){s=2*_Mathsqrt(1+m22-m11-m33);this._w=(m13-m31)/s;this._x=(m12+m21)/s;this._y=.25*s;this._z=(m23+m32)/s}else{s=2*_Mathsqrt(1+m33-m11-m22);this._w=(m21-m12)/s;this._x=(m13+m31)/s;this._y=(m23+m32)/s;this._z=.25*s}this.onChangeCallback();return this},setFromUnitVectors:function(){var v1=new Vector3,r,EPS=1e-6;return function setFromUnitVectors(vFrom,vTo){if(v1===void 0)v1=new Vector3;r=vFrom.dot(vTo)+1;if(r<EPS){r=0;if(_Mathabs(vFrom.x)>_Mathabs(vFrom.z)){v1.set(-vFrom.y,vFrom.x,0)}else{v1.set(0,-vFrom.z,vFrom.y)}}else{v1.crossVectors(vFrom,vTo)}this._x=v1.x;this._y=v1.y;this._z=v1.z;this._w=r;return this.normalize()}}(),angleTo:function(q){return 2*_Mathacos(_Mathabs(_Math.clamp(this.dot(q),-1,1)))},rotateTowards:function(q,step){var angle=this.angleTo(q);if(0===angle)return this;var t=_Mathmin(1,step/angle);this.slerp(q,t);return this},inverse:function(){return this.conjugate()},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(v){return this._x*v._x+this._y*v._y+this._z*v._z+this._w*v._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return _Mathsqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var l=this.length();if(0===l){this._x=0;this._y=0;this._z=0;this._w=1}else{l=1/l;this._x=this._x*l;this._y=this._y*l;this._z=this._z*l;this._w=this._w*l}this.onChangeCallback();return this},multiply:function(q,p){if(p!==void 0){console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.");return this.multiplyQuaternions(q,p)}return this.multiplyQuaternions(this,q)},premultiply:function(q){return this.multiplyQuaternions(q,this)},multiplyQuaternions:function(a,b){var qax=a._x,qay=a._y,qaz=a._z,qaw=a._w,qbx=b._x,qby=b._y,qbz=b._z,qbw=b._w;this._x=qax*qbw+qaw*qbx+qay*qbz-qaz*qby;this._y=qay*qbw+qaw*qby+qaz*qbx-qax*qbz;this._z=qaz*qbw+qaw*qbz+qax*qby-qay*qbx;this._w=qaw*qbw-qax*qbx-qay*qby-qaz*qbz;this.onChangeCallback();return this},slerp:function(qb,t){if(0===t)return this;if(1===t)return this.copy(qb);var x=this._x,y=this._y,z=this._z,w=this._w,cosHalfTheta=w*qb._w+x*qb._x+y*qb._y+z*qb._z;if(0>cosHalfTheta){this._w=-qb._w;this._x=-qb._x;this._y=-qb._y;this._z=-qb._z;cosHalfTheta=-cosHalfTheta}else{this.copy(qb)}if(1<=cosHalfTheta){this._w=w;this._x=x;this._y=y;this._z=z;return this}var sqrSinHalfTheta=1-cosHalfTheta*cosHalfTheta;if(sqrSinHalfTheta<=_NumberEPSILON){var s=1-t;this._w=s*w+t*this._w;this._x=s*x+t*this._x;this._y=s*y+t*this._y;this._z=s*z+t*this._z;return this.normalize()}var sinHalfTheta=_Mathsqrt(sqrSinHalfTheta),halfTheta=_Mathatan(sinHalfTheta,cosHalfTheta),ratioA=_Mathsin((1-t)*halfTheta)/sinHalfTheta,ratioB=_Mathsin(t*halfTheta)/sinHalfTheta;this._w=w*ratioA+this._w*ratioB;this._x=x*ratioA+this._x*ratioB;this._y=y*ratioA+this._y*ratioB;this._z=z*ratioA+this._z*ratioB;this.onChangeCallback();return this},equals:function(quaternion){return quaternion._x===this._x&&quaternion._y===this._y&&quaternion._z===this._z&&quaternion._w===this._w},fromArray:function(array,offset){if(offset===void 0)offset=0;this._x=array[offset];this._y=array[offset+1];this._z=array[offset+2];this._w=array[offset+3];this.onChangeCallback();return this},toArray:function(array,offset){if(array===void 0)array=[];if(offset===void 0)offset=0;array[offset]=this._x;array[offset+1]=this._y;array[offset+2]=this._z;array[offset+3]=this._w;return array},onChange:function(callback){this.onChangeCallback=callback;return this},onChangeCallback:function(){}});var Quaternion$1={Quaternion:Quaternion};_exports.$Quaternion=Quaternion$1;function Vector3(x,y,z){this.x=x||0;this.y=y||0;this.z=z||0}Object.assign(Vector3.prototype,{isVector3:!0,set:function(x,y,z){this.x=x;this.y=y;this.z=z;return this},setScalar:function(scalar){this.x=scalar;this.y=scalar;this.z=scalar;return this},setX:function(x){this.x=x;return this},setY:function(y){this.y=y;return this},setZ:function(z){this.z=z;return this},setComponent:function(index,value){switch(index){case 0:this.x=value;break;case 1:this.y=value;break;case 2:this.z=value;break;default:throw new Error("index is out of range: "+index);}return this},getComponent:function(index){switch(index){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+index);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(v){this.x=v.x;this.y=v.y;this.z=v.z;return this},add:function(v,w){if(w!==void 0){console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");return this.addVectors(v,w)}this.x+=v.x;this.y+=v.y;this.z+=v.z;return this},addScalar:function(s){this.x+=s;this.y+=s;this.z+=s;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(v,s){this.x+=v.x*s;this.y+=v.y*s;this.z+=v.z*s;return this},sub:function(v,w){if(w!==void 0){console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");return this.subVectors(v,w)}this.x-=v.x;this.y-=v.y;this.z-=v.z;return this},subScalar:function(s){this.x-=s;this.y-=s;this.z-=s;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(v,w){if(w!==void 0){console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.");return this.multiplyVectors(v,w)}this.x*=v.x;this.y*=v.y;this.z*=v.z;return this},multiplyScalar:function(scalar){this.x*=scalar;this.y*=scalar;this.z*=scalar;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var quaternion=new Quaternion;return function applyEuler(euler){if(!(euler&&euler.isEuler)){console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.")}return this.applyQuaternion(quaternion.setFromEuler(euler))}}(),applyAxisAngle:function(){var quaternion=new Quaternion;return function applyAxisAngle(axis,angle){return this.applyQuaternion(quaternion.setFromAxisAngle(axis,angle))}}(),applyMatrix3:function(m){var x=this.x,y=this.y,z=this.z,e=m.elements;this.x=e[0]*x+e[3]*y+e[6]*z;this.y=e[1]*x+e[4]*y+e[7]*z;this.z=e[2]*x+e[5]*y+e[8]*z;return this},applyMatrix4:function(m){var x=this.x,y=this.y,z=this.z,e=m.elements,w=1/(e[3]*x+e[7]*y+e[11]*z+e[15]);this.x=(e[0]*x+e[4]*y+e[8]*z+e[12])*w;this.y=(e[1]*x+e[5]*y+e[9]*z+e[13])*w;this.z=(e[2]*x+e[6]*y+e[10]*z+e[14])*w;return this},applyQuaternion:function(q){var x=this.x,y=this.y,z=this.z,qx=q.x,qy=q.y,qz=q.z,qw=q.w,ix=qw*x+qy*z-qz*y,iy=qw*y+qz*x-qx*z,iz=qw*z+qx*y-qy*x,iw=-qx*x-qy*y-qz*z;this.x=ix*qw+iw*-qx+iy*-qz-iz*-qy;this.y=iy*qw+iw*-qy+iz*-qx-ix*-qz;this.z=iz*qw+iw*-qz+ix*-qy-iy*-qx;return this},project:function(camera){return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix)},unproject:function(){var matrix=new Matrix4;return function unproject(camera){return this.applyMatrix4(matrix.getInverse(camera.projectionMatrix)).applyMatrix4(camera.matrixWorld)}}(),transformDirection:function(m){var x=this.x,y=this.y,z=this.z,e=m.elements;this.x=e[0]*x+e[4]*y+e[8]*z;this.y=e[1]*x+e[5]*y+e[9]*z;this.z=e[2]*x+e[6]*y+e[10]*z;return this.normalize()},divide:function(v){this.x/=v.x;this.y/=v.y;this.z/=v.z;return this},divideScalar:function(scalar){return this.multiplyScalar(1/scalar)},min:function(v){this.x=_Mathmin(this.x,v.x);this.y=_Mathmin(this.y,v.y);this.z=_Mathmin(this.z,v.z);return this},max:function(v){this.x=_Mathmax(this.x,v.x);this.y=_Mathmax(this.y,v.y);this.z=_Mathmax(this.z,v.z);return this},clamp:function(min,max){this.x=_Mathmax(min.x,_Mathmin(max.x,this.x));this.y=_Mathmax(min.y,_Mathmin(max.y,this.y));this.z=_Mathmax(min.z,_Mathmin(max.z,this.z));return this},clampScalar:function(){var min=new Vector3,max=new Vector3;return function clampScalar(minVal,maxVal){min.set(minVal,minVal,minVal);max.set(maxVal,maxVal,maxVal);return this.clamp(min,max)}}(),clampLength:function(min,max){var length=this.length();return this.divideScalar(length||1).multiplyScalar(_Mathmax(min,_Mathmin(max,length)))},floor:function(){this.x=_Mathfloor(this.x);this.y=_Mathfloor(this.y);this.z=_Mathfloor(this.z);return this},ceil:function(){this.x=_Mathceil(this.x);this.y=_Mathceil(this.y);this.z=_Mathceil(this.z);return this},round:function(){this.x=_Mathround(this.x);this.y=_Mathround(this.y);this.z=_Mathround(this.z);return this},roundToZero:function(){this.x=0>this.x?_Mathceil(this.x):_Mathfloor(this.x);this.y=0>this.y?_Mathceil(this.y):_Mathfloor(this.y);this.z=0>this.z?_Mathceil(this.z):_Mathfloor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(v){return this.x*v.x+this.y*v.y+this.z*v.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return _Mathsqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return _Mathabs(this.x)+_Mathabs(this.y)+_Mathabs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(length){return this.normalize().multiplyScalar(length)},lerp:function(v,alpha){this.x+=(v.x-this.x)*alpha;this.y+=(v.y-this.y)*alpha;this.z+=(v.z-this.z)*alpha;return this},lerpVectors:function(v1,v2,alpha){return this.subVectors(v2,v1).multiplyScalar(alpha).add(v1)},cross:function(v,w){if(w!==void 0){console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.");return this.crossVectors(v,w)}return this.crossVectors(this,v)},crossVectors:function(a,b){var ax=a.x,ay=a.y,az=a.z,bx=b.x,by=b.y,bz=b.z;this.x=ay*bz-az*by;this.y=az*bx-ax*bz;this.z=ax*by-ay*bx;return this},projectOnVector:function(vector){var scalar=vector.dot(this)/vector.lengthSq();return this.copy(vector).multiplyScalar(scalar)},projectOnPlane:function(){var v1=new Vector3;return function projectOnPlane(planeNormal){v1.copy(this).projectOnVector(planeNormal);return this.sub(v1)}}(),reflect:function(){var v1=new Vector3;return function reflect(normal){return this.sub(v1.copy(normal).multiplyScalar(2*this.dot(normal)))}}(),angleTo:function(v){var theta=this.dot(v)/_Mathsqrt(this.lengthSq()*v.lengthSq());return _Mathacos(_Math.clamp(theta,-1,1))},distanceTo:function(v){return _Mathsqrt(this.distanceToSquared(v))},distanceToSquared:function(v){var dx=this.x-v.x,dy=this.y-v.y,dz=this.z-v.z;return dx*dx+dy*dy+dz*dz},manhattanDistanceTo:function(v){return _Mathabs(this.x-v.x)+_Mathabs(this.y-v.y)+_Mathabs(this.z-v.z)},setFromSpherical:function(s){return this.setFromSphericalCoords(s.radius,s.phi,s.theta)},setFromSphericalCoords:function(radius,phi,theta){var sinPhiRadius=_Mathsin(phi)*radius;this.x=sinPhiRadius*_Mathsin(theta);this.y=_Mathcos(phi)*radius;this.z=sinPhiRadius*_Mathcos(theta);return this},setFromCylindrical:function(c){return this.setFromCylindricalCoords(c.radius,c.theta,c.y)},setFromCylindricalCoords:function(radius,theta,y){this.x=radius*_Mathsin(theta);this.y=y;this.z=radius*_Mathcos(theta);return this},setFromMatrixPosition:function(m){var e=m.elements;this.x=e[12];this.y=e[13];this.z=e[14];return this},setFromMatrixScale:function(m){var sx=this.setFromMatrixColumn(m,0).length(),sy=this.setFromMatrixColumn(m,1).length(),sz=this.setFromMatrixColumn(m,2).length();this.x=sx;this.y=sy;this.z=sz;return this},setFromMatrixColumn:function(m,index){return this.fromArray(m.elements,4*index)},equals:function(v){return v.x===this.x&&v.y===this.y&&v.z===this.z},fromArray:function(array,offset){if(offset===void 0)offset=0;this.x=array[offset];this.y=array[offset+1];this.z=array[offset+2];return this},toArray:function(array,offset){if(array===void 0)array=[];if(offset===void 0)offset=0;array[offset]=this.x;array[offset+1]=this.y;array[offset+2]=this.z;return array},fromBufferAttribute:function(attribute,index,offset){if(offset!==void 0){console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().")}this.x=attribute.getX(index);this.y=attribute.getY(index);this.z=attribute.getZ(index);return this}});var Vector3$1={Vector3:Vector3};_exports.$Vector3=Vector3$1;function Matrix4(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];if(0<arguments.length){console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}}Object.assign(Matrix4.prototype,{isMatrix4:!0,set:function(n11,n12,n13,n14,n21,n22,n23,n24,n31,n32,n33,n34,n41,n42,n43,n44){var te=this.elements;te[0]=n11;te[4]=n12;te[8]=n13;te[12]=n14;te[1]=n21;te[5]=n22;te[9]=n23;te[13]=n24;te[2]=n31;te[6]=n32;te[10]=n33;te[14]=n34;te[3]=n41;te[7]=n42;te[11]=n43;te[15]=n44;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return new Matrix4().fromArray(this.elements)},copy:function(m){var te=this.elements,me=m.elements;te[0]=me[0];te[1]=me[1];te[2]=me[2];te[3]=me[3];te[4]=me[4];te[5]=me[5];te[6]=me[6];te[7]=me[7];te[8]=me[8];te[9]=me[9];te[10]=me[10];te[11]=me[11];te[12]=me[12];te[13]=me[13];te[14]=me[14];te[15]=me[15];return this},copyPosition:function(m){var te=this.elements,me=m.elements;te[12]=me[12];te[13]=me[13];te[14]=me[14];return this},extractBasis:function(xAxis,yAxis,zAxis){xAxis.setFromMatrixColumn(this,0);yAxis.setFromMatrixColumn(this,1);zAxis.setFromMatrixColumn(this,2);return this},makeBasis:function(xAxis,yAxis,zAxis){this.set(xAxis.x,yAxis.x,zAxis.x,0,xAxis.y,yAxis.y,zAxis.y,0,xAxis.z,yAxis.z,zAxis.z,0,0,0,0,1);return this},extractRotation:function(){var v1=new Vector3;return function extractRotation(m){var te=this.elements,me=m.elements,scaleX=1/v1.setFromMatrixColumn(m,0).length(),scaleY=1/v1.setFromMatrixColumn(m,1).length(),scaleZ=1/v1.setFromMatrixColumn(m,2).length();te[0]=me[0]*scaleX;te[1]=me[1]*scaleX;te[2]=me[2]*scaleX;te[3]=0;te[4]=me[4]*scaleY;te[5]=me[5]*scaleY;te[6]=me[6]*scaleY;te[7]=0;te[8]=me[8]*scaleZ;te[9]=me[9]*scaleZ;te[10]=me[10]*scaleZ;te[11]=0;te[12]=0;te[13]=0;te[14]=0;te[15]=1;return this}}(),makeRotationFromEuler:function(euler){if(!(euler&&euler.isEuler)){console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.")}var te=this.elements,x=euler.x,y=euler.y,z=euler.z,a=_Mathcos(x),b=_Mathsin(x),c=_Mathcos(y),d=_Mathsin(y),e=_Mathcos(z),f=_Mathsin(z);if("XYZ"===euler.order){var ae=a*e,af=a*f,be=b*e,bf=b*f;te[0]=c*e;te[4]=-c*f;te[8]=d;te[1]=af+be*d;te[5]=ae-bf*d;te[9]=-b*c;te[2]=bf-ae*d;te[6]=be+af*d;te[10]=a*c}else if("YXZ"===euler.order){var ce=c*e,cf=c*f,de=d*e,df=d*f;te[0]=ce+df*b;te[4]=de*b-cf;te[8]=a*d;te[1]=a*f;te[5]=a*e;te[9]=-b;te[2]=cf*b-de;te[6]=df+ce*b;te[10]=a*c}else if("ZXY"===euler.order){var ce=c*e,cf=c*f,de=d*e,df=d*f;te[0]=ce-df*b;te[4]=-a*f;te[8]=de+cf*b;te[1]=cf+de*b;te[5]=a*e;te[9]=df-ce*b;te[2]=-a*d;te[6]=b;te[10]=a*c}else if("ZYX"===euler.order){var ae=a*e,af=a*f,be=b*e,bf=b*f;te[0]=c*e;te[4]=be*d-af;te[8]=ae*d+bf;te[1]=c*f;te[5]=bf*d+ae;te[9]=af*d-be;te[2]=-d;te[6]=b*c;te[10]=a*c}else if("YZX"===euler.order){var ac=a*c,ad=a*d,bc=b*c,bd=b*d;te[0]=c*e;te[4]=bd-ac*f;te[8]=bc*f+ad;te[1]=f;te[5]=a*e;te[9]=-b*e;te[2]=-d*e;te[6]=ad*f+bc;te[10]=ac-bd*f}else if("XZY"===euler.order){var ac=a*c,ad=a*d,bc=b*c,bd=b*d;te[0]=c*e;te[4]=-f;te[8]=d*e;te[1]=ac*f+bd;te[5]=a*e;te[9]=ad*f-bc;te[2]=bc*f-ad;te[6]=b*e;te[10]=bd*f+ac}te[3]=0;te[7]=0;te[11]=0;te[12]=0;te[13]=0;te[14]=0;te[15]=1;return this},makeRotationFromQuaternion:function(){var zero=new Vector3(0,0,0),one=new Vector3(1,1,1);return function makeRotationFromQuaternion(q){return this.compose(zero,q,one)}}(),lookAt:function(){var x=new Vector3,y=new Vector3,z=new Vector3;return function lookAt(eye,target,up){var te=this.elements;z.subVectors(eye,target);if(0===z.lengthSq()){z.z=1}z.normalize();x.crossVectors(up,z);if(0===x.lengthSq()){if(1===_Mathabs(up.z)){z.x+=1e-4}else{z.z+=1e-4}z.normalize();x.crossVectors(up,z)}x.normalize();y.crossVectors(z,x);te[0]=x.x;te[4]=y.x;te[8]=z.x;te[1]=x.y;te[5]=y.y;te[9]=z.y;te[2]=x.z;te[6]=y.z;te[10]=z.z;return this}}(),multiply:function(m,n){if(n!==void 0){console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.");return this.multiplyMatrices(m,n)}return this.multiplyMatrices(this,m)},premultiply:function(m){return this.multiplyMatrices(m,this)},multiplyMatrices:function(a,b){var ae=a.elements,be=b.elements,te=this.elements,a11=ae[0],a12=ae[4],a13=ae[8],a14=ae[12],a21=ae[1],a22=ae[5],a23=ae[9],a24=ae[13],a31=ae[2],a32=ae[6],a33=ae[10],a34=ae[14],a41=ae[3],a42=ae[7],a43=ae[11],a44=ae[15],b11=be[0],b12=be[4],b13=be[8],b14=be[12],b21=be[1],b22=be[5],b23=be[9],b24=be[13],b31=be[2],b32=be[6],b33=be[10],b34=be[14],b41=be[3],b42=be[7],b43=be[11],b44=be[15];te[0]=a11*b11+a12*b21+a13*b31+a14*b41;te[4]=a11*b12+a12*b22+a13*b32+a14*b42;te[8]=a11*b13+a12*b23+a13*b33+a14*b43;te[12]=a11*b14+a12*b24+a13*b34+a14*b44;te[1]=a21*b11+a22*b21+a23*b31+a24*b41;te[5]=a21*b12+a22*b22+a23*b32+a24*b42;te[9]=a21*b13+a22*b23+a23*b33+a24*b43;te[13]=a21*b14+a22*b24+a23*b34+a24*b44;te[2]=a31*b11+a32*b21+a33*b31+a34*b41;te[6]=a31*b12+a32*b22+a33*b32+a34*b42;te[10]=a31*b13+a32*b23+a33*b33+a34*b43;te[14]=a31*b14+a32*b24+a33*b34+a34*b44;te[3]=a41*b11+a42*b21+a43*b31+a44*b41;te[7]=a41*b12+a42*b22+a43*b32+a44*b42;te[11]=a41*b13+a42*b23+a43*b33+a44*b43;te[15]=a41*b14+a42*b24+a43*b34+a44*b44;return this},multiplyScalar:function(s){var te=this.elements;te[0]*=s;te[4]*=s;te[8]*=s;te[12]*=s;te[1]*=s;te[5]*=s;te[9]*=s;te[13]*=s;te[2]*=s;te[6]*=s;te[10]*=s;te[14]*=s;te[3]*=s;te[7]*=s;te[11]*=s;te[15]*=s;return this},applyToBufferAttribute:function(){var v1=new Vector3;return function applyToBufferAttribute(attribute){for(var i=0,l=attribute.count;i<l;i++){v1.x=attribute.getX(i);v1.y=attribute.getY(i);v1.z=attribute.getZ(i);v1.applyMatrix4(this);attribute.setXYZ(i,v1.x,v1.y,v1.z)}return attribute}}(),determinant:function(){var te=this.elements,n11=te[0],n12=te[4],n13=te[8],n14=te[12],n21=te[1],n22=te[5],n23=te[9],n24=te[13],n31=te[2],n32=te[6],n33=te[10],n34=te[14],n41=te[3],n42=te[7],n43=te[11],n44=te[15];return n41*(+n14*n23*n32-n13*n24*n32-n14*n22*n33+n12*n24*n33+n13*n22*n34-n12*n23*n34)+n42*(+n11*n23*n34-n11*n24*n33+n14*n21*n33-n13*n21*n34+n13*n24*n31-n14*n23*n31)+n43*(+n11*n24*n32-n11*n22*n34-n14*n21*n32+n12*n21*n34+n14*n22*n31-n12*n24*n31)+n44*(-n13*n22*n31-n11*n23*n32+n11*n22*n33+n13*n21*n32-n12*n21*n33+n12*n23*n31)},transpose:function(){var te=this.elements,tmp;tmp=te[1];te[1]=te[4];te[4]=tmp;tmp=te[2];te[2]=te[8];te[8]=tmp;tmp=te[6];te[6]=te[9];te[9]=tmp;tmp=te[3];te[3]=te[12];te[12]=tmp;tmp=te[7];te[7]=te[13];te[13]=tmp;tmp=te[11];te[11]=te[14];te[14]=tmp;return this},setPosition:function(v){var te=this.elements;te[12]=v.x;te[13]=v.y;te[14]=v.z;return this},getInverse:function(m,throwOnDegenerate){var te=this.elements,me=m.elements,n11=me[0],n21=me[1],n31=me[2],n41=me[3],n12=me[4],n22=me[5],n32=me[6],n42=me[7],n13=me[8],n23=me[9],n33=me[10],n43=me[11],n14=me[12],n24=me[13],n34=me[14],n44=me[15],t11=n23*n34*n42-n24*n33*n42+n24*n32*n43-n22*n34*n43-n23*n32*n44+n22*n33*n44,t12=n14*n33*n42-n13*n34*n42-n14*n32*n43+n12*n34*n43+n13*n32*n44-n12*n33*n44,t13=n13*n24*n42-n14*n23*n42+n14*n22*n43-n12*n24*n43-n13*n22*n44+n12*n23*n44,t14=n14*n23*n32-n13*n24*n32-n14*n22*n33+n12*n24*n33+n13*n22*n34-n12*n23*n34,det=n11*t11+n21*t12+n31*t13+n41*t14;if(0===det){var msg="THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";if(!0===throwOnDegenerate){throw new Error(msg)}else{console.warn(msg)}return this.identity()}var detInv=1/det;te[0]=t11*detInv;te[1]=(n24*n33*n41-n23*n34*n41-n24*n31*n43+n21*n34*n43+n23*n31*n44-n21*n33*n44)*detInv;te[2]=(n22*n34*n41-n24*n32*n41+n24*n31*n42-n21*n34*n42-n22*n31*n44+n21*n32*n44)*detInv;te[3]=(n23*n32*n41-n22*n33*n41-n23*n31*n42+n21*n33*n42+n22*n31*n43-n21*n32*n43)*detInv;te[4]=t12*detInv;te[5]=(n13*n34*n41-n14*n33*n41+n14*n31*n43-n11*n34*n43-n13*n31*n44+n11*n33*n44)*detInv;te[6]=(n14*n32*n41-n12*n34*n41-n14*n31*n42+n11*n34*n42+n12*n31*n44-n11*n32*n44)*detInv;te[7]=(n12*n33*n41-n13*n32*n41+n13*n31*n42-n11*n33*n42-n12*n31*n43+n11*n32*n43)*detInv;te[8]=t13*detInv;te[9]=(n14*n23*n41-n13*n24*n41-n14*n21*n43+n11*n24*n43+n13*n21*n44-n11*n23*n44)*detInv;te[10]=(n12*n24*n41-n14*n22*n41+n14*n21*n42-n11*n24*n42-n12*n21*n44+n11*n22*n44)*detInv;te[11]=(n13*n22*n41-n12*n23*n41-n13*n21*n42+n11*n23*n42+n12*n21*n43-n11*n22*n43)*detInv;te[12]=t14*detInv;te[13]=(n13*n24*n31-n14*n23*n31+n14*n21*n33-n11*n24*n33-n13*n21*n34+n11*n23*n34)*detInv;te[14]=(n14*n22*n31-n12*n24*n31-n14*n21*n32+n11*n24*n32+n12*n21*n34-n11*n22*n34)*detInv;te[15]=(n12*n23*n31-n13*n22*n31+n13*n21*n32-n11*n23*n32-n12*n21*n33+n11*n22*n33)*detInv;return this},scale:function(v){var te=this.elements,x=v.x,y=v.y,z=v.z;te[0]*=x;te[4]*=y;te[8]*=z;te[1]*=x;te[5]*=y;te[9]*=z;te[2]*=x;te[6]*=y;te[10]*=z;te[3]*=x;te[7]*=y;te[11]*=z;return this},getMaxScaleOnAxis:function(){var te=this.elements,scaleXSq=te[0]*te[0]+te[1]*te[1]+te[2]*te[2],scaleYSq=te[4]*te[4]+te[5]*te[5]+te[6]*te[6],scaleZSq=te[8]*te[8]+te[9]*te[9]+te[10]*te[10];return _Mathsqrt(_Mathmax(scaleXSq,scaleYSq,scaleZSq))},makeTranslation:function(x,y,z){this.set(1,0,0,x,0,1,0,y,0,0,1,z,0,0,0,1);return this},makeRotationX:function(theta){var c=_Mathcos(theta),s=_Mathsin(theta);this.set(1,0,0,0,0,c,-s,0,0,s,c,0,0,0,0,1);return this},makeRotationY:function(theta){var c=_Mathcos(theta),s=_Mathsin(theta);this.set(c,0,s,0,0,1,0,0,-s,0,c,0,0,0,0,1);return this},makeRotationZ:function(theta){var c=_Mathcos(theta),s=_Mathsin(theta);this.set(c,-s,0,0,s,c,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(axis,angle){var c=_Mathcos(angle),s=_Mathsin(angle),t=1-c,x=axis.x,y=axis.y,z=axis.z,tx=t*x,ty=t*y;this.set(tx*x+c,tx*y-s*z,tx*z+s*y,0,tx*y+s*z,ty*y+c,ty*z-s*x,0,tx*z-s*y,ty*z+s*x,t*z*z+c,0,0,0,0,1);return this},makeScale:function(x,y,z){this.set(x,0,0,0,0,y,0,0,0,0,z,0,0,0,0,1);return this},makeShear:function(x,y,z){this.set(1,y,z,0,x,1,z,0,x,y,1,0,0,0,0,1);return this},compose:function(position,quaternion,scale){var te=this.elements,x=quaternion._x,y=quaternion._y,z=quaternion._z,w=quaternion._w,x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2,sx=scale.x,sy=scale.y,sz=scale.z;te[0]=(1-(yy+zz))*sx;te[1]=(xy+wz)*sx;te[2]=(xz-wy)*sx;te[3]=0;te[4]=(xy-wz)*sy;te[5]=(1-(xx+zz))*sy;te[6]=(yz+wx)*sy;te[7]=0;te[8]=(xz+wy)*sz;te[9]=(yz-wx)*sz;te[10]=(1-(xx+yy))*sz;te[11]=0;te[12]=position.x;te[13]=position.y;te[14]=position.z;te[15]=1;return this},decompose:function(){var vector=new Vector3,matrix=new Matrix4;return function decompose(position,quaternion,scale){var te=this.elements,sx=vector.set(te[0],te[1],te[2]).length(),sy=vector.set(te[4],te[5],te[6]).length(),sz=vector.set(te[8],te[9],te[10]).length(),det=this.determinant();if(0>det)sx=-sx;position.x=te[12];position.y=te[13];position.z=te[14];matrix.copy(this);var invSX=1/sx,invSY=1/sy,invSZ=1/sz;matrix.elements[0]*=invSX;matrix.elements[1]*=invSX;matrix.elements[2]*=invSX;matrix.elements[4]*=invSY;matrix.elements[5]*=invSY;matrix.elements[6]*=invSY;matrix.elements[8]*=invSZ;matrix.elements[9]*=invSZ;matrix.elements[10]*=invSZ;quaternion.setFromRotationMatrix(matrix);scale.x=sx;scale.y=sy;scale.z=sz;return this}}(),makePerspective:function(left,right,top,bottom,near,far){if(far===void 0){console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.")}var te=this.elements,x=2*near/(right-left),y=2*near/(top-bottom),a=(right+left)/(right-left),b=(top+bottom)/(top-bottom),c=-(far+near)/(far-near),d=-2*far*near/(far-near);te[0]=x;te[4]=0;te[8]=a;te[12]=0;te[1]=0;te[5]=y;te[9]=b;te[13]=0;te[2]=0;te[6]=0;te[10]=c;te[14]=d;te[3]=0;te[7]=0;te[11]=-1;te[15]=0;return this},makeOrthographic:function(left,right,top,bottom,near,far){var te=this.elements,w=1/(right-left),h=1/(top-bottom),p=1/(far-near),x=(right+left)*w,y=(top+bottom)*h,z=(far+near)*p;te[0]=2*w;te[4]=0;te[8]=0;te[12]=-x;te[1]=0;te[5]=2*h;te[9]=0;te[13]=-y;te[2]=0;te[6]=0;te[10]=-2*p;te[14]=-z;te[3]=0;te[7]=0;te[11]=0;te[15]=1;return this},equals:function(matrix){for(var te=this.elements,me=matrix.elements,i=0;16>i;i++){if(te[i]!==me[i])return!1}return!0},fromArray:function(array,offset){if(offset===void 0)offset=0;for(var i=0;16>i;i++){this.elements[i]=array[i+offset]}return this},toArray:function(array,offset){if(array===void 0)array=[];if(offset===void 0)offset=0;var te=this.elements;array[offset]=te[0];array[offset+1]=te[1];array[offset+2]=te[2];array[offset+3]=te[3];array[offset+4]=te[4];array[offset+5]=te[5];array[offset+6]=te[6];array[offset+7]=te[7];array[offset+8]=te[8];array[offset+9]=te[9];array[offset+10]=te[10];array[offset+11]=te[11];array[offset+12]=te[12];array[offset+13]=te[13];array[offset+14]=te[14];array[offset+15]=te[15];return array}});var Matrix4$1={Matrix4:Matrix4};_exports.$Matrix4=Matrix4$1;function EventDispatcher(){}Object.assign(EventDispatcher.prototype,{addEventListener:function(type,listener){if(this._listeners===void 0)this._listeners={};var listeners=this._listeners;if(listeners[type]===void 0){listeners[type]=[]}if(-1===listeners[type].indexOf(listener)){listeners[type].push(listener)}},hasEventListener:function(type,listener){if(this._listeners===void 0)return!1;var listeners=this._listeners;return listeners[type]!==void 0&&-1!==listeners[type].indexOf(listener)},removeEventListener:function(type,listener){if(this._listeners===void 0)return;var listeners=this._listeners,listenerArray=listeners[type];if(listenerArray!==void 0){var index=listenerArray.indexOf(listener);if(-1!==index){listenerArray.splice(index,1)}}},dispatchEvent:function(event){if(this._listeners===void 0)return;var listeners=this._listeners,listenerArray=listeners[event.type];if(listenerArray!==void 0){event.target=this;for(var array=listenerArray.slice(0),i=0,l=array.length;i<l;i++){array[i].call(this,event)}}}});var EventDispatcher$1={EventDispatcher:EventDispatcher};_exports.$EventDispatcher=EventDispatcher$1;function Euler(x,y,z,order){this._x=x||0;this._y=y||0;this._z=z||0;this._order=order||Euler.DefaultOrder}Euler.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];Euler.DefaultOrder="XYZ";Object.defineProperties(Euler.prototype,{x:{get:function(){return this._x},set:function(value){this._x=value;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(value){this._y=value;this.onChangeCallback()}},z:{get:function(){return this._z},set:function(value){this._z=value;this.onChangeCallback()}},order:{get:function(){return this._order},set:function(value){this._order=value;this.onChangeCallback()}}});Object.assign(Euler.prototype,{isEuler:!0,set:function(x,y,z,order){this._x=x;this._y=y;this._z=z;this._order=order||this._order;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(euler){this._x=euler._x;this._y=euler._y;this._z=euler._z;this._order=euler._order;this.onChangeCallback();return this},setFromRotationMatrix:function(m,order,update){var _Mathasin=Math.asin,clamp=_Math.clamp,te=m.elements,m11=te[0],m12=te[4],m13=te[8],m21=te[1],m22=te[5],m23=te[9],m31=te[2],m32=te[6],m33=te[10];order=order||this._order;if("XYZ"===order){this._y=_Mathasin(clamp(m13,-1,1));if(.99999>_Mathabs(m13)){this._x=_Mathatan(-m23,m33);this._z=_Mathatan(-m12,m11)}else{this._x=_Mathatan(m32,m22);this._z=0}}else if("YXZ"===order){this._x=_Mathasin(-clamp(m23,-1,1));if(.99999>_Mathabs(m23)){this._y=_Mathatan(m13,m33);this._z=_Mathatan(m21,m22)}else{this._y=_Mathatan(-m31,m11);this._z=0}}else if("ZXY"===order){this._x=_Mathasin(clamp(m32,-1,1));if(.99999>_Mathabs(m32)){this._y=_Mathatan(-m31,m33);this._z=_Mathatan(-m12,m22)}else{this._y=0;this._z=_Mathatan(m21,m11)}}else if("ZYX"===order){this._y=_Mathasin(-clamp(m31,-1,1));if(.99999>_Mathabs(m31)){this._x=_Mathatan(m32,m33);this._z=_Mathatan(m21,m11)}else{this._x=0;this._z=_Mathatan(-m12,m22)}}else if("YZX"===order){this._z=_Mathasin(clamp(m21,-1,1));if(.99999>_Mathabs(m21)){this._x=_Mathatan(-m23,m22);this._y=_Mathatan(-m31,m11)}else{this._x=0;this._y=_Mathatan(m13,m33)}}else if("XZY"===order){this._z=_Mathasin(-clamp(m12,-1,1));if(.99999>_Mathabs(m12)){this._x=_Mathatan(m32,m22);this._y=_Mathatan(m13,m11)}else{this._x=_Mathatan(-m23,m33);this._y=0}}else{console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+order)}this._order=order;if(!1!==update)this.onChangeCallback();return this},setFromQuaternion:function(){var matrix=new Matrix4;return function setFromQuaternion(q,order,update){matrix.makeRotationFromQuaternion(q);return this.setFromRotationMatrix(matrix,order,update)}}(),setFromVector3:function(v,order){return this.set(v.x,v.y,v.z,order||this._order)},reorder:function(){var q=new Quaternion;return function reorder(newOrder){q.setFromEuler(this);return this.setFromQuaternion(q,newOrder)}}(),equals:function(euler){return euler._x===this._x&&euler._y===this._y&&euler._z===this._z&&euler._order===this._order},fromArray:function(array){this._x=array[0];this._y=array[1];this._z=array[2];if(array[3]!==void 0)this._order=array[3];this.onChangeCallback();return this},toArray:function(array,offset){if(array===void 0)array=[];if(offset===void 0)offset=0;array[offset]=this._x;array[offset+1]=this._y;array[offset+2]=this._z;array[offset+3]=this._order;return array},toVector3:function(optionalResult){if(optionalResult){return optionalResult.set(this._x,this._y,this._z)}else{return new Vector3(this._x,this._y,this._z)}},onChange:function(callback){this.onChangeCallback=callback;return this},onChangeCallback:function(){}});var Euler$1={Euler:Euler};_exports.$Euler=Euler$1;function Layers(){this.mask=0|1}Object.assign(Layers.prototype,{set:function(channel){this.mask=0|1<<channel},enable:function(channel){this.mask|=0|1<<channel},toggle:function(channel){this.mask^=0|1<<channel},disable:function(channel){this.mask&=~(0|1<<channel)},test:function(layers){return 0!==(this.mask&layers.mask)}});var Layers$1={Layers:Layers};_exports.$Layers=Layers$1;function Matrix3(){this.elements=[1,0,0,0,1,0,0,0,1];if(0<arguments.length){console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}}Object.assign(Matrix3.prototype,{isMatrix3:!0,set:function(n11,n12,n13,n21,n22,n23,n31,n32,n33){var te=this.elements;te[0]=n11;te[1]=n21;te[2]=n31;te[3]=n12;te[4]=n22;te[5]=n32;te[6]=n13;te[7]=n23;te[8]=n33;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(m){var te=this.elements,me=m.elements;te[0]=me[0];te[1]=me[1];te[2]=me[2];te[3]=me[3];te[4]=me[4];te[5]=me[5];te[6]=me[6];te[7]=me[7];te[8]=me[8];return this},setFromMatrix4:function(m){var me=m.elements;this.set(me[0],me[4],me[8],me[1],me[5],me[9],me[2],me[6],me[10]);return this},applyToBufferAttribute:function(){var v1=new Vector3;return function applyToBufferAttribute(attribute){for(var i=0,l=attribute.count;i<l;i++){v1.x=attribute.getX(i);v1.y=attribute.getY(i);v1.z=attribute.getZ(i);v1.applyMatrix3(this);attribute.setXYZ(i,v1.x,v1.y,v1.z)}return attribute}}(),multiply:function(m){return this.multiplyMatrices(this,m)},premultiply:function(m){return this.multiplyMatrices(m,this)},multiplyMatrices:function(a,b){var ae=a.elements,be=b.elements,te=this.elements,a11=ae[0],a12=ae[3],a13=ae[6],a21=ae[1],a22=ae[4],a23=ae[7],a31=ae[2],a32=ae[5],a33=ae[8],b11=be[0],b12=be[3],b13=be[6],b21=be[1],b22=be[4],b23=be[7],b31=be[2],b32=be[5],b33=be[8];te[0]=a11*b11+a12*b21+a13*b31;te[3]=a11*b12+a12*b22+a13*b32;te[6]=a11*b13+a12*b23+a13*b33;te[1]=a21*b11+a22*b21+a23*b31;te[4]=a21*b12+a22*b22+a23*b32;te[7]=a21*b13+a22*b23+a23*b33;te[2]=a31*b11+a32*b21+a33*b31;te[5]=a31*b12+a32*b22+a33*b32;te[8]=a31*b13+a32*b23+a33*b33;return this},multiplyScalar:function(s){var te=this.elements;te[0]*=s;te[3]*=s;te[6]*=s;te[1]*=s;te[4]*=s;te[7]*=s;te[2]*=s;te[5]*=s;te[8]*=s;return this},determinant:function(){var te=this.elements,a=te[0],b=te[1],c=te[2],d=te[3],e=te[4],f=te[5],g=te[6],h=te[7],i=te[8];return a*e*i-a*f*h-b*d*i+b*f*g+c*d*h-c*e*g},getInverse:function(matrix,throwOnDegenerate){if(matrix&&matrix.isMatrix4){console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.")}var me=matrix.elements,te=this.elements,n11=me[0],n21=me[1],n31=me[2],n12=me[3],n22=me[4],n32=me[5],n13=me[6],n23=me[7],n33=me[8],t11=n33*n22-n32*n23,t12=n32*n13-n33*n12,t13=n23*n12-n22*n13,det=n11*t11+n21*t12+n31*t13;if(0===det){var msg="THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";if(!0===throwOnDegenerate){throw new Error(msg)}else{console.warn(msg)}return this.identity()}var detInv=1/det;te[0]=t11*detInv;te[1]=(n31*n23-n33*n21)*detInv;te[2]=(n32*n21-n31*n22)*detInv;te[3]=t12*detInv;te[4]=(n33*n11-n31*n13)*detInv;te[5]=(n31*n12-n32*n11)*detInv;te[6]=t13*detInv;te[7]=(n21*n13-n23*n11)*detInv;te[8]=(n22*n11-n21*n12)*detInv;return this},transpose:function(){var tmp,m=this.elements;tmp=m[1];m[1]=m[3];m[3]=tmp;tmp=m[2];m[2]=m[6];m[6]=tmp;tmp=m[5];m[5]=m[7];m[7]=tmp;return this},getNormalMatrix:function(matrix4){return this.setFromMatrix4(matrix4).getInverse(this).transpose()},transposeIntoArray:function(r){var m=this.elements;r[0]=m[0];r[1]=m[3];r[2]=m[6];r[3]=m[1];r[4]=m[4];r[5]=m[7];r[6]=m[2];r[7]=m[5];r[8]=m[8];return this},setUvTransform:function(tx,ty,sx,sy,rotation,cx,cy){var c=_Mathcos(rotation),s=_Mathsin(rotation);this.set(sx*c,sx*s,-sx*(c*cx+s*cy)+cx+tx,-sy*s,sy*c,-sy*(-s*cx+c*cy)+cy+ty,0,0,1)},scale:function(sx,sy){var te=this.elements;te[0]*=sx;te[3]*=sx;te[6]*=sx;te[1]*=sy;te[4]*=sy;te[7]*=sy;return this},rotate:function(theta){var c=_Mathcos(theta),s=_Mathsin(theta),te=this.elements,a11=te[0],a12=te[3],a13=te[6],a21=te[1],a22=te[4],a23=te[7];te[0]=c*a11+s*a21;te[3]=c*a12+s*a22;te[6]=c*a13+s*a23;te[1]=-s*a11+c*a21;te[4]=-s*a12+c*a22;te[7]=-s*a13+c*a23;return this},translate:function(tx,ty){var te=this.elements;te[0]+=tx*te[2];te[3]+=tx*te[5];te[6]+=tx*te[8];te[1]+=ty*te[2];te[4]+=ty*te[5];te[7]+=ty*te[8];return this},equals:function(matrix){for(var te=this.elements,me=matrix.elements,i=0;9>i;i++){if(te[i]!==me[i])return!1}return!0},fromArray:function(array,offset){if(offset===void 0)offset=0;for(var i=0;9>i;i++){this.elements[i]=array[i+offset]}return this},toArray:function(array,offset){if(array===void 0)array=[];if(offset===void 0)offset=0;var te=this.elements;array[offset]=te[0];array[offset+1]=te[1];array[offset+2]=te[2];array[offset+3]=te[3];array[offset+4]=te[4];array[offset+5]=te[5];array[offset+6]=te[6];array[offset+7]=te[7];array[offset+8]=te[8];return array}});var Matrix3$1={Matrix3:Matrix3};_exports.$Matrix3=Matrix3$1;var REVISION="101";_exports.REVISION=REVISION;var MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};_exports.MOUSE=MOUSE;var CullFaceNone=0;_exports.CullFaceNone=CullFaceNone;var CullFaceBack=1;_exports.CullFaceBack=CullFaceBack;var CullFaceFront=2;_exports.CullFaceFront=CullFaceFront;var CullFaceFrontBack=3;_exports.CullFaceFrontBack=CullFaceFrontBack;var FrontFaceDirectionCW=0;_exports.FrontFaceDirectionCW=FrontFaceDirectionCW;var FrontFaceDirectionCCW=1;_exports.FrontFaceDirectionCCW=FrontFaceDirectionCCW;var BasicShadowMap=0;_exports.BasicShadowMap=BasicShadowMap;var PCFShadowMap=1;_exports.PCFShadowMap=PCFShadowMap;var PCFSoftShadowMap=2;_exports.PCFSoftShadowMap=PCFSoftShadowMap;var FrontSide=0;_exports.FrontSide=FrontSide;var BackSide=1;_exports.BackSide=BackSide;var DoubleSide=2;_exports.DoubleSide=DoubleSide;var FlatShading=1;_exports.FlatShading=FlatShading;var SmoothShading=2;_exports.SmoothShading=SmoothShading;var NoColors=0;_exports.NoColors=NoColors;var FaceColors=1;_exports.FaceColors=FaceColors;var VertexColors=2;_exports.VertexColors=VertexColors;var NoBlending=0;_exports.NoBlending=NoBlending;var NormalBlending=1;_exports.NormalBlending=NormalBlending;var AdditiveBlending=2;_exports.AdditiveBlending=AdditiveBlending;var SubtractiveBlending=3;_exports.SubtractiveBlending=SubtractiveBlending;var MultiplyBlending=4;_exports.MultiplyBlending=MultiplyBlending;var CustomBlending=5;_exports.CustomBlending=CustomBlending;var AddEquation=100;_exports.AddEquation=AddEquation;var SubtractEquation=101;_exports.SubtractEquation=SubtractEquation;var ReverseSubtractEquation=102;_exports.ReverseSubtractEquation=ReverseSubtractEquation;var MinEquation=103;_exports.MinEquation=MinEquation;var MaxEquation=104;_exports.MaxEquation=MaxEquation;var ZeroFactor=200;_exports.ZeroFactor=ZeroFactor;var OneFactor=201;_exports.OneFactor=OneFactor;var SrcColorFactor=202;_exports.SrcColorFactor=SrcColorFactor;var OneMinusSrcColorFactor=203;_exports.OneMinusSrcColorFactor=OneMinusSrcColorFactor;var SrcAlphaFactor=204;_exports.SrcAlphaFactor=SrcAlphaFactor;var OneMinusSrcAlphaFactor=205;_exports.OneMinusSrcAlphaFactor=OneMinusSrcAlphaFactor;var DstAlphaFactor=206;_exports.DstAlphaFactor=DstAlphaFactor;var OneMinusDstAlphaFactor=207;_exports.OneMinusDstAlphaFactor=OneMinusDstAlphaFactor;var DstColorFactor=208;_exports.DstColorFactor=DstColorFactor;var OneMinusDstColorFactor=209;_exports.OneMinusDstColorFactor=OneMinusDstColorFactor;var SrcAlphaSaturateFactor=210;_exports.SrcAlphaSaturateFactor=SrcAlphaSaturateFactor;var NeverDepth=0;_exports.NeverDepth=NeverDepth;var AlwaysDepth=1;_exports.AlwaysDepth=AlwaysDepth;var LessDepth=2;_exports.LessDepth=LessDepth;var LessEqualDepth=3;_exports.LessEqualDepth=LessEqualDepth;var EqualDepth=4;_exports.EqualDepth=EqualDepth;var GreaterEqualDepth=5;_exports.GreaterEqualDepth=GreaterEqualDepth;var GreaterDepth=6;_exports.GreaterDepth=GreaterDepth;var NotEqualDepth=7;_exports.NotEqualDepth=NotEqualDepth;var MultiplyOperation=0;_exports.MultiplyOperation=MultiplyOperation;var MixOperation=1;_exports.MixOperation=MixOperation;var AddOperation=2;_exports.AddOperation=AddOperation;var NoToneMapping=0;_exports.NoToneMapping=NoToneMapping;var LinearToneMapping=1;_exports.LinearToneMapping=LinearToneMapping;var ReinhardToneMapping=2;_exports.ReinhardToneMapping=ReinhardToneMapping;var Uncharted2ToneMapping=3;_exports.Uncharted2ToneMapping=Uncharted2ToneMapping;var CineonToneMapping=4;_exports.CineonToneMapping=CineonToneMapping;var ACESFilmicToneMapping=5;_exports.ACESFilmicToneMapping=ACESFilmicToneMapping;var UVMapping=300;_exports.UVMapping=UVMapping;var CubeReflectionMapping=301;_exports.CubeReflectionMapping=CubeReflectionMapping;var CubeRefractionMapping=302;_exports.CubeRefractionMapping=CubeRefractionMapping;var EquirectangularReflectionMapping=303;_exports.EquirectangularReflectionMapping=EquirectangularReflectionMapping;var EquirectangularRefractionMapping=304;_exports.EquirectangularRefractionMapping=EquirectangularRefractionMapping;var SphericalReflectionMapping=305;_exports.SphericalReflectionMapping=SphericalReflectionMapping;var CubeUVReflectionMapping=306;_exports.CubeUVReflectionMapping=CubeUVReflectionMapping;var CubeUVRefractionMapping=307;_exports.CubeUVRefractionMapping=CubeUVRefractionMapping;var RepeatWrapping=1e3;_exports.RepeatWrapping=RepeatWrapping;var ClampToEdgeWrapping=1001;_exports.ClampToEdgeWrapping=ClampToEdgeWrapping;var MirroredRepeatWrapping=1002;_exports.MirroredRepeatWrapping=MirroredRepeatWrapping;var NearestFilter=1003;_exports.NearestFilter=NearestFilter;var NearestMipMapNearestFilter=1004;_exports.NearestMipMapNearestFilter=NearestMipMapNearestFilter;var NearestMipMapLinearFilter=1005;_exports.NearestMipMapLinearFilter=NearestMipMapLinearFilter;var LinearFilter=1006;_exports.LinearFilter=LinearFilter;var LinearMipMapNearestFilter=1007;_exports.LinearMipMapNearestFilter=LinearMipMapNearestFilter;var LinearMipMapLinearFilter=1008;_exports.LinearMipMapLinearFilter=LinearMipMapLinearFilter;var UnsignedByteType=1009;_exports.UnsignedByteType=UnsignedByteType;var ByteType=1010;_exports.ByteType=ByteType;var ShortType=1011;_exports.ShortType=ShortType;var UnsignedShortType=1012;_exports.UnsignedShortType=UnsignedShortType;var IntType=1013;_exports.IntType=IntType;var UnsignedIntType=1014;_exports.UnsignedIntType=UnsignedIntType;var FloatType=1015;_exports.FloatType=FloatType;var HalfFloatType=1016;_exports.HalfFloatType=HalfFloatType;var UnsignedShort4444Type=1017;_exports.UnsignedShort4444Type=UnsignedShort4444Type;var UnsignedShort5551Type=1018;_exports.UnsignedShort5551Type=UnsignedShort5551Type;var UnsignedShort565Type=1019;_exports.UnsignedShort565Type=UnsignedShort565Type;var UnsignedInt248Type=1020;_exports.UnsignedInt248Type=UnsignedInt248Type;var AlphaFormat=1021;_exports.AlphaFormat=AlphaFormat;var RGBFormat=1022;_exports.RGBFormat=RGBFormat;var RGBAFormat=1023;_exports.RGBAFormat=RGBAFormat;var LuminanceFormat=1024;_exports.LuminanceFormat=LuminanceFormat;var LuminanceAlphaFormat=1025;_exports.LuminanceAlphaFormat=LuminanceAlphaFormat;var RGBEFormat=RGBAFormat;_exports.RGBEFormat=RGBEFormat;var DepthFormat=1026;_exports.DepthFormat=DepthFormat;var DepthStencilFormat=1027;_exports.DepthStencilFormat=DepthStencilFormat;var RedFormat=1028;_exports.RedFormat=RedFormat;var RGB_S3TC_DXT1_Format=33776;_exports.RGB_S3TC_DXT1_Format=RGB_S3TC_DXT1_Format;var RGBA_S3TC_DXT1_Format=33777;_exports.RGBA_S3TC_DXT1_Format=RGBA_S3TC_DXT1_Format;var RGBA_S3TC_DXT3_Format=33778;_exports.RGBA_S3TC_DXT3_Format=RGBA_S3TC_DXT3_Format;var RGBA_S3TC_DXT5_Format=33779;_exports.RGBA_S3TC_DXT5_Format=RGBA_S3TC_DXT5_Format;var RGB_PVRTC_4BPPV1_Format=35840;_exports.RGB_PVRTC_4BPPV1_Format=RGB_PVRTC_4BPPV1_Format;var RGB_PVRTC_2BPPV1_Format=35841;_exports.RGB_PVRTC_2BPPV1_Format=RGB_PVRTC_2BPPV1_Format;var RGBA_PVRTC_4BPPV1_Format=35842;_exports.RGBA_PVRTC_4BPPV1_Format=RGBA_PVRTC_4BPPV1_Format;var RGBA_PVRTC_2BPPV1_Format=35843;_exports.RGBA_PVRTC_2BPPV1_Format=RGBA_PVRTC_2BPPV1_Format;var RGB_ETC1_Format=36196;_exports.RGB_ETC1_Format=RGB_ETC1_Format;var RGBA_ASTC_4x4_Format=37808;_exports.RGBA_ASTC_4x4_Format=RGBA_ASTC_4x4_Format;var RGBA_ASTC_5x4_Format=37809;_exports.RGBA_ASTC_5x4_Format=RGBA_ASTC_5x4_Format;var RGBA_ASTC_5x5_Format=37810;_exports.RGBA_ASTC_5x5_Format=RGBA_ASTC_5x5_Format;var RGBA_ASTC_6x5_Format=37811;_exports.RGBA_ASTC_6x5_Format=RGBA_ASTC_6x5_Format;var RGBA_ASTC_6x6_Format=37812;_exports.RGBA_ASTC_6x6_Format=RGBA_ASTC_6x6_Format;var RGBA_ASTC_8x5_Format=37813;_exports.RGBA_ASTC_8x5_Format=RGBA_ASTC_8x5_Format;var RGBA_ASTC_8x6_Format=37814;_exports.RGBA_ASTC_8x6_Format=RGBA_ASTC_8x6_Format;var RGBA_ASTC_8x8_Format=37815;_exports.RGBA_ASTC_8x8_Format=RGBA_ASTC_8x8_Format;var RGBA_ASTC_10x5_Format=37816;_exports.RGBA_ASTC_10x5_Format=RGBA_ASTC_10x5_Format;var RGBA_ASTC_10x6_Format=37817;_exports.RGBA_ASTC_10x6_Format=RGBA_ASTC_10x6_Format;var RGBA_ASTC_10x8_Format=37818;_exports.RGBA_ASTC_10x8_Format=RGBA_ASTC_10x8_Format;var RGBA_ASTC_10x10_Format=37819;_exports.RGBA_ASTC_10x10_Format=RGBA_ASTC_10x10_Format;var RGBA_ASTC_12x10_Format=37820;_exports.RGBA_ASTC_12x10_Format=RGBA_ASTC_12x10_Format;var RGBA_ASTC_12x12_Format=37821;_exports.RGBA_ASTC_12x12_Format=RGBA_ASTC_12x12_Format;var LoopOnce=2200;_exports.LoopOnce=LoopOnce;var LoopRepeat=2201;_exports.LoopRepeat=LoopRepeat;var LoopPingPong=2202;_exports.LoopPingPong=LoopPingPong;var InterpolateDiscrete=2300;_exports.InterpolateDiscrete=InterpolateDiscrete;var InterpolateLinear=2301;_exports.InterpolateLinear=InterpolateLinear;var InterpolateSmooth=2302;_exports.InterpolateSmooth=InterpolateSmooth;var ZeroCurvatureEnding=2400;_exports.ZeroCurvatureEnding=ZeroCurvatureEnding;var ZeroSlopeEnding=2401;_exports.ZeroSlopeEnding=ZeroSlopeEnding;var WrapAroundEnding=2402;_exports.WrapAroundEnding=WrapAroundEnding;var TrianglesDrawMode=0;_exports.TrianglesDrawMode=TrianglesDrawMode;var TriangleStripDrawMode=1;_exports.TriangleStripDrawMode=TriangleStripDrawMode;var TriangleFanDrawMode=2;_exports.TriangleFanDrawMode=TriangleFanDrawMode;var LinearEncoding=3e3;_exports.LinearEncoding=LinearEncoding;var sRGBEncoding=3001;_exports.sRGBEncoding=sRGBEncoding;var GammaEncoding=3007;_exports.GammaEncoding=GammaEncoding;var RGBEEncoding=3002;_exports.RGBEEncoding=RGBEEncoding;var LogLuvEncoding=3003;_exports.LogLuvEncoding=LogLuvEncoding;var RGBM7Encoding=3004;_exports.RGBM7Encoding=RGBM7Encoding;var RGBM16Encoding=3005;_exports.RGBM16Encoding=RGBM16Encoding;var RGBDEncoding=3006;_exports.RGBDEncoding=RGBDEncoding;var BasicDepthPacking=3200;_exports.BasicDepthPacking=BasicDepthPacking;var RGBADepthPacking=3201;_exports.RGBADepthPacking=RGBADepthPacking;var TangentSpaceNormalMap=0;_exports.TangentSpaceNormalMap=TangentSpaceNormalMap;var ObjectSpaceNormalMap=1;_exports.ObjectSpaceNormalMap=ObjectSpaceNormalMap;var constants={REVISION:REVISION,MOUSE:MOUSE,CullFaceNone:CullFaceNone,CullFaceBack:CullFaceBack,CullFaceFront:CullFaceFront,CullFaceFrontBack:CullFaceFrontBack,FrontFaceDirectionCW:FrontFaceDirectionCW,FrontFaceDirectionCCW:FrontFaceDirectionCCW,BasicShadowMap:BasicShadowMap,PCFShadowMap:PCFShadowMap,PCFSoftShadowMap:PCFSoftShadowMap,FrontSide:FrontSide,BackSide:BackSide,DoubleSide:DoubleSide,FlatShading:FlatShading,SmoothShading:SmoothShading,NoColors:NoColors,FaceColors:FaceColors,VertexColors:VertexColors,NoBlending:NoBlending,NormalBlending:NormalBlending,AdditiveBlending:AdditiveBlending,SubtractiveBlending:SubtractiveBlending,MultiplyBlending:MultiplyBlending,CustomBlending:CustomBlending,AddEquation:AddEquation,SubtractEquation:SubtractEquation,ReverseSubtractEquation:ReverseSubtractEquation,MinEquation:MinEquation,MaxEquation:MaxEquation,ZeroFactor:ZeroFactor,OneFactor:OneFactor,SrcColorFactor:SrcColorFactor,OneMinusSrcColorFactor:OneMinusSrcColorFactor,SrcAlphaFactor:SrcAlphaFactor,OneMinusSrcAlphaFactor:OneMinusSrcAlphaFactor,DstAlphaFactor:DstAlphaFactor,OneMinusDstAlphaFactor:OneMinusDstAlphaFactor,DstColorFactor:DstColorFactor,OneMinusDstColorFactor:OneMinusDstColorFactor,SrcAlphaSaturateFactor:SrcAlphaSaturateFactor,NeverDepth:NeverDepth,AlwaysDepth:AlwaysDepth,LessDepth:LessDepth,LessEqualDepth:LessEqualDepth,EqualDepth:EqualDepth,GreaterEqualDepth:GreaterEqualDepth,GreaterDepth:GreaterDepth,NotEqualDepth:NotEqualDepth,MultiplyOperation:MultiplyOperation,MixOperation:MixOperation,AddOperation:AddOperation,NoToneMapping:NoToneMapping,LinearToneMapping:LinearToneMapping,ReinhardToneMapping:ReinhardToneMapping,Uncharted2ToneMapping:Uncharted2ToneMapping,CineonToneMapping:CineonToneMapping,ACESFilmicToneMapping:ACESFilmicToneMapping,UVMapping:UVMapping,CubeReflectionMapping:CubeReflectionMapping,CubeRefractionMapping:CubeRefractionMapping,EquirectangularReflectionMapping:EquirectangularReflectionMapping,EquirectangularRefractionMapping:EquirectangularRefractionMapping,SphericalReflectionMapping:SphericalReflectionMapping,CubeUVReflectionMapping:CubeUVReflectionMapping,CubeUVRefractionMapping:CubeUVRefractionMapping,RepeatWrapping:RepeatWrapping,ClampToEdgeWrapping:ClampToEdgeWrapping,MirroredRepeatWrapping:MirroredRepeatWrapping,NearestFilter:NearestFilter,NearestMipMapNearestFilter:NearestMipMapNearestFilter,NearestMipMapLinearFilter:NearestMipMapLinearFilter,LinearFilter:LinearFilter,LinearMipMapNearestFilter:LinearMipMapNearestFilter,LinearMipMapLinearFilter:LinearMipMapLinearFilter,UnsignedByteType:UnsignedByteType,ByteType:ByteType,ShortType:ShortType,UnsignedShortType:UnsignedShortType,IntType:IntType,UnsignedIntType:UnsignedIntType,FloatType:FloatType,HalfFloatType:HalfFloatType,UnsignedShort4444Type:UnsignedShort4444Type,UnsignedShort5551Type:UnsignedShort5551Type,UnsignedShort565Type:UnsignedShort565Type,UnsignedInt248Type:UnsignedInt248Type,AlphaFormat:AlphaFormat,RGBFormat:RGBFormat,RGBAFormat:RGBAFormat,LuminanceFormat:LuminanceFormat,LuminanceAlphaFormat:LuminanceAlphaFormat,RGBEFormat:RGBEFormat,DepthFormat:DepthFormat,DepthStencilFormat:DepthStencilFormat,RedFormat:RedFormat,RGB_S3TC_DXT1_Format:RGB_S3TC_DXT1_Format,RGBA_S3TC_DXT1_Format:RGBA_S3TC_DXT1_Format,RGBA_S3TC_DXT3_Format:RGBA_S3TC_DXT3_Format,RGBA_S3TC_DXT5_Format:RGBA_S3TC_DXT5_Format,RGB_PVRTC_4BPPV1_Format:RGB_PVRTC_4BPPV1_Format,RGB_PVRTC_2BPPV1_Format:RGB_PVRTC_2BPPV1_Format,RGBA_PVRTC_4BPPV1_Format:RGBA_PVRTC_4BPPV1_Format,RGBA_PVRTC_2BPPV1_Format:RGBA_PVRTC_2BPPV1_Format,RGB_ETC1_Format:RGB_ETC1_Format,RGBA_ASTC_4x4_Format:RGBA_ASTC_4x4_Format,RGBA_ASTC_5x4_Format:RGBA_ASTC_5x4_Format,RGBA_ASTC_5x5_Format:RGBA_ASTC_5x5_Format,RGBA_ASTC_6x5_Format:RGBA_ASTC_6x5_Format,RGBA_ASTC_6x6_Format:RGBA_ASTC_6x6_Format,RGBA_ASTC_8x5_Format:RGBA_ASTC_8x5_Format,RGBA_ASTC_8x6_Format:RGBA_ASTC_8x6_Format,RGBA_ASTC_8x8_Format:RGBA_ASTC_8x8_Format,RGBA_ASTC_10x5_Format:RGBA_ASTC_10x5_Format,RGBA_ASTC_10x6_Format:RGBA_ASTC_10x6_Format,RGBA_ASTC_10x8_Format:RGBA_ASTC_10x8_Format,RGBA_ASTC_10x10_Format:RGBA_ASTC_10x10_Format,RGBA_ASTC_12x10_Format:RGBA_ASTC_12x10_Format,RGBA_ASTC_12x12_Format:RGBA_ASTC_12x12_Format,LoopOnce:LoopOnce,LoopRepeat:LoopRepeat,LoopPingPong:LoopPingPong,InterpolateDiscrete:InterpolateDiscrete,InterpolateLinear:InterpolateLinear,InterpolateSmooth:InterpolateSmooth,ZeroCurvatureEnding:ZeroCurvatureEnding,ZeroSlopeEnding:ZeroSlopeEnding,WrapAroundEnding:WrapAroundEnding,TrianglesDrawMode:TrianglesDrawMode,TriangleStripDrawMode:TriangleStripDrawMode,TriangleFanDrawMode:TriangleFanDrawMode,LinearEncoding:LinearEncoding,sRGBEncoding:sRGBEncoding,GammaEncoding:GammaEncoding,RGBEEncoding:RGBEEncoding,LogLuvEncoding:LogLuvEncoding,RGBM7Encoding:RGBM7Encoding,RGBM16Encoding:RGBM16Encoding,RGBDEncoding:RGBDEncoding,BasicDepthPacking:BasicDepthPacking,RGBADepthPacking:RGBADepthPacking,TangentSpaceNormalMap:TangentSpaceNormalMap,ObjectSpaceNormalMap:ObjectSpaceNormalMap};_exports.$constants=constants;var object3DId=0;function Object3D(){Object.defineProperty(this,"id",{value:object3DId++});this.uuid=_Math.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=Object3D.DefaultUp.clone();var position=new Vector3,rotation=new Euler,quaternion=new Quaternion,scale=new Vector3(1,1,1);function onRotationChange(){quaternion.setFromEuler(rotation,!1)}function onQuaternionChange(){rotation.setFromQuaternion(quaternion,void 0,!1)}rotation.onChange(onRotationChange);quaternion.onChange(onQuaternionChange);Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:position},rotation:{configurable:!0,enumerable:!0,value:rotation},quaternion:{configurable:!0,enumerable:!0,value:quaternion},scale:{configurable:!0,enumerable:!0,value:scale},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}});this.matrix=new Matrix4;this.matrixWorld=new Matrix4;this.matrixAutoUpdate=Object3D.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new Layers;this.visible=!0;this.castShadow=!1;this.receiveShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}}Object3D.DefaultUp=new Vector3(0,1,0);Object3D.DefaultMatrixAutoUpdate=!0;Object3D.prototype=Object.assign(Object.create(EventDispatcher.prototype),{constructor:Object3D,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(matrix){this.matrix.multiplyMatrices(matrix,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(q){this.quaternion.premultiply(q);return this},setRotationFromAxisAngle:function(axis,angle){this.quaternion.setFromAxisAngle(axis,angle)},setRotationFromEuler:function(euler){this.quaternion.setFromEuler(euler,!0)},setRotationFromMatrix:function(m){this.quaternion.setFromRotationMatrix(m)},setRotationFromQuaternion:function(q){this.quaternion.copy(q)},rotateOnAxis:function(){var q1=new Quaternion;return function rotateOnAxis(axis,angle){q1.setFromAxisAngle(axis,angle);this.quaternion.multiply(q1);return this}}(),rotateOnWorldAxis:function(){var q1=new Quaternion;return function rotateOnWorldAxis(axis,angle){q1.setFromAxisAngle(axis,angle);this.quaternion.premultiply(q1);return this}}(),rotateX:function(){var v1=new Vector3(1,0,0);return function rotateX(angle){return this.rotateOnAxis(v1,angle)}}(),rotateY:function(){var v1=new Vector3(0,1,0);return function rotateY(angle){return this.rotateOnAxis(v1,angle)}}(),rotateZ:function(){var v1=new Vector3(0,0,1);return function rotateZ(angle){return this.rotateOnAxis(v1,angle)}}(),translateOnAxis:function(){var v1=new Vector3;return function translateOnAxis(axis,distance){v1.copy(axis).applyQuaternion(this.quaternion);this.position.add(v1.multiplyScalar(distance));return this}}(),translateX:function(){var v1=new Vector3(1,0,0);return function translateX(distance){return this.translateOnAxis(v1,distance)}}(),translateY:function(){var v1=new Vector3(0,1,0);return function translateY(distance){return this.translateOnAxis(v1,distance)}}(),translateZ:function(){var v1=new Vector3(0,0,1);return function translateZ(distance){return this.translateOnAxis(v1,distance)}}(),localToWorld:function(vector){return vector.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var m1=new Matrix4;return function worldToLocal(vector){return vector.applyMatrix4(m1.getInverse(this.matrixWorld))}}(),lookAt:function(){var q1=new Quaternion,m1=new Matrix4,target=new Vector3,position=new Vector3;return function lookAt(x,y,z){if(x.isVector3){target.copy(x)}else{target.set(x,y,z)}var parent=this.parent;this.updateWorldMatrix(!0,!1);position.setFromMatrixPosition(this.matrixWorld);if(this.isCamera||this.isLight){m1.lookAt(position,target,this.up)}else{m1.lookAt(target,position,this.up)}this.quaternion.setFromRotationMatrix(m1);if(parent){m1.extractRotation(parent.matrixWorld);q1.setFromRotationMatrix(m1);this.quaternion.premultiply(q1.inverse())}}}(),add:function(object){if(1<arguments.length){for(var i=0;i<arguments.length;i++){this.add(arguments[i])}return this}if(object===this){console.error("THREE.Object3D.add: object can't be added as a child of itself.",object);return this}if(object&&object.isObject3D){if(null!==object.parent){object.parent.remove(object)}object.parent=this;object.dispatchEvent({type:"added"});this.children.push(object)}else{console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",object)}return this},remove:function(object){if(1<arguments.length){for(var i=0;i<arguments.length;i++){this.remove(arguments[i])}return this}var index=this.children.indexOf(object);if(-1!==index){object.parent=null;object.dispatchEvent({type:"removed"});this.children.splice(index,1)}return this},getObjectById:function(id){return this.getObjectByProperty("id",id)},getObjectByName:function(name){return this.getObjectByProperty("name",name)},getObjectByProperty:function(name,value){if(this[name]===value)return this;for(var i=0,l=this.children.length;i<l;i++){var child=this.children[i],object=child.getObjectByProperty(name,value);if(object!==void 0){return object}}return},getWorldPosition:function(target){if(target===void 0){console.warn("THREE.Object3D: .getWorldPosition() target is now required");target=new Vector3}this.updateMatrixWorld(!0);return target.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var position=new Vector3,scale=new Vector3;return function getWorldQuaternion(target){if(target===void 0){console.warn("THREE.Object3D: .getWorldQuaternion() target is now required");target=new Quaternion}this.updateMatrixWorld(!0);this.matrixWorld.decompose(position,target,scale);return target}}(),getWorldScale:function(){var position=new Vector3,quaternion=new Quaternion;return function getWorldScale(target){if(target===void 0){console.warn("THREE.Object3D: .getWorldScale() target is now required");target=new Vector3}this.updateMatrixWorld(!0);this.matrixWorld.decompose(position,quaternion,target);return target}}(),getWorldDirection:function(target){if(target===void 0){console.warn("THREE.Object3D: .getWorldDirection() target is now required");target=new Vector3}this.updateMatrixWorld(!0);var e=this.matrixWorld.elements;return target.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(callback){callback(this);for(var children=this.children,i=0,l=children.length;i<l;i++){children[i].traverse(callback)}},traverseVisible:function(callback){if(!1===this.visible)return;callback(this);for(var children=this.children,i=0,l=children.length;i<l;i++){children[i].traverseVisible(callback)}},traverseAncestors:function(callback){var parent=this.parent;if(null!==parent){callback(parent);parent.traverseAncestors(callback)}},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(force){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||force){if(null===this.parent){this.matrixWorld.copy(this.matrix)}else{this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)}this.matrixWorldNeedsUpdate=!1;force=!0}for(var children=this.children,i=0,l=children.length;i<l;i++){children[i].updateMatrixWorld(force)}},updateWorldMatrix:function(updateParents,updateChildren){var parent=this.parent;if(!0===updateParents&&null!==parent){parent.updateWorldMatrix(!0,!1)}if(this.matrixAutoUpdate)this.updateMatrix();if(null===this.parent){this.matrixWorld.copy(this.matrix)}else{this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)}if(!0===updateChildren){for(var children=this.children,i=0,l=children.length;i<l;i++){children[i].updateWorldMatrix(!1,!0)}}},toJSON:function(meta){var isRootObject=meta===void 0||"string"===typeof meta,output={};if(isRootObject){meta={geometries:{},materials:{},textures:{},images:{},shapes:{}};output.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"}}var object={uuid:this.uuid,type:this.type};if(""!==this.name)object.name=this.name;if(!0===this.castShadow)object.castShadow=!0;if(!0===this.receiveShadow)object.receiveShadow=!0;if(!1===this.visible)object.visible=!1;if(!1===this.frustumCulled)object.frustumCulled=!1;if(0!==this.renderOrder)object.renderOrder=this.renderOrder;if("{}"!==JSON.stringify(this.userData))object.userData=this.userData;object.layers=this.layers.mask;object.matrix=this.matrix.toArray();if(!1===this.matrixAutoUpdate)object.matrixAutoUpdate=!1;if(this.isMesh&&this.drawMode!==TrianglesDrawMode)object.drawMode=this.drawMode;function serialize(library,element){if(library[element.uuid]===void 0){library[element.uuid]=element.toJSON(meta)}return element.uuid}if(this.isMesh||this.isLine||this.isPoints){object.geometry=serialize(meta.geometries,this.geometry);var parameters=this.geometry.parameters;if(parameters!==void 0&&parameters.shapes!==void 0){var shapes=parameters.shapes;if(Array.isArray(shapes)){for(var i=0,l=shapes.length,shape;i<l;i++){shape=shapes[i];serialize(meta.shapes,shape)}}else{serialize(meta.shapes,shapes)}}}if(this.material!==void 0){if(Array.isArray(this.material)){for(var uuids=[],i=0,l=this.material.length;i<l;i++){uuids.push(serialize(meta.materials,this.material[i]))}object.material=uuids}else{object.material=serialize(meta.materials,this.material)}}if(0<this.children.length){object.children=[];for(var i=0;i<this.children.length;i++){object.children.push(this.children[i].toJSON(meta).object)}}if(isRootObject){var geometries=extractFromCache(meta.geometries),materials=extractFromCache(meta.materials),textures=extractFromCache(meta.textures),images=extractFromCache(meta.images),shapes=extractFromCache(meta.shapes);if(0<geometries.length)output.geometries=geometries;if(0<materials.length)output.materials=materials;if(0<textures.length)output.textures=textures;if(0<images.length)output.images=images;if(0<shapes.length)output.shapes=shapes}output.object=object;return output;function extractFromCache(cache){var values=[];for(var key in cache){var data=cache[key];delete data.metadata;values.push(data)}return values}},clone:function(recursive){return new this.constructor().copy(this,recursive)},copy:function(source,recursive){if(recursive===void 0)recursive=!0;this.name=source.name;this.up.copy(source.up);this.position.copy(source.position);this.quaternion.copy(source.quaternion);this.scale.copy(source.scale);this.matrix.copy(source.matrix);this.matrixWorld.copy(source.matrixWorld);this.matrixAutoUpdate=source.matrixAutoUpdate;this.matrixWorldNeedsUpdate=source.matrixWorldNeedsUpdate;this.layers.mask=source.layers.mask;this.visible=source.visible;this.castShadow=source.castShadow;this.receiveShadow=source.receiveShadow;this.frustumCulled=source.frustumCulled;this.renderOrder=source.renderOrder;this.userData=JSON.parse(JSON.stringify(source.userData));if(!0===recursive){for(var i=0,child;i<source.children.length;i++){child=source.children[i];this.add(child.clone())}}return this}});var Object3D$1={Object3D:Object3D};_exports.$Object3D=Object3D$1;function Camera(){Object3D.call(this);this.type="Camera";this.matrixWorldInverse=new Matrix4;this.projectionMatrix=new Matrix4;this.projectionMatrixInverse=new Matrix4}Camera.prototype=Object.assign(Object.create(Object3D.prototype),{constructor:Camera,isCamera:!0,copy:function(source,recursive){Object3D.prototype.copy.call(this,source,recursive);this.matrixWorldInverse.copy(source.matrixWorldInverse);this.projectionMatrix.copy(source.projectionMatrix);this.projectionMatrixInverse.copy(source.projectionMatrixInverse);return this},getWorldDirection:function(target){if(target===void 0){console.warn("THREE.Camera: .getWorldDirection() target is now required");target=new Vector3}this.updateMatrixWorld(!0);var e=this.matrixWorld.elements;return target.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(force){Object3D.prototype.updateMatrixWorld.call(this,force);this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});var Camera$1={Camera:Camera};_exports.$Camera=Camera$1;function PerspectiveCamera(fov,aspect,near,far){Camera.call(this);this.type="PerspectiveCamera";this.fov=fov!==void 0?fov:50;this.zoom=1;this.near=near!==void 0?near:.1;this.far=far!==void 0?far:2e3;this.focus=10;this.aspect=aspect!==void 0?aspect:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}PerspectiveCamera.prototype=Object.assign(Object.create(Camera.prototype),{constructor:PerspectiveCamera,isPerspectiveCamera:!0,copy:function(source,recursive){Camera.prototype.copy.call(this,source,recursive);this.fov=source.fov;this.zoom=source.zoom;this.near=source.near;this.far=source.far;this.focus=source.focus;this.aspect=source.aspect;this.view=null===source.view?null:Object.assign({},source.view);this.filmGauge=source.filmGauge;this.filmOffset=source.filmOffset;return this},setFocalLength:function(focalLength){var vExtentSlope=.5*this.getFilmHeight()/focalLength;this.fov=2*_Math.RAD2DEG*_Mathatan2(vExtentSlope);this.updateProjectionMatrix()},getFocalLength:function(){var vExtentSlope=_Mathtan(.5*_Math.DEG2RAD*this.fov);return .5*this.getFilmHeight()/vExtentSlope},getEffectiveFOV:function(){return 2*_Math.RAD2DEG*_Mathatan2(_Mathtan(.5*_Math.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*_Mathmin(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/_Mathmax(this.aspect,1)},setViewOffset:function(fullWidth,fullHeight,x,y,width,height){this.aspect=fullWidth/fullHeight;if(null===this.view){this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}}this.view.enabled=!0;this.view.fullWidth=fullWidth;this.view.fullHeight=fullHeight;this.view.offsetX=x;this.view.offsetY=y;this.view.width=width;this.view.height=height;this.updateProjectionMatrix()},clearViewOffset:function(){if(null!==this.view){this.view.enabled=!1}this.updateProjectionMatrix()},updateProjectionMatrix:function(){var near=this.near,top=near*_Mathtan(.5*_Math.DEG2RAD*this.fov)/this.zoom,height=2*top,width=this.aspect*height,left=-.5*width,view=this.view;if(null!==this.view&&this.view.enabled){var fullWidth=view.fullWidth,fullHeight=view.fullHeight;left+=view.offsetX*width/fullWidth;top-=view.offsetY*height/fullHeight;width*=view.width/fullWidth;height*=view.height/fullHeight}var skew=this.filmOffset;if(0!==skew)left+=near*skew/this.getFilmWidth();this.projectionMatrix.makePerspective(left,left+width,top,top-height,near,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(meta){var data=Object3D.prototype.toJSON.call(this,meta);data.object.fov=this.fov;data.object.zoom=this.zoom;data.object.near=this.near;data.object.far=this.far;data.object.focus=this.focus;data.object.aspect=this.aspect;if(null!==this.view)data.object.view=Object.assign({},this.view);data.object.filmGauge=this.filmGauge;data.object.filmOffset=this.filmOffset;return data}});var PerspectiveCamera$1={PerspectiveCamera:PerspectiveCamera};_exports.$PerspectiveCamera=PerspectiveCamera$1;function ArrayCamera(array){PerspectiveCamera.call(this);this.cameras=array||[]}ArrayCamera.prototype=Object.assign(Object.create(PerspectiveCamera.prototype),{constructor:ArrayCamera,isArrayCamera:!0});var ArrayCamera$1={ArrayCamera:ArrayCamera};_exports.$ArrayCamera=ArrayCamera$1;function OrthographicCamera(left,right,top,bottom,near,far){Camera.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=left!==void 0?left:-1;this.right=right!==void 0?right:1;this.top=top!==void 0?top:1;this.bottom=bottom!==void 0?bottom:-1;this.near=near!==void 0?near:.1;this.far=far!==void 0?far:2e3;this.updateProjectionMatrix()}OrthographicCamera.prototype=Object.assign(Object.create(Camera.prototype),{constructor:OrthographicCamera,isOrthographicCamera:!0,copy:function(source,recursive){Camera.prototype.copy.call(this,source,recursive);this.left=source.left;this.right=source.right;this.top=source.top;this.bottom=source.bottom;this.near=source.near;this.far=source.far;this.zoom=source.zoom;this.view=null===source.view?null:Object.assign({},source.view);return this},setViewOffset:function(fullWidth,fullHeight,x,y,width,height){if(null===this.view){this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}}this.view.enabled=!0;this.view.fullWidth=fullWidth;this.view.fullHeight=fullHeight;this.view.offsetX=x;this.view.offsetY=y;this.view.width=width;this.view.height=height;this.updateProjectionMatrix()},clearViewOffset:function(){if(null!==this.view){this.view.enabled=!1}this.updateProjectionMatrix()},updateProjectionMatrix:function(){var dx=(this.right-this.left)/(2*this.zoom),dy=(this.top-this.bottom)/(2*this.zoom),cx=(this.right+this.left)/2,cy=(this.top+this.bottom)/2,left=cx-dx,right=cx+dx,top=cy+dy,bottom=cy-dy;if(null!==this.view&&this.view.enabled){var zoomW=this.zoom/(this.view.width/this.view.fullWidth),zoomH=this.zoom/(this.view.height/this.view.fullHeight),scaleW=(this.right-this.left)/this.view.width,scaleH=(this.top-this.bottom)/this.view.height;left+=scaleW*(this.view.offsetX/zoomW);right=left+scaleW*(this.view.width/zoomW);top-=scaleH*(this.view.offsetY/zoomH);bottom=top-scaleH*(this.view.height/zoomH)}this.projectionMatrix.makeOrthographic(left,right,top,bottom,this.near,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(meta){var data=Object3D.prototype.toJSON.call(this,meta);data.object.zoom=this.zoom;data.object.left=this.left;data.object.right=this.right;data.object.top=this.top;data.object.bottom=this.bottom;data.object.near=this.near;data.object.far=this.far;if(null!==this.view)data.object.view=Object.assign({},this.view);return data}});var OrthographicCamera$1={OrthographicCamera:OrthographicCamera};_exports.$OrthographicCamera=OrthographicCamera$1;function Vector4(x,y,z,w){this.x=x||0;this.y=y||0;this.z=z||0;this.w=w!==void 0?w:1}Object.assign(Vector4.prototype,{isVector4:!0,set:function(x,y,z,w){this.x=x;this.y=y;this.z=z;this.w=w;return this},setScalar:function(scalar){this.x=scalar;this.y=scalar;this.z=scalar;this.w=scalar;return this},setX:function(x){this.x=x;return this},setY:function(y){this.y=y;return this},setZ:function(z){this.z=z;return this},setW:function(w){this.w=w;return this},setComponent:function(index,value){switch(index){case 0:this.x=value;break;case 1:this.y=value;break;case 2:this.z=value;break;case 3:this.w=value;break;default:throw new Error("index is out of range: "+index);}return this},getComponent:function(index){switch(index){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+index);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(v){this.x=v.x;this.y=v.y;this.z=v.z;this.w=v.w!==void 0?v.w:1;return this},add:function(v,w){if(w!==void 0){console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");return this.addVectors(v,w)}this.x+=v.x;this.y+=v.y;this.z+=v.z;this.w+=v.w;return this},addScalar:function(s){this.x+=s;this.y+=s;this.z+=s;this.w+=s;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(v,s){this.x+=v.x*s;this.y+=v.y*s;this.z+=v.z*s;this.w+=v.w*s;return this},sub:function(v,w){if(w!==void 0){console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");return this.subVectors(v,w)}this.x-=v.x;this.y-=v.y;this.z-=v.z;this.w-=v.w;return this},subScalar:function(s){this.x-=s;this.y-=s;this.z-=s;this.w-=s;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(scalar){this.x*=scalar;this.y*=scalar;this.z*=scalar;this.w*=scalar;return this},applyMatrix4:function(m){var x=this.x,y=this.y,z=this.z,w=this.w,e=m.elements;this.x=e[0]*x+e[4]*y+e[8]*z+e[12]*w;this.y=e[1]*x+e[5]*y+e[9]*z+e[13]*w;this.z=e[2]*x+e[6]*y+e[10]*z+e[14]*w;this.w=e[3]*x+e[7]*y+e[11]*z+e[15]*w;return this},divideScalar:function(scalar){return this.multiplyScalar(1/scalar)},setAxisAngleFromQuaternion:function(q){this.w=2*_Mathacos(q.w);var s=_Mathsqrt(1-q.w*q.w);if(1e-4>s){this.x=1;this.y=0;this.z=0}else{this.x=q.x/s;this.y=q.y/s;this.z=q.z/s}return this},setAxisAngleFromRotationMatrix:function(m){var angle,x,y,z,epsilon=.01,epsilon2=.1,te=m.elements,m11=te[0],m12=te[4],m13=te[8],m21=te[1],m22=te[5],m23=te[9],m31=te[2],m32=te[6],m33=te[10];if(_Mathabs(m12-m21)<epsilon&&_Mathabs(m13-m31)<epsilon&&_Mathabs(m23-m32)<epsilon){if(_Mathabs(m12+m21)<epsilon2&&_Mathabs(m13+m31)<epsilon2&&_Mathabs(m23+m32)<epsilon2&&_Mathabs(m11+m22+m33-3)<epsilon2){this.set(1,0,0,0);return this}angle=_MathPI;var xx=(m11+1)/2,yy=(m22+1)/2,zz=(m33+1)/2,xy=(m12+m21)/4,xz=(m13+m31)/4,yz=(m23+m32)/4;if(xx>yy&&xx>zz){if(xx<epsilon){x=0;y=.707106781;z=.707106781}else{x=_Mathsqrt(xx);y=xy/x;z=xz/x}}else if(yy>zz){if(yy<epsilon){x=.707106781;y=0;z=.707106781}else{y=_Mathsqrt(yy);x=xy/y;z=yz/y}}else{if(zz<epsilon){x=.707106781;y=.707106781;z=0}else{z=_Mathsqrt(zz);x=xz/z;y=yz/z}}this.set(x,y,z,angle);return this}var s=_Mathsqrt((m32-m23)*(m32-m23)+(m13-m31)*(m13-m31)+(m21-m12)*(m21-m12));if(.001>_Mathabs(s))s=1;this.x=(m32-m23)/s;this.y=(m13-m31)/s;this.z=(m21-m12)/s;this.w=_Mathacos((m11+m22+m33-1)/2);return this},min:function(v){this.x=_Mathmin(this.x,v.x);this.y=_Mathmin(this.y,v.y);this.z=_Mathmin(this.z,v.z);this.w=_Mathmin(this.w,v.w);return this},max:function(v){this.x=_Mathmax(this.x,v.x);this.y=_Mathmax(this.y,v.y);this.z=_Mathmax(this.z,v.z);this.w=_Mathmax(this.w,v.w);return this},clamp:function(min,max){this.x=_Mathmax(min.x,_Mathmin(max.x,this.x));this.y=_Mathmax(min.y,_Mathmin(max.y,this.y));this.z=_Mathmax(min.z,_Mathmin(max.z,this.z));this.w=_Mathmax(min.w,_Mathmin(max.w,this.w));return this},clampScalar:function(){var min,max;return function clampScalar(minVal,maxVal){if(min===void 0){min=new Vector4;max=new Vector4}min.set(minVal,minVal,minVal,minVal);max.set(maxVal,maxVal,maxVal,maxVal);return this.clamp(min,max)}}(),clampLength:function(min,max){var length=this.length();return this.divideScalar(length||1).multiplyScalar(_Mathmax(min,_Mathmin(max,length)))},floor:function(){this.x=_Mathfloor(this.x);this.y=_Mathfloor(this.y);this.z=_Mathfloor(this.z);this.w=_Mathfloor(this.w);return this},ceil:function(){this.x=_Mathceil(this.x);this.y=_Mathceil(this.y);this.z=_Mathceil(this.z);this.w=_Mathceil(this.w);return this},round:function(){this.x=_Mathround(this.x);this.y=_Mathround(this.y);this.z=_Mathround(this.z);this.w=_Mathround(this.w);return this},roundToZero:function(){this.x=0>this.x?_Mathceil(this.x):_Mathfloor(this.x);this.y=0>this.y?_Mathceil(this.y):_Mathfloor(this.y);this.z=0>this.z?_Mathceil(this.z):_Mathfloor(this.z);this.w=0>this.w?_Mathceil(this.w):_Mathfloor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(v){return this.x*v.x+this.y*v.y+this.z*v.z+this.w*v.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return _Mathsqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return _Mathabs(this.x)+_Mathabs(this.y)+_Mathabs(this.z)+_Mathabs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(length){return this.normalize().multiplyScalar(length)},lerp:function(v,alpha){this.x+=(v.x-this.x)*alpha;this.y+=(v.y-this.y)*alpha;this.z+=(v.z-this.z)*alpha;this.w+=(v.w-this.w)*alpha;return this},lerpVectors:function(v1,v2,alpha){return this.subVectors(v2,v1).multiplyScalar(alpha).add(v1)},equals:function(v){return v.x===this.x&&v.y===this.y&&v.z===this.z&&v.w===this.w},fromArray:function(array,offset){if(offset===void 0)offset=0;this.x=array[offset];this.y=array[offset+1];this.z=array[offset+2];this.w=array[offset+3];return this},toArray:function(array,offset){if(array===void 0)array=[];if(offset===void 0)offset=0;array[offset]=this.x;array[offset+1]=this.y;array[offset+2]=this.z;array[offset+3]=this.w;return array},fromBufferAttribute:function(attribute,index,offset){if(offset!==void 0){console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().")}this.x=attribute.getX(index);this.y=attribute.getY(index);this.z=attribute.getZ(index);this.w=attribute.getW(index);return this}});var Vector4$1={Vector4:Vector4};_exports.$Vector4=Vector4$1;function Vector2(x,y){this.x=x||0;this.y=y||0}Object.defineProperties(Vector2.prototype,{width:{get:function(){return this.x},set:function(value){this.x=value}},height:{get:function(){return this.y},set:function(value){this.y=value}}});Object.assign(Vector2.prototype,{isVector2:!0,set:function(x,y){this.x=x;this.y=y;return this},setScalar:function(scalar){this.x=scalar;this.y=scalar;return this},setX:function(x){this.x=x;return this},setY:function(y){this.y=y;return this},setComponent:function(index,value){switch(index){case 0:this.x=value;break;case 1:this.y=value;break;default:throw new Error("index is out of range: "+index);}return this},getComponent:function(index){switch(index){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+index);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(v){this.x=v.x;this.y=v.y;return this},add:function(v,w){if(w!==void 0){console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");return this.addVectors(v,w)}this.x+=v.x;this.y+=v.y;return this},addScalar:function(s){this.x+=s;this.y+=s;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(v,s){this.x+=v.x*s;this.y+=v.y*s;return this},sub:function(v,w){if(w!==void 0){console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");return this.subVectors(v,w)}this.x-=v.x;this.y-=v.y;return this},subScalar:function(s){this.x-=s;this.y-=s;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(v){this.x*=v.x;this.y*=v.y;return this},multiplyScalar:function(scalar){this.x*=scalar;this.y*=scalar;return this},divide:function(v){this.x/=v.x;this.y/=v.y;return this},divideScalar:function(scalar){return this.multiplyScalar(1/scalar)},applyMatrix3:function(m){var x=this.x,y=this.y,e=m.elements;this.x=e[0]*x+e[3]*y+e[6];this.y=e[1]*x+e[4]*y+e[7];return this},min:function(v){this.x=_Mathmin(this.x,v.x);this.y=_Mathmin(this.y,v.y);return this},max:function(v){this.x=_Mathmax(this.x,v.x);this.y=_Mathmax(this.y,v.y);return this},clamp:function(min,max){this.x=_Mathmax(min.x,_Mathmin(max.x,this.x));this.y=_Mathmax(min.y,_Mathmin(max.y,this.y));return this},clampScalar:function(){var min=new Vector2,max=new Vector2;return function clampScalar(minVal,maxVal){min.set(minVal,minVal);max.set(maxVal,maxVal);return this.clamp(min,max)}}(),clampLength:function(min,max){var length=this.length();return this.divideScalar(length||1).multiplyScalar(_Mathmax(min,_Mathmin(max,length)))},floor:function(){this.x=_Mathfloor(this.x);this.y=_Mathfloor(this.y);return this},ceil:function(){this.x=_Mathceil(this.x);this.y=_Mathceil(this.y);return this},round:function(){this.x=_Mathround(this.x);this.y=_Mathround(this.y);return this},roundToZero:function(){this.x=0>this.x?_Mathceil(this.x):_Mathfloor(this.x);this.y=0>this.y?_Mathceil(this.y):_Mathfloor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(v){return this.x*v.x+this.y*v.y},cross:function(v){return this.x*v.y-this.y*v.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return _Mathsqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return _Mathabs(this.x)+_Mathabs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var angle=_Mathatan(this.y,this.x);if(0>angle)angle+=2*_MathPI;return angle},distanceTo:function(v){return _Mathsqrt(this.distanceToSquared(v))},distanceToSquared:function(v){var dx=this.x-v.x,dy=this.y-v.y;return dx*dx+dy*dy},manhattanDistanceTo:function(v){return _Mathabs(this.x-v.x)+_Mathabs(this.y-v.y)},setLength:function(length){return this.normalize().multiplyScalar(length)},lerp:function(v,alpha){this.x+=(v.x-this.x)*alpha;this.y+=(v.y-this.y)*alpha;return this},lerpVectors:function(v1,v2,alpha){return this.subVectors(v2,v1).multiplyScalar(alpha).add(v1)},equals:function(v){return v.x===this.x&&v.y===this.y},fromArray:function(array,offset){if(offset===void 0)offset=0;this.x=array[offset];this.y=array[offset+1];return this},toArray:function(array,offset){if(array===void 0)array=[];if(offset===void 0)offset=0;array[offset]=this.x;array[offset+1]=this.y;return array},fromBufferAttribute:function(attribute,index,offset){if(offset!==void 0){console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().")}this.x=attribute.getX(index);this.y=attribute.getY(index);return this},rotateAround:function(center,angle){var c=_Mathcos(angle),s=_Mathsin(angle),x=this.x-center.x,y=this.y-center.y;this.x=x*c-y*s+center.x;this.y=x*s+y*c+center.y;return this}});var Vector2$1={Vector2:Vector2};_exports.$Vector2=Vector2$1;var ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Color(r,g,b){if(g===void 0&&b===void 0){return this.set(r)}return this.setRGB(r,g,b)}Object.assign(Color.prototype,{isColor:!0,r:1,g:1,b:1,set:function(value){if(value&&value.isColor){this.copy(value)}else if("number"===typeof value){this.setHex(value)}else if("string"===typeof value){this.setStyle(value)}return this},setScalar:function(scalar){this.r=scalar;this.g=scalar;this.b=scalar;return this},setHex:function(hex){hex=_Mathfloor(hex);this.r=(255&hex>>16)/255;this.g=(255&hex>>8)/255;this.b=(255&hex)/255;return this},setRGB:function(r,g,b){this.r=r;this.g=g;this.b=b;return this},setHSL:function(){function hue2rgb(p,q,t){if(0>t)t+=1;if(1<t)t-=1;if(t<1/6)return p+6*(q-p)*t;if(t<1/2)return q;if(t<2/3)return p+6*(q-p)*(2/3-t);return p}return function setHSL(h,s,l){h=_Math.euclideanModulo(h,1);s=_Math.clamp(s,0,1);l=_Math.clamp(l,0,1);if(0===s){this.r=this.g=this.b=l}else{var p=.5>=l?l*(1+s):l+s-l*s,q=2*l-p;this.r=hue2rgb(q,p,h+1/3);this.g=hue2rgb(q,p,h);this.b=hue2rgb(q,p,h-1/3)}return this}}(),setStyle:function(style){function handleAlpha(string){if(string===void 0)return;if(1>parseFloat(string)){console.warn("THREE.Color: Alpha component of "+style+" will be ignored.")}}var m;if(m=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(style)){var color,name=m[1],components=m[2];switch(name){case"rgb":case"rgba":if(color=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)){this.r=_Mathmin(255,parseInt(color[1],10))/255;this.g=_Mathmin(255,parseInt(color[2],10))/255;this.b=_Mathmin(255,parseInt(color[3],10))/255;handleAlpha(color[5]);return this}if(color=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)){this.r=_Mathmin(100,parseInt(color[1],10))/100;this.g=_Mathmin(100,parseInt(color[2],10))/100;this.b=_Mathmin(100,parseInt(color[3],10))/100;handleAlpha(color[5]);return this}break;case"hsl":case"hsla":if(color=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)){var h=parseFloat(color[1])/360,s=parseInt(color[2],10)/100,l=parseInt(color[3],10)/100;handleAlpha(color[5]);return this.setHSL(h,s,l)}break;}}else if(m=/^\#([A-Fa-f0-9]+)$/.exec(style)){var hex=m[1],size=hex.length;if(3===size){this.r=parseInt(hex.charAt(0)+hex.charAt(0),16)/255;this.g=parseInt(hex.charAt(1)+hex.charAt(1),16)/255;this.b=parseInt(hex.charAt(2)+hex.charAt(2),16)/255;return this}else if(6===size){this.r=parseInt(hex.charAt(0)+hex.charAt(1),16)/255;this.g=parseInt(hex.charAt(2)+hex.charAt(3),16)/255;this.b=parseInt(hex.charAt(4)+hex.charAt(5),16)/255;return this}}if(style&&0<style.length){var hex=ColorKeywords[style];if(hex!==void 0){this.setHex(hex)}else{console.warn("THREE.Color: Unknown color "+style)}}return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(color){this.r=color.r;this.g=color.g;this.b=color.b;return this},copyGammaToLinear:function(color,gammaFactor){if(gammaFactor===void 0)gammaFactor=2;this.r=_Mathpow(color.r,gammaFactor);this.g=_Mathpow(color.g,gammaFactor);this.b=_Mathpow(color.b,gammaFactor);return this},copyLinearToGamma:function(color,gammaFactor){if(gammaFactor===void 0)gammaFactor=2;var safeInverse=0<gammaFactor?1/gammaFactor:1;this.r=_Mathpow(color.r,safeInverse);this.g=_Mathpow(color.g,safeInverse);this.b=_Mathpow(color.b,safeInverse);return this},convertGammaToLinear:function(gammaFactor){this.copyGammaToLinear(this,gammaFactor);return this},convertLinearToGamma:function(gammaFactor){this.copyLinearToGamma(this,gammaFactor);return this},copySRGBToLinear:function(){function SRGBToLinear(c){return .04045>c?.0773993808*c:_Mathpow(.9478672986*c+.0521327014,2.4)}return function copySRGBToLinear(color){this.r=SRGBToLinear(color.r);this.g=SRGBToLinear(color.g);this.b=SRGBToLinear(color.b);return this}}(),copyLinearToSRGB:function(){function LinearToSRGB(c){return .0031308>c?12.92*c:1.055*_Mathpow(c,.41666)-.055}return function copyLinearToSRGB(color){this.r=LinearToSRGB(color.r);this.g=LinearToSRGB(color.g);this.b=LinearToSRGB(color.b);return this}}(),convertSRGBToLinear:function(){this.copySRGBToLinear(this);return this},convertLinearToSRGB:function(){this.copyLinearToSRGB(this);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(target){if(target===void 0){console.warn("THREE.Color: .getHSL() target is now required");target={h:0,s:0,l:0}}var r=this.r,g=this.g,b=this.b,max=_Mathmax(r,g,b),min=_Mathmin(r,g,b),hue,saturation,lightness=(min+max)/2;if(min===max){hue=0;saturation=0}else{var delta=max-min;saturation=.5>=lightness?delta/(max+min):delta/(2-max-min);switch(max){case r:hue=(g-b)/delta+(g<b?6:0);break;case g:hue=(b-r)/delta+2;break;case b:hue=(r-g)/delta+4;break;}hue/=6}target.h=hue;target.s=saturation;target.l=lightness;return target},getStyle:function(){return"rgb("+(0|255*this.r)+","+(0|255*this.g)+","+(0|255*this.b)+")"},offsetHSL:function(){var hsl={};return function(h,s,l){this.getHSL(hsl);hsl.h+=h;hsl.s+=s;hsl.l+=l;this.setHSL(hsl.h,hsl.s,hsl.l);return this}}(),add:function(color){this.r+=color.r;this.g+=color.g;this.b+=color.b;return this},addColors:function(color1,color2){this.r=color1.r+color2.r;this.g=color1.g+color2.g;this.b=color1.b+color2.b;return this},addScalar:function(s){this.r+=s;this.g+=s;this.b+=s;return this},sub:function(color){this.r=_Mathmax(0,this.r-color.r);this.g=_Mathmax(0,this.g-color.g);this.b=_Mathmax(0,this.b-color.b);return this},multiply:function(color){this.r*=color.r;this.g*=color.g;this.b*=color.b;return this},multiplyScalar:function(s){this.r*=s;this.g*=s;this.b*=s;return this},lerp:function(color,alpha){this.r+=(color.r-this.r)*alpha;this.g+=(color.g-this.g)*alpha;this.b+=(color.b-this.b)*alpha;return this},lerpHSL:function(){var hslA={h:0,s:0,l:0},hslB={h:0,s:0,l:0};return function lerpHSL(color,alpha){this.getHSL(hslA);color.getHSL(hslB);var h=_Math.lerp(hslA.h,hslB.h,alpha),s=_Math.lerp(hslA.s,hslB.s,alpha),l=_Math.lerp(hslA.l,hslB.l,alpha);this.setHSL(h,s,l);return this}}(),equals:function(c){return c.r===this.r&&c.g===this.g&&c.b===this.b},fromArray:function(array,offset){if(offset===void 0)offset=0;this.r=array[offset];this.g=array[offset+1];this.b=array[offset+2];return this},toArray:function(array,offset){if(array===void 0)array=[];if(offset===void 0)offset=0;array[offset]=this.r;array[offset+1]=this.g;array[offset+2]=this.b;return array},toJSON:function(){return this.getHex()}});var Color$1={Color:Color};_exports.$Color=Color$1;function BufferAttribute(array,itemSize,normalized){if(Array.isArray(array)){throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.")}this.name="";this.array=array;this.itemSize=itemSize;this.count=array!==void 0?array.length/itemSize:0;this.normalized=!0===normalized;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0}Object.defineProperty(BufferAttribute.prototype,"needsUpdate",{set:function(value){if(!0===value)this.version++}});Object.assign(BufferAttribute.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setArray:function(array){if(Array.isArray(array)){throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.")}this.count=array!==void 0?array.length/this.itemSize:0;this.array=array;return this},setDynamic:function(value){this.dynamic=value;return this},copy:function(source){this.name=source.name;this.array=new source.array.constructor(source.array);this.itemSize=source.itemSize;this.count=source.count;this.normalized=source.normalized;this.dynamic=source.dynamic;return this},copyAt:function(index1,attribute,index2){index1*=this.itemSize;index2*=attribute.itemSize;for(var i=0,l=this.itemSize;i<l;i++){this.array[index1+i]=attribute.array[index2+i]}return this},copyArray:function(array){this.array.set(array);return this},copyColorsArray:function(colors){for(var array=this.array,offset=0,i=0,l=colors.length,color;i<l;i++){color=colors[i];if(color===void 0){console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i);color=new Color}array[offset++]=color.r;array[offset++]=color.g;array[offset++]=color.b}return this},copyVector2sArray:function(vectors){for(var array=this.array,offset=0,i=0,l=vectors.length,vector;i<l;i++){vector=vectors[i];if(vector===void 0){console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i);vector=new Vector2}array[offset++]=vector.x;array[offset++]=vector.y}return this},copyVector3sArray:function(vectors){for(var array=this.array,offset=0,i=0,l=vectors.length,vector;i<l;i++){vector=vectors[i];if(vector===void 0){console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i);vector=new Vector3}array[offset++]=vector.x;array[offset++]=vector.y;array[offset++]=vector.z}return this},copyVector4sArray:function(vectors){for(var array=this.array,offset=0,i=0,l=vectors.length,vector;i<l;i++){vector=vectors[i];if(vector===void 0){console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i);vector=new Vector4}array[offset++]=vector.x;array[offset++]=vector.y;array[offset++]=vector.z;array[offset++]=vector.w}return this},set:function(value,offset){if(offset===void 0)offset=0;this.array.set(value,offset);return this},getX:function(index){return this.array[index*this.itemSize]},setX:function(index,x){this.array[index*this.itemSize]=x;return this},getY:function(index){return this.array[index*this.itemSize+1]},setY:function(index,y){this.array[index*this.itemSize+1]=y;return this},getZ:function(index){return this.array[index*this.itemSize+2]},setZ:function(index,z){this.array[index*this.itemSize+2]=z;return this},getW:function(index){return this.array[index*this.itemSize+3]},setW:function(index,w){this.array[index*this.itemSize+3]=w;return this},setXY:function(index,x,y){index*=this.itemSize;this.array[index+0]=x;this.array[index+1]=y;return this},setXYZ:function(index,x,y,z){index*=this.itemSize;this.array[index+0]=x;this.array[index+1]=y;this.array[index+2]=z;return this},setXYZW:function(index,x,y,z,w){index*=this.itemSize;this.array[index+0]=x;this.array[index+1]=y;this.array[index+2]=z;this.array[index+3]=w;return this},onUpload:function(callback){this.onUploadCallback=callback;return this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)}});function Int8BufferAttribute(array,itemSize,normalized){BufferAttribute.call(this,new Int8Array(array),itemSize,normalized)}Int8BufferAttribute.prototype=Object.create(BufferAttribute.prototype);Int8BufferAttribute.prototype.constructor=Int8BufferAttribute;function Uint8BufferAttribute(array,itemSize,normalized){BufferAttribute.call(this,new Uint8Array(array),itemSize,normalized)}Uint8BufferAttribute.prototype=Object.create(BufferAttribute.prototype);Uint8BufferAttribute.prototype.constructor=Uint8BufferAttribute;function Uint8ClampedBufferAttribute(array,itemSize,normalized){BufferAttribute.call(this,new Uint8ClampedArray(array),itemSize,normalized)}Uint8ClampedBufferAttribute.prototype=Object.create(BufferAttribute.prototype);Uint8ClampedBufferAttribute.prototype.constructor=Uint8ClampedBufferAttribute;function Int16BufferAttribute(array,itemSize,normalized){BufferAttribute.call(this,new Int16Array(array),itemSize,normalized)}Int16BufferAttribute.prototype=Object.create(BufferAttribute.prototype);Int16BufferAttribute.prototype.constructor=Int16BufferAttribute;function Uint16BufferAttribute(array,itemSize,normalized){BufferAttribute.call(this,new Uint16Array(array),itemSize,normalized)}Uint16BufferAttribute.prototype=Object.create(BufferAttribute.prototype);Uint16BufferAttribute.prototype.constructor=Uint16BufferAttribute;function Int32BufferAttribute(array,itemSize,normalized){BufferAttribute.call(this,new Int32Array(array),itemSize,normalized)}Int32BufferAttribute.prototype=Object.create(BufferAttribute.prototype);Int32BufferAttribute.prototype.constructor=Int32BufferAttribute;function Uint32BufferAttribute(array,itemSize,normalized){BufferAttribute.call(this,new Uint32Array(array),itemSize,normalized)}Uint32BufferAttribute.prototype=Object.create(BufferAttribute.prototype);Uint32BufferAttribute.prototype.constructor=Uint32BufferAttribute;function Float32BufferAttribute(array,itemSize,normalized){BufferAttribute.call(this,new Float32Array(array),itemSize,normalized)}Float32BufferAttribute.prototype=Object.create(BufferAttribute.prototype);Float32BufferAttribute.prototype.constructor=Float32BufferAttribute;function Float64BufferAttribute(array,itemSize,normalized){BufferAttribute.call(this,new Float64Array(array),itemSize,normalized)}Float64BufferAttribute.prototype=Object.create(BufferAttribute.prototype);Float64BufferAttribute.prototype.constructor=Float64BufferAttribute;var BufferAttribute$1={Float64BufferAttribute:Float64BufferAttribute,Float32BufferAttribute:Float32BufferAttribute,Uint32BufferAttribute:Uint32BufferAttribute,Int32BufferAttribute:Int32BufferAttribute,Uint16BufferAttribute:Uint16BufferAttribute,Int16BufferAttribute:Int16BufferAttribute,Uint8ClampedBufferAttribute:Uint8ClampedBufferAttribute,Uint8BufferAttribute:Uint8BufferAttribute,Int8BufferAttribute:Int8BufferAttribute,BufferAttribute:BufferAttribute};_exports.$BufferAttribute=BufferAttribute$1;function Sphere(center,radius){this.center=center!==void 0?center:new Vector3;this.radius=radius!==void 0?radius:0}Object.assign(Sphere.prototype,{set:function(center,radius){this.center.copy(center);this.radius=radius;return this},setFromPoints:function(){var box=new Box3;return function setFromPoints(points,optionalCenter){var center=this.center;if(optionalCenter!==void 0){center.copy(optionalCenter)}else{box.setFromPoints(points).getCenter(center)}for(var maxRadiusSq=0,i=0,il=points.length;i<il;i++){maxRadiusSq=_Mathmax(maxRadiusSq,center.distanceToSquared(points[i]))}this.radius=_Mathsqrt(maxRadiusSq);return this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(sphere){this.center.copy(sphere.center);this.radius=sphere.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(point){return point.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(point){return point.distanceTo(this.center)-this.radius},intersectsSphere:function(sphere){var radiusSum=this.radius+sphere.radius;return sphere.center.distanceToSquared(this.center)<=radiusSum*radiusSum},intersectsBox:function(box){return box.intersectsSphere(this)},intersectsPlane:function(plane){return _Mathabs(plane.distanceToPoint(this.center))<=this.radius},clampPoint:function(point,target){var deltaLengthSq=this.center.distanceToSquared(point);if(target===void 0){console.warn("THREE.Sphere: .clampPoint() target is now required");target=new Vector3}target.copy(point);if(deltaLengthSq>this.radius*this.radius){target.sub(this.center).normalize();target.multiplyScalar(this.radius).add(this.center)}return target},getBoundingBox:function(target){if(target===void 0){console.warn("THREE.Sphere: .getBoundingBox() target is now required");target=new Box3}target.set(this.center,this.center);target.expandByScalar(this.radius);return target},applyMatrix4:function(matrix){this.center.applyMatrix4(matrix);this.radius=this.radius*matrix.getMaxScaleOnAxis();return this},translate:function(offset){this.center.add(offset);return this},equals:function(sphere){return sphere.center.equals(this.center)&&sphere.radius===this.radius}});var Sphere$1={Sphere:Sphere};_exports.$Sphere=Sphere$1;function Box3(min,max){this.min=min!==void 0?min:new Vector3(+Infinity,+Infinity,+Infinity);this.max=max!==void 0?max:new Vector3(-Infinity,-Infinity,-Infinity)}Object.assign(Box3.prototype,{isBox3:!0,set:function(min,max){this.min.copy(min);this.max.copy(max);return this},setFromArray:function(array){for(var minX=+Infinity,minY=+Infinity,minZ=+Infinity,maxX=-Infinity,maxY=-Infinity,maxZ=-Infinity,i=0,l=array.length;i<l;i+=3){var x=array[i],y=array[i+1],z=array[i+2];if(x<minX)minX=x;if(y<minY)minY=y;if(z<minZ)minZ=z;if(x>maxX)maxX=x;if(y>maxY)maxY=y;if(z>maxZ)maxZ=z}this.min.set(minX,minY,minZ);this.max.set(maxX,maxY,maxZ);return this},setFromBufferAttribute:function(attribute){for(var minX=+Infinity,minY=+Infinity,minZ=+Infinity,maxX=-Infinity,maxY=-Infinity,maxZ=-Infinity,i=0,l=attribute.count;i<l;i++){var x=attribute.getX(i),y=attribute.getY(i),z=attribute.getZ(i);if(x<minX)minX=x;if(y<minY)minY=y;if(z<minZ)minZ=z;if(x>maxX)maxX=x;if(y>maxY)maxY=y;if(z>maxZ)maxZ=z}this.min.set(minX,minY,minZ);this.max.set(maxX,maxY,maxZ);return this},setFromPoints:function(points){this.makeEmpty();for(var i=0,il=points.length;i<il;i++){this.expandByPoint(points[i])}return this},setFromCenterAndSize:function(){var v1=new Vector3;return function setFromCenterAndSize(center,size){var halfSize=v1.copy(size).multiplyScalar(.5);this.min.copy(center).sub(halfSize);this.max.copy(center).add(halfSize);return this}}(),setFromObject:function(object){this.makeEmpty();return this.expandByObject(object)},clone:function(){return new this.constructor().copy(this)},copy:function(box){this.min.copy(box.min);this.max.copy(box.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=+Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(target){if(target===void 0){console.warn("THREE.Box3: .getCenter() target is now required");target=new Vector3}return this.isEmpty()?target.set(0,0,0):target.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(target){if(target===void 0){console.warn("THREE.Box3: .getSize() target is now required");target=new Vector3}return this.isEmpty()?target.set(0,0,0):target.subVectors(this.max,this.min)},expandByPoint:function(point){this.min.min(point);this.max.max(point);return this},expandByVector:function(vector){this.min.sub(vector);this.max.add(vector);return this},expandByScalar:function(scalar){this.min.addScalar(-scalar);this.max.addScalar(scalar);return this},expandByObject:function(){var scope,i,l,v1=new Vector3;function traverse(node){var geometry=node.geometry;if(geometry!==void 0){if(geometry.isGeometry){var vertices=geometry.vertices;for(i=0,l=vertices.length;i<l;i++){v1.copy(vertices[i]);v1.applyMatrix4(node.matrixWorld);scope.expandByPoint(v1)}}else if(geometry.isBufferGeometry){var attribute=geometry.attributes.position;if(attribute!==void 0){for(i=0,l=attribute.count;i<l;i++){v1.fromBufferAttribute(attribute,i).applyMatrix4(node.matrixWorld);scope.expandByPoint(v1)}}}}}return function expandByObject(object){scope=this;object.updateMatrixWorld(!0);object.traverse(traverse);return this}}(),containsPoint:function(point){return point.x<this.min.x||point.x>this.max.x||point.y<this.min.y||point.y>this.max.y||point.z<this.min.z||point.z>this.max.z?!1:!0},containsBox:function(box){return this.min.x<=box.min.x&&box.max.x<=this.max.x&&this.min.y<=box.min.y&&box.max.y<=this.max.y&&this.min.z<=box.min.z&&box.max.z<=this.max.z},getParameter:function(point,target){if(target===void 0){console.warn("THREE.Box3: .getParameter() target is now required");target=new Vector3}return target.set((point.x-this.min.x)/(this.max.x-this.min.x),(point.y-this.min.y)/(this.max.y-this.min.y),(point.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(box){return box.max.x<this.min.x||box.min.x>this.max.x||box.max.y<this.min.y||box.min.y>this.max.y||box.max.z<this.min.z||box.min.z>this.max.z?!1:!0},intersectsSphere:function(){var closestPoint=new Vector3;return function intersectsSphere(sphere){this.clampPoint(sphere.center,closestPoint);return closestPoint.distanceToSquared(sphere.center)<=sphere.radius*sphere.radius}}(),intersectsPlane:function(plane){var min,max;if(0<plane.normal.x){min=plane.normal.x*this.min.x;max=plane.normal.x*this.max.x}else{min=plane.normal.x*this.max.x;max=plane.normal.x*this.min.x}if(0<plane.normal.y){min+=plane.normal.y*this.min.y;max+=plane.normal.y*this.max.y}else{min+=plane.normal.y*this.max.y;max+=plane.normal.y*this.min.y}if(0<plane.normal.z){min+=plane.normal.z*this.min.z;max+=plane.normal.z*this.max.z}else{min+=plane.normal.z*this.max.z;max+=plane.normal.z*this.min.z}return min<=-plane.constant&&max>=-plane.constant},intersectsTriangle:function(){var v0=new Vector3,v1=new Vector3,v2=new Vector3,f0=new Vector3,f1=new Vector3,f2=new Vector3,testAxis=new Vector3,center=new Vector3,extents=new Vector3,triangleNormal=new Vector3;function satForAxes(axes){var i,j;for(i=0,j=axes.length-3;i<=j;i+=3){testAxis.fromArray(axes,i);var r=extents.x*_Mathabs(testAxis.x)+extents.y*_Mathabs(testAxis.y)+extents.z*_Mathabs(testAxis.z),p0=v0.dot(testAxis),p1=v1.dot(testAxis),p2=v2.dot(testAxis);if(_Mathmax(-_Mathmax(p0,p1,p2),_Mathmin(p0,p1,p2))>r){return!1}}return!0}return function intersectsTriangle(triangle){if(this.isEmpty()){return!1}this.getCenter(center);extents.subVectors(this.max,center);v0.subVectors(triangle.a,center);v1.subVectors(triangle.b,center);v2.subVectors(triangle.c,center);f0.subVectors(v1,v0);f1.subVectors(v2,v1);f2.subVectors(v0,v2);var axes=[0,-f0.z,f0.y,0,-f1.z,f1.y,0,-f2.z,f2.y,f0.z,0,-f0.x,f1.z,0,-f1.x,f2.z,0,-f2.x,-f0.y,f0.x,0,-f1.y,f1.x,0,-f2.y,f2.x,0];if(!satForAxes(axes)){return!1}axes=[1,0,0,0,1,0,0,0,1];if(!satForAxes(axes)){return!1}triangleNormal.crossVectors(f0,f1);axes=[triangleNormal.x,triangleNormal.y,triangleNormal.z];return satForAxes(axes)}}(),clampPoint:function(point,target){if(target===void 0){console.warn("THREE.Box3: .clampPoint() target is now required");target=new Vector3}return target.copy(point).clamp(this.min,this.max)},distanceToPoint:function(){var v1=new Vector3;return function distanceToPoint(point){var clampedPoint=v1.copy(point).clamp(this.min,this.max);return clampedPoint.sub(point).length()}}(),getBoundingSphere:function(){var v1=new Vector3;return function getBoundingSphere(target){if(target===void 0){console.warn("THREE.Box3: .getBoundingSphere() target is now required");target=new Sphere}this.getCenter(target.center);target.radius=.5*this.getSize(v1).length();return target}}(),intersect:function(box){this.min.max(box.min);this.max.min(box.max);if(this.isEmpty())this.makeEmpty();return this},union:function(box){this.min.min(box.min);this.max.max(box.max);return this},applyMatrix4:function(){var points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3];return function applyMatrix4(matrix){if(this.isEmpty())return this;points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(matrix);points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(matrix);points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(matrix);points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(matrix);points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(matrix);points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(matrix);points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(matrix);points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(matrix);this.setFromPoints(points);return this}}(),translate:function(offset){this.min.add(offset);this.max.add(offset);return this},equals:function(box){return box.min.equals(this.min)&&box.max.equals(this.max)}});var Box3$1={Box3:Box3};_exports.$Box3=Box3$1;function DirectGeometry(){this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingBox=null;this.boundingSphere=null;this.verticesNeedUpdate=!1;this.normalsNeedUpdate=!1;this.colorsNeedUpdate=!1;this.uvsNeedUpdate=!1;this.groupsNeedUpdate=!1}Object.assign(DirectGeometry.prototype,{computeGroups:function(geometry){for(var group,groups=[],materialIndex=void 0,faces=geometry.faces,i=0,face;i<faces.length;i++){face=faces[i];if(face.materialIndex!==materialIndex){materialIndex=face.materialIndex;if(group!==void 0){group.count=3*i-group.start;groups.push(group)}group={start:3*i,materialIndex:materialIndex}}}if(group!==void 0){group.count=3*i-group.start;groups.push(group)}this.groups=groups},fromGeometry:function(geometry){var faces=geometry.faces,vertices=geometry.vertices,faceVertexUvs=geometry.faceVertexUvs,hasFaceVertexUv=faceVertexUvs[0]&&0<faceVertexUvs[0].length,hasFaceVertexUv2=faceVertexUvs[1]&&0<faceVertexUvs[1].length,morphTargets=geometry.morphTargets,morphTargetsLength=morphTargets.length,morphTargetsPosition;if(0<morphTargetsLength){morphTargetsPosition=[];for(var i=0;i<morphTargetsLength;i++){morphTargetsPosition[i]={name:morphTargets[i].name,data:[]}}this.morphTargets.position=morphTargetsPosition}var morphNormals=geometry.morphNormals,morphNormalsLength=morphNormals.length,morphTargetsNormal;if(0<morphNormalsLength){morphTargetsNormal=[];for(var i=0;i<morphNormalsLength;i++){morphTargetsNormal[i]={name:morphNormals[i].name,data:[]}}this.morphTargets.normal=morphTargetsNormal}var skinIndices=geometry.skinIndices,skinWeights=geometry.skinWeights,hasSkinIndices=skinIndices.length===vertices.length,hasSkinWeights=skinWeights.length===vertices.length;if(0<vertices.length&&0===faces.length){console.error("THREE.DirectGeometry: Faceless geometries are not supported.")}for(var i=0,face;i<faces.length;i++){face=faces[i];this.vertices.push(vertices[face.a],vertices[face.b],vertices[face.c]);var vertexNormals=face.vertexNormals;if(3===vertexNormals.length){this.normals.push(vertexNormals[0],vertexNormals[1],vertexNormals[2])}else{var normal=face.normal;this.normals.push(normal,normal,normal)}var vertexColors=face.vertexColors;if(3===vertexColors.length){this.colors.push(vertexColors[0],vertexColors[1],vertexColors[2])}else{var color=face.color;this.colors.push(color,color,color)}if(!0===hasFaceVertexUv){var vertexUvs=faceVertexUvs[0][i];if(vertexUvs!==void 0){this.uvs.push(vertexUvs[0],vertexUvs[1],vertexUvs[2])}else{console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",i);this.uvs.push(new Vector2,new Vector2,new Vector2)}}if(!0===hasFaceVertexUv2){var vertexUvs=faceVertexUvs[1][i];if(vertexUvs!==void 0){this.uvs2.push(vertexUvs[0],vertexUvs[1],vertexUvs[2])}else{console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",i);this.uvs2.push(new Vector2,new Vector2,new Vector2)}}for(var j=0,morphTarget;j<morphTargetsLength;j++){morphTarget=morphTargets[j].vertices;morphTargetsPosition[j].data.push(morphTarget[face.a],morphTarget[face.b],morphTarget[face.c])}for(var j=0,morphNormal;j<morphNormalsLength;j++){morphNormal=morphNormals[j].vertexNormals[i];morphTargetsNormal[j].data.push(morphNormal.a,morphNormal.b,morphNormal.c)}if(hasSkinIndices){this.skinIndices.push(skinIndices[face.a],skinIndices[face.b],skinIndices[face.c])}if(hasSkinWeights){this.skinWeights.push(skinWeights[face.a],skinWeights[face.b],skinWeights[face.c])}}this.computeGroups(geometry);this.verticesNeedUpdate=geometry.verticesNeedUpdate;this.normalsNeedUpdate=geometry.normalsNeedUpdate;this.colorsNeedUpdate=geometry.colorsNeedUpdate;this.uvsNeedUpdate=geometry.uvsNeedUpdate;this.groupsNeedUpdate=geometry.groupsNeedUpdate;return this}});var DirectGeometry$1={DirectGeometry:DirectGeometry};_exports.$DirectGeometry=DirectGeometry$1;function arrayMin(array){if(0===array.length)return 1/0;for(var min=array[0],i=1,l=array.length;i<l;++i){if(array[i]<min)min=array[i]}return min}function arrayMax(array){if(0===array.length)return-Infinity;for(var max=array[0],i=1,l=array.length;i<l;++i){if(array[i]>max)max=array[i]}return max}var utils={arrayMin:arrayMin,arrayMax:arrayMax};_exports.$utils=utils;var bufferGeometryId=1;function BufferGeometry(){Object.defineProperty(this,"id",{value:bufferGeometryId+=2});this.uuid=_Math.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingBox=null;this.boundingSphere=null;this.drawRange={start:0,count:1/0};this.userData={}}BufferGeometry.prototype=Object.assign(Object.create(EventDispatcher.prototype),{constructor:BufferGeometry,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(index){if(Array.isArray(index)){this.index=new(65535<arrayMax(index)?Uint32BufferAttribute:Uint16BufferAttribute)(index,1)}else{this.index=index}},addAttribute:function(name,attribute){if(!(attribute&&attribute.isBufferAttribute)&&!(attribute&&attribute.isInterleavedBufferAttribute)){console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).");return this.addAttribute(name,new BufferAttribute(arguments[1],arguments[2]))}if("index"===name){console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.");this.setIndex(attribute);return this}this.attributes[name]=attribute;return this},getAttribute:function(name){return this.attributes[name]},removeAttribute:function(name){delete this.attributes[name];return this},addGroup:function(start,count,materialIndex){this.groups.push({start:start,count:count,materialIndex:materialIndex!==void 0?materialIndex:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(start,count){this.drawRange.start=start;this.drawRange.count=count},applyMatrix:function(matrix){var position=this.attributes.position;if(position!==void 0){matrix.applyToBufferAttribute(position);position.needsUpdate=!0}var normal=this.attributes.normal;if(normal!==void 0){var normalMatrix=new Matrix3().getNormalMatrix(matrix);normalMatrix.applyToBufferAttribute(normal);normal.needsUpdate=!0}if(null!==this.boundingBox){this.computeBoundingBox()}if(null!==this.boundingSphere){this.computeBoundingSphere()}return this},rotateX:function(){var m1=new Matrix4;return function rotateX(angle){m1.makeRotationX(angle);this.applyMatrix(m1);return this}}(),rotateY:function(){var m1=new Matrix4;return function rotateY(angle){m1.makeRotationY(angle);this.applyMatrix(m1);return this}}(),rotateZ:function(){var m1=new Matrix4;return function rotateZ(angle){m1.makeRotationZ(angle);this.applyMatrix(m1);return this}}(),translate:function(){var m1=new Matrix4;return function translate(x,y,z){m1.makeTranslation(x,y,z);this.applyMatrix(m1);return this}}(),scale:function(){var m1=new Matrix4;return function scale(x,y,z){m1.makeScale(x,y,z);this.applyMatrix(m1);return this}}(),lookAt:function(){var obj=new Object3D;return function lookAt(vector){obj.lookAt(vector);obj.updateMatrix();this.applyMatrix(obj.matrix)}}(),center:function(){var offset=new Vector3;return function center(){this.computeBoundingBox();this.boundingBox.getCenter(offset).negate();this.translate(offset.x,offset.y,offset.z);return this}}(),setFromObject:function(object){var geometry=object.geometry;if(object.isPoints||object.isLine){var positions=new Float32BufferAttribute(3*geometry.vertices.length,3),colors=new Float32BufferAttribute(3*geometry.colors.length,3);this.addAttribute("position",positions.copyVector3sArray(geometry.vertices));this.addAttribute("color",colors.copyColorsArray(geometry.colors));if(geometry.lineDistances&&geometry.lineDistances.length===geometry.vertices.length){var lineDistances=new Float32BufferAttribute(geometry.lineDistances.length,1);this.addAttribute("lineDistance",lineDistances.copyArray(geometry.lineDistances))}if(null!==geometry.boundingSphere){this.boundingSphere=geometry.boundingSphere.clone()}if(null!==geometry.boundingBox){this.boundingBox=geometry.boundingBox.clone()}}else if(object.isMesh){if(geometry&&geometry.isGeometry){this.fromGeometry(geometry)}}return this},setFromPoints:function(points){for(var position=[],i=0,l=points.length,point;i<l;i++){point=points[i];position.push(point.x,point.y,point.z||0)}this.addAttribute("position",new Float32BufferAttribute(position,3));return this},updateFromObject:function(object){var geometry=object.geometry;if(object.isMesh){var direct=geometry.__directGeometry;if(!0===geometry.elementsNeedUpdate){direct=void 0;geometry.elementsNeedUpdate=!1}if(direct===void 0){return this.fromGeometry(geometry)}direct.verticesNeedUpdate=geometry.verticesNeedUpdate;direct.normalsNeedUpdate=geometry.normalsNeedUpdate;direct.colorsNeedUpdate=geometry.colorsNeedUpdate;direct.uvsNeedUpdate=geometry.uvsNeedUpdate;direct.groupsNeedUpdate=geometry.groupsNeedUpdate;geometry.verticesNeedUpdate=!1;geometry.normalsNeedUpdate=!1;geometry.colorsNeedUpdate=!1;geometry.uvsNeedUpdate=!1;geometry.groupsNeedUpdate=!1;geometry=direct}var attribute;if(!0===geometry.verticesNeedUpdate){attribute=this.attributes.position;if(attribute!==void 0){attribute.copyVector3sArray(geometry.vertices);attribute.needsUpdate=!0}geometry.verticesNeedUpdate=!1}if(!0===geometry.normalsNeedUpdate){attribute=this.attributes.normal;if(attribute!==void 0){attribute.copyVector3sArray(geometry.normals);attribute.needsUpdate=!0}geometry.normalsNeedUpdate=!1}if(!0===geometry.colorsNeedUpdate){attribute=this.attributes.color;if(attribute!==void 0){attribute.copyColorsArray(geometry.colors);attribute.needsUpdate=!0}geometry.colorsNeedUpdate=!1}if(geometry.uvsNeedUpdate){attribute=this.attributes.uv;if(attribute!==void 0){attribute.copyVector2sArray(geometry.uvs);attribute.needsUpdate=!0}geometry.uvsNeedUpdate=!1}if(geometry.lineDistancesNeedUpdate){attribute=this.attributes.lineDistance;if(attribute!==void 0){attribute.copyArray(geometry.lineDistances);attribute.needsUpdate=!0}geometry.lineDistancesNeedUpdate=!1}if(geometry.groupsNeedUpdate){geometry.computeGroups(object.geometry);this.groups=geometry.groups;geometry.groupsNeedUpdate=!1}return this},fromGeometry:function(geometry){geometry.__directGeometry=new DirectGeometry().fromGeometry(geometry);return this.fromDirectGeometry(geometry.__directGeometry)},fromDirectGeometry:function(geometry){var positions=new Float32Array(3*geometry.vertices.length);this.addAttribute("position",new BufferAttribute(positions,3).copyVector3sArray(geometry.vertices));if(0<geometry.normals.length){var normals=new Float32Array(3*geometry.normals.length);this.addAttribute("normal",new BufferAttribute(normals,3).copyVector3sArray(geometry.normals))}if(0<geometry.colors.length){var colors=new Float32Array(3*geometry.colors.length);this.addAttribute("color",new BufferAttribute(colors,3).copyColorsArray(geometry.colors))}if(0<geometry.uvs.length){var uvs=new Float32Array(2*geometry.uvs.length);this.addAttribute("uv",new BufferAttribute(uvs,2).copyVector2sArray(geometry.uvs))}if(0<geometry.uvs2.length){var uvs2=new Float32Array(2*geometry.uvs2.length);this.addAttribute("uv2",new BufferAttribute(uvs2,2).copyVector2sArray(geometry.uvs2))}this.groups=geometry.groups;for(var name in geometry.morphTargets){for(var array=[],morphTargets=geometry.morphTargets[name],i=0,l=morphTargets.length;i<l;i++){var morphTarget=morphTargets[i],attribute=new Float32BufferAttribute(3*morphTarget.data.length,3);attribute.name=morphTarget.name;array.push(attribute.copyVector3sArray(morphTarget.data))}this.morphAttributes[name]=array}if(0<geometry.skinIndices.length){var skinIndices=new Float32BufferAttribute(4*geometry.skinIndices.length,4);this.addAttribute("skinIndex",skinIndices.copyVector4sArray(geometry.skinIndices))}if(0<geometry.skinWeights.length){var skinWeights=new Float32BufferAttribute(4*geometry.skinWeights.length,4);this.addAttribute("skinWeight",skinWeights.copyVector4sArray(geometry.skinWeights))}if(null!==geometry.boundingSphere){this.boundingSphere=geometry.boundingSphere.clone()}if(null!==geometry.boundingBox){this.boundingBox=geometry.boundingBox.clone()}return this},computeBoundingBox:function(){if(null===this.boundingBox){this.boundingBox=new Box3}var position=this.attributes.position;if(position!==void 0){this.boundingBox.setFromBufferAttribute(position)}else{this.boundingBox.makeEmpty()}if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)){console.error("THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.",this)}},computeBoundingSphere:function(){var box=new Box3,vector=new Vector3;return function computeBoundingSphere(){if(null===this.boundingSphere){this.boundingSphere=new Sphere}var position=this.attributes.position;if(position){var center=this.boundingSphere.center;box.setFromBufferAttribute(position);box.getCenter(center);for(var maxRadiusSq=0,i=0,il=position.count;i<il;i++){vector.x=position.getX(i);vector.y=position.getY(i);vector.z=position.getZ(i);maxRadiusSq=_Mathmax(maxRadiusSq,center.distanceToSquared(vector))}this.boundingSphere.radius=_Mathsqrt(maxRadiusSq);if(isNaN(this.boundingSphere.radius)){console.error("THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.",this)}}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var index=this.index,attributes=this.attributes;if(attributes.position){var positions=attributes.position.array;if(attributes.normal===void 0){this.addAttribute("normal",new BufferAttribute(new Float32Array(positions.length),3))}else{for(var array=attributes.normal.array,i=0,il=array.length;i<il;i++){array[i]=0}}var normals=attributes.normal.array,vA,vB,vC,pA=new Vector3,pB=new Vector3,pC=new Vector3,cb=new Vector3,ab=new Vector3;if(index){for(var indices=index.array,i=0,il=index.count;i<il;i+=3){vA=3*indices[i+0];vB=3*indices[i+1];vC=3*indices[i+2];pA.fromArray(positions,vA);pB.fromArray(positions,vB);pC.fromArray(positions,vC);cb.subVectors(pC,pB);ab.subVectors(pA,pB);cb.cross(ab);normals[vA]+=cb.x;normals[vA+1]+=cb.y;normals[vA+2]+=cb.z;normals[vB]+=cb.x;normals[vB+1]+=cb.y;normals[vB+2]+=cb.z;normals[vC]+=cb.x;normals[vC+1]+=cb.y;normals[vC+2]+=cb.z}}else{for(var i=0,il=positions.length;i<il;i+=9){pA.fromArray(positions,i);pB.fromArray(positions,i+3);pC.fromArray(positions,i+6);cb.subVectors(pC,pB);ab.subVectors(pA,pB);cb.cross(ab);normals[i]=cb.x;normals[i+1]=cb.y;normals[i+2]=cb.z;normals[i+3]=cb.x;normals[i+4]=cb.y;normals[i+5]=cb.z;normals[i+6]=cb.x;normals[i+7]=cb.y;normals[i+8]=cb.z}}this.normalizeNormals();attributes.normal.needsUpdate=!0}},merge:function(geometry,offset){if(!(geometry&&geometry.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",geometry);return}if(offset===void 0){offset=0;console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. "+"Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.")}var attributes=this.attributes;for(var key in attributes){if(geometry.attributes[key]===void 0)continue;for(var attribute1=attributes[key],attributeArray1=attribute1.array,attribute2=geometry.attributes[key],attributeArray2=attribute2.array,attributeSize=attribute2.itemSize,i=0,j=attributeSize*offset;i<attributeArray2.length;i++,j++){attributeArray1[j]=attributeArray2[i]}}return this},normalizeNormals:function(){var vector=new Vector3;return function normalizeNormals(){for(var normals=this.attributes.normal,i=0,il=normals.count;i<il;i++){vector.x=normals.getX(i);vector.y=normals.getY(i);vector.z=normals.getZ(i);vector.normalize();normals.setXYZ(i,vector.x,vector.y,vector.z)}}}(),toNonIndexed:function(){function convertBufferAttribute(attribute,indices){for(var array=attribute.array,itemSize=attribute.itemSize,array2=new array.constructor(indices.length*itemSize),index=0,index2=0,i=0,l=indices.length;i<l;i++){index=indices[i]*itemSize;for(var j=0;j<itemSize;j++){array2[index2++]=array[index++]}}return new BufferAttribute(array2,itemSize)}if(null===this.index){console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.");return this}var geometry2=new BufferGeometry,indices=this.index.array,attributes=this.attributes;for(var name in attributes){var attribute=attributes[name],newAttribute=convertBufferAttribute(attribute,indices);geometry2.addAttribute(name,newAttribute)}var morphAttributes=this.morphAttributes;for(name in morphAttributes){for(var morphArray=[],morphAttribute=morphAttributes[name],i=0,il=morphAttribute.length;i<il;i++){var attribute=morphAttribute[i],newAttribute=convertBufferAttribute(attribute,indices);morphArray.push(newAttribute)}geometry2.morphAttributes[name]=morphArray}for(var groups=this.groups,i=0,l=groups.length,group;i<l;i++){group=groups[i];geometry2.addGroup(group.start,group.count,group.materialIndex)}return geometry2},toJSON:function(){var data={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"},uuid:this.uuid,type:this.type};if(""!==this.name)data.name=this.name;if(0<Object.keys(this.userData).length)data.userData=this.userData;if(this.parameters!==void 0){var parameters=this.parameters;for(var key in parameters){if(parameters[key]!==void 0)data[key]=parameters[key]}return data}data.data={attributes:{}};var index=this.index;if(null!==index){var array=Array.prototype.slice.call(index.array);data.data.index={type:index.array.constructor.name,array:array}}var attributes=this.attributes;for(var key in attributes){var attribute=attributes[key],array=Array.prototype.slice.call(attribute.array);data.data.attributes[key]={itemSize:attribute.itemSize,type:attribute.array.constructor.name,array:array,normalized:attribute.normalized}}var groups=this.groups;if(0<groups.length){data.data.groups=JSON.parse(JSON.stringify(groups))}var boundingSphere=this.boundingSphere;if(null!==boundingSphere){data.data.boundingSphere={center:boundingSphere.center.toArray(),radius:boundingSphere.radius}}return data},clone:function(){return new BufferGeometry().copy(this)},copy:function(source){var name,i,l;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingBox=null;this.boundingSphere=null;this.name=source.name;var index=source.index;if(null!==index){this.setIndex(index.clone())}var attributes=source.attributes;for(name in attributes){var attribute=attributes[name];this.addAttribute(name,attribute.clone())}var morphAttributes=source.morphAttributes;for(name in morphAttributes){var array=[],morphAttribute=morphAttributes[name];for(i=0,l=morphAttribute.length;i<l;i++){array.push(morphAttribute[i].clone())}this.morphAttributes[name]=array}var groups=source.groups;for(i=0,l=groups.length;i<l;i++){var group=groups[i];this.addGroup(group.start,group.count,group.materialIndex)}var boundingBox=source.boundingBox;if(null!==boundingBox){this.boundingBox=boundingBox.clone()}var boundingSphere=source.boundingSphere;if(null!==boundingSphere){this.boundingSphere=boundingSphere.clone()}this.drawRange.start=source.drawRange.start;this.drawRange.count=source.drawRange.count;this.userData=source.userData;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var BufferGeometry$1={BufferGeometry:BufferGeometry};_exports.$BufferGeometry=BufferGeometry$1;function Face3(a,b,c,normal,color,materialIndex){this.a=a;this.b=b;this.c=c;this.normal=normal&&normal.isVector3?normal:new Vector3;this.vertexNormals=Array.isArray(normal)?normal:[];this.color=color&&color.isColor?color:new Color;this.vertexColors=Array.isArray(color)?color:[];this.materialIndex=materialIndex!==void 0?materialIndex:0}Object.assign(Face3.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(source){this.a=source.a;this.b=source.b;this.c=source.c;this.normal.copy(source.normal);this.color.copy(source.color);this.materialIndex=source.materialIndex;for(var i=0,il=source.vertexNormals.length;i<il;i++){this.vertexNormals[i]=source.vertexNormals[i].clone()}for(var i=0,il=source.vertexColors.length;i<il;i++){this.vertexColors[i]=source.vertexColors[i].clone()}return this}});var Face3$1={Face3:Face3};_exports.$Face3=Face3$1;var geometryId=0;function Geometry(){Object.defineProperty(this,"id",{value:geometryId+=2});this.uuid=_Math.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingBox=null;this.boundingSphere=null;this.elementsNeedUpdate=!1;this.verticesNeedUpdate=!1;this.uvsNeedUpdate=!1;this.normalsNeedUpdate=!1;this.colorsNeedUpdate=!1;this.lineDistancesNeedUpdate=!1;this.groupsNeedUpdate=!1}Geometry.prototype=Object.assign(Object.create(EventDispatcher.prototype),{constructor:Geometry,isGeometry:!0,applyMatrix:function(matrix){for(var normalMatrix=new Matrix3().getNormalMatrix(matrix),i=0,il=this.vertices.length,vertex;i<il;i++){vertex=this.vertices[i];vertex.applyMatrix4(matrix)}for(var i=0,il=this.faces.length,face;i<il;i++){face=this.faces[i];face.normal.applyMatrix3(normalMatrix).normalize();for(var j=0,jl=face.vertexNormals.length;j<jl;j++){face.vertexNormals[j].applyMatrix3(normalMatrix).normalize()}}if(null!==this.boundingBox){this.computeBoundingBox()}if(null!==this.boundingSphere){this.computeBoundingSphere()}this.verticesNeedUpdate=!0;this.normalsNeedUpdate=!0;return this},rotateX:function(){var m1=new Matrix4;return function rotateX(angle){m1.makeRotationX(angle);this.applyMatrix(m1);return this}}(),rotateY:function(){var m1=new Matrix4;return function rotateY(angle){m1.makeRotationY(angle);this.applyMatrix(m1);return this}}(),rotateZ:function(){var m1=new Matrix4;return function rotateZ(angle){m1.makeRotationZ(angle);this.applyMatrix(m1);return this}}(),translate:function(){var m1=new Matrix4;return function translate(x,y,z){m1.makeTranslation(x,y,z);this.applyMatrix(m1);return this}}(),scale:function(){var m1=new Matrix4;return function scale(x,y,z){m1.makeScale(x,y,z);this.applyMatrix(m1);return this}}(),lookAt:function(){var obj=new Object3D;return function lookAt(vector){obj.lookAt(vector);obj.updateMatrix();this.applyMatrix(obj.matrix)}}(),fromBufferGeometry:function(geometry){var scope=this,indices=null!==geometry.index?geometry.index.array:void 0,attributes=geometry.attributes,positions=attributes.position.array,normals=attributes.normal!==void 0?attributes.normal.array:void 0,colors=attributes.color!==void 0?attributes.color.array:void 0,uvs=attributes.uv!==void 0?attributes.uv.array:void 0,uvs2=attributes.uv2!==void 0?attributes.uv2.array:void 0;if(uvs2!==void 0)this.faceVertexUvs[1]=[];for(var i=0,j=0;i<positions.length;i+=3,j+=2){scope.vertices.push(new Vector3().fromArray(positions,i));if(colors!==void 0){scope.colors.push(new Color().fromArray(colors,i))}}function addFace(a,b,c,materialIndex){var vertexColors=colors===void 0?[]:[scope.colors[a].clone(),scope.colors[b].clone(),scope.colors[c].clone()],vertexNormals=normals===void 0?[]:[new Vector3().fromArray(normals,3*a),new Vector3().fromArray(normals,3*b),new Vector3().fromArray(normals,3*c)],face=new Face3(a,b,c,vertexNormals,vertexColors,materialIndex);scope.faces.push(face);if(uvs!==void 0){scope.faceVertexUvs[0].push([new Vector2().fromArray(uvs,2*a),new Vector2().fromArray(uvs,2*b),new Vector2().fromArray(uvs,2*c)])}if(uvs2!==void 0){scope.faceVertexUvs[1].push([new Vector2().fromArray(uvs2,2*a),new Vector2().fromArray(uvs2,2*b),new Vector2().fromArray(uvs2,2*c)])}}var groups=geometry.groups;if(0<groups.length){for(var i=0;i<groups.length;i++){for(var group=groups[i],start=group.start,count=group.count,j=start,jl=start+count;j<jl;j+=3){if(indices!==void 0){addFace(indices[j],indices[j+1],indices[j+2],group.materialIndex)}else{addFace(j,j+1,j+2,group.materialIndex)}}}}else{if(indices!==void 0){for(var i=0;i<indices.length;i+=3){addFace(indices[i],indices[i+1],indices[i+2])}}else{for(var i=0;i<positions.length/3;i+=3){addFace(i,i+1,i+2)}}}this.computeFaceNormals();if(null!==geometry.boundingBox){this.boundingBox=geometry.boundingBox.clone()}if(null!==geometry.boundingSphere){this.boundingSphere=geometry.boundingSphere.clone()}return this},center:function(){var offset=new Vector3;return function center(){this.computeBoundingBox();this.boundingBox.getCenter(offset).negate();this.translate(offset.x,offset.y,offset.z);return this}}(),normalize:function(){this.computeBoundingSphere();var center=this.boundingSphere.center,radius=this.boundingSphere.radius,s=0===radius?1:1/radius,matrix=new Matrix4;matrix.set(s,0,0,-s*center.x,0,s,0,-s*center.y,0,0,s,-s*center.z,0,0,0,1);this.applyMatrix(matrix);return this},computeFaceNormals:function(){for(var cb=new Vector3,ab=new Vector3,f=0,fl=this.faces.length;f<fl;f++){var face=this.faces[f],vA=this.vertices[face.a],vB=this.vertices[face.b],vC=this.vertices[face.c];cb.subVectors(vC,vB);ab.subVectors(vA,vB);cb.cross(ab);cb.normalize();face.normal.copy(cb)}},computeVertexNormals:function(areaWeighted){if(areaWeighted===void 0)areaWeighted=!0;var v,vl,f,fl,face,vertices;vertices=Array(this.vertices.length);for(v=0,vl=this.vertices.length;v<vl;v++){vertices[v]=new Vector3}if(areaWeighted){var vA,vB,vC,cb=new Vector3,ab=new Vector3;for(f=0,fl=this.faces.length;f<fl;f++){face=this.faces[f];vA=this.vertices[face.a];vB=this.vertices[face.b];vC=this.vertices[face.c];cb.subVectors(vC,vB);ab.subVectors(vA,vB);cb.cross(ab);vertices[face.a].add(cb);vertices[face.b].add(cb);vertices[face.c].add(cb)}}else{this.computeFaceNormals();for(f=0,fl=this.faces.length;f<fl;f++){face=this.faces[f];vertices[face.a].add(face.normal);vertices[face.b].add(face.normal);vertices[face.c].add(face.normal)}}for(v=0,vl=this.vertices.length;v<vl;v++){vertices[v].normalize()}for(f=0,fl=this.faces.length;f<fl;f++){face=this.faces[f];var vertexNormals=face.vertexNormals;if(3===vertexNormals.length){vertexNormals[0].copy(vertices[face.a]);vertexNormals[1].copy(vertices[face.b]);vertexNormals[2].copy(vertices[face.c])}else{vertexNormals[0]=vertices[face.a].clone();vertexNormals[1]=vertices[face.b].clone();vertexNormals[2]=vertices[face.c].clone()}}if(0<this.faces.length){this.normalsNeedUpdate=!0}},computeFlatVertexNormals:function(){var f,fl,face;this.computeFaceNormals();for(f=0,fl=this.faces.length;f<fl;f++){face=this.faces[f];var vertexNormals=face.vertexNormals;if(3===vertexNormals.length){vertexNormals[0].copy(face.normal);vertexNormals[1].copy(face.normal);vertexNormals[2].copy(face.normal)}else{vertexNormals[0]=face.normal.clone();vertexNormals[1]=face.normal.clone();vertexNormals[2]=face.normal.clone()}}if(0<this.faces.length){this.normalsNeedUpdate=!0}},computeMorphNormals:function(){var i,il,f,fl,face;for(f=0,fl=this.faces.length;f<fl;f++){face=this.faces[f];if(!face.__originalFaceNormal){face.__originalFaceNormal=face.normal.clone()}else{face.__originalFaceNormal.copy(face.normal)}if(!face.__originalVertexNormals)face.__originalVertexNormals=[];for(i=0,il=face.vertexNormals.length;i<il;i++){if(!face.__originalVertexNormals[i]){face.__originalVertexNormals[i]=face.vertexNormals[i].clone()}else{face.__originalVertexNormals[i].copy(face.vertexNormals[i])}}}var tmpGeo=new Geometry;tmpGeo.faces=this.faces;for(i=0,il=this.morphTargets.length;i<il;i++){if(!this.morphNormals[i]){this.morphNormals[i]={};this.morphNormals[i].faceNormals=[];this.morphNormals[i].vertexNormals=[];var dstNormalsFace=this.morphNormals[i].faceNormals,dstNormalsVertex=this.morphNormals[i].vertexNormals,faceNormal,vertexNormals;for(f=0,fl=this.faces.length;f<fl;f++){faceNormal=new Vector3;vertexNormals={a:new Vector3,b:new Vector3,c:new Vector3};dstNormalsFace.push(faceNormal);dstNormalsVertex.push(vertexNormals)}}var morphNormals=this.morphNormals[i];tmpGeo.vertices=this.morphTargets[i].vertices;tmpGeo.computeFaceNormals();tmpGeo.computeVertexNormals();var faceNormal,vertexNormals;for(f=0,fl=this.faces.length;f<fl;f++){face=this.faces[f];faceNormal=morphNormals.faceNormals[f];vertexNormals=morphNormals.vertexNormals[f];faceNormal.copy(face.normal);vertexNormals.a.copy(face.vertexNormals[0]);vertexNormals.b.copy(face.vertexNormals[1]);vertexNormals.c.copy(face.vertexNormals[2])}}for(f=0,fl=this.faces.length;f<fl;f++){face=this.faces[f];face.normal=face.__originalFaceNormal;face.vertexNormals=face.__originalVertexNormals}},computeBoundingBox:function(){if(null===this.boundingBox){this.boundingBox=new Box3}this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){if(null===this.boundingSphere){this.boundingSphere=new Sphere}this.boundingSphere.setFromPoints(this.vertices)},merge:function(geometry,matrix,materialIndexOffset){if(!(geometry&&geometry.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",geometry);return}var normalMatrix,vertexOffset=this.vertices.length,vertices1=this.vertices,vertices2=geometry.vertices,faces1=this.faces,faces2=geometry.faces,uvs1=this.faceVertexUvs[0],uvs2=geometry.faceVertexUvs[0],colors1=this.colors,colors2=geometry.colors;if(materialIndexOffset===void 0)materialIndexOffset=0;if(matrix!==void 0){normalMatrix=new Matrix3().getNormalMatrix(matrix)}for(var i=0,il=vertices2.length;i<il;i++){var vertex=vertices2[i],vertexCopy=vertex.clone();if(matrix!==void 0)vertexCopy.applyMatrix4(matrix);vertices1.push(vertexCopy)}for(var i=0,il=colors2.length;i<il;i++){colors1.push(colors2[i].clone())}for(i=0,il=faces2.length;i<il;i++){var face=faces2[i],faceCopy,normal,color,faceVertexNormals=face.vertexNormals,faceVertexColors=face.vertexColors;faceCopy=new Face3(face.a+vertexOffset,face.b+vertexOffset,face.c+vertexOffset);faceCopy.normal.copy(face.normal);if(normalMatrix!==void 0){faceCopy.normal.applyMatrix3(normalMatrix).normalize()}for(var j=0,jl=faceVertexNormals.length;j<jl;j++){normal=faceVertexNormals[j].clone();if(normalMatrix!==void 0){normal.applyMatrix3(normalMatrix).normalize()}faceCopy.vertexNormals.push(normal)}faceCopy.color.copy(face.color);for(var j=0,jl=faceVertexColors.length;j<jl;j++){color=faceVertexColors[j];faceCopy.vertexColors.push(color.clone())}faceCopy.materialIndex=face.materialIndex+materialIndexOffset;faces1.push(faceCopy)}for(i=0,il=uvs2.length;i<il;i++){var uv=uvs2[i],uvCopy=[];if(uv===void 0){continue}for(var j=0,jl=uv.length;j<jl;j++){uvCopy.push(uv[j].clone())}uvs1.push(uvCopy)}},mergeMesh:function(mesh){if(!(mesh&&mesh.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",mesh);return}if(mesh.matrixAutoUpdate)mesh.updateMatrix();this.merge(mesh.geometry,mesh.matrix)},mergeVertices:function(){var verticesMap={},unique=[],changes=[],v,key,precisionPoints=4,precision=10000,i,il,face,indices,j,jl;for(i=0,il=this.vertices.length;i<il;i++){v=this.vertices[i];key=_Mathround(v.x*precision)+"_"+_Mathround(v.y*precision)+"_"+_Mathround(v.z*precision);if(verticesMap[key]===void 0){verticesMap[key]=i;unique.push(this.vertices[i]);changes[i]=unique.length-1}else{changes[i]=changes[verticesMap[key]]}}var faceIndicesToRemove=[];for(i=0,il=this.faces.length;i<il;i++){face=this.faces[i];face.a=changes[face.a];face.b=changes[face.b];face.c=changes[face.c];indices=[face.a,face.b,face.c];for(var n=0;3>n;n++){if(indices[n]===indices[(n+1)%3]){faceIndicesToRemove.push(i);break}}}for(i=faceIndicesToRemove.length-1;0<=i;i--){var idx=faceIndicesToRemove[i];this.faces.splice(idx,1);for(j=0,jl=this.faceVertexUvs.length;j<jl;j++){this.faceVertexUvs[j].splice(idx,1)}}var diff=this.vertices.length-unique.length;this.vertices=unique;return diff},setFromPoints:function(points){this.vertices=[];for(var i=0,l=points.length,point;i<l;i++){point=points[i];this.vertices.push(new Vector3(point.x,point.y,point.z||0))}return this},sortFacesByMaterialIndex:function(){for(var faces=this.faces,length=faces.length,i=0;i<length;i++){faces[i]._id=i}function materialIndexSort(a,b){return a.materialIndex-b.materialIndex}faces.sort(materialIndexSort);var uvs1=this.faceVertexUvs[0],uvs2=this.faceVertexUvs[1],newUvs1,newUvs2;if(uvs1&&uvs1.length===length)newUvs1=[];if(uvs2&&uvs2.length===length)newUvs2=[];for(var i=0,id;i<length;i++){id=faces[i]._id;if(newUvs1)newUvs1.push(uvs1[id]);if(newUvs2)newUvs2.push(uvs2[id])}if(newUvs1)this.faceVertexUvs[0]=newUvs1;if(newUvs2)this.faceVertexUvs[1]=newUvs2},toJSON:function(){var data={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"},uuid:this.uuid,type:this.type};if(""!==this.name)data.name=this.name;if(this.parameters!==void 0){var parameters=this.parameters;for(var key in parameters){if(parameters[key]!==void 0)data[key]=parameters[key]}return data}for(var vertices=[],i=0,vertex;i<this.vertices.length;i++){vertex=this.vertices[i];vertices.push(vertex.x,vertex.y,vertex.z)}for(var faces=[],normals=[],normalsHash={},colors=[],colorsHash={},uvs=[],uvsHash={},i=0;i<this.faces.length;i++){var face=this.faces[i],hasMaterial=!0,hasFaceUv=!1,hasFaceVertexUv=this.faceVertexUvs[0][i]!==void 0,hasFaceNormal=0<face.normal.length(),hasFaceVertexNormal=0<face.vertexNormals.length,hasFaceColor=1!==face.color.r||1!==face.color.g||1!==face.color.b,hasFaceVertexColor=0<face.vertexColors.length,faceType=0;faceType=setBit(faceType,0,0);faceType=setBit(faceType,1,hasMaterial);faceType=setBit(faceType,2,hasFaceUv);faceType=setBit(faceType,3,hasFaceVertexUv);faceType=setBit(faceType,4,hasFaceNormal);faceType=setBit(faceType,5,hasFaceVertexNormal);faceType=setBit(faceType,6,hasFaceColor);faceType=setBit(faceType,7,hasFaceVertexColor);faces.push(faceType);faces.push(face.a,face.b,face.c);faces.push(face.materialIndex);if(hasFaceVertexUv){var faceVertexUvs=this.faceVertexUvs[0][i];faces.push(getUvIndex(faceVertexUvs[0]),getUvIndex(faceVertexUvs[1]),getUvIndex(faceVertexUvs[2]))}if(hasFaceNormal){faces.push(getNormalIndex(face.normal))}if(hasFaceVertexNormal){var vertexNormals=face.vertexNormals;faces.push(getNormalIndex(vertexNormals[0]),getNormalIndex(vertexNormals[1]),getNormalIndex(vertexNormals[2]))}if(hasFaceColor){faces.push(getColorIndex(face.color))}if(hasFaceVertexColor){var vertexColors=face.vertexColors;faces.push(getColorIndex(vertexColors[0]),getColorIndex(vertexColors[1]),getColorIndex(vertexColors[2]))}}function setBit(value,position,enabled){return enabled?value|1<<position:value&~(1<<position)}function getNormalIndex(normal){var hash=normal.x.toString()+normal.y.toString()+normal.z.toString();if(normalsHash[hash]!==void 0){return normalsHash[hash]}normalsHash[hash]=normals.length/3;normals.push(normal.x,normal.y,normal.z);return normalsHash[hash]}function getColorIndex(color){var hash=color.r.toString()+color.g.toString()+color.b.toString();if(colorsHash[hash]!==void 0){return colorsHash[hash]}colorsHash[hash]=colors.length;colors.push(color.getHex());return colorsHash[hash]}function getUvIndex(uv){var hash=uv.x.toString()+uv.y.toString();if(uvsHash[hash]!==void 0){return uvsHash[hash]}uvsHash[hash]=uvs.length/2;uvs.push(uv.x,uv.y);return uvsHash[hash]}data.data={};data.data.vertices=vertices;data.data.normals=normals;if(0<colors.length)data.data.colors=colors;if(0<uvs.length)data.data.uvs=[uvs];data.data.faces=faces;return data},clone:function(){return new Geometry().copy(this)},copy:function(source){var i,il,j,jl,k,kl;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingBox=null;this.boundingSphere=null;this.name=source.name;var vertices=source.vertices;for(i=0,il=vertices.length;i<il;i++){this.vertices.push(vertices[i].clone())}var colors=source.colors;for(i=0,il=colors.length;i<il;i++){this.colors.push(colors[i].clone())}var faces=source.faces;for(i=0,il=faces.length;i<il;i++){this.faces.push(faces[i].clone())}for(i=0,il=source.faceVertexUvs.length;i<il;i++){var faceVertexUvs=source.faceVertexUvs[i];if(this.faceVertexUvs[i]===void 0){this.faceVertexUvs[i]=[]}for(j=0,jl=faceVertexUvs.length;j<jl;j++){var uvs=faceVertexUvs[j],uvsCopy=[];for(k=0,kl=uvs.length;k<kl;k++){var uv=uvs[k];uvsCopy.push(uv.clone())}this.faceVertexUvs[i].push(uvsCopy)}}var morphTargets=source.morphTargets;for(i=0,il=morphTargets.length;i<il;i++){var morphTarget={name:morphTargets[i].name};if(morphTargets[i].vertices!==void 0){morphTarget.vertices=[];for(j=0,jl=morphTargets[i].vertices.length;j<jl;j++){morphTarget.vertices.push(morphTargets[i].vertices[j].clone())}}if(morphTargets[i].normals!==void 0){morphTarget.normals=[];for(j=0,jl=morphTargets[i].normals.length;j<jl;j++){morphTarget.normals.push(morphTargets[i].normals[j].clone())}}this.morphTargets.push(morphTarget)}var morphNormals=source.morphNormals;for(i=0,il=morphNormals.length;i<il;i++){var morphNormal={};if(morphNormals[i].vertexNormals!==void 0){morphNormal.vertexNormals=[];for(j=0,jl=morphNormals[i].vertexNormals.length;j<jl;j++){var srcVertexNormal=morphNormals[i].vertexNormals[j],destVertexNormal={};destVertexNormal.a=srcVertexNormal.a.clone();destVertexNormal.b=srcVertexNormal.b.clone();destVertexNormal.c=srcVertexNormal.c.clone();morphNormal.vertexNormals.push(destVertexNormal)}}if(morphNormals[i].faceNormals!==void 0){morphNormal.faceNormals=[];for(j=0,jl=morphNormals[i].faceNormals.length;j<jl;j++){morphNormal.faceNormals.push(morphNormals[i].faceNormals[j].clone())}}this.morphNormals.push(morphNormal)}var skinWeights=source.skinWeights;for(i=0,il=skinWeights.length;i<il;i++){this.skinWeights.push(skinWeights[i].clone())}var skinIndices=source.skinIndices;for(i=0,il=skinIndices.length;i<il;i++){this.skinIndices.push(skinIndices[i].clone())}var lineDistances=source.lineDistances;for(i=0,il=lineDistances.length;i<il;i++){this.lineDistances.push(lineDistances[i])}var boundingBox=source.boundingBox;if(null!==boundingBox){this.boundingBox=boundingBox.clone()}var boundingSphere=source.boundingSphere;if(null!==boundingSphere){this.boundingSphere=boundingSphere.clone()}this.elementsNeedUpdate=source.elementsNeedUpdate;this.verticesNeedUpdate=source.verticesNeedUpdate;this.uvsNeedUpdate=source.uvsNeedUpdate;this.normalsNeedUpdate=source.normalsNeedUpdate;this.colorsNeedUpdate=source.colorsNeedUpdate;this.lineDistancesNeedUpdate=source.lineDistancesNeedUpdate;this.groupsNeedUpdate=source.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Geometry$1={Geometry:Geometry};_exports.$Geometry=Geometry$1;function Ray(origin,direction){this.origin=origin!==void 0?origin:new Vector3;this.direction=direction!==void 0?direction:new Vector3}Object.assign(Ray.prototype,{set:function(origin,direction){this.origin.copy(origin);this.direction.copy(direction);return this},clone:function(){return new this.constructor().copy(this)},copy:function(ray){this.origin.copy(ray.origin);this.direction.copy(ray.direction);return this},at:function(t,target){if(target===void 0){console.warn("THREE.Ray: .at() target is now required");target=new Vector3}return target.copy(this.direction).multiplyScalar(t).add(this.origin)},lookAt:function(v){this.direction.copy(v).sub(this.origin).normalize();return this},recast:function(){var v1=new Vector3;return function recast(t){this.origin.copy(this.at(t,v1));return this}}(),closestPointToPoint:function(point,target){if(target===void 0){console.warn("THREE.Ray: .closestPointToPoint() target is now required");target=new Vector3}target.subVectors(point,this.origin);var directionDistance=target.dot(this.direction);if(0>directionDistance){return target.copy(this.origin)}return target.copy(this.direction).multiplyScalar(directionDistance).add(this.origin)},distanceToPoint:function(point){return _Mathsqrt(this.distanceSqToPoint(point))},distanceSqToPoint:function(){var v1=new Vector3;return function distanceSqToPoint(point){var directionDistance=v1.subVectors(point,this.origin).dot(this.direction);if(0>directionDistance){return this.origin.distanceToSquared(point)}v1.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);return v1.distanceToSquared(point)}}(),distanceSqToSegment:function(){var segCenter=new Vector3,segDir=new Vector3,diff=new Vector3;return function distanceSqToSegment(v0,v1,optionalPointOnRay,optionalPointOnSegment){segCenter.copy(v0).add(v1).multiplyScalar(.5);segDir.copy(v1).sub(v0).normalize();diff.copy(this.origin).sub(segCenter);var segExtent=.5*v0.distanceTo(v1),a01=-this.direction.dot(segDir),b0=diff.dot(this.direction),b1=-diff.dot(segDir),c=diff.lengthSq(),det=_Mathabs(1-a01*a01),s0,s1,sqrDist,extDet;if(0<det){s0=a01*b1-b0;s1=a01*b0-b1;extDet=segExtent*det;if(0<=s0){if(s1>=-extDet){if(s1<=extDet){var invDet=1/det;s0*=invDet;s1*=invDet;sqrDist=s0*(s0+a01*s1+2*b0)+s1*(a01*s0+s1+2*b1)+c}else{s1=segExtent;s0=_Mathmax(0,-(a01*s1+b0));sqrDist=-s0*s0+s1*(s1+2*b1)+c}}else{s1=-segExtent;s0=_Mathmax(0,-(a01*s1+b0));sqrDist=-s0*s0+s1*(s1+2*b1)+c}}else{if(s1<=-extDet){s0=_Mathmax(0,-(-a01*segExtent+b0));s1=0<s0?-segExtent:_Mathmin(_Mathmax(-segExtent,-b1),segExtent);sqrDist=-s0*s0+s1*(s1+2*b1)+c}else if(s1<=extDet){s0=0;s1=_Mathmin(_Mathmax(-segExtent,-b1),segExtent);sqrDist=s1*(s1+2*b1)+c}else{s0=_Mathmax(0,-(a01*segExtent+b0));s1=0<s0?segExtent:_Mathmin(_Mathmax(-segExtent,-b1),segExtent);sqrDist=-s0*s0+s1*(s1+2*b1)+c}}}else{s1=0<a01?-segExtent:segExtent;s0=_Mathmax(0,-(a01*s1+b0));sqrDist=-s0*s0+s1*(s1+2*b1)+c}if(optionalPointOnRay){optionalPointOnRay.copy(this.direction).multiplyScalar(s0).add(this.origin)}if(optionalPointOnSegment){optionalPointOnSegment.copy(segDir).multiplyScalar(s1).add(segCenter)}return sqrDist}}(),intersectSphere:function(){var v1=new Vector3;return function intersectSphere(sphere,target){v1.subVectors(sphere.center,this.origin);var tca=v1.dot(this.direction),d2=v1.dot(v1)-tca*tca,radius2=sphere.radius*sphere.radius;if(d2>radius2)return null;var thc=_Mathsqrt(radius2-d2),t0=tca-thc,t1=tca+thc;if(0>t0&&0>t1)return null;if(0>t0)return this.at(t1,target);return this.at(t0,target)}}(),intersectsSphere:function(sphere){return this.distanceSqToPoint(sphere.center)<=sphere.radius*sphere.radius},distanceToPlane:function(plane){var denominator=plane.normal.dot(this.direction);if(0===denominator){if(0===plane.distanceToPoint(this.origin)){return 0}return null}var t=-(this.origin.dot(plane.normal)+plane.constant)/denominator;return 0<=t?t:null},intersectPlane:function(plane,target){var t=this.distanceToPlane(plane);if(null===t){return null}return this.at(t,target)},intersectsPlane:function(plane){var distToPoint=plane.distanceToPoint(this.origin);if(0===distToPoint){return!0}var denominator=plane.normal.dot(this.direction);if(0>denominator*distToPoint){return!0}return!1},intersectBox:function(box,target){var tmin,tmax,tymin,tymax,tzmin,tzmax,invdirx=1/this.direction.x,invdiry=1/this.direction.y,invdirz=1/this.direction.z,origin=this.origin;if(0<=invdirx){tmin=(box.min.x-origin.x)*invdirx;tmax=(box.max.x-origin.x)*invdirx}else{tmin=(box.max.x-origin.x)*invdirx;tmax=(box.min.x-origin.x)*invdirx}if(0<=invdiry){tymin=(box.min.y-origin.y)*invdiry;tymax=(box.max.y-origin.y)*invdiry}else{tymin=(box.max.y-origin.y)*invdiry;tymax=(box.min.y-origin.y)*invdiry}if(tmin>tymax||tymin>tmax)return null;if(tymin>tmin||tmin!==tmin)tmin=tymin;if(tymax<tmax||tmax!==tmax)tmax=tymax;if(0<=invdirz){tzmin=(box.min.z-origin.z)*invdirz;tzmax=(box.max.z-origin.z)*invdirz}else{tzmin=(box.max.z-origin.z)*invdirz;tzmax=(box.min.z-origin.z)*invdirz}if(tmin>tzmax||tzmin>tmax)return null;if(tzmin>tmin||tmin!==tmin)tmin=tzmin;if(tzmax<tmax||tmax!==tmax)tmax=tzmax;if(0>tmax)return null;return this.at(0<=tmin?tmin:tmax,target)},intersectsBox:function(){var v=new Vector3;return function intersectsBox(box){return null!==this.intersectBox(box,v)}}(),intersectTriangle:function(){var diff=new Vector3,edge1=new Vector3,edge2=new Vector3,normal=new Vector3;return function intersectTriangle(a,b,c,backfaceCulling,target){edge1.subVectors(b,a);edge2.subVectors(c,a);normal.crossVectors(edge1,edge2);var DdN=this.direction.dot(normal),sign;if(0<DdN){if(backfaceCulling)return null;sign=1}else if(0>DdN){sign=-1;DdN=-DdN}else{return null}diff.subVectors(this.origin,a);var DdQxE2=sign*this.direction.dot(edge2.crossVectors(diff,edge2));if(0>DdQxE2){return null}var DdE1xQ=sign*this.direction.dot(edge1.cross(diff));if(0>DdE1xQ){return null}if(DdQxE2+DdE1xQ>DdN){return null}var QdN=-sign*diff.dot(normal);if(0>QdN){return null}return this.at(QdN/DdN,target)}}(),applyMatrix4:function(matrix4){this.origin.applyMatrix4(matrix4);this.direction.transformDirection(matrix4);return this},equals:function(ray){return ray.origin.equals(this.origin)&&ray.direction.equals(this.direction)}});var Ray$1={Ray:Ray};_exports.$Ray=Ray$1;function Raycaster(origin,direction,near,far){this.ray=new Ray(origin,direction);this.near=near||0;this.far=far||1/0;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})}function ascSort(a,b){return a.distance-b.distance}function intersectObject(object,raycaster,intersects,recursive){if(!1===object.visible)return;object.raycast(raycaster,intersects);if(!0===recursive){for(var children=object.children,i=0,l=children.length;i<l;i++){intersectObject(children[i],raycaster,intersects,!0)}}}Object.assign(Raycaster.prototype,{linePrecision:1,set:function(origin,direction){this.ray.set(origin,direction)},setFromCamera:function(coords,camera){if(camera&&camera.isPerspectiveCamera){this.ray.origin.setFromMatrixPosition(camera.matrixWorld);this.ray.direction.set(coords.x,coords.y,.5).unproject(camera).sub(this.ray.origin).normalize()}else if(camera&&camera.isOrthographicCamera){this.ray.origin.set(coords.x,coords.y,(camera.near+camera.far)/(camera.near-camera.far)).unproject(camera);this.ray.direction.set(0,0,-1).transformDirection(camera.matrixWorld)}else{console.error("THREE.Raycaster: Unsupported camera type.")}},intersectObject:function(object,recursive,optionalTarget){var intersects=optionalTarget||[];intersectObject(object,this,intersects,recursive);intersects.sort(ascSort);return intersects},intersectObjects:function(objects,recursive,optionalTarget){var intersects=optionalTarget||[];if(!1===Array.isArray(objects)){console.warn("THREE.Raycaster.intersectObjects: objects is not an Array.");return intersects}for(var i=0,l=objects.length;i<l;i++){intersectObject(objects[i],this,intersects,recursive)}intersects.sort(ascSort);return intersects}});var Raycaster$1={Raycaster:Raycaster};_exports.$Raycaster=Raycaster$1;var Earcut={triangulate:function(data,holeIndices,dim){dim=dim||2;var hasHoles=holeIndices&&holeIndices.length,outerLen=hasHoles?holeIndices[0]*dim:data.length,outerNode=linkedList(data,0,outerLen,dim,!0),triangles=[];if(!outerNode)return triangles;var minX,minY,maxX,maxY,x,y,invSize;if(hasHoles)outerNode=eliminateHoles(data,holeIndices,outerNode,dim);if(data.length>80*dim){minX=maxX=data[0];minY=maxY=data[1];for(var i=dim;i<outerLen;i+=dim){x=data[i];y=data[i+1];if(x<minX)minX=x;if(y<minY)minY=y;if(x>maxX)maxX=x;if(y>maxY)maxY=y}invSize=_Mathmax(maxX-minX,maxY-minY);invSize=0!==invSize?1/invSize:0}earcutLinked(outerNode,triangles,dim,minX,minY,invSize);return triangles}};_exports.Earcut=Earcut;function linkedList(data,start,end,dim,clockwise){var i,last;if(clockwise===0<signedArea(data,start,end,dim)){for(i=start;i<end;i+=dim)last=insertNode(i,data[i],data[i+1],last)}else{for(i=end-dim;i>=start;i-=dim)last=insertNode(i,data[i],data[i+1],last)}if(last&&equals(last,last.next)){removeNode(last);last=last.next}return last}function filterPoints(start,end){if(!start)return start;if(!end)end=start;var p=start,again;do{again=!1;if(!p.steiner&&(equals(p,p.next)||0===area(p.prev,p,p.next))){removeNode(p);p=end=p.prev;if(p===p.next)break;again=!0}else{p=p.next}}while(again||p!==end);return end}function earcutLinked(ear,triangles,dim,minX,minY,invSize,pass){if(!ear)return;if(!pass&&invSize)indexCurve(ear,minX,minY,invSize);var stop=ear,prev,next;while(ear.prev!==ear.next){prev=ear.prev;next=ear.next;if(invSize?isEarHashed(ear,minX,minY,invSize):isEar(ear)){triangles.push(prev.i/dim);triangles.push(ear.i/dim);triangles.push(next.i/dim);removeNode(ear);ear=next.next;stop=next.next;continue}ear=next;if(ear===stop){if(!pass){earcutLinked(filterPoints(ear),triangles,dim,minX,minY,invSize,1)}else if(1===pass){ear=cureLocalIntersections(ear,triangles,dim);earcutLinked(ear,triangles,dim,minX,minY,invSize,2)}else if(2===pass){splitEarcut(ear,triangles,dim,minX,minY,invSize)}break}}}function isEar(ear){var a=ear.prev,b=ear,c=ear.next;if(0<=area(a,b,c))return!1;var p=ear.next.next;while(p!==ear.prev){if(pointInTriangle(a.x,a.y,b.x,b.y,c.x,c.y,p.x,p.y)&&0<=area(p.prev,p,p.next)){return!1}p=p.next}return!0}function isEarHashed(ear,minX,minY,invSize){var a=ear.prev,b=ear,c=ear.next;if(0<=area(a,b,c))return!1;var minTX=a.x<b.x?a.x<c.x?a.x:c.x:b.x<c.x?b.x:c.x,minTY=a.y<b.y?a.y<c.y?a.y:c.y:b.y<c.y?b.y:c.y,maxTX=a.x>b.x?a.x>c.x?a.x:c.x:b.x>c.x?b.x:c.x,maxTY=a.y>b.y?a.y>c.y?a.y:c.y:b.y>c.y?b.y:c.y,minZ=zOrder(minTX,minTY,minX,minY,invSize),maxZ=zOrder(maxTX,maxTY,minX,minY,invSize),p=ear.nextZ;while(p&&p.z<=maxZ){if(p!==ear.prev&&p!==ear.next&&pointInTriangle(a.x,a.y,b.x,b.y,c.x,c.y,p.x,p.y)&&0<=area(p.prev,p,p.next))return!1;p=p.nextZ}p=ear.prevZ;while(p&&p.z>=minZ){if(p!==ear.prev&&p!==ear.next&&pointInTriangle(a.x,a.y,b.x,b.y,c.x,c.y,p.x,p.y)&&0<=area(p.prev,p,p.next))return!1;p=p.prevZ}return!0}function cureLocalIntersections(start,triangles,dim){var p=start;do{var a=p.prev,b=p.next.next;if(!equals(a,b)&&intersects(a,p,p.next,b)&&locallyInside(a,b)&&locallyInside(b,a)){triangles.push(a.i/dim);triangles.push(p.i/dim);triangles.push(b.i/dim);removeNode(p);removeNode(p.next);p=start=b}p=p.next}while(p!==start);return p}function splitEarcut(start,triangles,dim,minX,minY,invSize){var a=start;do{var b=a.next.next;while(b!==a.prev){if(a.i!==b.i&&isValidDiagonal(a,b)){var c=splitPolygon(a,b);a=filterPoints(a,a.next);c=filterPoints(c,c.next);earcutLinked(a,triangles,dim,minX,minY,invSize);earcutLinked(c,triangles,dim,minX,minY,invSize);return}b=b.next}a=a.next}while(a!==start)}function eliminateHoles(data,holeIndices,outerNode,dim){var queue=[],i,len,start,end,list;for(i=0,len=holeIndices.length;i<len;i++){start=holeIndices[i]*dim;end=i<len-1?holeIndices[i+1]*dim:data.length;list=linkedList(data,start,end,dim,!1);if(list===list.next)list.steiner=!0;queue.push(getLeftmost(list))}queue.sort(compareX);for(i=0;i<queue.length;i++){eliminateHole(queue[i],outerNode);outerNode=filterPoints(outerNode,outerNode.next)}return outerNode}function compareX(a,b){return a.x-b.x}function eliminateHole(hole,outerNode){outerNode=findHoleBridge(hole,outerNode);if(outerNode){var b=splitPolygon(outerNode,hole);filterPoints(b,b.next)}}function findHoleBridge(hole,outerNode){var p=outerNode,hx=hole.x,hy=hole.y,qx=-Infinity,m;do{if(hy<=p.y&&hy>=p.next.y&&p.next.y!==p.y){var x=p.x+(hy-p.y)*(p.next.x-p.x)/(p.next.y-p.y);if(x<=hx&&x>qx){qx=x;if(x===hx){if(hy===p.y)return p;if(hy===p.next.y)return p.next}m=p.x<p.next.x?p:p.next}}p=p.next}while(p!==outerNode);if(!m)return null;if(hx===qx)return m.prev;var stop=m,mx=m.x,my=m.y,tanMin=1/0,tan;p=m.next;while(p!==stop){if(hx>=p.x&&p.x>=mx&&hx!==p.x&&pointInTriangle(hy<my?hx:qx,hy,mx,my,hy<my?qx:hx,hy,p.x,p.y)){tan=_Mathabs(hy-p.y)/(hx-p.x);if((tan<tanMin||tan===tanMin&&p.x>m.x)&&locallyInside(p,hole)){m=p;tanMin=tan}}p=p.next}return m}function indexCurve(start,minX,minY,invSize){var p=start;do{if(null===p.z)p.z=zOrder(p.x,p.y,minX,minY,invSize);p.prevZ=p.prev;p.nextZ=p.next;p=p.next}while(p!==start);p.prevZ.nextZ=null;p.prevZ=null;sortLinked(p)}function sortLinked(list){var i,p,q,e,tail,numMerges,pSize,qSize,inSize=1;do{p=list;list=null;tail=null;numMerges=0;while(p){numMerges++;q=p;pSize=0;for(i=0;i<inSize;i++){pSize++;q=q.nextZ;if(!q)break}qSize=inSize;while(0<pSize||0<qSize&&q){if(0!==pSize&&(0===qSize||!q||p.z<=q.z)){e=p;p=p.nextZ;pSize--}else{e=q;q=q.nextZ;qSize--}if(tail)tail.nextZ=e;else list=e;e.prevZ=tail;tail=e}p=q}tail.nextZ=null;inSize*=2}while(1<numMerges);return list}function zOrder(x,y,minX,minY,invSize){x=32767*(x-minX)*invSize;y=32767*(y-minY)*invSize;x=16711935&(x|x<<8);x=252645135&(x|x<<4);x=858993459&(x|x<<2);x=1431655765&(x|x<<1);y=16711935&(y|y<<8);y=252645135&(y|y<<4);y=858993459&(y|y<<2);y=1431655765&(y|y<<1);return x|y<<1}function getLeftmost(start){var p=start,leftmost=start;do{if(p.x<leftmost.x)leftmost=p;p=p.next}while(p!==start);return leftmost}function pointInTriangle(ax,ay,bx,by,cx,cy,px,py){return 0<=(cx-px)*(ay-py)-(ax-px)*(cy-py)&&0<=(ax-px)*(by-py)-(bx-px)*(ay-py)&&0<=(bx-px)*(cy-py)-(cx-px)*(by-py)}function isValidDiagonal(a,b){return a.next.i!==b.i&&a.prev.i!==b.i&&!intersectsPolygon(a,b)&&locallyInside(a,b)&&locallyInside(b,a)&&middleInside(a,b)}function area(p,q,r){return(q.y-p.y)*(r.x-q.x)-(q.x-p.x)*(r.y-q.y)}function equals(p1,p2){return p1.x===p2.x&&p1.y===p2.y}function intersects(p1,q1,p2,q2){if(equals(p1,q1)&&equals(p2,q2)||equals(p1,q2)&&equals(p2,q1))return!0;return 0<area(p1,q1,p2)!==0<area(p1,q1,q2)&&0<area(p2,q2,p1)!==0<area(p2,q2,q1)}function intersectsPolygon(a,b){var p=a;do{if(p.i!==a.i&&p.next.i!==a.i&&p.i!==b.i&&p.next.i!==b.i&&intersects(p,p.next,a,b)){return!0}p=p.next}while(p!==a);return!1}function locallyInside(a,b){return 0>area(a.prev,a,a.next)?0<=area(a,b,a.next)&&0<=area(a,a.prev,b):0>area(a,b,a.prev)||0>area(a,a.next,b)}function middleInside(a,b){var p=a,inside=!1,px=(a.x+b.x)/2,py=(a.y+b.y)/2;do{if(p.y>py!==p.next.y>py&&p.next.y!==p.y&&px<(p.next.x-p.x)*(py-p.y)/(p.next.y-p.y)+p.x){inside=!inside}p=p.next}while(p!==a);return inside}function splitPolygon(a,b){var a2=new Node$1(a.i,a.x,a.y),b2=new Node$1(b.i,b.x,b.y),an=a.next,bp=b.prev;a.next=b;b.prev=a;a2.next=an;an.prev=a2;b2.next=a2;a2.prev=b2;bp.next=b2;b2.prev=bp;return b2}function insertNode(i,x,y,last){var p=new Node$1(i,x,y);if(!last){p.prev=p;p.next=p}else{p.next=last.next;p.prev=last;last.next.prev=p;last.next=p}return p}function removeNode(p){p.next.prev=p.prev;p.prev.next=p.next;if(p.prevZ)p.prevZ.nextZ=p.nextZ;if(p.nextZ)p.nextZ.prevZ=p.prevZ}function Node$1(i,x,y){this.i=i;this.x=x;this.y=y;this.prev=null;this.next=null;this.z=null;this.prevZ=null;this.nextZ=null;this.steiner=!1}function signedArea(data,start,end,dim){for(var sum=0,i=start,j=end-dim;i<end;i+=dim){sum+=(data[j]-data[i])*(data[i+1]+data[j+1]);j=i}return sum}var Earcut$1={Earcut:Earcut};_exports.$Earcut=Earcut$1;var _canvas,ImageUtils={getDataURL:function(image){var canvas;if("undefined"==typeof HTMLCanvasElement){return image.src}else if(image instanceof HTMLCanvasElement){canvas=image}else{if(_canvas===void 0)_canvas=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");_canvas.width=image.width;_canvas.height=image.height;var context=_canvas.getContext("2d");if(image instanceof ImageData){context.putImageData(image,0,0)}else{context.drawImage(image,0,0,image.width,image.height)}canvas=_canvas}if(2048<canvas.width||2048<canvas.height){return canvas.toDataURL("image/jpeg",.6)}else{return canvas.toDataURL("image/png")}}};_exports.ImageUtils=ImageUtils;var ImageUtils$1={ImageUtils:ImageUtils};_exports.$ImageUtils=ImageUtils$1;var ShapeUtils={area:function(contour){for(var n=contour.length,a=0,p=n-1,q=0;q<n;p=q++){a+=contour[p].x*contour[q].y-contour[q].x*contour[p].y}return .5*a},isClockWise:function(pts){return 0>ShapeUtils.area(pts)},triangulateShape:function(contour,holes){var vertices=[],holeIndices=[],faces=[];removeDupEndPts(contour);addContour(vertices,contour);var holeIndex=contour.length;holes.forEach(removeDupEndPts);for(var i=0;i<holes.length;i++){holeIndices.push(holeIndex);holeIndex+=holes[i].length;addContour(vertices,holes[i])}for(var triangles=Earcut.triangulate(vertices,holeIndices),i=0;i<triangles.length;i+=3){faces.push(triangles.slice(i,i+3))}return faces}};_exports.ShapeUtils=ShapeUtils;function removeDupEndPts(points){var l=points.length;if(2<l&&points[l-1].equals(points[0])){points.pop()}}function addContour(vertices,contour){for(var i=0;i<contour.length;i++){vertices.push(contour[i].x);vertices.push(contour[i].y)}}var ShapeUtils$1={ShapeUtils:ShapeUtils};_exports.$ShapeUtils=ShapeUtils$1;function Curve(){this.type="Curve";this.arcLengthDivisions=200}Object.assign(Curve.prototype,{getPoint:function(){console.warn("THREE.Curve: .getPoint() not implemented.");return null},getPointAt:function(u,optionalTarget){var t=this.getUtoTmapping(u);return this.getPoint(t,optionalTarget)},getPoints:function(divisions){if(divisions===void 0)divisions=5;for(var points=[],d=0;d<=divisions;d++){points.push(this.getPoint(d/divisions))}return points},getSpacedPoints:function(divisions){if(divisions===void 0)divisions=5;for(var points=[],d=0;d<=divisions;d++){points.push(this.getPointAt(d/divisions))}return points},getLength:function(){var lengths=this.getLengths();return lengths[lengths.length-1]},getLengths:function(divisions){if(divisions===void 0)divisions=this.arcLengthDivisions;if(this.cacheArcLengths&&this.cacheArcLengths.length===divisions+1&&!this.needsUpdate){return this.cacheArcLengths}this.needsUpdate=!1;var cache=[],current,last=this.getPoint(0),p,sum=0;cache.push(0);for(p=1;p<=divisions;p++){current=this.getPoint(p/divisions);sum+=current.distanceTo(last);cache.push(sum);last=current}this.cacheArcLengths=cache;return cache},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(u,distance){var arcLengths=this.getLengths(),i=0,il=arcLengths.length,targetArcLength;if(distance){targetArcLength=distance}else{targetArcLength=u*arcLengths[il-1]}var low=0,high=il-1,comparison;while(low<=high){i=_Mathfloor(low+(high-low)/2);comparison=arcLengths[i]-targetArcLength;if(0>comparison){low=i+1}else if(0<comparison){high=i-1}else{high=i;break}}i=high;if(arcLengths[i]===targetArcLength){return i/(il-1)}var lengthBefore=arcLengths[i],lengthAfter=arcLengths[i+1],segmentLength=lengthAfter-lengthBefore,segmentFraction=(targetArcLength-lengthBefore)/segmentLength,t=(i+segmentFraction)/(il-1);return t},getTangent:function(t){var delta=1e-4,t1=t-delta,t2=t+delta;if(0>t1)t1=0;if(1<t2)t2=1;var pt1=this.getPoint(t1),pt2=this.getPoint(t2),vec=pt2.clone().sub(pt1);return vec.normalize()},getTangentAt:function(u){var t=this.getUtoTmapping(u);return this.getTangent(t)},computeFrenetFrames:function(segments,closed){var normal=new Vector3,tangents=[],normals=[],binormals=[],vec=new Vector3,mat=new Matrix4,i,u,theta;for(i=0;i<=segments;i++){u=i/segments;tangents[i]=this.getTangentAt(u);tangents[i].normalize()}normals[0]=new Vector3;binormals[0]=new Vector3;var min=Number.MAX_VALUE,tx=_Mathabs(tangents[0].x),ty=_Mathabs(tangents[0].y),tz=_Mathabs(tangents[0].z);if(tx<=min){min=tx;normal.set(1,0,0)}if(ty<=min){min=ty;normal.set(0,1,0)}if(tz<=min){normal.set(0,0,1)}vec.crossVectors(tangents[0],normal).normalize();normals[0].crossVectors(tangents[0],vec);binormals[0].crossVectors(tangents[0],normals[0]);for(i=1;i<=segments;i++){normals[i]=normals[i-1].clone();binormals[i]=binormals[i-1].clone();vec.crossVectors(tangents[i-1],tangents[i]);if(vec.length()>_NumberEPSILON){vec.normalize();theta=_Mathacos(_Math.clamp(tangents[i-1].dot(tangents[i]),-1,1));normals[i].applyMatrix4(mat.makeRotationAxis(vec,theta))}binormals[i].crossVectors(tangents[i],normals[i])}if(!0===closed){theta=_Mathacos(_Math.clamp(normals[0].dot(normals[segments]),-1,1));theta/=segments;if(0<tangents[0].dot(vec.crossVectors(normals[0],normals[segments]))){theta=-theta}for(i=1;i<=segments;i++){normals[i].applyMatrix4(mat.makeRotationAxis(tangents[i],theta*i));binormals[i].crossVectors(tangents[i],normals[i])}}return{tangents:tangents,normals:normals,binormals:binormals}},clone:function(){return new this.constructor().copy(this)},copy:function(source){this.arcLengthDivisions=source.arcLengthDivisions;return this},toJSON:function(){var data={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"},arcLengthDivisions:this.arcLengthDivisions,type:this.type};return data},fromJSON:function(json){this.arcLengthDivisions=json.arcLengthDivisions;return this}});var Curve$1={Curve:Curve};_exports.$Curve=Curve$1;function EllipseCurve(aX,aY,xRadius,yRadius,aStartAngle,aEndAngle,aClockwise,aRotation){Curve.call(this);this.type="EllipseCurve";this.aX=aX||0;this.aY=aY||0;this.xRadius=xRadius||1;this.yRadius=yRadius||1;this.aStartAngle=aStartAngle||0;this.aEndAngle=aEndAngle||2*_MathPI;this.aClockwise=aClockwise||!1;this.aRotation=aRotation||0}EllipseCurve.prototype=Object.create(Curve.prototype);EllipseCurve.prototype.constructor=EllipseCurve;EllipseCurve.prototype.isEllipseCurve=!0;EllipseCurve.prototype.getPoint=function(t,optionalTarget){var point=optionalTarget||new Vector2,twoPi=2*_MathPI,deltaAngle=this.aEndAngle-this.aStartAngle,samePoints=_Mathabs(deltaAngle)<_NumberEPSILON;while(0>deltaAngle)deltaAngle+=twoPi;while(deltaAngle>twoPi)deltaAngle-=twoPi;if(deltaAngle<_NumberEPSILON){if(samePoints){deltaAngle=0}else{deltaAngle=twoPi}}if(!0===this.aClockwise&&!samePoints){if(deltaAngle===twoPi){deltaAngle=-twoPi}else{deltaAngle=deltaAngle-twoPi}}var angle=this.aStartAngle+t*deltaAngle,x=this.aX+this.xRadius*_Mathcos(angle),y=this.aY+this.yRadius*_Mathsin(angle);if(0!==this.aRotation){var cos=_Mathcos(this.aRotation),sin=_Mathsin(this.aRotation),tx=x-this.aX,ty=y-this.aY;x=tx*cos-ty*sin+this.aX;y=tx*sin+ty*cos+this.aY}return point.set(x,y)};EllipseCurve.prototype.copy=function(source){Curve.prototype.copy.call(this,source);this.aX=source.aX;this.aY=source.aY;this.xRadius=source.xRadius;this.yRadius=source.yRadius;this.aStartAngle=source.aStartAngle;this.aEndAngle=source.aEndAngle;this.aClockwise=source.aClockwise;this.aRotation=source.aRotation;return this};EllipseCurve.prototype.toJSON=function(){var data=Curve.prototype.toJSON.call(this);data.aX=this.aX;data.aY=this.aY;data.xRadius=this.xRadius;data.yRadius=this.yRadius;data.aStartAngle=this.aStartAngle;data.aEndAngle=this.aEndAngle;data.aClockwise=this.aClockwise;data.aRotation=this.aRotation;return data};EllipseCurve.prototype.fromJSON=function(json){Curve.prototype.fromJSON.call(this,json);this.aX=json.aX;this.aY=json.aY;this.xRadius=json.xRadius;this.yRadius=json.yRadius;this.aStartAngle=json.aStartAngle;this.aEndAngle=json.aEndAngle;this.aClockwise=json.aClockwise;this.aRotation=json.aRotation;return this};var EllipseCurve$1={EllipseCurve:EllipseCurve};_exports.$EllipseCurve=EllipseCurve$1;function ArcCurve(aX,aY,aRadius,aStartAngle,aEndAngle,aClockwise){EllipseCurve.call(this,aX,aY,aRadius,aRadius,aStartAngle,aEndAngle,aClockwise);this.type="ArcCurve"}ArcCurve.prototype=Object.create(EllipseCurve.prototype);ArcCurve.prototype.constructor=ArcCurve;ArcCurve.prototype.isArcCurve=!0;var ArcCurve$1={ArcCurve:ArcCurve};_exports.$ArcCurve=ArcCurve$1;function CubicPoly(){var c0=0,c1=0,c2=0,c3=0;function init(x0,x1,t0,t1){c0=x0;c1=t0;c2=-3*x0+3*x1-2*t0-t1;c3=2*x0-2*x1+t0+t1}return{initCatmullRom:function(x0,x1,x2,x3,tension){init(x1,x2,tension*(x2-x0),tension*(x3-x1))},initNonuniformCatmullRom:function(x0,x1,x2,x3,dt0,dt1,dt2){var t1=(x1-x0)/dt0-(x2-x0)/(dt0+dt1)+(x2-x1)/dt1,t2=(x2-x1)/dt1-(x3-x1)/(dt1+dt2)+(x3-x2)/dt2;t1*=dt1;t2*=dt1;init(x1,x2,t1,t2)},calc:function(t){var t2=t*t,t3=t2*t;return c0+c1*t+c2*t2+c3*t3}}}var tmp=new Vector3,px=new CubicPoly,py=new CubicPoly,pz=new CubicPoly;function CatmullRomCurve3(points,closed,curveType,tension){Curve.call(this);this.type="CatmullRomCurve3";this.points=points||[];this.closed=closed||!1;this.curveType=curveType||"centripetal";this.tension=tension||.5}CatmullRomCurve3.prototype=Object.create(Curve.prototype);CatmullRomCurve3.prototype.constructor=CatmullRomCurve3;CatmullRomCurve3.prototype.isCatmullRomCurve3=!0;CatmullRomCurve3.prototype.getPoint=function(t,optionalTarget){var point=optionalTarget||new Vector3,points=this.points,l=points.length,p=(l-(this.closed?0:1))*t,intPoint=_Mathfloor(p),weight=p-intPoint;if(this.closed){intPoint+=0<intPoint?0:(_Mathfloor(_Mathabs(intPoint)/l)+1)*l}else if(0===weight&&intPoint===l-1){intPoint=l-2;weight=1}var p0,p1,p2,p3;if(this.closed||0<intPoint){p0=points[(intPoint-1)%l]}else{tmp.subVectors(points[0],points[1]).add(points[0]);p0=tmp}p1=points[intPoint%l];p2=points[(intPoint+1)%l];if(this.closed||intPoint+2<l){p3=points[(intPoint+2)%l]}else{tmp.subVectors(points[l-1],points[l-2]).add(points[l-1]);p3=tmp}if("centripetal"===this.curveType||"chordal"===this.curveType){var pow="chordal"===this.curveType?.5:.25,dt0=_Mathpow(p0.distanceToSquared(p1),pow),dt1=_Mathpow(p1.distanceToSquared(p2),pow),dt2=_Mathpow(p2.distanceToSquared(p3),pow);if(1e-4>dt1)dt1=1;if(1e-4>dt0)dt0=dt1;if(1e-4>dt2)dt2=dt1;px.initNonuniformCatmullRom(p0.x,p1.x,p2.x,p3.x,dt0,dt1,dt2);py.initNonuniformCatmullRom(p0.y,p1.y,p2.y,p3.y,dt0,dt1,dt2);pz.initNonuniformCatmullRom(p0.z,p1.z,p2.z,p3.z,dt0,dt1,dt2)}else if("catmullrom"===this.curveType){px.initCatmullRom(p0.x,p1.x,p2.x,p3.x,this.tension);py.initCatmullRom(p0.y,p1.y,p2.y,p3.y,this.tension);pz.initCatmullRom(p0.z,p1.z,p2.z,p3.z,this.tension)}point.set(px.calc(weight),py.calc(weight),pz.calc(weight));return point};CatmullRomCurve3.prototype.copy=function(source){Curve.prototype.copy.call(this,source);this.points=[];for(var i=0,l=source.points.length,point;i<l;i++){point=source.points[i];this.points.push(point.clone())}this.closed=source.closed;this.curveType=source.curveType;this.tension=source.tension;return this};CatmullRomCurve3.prototype.toJSON=function(){var data=Curve.prototype.toJSON.call(this);data.points=[];for(var i=0,l=this.points.length,point;i<l;i++){point=this.points[i];data.points.push(point.toArray())}data.closed=this.closed;data.curveType=this.curveType;data.tension=this.tension;return data};CatmullRomCurve3.prototype.fromJSON=function(json){Curve.prototype.fromJSON.call(this,json);this.points=[];for(var i=0,l=json.points.length,point;i<l;i++){point=json.points[i];this.points.push(new Vector3().fromArray(point))}this.closed=json.closed;this.curveType=json.curveType;this.tension=json.tension;return this};var CatmullRomCurve3$1={CatmullRomCurve3:CatmullRomCurve3};_exports.$CatmullRomCurve3=CatmullRomCurve3$1;function CatmullRom(t,p0,p1,p2,p3){var v0=.5*(p2-p0),v1=.5*(p3-p1),t2=t*t,t3=t*t2;return(2*p1-2*p2+v0+v1)*t3+(-3*p1+3*p2-2*v0-v1)*t2+v0*t+p1}function QuadraticBezierP0(t,p){var k=1-t;return k*k*p}function QuadraticBezierP1(t,p){return 2*(1-t)*t*p}function QuadraticBezierP2(t,p){return t*t*p}function QuadraticBezier(t,p0,p1,p2){return QuadraticBezierP0(t,p0)+QuadraticBezierP1(t,p1)+QuadraticBezierP2(t,p2)}function CubicBezierP0(t,p){var k=1-t;return k*k*k*p}function CubicBezierP1(t,p){var k=1-t;return 3*k*k*t*p}function CubicBezierP2(t,p){return 3*(1-t)*t*t*p}function CubicBezierP3(t,p){return t*t*t*p}function CubicBezier(t,p0,p1,p2,p3){return CubicBezierP0(t,p0)+CubicBezierP1(t,p1)+CubicBezierP2(t,p2)+CubicBezierP3(t,p3)}var Interpolations={CatmullRom:CatmullRom,QuadraticBezier:QuadraticBezier,CubicBezier:CubicBezier};_exports.$Interpolations=Interpolations;function CubicBezierCurve(v0,v1,v2,v3){Curve.call(this);this.type="CubicBezierCurve";this.v0=v0||new Vector2;this.v1=v1||new Vector2;this.v2=v2||new Vector2;this.v3=v3||new Vector2}CubicBezierCurve.prototype=Object.create(Curve.prototype);CubicBezierCurve.prototype.constructor=CubicBezierCurve;CubicBezierCurve.prototype.isCubicBezierCurve=!0;CubicBezierCurve.prototype.getPoint=function(t,optionalTarget){var point=optionalTarget||new Vector2,v0=this.v0,v1=this.v1,v2=this.v2,v3=this.v3;point.set(CubicBezier(t,v0.x,v1.x,v2.x,v3.x),CubicBezier(t,v0.y,v1.y,v2.y,v3.y));return point};CubicBezierCurve.prototype.copy=function(source){Curve.prototype.copy.call(this,source);this.v0.copy(source.v0);this.v1.copy(source.v1);this.v2.copy(source.v2);this.v3.copy(source.v3);return this};CubicBezierCurve.prototype.toJSON=function(){var data=Curve.prototype.toJSON.call(this);data.v0=this.v0.toArray();data.v1=this.v1.toArray();data.v2=this.v2.toArray();data.v3=this.v3.toArray();return data};CubicBezierCurve.prototype.fromJSON=function(json){Curve.prototype.fromJSON.call(this,json);this.v0.fromArray(json.v0);this.v1.fromArray(json.v1);this.v2.fromArray(json.v2);this.v3.fromArray(json.v3);return this};var CubicBezierCurve$1={CubicBezierCurve:CubicBezierCurve};_exports.$CubicBezierCurve=CubicBezierCurve$1;function CubicBezierCurve3(v0,v1,v2,v3){Curve.call(this);this.type="CubicBezierCurve3";this.v0=v0||new Vector3;this.v1=v1||new Vector3;this.v2=v2||new Vector3;this.v3=v3||new Vector3}CubicBezierCurve3.prototype=Object.create(Curve.prototype);CubicBezierCurve3.prototype.constructor=CubicBezierCurve3;CubicBezierCurve3.prototype.isCubicBezierCurve3=!0;CubicBezierCurve3.prototype.getPoint=function(t,optionalTarget){var point=optionalTarget||new Vector3,v0=this.v0,v1=this.v1,v2=this.v2,v3=this.v3;point.set(CubicBezier(t,v0.x,v1.x,v2.x,v3.x),CubicBezier(t,v0.y,v1.y,v2.y,v3.y),CubicBezier(t,v0.z,v1.z,v2.z,v3.z));return point};CubicBezierCurve3.prototype.copy=function(source){Curve.prototype.copy.call(this,source);this.v0.copy(source.v0);this.v1.copy(source.v1);this.v2.copy(source.v2);this.v3.copy(source.v3);return this};CubicBezierCurve3.prototype.toJSON=function(){var data=Curve.prototype.toJSON.call(this);data.v0=this.v0.toArray();data.v1=this.v1.toArray();data.v2=this.v2.toArray();data.v3=this.v3.toArray();return data};CubicBezierCurve3.prototype.fromJSON=function(json){Curve.prototype.fromJSON.call(this,json);this.v0.fromArray(json.v0);this.v1.fromArray(json.v1);this.v2.fromArray(json.v2);this.v3.fromArray(json.v3);return this};var CubicBezierCurve3$1={CubicBezierCurve3:CubicBezierCurve3};_exports.$CubicBezierCurve3=CubicBezierCurve3$1;function LineCurve(v1,v2){Curve.call(this);this.type="LineCurve";this.v1=v1||new Vector2;this.v2=v2||new Vector2}LineCurve.prototype=Object.create(Curve.prototype);LineCurve.prototype.constructor=LineCurve;LineCurve.prototype.isLineCurve=!0;LineCurve.prototype.getPoint=function(t,optionalTarget){var point=optionalTarget||new Vector2;if(1===t){point.copy(this.v2)}else{point.copy(this.v2).sub(this.v1);point.multiplyScalar(t).add(this.v1)}return point};LineCurve.prototype.getPointAt=function(u,optionalTarget){return this.getPoint(u,optionalTarget)};LineCurve.prototype.getTangent=function(){var tangent=this.v2.clone().sub(this.v1);return tangent.normalize()};LineCurve.prototype.copy=function(source){Curve.prototype.copy.call(this,source);this.v1.copy(source.v1);this.v2.copy(source.v2);return this};LineCurve.prototype.toJSON=function(){var data=Curve.prototype.toJSON.call(this);data.v1=this.v1.toArray();data.v2=this.v2.toArray();return data};LineCurve.prototype.fromJSON=function(json){Curve.prototype.fromJSON.call(this,json);this.v1.fromArray(json.v1);this.v2.fromArray(json.v2);return this};var LineCurve$1={LineCurve:LineCurve};_exports.$LineCurve=LineCurve$1;function LineCurve3(v1,v2){Curve.call(this);this.type="LineCurve3";this.v1=v1||new Vector3;this.v2=v2||new Vector3}LineCurve3.prototype=Object.create(Curve.prototype);LineCurve3.prototype.constructor=LineCurve3;LineCurve3.prototype.isLineCurve3=!0;LineCurve3.prototype.getPoint=function(t,optionalTarget){var point=optionalTarget||new Vector3;if(1===t){point.copy(this.v2)}else{point.copy(this.v2).sub(this.v1);point.multiplyScalar(t).add(this.v1)}return point};LineCurve3.prototype.getPointAt=function(u,optionalTarget){return this.getPoint(u,optionalTarget)};LineCurve3.prototype.copy=function(source){Curve.prototype.copy.call(this,source);this.v1.copy(source.v1);this.v2.copy(source.v2);return this};LineCurve3.prototype.toJSON=function(){var data=Curve.prototype.toJSON.call(this);data.v1=this.v1.toArray();data.v2=this.v2.toArray();return data};LineCurve3.prototype.fromJSON=function(json){Curve.prototype.fromJSON.call(this,json);this.v1.fromArray(json.v1);this.v2.fromArray(json.v2);return this};var LineCurve3$1={LineCurve3:LineCurve3};_exports.$LineCurve3=LineCurve3$1;function QuadraticBezierCurve(v0,v1,v2){Curve.call(this);this.type="QuadraticBezierCurve";this.v0=v0||new Vector2;this.v1=v1||new Vector2;this.v2=v2||new Vector2}QuadraticBezierCurve.prototype=Object.create(Curve.prototype);QuadraticBezierCurve.prototype.constructor=QuadraticBezierCurve;QuadraticBezierCurve.prototype.isQuadraticBezierCurve=!0;QuadraticBezierCurve.prototype.getPoint=function(t,optionalTarget){var point=optionalTarget||new Vector2,v0=this.v0,v1=this.v1,v2=this.v2;point.set(QuadraticBezier(t,v0.x,v1.x,v2.x),QuadraticBezier(t,v0.y,v1.y,v2.y));return point};QuadraticBezierCurve.prototype.copy=function(source){Curve.prototype.copy.call(this,source);this.v0.copy(source.v0);this.v1.copy(source.v1);this.v2.copy(source.v2);return this};QuadraticBezierCurve.prototype.toJSON=function(){var data=Curve.prototype.toJSON.call(this);data.v0=this.v0.toArray();data.v1=this.v1.toArray();data.v2=this.v2.toArray();return data};QuadraticBezierCurve.prototype.fromJSON=function(json){Curve.prototype.fromJSON.call(this,json);this.v0.fromArray(json.v0);this.v1.fromArray(json.v1);this.v2.fromArray(json.v2);return this};var QuadraticBezierCurve$1={QuadraticBezierCurve:QuadraticBezierCurve};_exports.$QuadraticBezierCurve=QuadraticBezierCurve$1;function QuadraticBezierCurve3(v0,v1,v2){Curve.call(this);this.type="QuadraticBezierCurve3";this.v0=v0||new Vector3;this.v1=v1||new Vector3;this.v2=v2||new Vector3}QuadraticBezierCurve3.prototype=Object.create(Curve.prototype);QuadraticBezierCurve3.prototype.constructor=QuadraticBezierCurve3;QuadraticBezierCurve3.prototype.isQuadraticBezierCurve3=!0;QuadraticBezierCurve3.prototype.getPoint=function(t,optionalTarget){var point=optionalTarget||new Vector3,v0=this.v0,v1=this.v1,v2=this.v2;point.set(QuadraticBezier(t,v0.x,v1.x,v2.x),QuadraticBezier(t,v0.y,v1.y,v2.y),QuadraticBezier(t,v0.z,v1.z,v2.z));return point};QuadraticBezierCurve3.prototype.copy=function(source){Curve.prototype.copy.call(this,source);this.v0.copy(source.v0);this.v1.copy(source.v1);this.v2.copy(source.v2);return this};QuadraticBezierCurve3.prototype.toJSON=function(){var data=Curve.prototype.toJSON.call(this);data.v0=this.v0.toArray();data.v1=this.v1.toArray();data.v2=this.v2.toArray();return data};QuadraticBezierCurve3.prototype.fromJSON=function(json){Curve.prototype.fromJSON.call(this,json);this.v0.fromArray(json.v0);this.v1.fromArray(json.v1);this.v2.fromArray(json.v2);return this};var QuadraticBezierCurve3$1={QuadraticBezierCurve3:QuadraticBezierCurve3};_exports.$QuadraticBezierCurve3=QuadraticBezierCurve3$1;function SplineCurve(points){Curve.call(this);this.type="SplineCurve";this.points=points||[]}SplineCurve.prototype=Object.create(Curve.prototype);SplineCurve.prototype.constructor=SplineCurve;SplineCurve.prototype.isSplineCurve=!0;SplineCurve.prototype.getPoint=function(t,optionalTarget){var point=optionalTarget||new Vector2,points=this.points,p=(points.length-1)*t,intPoint=_Mathfloor(p),weight=p-intPoint,p0=points[0===intPoint?intPoint:intPoint-1],p1=points[intPoint],p2=points[intPoint>points.length-2?points.length-1:intPoint+1],p3=points[intPoint>points.length-3?points.length-1:intPoint+2];point.set(CatmullRom(weight,p0.x,p1.x,p2.x,p3.x),CatmullRom(weight,p0.y,p1.y,p2.y,p3.y));return point};SplineCurve.prototype.copy=function(source){Curve.prototype.copy.call(this,source);this.points=[];for(var i=0,l=source.points.length,point;i<l;i++){point=source.points[i];this.points.push(point.clone())}return this};SplineCurve.prototype.toJSON=function(){var data=Curve.prototype.toJSON.call(this);data.points=[];for(var i=0,l=this.points.length,point;i<l;i++){point=this.points[i];data.points.push(point.toArray())}return data};SplineCurve.prototype.fromJSON=function(json){Curve.prototype.fromJSON.call(this,json);this.points=[];for(var i=0,l=json.points.length,point;i<l;i++){point=json.points[i];this.points.push(new Vector2().fromArray(point))}return this};var SplineCurve$1={SplineCurve:SplineCurve};_exports.$SplineCurve=SplineCurve$1;var Curves={ArcCurve:ArcCurve,CatmullRomCurve3:CatmullRomCurve3,CubicBezierCurve:CubicBezierCurve,CubicBezierCurve3:CubicBezierCurve3,EllipseCurve:EllipseCurve,LineCurve:LineCurve,LineCurve3:LineCurve3,QuadraticBezierCurve:QuadraticBezierCurve,QuadraticBezierCurve3:QuadraticBezierCurve3,SplineCurve:SplineCurve};_exports.$Curves=Curves;function CurvePath(){Curve.call(this);this.type="CurvePath";this.curves=[];this.autoClose=!1}CurvePath.prototype=Object.assign(Object.create(Curve.prototype),{constructor:CurvePath,add:function(curve){this.curves.push(curve)},closePath:function(){var startPoint=this.curves[0].getPoint(0),endPoint=this.curves[this.curves.length-1].getPoint(1);if(!startPoint.equals(endPoint)){this.curves.push(new LineCurve(endPoint,startPoint))}},getPoint:function(t){var d=t*this.getLength(),curveLengths=this.getCurveLengths(),i=0;while(i<curveLengths.length){if(curveLengths[i]>=d){var diff=curveLengths[i]-d,curve=this.curves[i],segmentLength=curve.getLength(),u=0===segmentLength?0:1-diff/segmentLength;return curve.getPointAt(u)}i++}return null},getLength:function(){var lens=this.getCurveLengths();return lens[lens.length-1]},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length){return this.cacheLengths}for(var lengths=[],sums=0,i=0,l=this.curves.length;i<l;i++){sums+=this.curves[i].getLength();lengths.push(sums)}this.cacheLengths=lengths;return lengths},getSpacedPoints:function(divisions){if(divisions===void 0)divisions=40;for(var points=[],i=0;i<=divisions;i++){points.push(this.getPoint(i/divisions))}if(this.autoClose){points.push(points[0])}return points},getPoints:function(divisions){divisions=divisions||12;for(var points=[],last,i=0,curves=this.curves;i<curves.length;i++){for(var curve=curves[i],resolution=curve&&curve.isEllipseCurve?2*divisions:curve&&(curve.isLineCurve||curve.isLineCurve3)?1:curve&&curve.isSplineCurve?divisions*curve.points.length:divisions,pts=curve.getPoints(resolution),j=0,point;j<pts.length;j++){point=pts[j];if(last&&last.equals(point))continue;points.push(point);last=point}}if(this.autoClose&&1<points.length&&!points[points.length-1].equals(points[0])){points.push(points[0])}return points},copy:function(source){Curve.prototype.copy.call(this,source);this.curves=[];for(var i=0,l=source.curves.length,curve;i<l;i++){curve=source.curves[i];this.curves.push(curve.clone())}this.autoClose=source.autoClose;return this},toJSON:function(){var data=Curve.prototype.toJSON.call(this);data.autoClose=this.autoClose;data.curves=[];for(var i=0,l=this.curves.length,curve;i<l;i++){curve=this.curves[i];data.curves.push(curve.toJSON())}return data},fromJSON:function(json){Curve.prototype.fromJSON.call(this,json);this.autoClose=json.autoClose;this.curves=[];for(var i=0,l=json.curves.length,curve;i<l;i++){curve=json.curves[i];this.curves.push(new Curves[curve.type]().fromJSON(curve))}return this}});var CurvePath$1={CurvePath:CurvePath};_exports.$CurvePath=CurvePath$1;function Path(points){CurvePath.call(this);this.type="Path";this.currentPoint=new Vector2;if(points){this.setFromPoints(points)}}Path.prototype=Object.assign(Object.create(CurvePath.prototype),{constructor:Path,setFromPoints:function(points){this.moveTo(points[0].x,points[0].y);for(var i=1,l=points.length;i<l;i++){this.lineTo(points[i].x,points[i].y)}},moveTo:function(x,y){this.currentPoint.set(x,y)},lineTo:function(x,y){var curve=new LineCurve(this.currentPoint.clone(),new Vector2(x,y));this.curves.push(curve);this.currentPoint.set(x,y)},quadraticCurveTo:function(aCPx,aCPy,aX,aY){var curve=new QuadraticBezierCurve(this.currentPoint.clone(),new Vector2(aCPx,aCPy),new Vector2(aX,aY));this.curves.push(curve);this.currentPoint.set(aX,aY)},bezierCurveTo:function(aCP1x,aCP1y,aCP2x,aCP2y,aX,aY){var curve=new CubicBezierCurve(this.currentPoint.clone(),new Vector2(aCP1x,aCP1y),new Vector2(aCP2x,aCP2y),new Vector2(aX,aY));this.curves.push(curve);this.currentPoint.set(aX,aY)},splineThru:function(pts){var npts=[this.currentPoint.clone()].concat(pts),curve=new SplineCurve(npts);this.curves.push(curve);this.currentPoint.copy(pts[pts.length-1])},arc:function(aX,aY,aRadius,aStartAngle,aEndAngle,aClockwise){var x0=this.currentPoint.x,y0=this.currentPoint.y;this.absarc(aX+x0,aY+y0,aRadius,aStartAngle,aEndAngle,aClockwise)},absarc:function(aX,aY,aRadius,aStartAngle,aEndAngle,aClockwise){this.absellipse(aX,aY,aRadius,aRadius,aStartAngle,aEndAngle,aClockwise)},ellipse:function(aX,aY,xRadius,yRadius,aStartAngle,aEndAngle,aClockwise,aRotation){var x0=this.currentPoint.x,y0=this.currentPoint.y;this.absellipse(aX+x0,aY+y0,xRadius,yRadius,aStartAngle,aEndAngle,aClockwise,aRotation)},absellipse:function(aX,aY,xRadius,yRadius,aStartAngle,aEndAngle,aClockwise,aRotation){var curve=new EllipseCurve(aX,aY,xRadius,yRadius,aStartAngle,aEndAngle,aClockwise,aRotation);if(0<this.curves.length){var firstPoint=curve.getPoint(0);if(!firstPoint.equals(this.currentPoint)){this.lineTo(firstPoint.x,firstPoint.y)}}this.curves.push(curve);var lastPoint=curve.getPoint(1);this.currentPoint.copy(lastPoint)},copy:function(source){CurvePath.prototype.copy.call(this,source);this.currentPoint.copy(source.currentPoint);return this},toJSON:function(){var data=CurvePath.prototype.toJSON.call(this);data.currentPoint=this.currentPoint.toArray();return data},fromJSON:function(json){CurvePath.prototype.fromJSON.call(this,json);this.currentPoint.fromArray(json.currentPoint);return this}});var Path$1={Path:Path};_exports.$Path=Path$1;function Shape(points){Path.call(this,points);this.uuid=_Math.generateUUID();this.type="Shape";this.holes=[]}Shape.prototype=Object.assign(Object.create(Path.prototype),{constructor:Shape,getPointsHoles:function(divisions){for(var holesPts=[],i=0,l=this.holes.length;i<l;i++){holesPts[i]=this.holes[i].getPoints(divisions)}return holesPts},extractPoints:function(divisions){return{shape:this.getPoints(divisions),holes:this.getPointsHoles(divisions)}},copy:function(source){Path.prototype.copy.call(this,source);this.holes=[];for(var i=0,l=source.holes.length,hole;i<l;i++){hole=source.holes[i];this.holes.push(hole.clone())}return this},toJSON:function(){var data=Path.prototype.toJSON.call(this);data.uuid=this.uuid;data.holes=[];for(var i=0,l=this.holes.length,hole;i<l;i++){hole=this.holes[i];data.holes.push(hole.toJSON())}return data},fromJSON:function(json){Path.prototype.fromJSON.call(this,json);this.uuid=json.uuid;this.holes=[];for(var i=0,l=json.holes.length,hole;i<l;i++){hole=json.holes[i];this.holes.push(new Path().fromJSON(hole))}return this}});var Shape$1={Shape:Shape};_exports.$Shape=Shape$1;function BoxGeometry(width,height,depth,widthSegments,heightSegments,depthSegments){Geometry.call(this);this.type="BoxGeometry";this.parameters={width:width,height:height,depth:depth,widthSegments:widthSegments,heightSegments:heightSegments,depthSegments:depthSegments};this.fromBufferGeometry(new BoxBufferGeometry(width,height,depth,widthSegments,heightSegments,depthSegments));this.mergeVertices()}BoxGeometry.prototype=Object.create(Geometry.prototype);BoxGeometry.prototype.constructor=BoxGeometry;function BoxBufferGeometry(width,height,depth,widthSegments,heightSegments,depthSegments){BufferGeometry.call(this);this.type="BoxBufferGeometry";this.parameters={width:width,height:height,depth:depth,widthSegments:widthSegments,heightSegments:heightSegments,depthSegments:depthSegments};var scope=this;width=width||1;height=height||1;depth=depth||1;widthSegments=_Mathfloor(widthSegments)||1;heightSegments=_Mathfloor(heightSegments)||1;depthSegments=_Mathfloor(depthSegments)||1;var indices=[],vertices=[],normals=[],uvs=[],numberOfVertices=0,groupStart=0;buildPlane("z","y","x",-1,-1,depth,height,width,depthSegments,heightSegments,0);buildPlane("z","y","x",1,-1,depth,height,-width,depthSegments,heightSegments,1);buildPlane("x","z","y",1,1,width,depth,height,widthSegments,depthSegments,2);buildPlane("x","z","y",1,-1,width,depth,-height,widthSegments,depthSegments,3);buildPlane("x","y","z",1,-1,width,height,depth,widthSegments,heightSegments,4);buildPlane("x","y","z",-1,-1,width,height,-depth,widthSegments,heightSegments,5);this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("normal",new Float32BufferAttribute(normals,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2));function buildPlane(u,v,w,udir,vdir,width,height,depth,gridX,gridY,materialIndex){var segmentWidth=width/gridX,segmentHeight=height/gridY,widthHalf=width/2,heightHalf=height/2,depthHalf=depth/2,gridX1=gridX+1,gridY1=gridY+1,vertexCounter=0,groupCount=0,ix,iy,vector=new Vector3;for(iy=0;iy<gridY1;iy++){var y=iy*segmentHeight-heightHalf;for(ix=0;ix<gridX1;ix++){var x=ix*segmentWidth-widthHalf;vector[u]=x*udir;vector[v]=y*vdir;vector[w]=depthHalf;vertices.push(vector.x,vector.y,vector.z);vector[u]=0;vector[v]=0;vector[w]=0<depth?1:-1;normals.push(vector.x,vector.y,vector.z);uvs.push(ix/gridX);uvs.push(1-iy/gridY);vertexCounter+=1}}for(iy=0;iy<gridY;iy++){for(ix=0;ix<gridX;ix++){var a=numberOfVertices+ix+gridX1*iy,b=numberOfVertices+ix+gridX1*(iy+1),c=numberOfVertices+(ix+1)+gridX1*(iy+1),d=numberOfVertices+(ix+1)+gridX1*iy;indices.push(a,b,d);indices.push(b,c,d);groupCount+=6}}scope.addGroup(groupStart,groupCount,materialIndex);groupStart+=groupCount;numberOfVertices+=vertexCounter}}BoxBufferGeometry.prototype=Object.create(BufferGeometry.prototype);BoxBufferGeometry.prototype.constructor=BoxBufferGeometry;var BoxGeometry$1={BoxGeometry:BoxGeometry,BoxBufferGeometry:BoxBufferGeometry};_exports.$BoxGeometry=BoxGeometry$1;function CircleGeometry(radius,segments,thetaStart,thetaLength){Geometry.call(this);this.type="CircleGeometry";this.parameters={radius:radius,segments:segments,thetaStart:thetaStart,thetaLength:thetaLength};this.fromBufferGeometry(new CircleBufferGeometry(radius,segments,thetaStart,thetaLength));this.mergeVertices()}CircleGeometry.prototype=Object.create(Geometry.prototype);CircleGeometry.prototype.constructor=CircleGeometry;function CircleBufferGeometry(radius,segments,thetaStart,thetaLength){BufferGeometry.call(this);this.type="CircleBufferGeometry";this.parameters={radius:radius,segments:segments,thetaStart:thetaStart,thetaLength:thetaLength};radius=radius||1;segments=segments!==void 0?_Mathmax(3,segments):8;thetaStart=thetaStart!==void 0?thetaStart:0;thetaLength=thetaLength!==void 0?thetaLength:2*_MathPI;var indices=[],vertices=[],normals=[],uvs=[],i,s,vertex=new Vector3,uv=new Vector2;vertices.push(0,0,0);normals.push(0,0,1);uvs.push(.5,.5);for(s=0,i=3;s<=segments;s++,i+=3){var segment=thetaStart+s/segments*thetaLength;vertex.x=radius*_Mathcos(segment);vertex.y=radius*_Mathsin(segment);vertices.push(vertex.x,vertex.y,vertex.z);normals.push(0,0,1);uv.x=(vertices[i]/radius+1)/2;uv.y=(vertices[i+1]/radius+1)/2;uvs.push(uv.x,uv.y)}for(i=1;i<=segments;i++){indices.push(i,i+1,0)}this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("normal",new Float32BufferAttribute(normals,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2))}CircleBufferGeometry.prototype=Object.create(BufferGeometry.prototype);CircleBufferGeometry.prototype.constructor=CircleBufferGeometry;var CircleGeometry$1={CircleGeometry:CircleGeometry,CircleBufferGeometry:CircleBufferGeometry};_exports.$CircleGeometry=CircleGeometry$1;function CylinderGeometry(radiusTop,radiusBottom,height,radialSegments,heightSegments,openEnded,thetaStart,thetaLength){Geometry.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:radiusTop,radiusBottom:radiusBottom,height:height,radialSegments:radialSegments,heightSegments:heightSegments,openEnded:openEnded,thetaStart:thetaStart,thetaLength:thetaLength};this.fromBufferGeometry(new CylinderBufferGeometry(radiusTop,radiusBottom,height,radialSegments,heightSegments,openEnded,thetaStart,thetaLength));this.mergeVertices()}CylinderGeometry.prototype=Object.create(Geometry.prototype);CylinderGeometry.prototype.constructor=CylinderGeometry;function CylinderBufferGeometry(radiusTop,radiusBottom,height,radialSegments,heightSegments,openEnded,thetaStart,thetaLength){BufferGeometry.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:radiusTop,radiusBottom:radiusBottom,height:height,radialSegments:radialSegments,heightSegments:heightSegments,openEnded:openEnded,thetaStart:thetaStart,thetaLength:thetaLength};var scope=this;radiusTop=radiusTop!==void 0?radiusTop:1;radiusBottom=radiusBottom!==void 0?radiusBottom:1;height=height||1;radialSegments=_Mathfloor(radialSegments)||8;heightSegments=_Mathfloor(heightSegments)||1;openEnded=openEnded!==void 0?openEnded:!1;thetaStart=thetaStart!==void 0?thetaStart:0;thetaLength=thetaLength!==void 0?thetaLength:2*_MathPI;var indices=[],vertices=[],normals=[],uvs=[],index=0,indexArray=[],halfHeight=height/2,groupStart=0;generateTorso();if(!1===openEnded){if(0<radiusTop)generateCap(!0);if(0<radiusBottom)generateCap(!1)}this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("normal",new Float32BufferAttribute(normals,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2));function generateTorso(){var x,y,normal=new Vector3,vertex=new Vector3,groupCount=0,slope=(radiusBottom-radiusTop)/height;for(y=0;y<=heightSegments;y++){var indexRow=[],v=y/heightSegments,radius=v*(radiusBottom-radiusTop)+radiusTop;for(x=0;x<=radialSegments;x++){var u=x/radialSegments,theta=u*thetaLength+thetaStart,sinTheta=_Mathsin(theta),cosTheta=_Mathcos(theta);vertex.x=radius*sinTheta;vertex.y=-v*height+halfHeight;vertex.z=radius*cosTheta;vertices.push(vertex.x,vertex.y,vertex.z);normal.set(sinTheta,slope,cosTheta).normalize();normals.push(normal.x,normal.y,normal.z);uvs.push(u,1-v);indexRow.push(index++)}indexArray.push(indexRow)}for(x=0;x<radialSegments;x++){for(y=0;y<heightSegments;y++){var a=indexArray[y][x],b=indexArray[y+1][x],c=indexArray[y+1][x+1],d=indexArray[y][x+1];indices.push(a,b,d);indices.push(b,c,d);groupCount+=6}}scope.addGroup(groupStart,groupCount,0);groupStart+=groupCount}function generateCap(top){var x,centerIndexStart,centerIndexEnd,uv=new Vector2,vertex=new Vector3,groupCount=0,radius=!0===top?radiusTop:radiusBottom,sign=!0===top?1:-1;centerIndexStart=index;for(x=1;x<=radialSegments;x++){vertices.push(0,halfHeight*sign,0);normals.push(0,sign,0);uvs.push(.5,.5);index++}centerIndexEnd=index;for(x=0;x<=radialSegments;x++){var u=x/radialSegments,theta=u*thetaLength+thetaStart,cosTheta=_Mathcos(theta),sinTheta=_Mathsin(theta);vertex.x=radius*sinTheta;vertex.y=halfHeight*sign;vertex.z=radius*cosTheta;vertices.push(vertex.x,vertex.y,vertex.z);normals.push(0,sign,0);uv.x=.5*cosTheta+.5;uv.y=.5*sinTheta*sign+.5;uvs.push(uv.x,uv.y);index++}for(x=0;x<radialSegments;x++){var c=centerIndexStart+x,i=centerIndexEnd+x;if(!0===top){indices.push(i,i+1,c)}else{indices.push(i+1,i,c)}groupCount+=3}scope.addGroup(groupStart,groupCount,!0===top?1:2);groupStart+=groupCount}}CylinderBufferGeometry.prototype=Object.create(BufferGeometry.prototype);CylinderBufferGeometry.prototype.constructor=CylinderBufferGeometry;var CylinderGeometry$1={CylinderGeometry:CylinderGeometry,CylinderBufferGeometry:CylinderBufferGeometry};_exports.$CylinderGeometry=CylinderGeometry$1;function ConeGeometry(radius,height,radialSegments,heightSegments,openEnded,thetaStart,thetaLength){CylinderGeometry.call(this,0,radius,height,radialSegments,heightSegments,openEnded,thetaStart,thetaLength);this.type="ConeGeometry";this.parameters={radius:radius,height:height,radialSegments:radialSegments,heightSegments:heightSegments,openEnded:openEnded,thetaStart:thetaStart,thetaLength:thetaLength}}ConeGeometry.prototype=Object.create(CylinderGeometry.prototype);ConeGeometry.prototype.constructor=ConeGeometry;function ConeBufferGeometry(radius,height,radialSegments,heightSegments,openEnded,thetaStart,thetaLength){CylinderBufferGeometry.call(this,0,radius,height,radialSegments,heightSegments,openEnded,thetaStart,thetaLength);this.type="ConeBufferGeometry";this.parameters={radius:radius,height:height,radialSegments:radialSegments,heightSegments:heightSegments,openEnded:openEnded,thetaStart:thetaStart,thetaLength:thetaLength}}ConeBufferGeometry.prototype=Object.create(CylinderBufferGeometry.prototype);ConeBufferGeometry.prototype.constructor=ConeBufferGeometry;var ConeGeometry$1={ConeGeometry:ConeGeometry,ConeBufferGeometry:ConeBufferGeometry};_exports.$ConeGeometry=ConeGeometry$1;function PolyhedronGeometry(vertices,indices,radius,detail){Geometry.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:vertices,indices:indices,radius:radius,detail:detail};this.fromBufferGeometry(new PolyhedronBufferGeometry(vertices,indices,radius,detail));this.mergeVertices()}PolyhedronGeometry.prototype=Object.create(Geometry.prototype);PolyhedronGeometry.prototype.constructor=PolyhedronGeometry;function PolyhedronBufferGeometry(vertices,indices,radius,detail){BufferGeometry.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:vertices,indices:indices,radius:radius,detail:detail};radius=radius||1;detail=detail||0;var vertexBuffer=[],uvBuffer=[];subdivide(detail);appplyRadius(radius);generateUVs();this.addAttribute("position",new Float32BufferAttribute(vertexBuffer,3));this.addAttribute("normal",new Float32BufferAttribute(vertexBuffer.slice(),3));this.addAttribute("uv",new Float32BufferAttribute(uvBuffer,2));if(0===detail){this.computeVertexNormals()}else{this.normalizeNormals()}function subdivide(detail){for(var a=new Vector3,b=new Vector3,c=new Vector3,i=0;i<indices.length;i+=3){getVertexByIndex(indices[i+0],a);getVertexByIndex(indices[i+1],b);getVertexByIndex(indices[i+2],c);subdivideFace(a,b,c,detail)}}function subdivideFace(a,b,c,detail){var cols=_Mathpow(2,detail),v=[],i,j;for(i=0;i<=cols;i++){v[i]=[];var aj=a.clone().lerp(c,i/cols),bj=b.clone().lerp(c,i/cols),rows=cols-i;for(j=0;j<=rows;j++){if(0===j&&i===cols){v[i][j]=aj}else{v[i][j]=aj.clone().lerp(bj,j/rows)}}}for(i=0;i<cols;i++){for(j=0;j<2*(cols-i)-1;j++){var k=_Mathfloor(j/2);if(0===j%2){pushVertex(v[i][k+1]);pushVertex(v[i+1][k]);pushVertex(v[i][k])}else{pushVertex(v[i][k+1]);pushVertex(v[i+1][k+1]);pushVertex(v[i+1][k])}}}}function appplyRadius(radius){for(var vertex=new Vector3,i=0;i<vertexBuffer.length;i+=3){vertex.x=vertexBuffer[i+0];vertex.y=vertexBuffer[i+1];vertex.z=vertexBuffer[i+2];vertex.normalize().multiplyScalar(radius);vertexBuffer[i+0]=vertex.x;vertexBuffer[i+1]=vertex.y;vertexBuffer[i+2]=vertex.z}}function generateUVs(){for(var vertex=new Vector3,i=0;i<vertexBuffer.length;i+=3){vertex.x=vertexBuffer[i+0];vertex.y=vertexBuffer[i+1];vertex.z=vertexBuffer[i+2];var u=azimuth(vertex)/2/_MathPI+.5,v=inclination(vertex)/_MathPI+.5;uvBuffer.push(u,1-v)}correctUVs();correctSeam()}function correctSeam(){for(var i=0;i<uvBuffer.length;i+=6){var x0=uvBuffer[i+0],x1=uvBuffer[i+2],x2=uvBuffer[i+4],max=_Mathmax(x0,x1,x2),min=_Mathmin(x0,x1,x2);if(.9<max&&.1>min){if(.2>x0)uvBuffer[i+0]+=1;if(.2>x1)uvBuffer[i+2]+=1;if(.2>x2)uvBuffer[i+4]+=1}}}function pushVertex(vertex){vertexBuffer.push(vertex.x,vertex.y,vertex.z)}function getVertexByIndex(index,vertex){var stride=3*index;vertex.x=vertices[stride+0];vertex.y=vertices[stride+1];vertex.z=vertices[stride+2]}function correctUVs(){for(var a=new Vector3,b=new Vector3,c=new Vector3,centroid=new Vector3,uvA=new Vector2,uvB=new Vector2,uvC=new Vector2,i=0,j=0;i<vertexBuffer.length;i+=9,j+=6){a.set(vertexBuffer[i+0],vertexBuffer[i+1],vertexBuffer[i+2]);b.set(vertexBuffer[i+3],vertexBuffer[i+4],vertexBuffer[i+5]);c.set(vertexBuffer[i+6],vertexBuffer[i+7],vertexBuffer[i+8]);uvA.set(uvBuffer[j+0],uvBuffer[j+1]);uvB.set(uvBuffer[j+2],uvBuffer[j+3]);uvC.set(uvBuffer[j+4],uvBuffer[j+5]);centroid.copy(a).add(b).add(c).divideScalar(3);var azi=azimuth(centroid);correctUV(uvA,j+0,a,azi);correctUV(uvB,j+2,b,azi);correctUV(uvC,j+4,c,azi)}}function correctUV(uv,stride,vector,azimuth){if(0>azimuth&&1===uv.x){uvBuffer[stride]=uv.x-1}if(0===vector.x&&0===vector.z){uvBuffer[stride]=azimuth/2/_MathPI+.5}}function azimuth(vector){return _Mathatan(vector.z,-vector.x)}function inclination(vector){return _Mathatan(-vector.y,_Mathsqrt(vector.x*vector.x+vector.z*vector.z))}}PolyhedronBufferGeometry.prototype=Object.create(BufferGeometry.prototype);PolyhedronBufferGeometry.prototype.constructor=PolyhedronBufferGeometry;var PolyhedronGeometry$1={PolyhedronGeometry:PolyhedronGeometry,PolyhedronBufferGeometry:PolyhedronBufferGeometry};_exports.$PolyhedronGeometry=PolyhedronGeometry$1;function DodecahedronGeometry(radius,detail){Geometry.call(this);this.type="DodecahedronGeometry";this.parameters={radius:radius,detail:detail};this.fromBufferGeometry(new DodecahedronBufferGeometry(radius,detail));this.mergeVertices()}DodecahedronGeometry.prototype=Object.create(Geometry.prototype);DodecahedronGeometry.prototype.constructor=DodecahedronGeometry;function DodecahedronBufferGeometry(radius,detail){var t=(1+2.23606797749979)/2,r=1/t,vertices=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-t,0,-r,t,0,r,-t,0,r,t,-r,-t,0,-r,t,0,r,-t,0,r,t,0,-t,0,-r,t,0,-r,-t,0,r,t,0,r],indices=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];PolyhedronBufferGeometry.call(this,vertices,indices,radius,detail);this.type="DodecahedronBufferGeometry";this.parameters={radius:radius,detail:detail}}DodecahedronBufferGeometry.prototype=Object.create(PolyhedronBufferGeometry.prototype);DodecahedronBufferGeometry.prototype.constructor=DodecahedronBufferGeometry;var DodecahedronGeometry$1={DodecahedronGeometry:DodecahedronGeometry,DodecahedronBufferGeometry:DodecahedronBufferGeometry};_exports.$DodecahedronGeometry=DodecahedronGeometry$1;function EdgesGeometry(geometry,thresholdAngle){BufferGeometry.call(this);this.type="EdgesGeometry";this.parameters={thresholdAngle:thresholdAngle};thresholdAngle=thresholdAngle!==void 0?thresholdAngle:1;var vertices=[],thresholdDot=_Mathcos(_Math.DEG2RAD*thresholdAngle),edge=[0,0],edges={},edge1,edge2,key,keys=["a","b","c"],geometry2;if(geometry.isBufferGeometry){geometry2=new Geometry;geometry2.fromBufferGeometry(geometry)}else{geometry2=geometry.clone()}geometry2.mergeVertices();geometry2.computeFaceNormals();for(var sourceVertices=geometry2.vertices,faces=geometry2.faces,i=0,l=faces.length,face;i<l;i++){face=faces[i];for(var j=0;3>j;j++){edge1=face[keys[j]];edge2=face[keys[(j+1)%3]];edge[0]=_Mathmin(edge1,edge2);edge[1]=_Mathmax(edge1,edge2);key=edge[0]+","+edge[1];if(edges[key]===void 0){edges[key]={index1:edge[0],index2:edge[1],face1:i,face2:void 0}}else{edges[key].face2=i}}}for(key in edges){var e=edges[key];if(e.face2===void 0||faces[e.face1].normal.dot(faces[e.face2].normal)<=thresholdDot){var vertex=sourceVertices[e.index1];vertices.push(vertex.x,vertex.y,vertex.z);vertex=sourceVertices[e.index2];vertices.push(vertex.x,vertex.y,vertex.z)}}this.addAttribute("position",new Float32BufferAttribute(vertices,3))}EdgesGeometry.prototype=Object.create(BufferGeometry.prototype);EdgesGeometry.prototype.constructor=EdgesGeometry;var EdgesGeometry$1={EdgesGeometry:EdgesGeometry};_exports.$EdgesGeometry=EdgesGeometry$1;function ExtrudeGeometry(shapes,options){Geometry.call(this);this.type="ExtrudeGeometry";this.parameters={shapes:shapes,options:options};this.fromBufferGeometry(new ExtrudeBufferGeometry(shapes,options));this.mergeVertices()}ExtrudeGeometry.prototype=Object.create(Geometry.prototype);ExtrudeGeometry.prototype.constructor=ExtrudeGeometry;ExtrudeGeometry.prototype.toJSON=function(){var data=Geometry.prototype.toJSON.call(this),shapes=this.parameters.shapes,options=this.parameters.options;return toJSON(shapes,options,data)};function ExtrudeBufferGeometry(shapes,options){BufferGeometry.call(this);this.type="ExtrudeBufferGeometry";this.parameters={shapes:shapes,options:options};shapes=Array.isArray(shapes)?shapes:[shapes];for(var scope=this,verticesArray=[],uvArray=[],i=0,l=shapes.length,shape;i<l;i++){shape=shapes[i];addShape(shape)}this.addAttribute("position",new Float32BufferAttribute(verticesArray,3));this.addAttribute("uv",new Float32BufferAttribute(uvArray,2));this.computeVertexNormals();function addShape(shape){var placeholder=[],curveSegments=options.curveSegments!==void 0?options.curveSegments:12,steps=options.steps!==void 0?options.steps:1,depth=options.depth!==void 0?options.depth:100,bevelEnabled=options.bevelEnabled!==void 0?options.bevelEnabled:!0,bevelThickness=options.bevelThickness!==void 0?options.bevelThickness:6,bevelSize=options.bevelSize!==void 0?options.bevelSize:bevelThickness-2,bevelSegments=options.bevelSegments!==void 0?options.bevelSegments:3,extrudePath=options.extrudePath,uvgen=options.UVGenerator!==void 0?options.UVGenerator:WorldUVGenerator;if(options.amount!==void 0){console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth.");depth=options.amount}var extrudePts,extrudeByPath=!1,splineTube,binormal,normal,position2;if(extrudePath){extrudePts=extrudePath.getSpacedPoints(steps);extrudeByPath=!0;bevelEnabled=!1;splineTube=extrudePath.computeFrenetFrames(steps,!1);binormal=new Vector3;normal=new Vector3;position2=new Vector3}if(!bevelEnabled){bevelSegments=0;bevelThickness=0;bevelSize=0}var ahole,h,hl,shapePoints=shape.extractPoints(curveSegments),vertices=shapePoints.shape,holes=shapePoints.holes,reverse=!ShapeUtils.isClockWise(vertices);if(reverse){vertices=vertices.reverse();for(h=0,hl=holes.length;h<hl;h++){ahole=holes[h];if(ShapeUtils.isClockWise(ahole)){holes[h]=ahole.reverse()}}}var faces=ShapeUtils.triangulateShape(vertices,holes),contour=vertices;for(h=0,hl=holes.length;h<hl;h++){ahole=holes[h];vertices=vertices.concat(ahole)}function scalePt2(pt,vec,size){if(!vec)console.error("THREE.ExtrudeGeometry: vec does not exist");return vec.clone().multiplyScalar(size).add(pt)}var b,bs,t,z,vert,vlen=vertices.length,face,flen=faces.length;function getBevelVec(inPt,inPrev,inNext){var _Mathsign=Math.sign,v_trans_x,v_trans_y,shrink_by,v_prev_x=inPt.x-inPrev.x,v_prev_y=inPt.y-inPrev.y,v_next_x=inNext.x-inPt.x,v_next_y=inNext.y-inPt.y,v_prev_lensq=v_prev_x*v_prev_x+v_prev_y*v_prev_y,collinear0=v_prev_x*v_next_y-v_prev_y*v_next_x;if(_Mathabs(collinear0)>_NumberEPSILON){var v_prev_len=_Mathsqrt(v_prev_lensq),v_next_len=_Mathsqrt(v_next_x*v_next_x+v_next_y*v_next_y),ptPrevShift_x=inPrev.x-v_prev_y/v_prev_len,ptPrevShift_y=inPrev.y+v_prev_x/v_prev_len,ptNextShift_x=inNext.x-v_next_y/v_next_len,ptNextShift_y=inNext.y+v_next_x/v_next_len,sf=((ptNextShift_x-ptPrevShift_x)*v_next_y-(ptNextShift_y-ptPrevShift_y)*v_next_x)/(v_prev_x*v_next_y-v_prev_y*v_next_x);v_trans_x=ptPrevShift_x+v_prev_x*sf-inPt.x;v_trans_y=ptPrevShift_y+v_prev_y*sf-inPt.y;var v_trans_lensq=v_trans_x*v_trans_x+v_trans_y*v_trans_y;if(2>=v_trans_lensq){return new Vector2(v_trans_x,v_trans_y)}else{shrink_by=_Mathsqrt(v_trans_lensq/2)}}else{var direction_eq=!1;if(v_prev_x>_NumberEPSILON){if(v_next_x>_NumberEPSILON){direction_eq=!0}}else{if(v_prev_x<-_NumberEPSILON){if(v_next_x<-_NumberEPSILON){direction_eq=!0}}else{if(_Mathsign(v_prev_y)===_Mathsign(v_next_y)){direction_eq=!0}}}if(direction_eq){v_trans_x=-v_prev_y;v_trans_y=v_prev_x;shrink_by=_Mathsqrt(v_prev_lensq)}else{v_trans_x=v_prev_x;v_trans_y=v_prev_y;shrink_by=_Mathsqrt(v_prev_lensq/2)}}return new Vector2(v_trans_x/shrink_by,v_trans_y/shrink_by)}for(var contourMovements=[],i=0,il=contour.length,j=il-1,k=i+1;i<il;i++,j++,k++){if(j===il)j=0;if(k===il)k=0;contourMovements[i]=getBevelVec(contour[i],contour[j],contour[k])}var holesMovements=[],oneHoleMovements,verticesMovements=contourMovements.concat();for(h=0,hl=holes.length;h<hl;h++){ahole=holes[h];oneHoleMovements=[];for(i=0,il=ahole.length,j=il-1,k=i+1;i<il;i++,j++,k++){if(j===il)j=0;if(k===il)k=0;oneHoleMovements[i]=getBevelVec(ahole[i],ahole[j],ahole[k])}holesMovements.push(oneHoleMovements);verticesMovements=verticesMovements.concat(oneHoleMovements)}for(b=0;b<bevelSegments;b++){t=b/bevelSegments;z=bevelThickness*_Mathcos(t*_MathPI/2);bs=bevelSize*_Mathsin(t*_MathPI/2);for(i=0,il=contour.length;i<il;i++){vert=scalePt2(contour[i],contourMovements[i],bs);v(vert.x,vert.y,-z)}for(h=0,hl=holes.length;h<hl;h++){ahole=holes[h];oneHoleMovements=holesMovements[h];for(i=0,il=ahole.length;i<il;i++){vert=scalePt2(ahole[i],oneHoleMovements[i],bs);v(vert.x,vert.y,-z)}}}bs=bevelSize;for(i=0;i<vlen;i++){vert=bevelEnabled?scalePt2(vertices[i],verticesMovements[i],bs):vertices[i];if(!extrudeByPath){v(vert.x,vert.y,0)}else{normal.copy(splineTube.normals[0]).multiplyScalar(vert.x);binormal.copy(splineTube.binormals[0]).multiplyScalar(vert.y);position2.copy(extrudePts[0]).add(normal).add(binormal);v(position2.x,position2.y,position2.z)}}var s;for(s=1;s<=steps;s++){for(i=0;i<vlen;i++){vert=bevelEnabled?scalePt2(vertices[i],verticesMovements[i],bs):vertices[i];if(!extrudeByPath){v(vert.x,vert.y,depth/steps*s)}else{normal.copy(splineTube.normals[s]).multiplyScalar(vert.x);binormal.copy(splineTube.binormals[s]).multiplyScalar(vert.y);position2.copy(extrudePts[s]).add(normal).add(binormal);v(position2.x,position2.y,position2.z)}}}for(b=bevelSegments-1;0<=b;b--){t=b/bevelSegments;z=bevelThickness*_Mathcos(t*_MathPI/2);bs=bevelSize*_Mathsin(t*_MathPI/2);for(i=0,il=contour.length;i<il;i++){vert=scalePt2(contour[i],contourMovements[i],bs);v(vert.x,vert.y,depth+z)}for(h=0,hl=holes.length;h<hl;h++){ahole=holes[h];oneHoleMovements=holesMovements[h];for(i=0,il=ahole.length;i<il;i++){vert=scalePt2(ahole[i],oneHoleMovements[i],bs);if(!extrudeByPath){v(vert.x,vert.y,depth+z)}else{v(vert.x,vert.y+extrudePts[steps-1].y,extrudePts[steps-1].x+z)}}}}buildLidFaces();buildSideFaces();function buildLidFaces(){var start=verticesArray.length/3;if(bevelEnabled){var layer=0,offset=vlen*layer;for(i=0;i<flen;i++){face=faces[i];f3(face[2]+offset,face[1]+offset,face[0]+offset)}layer=steps+2*bevelSegments;offset=vlen*layer;for(i=0;i<flen;i++){face=faces[i];f3(face[0]+offset,face[1]+offset,face[2]+offset)}}else{for(i=0;i<flen;i++){face=faces[i];f3(face[2],face[1],face[0])}for(i=0;i<flen;i++){face=faces[i];f3(face[0]+vlen*steps,face[1]+vlen*steps,face[2]+vlen*steps)}}scope.addGroup(start,verticesArray.length/3-start,0)}function buildSideFaces(){var start=verticesArray.length/3,layeroffset=0;sidewalls(contour,layeroffset);layeroffset+=contour.length;for(h=0,hl=holes.length;h<hl;h++){ahole=holes[h];sidewalls(ahole,layeroffset);layeroffset+=ahole.length}scope.addGroup(start,verticesArray.length/3-start,1)}function sidewalls(contour,layeroffset){var j,k;i=contour.length;while(0<=--i){j=i;k=i-1;if(0>k)k=contour.length-1;var s=0,sl=steps+2*bevelSegments;for(s=0;s<sl;s++){var slen1=vlen*s,slen2=vlen*(s+1),a=layeroffset+j+slen1,b=layeroffset+k+slen1,c=layeroffset+k+slen2,d=layeroffset+j+slen2;f4(a,b,c,d)}}}function v(x,y,z){placeholder.push(x);placeholder.push(y);placeholder.push(z)}function f3(a,b,c){addVertex(a);addVertex(b);addVertex(c);var nextIndex=verticesArray.length/3,uvs=uvgen.generateTopUV(scope,verticesArray,nextIndex-3,nextIndex-2,nextIndex-1);addUV(uvs[0]);addUV(uvs[1]);addUV(uvs[2])}function f4(a,b,c,d){addVertex(a);addVertex(b);addVertex(d);addVertex(b);addVertex(c);addVertex(d);var nextIndex=verticesArray.length/3,uvs=uvgen.generateSideWallUV(scope,verticesArray,nextIndex-6,nextIndex-3,nextIndex-2,nextIndex-1);addUV(uvs[0]);addUV(uvs[1]);addUV(uvs[3]);addUV(uvs[1]);addUV(uvs[2]);addUV(uvs[3])}function addVertex(index){verticesArray.push(placeholder[3*index+0]);verticesArray.push(placeholder[3*index+1]);verticesArray.push(placeholder[3*index+2])}function addUV(vector2){uvArray.push(vector2.x);uvArray.push(vector2.y)}}}ExtrudeBufferGeometry.prototype=Object.create(BufferGeometry.prototype);ExtrudeBufferGeometry.prototype.constructor=ExtrudeBufferGeometry;ExtrudeBufferGeometry.prototype.toJSON=function(){var data=BufferGeometry.prototype.toJSON.call(this),shapes=this.parameters.shapes,options=this.parameters.options;return toJSON(shapes,options,data)};var WorldUVGenerator={generateTopUV:function(geometry,vertices,indexA,indexB,indexC){var a_x=vertices[3*indexA],a_y=vertices[3*indexA+1],b_x=vertices[3*indexB],b_y=vertices[3*indexB+1],c_x=vertices[3*indexC],c_y=vertices[3*indexC+1];return[new Vector2(a_x,a_y),new Vector2(b_x,b_y),new Vector2(c_x,c_y)]},generateSideWallUV:function(geometry,vertices,indexA,indexB,indexC,indexD){var a_x=vertices[3*indexA],a_y=vertices[3*indexA+1],a_z=vertices[3*indexA+2],b_x=vertices[3*indexB],b_y=vertices[3*indexB+1],b_z=vertices[3*indexB+2],c_x=vertices[3*indexC],c_y=vertices[3*indexC+1],c_z=vertices[3*indexC+2],d_x=vertices[3*indexD],d_y=vertices[3*indexD+1],d_z=vertices[3*indexD+2];if(.01>_Mathabs(a_y-b_y)){return[new Vector2(a_x,1-a_z),new Vector2(b_x,1-b_z),new Vector2(c_x,1-c_z),new Vector2(d_x,1-d_z)]}else{return[new Vector2(a_y,1-a_z),new Vector2(b_y,1-b_z),new Vector2(c_y,1-c_z),new Vector2(d_y,1-d_z)]}}};function toJSON(shapes,options,data){data.shapes=[];if(Array.isArray(shapes)){for(var i=0,l=shapes.length,shape;i<l;i++){shape=shapes[i];data.shapes.push(shape.uuid)}}else{data.shapes.push(shapes.uuid)}if(options.extrudePath!==void 0)data.options.extrudePath=options.extrudePath.toJSON();return data}var ExtrudeGeometry$1={ExtrudeGeometry:ExtrudeGeometry,ExtrudeBufferGeometry:ExtrudeBufferGeometry};_exports.$ExtrudeGeometry=ExtrudeGeometry$1;function WireframeGeometry(geometry){BufferGeometry.call(this);this.type="WireframeGeometry";var vertices=[],i,j,l,o,ol,edge=[0,0],edges={},e,edge1,edge2,key,keys=["a","b","c"],vertex;if(geometry&&geometry.isGeometry){var faces=geometry.faces;for(i=0,l=faces.length;i<l;i++){var face=faces[i];for(j=0;3>j;j++){edge1=face[keys[j]];edge2=face[keys[(j+1)%3]];edge[0]=_Mathmin(edge1,edge2);edge[1]=_Mathmax(edge1,edge2);key=edge[0]+","+edge[1];if(edges[key]===void 0){edges[key]={index1:edge[0],index2:edge[1]}}}}for(key in edges){e=edges[key];vertex=geometry.vertices[e.index1];vertices.push(vertex.x,vertex.y,vertex.z);vertex=geometry.vertices[e.index2];vertices.push(vertex.x,vertex.y,vertex.z)}}else if(geometry&&geometry.isBufferGeometry){var position,indices,groups,group,start,count,index1,index2;vertex=new Vector3;if(null!==geometry.index){position=geometry.attributes.position;indices=geometry.index;groups=geometry.groups;if(0===groups.length){groups=[{start:0,count:indices.count,materialIndex:0}]}for(o=0,ol=groups.length;o<ol;++o){group=groups[o];start=group.start;count=group.count;for(i=start,l=start+count;i<l;i+=3){for(j=0;3>j;j++){edge1=indices.getX(i+j);edge2=indices.getX(i+(j+1)%3);edge[0]=_Mathmin(edge1,edge2);edge[1]=_Mathmax(edge1,edge2);key=edge[0]+","+edge[1];if(edges[key]===void 0){edges[key]={index1:edge[0],index2:edge[1]}}}}}for(key in edges){e=edges[key];vertex.fromBufferAttribute(position,e.index1);vertices.push(vertex.x,vertex.y,vertex.z);vertex.fromBufferAttribute(position,e.index2);vertices.push(vertex.x,vertex.y,vertex.z)}}else{position=geometry.attributes.position;for(i=0,l=position.count/3;i<l;i++){for(j=0;3>j;j++){index1=3*i+j;vertex.fromBufferAttribute(position,index1);vertices.push(vertex.x,vertex.y,vertex.z);index2=3*i+(j+1)%3;vertex.fromBufferAttribute(position,index2);vertices.push(vertex.x,vertex.y,vertex.z)}}}}this.addAttribute("position",new Float32BufferAttribute(vertices,3))}WireframeGeometry.prototype=Object.create(BufferGeometry.prototype);WireframeGeometry.prototype.constructor=WireframeGeometry;var WireframeGeometry$1={WireframeGeometry:WireframeGeometry};_exports.$WireframeGeometry=WireframeGeometry$1;function ParametricGeometry(func,slices,stacks){Geometry.call(this);this.type="ParametricGeometry";this.parameters={func:func,slices:slices,stacks:stacks};this.fromBufferGeometry(new ParametricBufferGeometry(func,slices,stacks));this.mergeVertices()}ParametricGeometry.prototype=Object.create(Geometry.prototype);ParametricGeometry.prototype.constructor=ParametricGeometry;function ParametricBufferGeometry(func,slices,stacks){BufferGeometry.call(this);this.type="ParametricBufferGeometry";this.parameters={func:func,slices:slices,stacks:stacks};var indices=[],vertices=[],normals=[],uvs=[],EPS=1e-5,normal=new Vector3,p0=new Vector3,p1=new Vector3,pu=new Vector3,pv=new Vector3,i,j;if(3>func.length){console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.")}var sliceCount=slices+1;for(i=0;i<=stacks;i++){var v=i/stacks;for(j=0;j<=slices;j++){var u=j/slices;func(u,v,p0);vertices.push(p0.x,p0.y,p0.z);if(0<=u-EPS){func(u-EPS,v,p1);pu.subVectors(p0,p1)}else{func(u+EPS,v,p1);pu.subVectors(p1,p0)}if(0<=v-EPS){func(u,v-EPS,p1);pv.subVectors(p0,p1)}else{func(u,v+EPS,p1);pv.subVectors(p1,p0)}normal.crossVectors(pu,pv).normalize();normals.push(normal.x,normal.y,normal.z);uvs.push(u,v)}}for(i=0;i<stacks;i++){for(j=0;j<slices;j++){var a=i*sliceCount+j,b=i*sliceCount+j+1,c=(i+1)*sliceCount+j+1,d=(i+1)*sliceCount+j;indices.push(a,b,d);indices.push(b,c,d)}}this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("normal",new Float32BufferAttribute(normals,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2))}ParametricBufferGeometry.prototype=Object.create(BufferGeometry.prototype);ParametricBufferGeometry.prototype.constructor=ParametricBufferGeometry;var ParametricGeometry$1={ParametricGeometry:ParametricGeometry,ParametricBufferGeometry:ParametricBufferGeometry};_exports.$ParametricGeometry=ParametricGeometry$1;function TetrahedronGeometry(radius,detail){Geometry.call(this);this.type="TetrahedronGeometry";this.parameters={radius:radius,detail:detail};this.fromBufferGeometry(new TetrahedronBufferGeometry(radius,detail));this.mergeVertices()}TetrahedronGeometry.prototype=Object.create(Geometry.prototype);TetrahedronGeometry.prototype.constructor=TetrahedronGeometry;function TetrahedronBufferGeometry(radius,detail){var vertices=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],indices=[2,1,0,0,3,2,1,3,0,2,3,1];PolyhedronBufferGeometry.call(this,vertices,indices,radius,detail);this.type="TetrahedronBufferGeometry";this.parameters={radius:radius,detail:detail}}TetrahedronBufferGeometry.prototype=Object.create(PolyhedronBufferGeometry.prototype);TetrahedronBufferGeometry.prototype.constructor=TetrahedronBufferGeometry;var TetrahedronGeometry$1={TetrahedronGeometry:TetrahedronGeometry,TetrahedronBufferGeometry:TetrahedronBufferGeometry};_exports.$TetrahedronGeometry=TetrahedronGeometry$1;function OctahedronGeometry(radius,detail){Geometry.call(this);this.type="OctahedronGeometry";this.parameters={radius:radius,detail:detail};this.fromBufferGeometry(new OctahedronBufferGeometry(radius,detail));this.mergeVertices()}OctahedronGeometry.prototype=Object.create(Geometry.prototype);OctahedronGeometry.prototype.constructor=OctahedronGeometry;function OctahedronBufferGeometry(radius,detail){var vertices=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],indices=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];PolyhedronBufferGeometry.call(this,vertices,indices,radius,detail);this.type="OctahedronBufferGeometry";this.parameters={radius:radius,detail:detail}}OctahedronBufferGeometry.prototype=Object.create(PolyhedronBufferGeometry.prototype);OctahedronBufferGeometry.prototype.constructor=OctahedronBufferGeometry;var OctahedronGeometry$1={OctahedronGeometry:OctahedronGeometry,OctahedronBufferGeometry:OctahedronBufferGeometry};_exports.$OctahedronGeometry=OctahedronGeometry$1;function IcosahedronGeometry(radius,detail){Geometry.call(this);this.type="IcosahedronGeometry";this.parameters={radius:radius,detail:detail};this.fromBufferGeometry(new IcosahedronBufferGeometry(radius,detail));this.mergeVertices()}IcosahedronGeometry.prototype=Object.create(Geometry.prototype);IcosahedronGeometry.prototype.constructor=IcosahedronGeometry;function IcosahedronBufferGeometry(radius,detail){var t=(1+2.23606797749979)/2,vertices=[-1,t,0,1,t,0,-1,-t,0,1,-t,0,0,-1,t,0,1,t,0,-1,-t,0,1,-t,t,0,-1,t,0,1,-t,0,-1,-t,0,1],indices=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];PolyhedronBufferGeometry.call(this,vertices,indices,radius,detail);this.type="IcosahedronBufferGeometry";this.parameters={radius:radius,detail:detail}}IcosahedronBufferGeometry.prototype=Object.create(PolyhedronBufferGeometry.prototype);IcosahedronBufferGeometry.prototype.constructor=IcosahedronBufferGeometry;var IcosahedronGeometry$1={IcosahedronGeometry:IcosahedronGeometry,IcosahedronBufferGeometry:IcosahedronBufferGeometry};_exports.$IcosahedronGeometry=IcosahedronGeometry$1;function TubeGeometry(path,tubularSegments,radius,radialSegments,closed,taper){Geometry.call(this);this.type="TubeGeometry";this.parameters={path:path,tubularSegments:tubularSegments,radius:radius,radialSegments:radialSegments,closed:closed};if(taper!==void 0)console.warn("THREE.TubeGeometry: taper has been removed.");var bufferGeometry=new TubeBufferGeometry(path,tubularSegments,radius,radialSegments,closed);this.tangents=bufferGeometry.tangents;this.normals=bufferGeometry.normals;this.binormals=bufferGeometry.binormals;this.fromBufferGeometry(bufferGeometry);this.mergeVertices()}TubeGeometry.prototype=Object.create(Geometry.prototype);TubeGeometry.prototype.constructor=TubeGeometry;function TubeBufferGeometry(path,tubularSegments,radius,radialSegments,closed){BufferGeometry.call(this);this.type="TubeBufferGeometry";this.parameters={path:path,tubularSegments:tubularSegments,radius:radius,radialSegments:radialSegments,closed:closed};tubularSegments=tubularSegments||64;radius=radius||1;radialSegments=radialSegments||8;closed=closed||!1;var frames=path.computeFrenetFrames(tubularSegments,closed);this.tangents=frames.tangents;this.normals=frames.normals;this.binormals=frames.binormals;var vertex=new Vector3,normal=new Vector3,uv=new Vector2,P=new Vector3,i,j,vertices=[],normals=[],uvs=[],indices=[];generateBufferData();this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("normal",new Float32BufferAttribute(normals,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2));function generateBufferData(){for(i=0;i<tubularSegments;i++){generateSegment(i)}generateSegment(!1===closed?tubularSegments:0);generateUVs();generateIndices()}function generateSegment(i){P=path.getPointAt(i/tubularSegments,P);var N=frames.normals[i],B=frames.binormals[i];for(j=0;j<=radialSegments;j++){var v=2*(j/radialSegments*_MathPI),sin=_Mathsin(v),cos=-_Mathcos(v);normal.x=cos*N.x+sin*B.x;normal.y=cos*N.y+sin*B.y;normal.z=cos*N.z+sin*B.z;normal.normalize();normals.push(normal.x,normal.y,normal.z);vertex.x=P.x+radius*normal.x;vertex.y=P.y+radius*normal.y;vertex.z=P.z+radius*normal.z;vertices.push(vertex.x,vertex.y,vertex.z)}}function generateIndices(){for(j=1;j<=tubularSegments;j++){for(i=1;i<=radialSegments;i++){var a=(radialSegments+1)*(j-1)+(i-1),b=(radialSegments+1)*j+(i-1),c=(radialSegments+1)*j+i,d=(radialSegments+1)*(j-1)+i;indices.push(a,b,d);indices.push(b,c,d)}}}function generateUVs(){for(i=0;i<=tubularSegments;i++){for(j=0;j<=radialSegments;j++){uv.x=i/tubularSegments;uv.y=j/radialSegments;uvs.push(uv.x,uv.y)}}}}TubeBufferGeometry.prototype=Object.create(BufferGeometry.prototype);TubeBufferGeometry.prototype.constructor=TubeBufferGeometry;var TubeGeometry$1={TubeGeometry:TubeGeometry,TubeBufferGeometry:TubeBufferGeometry};_exports.$TubeGeometry=TubeGeometry$1;function TorusKnotGeometry(radius,tube,tubularSegments,radialSegments,p,q,heightScale){Geometry.call(this);this.type="TorusKnotGeometry";this.parameters={radius:radius,tube:tube,tubularSegments:tubularSegments,radialSegments:radialSegments,p:p,q:q};if(heightScale!==void 0)console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new TorusKnotBufferGeometry(radius,tube,tubularSegments,radialSegments,p,q));this.mergeVertices()}TorusKnotGeometry.prototype=Object.create(Geometry.prototype);TorusKnotGeometry.prototype.constructor=TorusKnotGeometry;function TorusKnotBufferGeometry(radius,tube,tubularSegments,radialSegments,p,q){BufferGeometry.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:radius,tube:tube,tubularSegments:tubularSegments,radialSegments:radialSegments,p:p,q:q};radius=radius||1;tube=tube||.4;tubularSegments=_Mathfloor(tubularSegments)||64;radialSegments=_Mathfloor(radialSegments)||8;p=p||2;q=q||3;var indices=[],vertices=[],normals=[],uvs=[],i,j,vertex=new Vector3,normal=new Vector3,P1=new Vector3,P2=new Vector3,B=new Vector3,T=new Vector3,N=new Vector3;for(i=0;i<=tubularSegments;++i){var u=2*(i/tubularSegments*p*_MathPI);calculatePositionOnCurve(u,p,q,radius,P1);calculatePositionOnCurve(u+.01,p,q,radius,P2);T.subVectors(P2,P1);N.addVectors(P2,P1);B.crossVectors(T,N);N.crossVectors(B,T);B.normalize();N.normalize();for(j=0;j<=radialSegments;++j){var v=2*(j/radialSegments*_MathPI),cx=-tube*_Mathcos(v),cy=tube*_Mathsin(v);vertex.x=P1.x+(cx*N.x+cy*B.x);vertex.y=P1.y+(cx*N.y+cy*B.y);vertex.z=P1.z+(cx*N.z+cy*B.z);vertices.push(vertex.x,vertex.y,vertex.z);normal.subVectors(vertex,P1).normalize();normals.push(normal.x,normal.y,normal.z);uvs.push(i/tubularSegments);uvs.push(j/radialSegments)}}for(j=1;j<=tubularSegments;j++){for(i=1;i<=radialSegments;i++){var a=(radialSegments+1)*(j-1)+(i-1),b=(radialSegments+1)*j+(i-1),c=(radialSegments+1)*j+i,d=(radialSegments+1)*(j-1)+i;indices.push(a,b,d);indices.push(b,c,d)}}this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("normal",new Float32BufferAttribute(normals,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2));function calculatePositionOnCurve(u,p,q,radius,position){var cu=_Mathcos(u),su=_Mathsin(u),quOverP=q/p*u,cs=_Mathcos(quOverP);position.x=.5*(radius*(2+cs))*cu;position.y=.5*(radius*(2+cs)*su);position.z=.5*(radius*_Mathsin(quOverP))}}TorusKnotBufferGeometry.prototype=Object.create(BufferGeometry.prototype);TorusKnotBufferGeometry.prototype.constructor=TorusKnotBufferGeometry;var TorusKnotGeometry$1={TorusKnotGeometry:TorusKnotGeometry,TorusKnotBufferGeometry:TorusKnotBufferGeometry};_exports.$TorusKnotGeometry=TorusKnotGeometry$1;function TorusGeometry(radius,tube,radialSegments,tubularSegments,arc){Geometry.call(this);this.type="TorusGeometry";this.parameters={radius:radius,tube:tube,radialSegments:radialSegments,tubularSegments:tubularSegments,arc:arc};this.fromBufferGeometry(new TorusBufferGeometry(radius,tube,radialSegments,tubularSegments,arc));this.mergeVertices()}TorusGeometry.prototype=Object.create(Geometry.prototype);TorusGeometry.prototype.constructor=TorusGeometry;function TorusBufferGeometry(radius,tube,radialSegments,tubularSegments,arc){BufferGeometry.call(this);this.type="TorusBufferGeometry";this.parameters={radius:radius,tube:tube,radialSegments:radialSegments,tubularSegments:tubularSegments,arc:arc};radius=radius||1;tube=tube||.4;radialSegments=_Mathfloor(radialSegments)||8;tubularSegments=_Mathfloor(tubularSegments)||6;arc=arc||2*_MathPI;var indices=[],vertices=[],normals=[],uvs=[],center=new Vector3,vertex=new Vector3,normal=new Vector3,j,i;for(j=0;j<=radialSegments;j++){for(i=0;i<=tubularSegments;i++){var u=i/tubularSegments*arc,v=2*(j/radialSegments*_MathPI);vertex.x=(radius+tube*_Mathcos(v))*_Mathcos(u);vertex.y=(radius+tube*_Mathcos(v))*_Mathsin(u);vertex.z=tube*_Mathsin(v);vertices.push(vertex.x,vertex.y,vertex.z);center.x=radius*_Mathcos(u);center.y=radius*_Mathsin(u);normal.subVectors(vertex,center).normalize();normals.push(normal.x,normal.y,normal.z);uvs.push(i/tubularSegments);uvs.push(j/radialSegments)}}for(j=1;j<=radialSegments;j++){for(i=1;i<=tubularSegments;i++){var a=(tubularSegments+1)*j+i-1,b=(tubularSegments+1)*(j-1)+i-1,c=(tubularSegments+1)*(j-1)+i,d=(tubularSegments+1)*j+i;indices.push(a,b,d);indices.push(b,c,d)}}this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("normal",new Float32BufferAttribute(normals,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2))}TorusBufferGeometry.prototype=Object.create(BufferGeometry.prototype);TorusBufferGeometry.prototype.constructor=TorusBufferGeometry;var TorusGeometry$1={TorusGeometry:TorusGeometry,TorusBufferGeometry:TorusBufferGeometry};_exports.$TorusGeometry=TorusGeometry$1;function TextGeometry(text,parameters){Geometry.call(this);this.type="TextGeometry";this.parameters={text:text,parameters:parameters};this.fromBufferGeometry(new TextBufferGeometry(text,parameters));this.mergeVertices()}TextGeometry.prototype=Object.create(Geometry.prototype);TextGeometry.prototype.constructor=TextGeometry;function TextBufferGeometry(text,parameters){parameters=parameters||{};var font=parameters.font;if(!(font&&font.isFont)){console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font.");return new Geometry}var shapes=font.generateShapes(text,parameters.size);parameters.depth=parameters.height!==void 0?parameters.height:50;if(parameters.bevelThickness===void 0)parameters.bevelThickness=10;if(parameters.bevelSize===void 0)parameters.bevelSize=8;if(parameters.bevelEnabled===void 0)parameters.bevelEnabled=!1;ExtrudeBufferGeometry.call(this,shapes,parameters);this.type="TextBufferGeometry"}TextBufferGeometry.prototype=Object.create(ExtrudeBufferGeometry.prototype);TextBufferGeometry.prototype.constructor=TextBufferGeometry;var TextGeometry$1={TextGeometry:TextGeometry,TextBufferGeometry:TextBufferGeometry};_exports.$TextGeometry=TextGeometry$1;function SphereGeometry(radius,widthSegments,heightSegments,phiStart,phiLength,thetaStart,thetaLength){Geometry.call(this);this.type="SphereGeometry";this.parameters={radius:radius,widthSegments:widthSegments,heightSegments:heightSegments,phiStart:phiStart,phiLength:phiLength,thetaStart:thetaStart,thetaLength:thetaLength};this.fromBufferGeometry(new SphereBufferGeometry(radius,widthSegments,heightSegments,phiStart,phiLength,thetaStart,thetaLength));this.mergeVertices()}SphereGeometry.prototype=Object.create(Geometry.prototype);SphereGeometry.prototype.constructor=SphereGeometry;function SphereBufferGeometry(radius,widthSegments,heightSegments,phiStart,phiLength,thetaStart,thetaLength){BufferGeometry.call(this);this.type="SphereBufferGeometry";this.parameters={radius:radius,widthSegments:widthSegments,heightSegments:heightSegments,phiStart:phiStart,phiLength:phiLength,thetaStart:thetaStart,thetaLength:thetaLength};radius=radius||1;widthSegments=_Mathmax(3,_Mathfloor(widthSegments)||8);heightSegments=_Mathmax(2,_Mathfloor(heightSegments)||6);phiStart=phiStart!==void 0?phiStart:0;phiLength=phiLength!==void 0?phiLength:2*_MathPI;thetaStart=thetaStart!==void 0?thetaStart:0;thetaLength=thetaLength!==void 0?thetaLength:_MathPI;var thetaEnd=thetaStart+thetaLength,ix,iy,index=0,grid=[],vertex=new Vector3,normal=new Vector3,indices=[],vertices=[],normals=[],uvs=[];for(iy=0;iy<=heightSegments;iy++){var verticesRow=[],v=iy/heightSegments;for(ix=0;ix<=widthSegments;ix++){var u=ix/widthSegments;vertex.x=-radius*_Mathcos(phiStart+u*phiLength)*_Mathsin(thetaStart+v*thetaLength);vertex.y=radius*_Mathcos(thetaStart+v*thetaLength);vertex.z=radius*_Mathsin(phiStart+u*phiLength)*_Mathsin(thetaStart+v*thetaLength);vertices.push(vertex.x,vertex.y,vertex.z);normal.set(vertex.x,vertex.y,vertex.z).normalize();normals.push(normal.x,normal.y,normal.z);uvs.push(u,1-v);verticesRow.push(index++)}grid.push(verticesRow)}for(iy=0;iy<heightSegments;iy++){for(ix=0;ix<widthSegments;ix++){var a=grid[iy][ix+1],b=grid[iy][ix],c=grid[iy+1][ix],d=grid[iy+1][ix+1];if(0!==iy||0<thetaStart)indices.push(a,b,d);if(iy!==heightSegments-1||thetaEnd<_MathPI)indices.push(b,c,d)}}this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("normal",new Float32BufferAttribute(normals,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2))}SphereBufferGeometry.prototype=Object.create(BufferGeometry.prototype);SphereBufferGeometry.prototype.constructor=SphereBufferGeometry;var SphereGeometry$1={SphereGeometry:SphereGeometry,SphereBufferGeometry:SphereBufferGeometry};_exports.$SphereGeometry=SphereGeometry$1;function RingGeometry(innerRadius,outerRadius,thetaSegments,phiSegments,thetaStart,thetaLength){Geometry.call(this);this.type="RingGeometry";this.parameters={innerRadius:innerRadius,outerRadius:outerRadius,thetaSegments:thetaSegments,phiSegments:phiSegments,thetaStart:thetaStart,thetaLength:thetaLength};this.fromBufferGeometry(new RingBufferGeometry(innerRadius,outerRadius,thetaSegments,phiSegments,thetaStart,thetaLength));this.mergeVertices()}RingGeometry.prototype=Object.create(Geometry.prototype);RingGeometry.prototype.constructor=RingGeometry;function RingBufferGeometry(innerRadius,outerRadius,thetaSegments,phiSegments,thetaStart,thetaLength){BufferGeometry.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:innerRadius,outerRadius:outerRadius,thetaSegments:thetaSegments,phiSegments:phiSegments,thetaStart:thetaStart,thetaLength:thetaLength};innerRadius=innerRadius||.5;outerRadius=outerRadius||1;thetaStart=thetaStart!==void 0?thetaStart:0;thetaLength=thetaLength!==void 0?thetaLength:2*_MathPI;thetaSegments=thetaSegments!==void 0?_Mathmax(3,thetaSegments):8;phiSegments=phiSegments!==void 0?_Mathmax(1,phiSegments):1;var indices=[],vertices=[],normals=[],uvs=[],segment,radius=innerRadius,radiusStep=(outerRadius-innerRadius)/phiSegments,vertex=new Vector3,uv=new Vector2,j,i;for(j=0;j<=phiSegments;j++){for(i=0;i<=thetaSegments;i++){segment=thetaStart+i/thetaSegments*thetaLength;vertex.x=radius*_Mathcos(segment);vertex.y=radius*_Mathsin(segment);vertices.push(vertex.x,vertex.y,vertex.z);normals.push(0,0,1);uv.x=(vertex.x/outerRadius+1)/2;uv.y=(vertex.y/outerRadius+1)/2;uvs.push(uv.x,uv.y)}radius+=radiusStep}for(j=0;j<phiSegments;j++){var thetaSegmentLevel=j*(thetaSegments+1);for(i=0;i<thetaSegments;i++){segment=i+thetaSegmentLevel;var a=segment,b=segment+thetaSegments+1,c=segment+thetaSegments+2,d=segment+1;indices.push(a,b,d);indices.push(b,c,d)}}this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("normal",new Float32BufferAttribute(normals,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2))}RingBufferGeometry.prototype=Object.create(BufferGeometry.prototype);RingBufferGeometry.prototype.constructor=RingBufferGeometry;var RingGeometry$1={RingGeometry:RingGeometry,RingBufferGeometry:RingBufferGeometry};_exports.$RingGeometry=RingGeometry$1;function PlaneGeometry(width,height,widthSegments,heightSegments){Geometry.call(this);this.type="PlaneGeometry";this.parameters={width:width,height:height,widthSegments:widthSegments,heightSegments:heightSegments};this.fromBufferGeometry(new PlaneBufferGeometry(width,height,widthSegments,heightSegments));this.mergeVertices()}PlaneGeometry.prototype=Object.create(Geometry.prototype);PlaneGeometry.prototype.constructor=PlaneGeometry;function PlaneBufferGeometry(width,height,widthSegments,heightSegments){BufferGeometry.call(this);this.type="PlaneBufferGeometry";this.parameters={width:width,height:height,widthSegments:widthSegments,heightSegments:heightSegments};width=width||1;height=height||1;var width_half=width/2,height_half=height/2,gridX=_Mathfloor(widthSegments)||1,gridY=_Mathfloor(heightSegments)||1,gridX1=gridX+1,gridY1=gridY+1,segment_width=width/gridX,segment_height=height/gridY,ix,iy,indices=[],vertices=[],normals=[],uvs=[];for(iy=0;iy<gridY1;iy++){var y=iy*segment_height-height_half;for(ix=0;ix<gridX1;ix++){var x=ix*segment_width-width_half;vertices.push(x,-y,0);normals.push(0,0,1);uvs.push(ix/gridX);uvs.push(1-iy/gridY)}}for(iy=0;iy<gridY;iy++){for(ix=0;ix<gridX;ix++){var a=ix+gridX1*iy,b=ix+gridX1*(iy+1),c=ix+1+gridX1*(iy+1),d=ix+1+gridX1*iy;indices.push(a,b,d);indices.push(b,c,d)}}this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("normal",new Float32BufferAttribute(normals,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2))}PlaneBufferGeometry.prototype=Object.create(BufferGeometry.prototype);PlaneBufferGeometry.prototype.constructor=PlaneBufferGeometry;var PlaneGeometry$1={PlaneGeometry:PlaneGeometry,PlaneBufferGeometry:PlaneBufferGeometry};_exports.$PlaneGeometry=PlaneGeometry$1;function LatheGeometry(points,segments,phiStart,phiLength){Geometry.call(this);this.type="LatheGeometry";this.parameters={points:points,segments:segments,phiStart:phiStart,phiLength:phiLength};this.fromBufferGeometry(new LatheBufferGeometry(points,segments,phiStart,phiLength));this.mergeVertices()}LatheGeometry.prototype=Object.create(Geometry.prototype);LatheGeometry.prototype.constructor=LatheGeometry;function LatheBufferGeometry(points,segments,phiStart,phiLength){BufferGeometry.call(this);this.type="LatheBufferGeometry";this.parameters={points:points,segments:segments,phiStart:phiStart,phiLength:phiLength};segments=_Mathfloor(segments)||12;phiStart=phiStart||0;phiLength=phiLength||2*_MathPI;phiLength=_Math.clamp(phiLength,0,2*_MathPI);var indices=[],vertices=[],uvs=[],base,inverseSegments=1/segments,vertex=new Vector3,uv=new Vector2,i,j;for(i=0;i<=segments;i++){var phi=phiStart+i*inverseSegments*phiLength,sin=_Mathsin(phi),cos=_Mathcos(phi);for(j=0;j<=points.length-1;j++){vertex.x=points[j].x*sin;vertex.y=points[j].y;vertex.z=points[j].x*cos;vertices.push(vertex.x,vertex.y,vertex.z);uv.x=i/segments;uv.y=j/(points.length-1);uvs.push(uv.x,uv.y)}}for(i=0;i<segments;i++){for(j=0;j<points.length-1;j++){base=j+i*points.length;var a=base,b=base+points.length,c=base+points.length+1,d=base+1;indices.push(a,b,d);indices.push(b,c,d)}}this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2));this.computeVertexNormals();if(phiLength===2*_MathPI){var normals=this.attributes.normal.array,n1=new Vector3,n2=new Vector3,n=new Vector3;base=3*(segments*points.length);for(i=0,j=0;i<points.length;i++,j+=3){n1.x=normals[j+0];n1.y=normals[j+1];n1.z=normals[j+2];n2.x=normals[base+j+0];n2.y=normals[base+j+1];n2.z=normals[base+j+2];n.addVectors(n1,n2).normalize();normals[j+0]=normals[base+j+0]=n.x;normals[j+1]=normals[base+j+1]=n.y;normals[j+2]=normals[base+j+2]=n.z}}}LatheBufferGeometry.prototype=Object.create(BufferGeometry.prototype);LatheBufferGeometry.prototype.constructor=LatheBufferGeometry;var LatheGeometry$1={LatheGeometry:LatheGeometry,LatheBufferGeometry:LatheBufferGeometry};_exports.$LatheGeometry=LatheGeometry$1;function ShapeGeometry(shapes,curveSegments){Geometry.call(this);this.type="ShapeGeometry";if("object"===typeof curveSegments){console.warn("THREE.ShapeGeometry: Options parameter has been removed.");curveSegments=curveSegments.curveSegments}this.parameters={shapes:shapes,curveSegments:curveSegments};this.fromBufferGeometry(new ShapeBufferGeometry(shapes,curveSegments));this.mergeVertices()}ShapeGeometry.prototype=Object.create(Geometry.prototype);ShapeGeometry.prototype.constructor=ShapeGeometry;ShapeGeometry.prototype.toJSON=function(){var data=Geometry.prototype.toJSON.call(this),shapes=this.parameters.shapes;return toJSON$1(shapes,data)};function ShapeBufferGeometry(shapes,curveSegments){BufferGeometry.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:shapes,curveSegments:curveSegments};curveSegments=curveSegments||12;var indices=[],vertices=[],normals=[],uvs=[],groupStart=0,groupCount=0;if(!1===Array.isArray(shapes)){addShape(shapes)}else{for(var i=0;i<shapes.length;i++){addShape(shapes[i]);this.addGroup(groupStart,groupCount,i);groupStart+=groupCount;groupCount=0}}this.setIndex(indices);this.addAttribute("position",new Float32BufferAttribute(vertices,3));this.addAttribute("normal",new Float32BufferAttribute(normals,3));this.addAttribute("uv",new Float32BufferAttribute(uvs,2));function addShape(shape){var i,l,shapeHole,indexOffset=vertices.length/3,points=shape.extractPoints(curveSegments),shapeVertices=points.shape,shapeHoles=points.holes;if(!1===ShapeUtils.isClockWise(shapeVertices)){shapeVertices=shapeVertices.reverse()}for(i=0,l=shapeHoles.length;i<l;i++){shapeHole=shapeHoles[i];if(!0===ShapeUtils.isClockWise(shapeHole)){shapeHoles[i]=shapeHole.reverse()}}var faces=ShapeUtils.triangulateShape(shapeVertices,shapeHoles);for(i=0,l=shapeHoles.length;i<l;i++){shapeHole=shapeHoles[i];shapeVertices=shapeVertices.concat(shapeHole)}for(i=0,l=shapeVertices.length;i<l;i++){var vertex=shapeVertices[i];vertices.push(vertex.x,vertex.y,0);normals.push(0,0,1);uvs.push(vertex.x,vertex.y)}for(i=0,l=faces.length;i<l;i++){var face=faces[i],a=face[0]+indexOffset,b=face[1]+indexOffset,c=face[2]+indexOffset;indices.push(a,b,c);groupCount+=3}}}ShapeBufferGeometry.prototype=Object.create(BufferGeometry.prototype);ShapeBufferGeometry.prototype.constructor=ShapeBufferGeometry;ShapeBufferGeometry.prototype.toJSON=function(){var data=BufferGeometry.prototype.toJSON.call(this),shapes=this.parameters.shapes;return toJSON$1(shapes,data)};function toJSON$1(shapes,data){data.shapes=[];if(Array.isArray(shapes)){for(var i=0,l=shapes.length,shape;i<l;i++){shape=shapes[i];data.shapes.push(shape.uuid)}}else{data.shapes.push(shapes.uuid)}return data}var ShapeGeometry$1={ShapeGeometry:ShapeGeometry,ShapeBufferGeometry:ShapeBufferGeometry};_exports.$ShapeGeometry=ShapeGeometry$1;var Geometries={WireframeGeometry:WireframeGeometry,ParametricGeometry:ParametricGeometry,ParametricBufferGeometry:ParametricBufferGeometry,TetrahedronGeometry:TetrahedronGeometry,TetrahedronBufferGeometry:TetrahedronBufferGeometry,OctahedronGeometry:OctahedronGeometry,OctahedronBufferGeometry:OctahedronBufferGeometry,IcosahedronGeometry:IcosahedronGeometry,IcosahedronBufferGeometry:IcosahedronBufferGeometry,DodecahedronGeometry:DodecahedronGeometry,DodecahedronBufferGeometry:DodecahedronBufferGeometry,PolyhedronGeometry:PolyhedronGeometry,PolyhedronBufferGeometry:PolyhedronBufferGeometry,TubeGeometry:TubeGeometry,TubeBufferGeometry:TubeBufferGeometry,TorusKnotGeometry:TorusKnotGeometry,TorusKnotBufferGeometry:TorusKnotBufferGeometry,TorusGeometry:TorusGeometry,TorusBufferGeometry:TorusBufferGeometry,TextGeometry:TextGeometry,TextBufferGeometry:TextBufferGeometry,SphereGeometry:SphereGeometry,SphereBufferGeometry:SphereBufferGeometry,RingGeometry:RingGeometry,RingBufferGeometry:RingBufferGeometry,PlaneGeometry:PlaneGeometry,PlaneBufferGeometry:PlaneBufferGeometry,LatheGeometry:LatheGeometry,LatheBufferGeometry:LatheBufferGeometry,ShapeGeometry:ShapeGeometry,ShapeBufferGeometry:ShapeBufferGeometry,ExtrudeGeometry:ExtrudeGeometry,ExtrudeBufferGeometry:ExtrudeBufferGeometry,EdgesGeometry:EdgesGeometry,ConeGeometry:ConeGeometry,ConeBufferGeometry:ConeBufferGeometry,CylinderGeometry:CylinderGeometry,CylinderBufferGeometry:CylinderBufferGeometry,CircleGeometry:CircleGeometry,CircleBufferGeometry:CircleBufferGeometry,BoxGeometry:BoxGeometry,BoxBufferGeometry:BoxBufferGeometry};_exports.$Geometries=Geometries;var materialId=0;function Material(){Object.defineProperty(this,"id",{value:materialId++});this.uuid=_Math.generateUUID();this.name="";this.type="Material";this.fog=!0;this.lights=!0;this.blending=NormalBlending;this.side=FrontSide;this.flatShading=!1;this.vertexColors=NoColors;this.opacity=1;this.transparent=!1;this.blendSrc=SrcAlphaFactor;this.blendDst=OneMinusSrcAlphaFactor;this.blendEquation=AddEquation;this.blendSrcAlpha=null;this.blendDstAlpha=null;this.blendEquationAlpha=null;this.depthFunc=LessEqualDepth;this.depthTest=!0;this.depthWrite=!0;this.clippingPlanes=null;this.clipIntersection=!1;this.clipShadows=!1;this.shadowSide=null;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetFactor=0;this.polygonOffsetUnits=0;this.dithering=!1;this.alphaTest=0;this.premultipliedAlpha=!1;this.visible=!0;this.userData={};this.needsUpdate=!0}Material.prototype=Object.assign(Object.create(EventDispatcher.prototype),{constructor:Material,isMaterial:!0,onBeforeCompile:function(){},setValues:function(values){if(values===void 0)return;for(var key in values){var newValue=values[key];if(newValue===void 0){console.warn("THREE.Material: '"+key+"' parameter is undefined.");continue}if("shading"===key){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");this.flatShading=newValue===FlatShading?!0:!1;continue}var currentValue=this[key];if(currentValue===void 0){console.warn("THREE."+this.type+": '"+key+"' is not a property of this material.");continue}if(currentValue&&currentValue.isColor){currentValue.set(newValue)}else if(currentValue&&currentValue.isVector3&&newValue&&newValue.isVector3){currentValue.copy(newValue)}else{this[key]=newValue}}},toJSON:function(meta){var isRoot=meta===void 0||"string"===typeof meta;if(isRoot){meta={textures:{},images:{}}}var data={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"},uuid:this.uuid,type:this.type};if(""!==this.name)data.name=this.name;if(this.color&&this.color.isColor)data.color=this.color.getHex();if(this.roughness!==void 0)data.roughness=this.roughness;if(this.metalness!==void 0)data.metalness=this.metalness;if(this.emissive&&this.emissive.isColor)data.emissive=this.emissive.getHex();if(1!==this.emissiveIntensity)data.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)data.specular=this.specular.getHex();if(this.shininess!==void 0)data.shininess=this.shininess;if(this.clearCoat!==void 0)data.clearCoat=this.clearCoat;if(this.clearCoatRoughness!==void 0)data.clearCoatRoughness=this.clearCoatRoughness;if(this.map&&this.map.isTexture)data.map=this.map.toJSON(meta).uuid;if(this.alphaMap&&this.alphaMap.isTexture)data.alphaMap=this.alphaMap.toJSON(meta).uuid;if(this.lightMap&&this.lightMap.isTexture)data.lightMap=this.lightMap.toJSON(meta).uuid;if(this.aoMap&&this.aoMap.isTexture){data.aoMap=this.aoMap.toJSON(meta).uuid;data.aoMapIntensity=this.aoMapIntensity}if(this.bumpMap&&this.bumpMap.isTexture){data.bumpMap=this.bumpMap.toJSON(meta).uuid;data.bumpScale=this.bumpScale}if(this.normalMap&&this.normalMap.isTexture){data.normalMap=this.normalMap.toJSON(meta).uuid;data.normalMapType=this.normalMapType;data.normalScale=this.normalScale.toArray()}if(this.displacementMap&&this.displacementMap.isTexture){data.displacementMap=this.displacementMap.toJSON(meta).uuid;data.displacementScale=this.displacementScale;data.displacementBias=this.displacementBias}if(this.roughnessMap&&this.roughnessMap.isTexture)data.roughnessMap=this.roughnessMap.toJSON(meta).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)data.metalnessMap=this.metalnessMap.toJSON(meta).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)data.emissiveMap=this.emissiveMap.toJSON(meta).uuid;if(this.specularMap&&this.specularMap.isTexture)data.specularMap=this.specularMap.toJSON(meta).uuid;if(this.envMap&&this.envMap.isTexture){data.envMap=this.envMap.toJSON(meta).uuid;data.reflectivity=this.reflectivity;if(this.combine!==void 0)data.combine=this.combine;if(this.envMapIntensity!==void 0)data.envMapIntensity=this.envMapIntensity}if(this.gradientMap&&this.gradientMap.isTexture){data.gradientMap=this.gradientMap.toJSON(meta).uuid}if(this.size!==void 0)data.size=this.size;if(this.sizeAttenuation!==void 0)data.sizeAttenuation=this.sizeAttenuation;if(this.blending!==NormalBlending)data.blending=this.blending;if(!0===this.flatShading)data.flatShading=this.flatShading;if(this.side!==FrontSide)data.side=this.side;if(this.vertexColors!==NoColors)data.vertexColors=this.vertexColors;if(1>this.opacity)data.opacity=this.opacity;if(!0===this.transparent)data.transparent=this.transparent;data.depthFunc=this.depthFunc;data.depthTest=this.depthTest;data.depthWrite=this.depthWrite;if(0!==this.rotation)data.rotation=this.rotation;if(!0===this.polygonOffset)data.polygonOffset=!0;if(0!==this.polygonOffsetFactor)data.polygonOffsetFactor=this.polygonOffsetFactor;if(0!==this.polygonOffsetUnits)data.polygonOffsetUnits=this.polygonOffsetUnits;if(1!==this.linewidth)data.linewidth=this.linewidth;if(this.dashSize!==void 0)data.dashSize=this.dashSize;if(this.gapSize!==void 0)data.gapSize=this.gapSize;if(this.scale!==void 0)data.scale=this.scale;if(!0===this.dithering)data.dithering=!0;if(0<this.alphaTest)data.alphaTest=this.alphaTest;if(!0===this.premultipliedAlpha)data.premultipliedAlpha=this.premultipliedAlpha;if(!0===this.wireframe)data.wireframe=this.wireframe;if(1<this.wireframeLinewidth)data.wireframeLinewidth=this.wireframeLinewidth;if("round"!==this.wireframeLinecap)data.wireframeLinecap=this.wireframeLinecap;if("round"!==this.wireframeLinejoin)data.wireframeLinejoin=this.wireframeLinejoin;if(!0===this.morphTargets)data.morphTargets=!0;if(!0===this.skinning)data.skinning=!0;if(!1===this.visible)data.visible=!1;if("{}"!==JSON.stringify(this.userData))data.userData=this.userData;function extractFromCache(cache){var values=[];for(var key in cache){var data=cache[key];delete data.metadata;values.push(data)}return values}if(isRoot){var textures=extractFromCache(meta.textures),images=extractFromCache(meta.images);if(0<textures.length)data.textures=textures;if(0<images.length)data.images=images}return data},clone:function(){return new this.constructor().copy(this)},copy:function(source){this.name=source.name;this.fog=source.fog;this.lights=source.lights;this.blending=source.blending;this.side=source.side;this.flatShading=source.flatShading;this.vertexColors=source.vertexColors;this.opacity=source.opacity;this.transparent=source.transparent;this.blendSrc=source.blendSrc;this.blendDst=source.blendDst;this.blendEquation=source.blendEquation;this.blendSrcAlpha=source.blendSrcAlpha;this.blendDstAlpha=source.blendDstAlpha;this.blendEquationAlpha=source.blendEquationAlpha;this.depthFunc=source.depthFunc;this.depthTest=source.depthTest;this.depthWrite=source.depthWrite;this.colorWrite=source.colorWrite;this.precision=source.precision;this.polygonOffset=source.polygonOffset;this.polygonOffsetFactor=source.polygonOffsetFactor;this.polygonOffsetUnits=source.polygonOffsetUnits;this.dithering=source.dithering;this.alphaTest=source.alphaTest;this.premultipliedAlpha=source.premultipliedAlpha;this.visible=source.visible;this.userData=JSON.parse(JSON.stringify(source.userData));this.clipShadows=source.clipShadows;this.clipIntersection=source.clipIntersection;var srcPlanes=source.clippingPlanes,dstPlanes=null;if(null!==srcPlanes){var n=srcPlanes.length;dstPlanes=Array(n);for(var i=0;i!==n;++i)dstPlanes[i]=srcPlanes[i].clone()}this.clippingPlanes=dstPlanes;this.shadowSide=source.shadowSide;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Material$1={Material:Material};_exports.$Material=Material$1;function LineBasicMaterial(parameters){Material.call(this);this.type="LineBasicMaterial";this.color=new Color(16777215);this.linewidth=1;this.linecap="round";this.linejoin="round";this.lights=!1;this.setValues(parameters)}LineBasicMaterial.prototype=Object.create(Material.prototype);LineBasicMaterial.prototype.constructor=LineBasicMaterial;LineBasicMaterial.prototype.isLineBasicMaterial=!0;LineBasicMaterial.prototype.copy=function(source){Material.prototype.copy.call(this,source);this.color.copy(source.color);this.linewidth=source.linewidth;this.linecap=source.linecap;this.linejoin=source.linejoin;return this};var LineBasicMaterial$1={LineBasicMaterial:LineBasicMaterial};_exports.$LineBasicMaterial=LineBasicMaterial$1;function Line(geometry,material,mode){if(1===mode){console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.")}Object3D.call(this);this.type="Line";this.geometry=geometry!==void 0?geometry:new BufferGeometry;this.material=material!==void 0?material:new LineBasicMaterial({color:16777215*Math.random()})}Line.prototype=Object.assign(Object.create(Object3D.prototype),{constructor:Line,isLine:!0,computeLineDistances:function(){var start=new Vector3,end=new Vector3;return function computeLineDistances(){var geometry=this.geometry;if(geometry.isBufferGeometry){if(null===geometry.index){for(var positionAttribute=geometry.attributes.position,lineDistances=[0],i=1,l=positionAttribute.count;i<l;i++){start.fromBufferAttribute(positionAttribute,i-1);end.fromBufferAttribute(positionAttribute,i);lineDistances[i]=lineDistances[i-1];lineDistances[i]+=start.distanceTo(end)}geometry.addAttribute("lineDistance",new Float32BufferAttribute(lineDistances,1))}else{console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.")}}else if(geometry.isGeometry){var vertices=geometry.vertices,lineDistances=geometry.lineDistances;lineDistances[0]=0;for(var i=1,l=vertices.length;i<l;i++){lineDistances[i]=lineDistances[i-1];lineDistances[i]+=vertices[i-1].distanceTo(vertices[i])}}return this}}(),raycast:function(){var inverseMatrix=new Matrix4,ray=new Ray,sphere=new Sphere;return function raycast(raycaster,intersects){var precision=raycaster.linePrecision,geometry=this.geometry,matrixWorld=this.matrixWorld;if(null===geometry.boundingSphere)geometry.computeBoundingSphere();sphere.copy(geometry.boundingSphere);sphere.applyMatrix4(matrixWorld);sphere.radius+=precision;if(!1===raycaster.ray.intersectsSphere(sphere))return;inverseMatrix.getInverse(matrixWorld);ray.copy(raycaster.ray).applyMatrix4(inverseMatrix);var localPrecision=precision/((this.scale.x+this.scale.y+this.scale.z)/3),localPrecisionSq=localPrecision*localPrecision,vStart=new Vector3,vEnd=new Vector3,interSegment=new Vector3,interRay=new Vector3,step=this&&this.isLineSegments?2:1;if(geometry.isBufferGeometry){var index=geometry.index,attributes=geometry.attributes,positions=attributes.position.array;if(null!==index){for(var indices=index.array,i=0,l=indices.length-1;i<l;i+=step){var a=indices[i],b=indices[i+1];vStart.fromArray(positions,3*a);vEnd.fromArray(positions,3*b);var distSq=ray.distanceSqToSegment(vStart,vEnd,interRay,interSegment);if(distSq>localPrecisionSq)continue;interRay.applyMatrix4(this.matrixWorld);var distance=raycaster.ray.origin.distanceTo(interRay);if(distance<raycaster.near||distance>raycaster.far)continue;intersects.push({distance:distance,point:interSegment.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}else{for(var i=0,l=positions.length/3-1;i<l;i+=step){vStart.fromArray(positions,3*i);vEnd.fromArray(positions,3*i+3);var distSq=ray.distanceSqToSegment(vStart,vEnd,interRay,interSegment);if(distSq>localPrecisionSq)continue;interRay.applyMatrix4(this.matrixWorld);var distance=raycaster.ray.origin.distanceTo(interRay);if(distance<raycaster.near||distance>raycaster.far)continue;intersects.push({distance:distance,point:interSegment.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}}else if(geometry.isGeometry){for(var vertices=geometry.vertices,nbVertices=vertices.length,i=0,distSq;i<nbVertices-1;i+=step){distSq=ray.distanceSqToSegment(vertices[i],vertices[i+1],interRay,interSegment);if(distSq>localPrecisionSq)continue;interRay.applyMatrix4(this.matrixWorld);var distance=raycaster.ray.origin.distanceTo(interRay);if(distance<raycaster.near||distance>raycaster.far)continue;intersects.push({distance:distance,point:interSegment.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}}}(),copy:function(source){Object3D.prototype.copy.call(this,source);this.geometry.copy(source.geometry);this.material.copy(source.material);return this},clone:function(){return new this.constructor().copy(this)}});var Line$1={Line:Line};_exports.$Line=Line$1;function LineSegments(geometry,material){Line.call(this,geometry,material);this.type="LineSegments"}LineSegments.prototype=Object.assign(Object.create(Line.prototype),{constructor:LineSegments,isLineSegments:!0,computeLineDistances:function(){var start=new Vector3,end=new Vector3;return function computeLineDistances(){var geometry=this.geometry;if(geometry.isBufferGeometry){if(null===geometry.index){for(var positionAttribute=geometry.attributes.position,lineDistances=[],i=0,l=positionAttribute.count;i<l;i+=2){start.fromBufferAttribute(positionAttribute,i);end.fromBufferAttribute(positionAttribute,i+1);lineDistances[i]=0===i?0:lineDistances[i-1];lineDistances[i+1]=lineDistances[i]+start.distanceTo(end)}geometry.addAttribute("lineDistance",new Float32BufferAttribute(lineDistances,1))}else{console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.")}}else if(geometry.isGeometry){for(var vertices=geometry.vertices,lineDistances=geometry.lineDistances,i=0,l=vertices.length;i<l;i+=2){start.copy(vertices[i]);end.copy(vertices[i+1]);lineDistances[i]=0===i?0:lineDistances[i-1];lineDistances[i+1]=lineDistances[i]+start.distanceTo(end)}}return this}}()});var LineSegments$1={LineSegments:LineSegments};_exports.$LineSegments=LineSegments$1;function AxesHelper(size){size=size||1;var vertices=[0,0,0,size,0,0,0,0,0,0,size,0,0,0,0,0,0,size],colors=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],geometry=new BufferGeometry;geometry.addAttribute("position",new Float32BufferAttribute(vertices,3));geometry.addAttribute("color",new Float32BufferAttribute(colors,3));var material=new LineBasicMaterial({vertexColors:VertexColors});LineSegments.call(this,geometry,material)}AxesHelper.prototype=Object.create(LineSegments.prototype);AxesHelper.prototype.constructor=AxesHelper;var AxesHelper$1={AxesHelper:AxesHelper};_exports.$AxesHelper=AxesHelper$1;function Light(color,intensity){Object3D.call(this);this.type="Light";this.color=new Color(color);this.intensity=intensity!==void 0?intensity:1;this.receiveShadow=void 0}Light.prototype=Object.assign(Object.create(Object3D.prototype),{constructor:Light,isLight:!0,copy:function(source){Object3D.prototype.copy.call(this,source);this.color.copy(source.color);this.intensity=source.intensity;return this},toJSON:function(meta){var data=Object3D.prototype.toJSON.call(this,meta);data.object.color=this.color.getHex();data.object.intensity=this.intensity;if(this.groundColor!==void 0)data.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)data.object.distance=this.distance;if(this.angle!==void 0)data.object.angle=this.angle;if(this.decay!==void 0)data.object.decay=this.decay;if(this.penumbra!==void 0)data.object.penumbra=this.penumbra;if(this.shadow!==void 0)data.object.shadow=this.shadow.toJSON();return data}});var Light$1={Light:Light};_exports.$Light=Light$1;function LightShadow(camera){this.camera=camera;this.bias=0;this.radius=1;this.mapSize=new Vector2(512,512);this.map=null;this.matrix=new Matrix4}Object.assign(LightShadow.prototype,{copy:function(source){this.camera=source.camera.clone();this.bias=source.bias;this.radius=source.radius;this.mapSize.copy(source.mapSize);return this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){var object={};if(0!==this.bias)object.bias=this.bias;if(1!==this.radius)object.radius=this.radius;if(512!==this.mapSize.x||512!==this.mapSize.y)object.mapSize=this.mapSize.toArray();object.camera=this.camera.toJSON(!1).object;delete object.camera.matrix;return object}});var LightShadow$1={LightShadow:LightShadow};_exports.$LightShadow=LightShadow$1;function DirectionalLightShadow(){LightShadow.call(this,new OrthographicCamera(-5,5,5,-5,.5,500))}DirectionalLightShadow.prototype=Object.assign(Object.create(LightShadow.prototype),{constructor:DirectionalLightShadow});var DirectionalLightShadow$1={DirectionalLightShadow:DirectionalLightShadow};_exports.$DirectionalLightShadow=DirectionalLightShadow$1;function DirectionalLight(color,intensity){Light.call(this,color,intensity);this.type="DirectionalLight";this.position.copy(Object3D.DefaultUp);this.updateMatrix();this.target=new Object3D;this.shadow=new DirectionalLightShadow}DirectionalLight.prototype=Object.assign(Object.create(Light.prototype),{constructor:DirectionalLight,isDirectionalLight:!0,copy:function(source){Light.prototype.copy.call(this,source);this.target=source.target.clone();this.shadow=source.shadow.clone();return this}});var DirectionalLight$1={DirectionalLight:DirectionalLight};_exports.$DirectionalLight=DirectionalLight$1;function MeshBasicMaterial(parameters){Material.call(this);this.type="MeshBasicMaterial";this.color=new Color(16777215);this.map=null;this.lightMap=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.specularMap=null;this.alphaMap=null;this.envMap=null;this.combine=MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinecap="round";this.wireframeLinejoin="round";this.skinning=!1;this.morphTargets=!1;this.lights=!1;this.setValues(parameters)}MeshBasicMaterial.prototype=Object.create(Material.prototype);MeshBasicMaterial.prototype.constructor=MeshBasicMaterial;MeshBasicMaterial.prototype.isMeshBasicMaterial=!0;MeshBasicMaterial.prototype.copy=function(source){Material.prototype.copy.call(this,source);this.color.copy(source.color);this.map=source.map;this.lightMap=source.lightMap;this.lightMapIntensity=source.lightMapIntensity;this.aoMap=source.aoMap;this.aoMapIntensity=source.aoMapIntensity;this.specularMap=source.specularMap;this.alphaMap=source.alphaMap;this.envMap=source.envMap;this.combine=source.combine;this.reflectivity=source.reflectivity;this.refractionRatio=source.refractionRatio;this.wireframe=source.wireframe;this.wireframeLinewidth=source.wireframeLinewidth;this.wireframeLinecap=source.wireframeLinecap;this.wireframeLinejoin=source.wireframeLinejoin;this.skinning=source.skinning;this.morphTargets=source.morphTargets;return this};var MeshBasicMaterial$1={MeshBasicMaterial:MeshBasicMaterial};_exports.$MeshBasicMaterial=MeshBasicMaterial$1;function MeshDepthMaterial(parameters){Material.call(this);this.type="MeshDepthMaterial";this.depthPacking=BasicDepthPacking;this.skinning=!1;this.morphTargets=!1;this.map=null;this.alphaMap=null;this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.fog=!1;this.lights=!1;this.setValues(parameters)}MeshDepthMaterial.prototype=Object.create(Material.prototype);MeshDepthMaterial.prototype.constructor=MeshDepthMaterial;MeshDepthMaterial.prototype.isMeshDepthMaterial=!0;MeshDepthMaterial.prototype.copy=function(source){Material.prototype.copy.call(this,source);this.depthPacking=source.depthPacking;this.skinning=source.skinning;this.morphTargets=source.morphTargets;this.map=source.map;this.alphaMap=source.alphaMap;this.displacementMap=source.displacementMap;this.displacementScale=source.displacementScale;this.displacementBias=source.displacementBias;this.wireframe=source.wireframe;this.wireframeLinewidth=source.wireframeLinewidth;return this};var MeshDepthMaterial$1={MeshDepthMaterial:MeshDepthMaterial};_exports.$MeshDepthMaterial=MeshDepthMaterial$1;function MeshDistanceMaterial(parameters){Material.call(this);this.type="MeshDistanceMaterial";this.referencePosition=new Vector3;this.nearDistance=1;this.farDistance=1e3;this.skinning=!1;this.morphTargets=!1;this.map=null;this.alphaMap=null;this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.fog=!1;this.lights=!1;this.setValues(parameters)}MeshDistanceMaterial.prototype=Object.create(Material.prototype);MeshDistanceMaterial.prototype.constructor=MeshDistanceMaterial;MeshDistanceMaterial.prototype.isMeshDistanceMaterial=!0;MeshDistanceMaterial.prototype.copy=function(source){Material.prototype.copy.call(this,source);this.referencePosition.copy(source.referencePosition);this.nearDistance=source.nearDistance;this.farDistance=source.farDistance;this.skinning=source.skinning;this.morphTargets=source.morphTargets;this.map=source.map;this.alphaMap=source.alphaMap;this.displacementMap=source.displacementMap;this.displacementScale=source.displacementScale;this.displacementBias=source.displacementBias;return this};var MeshDistanceMaterial$1={MeshDistanceMaterial:MeshDistanceMaterial};_exports.$MeshDistanceMaterial=MeshDistanceMaterial$1;function MeshPhongMaterial(parameters){Material.call(this);this.type="MeshPhongMaterial";this.color=new Color(16777215);this.specular=new Color(1118481);this.shininess=30;this.map=null;this.lightMap=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new Color(0);this.emissiveIntensity=1;this.emissiveMap=null;this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=TangentSpaceNormalMap;this.normalScale=new Vector2(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.specularMap=null;this.alphaMap=null;this.envMap=null;this.combine=MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinecap="round";this.wireframeLinejoin="round";this.skinning=!1;this.morphTargets=!1;this.morphNormals=!1;this.setValues(parameters)}MeshPhongMaterial.prototype=Object.create(Material.prototype);MeshPhongMaterial.prototype.constructor=MeshPhongMaterial;MeshPhongMaterial.prototype.isMeshPhongMaterial=!0;MeshPhongMaterial.prototype.copy=function(source){Material.prototype.copy.call(this,source);this.color.copy(source.color);this.specular.copy(source.specular);this.shininess=source.shininess;this.map=source.map;this.lightMap=source.lightMap;this.lightMapIntensity=source.lightMapIntensity;this.aoMap=source.aoMap;this.aoMapIntensity=source.aoMapIntensity;this.emissive.copy(source.emissive);this.emissiveMap=source.emissiveMap;this.emissiveIntensity=source.emissiveIntensity;this.bumpMap=source.bumpMap;this.bumpScale=source.bumpScale;this.normalMap=source.normalMap;this.normalMapType=source.normalMapType;this.normalScale.copy(source.normalScale);this.displacementMap=source.displacementMap;this.displacementScale=source.displacementScale;this.displacementBias=source.displacementBias;this.specularMap=source.specularMap;this.alphaMap=source.alphaMap;this.envMap=source.envMap;this.combine=source.combine;this.reflectivity=source.reflectivity;this.refractionRatio=source.refractionRatio;this.wireframe=source.wireframe;this.wireframeLinewidth=source.wireframeLinewidth;this.wireframeLinecap=source.wireframeLinecap;this.wireframeLinejoin=source.wireframeLinejoin;this.skinning=source.skinning;this.morphTargets=source.morphTargets;this.morphNormals=source.morphNormals;return this};var MeshPhongMaterial$1={MeshPhongMaterial:MeshPhongMaterial};_exports.$MeshPhongMaterial=MeshPhongMaterial$1;function cloneUniforms(src){var dst={};for(var u in src){dst[u]={};for(var p in src[u]){var property=src[u][p];if(property&&(property.isColor||property.isMatrix3||property.isMatrix4||property.isVector2||property.isVector3||property.isVector4||property.isTexture)){dst[u][p]=property.clone()}else if(Array.isArray(property)){dst[u][p]=property.slice()}else{dst[u][p]=property}}}return dst}function mergeUniforms(uniforms){for(var merged={},u=0,tmp;u<uniforms.length;u++){tmp=cloneUniforms(uniforms[u]);for(var p in tmp){merged[p]=tmp[p]}}return merged}var UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};_exports.UniformsUtils=UniformsUtils;var UniformsUtils$1={cloneUniforms:cloneUniforms,mergeUniforms:mergeUniforms,UniformsUtils:UniformsUtils};_exports.$UniformsUtils=UniformsUtils$1;function ShaderMaterial(parameters){Material.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.fog=!1;this.lights=!1;this.clipping=!1;this.skinning=!1;this.morphTargets=!1;this.morphNormals=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.uniformsNeedUpdate=!1;if(parameters!==void 0){if(parameters.attributes!==void 0){console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.")}this.setValues(parameters)}}ShaderMaterial.prototype=Object.create(Material.prototype);ShaderMaterial.prototype.constructor=ShaderMaterial;ShaderMaterial.prototype.isShaderMaterial=!0;ShaderMaterial.prototype.copy=function(source){Material.prototype.copy.call(this,source);this.fragmentShader=source.fragmentShader;this.vertexShader=source.vertexShader;this.uniforms=cloneUniforms(source.uniforms);this.defines=Object.assign({},source.defines);this.wireframe=source.wireframe;this.wireframeLinewidth=source.wireframeLinewidth;this.lights=source.lights;this.clipping=source.clipping;this.skinning=source.skinning;this.morphTargets=source.morphTargets;this.morphNormals=source.morphNormals;this.extensions=source.extensions;return this};ShaderMaterial.prototype.toJSON=function(meta){var data=Material.prototype.toJSON.call(this,meta);data.uniforms={};for(var name in this.uniforms){var uniform=this.uniforms[name],value=uniform.value;if(value&&value.isTexture){data.uniforms[name]={type:"t",value:value.toJSON(meta).uuid}}else if(value&&value.isColor){data.uniforms[name]={type:"c",value:value.getHex()}}else if(value&&value.isVector2){data.uniforms[name]={type:"v2",value:value.toArray()}}else if(value&&value.isVector3){data.uniforms[name]={type:"v3",value:value.toArray()}}else if(value&&value.isVector4){data.uniforms[name]={type:"v4",value:value.toArray()}}else if(value&&value.isMatrix3){data.uniforms[name]={type:"m3",value:value.toArray()}}else if(value&&value.isMatrix4){data.uniforms[name]={type:"m4",value:value.toArray()}}else{data.uniforms[name]={value:value}}}if(0<Object.keys(this.defines).length)data.defines=this.defines;data.vertexShader=this.vertexShader;data.fragmentShader=this.fragmentShader;var extensions={};for(var key in this.extensions){if(!0===this.extensions[key])extensions[key]=!0}if(0<Object.keys(extensions).length)data.extensions=extensions;return data};var ShaderMaterial$1={ShaderMaterial:ShaderMaterial};_exports.$ShaderMaterial=ShaderMaterial$1;function Plane(normal,constant){this.normal=normal!==void 0?normal:new Vector3(1,0,0);this.constant=constant!==void 0?constant:0}Object.assign(Plane.prototype,{set:function(normal,constant){this.normal.copy(normal);this.constant=constant;return this},setComponents:function(x,y,z,w){this.normal.set(x,y,z);this.constant=w;return this},setFromNormalAndCoplanarPoint:function(normal,point){this.normal.copy(normal);this.constant=-point.dot(this.normal);return this},setFromCoplanarPoints:function(){var v1=new Vector3,v2=new Vector3;return function setFromCoplanarPoints(a,b,c){var normal=v1.subVectors(c,b).cross(v2.subVectors(a,b)).normalize();this.setFromNormalAndCoplanarPoint(normal,a);return this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(plane){this.normal.copy(plane.normal);this.constant=plane.constant;return this},normalize:function(){var inverseNormalLength=1/this.normal.length();this.normal.multiplyScalar(inverseNormalLength);this.constant*=inverseNormalLength;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(point){return this.normal.dot(point)+this.constant},distanceToSphere:function(sphere){return this.distanceToPoint(sphere.center)-sphere.radius},projectPoint:function(point,target){if(target===void 0){console.warn("THREE.Plane: .projectPoint() target is now required");target=new Vector3}return target.copy(this.normal).multiplyScalar(-this.distanceToPoint(point)).add(point)},intersectLine:function(){var v1=new Vector3;return function intersectLine(line,target){if(target===void 0){console.warn("THREE.Plane: .intersectLine() target is now required");target=new Vector3}var direction=line.delta(v1),denominator=this.normal.dot(direction);if(0===denominator){if(0===this.distanceToPoint(line.start)){return target.copy(line.start)}return}var t=-(line.start.dot(this.normal)+this.constant)/denominator;if(0>t||1<t){return}return target.copy(direction).multiplyScalar(t).add(line.start)}}(),intersectsLine:function(line){var startSign=this.distanceToPoint(line.start),endSign=this.distanceToPoint(line.end);return 0>startSign&&0<endSign||0>endSign&&0<startSign},intersectsBox:function(box){return box.intersectsPlane(this)},intersectsSphere:function(sphere){return sphere.intersectsPlane(this)},coplanarPoint:function(target){if(target===void 0){console.warn("THREE.Plane: .coplanarPoint() target is now required");target=new Vector3}return target.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var v1=new Vector3,m1=new Matrix3;return function applyMatrix4(matrix,optionalNormalMatrix){var normalMatrix=optionalNormalMatrix||m1.getNormalMatrix(matrix),referencePoint=this.coplanarPoint(v1).applyMatrix4(matrix),normal=this.normal.applyMatrix3(normalMatrix).normalize();this.constant=-referencePoint.dot(normal);return this}}(),translate:function(offset){this.constant-=offset.dot(this.normal);return this},equals:function(plane){return plane.normal.equals(this.normal)&&plane.constant===this.constant}});var Plane$1={Plane:Plane};_exports.$Plane=Plane$1;function Frustum(p0,p1,p2,p3,p4,p5){this.planes=[p0!==void 0?p0:new Plane,p1!==void 0?p1:new Plane,p2!==void 0?p2:new Plane,p3!==void 0?p3:new Plane,p4!==void 0?p4:new Plane,p5!==void 0?p5:new Plane]}Object.assign(Frustum.prototype,{set:function(p0,p1,p2,p3,p4,p5){var planes=this.planes;planes[0].copy(p0);planes[1].copy(p1);planes[2].copy(p2);planes[3].copy(p3);planes[4].copy(p4);planes[5].copy(p5);return this},clone:function(){return new this.constructor().copy(this)},copy:function(frustum){for(var planes=this.planes,i=0;6>i;i++){planes[i].copy(frustum.planes[i])}return this},setFromMatrix:function(m){var planes=this.planes,me=m.elements,me0=me[0],me1=me[1],me2=me[2],me3=me[3],me4=me[4],me5=me[5],me6=me[6],me7=me[7],me8=me[8],me9=me[9],me10=me[10],me11=me[11],me12=me[12],me13=me[13],me14=me[14],me15=me[15];planes[0].setComponents(me3-me0,me7-me4,me11-me8,me15-me12).normalize();planes[1].setComponents(me3+me0,me7+me4,me11+me8,me15+me12).normalize();planes[2].setComponents(me3+me1,me7+me5,me11+me9,me15+me13).normalize();planes[3].setComponents(me3-me1,me7-me5,me11-me9,me15-me13).normalize();planes[4].setComponents(me3-me2,me7-me6,me11-me10,me15-me14).normalize();planes[5].setComponents(me3+me2,me7+me6,me11+me10,me15+me14).normalize();return this},intersectsObject:function(){var sphere=new Sphere;return function intersectsObject(object){var geometry=object.geometry;if(null===geometry.boundingSphere)geometry.computeBoundingSphere();sphere.copy(geometry.boundingSphere).applyMatrix4(object.matrixWorld);return this.intersectsSphere(sphere)}}(),intersectsSprite:function(){var sphere=new Sphere;return function intersectsSprite(sprite){sphere.center.set(0,0,0);sphere.radius=.7071067811865476;sphere.applyMatrix4(sprite.matrixWorld);return this.intersectsSphere(sphere)}}(),intersectsSphere:function(sphere){for(var planes=this.planes,center=sphere.center,negRadius=-sphere.radius,i=0,distance;6>i;i++){distance=planes[i].distanceToPoint(center);if(distance<negRadius){return!1}}return!0},intersectsBox:function(){var p=new Vector3;return function intersectsBox(box){for(var planes=this.planes,i=0,plane;6>i;i++){plane=planes[i];p.x=0<plane.normal.x?box.max.x:box.min.x;p.y=0<plane.normal.y?box.max.y:box.min.y;p.z=0<plane.normal.z?box.max.z:box.min.z;if(0>plane.distanceToPoint(p)){return!1}}return!0}}(),containsPoint:function(point){for(var planes=this.planes,i=0;6>i;i++){if(0>planes[i].distanceToPoint(point)){return!1}}return!0}});var Frustum$1={Frustum:Frustum};_exports.$Frustum=Frustum$1;function Spherical(radius,phi,theta){this.radius=radius!==void 0?radius:1;this.phi=phi!==void 0?phi:0;this.theta=theta!==void 0?theta:0;return this}Object.assign(Spherical.prototype,{set:function(radius,phi,theta){this.radius=radius;this.phi=phi;this.theta=theta;return this},clone:function(){return new this.constructor().copy(this)},copy:function(other){this.radius=other.radius;this.phi=other.phi;this.theta=other.theta;return this},makeSafe:function(){var EPS=1e-6;this.phi=_Mathmax(EPS,_Mathmin(_MathPI-EPS,this.phi));return this},setFromVector3:function(v){return this.setFromCartesianCoords(v.x,v.y,v.z)},setFromCartesianCoords:function(x,y,z){this.radius=_Mathsqrt(x*x+y*y+z*z);if(0===this.radius){this.theta=0;this.phi=0}else{this.theta=_Mathatan(x,z);this.phi=_Mathacos(_Math.clamp(y/this.radius,-1,1))}return this}});var Spherical$1={Spherical:Spherical};_exports.$Spherical=Spherical$1;function Triangle(a,b,c){this.a=a!==void 0?a:new Vector3;this.b=b!==void 0?b:new Vector3;this.c=c!==void 0?c:new Vector3}Object.assign(Triangle,{getNormal:function(){var v0=new Vector3;return function getNormal(a,b,c,target){if(target===void 0){console.warn("THREE.Triangle: .getNormal() target is now required");target=new Vector3}target.subVectors(c,b);v0.subVectors(a,b);target.cross(v0);var targetLengthSq=target.lengthSq();if(0<targetLengthSq){return target.multiplyScalar(1/_Mathsqrt(targetLengthSq))}return target.set(0,0,0)}}(),getBarycoord:function(){var v0=new Vector3,v1=new Vector3,v2=new Vector3;return function getBarycoord(point,a,b,c,target){v0.subVectors(c,a);v1.subVectors(b,a);v2.subVectors(point,a);var dot00=v0.dot(v0),dot01=v0.dot(v1),dot02=v0.dot(v2),dot11=v1.dot(v1),dot12=v1.dot(v2),denom=dot00*dot11-dot01*dot01;if(target===void 0){console.warn("THREE.Triangle: .getBarycoord() target is now required");target=new Vector3}if(0===denom){return target.set(-2,-1,-1)}var invDenom=1/denom,u=(dot11*dot02-dot01*dot12)*invDenom,v=(dot00*dot12-dot01*dot02)*invDenom;return target.set(1-u-v,v,u)}}(),containsPoint:function(){var v1=new Vector3;return function containsPoint(point,a,b,c){Triangle.getBarycoord(point,a,b,c,v1);return 0<=v1.x&&0<=v1.y&&1>=v1.x+v1.y}}(),getUV:function(){var barycoord=new Vector3;return function getUV(point,p1,p2,p3,uv1,uv2,uv3,target){this.getBarycoord(point,p1,p2,p3,barycoord);target.set(0,0);target.addScaledVector(uv1,barycoord.x);target.addScaledVector(uv2,barycoord.y);target.addScaledVector(uv3,barycoord.z);return target}}()});Object.assign(Triangle.prototype,{set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(points,i0,i1,i2){this.a.copy(points[i0]);this.b.copy(points[i1]);this.c.copy(points[i2]);return this},clone:function(){return new this.constructor().copy(this)},copy:function(triangle){this.a.copy(triangle.a);this.b.copy(triangle.b);this.c.copy(triangle.c);return this},getArea:function(){var v0=new Vector3,v1=new Vector3;return function getArea(){v0.subVectors(this.c,this.b);v1.subVectors(this.a,this.b);return .5*v0.cross(v1).length()}}(),getMidpoint:function(target){if(target===void 0){console.warn("THREE.Triangle: .getMidpoint() target is now required");target=new Vector3}return target.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(target){return Triangle.getNormal(this.a,this.b,this.c,target)},getPlane:function(target){if(target===void 0){console.warn("THREE.Triangle: .getPlane() target is now required");target=new Vector3}return target.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(point,target){return Triangle.getBarycoord(point,this.a,this.b,this.c,target)},containsPoint:function(point){return Triangle.containsPoint(point,this.a,this.b,this.c)},getUV:function(point,uv1,uv2,uv3,result){return Triangle.getUV(point,this.a,this.b,this.c,uv1,uv2,uv3,result)},intersectsBox:function(box){return box.intersectsTriangle(this)},closestPointToPoint:function(){var vab=new Vector3,vac=new Vector3,vbc=new Vector3,vap=new Vector3,vbp=new Vector3,vcp=new Vector3;return function closestPointToPoint(p,target){if(target===void 0){console.warn("THREE.Triangle: .closestPointToPoint() target is now required");target=new Vector3}var a=this.a,b=this.b,c=this.c,v,w;vab.subVectors(b,a);vac.subVectors(c,a);vap.subVectors(p,a);var d1=vab.dot(vap),d2=vac.dot(vap);if(0>=d1&&0>=d2){return target.copy(a)}vbp.subVectors(p,b);var d3=vab.dot(vbp),d4=vac.dot(vbp);if(0<=d3&&d4<=d3){return target.copy(b)}var vc=d1*d4-d3*d2;if(0>=vc&&0<=d1&&0>=d3){v=d1/(d1-d3);return target.copy(a).addScaledVector(vab,v)}vcp.subVectors(p,c);var d5=vab.dot(vcp),d6=vac.dot(vcp);if(0<=d6&&d5<=d6){return target.copy(c)}var vb=d5*d2-d1*d6;if(0>=vb&&0<=d2&&0>=d6){w=d2/(d2-d6);return target.copy(a).addScaledVector(vac,w)}var va=d3*d6-d5*d4;if(0>=va&&0<=d4-d3&&0<=d5-d6){vbc.subVectors(c,b);w=(d4-d3)/(d4-d3+(d5-d6));return target.copy(b).addScaledVector(vbc,w)}var denom=1/(va+vb+vc);v=vb*denom;w=vc*denom;return target.copy(a).addScaledVector(vab,v).addScaledVector(vac,w)}}(),equals:function(triangle){return triangle.a.equals(this.a)&&triangle.b.equals(this.b)&&triangle.c.equals(this.c)}});var Triangle$1={Triangle:Triangle};_exports.$Triangle=Triangle$1;function Group(){Object3D.call(this);this.type="Group"}Group.prototype=Object.assign(Object.create(Object3D.prototype),{constructor:Group,isGroup:!0});var Group$1={Group:Group};_exports.$Group=Group$1;function Mesh(geometry,material){Object3D.call(this);this.type="Mesh";this.geometry=geometry!==void 0?geometry:new BufferGeometry;this.material=material!==void 0?material:new MeshBasicMaterial({color:16777215*Math.random()});this.drawMode=TrianglesDrawMode;this.updateMorphTargets()}Mesh.prototype=Object.assign(Object.create(Object3D.prototype),{constructor:Mesh,isMesh:!0,setDrawMode:function(value){this.drawMode=value},copy:function(source){Object3D.prototype.copy.call(this,source);this.drawMode=source.drawMode;if(source.morphTargetInfluences!==void 0){this.morphTargetInfluences=source.morphTargetInfluences.slice()}if(source.morphTargetDictionary!==void 0){this.morphTargetDictionary=Object.assign({},source.morphTargetDictionary)}return this},updateMorphTargets:function(){var geometry=this.geometry,m,ml,name;if(geometry.isBufferGeometry){var morphAttributes=geometry.morphAttributes,keys=Object.keys(morphAttributes);if(0<keys.length){var morphAttribute=morphAttributes[keys[0]];if(morphAttribute!==void 0){this.morphTargetInfluences=[];this.morphTargetDictionary={};for(m=0,ml=morphAttribute.length;m<ml;m++){name=morphAttribute[m].name||m+"";this.morphTargetInfluences.push(0);this.morphTargetDictionary[name]=m}}}}else{var morphTargets=geometry.morphTargets;if(morphTargets!==void 0&&0<morphTargets.length){console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}},raycast:function(){var inverseMatrix=new Matrix4,ray=new Ray,sphere=new Sphere,vA=new Vector3,vB=new Vector3,vC=new Vector3,tempA=new Vector3,tempB=new Vector3,tempC=new Vector3,uvA=new Vector2,uvB=new Vector2,uvC=new Vector2,intersectionPoint=new Vector3,intersectionPointWorld=new Vector3;function checkIntersection(object,material,raycaster,ray,pA,pB,pC,point){var intersect;if(material.side===BackSide){intersect=ray.intersectTriangle(pC,pB,pA,!0,point)}else{intersect=ray.intersectTriangle(pA,pB,pC,material.side!==DoubleSide,point)}if(null===intersect)return null;intersectionPointWorld.copy(point);intersectionPointWorld.applyMatrix4(object.matrixWorld);var distance=raycaster.ray.origin.distanceTo(intersectionPointWorld);if(distance<raycaster.near||distance>raycaster.far)return null;return{distance:distance,point:intersectionPointWorld.clone(),object:object}}function checkBufferGeometryIntersection(object,material,raycaster,ray,position,uv,a,b,c){vA.fromBufferAttribute(position,a);vB.fromBufferAttribute(position,b);vC.fromBufferAttribute(position,c);var intersection=checkIntersection(object,material,raycaster,ray,vA,vB,vC,intersectionPoint);if(intersection){if(uv){uvA.fromBufferAttribute(uv,a);uvB.fromBufferAttribute(uv,b);uvC.fromBufferAttribute(uv,c);intersection.uv=Triangle.getUV(intersectionPoint,vA,vB,vC,uvA,uvB,uvC,new Vector2)}var face=new Face3(a,b,c);Triangle.getNormal(vA,vB,vC,face.normal);intersection.face=face}return intersection}return function raycast(raycaster,intersects){var geometry=this.geometry,material=this.material,matrixWorld=this.matrixWorld;if(material===void 0)return;if(null===geometry.boundingSphere)geometry.computeBoundingSphere();sphere.copy(geometry.boundingSphere);sphere.applyMatrix4(matrixWorld);if(!1===raycaster.ray.intersectsSphere(sphere))return;inverseMatrix.getInverse(matrixWorld);ray.copy(raycaster.ray).applyMatrix4(inverseMatrix);if(null!==geometry.boundingBox){if(!1===ray.intersectsBox(geometry.boundingBox))return}var intersection;if(geometry.isBufferGeometry){var a,b,c,index=geometry.index,position=geometry.attributes.position,uv=geometry.attributes.uv,groups=geometry.groups,drawRange=geometry.drawRange,i,j,il,jl,group,groupMaterial,start,end;if(null!==index){if(Array.isArray(material)){for(i=0,il=groups.length;i<il;i++){group=groups[i];groupMaterial=material[group.materialIndex];start=_Mathmax(group.start,drawRange.start);end=_Mathmin(group.start+group.count,drawRange.start+drawRange.count);for(j=start,jl=end;j<jl;j+=3){a=index.getX(j);b=index.getX(j+1);c=index.getX(j+2);intersection=checkBufferGeometryIntersection(this,groupMaterial,raycaster,ray,position,uv,a,b,c);if(intersection){intersection.faceIndex=_Mathfloor(j/3);intersection.face.materialIndex=group.materialIndex;intersects.push(intersection)}}}}else{start=_Mathmax(0,drawRange.start);end=_Mathmin(index.count,drawRange.start+drawRange.count);for(i=start,il=end;i<il;i+=3){a=index.getX(i);b=index.getX(i+1);c=index.getX(i+2);intersection=checkBufferGeometryIntersection(this,material,raycaster,ray,position,uv,a,b,c);if(intersection){intersection.faceIndex=_Mathfloor(i/3);intersects.push(intersection)}}}}else if(position!==void 0){if(Array.isArray(material)){for(i=0,il=groups.length;i<il;i++){group=groups[i];groupMaterial=material[group.materialIndex];start=_Mathmax(group.start,drawRange.start);end=_Mathmin(group.start+group.count,drawRange.start+drawRange.count);for(j=start,jl=end;j<jl;j+=3){a=j;b=j+1;c=j+2;intersection=checkBufferGeometryIntersection(this,groupMaterial,raycaster,ray,position,uv,a,b,c);if(intersection){intersection.faceIndex=_Mathfloor(j/3);intersection.face.materialIndex=group.materialIndex;intersects.push(intersection)}}}}else{start=_Mathmax(0,drawRange.start);end=_Mathmin(position.count,drawRange.start+drawRange.count);for(i=start,il=end;i<il;i+=3){a=i;b=i+1;c=i+2;intersection=checkBufferGeometryIntersection(this,material,raycaster,ray,position,uv,a,b,c);if(intersection){intersection.faceIndex=_Mathfloor(i/3);intersects.push(intersection)}}}}}else if(geometry.isGeometry){var fvA,fvB,fvC,isMultiMaterial=Array.isArray(material),vertices=geometry.vertices,faces=geometry.faces,uvs,faceVertexUvs=geometry.faceVertexUvs[0];if(0<faceVertexUvs.length)uvs=faceVertexUvs;for(var f=0,fl=faces.length;f<fl;f++){var face=faces[f],faceMaterial=isMultiMaterial?material[face.materialIndex]:material;if(faceMaterial===void 0)continue;fvA=vertices[face.a];fvB=vertices[face.b];fvC=vertices[face.c];if(!0===faceMaterial.morphTargets){var morphTargets=geometry.morphTargets,morphInfluences=this.morphTargetInfluences;vA.set(0,0,0);vB.set(0,0,0);vC.set(0,0,0);for(var t=0,tl=morphTargets.length,influence;t<tl;t++){influence=morphInfluences[t];if(0===influence)continue;var targets=morphTargets[t].vertices;vA.addScaledVector(tempA.subVectors(targets[face.a],fvA),influence);vB.addScaledVector(tempB.subVectors(targets[face.b],fvB),influence);vC.addScaledVector(tempC.subVectors(targets[face.c],fvC),influence)}vA.add(fvA);vB.add(fvB);vC.add(fvC);fvA=vA;fvB=vB;fvC=vC}intersection=checkIntersection(this,faceMaterial,raycaster,ray,fvA,fvB,fvC,intersectionPoint);if(intersection){if(uvs&&uvs[f]){var uvs_f=uvs[f];uvA.copy(uvs_f[0]);uvB.copy(uvs_f[1]);uvC.copy(uvs_f[2]);intersection.uv=Triangle.getUV(intersectionPoint,fvA,fvB,fvC,uvA,uvB,uvC,new Vector2)}intersection.face=face;intersection.faceIndex=f;intersects.push(intersection)}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});var Mesh$1={Mesh:Mesh};_exports.$Mesh=Mesh$1;var textureId=0;function Texture(image,mapping,wrapS,wrapT,magFilter,minFilter,format,type,anisotropy,encoding){Object.defineProperty(this,"id",{value:textureId++});this.uuid=_Math.generateUUID();this.name="";this.image=image!==void 0?image:Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=mapping!==void 0?mapping:Texture.DEFAULT_MAPPING;this.wrapS=wrapS!==void 0?wrapS:ClampToEdgeWrapping;this.wrapT=wrapT!==void 0?wrapT:ClampToEdgeWrapping;this.magFilter=magFilter!==void 0?magFilter:LinearFilter;this.minFilter=minFilter!==void 0?minFilter:LinearMipMapLinearFilter;this.anisotropy=anisotropy!==void 0?anisotropy:1;this.format=format!==void 0?format:RGBAFormat;this.type=type!==void 0?type:UnsignedByteType;this.offset=new Vector2(0,0);this.repeat=new Vector2(1,1);this.center=new Vector2(0,0);this.rotation=0;this.matrixAutoUpdate=!0;this.matrix=new Matrix3;this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=encoding!==void 0?encoding:LinearEncoding;this.version=0;this.onUpdate=null}Texture.DEFAULT_IMAGE=void 0;Texture.DEFAULT_MAPPING=UVMapping;Texture.prototype=Object.assign(Object.create(EventDispatcher.prototype),{constructor:Texture,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(source){this.name=source.name;this.image=source.image;this.mipmaps=source.mipmaps.slice(0);this.mapping=source.mapping;this.wrapS=source.wrapS;this.wrapT=source.wrapT;this.magFilter=source.magFilter;this.minFilter=source.minFilter;this.anisotropy=source.anisotropy;this.format=source.format;this.type=source.type;this.offset.copy(source.offset);this.repeat.copy(source.repeat);this.center.copy(source.center);this.rotation=source.rotation;this.matrixAutoUpdate=source.matrixAutoUpdate;this.matrix.copy(source.matrix);this.generateMipmaps=source.generateMipmaps;this.premultiplyAlpha=source.premultiplyAlpha;this.flipY=source.flipY;this.unpackAlignment=source.unpackAlignment;this.encoding=source.encoding;return this},toJSON:function(meta){var isRootObject=meta===void 0||"string"===typeof meta;if(!isRootObject&&meta.textures[this.uuid]!==void 0){return meta.textures[this.uuid]}var output={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){var image=this.image;if(image.uuid===void 0){image.uuid=_Math.generateUUID()}if(!isRootObject&&meta.images[image.uuid]===void 0){var url;if(Array.isArray(image)){url=[];for(var i=0,l=image.length;i<l;i++){url.push(ImageUtils.getDataURL(image[i]))}}else{url=ImageUtils.getDataURL(image)}meta.images[image.uuid]={uuid:image.uuid,url:url}}output.image=image.uuid}if(!isRootObject){meta.textures[this.uuid]=output}return output},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(uv){if(this.mapping!==UVMapping)return uv;uv.applyMatrix3(this.matrix);if(0>uv.x||1<uv.x){switch(this.wrapS){case RepeatWrapping:uv.x=uv.x-_Mathfloor(uv.x);break;case ClampToEdgeWrapping:uv.x=0>uv.x?0:1;break;case MirroredRepeatWrapping:if(1===_Mathabs(_Mathfloor(uv.x)%2)){uv.x=_Mathceil(uv.x)-uv.x}else{uv.x=uv.x-_Mathfloor(uv.x)}break;}}if(0>uv.y||1<uv.y){switch(this.wrapT){case RepeatWrapping:uv.y=uv.y-_Mathfloor(uv.y);break;case ClampToEdgeWrapping:uv.y=0>uv.y?0:1;break;case MirroredRepeatWrapping:if(1===_Mathabs(_Mathfloor(uv.y)%2)){uv.y=_Mathceil(uv.y)-uv.y}else{uv.y=uv.y-_Mathfloor(uv.y)}break;}}if(this.flipY){uv.y=1-uv.y}return uv}});Object.defineProperty(Texture.prototype,"needsUpdate",{set:function(value){if(!0===value)this.version++}});var Texture$1={Texture:Texture};_exports.$Texture=Texture$1;function WebGLRenderTarget(width,height,options){this.width=width;this.height=height;this.scissor=new Vector4(0,0,width,height);this.scissorTest=!1;this.viewport=new Vector4(0,0,width,height);options=options||{};this.texture=new Texture(void 0,void 0,options.wrapS,options.wrapT,options.magFilter,options.minFilter,options.format,options.type,options.anisotropy,options.encoding);this.texture.generateMipmaps=options.generateMipmaps!==void 0?options.generateMipmaps:!1;this.texture.minFilter=options.minFilter!==void 0?options.minFilter:LinearFilter;this.depthBuffer=options.depthBuffer!==void 0?options.depthBuffer:!0;this.stencilBuffer=options.stencilBuffer!==void 0?options.stencilBuffer:!0;this.depthTexture=options.depthTexture!==void 0?options.depthTexture:null}WebGLRenderTarget.prototype=Object.assign(Object.create(EventDispatcher.prototype),{constructor:WebGLRenderTarget,isWebGLRenderTarget:!0,setSize:function(width,height){if(this.width!==width||this.height!==height){this.width=width;this.height=height;this.dispose()}this.viewport.set(0,0,width,height);this.scissor.set(0,0,width,height)},clone:function(){return new this.constructor().copy(this)},copy:function(source){this.width=source.width;this.height=source.height;this.viewport.copy(source.viewport);this.texture=source.texture.clone();this.depthBuffer=source.depthBuffer;this.stencilBuffer=source.stencilBuffer;this.depthTexture=source.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var WebGLRenderTarget$1={WebGLRenderTarget:WebGLRenderTarget};_exports.$WebGLRenderTarget=WebGLRenderTarget$1;function DataTexture(data,width,height,format,type,mapping,wrapS,wrapT,magFilter,minFilter,anisotropy,encoding){Texture.call(this,null,mapping,wrapS,wrapT,magFilter,minFilter,format,type,anisotropy,encoding);this.image={data:data,width:width,height:height};this.magFilter=magFilter!==void 0?magFilter:NearestFilter;this.minFilter=minFilter!==void 0?minFilter:NearestFilter;this.generateMipmaps=!1;this.flipY=!1;this.unpackAlignment=1}DataTexture.prototype=Object.create(Texture.prototype);DataTexture.prototype.constructor=DataTexture;DataTexture.prototype.isDataTexture=!0;var DataTexture$1={DataTexture:DataTexture};_exports.$DataTexture=DataTexture$1;var alphamap_fragment=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`;_exports.$alphamapFragmentGlslDefault=alphamap_fragment;var alphamap_fragment_glsl={default:alphamap_fragment};_exports.$alphamapFragmentGlsl=alphamap_fragment_glsl;var alphamap_pars_fragment=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;_exports.$alphamapParsFragmentGlslDefault=alphamap_pars_fragment;var alphamap_pars_fragment_glsl={default:alphamap_pars_fragment};_exports.$alphamapParsFragmentGlsl=alphamap_pars_fragment_glsl;var alphatest_fragment=`
#ifdef ALPHATEST

	if ( diffuseColor.a < ALPHATEST ) discard;

#endif
`;_exports.$alphatestFragmentGlslDefault=alphatest_fragment;var alphatest_fragment_glsl={default:alphatest_fragment};_exports.$alphatestFragmentGlsl=alphatest_fragment_glsl;var aomap_fragment=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( PHYSICAL )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );

	#endif

#endif
`;_exports.$aomapFragmentGlslDefault=aomap_fragment;var aomap_fragment_glsl={default:aomap_fragment};_exports.$aomapFragmentGlsl=aomap_fragment_glsl;var aomap_pars_fragment=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;_exports.$aomapParsFragmentGlslDefault=aomap_pars_fragment;var aomap_pars_fragment_glsl={default:aomap_pars_fragment};_exports.$aomapParsFragmentGlsl=aomap_pars_fragment_glsl;var begin_vertex=`
vec3 transformed = vec3( position );
`;_exports.$beginVertexGlslDefault=begin_vertex;var begin_vertex_glsl={default:begin_vertex};_exports.$beginVertexGlsl=begin_vertex_glsl;var beginnormal_vertex=`
vec3 objectNormal = vec3( normal );
`;_exports.$beginnormalVertexGlslDefault=beginnormal_vertex;var beginnormal_vertex_glsl={default:beginnormal_vertex};_exports.$beginnormalVertexGlsl=beginnormal_vertex_glsl;var bsdfs=`

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	return vec2( -1.04, 1.04 ) * a004 + r.zw;

}

float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

#if defined ( PHYSICALLY_CORRECT_LIGHTS )

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	// this is intended to be used on spot and point lights who are represented as luminous intensity
	// but who must be converted to luminous irradiance for surface lighting calculation
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

#else

	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );

	}

	return 1.0;

#endif

}

vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotLH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );

	return ( 1.0 - specularColor ) * fresnel + specularColor;

} // validated

// Microfacet Models for Refraction through Rough Surfaces - equation (34)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {

	// geometry term (normalized) = G(l)⋅G(v) / 4(n⋅l)(n⋅v)
	// also see #12151

	float a2 = pow2( alpha );

	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );

	return 1.0 / ( gl * gv );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	// dotNL and dotNV are explicitly swapped. This is not a mistake.
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );

	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( G * D );

} // validated

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {

	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );

	return specularColor * brdf.x + brdf.y;

} // validated

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {

	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

	vec3 F = F_Schlick( specularColor, dotNV );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;

	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;

	// Paper incorrect indicates coefficient is PI/21, and will
	// be corrected to 1/21 in future updates.
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );

	//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
	//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}

float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
`;_exports.$bsdfsGlslDefault=bsdfs;var bsdfs_glsl={default:bsdfs};_exports.$bsdfsGlsl=bsdfs_glsl;var bumpmap_pars_fragment=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// http://api.unrealengine.com/attachments/Engine/Rendering/LightingAndShadows/BumpMappingWithoutTangentSpace/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 );

		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`;_exports.$bumpmapParsFragmentGlslDefault=bumpmap_pars_fragment;var bumpmap_pars_fragment_glsl={default:bumpmap_pars_fragment};_exports.$bumpmapParsFragmentGlsl=bumpmap_pars_fragment_glsl;var clipping_planes_fragment=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;

	}

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;

		}

		if ( clipped ) discard;

	#endif

#endif
`;_exports.$clippingPlanesFragmentGlslDefault=clipping_planes_fragment;var clipping_planes_fragment_glsl={default:clipping_planes_fragment};_exports.$clippingPlanesFragmentGlsl=clipping_planes_fragment_glsl;var clipping_planes_pars_fragment=`
#if NUM_CLIPPING_PLANES > 0

	#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )
		varying vec3 vViewPosition;
	#endif

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;_exports.$clippingPlanesParsFragmentGlslDefault=clipping_planes_pars_fragment;var clipping_planes_pars_fragment_glsl={default:clipping_planes_pars_fragment};_exports.$clippingPlanesParsFragmentGlsl=clipping_planes_pars_fragment_glsl;var clipping_planes_pars_vertex=`
#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )
	varying vec3 vViewPosition;
#endif
`;_exports.$clippingPlanesParsVertexGlslDefault=clipping_planes_pars_vertex;var clipping_planes_pars_vertex_glsl={default:clipping_planes_pars_vertex};_exports.$clippingPlanesParsVertexGlsl=clipping_planes_pars_vertex_glsl;var clipping_planes_vertex=`
#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )
	vViewPosition = - mvPosition.xyz;
#endif
`;_exports.$clippingPlanesVertexGlslDefault=clipping_planes_vertex;var clipping_planes_vertex_glsl={default:clipping_planes_vertex};_exports.$clippingPlanesVertexGlsl=clipping_planes_vertex_glsl;var color_fragment=`
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif
`;_exports.$colorFragmentGlslDefault=color_fragment;var color_fragment_glsl={default:color_fragment};_exports.$colorFragmentGlsl=color_fragment_glsl;var color_pars_fragment=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`;_exports.$colorParsFragmentGlslDefault=color_pars_fragment;var color_pars_fragment_glsl={default:color_pars_fragment};_exports.$colorParsFragmentGlsl=color_pars_fragment_glsl;var color_pars_vertex=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`;_exports.$colorParsVertexGlslDefault=color_pars_vertex;var color_pars_vertex_glsl={default:color_pars_vertex};_exports.$colorParsVertexGlsl=color_pars_vertex_glsl;var color_vertex=`
#ifdef USE_COLOR

	vColor.xyz = color.xyz;

#endif
`;_exports.$colorVertexGlslDefault=color_vertex;var color_vertex_glsl={default:color_vertex};_exports.$colorVertexGlsl=color_vertex_glsl;var common=`
#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6

#define saturate(a) clamp( a, 0.0, 1.0 )
#define whiteCompliment(a) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	float distance = dot( planeNormal, point - pointOnPlane );

	return - distance * planeNormal + point;

}

float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return sign( dot( point - pointOnPlane, planeNormal ) );

}

vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}
`;_exports.$commonGlslDefault=common;var common_glsl={default:common};_exports.$commonGlsl=common_glsl;var cube_uv_reflection_fragment=`
#ifdef ENVMAP_TYPE_CUBE_UV

#define cubeUV_textureSize (1024.0)

int getFaceFromDirection(vec3 direction) {
	vec3 absDirection = abs(direction);
	int face = -1;
	if( absDirection.x > absDirection.z ) {
		if(absDirection.x > absDirection.y )
			face = direction.x > 0.0 ? 0 : 3;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	else {
		if(absDirection.z > absDirection.y )
			face = direction.z > 0.0 ? 2 : 5;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	return face;
}
#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)
#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))

vec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {
	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);
	float dxRoughness = dFdx(roughness);
	float dyRoughness = dFdy(roughness);
	vec3 dx = dFdx( vec * scale * dxRoughness );
	vec3 dy = dFdy( vec * scale * dyRoughness );
	float d = max( dot( dx, dx ), dot( dy, dy ) );
	// Clamp the value to the max mip level counts. hard coded to 6 mips
	d = clamp(d, 1.0, cubeUV_rangeClamp);
	float mipLevel = 0.5 * log2(d);
	return vec2(floor(mipLevel), fract(mipLevel));
}

#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)
#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)

vec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {
	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;
	float a = 16.0 * cubeUV_rcpTextureSize;

	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );
	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;
	// float powScale = exp2(roughnessLevel + mipLevel);
	float powScale = exp2_packed.x * exp2_packed.y;
	// float scale =  1.0 / exp2(roughnessLevel + 2.0 + mipLevel);
	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;
	// float mipOffset = 0.75*(1.0 - 1.0/exp2(mipLevel))/exp2(roughnessLevel);
	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;

	bool bRes = mipLevel == 0.0;
	scale =  bRes && (scale < a) ? a : scale;

	vec3 r;
	vec2 offset;
	int face = getFaceFromDirection(direction);

	float rcpPowScale = 1.0 / powScale;

	if( face == 0) {
		r = vec3(direction.x, -direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 1) {
		r = vec3(direction.y, direction.x, direction.z);
		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 2) {
		r = vec3(direction.z, direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
	}
	else if( face == 3) {
		r = vec3(direction.x, direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	else if( face == 4) {
		r = vec3(direction.y, direction.x, -direction.z);
		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	else {
		r = vec3(direction.z, -direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
	}
	r = normalize(r);
	float texelOffset = 0.5 * cubeUV_rcpTextureSize;
	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;
	vec2 base = offset + vec2( texelOffset );
	return base + s * ( scale - 2.0 * texelOffset );
}

#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)

vec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {
	float roughnessVal = roughness* cubeUV_maxLods3;
	float r1 = floor(roughnessVal);
	float r2 = r1 + 1.0;
	float t = fract(roughnessVal);
	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);
	float s = mipInfo.y;
	float level0 = mipInfo.x;
	float level1 = level0 + 1.0;
	level1 = level1 > 5.0 ? 5.0 : level1;

	// round to nearest mipmap if we are not interpolating.
	level0 += min( floor( s + 0.5 ), 5.0 );

	// Tri linear interpolation.
	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);
	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));

	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);
	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));

	vec4 result = mix(color10, color20, t);

	return vec4(result.rgb, 1.0);
}

#endif
`;_exports.$cubeUvReflectionFragmentGlslDefault=cube_uv_reflection_fragment;var cube_uv_reflection_fragment_glsl={default:cube_uv_reflection_fragment};_exports.$cubeUvReflectionFragmentGlsl=cube_uv_reflection_fragment_glsl;var defaultnormal_vertex=`
vec3 transformedNormal = normalMatrix * objectNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif
`;_exports.$defaultnormalVertexGlslDefault=defaultnormal_vertex;var defaultnormal_vertex_glsl={default:defaultnormal_vertex};_exports.$defaultnormalVertexGlsl=defaultnormal_vertex_glsl;var displacementmap_pars_vertex=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;_exports.$displacementmapParsVertexGlslDefault=displacementmap_pars_vertex;var displacementmap_pars_vertex_glsl={default:displacementmap_pars_vertex};_exports.$displacementmapParsVertexGlsl=displacementmap_pars_vertex_glsl;var displacementmap_vertex=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );

#endif
`;_exports.$displacementmapVertexGlslDefault=displacementmap_vertex;var displacementmap_vertex_glsl={default:displacementmap_vertex};_exports.$displacementmapVertexGlsl=displacementmap_vertex_glsl;var emissivemap_fragment=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;_exports.$emissivemapFragmentGlslDefault=emissivemap_fragment;var emissivemap_fragment_glsl={default:emissivemap_fragment};_exports.$emissivemapFragmentGlsl=emissivemap_fragment_glsl;var emissivemap_pars_fragment=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;_exports.$emissivemapParsFragmentGlslDefault=emissivemap_pars_fragment;var emissivemap_pars_fragment_glsl={default:emissivemap_pars_fragment};_exports.$emissivemapParsFragmentGlsl=emissivemap_pars_fragment_glsl;var encodings_fragment=`
  gl_FragColor = linearToOutputTexel( gl_FragColor );
`;_exports.$encodingsFragmentGlslDefault=encodings_fragment;var encodings_fragment_glsl={default:encodings_fragment};_exports.$encodingsFragmentGlsl=encodings_fragment_glsl;var encodings_pars_fragment=`
// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}

vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}

vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}

vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}

vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}

vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = min( floor( D ) / 255.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}

// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html

// M matrix, for encoding
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}

// Inverse M matrix, for decoding
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}
`;_exports.$encodingsParsFragmentGlslDefault=encodings_pars_fragment;var encodings_pars_fragment_glsl={default:encodings_pars_fragment};_exports.$encodingsParsFragmentGlsl=encodings_pars_fragment_glsl;var envmap_fragment=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToVertex, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#elif defined( ENVMAP_TYPE_EQUIREC )

		vec2 sampleUV;

		reflectVec = normalize( reflectVec );

		sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

		sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;

		vec4 envColor = texture2D( envMap, sampleUV );

	#elif defined( ENVMAP_TYPE_SPHERE )

		reflectVec = normalize( reflectVec );

		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );

		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	envColor = envMapTexelToLinear( envColor );

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`;_exports.$envmapFragmentGlslDefault=envmap_fragment;var envmap_fragment_glsl={default:envmap_fragment};_exports.$envmapFragmentGlsl=envmap_fragment_glsl;var envmap_pars_fragment=`
#if defined( USE_ENVMAP ) || defined( PHYSICAL )
	uniform float reflectivity;
	uniform float envMapIntensity;
#endif

#ifdef USE_ENVMAP

	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )
		varying vec3 vWorldPosition;
	#endif

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	uniform float flipEnvMap;
	uniform int maxMipLevel;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`;_exports.$envmapParsFragmentGlslDefault=envmap_pars_fragment;var envmap_pars_fragment_glsl={default:envmap_pars_fragment};_exports.$envmapParsFragmentGlsl=envmap_pars_fragment_glsl;var envmap_pars_vertex=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`;_exports.$envmapParsVertexGlslDefault=envmap_pars_vertex;var envmap_pars_vertex_glsl={default:envmap_pars_vertex};_exports.$envmapParsVertexGlsl=envmap_pars_vertex_glsl;var envmap_vertex=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`;_exports.$envmapVertexGlslDefault=envmap_vertex;var envmap_vertex_glsl={default:envmap_vertex};_exports.$envmapVertexGlsl=envmap_vertex_glsl;var fog_vertex=`
#ifdef USE_FOG

	fogDepth = -mvPosition.z;

#endif
`;_exports.$fogVertexGlslDefault=fog_vertex;var fog_vertex_glsl={default:fog_vertex};_exports.$fogVertexGlsl=fog_vertex_glsl;var fog_pars_vertex=`
#ifdef USE_FOG

	varying float fogDepth;

#endif
`;_exports.$fogParsVertexGlslDefault=fog_pars_vertex;var fog_pars_vertex_glsl={default:fog_pars_vertex};_exports.$fogParsVertexGlsl=fog_pars_vertex_glsl;var fog_fragment=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;_exports.$fogFragmentGlslDefault=fog_fragment;var fog_fragment_glsl={default:fog_fragment};_exports.$fogFragmentGlsl=fog_fragment_glsl;var fog_pars_fragment=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float fogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`;_exports.$fogParsFragmentGlslDefault=fog_pars_fragment;var fog_pars_fragment_glsl={default:fog_pars_fragment};_exports.$fogParsFragmentGlsl=fog_pars_fragment_glsl;var gradientmap_pars_fragment=`
#ifdef TOON

	uniform sampler2D gradientMap;

	vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

		// dotNL will be from -1.0 to 1.0
		float dotNL = dot( normal, lightDirection );
		vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

		#ifdef USE_GRADIENTMAP

			return texture2D( gradientMap, coord ).rgb;

		#else

			return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

		#endif


	}

#endif
`;_exports.$gradientmapParsFragmentGlslDefault=gradientmap_pars_fragment;var gradientmap_pars_fragment_glsl={default:gradientmap_pars_fragment};_exports.$gradientmapParsFragmentGlsl=gradientmap_pars_fragment_glsl;var lightmap_fragment=`
#ifdef USE_LIGHTMAP

	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage

#endif
`;_exports.$lightmapFragmentGlslDefault=lightmap_fragment;var lightmap_fragment_glsl={default:lightmap_fragment};_exports.$lightmapFragmentGlsl=lightmap_fragment_glsl;var lightmap_pars_fragment=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;_exports.$lightmapParsFragmentGlslDefault=lightmap_pars_fragment;var lightmap_pars_fragment_glsl={default:lightmap_pars_fragment};_exports.$lightmapParsFragmentGlsl=lightmap_pars_fragment_glsl;var lights_lambert_vertex=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );

#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif
	}

#endif

/*
#if NUM_RECT_AREA_LIGHTS > 0

	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		// TODO (abelnation): implement

	}

#endif
*/

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );

		#endif

	}

#endif
`;_exports.$lightsLambertVertexGlslDefault=lights_lambert_vertex;var lights_lambert_vertex_glsl={default:lights_lambert_vertex};_exports.$lightsLambertVertexGlsl=lights_lambert_vertex_glsl;var lights_pars_begin=`
uniform vec3 ambientLightColor;

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI;

	#endif

	return irradiance;

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
		float shadowCameraNear;
		float shadowCameraFar;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );

		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;

		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {

		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );

		if ( angleCos > spotLight.coneCos ) {

			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );

			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;

		} else {

			directLight.color = vec3( 0.0 );
			directLight.visible = false;

		}
	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {

		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			irradiance *= PI;

		#endif

		return irradiance;

	}

#endif
`;_exports.$lightsParsBeginGlslDefault=lights_pars_begin;var lights_pars_begin_glsl={default:lights_pars_begin};_exports.$lightsParsBeginGlsl=lights_pars_begin_glsl;var envmap_physical_pars_fragment=`
#if defined( USE_ENVMAP ) && defined( PHYSICAL )

	vec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {

		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );

			// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level
			// of a specular cubemap, or just the default level of a specially created irradiance cubemap.

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );

			#else

				// force the bias high to get the last LOD level as it is the most blurred.
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );

		#else

			vec4 envMapColor = vec4( 0.0 );

		#endif

		return PI * envMapColor.rgb * envMapIntensity;

	}

	// taken from here: http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html
	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {

		//float envMapWidth = pow( 2.0, maxMIPLevelScalar );
		//float desiredMIPLevel = log2( envMapWidth * sqrt( 3.0 ) ) - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );

		float maxMIPLevelScalar = float( maxMIPLevel );
		float desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );

		// clamp to allowable LOD ranges.
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );

	}

	vec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );

		#else

			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );

		#endif

		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );

			#else

				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));

		#elif defined( ENVMAP_TYPE_EQUIREC )

			vec2 sampleUV;
			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );

			#else

				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_SPHERE )

			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

			#else

				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#endif

		return envMapColor.rgb * envMapIntensity;

	}

#endif
`;_exports.$envmapPhysicalParsFragmentGlslDefault=envmap_physical_pars_fragment;var envmap_physical_pars_fragment_glsl={default:envmap_physical_pars_fragment};_exports.$envmapPhysicalParsFragmentGlsl=envmap_physical_pars_fragment_glsl;var lights_phong_fragment=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;_exports.$lightsPhongFragmentGlslDefault=lights_phong_fragment;var lights_phong_fragment_glsl={default:lights_phong_fragment};_exports.$lightsPhongFragmentGlsl=lights_phong_fragment_glsl;var lights_phong_pars_fragment=`
varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif


struct BlinnPhongMaterial {

	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	#ifdef TOON

		vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	#else

		float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
		vec3 irradiance = dotNL * directLight.color;

	#endif

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`;_exports.$lightsPhongParsFragmentGlslDefault=lights_phong_pars_fragment;var lights_phong_pars_fragment_glsl={default:lights_phong_pars_fragment};_exports.$lightsPhongParsFragmentGlsl=lights_phong_pars_fragment_glsl;var lights_physical_fragment=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );
#ifdef STANDARD
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
	material.clearCoat = saturate( clearCoat ); // Burley clearcoat model
	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );
#endif
`;_exports.$lightsPhysicalFragmentGlslDefault=lights_physical_fragment;var lights_physical_fragment_glsl={default:lights_physical_fragment};_exports.$lightsPhysicalFragmentGlsl=lights_physical_fragment_glsl;var lights_physical_pars_fragment=`
struct PhysicalMaterial {

	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;

	#ifndef STANDARD
		float clearCoat;
		float clearCoatRoughness;
	#endif

};

#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04

// Clear coat directional hemishperical reflectance (this approximation should be improved)
float clearCoatDHRApprox( const in float roughness, const in float dotNL ) {

	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	#ifndef STANDARD
		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );
	#else
		float clearCoatDHR = 0.0;
	#endif

	reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );

	reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

	#ifndef STANDARD

		reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );

	#endif

}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	// Defer to the IndirectSpecular function to compute
	// the indirectDiffuse if energy preservation is enabled.
	#ifndef ENVMAP_TYPE_CUBE_UV

		reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

	#endif

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifndef STANDARD
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		float dotNL = dotNV;
		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );
	#else
		float clearCoatDHR = 0.0;
	#endif

	float clearCoatInv = 1.0 - clearCoatDHR;

	// Both indirect specular and diffuse light accumulate here
	// if energy preservation enabled, and PMREM provided.
	#if defined( ENVMAP_TYPE_CUBE_UV )

		vec3 singleScattering = vec3( 0.0 );
		vec3 multiScattering = vec3( 0.0 );
		vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

		BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );

		// The multiscattering paper uses the below formula for calculating diffuse 
		// for dielectrics, but this is already handled when initially computing the 
		// specular and diffuse color, so we can just use the diffuseColor directly.
		//vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
		vec3 diffuse = material.diffuseColor;

		reflectedLight.indirectSpecular += clearCoatInv * radiance * singleScattering;
		reflectedLight.indirectDiffuse += multiScattering * cosineWeightedIrradiance;
		reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

	#else

		reflectedLight.indirectSpecular += clearCoatInv * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );

	#endif

	#ifndef STANDARD

		reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );

	#endif
}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )
#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`;_exports.$lightsPhysicalParsFragmentGlslDefault=lights_physical_pars_fragment;var lights_physical_pars_fragment_glsl={default:lights_physical_pars_fragment};_exports.$lightsPhysicalParsFragmentGlsl=lights_physical_pars_fragment_glsl;var lights_fragment_begin=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = normalize( vViewPosition );

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointDirectLightIrradiance( pointLight, geometry, directLight );

		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotDirectLightIrradiance( spotLight, geometry, directLight );

		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );

		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}

#endif

#if defined( RE_IndirectDiffuse )

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		}

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearCoatRadiance = vec3( 0.0 );

#endif
`;_exports.$lightsFragmentBeginGlslDefault=lights_fragment_begin;var lights_fragment_begin_glsl={default:lights_fragment_begin};_exports.$lightsFragmentBeginGlsl=lights_fragment_begin_glsl;var lights_fragment_maps=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )

		irradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, maxMipLevel );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_BlinnShininessExponent( material ), maxMipLevel );

	#ifndef STANDARD
		clearCoatRadiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );
	#endif

#endif
`;_exports.$lightsFragmentMapsGlslDefault=lights_fragment_maps;var lights_fragment_maps_glsl={default:lights_fragment_maps};_exports.$lightsFragmentMapsGlsl=lights_fragment_maps_glsl;var lights_fragment_end=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, irradiance, clearCoatRadiance, geometry, material, reflectedLight );

#endif
`;_exports.$lightsFragmentEndGlslDefault=lights_fragment_end;var lights_fragment_end_glsl={default:lights_fragment_end};_exports.$lightsFragmentEndGlsl=lights_fragment_end_glsl;var logdepthbuf_fragment=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	gl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;_exports.$logdepthbufFragmentGlslDefault=logdepthbuf_fragment;var logdepthbuf_fragment_glsl={default:logdepthbuf_fragment};_exports.$logdepthbufFragmentGlsl=logdepthbuf_fragment_glsl;var logdepthbuf_pars_fragment=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;

#endif
`;_exports.$logdepthbufParsFragmentGlslDefault=logdepthbuf_pars_fragment;var logdepthbuf_pars_fragment_glsl={default:logdepthbuf_pars_fragment};_exports.$logdepthbufParsFragmentGlsl=logdepthbuf_pars_fragment_glsl;var logdepthbuf_pars_vertex=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`;_exports.$logdepthbufParsVertexGlslDefault=logdepthbuf_pars_vertex;var logdepthbuf_pars_vertex_glsl={default:logdepthbuf_pars_vertex};_exports.$logdepthbufParsVertexGlsl=logdepthbuf_pars_vertex_glsl;var logdepthbuf_vertex=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;

	#else

		gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

		gl_Position.z *= gl_Position.w;

	#endif

#endif
`;_exports.$logdepthbufVertexGlslDefault=logdepthbuf_vertex;var logdepthbuf_vertex_glsl={default:logdepthbuf_vertex};_exports.$logdepthbufVertexGlsl=logdepthbuf_vertex_glsl;var map_fragment=`
#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vUv );

	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;

#endif
`;_exports.$mapFragmentGlslDefault=map_fragment;var map_fragment_glsl={default:map_fragment};_exports.$mapFragmentGlsl=map_fragment_glsl;var map_pars_fragment=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;_exports.$mapParsFragmentGlslDefault=map_pars_fragment;var map_pars_fragment_glsl={default:map_pars_fragment};_exports.$mapParsFragmentGlsl=map_pars_fragment_glsl;var map_particle_fragment=`
#ifdef USE_MAP

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );

#endif
`;_exports.$mapParticleFragmentGlslDefault=map_particle_fragment;var map_particle_fragment_glsl={default:map_particle_fragment};_exports.$mapParticleFragmentGlsl=map_particle_fragment_glsl;var map_particle_pars_fragment=`
#ifdef USE_MAP

	uniform mat3 uvTransform;
	uniform sampler2D map;

#endif
`;_exports.$mapParticleParsFragmentGlslDefault=map_particle_pars_fragment;var map_particle_pars_fragment_glsl={default:map_particle_pars_fragment};_exports.$mapParticleParsFragmentGlsl=map_particle_pars_fragment_glsl;var metalnessmap_fragment=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;_exports.$metalnessmapFragmentGlslDefault=metalnessmap_fragment;var metalnessmap_fragment_glsl={default:metalnessmap_fragment};_exports.$metalnessmapFragmentGlsl=metalnessmap_fragment_glsl;var metalnessmap_pars_fragment=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;_exports.$metalnessmapParsFragmentGlslDefault=metalnessmap_pars_fragment;var metalnessmap_pars_fragment_glsl={default:metalnessmap_pars_fragment};_exports.$metalnessmapParsFragmentGlsl=metalnessmap_pars_fragment_glsl;var morphnormal_vertex=`
#ifdef USE_MORPHNORMALS

	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];
	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];
	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];
	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];

#endif
`;_exports.$morphnormalVertexGlslDefault=morphnormal_vertex;var morphnormal_vertex_glsl={default:morphnormal_vertex};_exports.$morphnormalVertexGlsl=morphnormal_vertex_glsl;var morphtarget_pars_vertex=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_MORPHNORMALS

	uniform float morphTargetInfluences[ 8 ];

	#else

	uniform float morphTargetInfluences[ 4 ];

	#endif

#endif
`;_exports.$morphtargetParsVertexGlslDefault=morphtarget_pars_vertex;var morphtarget_pars_vertex_glsl={default:morphtarget_pars_vertex};_exports.$morphtargetParsVertexGlsl=morphtarget_pars_vertex_glsl;var morphtarget_vertex=`
#ifdef USE_MORPHTARGETS

	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];
	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];
	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];
	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];

	#ifndef USE_MORPHNORMALS

	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];
	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];
	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];
	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];

	#endif

#endif
`;_exports.$morphtargetVertexGlslDefault=morphtarget_vertex;var morphtarget_vertex_glsl={default:morphtarget_vertex};_exports.$morphtargetVertexGlsl=morphtarget_vertex_glsl;var normal_fragment_begin=`
#ifdef FLAT_SHADED

	// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

#endif
`;_exports.$normalFragmentBeginGlslDefault=normal_fragment_begin;var normal_fragment_begin_glsl={default:normal_fragment_begin};_exports.$normalFragmentBeginGlsl=normal_fragment_begin_glsl;var normal_fragment_maps=`
#ifdef USE_NORMALMAP

	#ifdef OBJECTSPACE_NORMALMAP

		normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

		#ifdef FLIP_SIDED

			normal = - normal;

		#endif

		#ifdef DOUBLE_SIDED

			normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		#endif

		normal = normalize( normalMatrix * normal );

	#else // tangent-space normal map

		normal = perturbNormal2Arb( -vViewPosition, normal );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );

#endif
`;_exports.$normalFragmentMapsGlslDefault=normal_fragment_maps;var normal_fragment_maps_glsl={default:normal_fragment_maps};_exports.$normalFragmentMapsGlsl=normal_fragment_maps_glsl;var normalmap_pars_fragment=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

	#ifdef OBJECTSPACE_NORMALMAP

		uniform mat3 normalMatrix;

	#else

		// Per-Pixel Tangent Space Normal Mapping
		// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

		vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {

			// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

			vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
			vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
			vec2 st0 = dFdx( vUv.st );
			vec2 st1 = dFdy( vUv.st );

			float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

			vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
			vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
			vec3 N = normalize( surf_norm );
			mat3 tsn = mat3( S, T, N );

			vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;

			mapN.xy *= normalScale;
			mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

			return normalize( tsn * mapN );

		}

	#endif

#endif
`;_exports.$normalmapParsFragmentGlslDefault=normalmap_pars_fragment;var normalmap_pars_fragment_glsl={default:normalmap_pars_fragment};_exports.$normalmapParsFragmentGlsl=normalmap_pars_fragment_glsl;var packing=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`;_exports.$packingGlslDefault=packing;var packing_glsl={default:packing};_exports.$packingGlsl=packing_glsl;var premultiplied_alpha_fragment=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;_exports.$premultipliedAlphaFragmentGlslDefault=premultiplied_alpha_fragment;var premultiplied_alpha_fragment_glsl={default:premultiplied_alpha_fragment};_exports.$premultipliedAlphaFragmentGlsl=premultiplied_alpha_fragment_glsl;var project_vertex=`
vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

gl_Position = projectionMatrix * mvPosition;
`;_exports.$projectVertexGlslDefault=project_vertex;var project_vertex_glsl={default:project_vertex};_exports.$projectVertexGlsl=project_vertex_glsl;var dithering_fragment=`
#if defined( DITHERING )

  gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;_exports.$ditheringFragmentGlslDefault=dithering_fragment;var dithering_fragment_glsl={default:dithering_fragment};_exports.$ditheringFragmentGlsl=dithering_fragment_glsl;var dithering_pars_fragment=`
#if defined( DITHERING )

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift acording to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`;_exports.$ditheringParsFragmentGlslDefault=dithering_pars_fragment;var dithering_pars_fragment_glsl={default:dithering_pars_fragment};_exports.$ditheringParsFragmentGlsl=dithering_pars_fragment_glsl;var roughnessmap_fragment=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;_exports.$roughnessmapFragmentGlslDefault=roughnessmap_fragment;var roughnessmap_fragment_glsl={default:roughnessmap_fragment};_exports.$roughnessmapFragmentGlsl=roughnessmap_fragment_glsl;var roughnessmap_pars_fragment=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;_exports.$roughnessmapParsFragmentGlslDefault=roughnessmap_pars_fragment;var roughnessmap_pars_fragment_glsl={default:roughnessmap_pars_fragment};_exports.$roughnessmapParsFragmentGlsl=roughnessmap_pars_fragment_glsl;var shadowmap_pars_fragment=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHTS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];

	#endif

	#if NUM_SPOT_LIGHTS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];

	#endif

	#if NUM_POINT_LIGHTS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {

		const vec2 offset = vec2( 0.0, 1.0 );

		vec2 texelSize = vec2( 1.0 ) / size;
		vec2 centroidUV = floor( uv * size + 0.5 ) / size;

		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );
		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );
		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );
		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );

		vec2 f = fract( uv * size + 0.5 );

		float a = mix( lb, lt, f.y );
		float b = mix( rb, rt, f.y );
		float c = mix( a, b, f.x );

		return c;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;

			shadow = (
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`;_exports.$shadowmapParsFragmentGlslDefault=shadowmap_pars_fragment;var shadowmap_pars_fragment_glsl={default:shadowmap_pars_fragment};_exports.$shadowmapParsFragmentGlsl=shadowmap_pars_fragment_glsl;var shadowmap_pars_vertex=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHTS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];

	#endif

	#if NUM_SPOT_LIGHTS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];

	#endif

	#if NUM_POINT_LIGHTS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`;_exports.$shadowmapParsVertexGlslDefault=shadowmap_pars_vertex;var shadowmap_pars_vertex_glsl={default:shadowmap_pars_vertex};_exports.$shadowmapParsVertexGlsl=shadowmap_pars_vertex_glsl;var shadowmap_vertex=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;

	}

	#endif

	#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;

	}

	#endif

	#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;

	}

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`;_exports.$shadowmapVertexGlslDefault=shadowmap_vertex;var shadowmap_vertex_glsl={default:shadowmap_vertex};_exports.$shadowmapVertexGlsl=shadowmap_vertex_glsl;var shadowmask_pars_fragment=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHTS > 0

	DirectionalLight directionalLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];
		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}

	#endif

	#if NUM_SPOT_LIGHTS > 0

	SpotLight spotLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];
		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}

	#endif

	#if NUM_POINT_LIGHTS > 0

	PointLight pointLight;

	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];
		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`;_exports.$shadowmaskParsFragmentGlslDefault=shadowmask_pars_fragment;var shadowmask_pars_fragment_glsl={default:shadowmask_pars_fragment};_exports.$shadowmaskParsFragmentGlsl=shadowmask_pars_fragment_glsl;var skinbase_vertex=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;_exports.$skinbaseVertexGlslDefault=skinbase_vertex;var skinbase_vertex_glsl={default:skinbase_vertex};_exports.$skinbaseVertexGlsl=skinbase_vertex_glsl;var skinning_pars_vertex=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	#ifdef BONE_TEXTURE

		uniform sampler2D boneTexture;
		uniform int boneTextureSize;

		mat4 getBoneMatrix( const in float i ) {

			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );

			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );

			y = dy * ( y + 0.5 );

			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

			mat4 bone = mat4( v1, v2, v3, v4 );

			return bone;

		}

	#else

		uniform mat4 boneMatrices[ MAX_BONES ];

		mat4 getBoneMatrix( const in float i ) {

			mat4 bone = boneMatrices[ int(i) ];
			return bone;

		}

	#endif

#endif
`;_exports.$skinningParsVertexGlslDefault=skinning_pars_vertex;var skinning_pars_vertex_glsl={default:skinning_pars_vertex};_exports.$skinningParsVertexGlsl=skinning_pars_vertex_glsl;var skinning_vertex=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;_exports.$skinningVertexGlslDefault=skinning_vertex;var skinning_vertex_glsl={default:skinning_vertex};_exports.$skinningVertexGlsl=skinning_vertex_glsl;var skinnormal_vertex=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

#endif
`;_exports.$skinnormalVertexGlslDefault=skinnormal_vertex;var skinnormal_vertex_glsl={default:skinnormal_vertex};_exports.$skinnormalVertexGlsl=skinnormal_vertex_glsl;var specularmap_fragment=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;_exports.$specularmapFragmentGlslDefault=specularmap_fragment;var specularmap_fragment_glsl={default:specularmap_fragment};_exports.$specularmapFragmentGlsl=specularmap_fragment_glsl;var specularmap_pars_fragment=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;_exports.$specularmapParsFragmentGlslDefault=specularmap_pars_fragment;var specularmap_pars_fragment_glsl={default:specularmap_pars_fragment};_exports.$specularmapParsFragmentGlsl=specularmap_pars_fragment_glsl;var tonemapping_fragment=`
#if defined( TONE_MAPPING )

  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;_exports.$tonemappingFragmentGlslDefault=tonemapping_fragment;var tonemapping_fragment_glsl={default:tonemapping_fragment};_exports.$tonemappingFragmentGlsl=tonemapping_fragment_glsl;var tonemapping_pars_fragment=`
#ifndef saturate
	#define saturate(a) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/~reinhard/cdrom/
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicgames.com/archives/75
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {

	// John Hable's filmic operator from Uncharted 2 video game
	color *= toneMappingExposure;
	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );

}

// source: http://filmicgames.com/archives/75
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://knarkowicz.wordpress.com/2016/01/06/aces-filmic-tone-mapping-curve/
vec3 ACESFilmicToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );

}
`;_exports.$tonemappingParsFragmentGlslDefault=tonemapping_pars_fragment;var tonemapping_pars_fragment_glsl={default:tonemapping_pars_fragment};_exports.$tonemappingParsFragmentGlsl=tonemapping_pars_fragment_glsl;var uv_pars_fragment=`
#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )

	varying vec2 vUv;

#endif
`;_exports.$uvParsFragmentGlslDefault=uv_pars_fragment;var uv_pars_fragment_glsl={default:uv_pars_fragment};_exports.$uvParsFragmentGlsl=uv_pars_fragment_glsl;var uv_pars_vertex=`
#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif
`;_exports.$uvParsVertexGlslDefault=uv_pars_vertex;var uv_pars_vertex_glsl={default:uv_pars_vertex};_exports.$uvParsVertexGlsl=uv_pars_vertex_glsl;var uv_vertex=`
#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`;_exports.$uvVertexGlslDefault=uv_vertex;var uv_vertex_glsl={default:uv_vertex};_exports.$uvVertexGlsl=uv_vertex_glsl;var uv2_pars_fragment=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`;_exports.$uv2ParsFragmentGlslDefault=uv2_pars_fragment;var uv2_pars_fragment_glsl={default:uv2_pars_fragment};_exports.$uv2ParsFragmentGlsl=uv2_pars_fragment_glsl;var uv2_pars_vertex=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

#endif
`;_exports.$uv2ParsVertexGlslDefault=uv2_pars_vertex;var uv2_pars_vertex_glsl={default:uv2_pars_vertex};_exports.$uv2ParsVertexGlsl=uv2_pars_vertex_glsl;var uv2_vertex=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = uv2;

#endif
`;_exports.$uv2VertexGlslDefault=uv2_vertex;var uv2_vertex_glsl={default:uv2_vertex};_exports.$uv2VertexGlsl=uv2_vertex_glsl;var worldpos_vertex=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )

	vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );

#endif
`;_exports.$worldposVertexGlslDefault=worldpos_vertex;var worldpos_vertex_glsl={default:worldpos_vertex};_exports.$worldposVertexGlsl=worldpos_vertex_glsl;var background_frag=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`;_exports.$backgroundFragGlslDefault=background_frag;var background_frag_glsl={default:background_frag};_exports.$backgroundFragGlsl=background_frag_glsl;var background_vert=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`;_exports.$backgroundVertGlslDefault=background_vert;var background_vert_glsl={default:background_vert};_exports.$backgroundVertGlsl=background_vert_glsl;var cube_frag=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = mapTexelToLinear( texColor );
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`;_exports.$cubeFragGlslDefault=cube_frag;var cube_frag_glsl={default:cube_frag};_exports.$cubeFragGlsl=cube_frag_glsl;var cube_vert=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`;_exports.$cubeVertGlslDefault=cube_vert;var cube_vert_glsl={default:cube_vert};_exports.$cubeVertGlsl=cube_vert_glsl;var depth_frag=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );

	#endif

}
`;_exports.$depthFragGlslDefault=depth_frag;var depth_frag_glsl={default:depth_frag};_exports.$depthFragGlsl=depth_frag_glsl;var depth_vert=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

}
`;_exports.$depthVertGlslDefault=depth_vert;var depth_vert_glsl={default:depth_vert};_exports.$depthVertGlsl=depth_vert_glsl;var distanceRGBA_frag=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`;_exports.$distanceRGBAFragGlslDefault=distanceRGBA_frag;var distanceRGBA_frag_glsl={default:distanceRGBA_frag};_exports.$distanceRGBAFragGlsl=distanceRGBA_frag_glsl;var distanceRGBA_vert=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`;_exports.$distanceRGBAVertGlslDefault=distanceRGBA_vert;var distanceRGBA_vert_glsl={default:distanceRGBA_vert};_exports.$distanceRGBAVertGlsl=distanceRGBA_vert_glsl;var equirect_frag=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV;

	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;

	vec4 texColor = texture2D( tEquirect, sampleUV );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`;_exports.$equirectFragGlslDefault=equirect_frag;var equirect_frag_glsl={default:equirect_frag};_exports.$equirectFragGlsl=equirect_frag_glsl;var equirect_vert=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`;_exports.$equirectVertGlslDefault=equirect_vert;var equirect_vert_glsl={default:equirect_vert};_exports.$equirectVertGlsl=equirect_vert_glsl;var linedashed_frag=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`;_exports.$linedashedFragGlslDefault=linedashed_frag;var linedashed_frag_glsl={default:linedashed_frag};_exports.$linedashedFragGlsl=linedashed_frag_glsl;var linedashed_vert=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>

	vLineDistance = scale * lineDistance;

	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`;_exports.$linedashedVertGlslDefault=linedashed_vert;var linedashed_vert_glsl={default:linedashed_vert};_exports.$linedashedVertGlsl=linedashed_vert_glsl;var meshbasic_frag=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`;_exports.$meshbasicFragGlslDefault=meshbasic_frag;var meshbasic_frag_glsl={default:meshbasic_frag};_exports.$meshbasicFragGlsl=meshbasic_frag_glsl;var meshbasic_vert=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>

	#ifdef USE_ENVMAP

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`;_exports.$meshbasicVertGlslDefault=meshbasic_vert;var meshbasic_vert_glsl={default:meshbasic_vert};_exports.$meshbasicVertGlsl=meshbasic_vert_glsl;var meshlambert_frag=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation
	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`;_exports.$meshlambertFragGlslDefault=meshlambert_frag;var meshlambert_frag_glsl={default:meshlambert_frag};_exports.$meshlambertFragGlsl=meshlambert_frag_glsl;var meshlambert_vert=`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`;_exports.$meshlambertVertGlslDefault=meshlambert_vert;var meshlambert_vert_glsl={default:meshlambert_vert};_exports.$meshlambertVertGlsl=meshlambert_vert_glsl;var meshmatcap_frag=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>

#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );

	#else

		vec4 matcapColor = vec4( 1.0 );

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`;_exports.$meshmatcapFragGlslDefault=meshmatcap_frag;var meshmatcap_frag_glsl={default:meshmatcap_frag};_exports.$meshmatcapFragGlsl=meshmatcap_frag_glsl;var meshmatcap_vert=`
#define MATCAP

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

		vNormal = normalize( transformedNormal );

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`;_exports.$meshmatcapVertGlslDefault=meshmatcap_vert;var meshmatcap_vert_glsl={default:meshmatcap_vert};_exports.$meshmatcapVertGlsl=meshmatcap_vert_glsl;var meshphong_frag=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;_exports.$meshphongFragGlslDefault=meshphong_frag;var meshphong_frag_glsl={default:meshphong_frag};_exports.$meshphongFragGlsl=meshphong_frag_glsl;var meshphong_vert=`
#define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`;_exports.$meshphongVertGlslDefault=meshphong_vert;var meshphong_vert_glsl={default:meshphong_vert};_exports.$meshphongVertGlsl=meshphong_vert_glsl;var meshphysical_frag=`
#define PHYSICAL

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifndef STANDARD
	uniform float clearCoat;
	uniform float clearCoatRoughness;
#endif

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;_exports.$meshphysicalFragGlslDefault=meshphysical_frag;var meshphysical_frag_glsl={default:meshphysical_frag};_exports.$meshphysicalFragGlsl=meshphysical_frag_glsl;var meshphysical_vert=`
#define PHYSICAL

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`;_exports.$meshphysicalVertGlslDefault=meshphysical_vert;var meshphysical_vert_glsl={default:meshphysical_vert};_exports.$meshphysicalVertGlsl=meshphysical_vert_glsl;var normal_frag=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

}
`;_exports.$normalFragGlslDefault=normal_frag;var normal_frag_glsl={default:normal_frag};_exports.$normalFragGlsl=normal_frag_glsl;var normal_vert=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )

	vViewPosition = - mvPosition.xyz;

#endif

}
`;_exports.$normalVertGlslDefault=normal_vert;var normal_vert_glsl={default:normal_vert};_exports.$normalVertGlsl=normal_vert_glsl;var points_frag=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`;_exports.$pointsFragGlslDefault=points_frag;var points_frag_glsl={default:points_frag};_exports.$pointsFragGlsl=points_frag_glsl;var points_vert=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`;_exports.$pointsVertGlslDefault=points_vert;var points_vert_glsl={default:points_vert};_exports.$pointsVertGlsl=points_vert_glsl;var shadow_frag=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <fog_fragment>

}
`;_exports.$shadowFragGlslDefault=shadow_frag;var shadow_frag_glsl={default:shadow_frag};_exports.$shadowFragGlsl=shadow_frag_glsl;var shadow_vert=`
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`;_exports.$shadowVertGlslDefault=shadow_vert;var shadow_vert_glsl={default:shadow_vert};_exports.$shadowVertGlsl=shadow_vert_glsl;var sprite_frag=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`;_exports.$spriteFragGlslDefault=sprite_frag;var sprite_frag_glsl={default:sprite_frag};_exports.$spriteFragGlsl=sprite_frag_glsl;var sprite_vert=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`;_exports.$spriteVertGlslDefault=sprite_vert;var sprite_vert_glsl={default:sprite_vert};_exports.$spriteVertGlsl=sprite_vert_glsl;var ShaderChunk={alphamap_fragment:alphamap_fragment,alphamap_pars_fragment:alphamap_pars_fragment,alphatest_fragment:alphatest_fragment,aomap_fragment:aomap_fragment,aomap_pars_fragment:aomap_pars_fragment,begin_vertex:begin_vertex,beginnormal_vertex:beginnormal_vertex,bsdfs:bsdfs,bumpmap_pars_fragment:bumpmap_pars_fragment,clipping_planes_fragment:clipping_planes_fragment,clipping_planes_pars_fragment:clipping_planes_pars_fragment,clipping_planes_pars_vertex:clipping_planes_pars_vertex,clipping_planes_vertex:clipping_planes_vertex,color_fragment:color_fragment,color_pars_fragment:color_pars_fragment,color_pars_vertex:color_pars_vertex,color_vertex:color_vertex,common:common,cube_uv_reflection_fragment:cube_uv_reflection_fragment,defaultnormal_vertex:defaultnormal_vertex,displacementmap_pars_vertex:displacementmap_pars_vertex,displacementmap_vertex:displacementmap_vertex,emissivemap_fragment:emissivemap_fragment,emissivemap_pars_fragment:emissivemap_pars_fragment,encodings_fragment:encodings_fragment,encodings_pars_fragment:encodings_pars_fragment,envmap_fragment:envmap_fragment,envmap_pars_fragment:envmap_pars_fragment,envmap_pars_vertex:envmap_pars_vertex,envmap_physical_pars_fragment:envmap_physical_pars_fragment,envmap_vertex:envmap_vertex,fog_vertex:fog_vertex,fog_pars_vertex:fog_pars_vertex,fog_fragment:fog_fragment,fog_pars_fragment:fog_pars_fragment,gradientmap_pars_fragment:gradientmap_pars_fragment,lightmap_fragment:lightmap_fragment,lightmap_pars_fragment:lightmap_pars_fragment,lights_lambert_vertex:lights_lambert_vertex,lights_pars_begin:lights_pars_begin,lights_phong_fragment:lights_phong_fragment,lights_phong_pars_fragment:lights_phong_pars_fragment,lights_physical_fragment:lights_physical_fragment,lights_physical_pars_fragment:lights_physical_pars_fragment,lights_fragment_begin:lights_fragment_begin,lights_fragment_maps:lights_fragment_maps,lights_fragment_end:lights_fragment_end,logdepthbuf_fragment:logdepthbuf_fragment,logdepthbuf_pars_fragment:logdepthbuf_pars_fragment,logdepthbuf_pars_vertex:logdepthbuf_pars_vertex,logdepthbuf_vertex:logdepthbuf_vertex,map_fragment:map_fragment,map_pars_fragment:map_pars_fragment,map_particle_fragment:map_particle_fragment,map_particle_pars_fragment:map_particle_pars_fragment,metalnessmap_fragment:metalnessmap_fragment,metalnessmap_pars_fragment:metalnessmap_pars_fragment,morphnormal_vertex:morphnormal_vertex,morphtarget_pars_vertex:morphtarget_pars_vertex,morphtarget_vertex:morphtarget_vertex,normal_fragment_begin:normal_fragment_begin,normal_fragment_maps:normal_fragment_maps,normalmap_pars_fragment:normalmap_pars_fragment,packing:packing,premultiplied_alpha_fragment:premultiplied_alpha_fragment,project_vertex:project_vertex,dithering_fragment:dithering_fragment,dithering_pars_fragment:dithering_pars_fragment,roughnessmap_fragment:roughnessmap_fragment,roughnessmap_pars_fragment:roughnessmap_pars_fragment,shadowmap_pars_fragment:shadowmap_pars_fragment,shadowmap_pars_vertex:shadowmap_pars_vertex,shadowmap_vertex:shadowmap_vertex,shadowmask_pars_fragment:shadowmask_pars_fragment,skinbase_vertex:skinbase_vertex,skinning_pars_vertex:skinning_pars_vertex,skinning_vertex:skinning_vertex,skinnormal_vertex:skinnormal_vertex,specularmap_fragment:specularmap_fragment,specularmap_pars_fragment:specularmap_pars_fragment,tonemapping_fragment:tonemapping_fragment,tonemapping_pars_fragment:tonemapping_pars_fragment,uv_pars_fragment:uv_pars_fragment,uv_pars_vertex:uv_pars_vertex,uv_vertex:uv_vertex,uv2_pars_fragment:uv2_pars_fragment,uv2_pars_vertex:uv2_pars_vertex,uv2_vertex:uv2_vertex,worldpos_vertex:worldpos_vertex,background_frag:background_frag,background_vert:background_vert,cube_frag:cube_frag,cube_vert:cube_vert,depth_frag:depth_frag,depth_vert:depth_vert,distanceRGBA_frag:distanceRGBA_frag,distanceRGBA_vert:distanceRGBA_vert,equirect_frag:equirect_frag,equirect_vert:equirect_vert,linedashed_frag:linedashed_frag,linedashed_vert:linedashed_vert,meshbasic_frag:meshbasic_frag,meshbasic_vert:meshbasic_vert,meshlambert_frag:meshlambert_frag,meshlambert_vert:meshlambert_vert,meshmatcap_frag:meshmatcap_frag,meshmatcap_vert:meshmatcap_vert,meshphong_frag:meshphong_frag,meshphong_vert:meshphong_vert,meshphysical_frag:meshphysical_frag,meshphysical_vert:meshphysical_vert,normal_frag:normal_frag,normal_vert:normal_vert,points_frag:points_frag,points_vert:points_vert,shadow_frag:shadow_frag,shadow_vert:shadow_vert,sprite_frag:sprite_frag,sprite_vert:sprite_vert};_exports.ShaderChunk=ShaderChunk;var ShaderChunk$1={ShaderChunk:ShaderChunk};_exports.$ShaderChunk=ShaderChunk$1;var UniformsLib={common:{diffuse:{value:new Color(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Matrix3},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new Color(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(15658734)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},uvTransform:{value:new Matrix3}}};_exports.UniformsLib=UniformsLib;var UniformsLib$1={UniformsLib:UniformsLib};_exports.$UniformsLib=UniformsLib$1;var ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.normal_vert,fragmentShader:ShaderChunk.normal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};_exports.ShaderLib=ShaderLib;ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};var ShaderLib$1={ShaderLib:ShaderLib};_exports.$ShaderLib=ShaderLib$1;function WebGLAnimation(){var context=null,isAnimating=!1,animationLoop=null;function onAnimationFrame(time,frame){if(!1===isAnimating)return;animationLoop(time,frame);context.requestAnimationFrame(onAnimationFrame)}return{start:function(){if(!0===isAnimating)return;if(null===animationLoop)return;context.requestAnimationFrame(onAnimationFrame);isAnimating=!0},stop:function(){isAnimating=!1},setAnimationLoop:function(callback){animationLoop=callback},setContext:function(value){context=value}}}var WebGLAnimation$1={WebGLAnimation:WebGLAnimation};_exports.$WebGLAnimation=WebGLAnimation$1;function WebGLAttributes(gl){var buffers=new WeakMap;function createBuffer(attribute,bufferType){var array=attribute.array,usage=attribute.dynamic?gl.DYNAMIC_DRAW:gl.STATIC_DRAW,buffer=gl.createBuffer();gl.bindBuffer(bufferType,buffer);gl.bufferData(bufferType,array,usage);attribute.onUploadCallback();var type=gl.FLOAT;if(array instanceof Float32Array){type=gl.FLOAT}else if(array instanceof Float64Array){console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.")}else if(array instanceof Uint16Array){type=gl.UNSIGNED_SHORT}else if(array instanceof Int16Array){type=gl.SHORT}else if(array instanceof Uint32Array){type=gl.UNSIGNED_INT}else if(array instanceof Int32Array){type=gl.INT}else if(array instanceof Int8Array){type=gl.BYTE}else if(array instanceof Uint8Array){type=gl.UNSIGNED_BYTE}return{buffer:buffer,type:type,bytesPerElement:array.BYTES_PER_ELEMENT,version:attribute.version}}function updateBuffer(buffer,attribute,bufferType){var array=attribute.array,updateRange=attribute.updateRange;gl.bindBuffer(bufferType,buffer);if(!1===attribute.dynamic){gl.bufferData(bufferType,array,gl.STATIC_DRAW)}else if(-1===updateRange.count){gl.bufferSubData(bufferType,0,array)}else if(0===updateRange.count){console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.")}else{gl.bufferSubData(bufferType,updateRange.offset*array.BYTES_PER_ELEMENT,array.subarray(updateRange.offset,updateRange.offset+updateRange.count));updateRange.count=-1}}function get(attribute){if(attribute.isInterleavedBufferAttribute)attribute=attribute.data;return buffers.get(attribute)}function remove(attribute){if(attribute.isInterleavedBufferAttribute)attribute=attribute.data;var data=buffers.get(attribute);if(data){gl.deleteBuffer(data.buffer);buffers.delete(attribute)}}function update(attribute,bufferType){if(attribute.isInterleavedBufferAttribute)attribute=attribute.data;var data=buffers.get(attribute);if(data===void 0){buffers.set(attribute,createBuffer(attribute,bufferType))}else if(data.version<attribute.version){updateBuffer(data.buffer,attribute,bufferType);data.version=attribute.version}}return{get:get,remove:remove,update:update}}var WebGLAttributes$1={WebGLAttributes:WebGLAttributes};_exports.$WebGLAttributes=WebGLAttributes$1;function WebGLBackground(renderer,state,objects,premultipliedAlpha){var clearColor=new Color(0),clearAlpha=0,planeMesh,boxMesh,currentBackground=null,currentBackgroundVersion=0;function render(renderList,scene,camera,forceClear){var background=scene.background;if(null===background){setClear(clearColor,clearAlpha);currentBackground=null;currentBackgroundVersion=0}else if(background&&background.isColor){setClear(background,1);forceClear=!0;currentBackground=null;currentBackgroundVersion=0}if(renderer.autoClear||forceClear){renderer.clear(renderer.autoClearColor,renderer.autoClearDepth,renderer.autoClearStencil)}if(background&&(background.isCubeTexture||background.isWebGLRenderTargetCube)){if(boxMesh===void 0){boxMesh=new Mesh(new BoxBufferGeometry(1,1,1),new ShaderMaterial({type:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.cube.uniforms),vertexShader:ShaderLib.cube.vertexShader,fragmentShader:ShaderLib.cube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1}));boxMesh.geometry.removeAttribute("normal");boxMesh.geometry.removeAttribute("uv");boxMesh.onBeforeRender=function(renderer,scene,camera){this.matrixWorld.copyPosition(camera.matrixWorld)};Object.defineProperty(boxMesh.material,"map",{get:function(){return this.uniforms.tCube.value}});objects.update(boxMesh)}var texture=background.isWebGLRenderTargetCube?background.texture:background;boxMesh.material.uniforms.tCube.value=texture;boxMesh.material.uniforms.tFlip.value=background.isWebGLRenderTargetCube?1:-1;if(currentBackground!==background||currentBackgroundVersion!==texture.version){boxMesh.material.needsUpdate=!0;currentBackground=background;currentBackgroundVersion=texture.version}renderList.unshift(boxMesh,boxMesh.geometry,boxMesh.material,0,0,null)}else if(background&&background.isTexture){if(planeMesh===void 0){planeMesh=new Mesh(new PlaneBufferGeometry(2,2),new ShaderMaterial({type:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1}));planeMesh.geometry.removeAttribute("normal");Object.defineProperty(planeMesh.material,"map",{get:function(){return this.uniforms.t2D.value}});objects.update(planeMesh)}planeMesh.material.uniforms.t2D.value=background;if(!0===background.matrixAutoUpdate){background.updateMatrix()}planeMesh.material.uniforms.uvTransform.value.copy(background.matrix);if(currentBackground!==background||currentBackgroundVersion!==background.version){planeMesh.material.needsUpdate=!0;currentBackground=background;currentBackgroundVersion=background.version}renderList.unshift(planeMesh,planeMesh.geometry,planeMesh.material,0,0,null)}}function setClear(color,alpha){state.buffers.color.setClear(color.r,color.g,color.b,alpha,premultipliedAlpha)}return{getClearColor:function(){return clearColor},setClearColor:function(color,alpha){clearColor.set(color);clearAlpha=alpha!==void 0?alpha:1;setClear(clearColor,clearAlpha)},getClearAlpha:function(){return clearAlpha},setClearAlpha:function(alpha){clearAlpha=alpha;setClear(clearColor,clearAlpha)},render:render}}var WebGLBackground$1={WebGLBackground:WebGLBackground};_exports.$WebGLBackground=WebGLBackground$1;function WebGLBufferRenderer(gl,extensions,info,capabilities){var mode;function setMode(value){mode=value}function render(start,count){gl.drawArrays(mode,start,count);info.update(count,mode)}function renderInstances(geometry,start,count){var extension;if(capabilities.isWebGL2){extension=gl}else{extension=extensions.get("ANGLE_instanced_arrays");if(null===extension){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}}extension[capabilities.isWebGL2?"drawArraysInstanced":"drawArraysInstancedANGLE"](mode,start,count,geometry.maxInstancedCount);info.update(count,mode,geometry.maxInstancedCount)}this.setMode=setMode;this.render=render;this.renderInstances=renderInstances}var WebGLBufferRenderer$1={WebGLBufferRenderer:WebGLBufferRenderer};_exports.$WebGLBufferRenderer=WebGLBufferRenderer$1;function WebGLCapabilities(gl,extensions,parameters){var maxAnisotropy;function getMaxAnisotropy(){if(maxAnisotropy!==void 0)return maxAnisotropy;var extension=extensions.get("EXT_texture_filter_anisotropic");if(null!==extension){maxAnisotropy=gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else{maxAnisotropy=0}return maxAnisotropy}function getMaxPrecision(precision){if("highp"===precision){if(0<gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_FLOAT).precision&&0<gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_FLOAT).precision){return"highp"}precision="mediump"}if("mediump"===precision){if(0<gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_FLOAT).precision&&0<gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_FLOAT).precision){return"mediump"}}return"lowp"}var isWebGL2="undefined"!==typeof WebGL2RenderingContext&&gl instanceof WebGL2RenderingContext,precision=parameters.precision!==void 0?parameters.precision:"highp",maxPrecision=getMaxPrecision(precision);if(maxPrecision!==precision){console.warn("THREE.WebGLRenderer:",precision,"not supported, using",maxPrecision,"instead.");precision=maxPrecision}var logarithmicDepthBuffer=!0===parameters.logarithmicDepthBuffer,maxTextures=gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures=gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize=gl.getParameter(gl.MAX_TEXTURE_SIZE),maxCubemapSize=gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes=gl.getParameter(gl.MAX_VERTEX_ATTRIBS),maxVertexUniforms=gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings=gl.getParameter(gl.MAX_VARYING_VECTORS),maxFragmentUniforms=gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures=0<maxVertexTextures,floatFragmentTextures=isWebGL2||!!extensions.get("OES_texture_float"),floatVertexTextures=vertexTextures&&floatFragmentTextures,maxSamples=isWebGL2?gl.getParameter(gl.MAX_SAMPLES):0;return{isWebGL2:isWebGL2,getMaxAnisotropy:getMaxAnisotropy,getMaxPrecision:getMaxPrecision,precision:precision,logarithmicDepthBuffer:logarithmicDepthBuffer,maxTextures:maxTextures,maxVertexTextures:maxVertexTextures,maxTextureSize:maxTextureSize,maxCubemapSize:maxCubemapSize,maxAttributes:maxAttributes,maxVertexUniforms:maxVertexUniforms,maxVaryings:maxVaryings,maxFragmentUniforms:maxFragmentUniforms,vertexTextures:vertexTextures,floatFragmentTextures:floatFragmentTextures,floatVertexTextures:floatVertexTextures,maxSamples:maxSamples}}var WebGLCapabilities$1={WebGLCapabilities:WebGLCapabilities};_exports.$WebGLCapabilities=WebGLCapabilities$1;function WebGLClipping(){var scope=this,globalState=null,numGlobalPlanes=0,localClippingEnabled=!1,renderingShadows=!1,plane=new Plane,viewNormalMatrix=new Matrix3,uniform={value:null,needsUpdate:!1};this.uniform=uniform;this.numPlanes=0;this.numIntersection=0;this.init=function(planes,enableLocalClipping,camera){var enabled=0!==planes.length||enableLocalClipping||0!==numGlobalPlanes||localClippingEnabled;localClippingEnabled=enableLocalClipping;globalState=projectPlanes(planes,camera,0);numGlobalPlanes=planes.length;return enabled};this.beginShadows=function(){renderingShadows=!0;projectPlanes(null)};this.endShadows=function(){renderingShadows=!1;resetGlobalState()};this.setState=function(planes,clipIntersection,clipShadows,camera,cache,fromCache){if(!localClippingEnabled||null===planes||0===planes.length||renderingShadows&&!clipShadows){if(renderingShadows){projectPlanes(null)}else{resetGlobalState()}}else{var nGlobal=renderingShadows?0:numGlobalPlanes,lGlobal=4*nGlobal,dstArray=cache.clippingState||null;uniform.value=dstArray;dstArray=projectPlanes(planes,camera,lGlobal,fromCache);for(var i=0;i!==lGlobal;++i){dstArray[i]=globalState[i]}cache.clippingState=dstArray;this.numIntersection=clipIntersection?this.numPlanes:0;this.numPlanes+=nGlobal}};function resetGlobalState(){if(uniform.value!==globalState){uniform.value=globalState;uniform.needsUpdate=0<numGlobalPlanes}scope.numPlanes=numGlobalPlanes;scope.numIntersection=0}function projectPlanes(planes,camera,dstOffset,skipTransform){var nPlanes=null!==planes?planes.length:0,dstArray=null;if(0!==nPlanes){dstArray=uniform.value;if(!0!==skipTransform||null===dstArray){var flatSize=dstOffset+4*nPlanes,viewMatrix=camera.matrixWorldInverse;viewNormalMatrix.getNormalMatrix(viewMatrix);if(null===dstArray||dstArray.length<flatSize){dstArray=new Float32Array(flatSize)}for(var i=0,i4=dstOffset;i!==nPlanes;++i,i4+=4){plane.copy(planes[i]).applyMatrix4(viewMatrix,viewNormalMatrix);plane.normal.toArray(dstArray,i4);dstArray[i4+3]=plane.constant}}uniform.value=dstArray;uniform.needsUpdate=!0}scope.numPlanes=nPlanes;return dstArray}}var WebGLClipping$1={WebGLClipping:WebGLClipping};_exports.$WebGLClipping=WebGLClipping$1;function WebGLExtensions(gl){var extensions={};return{get:function(name){if(extensions[name]!==void 0){return extensions[name]}var extension;switch(name){case"WEBGL_depth_texture":extension=gl.getExtension("WEBGL_depth_texture")||gl.getExtension("MOZ_WEBGL_depth_texture")||gl.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":extension=gl.getExtension("EXT_texture_filter_anisotropic")||gl.getExtension("MOZ_EXT_texture_filter_anisotropic")||gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":extension=gl.getExtension("WEBGL_compressed_texture_s3tc")||gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":extension=gl.getExtension("WEBGL_compressed_texture_pvrtc")||gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:extension=gl.getExtension(name);}if(null===extension){console.warn("THREE.WebGLRenderer: "+name+" extension not supported.")}extensions[name]=extension;return extension}}}var WebGLExtensions$1={WebGLExtensions:WebGLExtensions};_exports.$WebGLExtensions=WebGLExtensions$1;function WebGLGeometries(gl,attributes,info){var geometries={},wireframeAttributes={};function onGeometryDispose(event){var geometry=event.target,buffergeometry=geometries[geometry.id];if(null!==buffergeometry.index){attributes.remove(buffergeometry.index)}for(var name in buffergeometry.attributes){attributes.remove(buffergeometry.attributes[name])}geometry.removeEventListener("dispose",onGeometryDispose);delete geometries[geometry.id];var attribute=wireframeAttributes[buffergeometry.id];if(attribute){attributes.remove(attribute);delete wireframeAttributes[buffergeometry.id]}info.memory.geometries--}function get(object,geometry){var buffergeometry=geometries[geometry.id];if(buffergeometry)return buffergeometry;geometry.addEventListener("dispose",onGeometryDispose);if(geometry.isBufferGeometry){buffergeometry=geometry}else if(geometry.isGeometry){if(geometry._bufferGeometry===void 0){geometry._bufferGeometry=new BufferGeometry().setFromObject(object)}buffergeometry=geometry._bufferGeometry}geometries[geometry.id]=buffergeometry;info.memory.geometries++;return buffergeometry}function update(geometry){var index=geometry.index,geometryAttributes=geometry.attributes;if(null!==index){attributes.update(index,gl.ELEMENT_ARRAY_BUFFER)}for(var name in geometryAttributes){attributes.update(geometryAttributes[name],gl.ARRAY_BUFFER)}var morphAttributes=geometry.morphAttributes;for(var name in morphAttributes){for(var array=morphAttributes[name],i=0,l=array.length;i<l;i++){attributes.update(array[i],gl.ARRAY_BUFFER)}}}function getWireframeAttribute(geometry){var attribute=wireframeAttributes[geometry.id];if(attribute)return attribute;var indices=[],geometryIndex=geometry.index,geometryAttributes=geometry.attributes;if(null!==geometryIndex){for(var array=geometryIndex.array,i=0,l=array.length;i<l;i+=3){var a=array[i+0],b=array[i+1],c=array[i+2];indices.push(a,b,b,c,c,a)}}else{for(var array=geometryAttributes.position.array,i=0,l=array.length/3-1;i<l;i+=3){var a=i+0,b=i+1,c=i+2;indices.push(a,b,b,c,c,a)}}attribute=new(65535<arrayMax(indices)?Uint32BufferAttribute:Uint16BufferAttribute)(indices,1);attributes.update(attribute,gl.ELEMENT_ARRAY_BUFFER);wireframeAttributes[geometry.id]=attribute;return attribute}return{get:get,update:update,getWireframeAttribute:getWireframeAttribute}}var WebGLGeometries$1={WebGLGeometries:WebGLGeometries};_exports.$WebGLGeometries=WebGLGeometries$1;function WebGLIndexedBufferRenderer(gl,extensions,info,capabilities){var mode;function setMode(value){mode=value}var type,bytesPerElement;function setIndex(value){type=value.type;bytesPerElement=value.bytesPerElement}function render(start,count){gl.drawElements(mode,count,type,start*bytesPerElement);info.update(count,mode)}function renderInstances(geometry,start,count){var extension;if(capabilities.isWebGL2){extension=gl}else{var extension=extensions.get("ANGLE_instanced_arrays");if(null===extension){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}}extension[capabilities.isWebGL2?"drawElementsInstanced":"drawElementsInstancedANGLE"](mode,count,type,start*bytesPerElement,geometry.maxInstancedCount);info.update(count,mode,geometry.maxInstancedCount)}this.setMode=setMode;this.setIndex=setIndex;this.render=render;this.renderInstances=renderInstances}var WebGLIndexedBufferRenderer$1={WebGLIndexedBufferRenderer:WebGLIndexedBufferRenderer};_exports.$WebGLIndexedBufferRenderer=WebGLIndexedBufferRenderer$1;function WebGLInfo(gl){var memory={geometries:0,textures:0},render={frame:0,calls:0,triangles:0,points:0,lines:0};function update(count,mode,instanceCount){instanceCount=instanceCount||1;render.calls++;switch(mode){case gl.TRIANGLES:render.triangles+=instanceCount*(count/3);break;case gl.TRIANGLE_STRIP:case gl.TRIANGLE_FAN:render.triangles+=instanceCount*(count-2);break;case gl.LINES:render.lines+=instanceCount*(count/2);break;case gl.LINE_STRIP:render.lines+=instanceCount*(count-1);break;case gl.LINE_LOOP:render.lines+=instanceCount*count;break;case gl.POINTS:render.points+=instanceCount*count;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",mode);break;}}function reset(){render.frame++;render.calls=0;render.triangles=0;render.points=0;render.lines=0}return{memory:memory,render:render,programs:null,autoReset:!0,reset:reset,update:update}}var WebGLInfo$1={WebGLInfo:WebGLInfo};_exports.$WebGLInfo=WebGLInfo$1;function absNumericalSort(a,b){return _Mathabs(b[1])-_Mathabs(a[1])}function WebGLMorphtargets(gl){var influencesList={},morphInfluences=new Float32Array(8);function update(object,geometry,material,program){var objectInfluences=object.morphTargetInfluences,length=objectInfluences.length,influences=influencesList[geometry.id];if(influences===void 0){influences=[];for(var i=0;i<length;i++){influences[i]=[i,0]}influencesList[geometry.id]=influences}for(var morphTargets=material.morphTargets&&geometry.morphAttributes.position,morphNormals=material.morphNormals&&geometry.morphAttributes.normal,i=0,influence;i<length;i++){influence=influences[i];if(0!==influence[1]){if(morphTargets)geometry.removeAttribute("morphTarget"+i);if(morphNormals)geometry.removeAttribute("morphNormal"+i)}}for(var i=0,influence;i<length;i++){influence=influences[i];influence[0]=i;influence[1]=objectInfluences[i]}influences.sort(absNumericalSort);for(var i=0,influence;8>i;i++){influence=influences[i];if(influence){var index=influence[0],value=influence[1];if(value){if(morphTargets)geometry.addAttribute("morphTarget"+i,morphTargets[index]);if(morphNormals)geometry.addAttribute("morphNormal"+i,morphNormals[index]);morphInfluences[i]=value;continue}}morphInfluences[i]=0}program.getUniforms().setValue(gl,"morphTargetInfluences",morphInfluences)}return{update:update}}var WebGLMorphtargets$1={WebGLMorphtargets:WebGLMorphtargets};_exports.$WebGLMorphtargets=WebGLMorphtargets$1;function WebGLObjects(geometries,info){var updateList={};function update(object){var frame=info.render.frame,geometry=object.geometry,buffergeometry=geometries.get(object,geometry);if(updateList[buffergeometry.id]!==frame){if(geometry.isGeometry){buffergeometry.updateFromObject(object)}geometries.update(buffergeometry);updateList[buffergeometry.id]=frame}return buffergeometry}function dispose(){updateList={}}return{update:update,dispose:dispose}}var WebGLObjects$1={WebGLObjects:WebGLObjects};_exports.$WebGLObjects=WebGLObjects$1;function CubeTexture(images,mapping,wrapS,wrapT,magFilter,minFilter,format,type,anisotropy,encoding){images=images!==void 0?images:[];mapping=mapping!==void 0?mapping:CubeReflectionMapping;Texture.call(this,images,mapping,wrapS,wrapT,magFilter,minFilter,format,type,anisotropy,encoding);this.flipY=!1}CubeTexture.prototype=Object.create(Texture.prototype);CubeTexture.prototype.constructor=CubeTexture;CubeTexture.prototype.isCubeTexture=!0;Object.defineProperty(CubeTexture.prototype,"images",{get:function(){return this.image},set:function(value){this.image=value}});var CubeTexture$1={CubeTexture:CubeTexture};_exports.$CubeTexture=CubeTexture$1;function DataTexture3D(data,width,height,depth){Texture.call(this,null);this.image={data:data,width:width,height:height,depth:depth};this.magFilter=NearestFilter;this.minFilter=NearestFilter;this.generateMipmaps=!1;this.flipY=!1}DataTexture3D.prototype=Object.create(Texture.prototype);DataTexture3D.prototype.constructor=DataTexture3D;DataTexture3D.prototype.isDataTexture3D=!0;var DataTexture3D$1={DataTexture3D:DataTexture3D};_exports.$DataTexture3D=DataTexture3D$1;var emptyTexture=new Texture,emptyTexture3d=new DataTexture3D,emptyCubeTexture=new CubeTexture;function UniformContainer(){this.seq=[];this.map={}}var arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(array,nBlocks,blockSize){var firstElem=array[0];if(0>=firstElem||0<firstElem)return array;var n=nBlocks*blockSize,r=arrayCacheF32[n];if(r===void 0){r=new Float32Array(n);arrayCacheF32[n]=r}if(0!==nBlocks){firstElem.toArray(r,0);for(var i=1,offset=0;i!==nBlocks;++i){offset+=blockSize;array[i].toArray(r,offset)}}return r}function arraysEqual(a,b){if(a.length!==b.length)return!1;for(var i=0,l=a.length;i<l;i++){if(a[i]!==b[i])return!1}return!0}function copyArray(a,b){for(var i=0,l=b.length;i<l;i++){a[i]=b[i]}}function allocTexUnits(renderer,n){var r=arrayCacheI32[n];if(r===void 0){r=new Int32Array(n);arrayCacheI32[n]=r}for(var i=0;i!==n;++i)r[i]=renderer.allocTextureUnit();return r}function setValue1f(gl,v){var cache=this.cache;if(cache[0]===v)return;gl.uniform1f(this.addr,v);cache[0]=v}function setValue1i(gl,v){var cache=this.cache;if(cache[0]===v)return;gl.uniform1i(this.addr,v);cache[0]=v}function setValue2fv(gl,v){var cache=this.cache;if(v.x!==void 0){if(cache[0]!==v.x||cache[1]!==v.y){gl.uniform2f(this.addr,v.x,v.y);cache[0]=v.x;cache[1]=v.y}}else{if(arraysEqual(cache,v))return;gl.uniform2fv(this.addr,v);copyArray(cache,v)}}function setValue3fv(gl,v){var cache=this.cache;if(v.x!==void 0){if(cache[0]!==v.x||cache[1]!==v.y||cache[2]!==v.z){gl.uniform3f(this.addr,v.x,v.y,v.z);cache[0]=v.x;cache[1]=v.y;cache[2]=v.z}}else if(v.r!==void 0){if(cache[0]!==v.r||cache[1]!==v.g||cache[2]!==v.b){gl.uniform3f(this.addr,v.r,v.g,v.b);cache[0]=v.r;cache[1]=v.g;cache[2]=v.b}}else{if(arraysEqual(cache,v))return;gl.uniform3fv(this.addr,v);copyArray(cache,v)}}function setValue4fv(gl,v){var cache=this.cache;if(v.x!==void 0){if(cache[0]!==v.x||cache[1]!==v.y||cache[2]!==v.z||cache[3]!==v.w){gl.uniform4f(this.addr,v.x,v.y,v.z,v.w);cache[0]=v.x;cache[1]=v.y;cache[2]=v.z;cache[3]=v.w}}else{if(arraysEqual(cache,v))return;gl.uniform4fv(this.addr,v);copyArray(cache,v)}}function setValue2fm(gl,v){var cache=this.cache,elements=v.elements;if(elements===void 0){if(arraysEqual(cache,v))return;gl.uniformMatrix2fv(this.addr,!1,v);copyArray(cache,v)}else{if(arraysEqual(cache,elements))return;mat2array.set(elements);gl.uniformMatrix2fv(this.addr,!1,mat2array);copyArray(cache,elements)}}function setValue3fm(gl,v){var cache=this.cache,elements=v.elements;if(elements===void 0){if(arraysEqual(cache,v))return;gl.uniformMatrix3fv(this.addr,!1,v);copyArray(cache,v)}else{if(arraysEqual(cache,elements))return;mat3array.set(elements);gl.uniformMatrix3fv(this.addr,!1,mat3array);copyArray(cache,elements)}}function setValue4fm(gl,v){var cache=this.cache,elements=v.elements;if(elements===void 0){if(arraysEqual(cache,v))return;gl.uniformMatrix4fv(this.addr,!1,v);copyArray(cache,v)}else{if(arraysEqual(cache,elements))return;mat4array.set(elements);gl.uniformMatrix4fv(this.addr,!1,mat4array);copyArray(cache,elements)}}function setValueT1(gl,v,renderer){var cache=this.cache,unit=renderer.allocTextureUnit();if(cache[0]!==unit){gl.uniform1i(this.addr,unit);cache[0]=unit}renderer.setTexture2D(v||emptyTexture,unit)}function setValueT3D1(gl,v,renderer){var cache=this.cache,unit=renderer.allocTextureUnit();if(cache[0]!==unit){gl.uniform1i(this.addr,unit);cache[0]=unit}renderer.setTexture3D(v||emptyTexture3d,unit)}function setValueT6(gl,v,renderer){var cache=this.cache,unit=renderer.allocTextureUnit();if(cache[0]!==unit){gl.uniform1i(this.addr,unit);cache[0]=unit}renderer.setTextureCube(v||emptyCubeTexture,unit)}function setValue2iv(gl,v){var cache=this.cache;if(arraysEqual(cache,v))return;gl.uniform2iv(this.addr,v);copyArray(cache,v)}function setValue3iv(gl,v){var cache=this.cache;if(arraysEqual(cache,v))return;gl.uniform3iv(this.addr,v);copyArray(cache,v)}function setValue4iv(gl,v){var cache=this.cache;if(arraysEqual(cache,v))return;gl.uniform4iv(this.addr,v);copyArray(cache,v)}function getSingularSetter(type){switch(type){case 5126:return setValue1f;case 35664:return setValue2fv;case 35665:return setValue3fv;case 35666:return setValue4fv;case 35674:return setValue2fm;case 35675:return setValue3fm;case 35676:return setValue4fm;case 35678:case 36198:return setValueT1;case 35679:return setValueT3D1;case 35680:return setValueT6;case 5124:case 35670:return setValue1i;case 35667:case 35671:return setValue2iv;case 35668:case 35672:return setValue3iv;case 35669:case 35673:return setValue4iv;}}function setValue1fv(gl,v){var cache=this.cache;if(arraysEqual(cache,v))return;gl.uniform1fv(this.addr,v);copyArray(cache,v)}function setValue1iv(gl,v){var cache=this.cache;if(arraysEqual(cache,v))return;gl.uniform1iv(this.addr,v);copyArray(cache,v)}function setValueV2a(gl,v){var cache=this.cache,data=flatten(v,this.size,2);if(arraysEqual(cache,data))return;gl.uniform2fv(this.addr,data);this.updateCache(data)}function setValueV3a(gl,v){var cache=this.cache,data=flatten(v,this.size,3);if(arraysEqual(cache,data))return;gl.uniform3fv(this.addr,data);this.updateCache(data)}function setValueV4a(gl,v){var cache=this.cache,data=flatten(v,this.size,4);if(arraysEqual(cache,data))return;gl.uniform4fv(this.addr,data);this.updateCache(data)}function setValueM2a(gl,v){var cache=this.cache,data=flatten(v,this.size,4);if(arraysEqual(cache,data))return;gl.uniformMatrix2fv(this.addr,!1,data);this.updateCache(data)}function setValueM3a(gl,v){var cache=this.cache,data=flatten(v,this.size,9);if(arraysEqual(cache,data))return;gl.uniformMatrix3fv(this.addr,!1,data);this.updateCache(data)}function setValueM4a(gl,v){var cache=this.cache,data=flatten(v,this.size,16);if(arraysEqual(cache,data))return;gl.uniformMatrix4fv(this.addr,!1,data);this.updateCache(data)}function setValueT1a(gl,v,renderer){var cache=this.cache,n=v.length,units=allocTexUnits(renderer,n);if(!1===arraysEqual(cache,units)){gl.uniform1iv(this.addr,units);copyArray(cache,units)}for(var i=0;i!==n;++i){renderer.setTexture2D(v[i]||emptyTexture,units[i])}}function setValueT6a(gl,v,renderer){var cache=this.cache,n=v.length,units=allocTexUnits(renderer,n);if(!1===arraysEqual(cache,units)){gl.uniform1iv(this.addr,units);copyArray(cache,units)}for(var i=0;i!==n;++i){renderer.setTextureCube(v[i]||emptyCubeTexture,units[i])}}function getPureArraySetter(type){switch(type){case 5126:return setValue1fv;case 35664:return setValueV2a;case 35665:return setValueV3a;case 35666:return setValueV4a;case 35674:return setValueM2a;case 35675:return setValueM3a;case 35676:return setValueM4a;case 35678:return setValueT1a;case 35680:return setValueT6a;case 5124:case 35670:return setValue1iv;case 35667:case 35671:return setValue2iv;case 35668:case 35672:return setValue3iv;case 35669:case 35673:return setValue4iv;}}function SingleUniform(id,activeInfo,addr){this.id=id;this.addr=addr;this.cache=[];this.setValue=getSingularSetter(activeInfo.type)}function PureArrayUniform(id,activeInfo,addr){this.id=id;this.addr=addr;this.cache=[];this.size=activeInfo.size;this.setValue=getPureArraySetter(activeInfo.type)}PureArrayUniform.prototype.updateCache=function(data){var cache=this.cache;if(data instanceof Float32Array&&cache.length!==data.length){this.cache=new Float32Array(data.length)}copyArray(cache,data)};function StructuredUniform(id){this.id=id;UniformContainer.call(this)}StructuredUniform.prototype.setValue=function(gl,value,renderer){for(var seq=this.seq,i=0,n=seq.length,u;i!==n;++i){u=seq[i];u.setValue(gl,value[u.id],renderer)}};var RePathPart=/([\w\d_]+)(\])?(\[|\.)?/g;function addUniform(container,uniformObject){container.seq.push(uniformObject);container.map[uniformObject.id]=uniformObject}function parseUniform(activeInfo,addr,container){var path=activeInfo.name,pathLength=path.length;RePathPart.lastIndex=0;while(!0){var match=RePathPart.exec(path),matchEnd=RePathPart.lastIndex,id=match[1],idIsIndex="]"===match[2],subscript=match[3];if(idIsIndex)id=0|id;if(subscript===void 0||"["===subscript&&matchEnd+2===pathLength){addUniform(container,subscript===void 0?new SingleUniform(id,activeInfo,addr):new PureArrayUniform(id,activeInfo,addr));break}else{var map=container.map,next=map[id];if(next===void 0){next=new StructuredUniform(id);addUniform(container,next)}container=next}}}function WebGLUniforms(gl,program,renderer){UniformContainer.call(this);this.renderer=renderer;for(var n=gl.getProgramParameter(program,gl.ACTIVE_UNIFORMS),i=0;i<n;++i){var info=gl.getActiveUniform(program,i),addr=gl.getUniformLocation(program,info.name);parseUniform(info,addr,this)}}WebGLUniforms.prototype.setValue=function(gl,name,value){var u=this.map[name];if(u!==void 0)u.setValue(gl,value,this.renderer)};WebGLUniforms.prototype.setOptional=function(gl,object,name){var v=object[name];if(v!==void 0)this.setValue(gl,name,v)};WebGLUniforms.upload=function(gl,seq,values,renderer){for(var i=0,n=seq.length;i!==n;++i){var u=seq[i],v=values[u.id];if(!1!==v.needsUpdate){u.setValue(gl,v.value,renderer)}}};WebGLUniforms.seqWithValue=function(seq,values){for(var r=[],i=0,n=seq.length,u;i!==n;++i){u=seq[i];if(u.id in values)r.push(u)}return r};var WebGLUniforms$1={WebGLUniforms:WebGLUniforms};_exports.$WebGLUniforms=WebGLUniforms$1;function addLineNumbers(string){for(var lines=string.split("\n"),i=0;i<lines.length;i++){lines[i]=i+1+": "+lines[i]}return lines.join("\n")}function WebGLShader(gl,type,string){var shader=gl.createShader(type);gl.shaderSource(shader,string);gl.compileShader(shader);if(!1===gl.getShaderParameter(shader,gl.COMPILE_STATUS)){console.error("THREE.WebGLShader: Shader couldn't compile.")}if(""!==gl.getShaderInfoLog(shader)){console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",type===gl.VERTEX_SHADER?"vertex":"fragment",gl.getShaderInfoLog(shader),addLineNumbers(string))}return shader}var WebGLShader$1={WebGLShader:WebGLShader};_exports.$WebGLShader=WebGLShader$1;var programIdCount=0;function getEncodingComponents(encoding){switch(encoding){case LinearEncoding:return["Linear","( value )"];case sRGBEncoding:return["sRGB","( value )"];case RGBEEncoding:return["RGBE","( value )"];case RGBM7Encoding:return["RGBM","( value, 7.0 )"];case RGBM16Encoding:return["RGBM","( value, 16.0 )"];case RGBDEncoding:return["RGBD","( value, 256.0 )"];case GammaEncoding:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+encoding);}}function getTexelDecodingFunction(functionName,encoding){var components=getEncodingComponents(encoding);return"vec4 "+functionName+"( vec4 value ) { return "+components[0]+"ToLinear"+components[1]+"; }"}function getTexelEncodingFunction(functionName,encoding){var components=getEncodingComponents(encoding);return"vec4 "+functionName+"( vec4 value ) { return LinearTo"+components[0]+components[1]+"; }"}function getToneMappingFunction(functionName,toneMapping){var toneMappingName;switch(toneMapping){case LinearToneMapping:toneMappingName="Linear";break;case ReinhardToneMapping:toneMappingName="Reinhard";break;case Uncharted2ToneMapping:toneMappingName="Uncharted2";break;case CineonToneMapping:toneMappingName="OptimizedCineon";break;case ACESFilmicToneMapping:toneMappingName="ACESFilmic";break;default:throw new Error("unsupported toneMapping: "+toneMapping);}return"vec3 "+functionName+"( vec3 color ) { return "+toneMappingName+"ToneMapping( color ); }"}function generateExtensions(extensions,parameters,rendererExtensions){extensions=extensions||{};var chunks=[extensions.derivatives||parameters.envMapCubeUV||parameters.bumpMap||parameters.normalMap&&!parameters.objectSpaceNormalMap||parameters.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(extensions.fragDepth||parameters.logarithmicDepthBuffer)&&rendererExtensions.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",extensions.drawBuffers&&rendererExtensions.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(extensions.shaderTextureLOD||parameters.envMap)&&rendererExtensions.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""];return chunks.filter(filterEmptyLine).join("\n")}function generateDefines(defines){var chunks=[];for(var name in defines){var value=defines[name];if(!1===value)continue;chunks.push("#define "+name+" "+value)}return chunks.join("\n")}function fetchAttributeLocations(gl,program){for(var attributes={},n=gl.getProgramParameter(program,gl.ACTIVE_ATTRIBUTES),i=0;i<n;i++){var info=gl.getActiveAttrib(program,i),name=info.name;attributes[name]=gl.getAttribLocation(program,name)}return attributes}function filterEmptyLine(string){return""!==string}function replaceLightNums(string,parameters){return string.replace(/NUM_DIR_LIGHTS/g,parameters.numDirLights).replace(/NUM_SPOT_LIGHTS/g,parameters.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,parameters.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,parameters.numPointLights).replace(/NUM_HEMI_LIGHTS/g,parameters.numHemiLights)}function replaceClippingPlaneNums(string,parameters){return string.replace(/NUM_CLIPPING_PLANES/g,parameters.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,parameters.numClippingPlanes-parameters.numClipIntersection)}function parseIncludes(string){var pattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function replace(match,include){var replace=ShaderChunk[include];if(replace===void 0){throw new Error("Can not resolve #include <"+include+">")}return parseIncludes(replace)}return string.replace(pattern,replace)}function unrollLoops(string){var pattern=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;function replace(match,start,end,snippet){for(var unroll="",i=parseInt(start);i<parseInt(end);i++){unroll+=snippet.replace(/\[ i \]/g,"[ "+i+" ]")}return unroll}return string.replace(pattern,replace)}function WebGLProgram(renderer,extensions,code,material,shader,parameters,capabilities){var gl=renderer.context,defines=material.defines,vertexShader=shader.vertexShader,fragmentShader=shader.fragmentShader,shadowMapTypeDefine="SHADOWMAP_TYPE_BASIC";if(parameters.shadowMapType===PCFShadowMap){shadowMapTypeDefine="SHADOWMAP_TYPE_PCF"}else if(parameters.shadowMapType===PCFSoftShadowMap){shadowMapTypeDefine="SHADOWMAP_TYPE_PCF_SOFT"}var envMapTypeDefine="ENVMAP_TYPE_CUBE",envMapModeDefine="ENVMAP_MODE_REFLECTION",envMapBlendingDefine="ENVMAP_BLENDING_MULTIPLY";if(parameters.envMap){switch(material.envMap.mapping){case CubeReflectionMapping:case CubeRefractionMapping:envMapTypeDefine="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:case CubeUVRefractionMapping:envMapTypeDefine="ENVMAP_TYPE_CUBE_UV";break;case EquirectangularReflectionMapping:case EquirectangularRefractionMapping:envMapTypeDefine="ENVMAP_TYPE_EQUIREC";break;case SphericalReflectionMapping:envMapTypeDefine="ENVMAP_TYPE_SPHERE";break;}switch(material.envMap.mapping){case CubeRefractionMapping:case EquirectangularRefractionMapping:envMapModeDefine="ENVMAP_MODE_REFRACTION";break;}switch(material.combine){case MultiplyOperation:envMapBlendingDefine="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:envMapBlendingDefine="ENVMAP_BLENDING_MIX";break;case AddOperation:envMapBlendingDefine="ENVMAP_BLENDING_ADD";break;}}var gammaFactorDefine=0<renderer.gammaFactor?renderer.gammaFactor:1,customExtensions=capabilities.isWebGL2?"":generateExtensions(material.extensions,parameters,extensions),customDefines=generateDefines(defines),program=gl.createProgram(),prefixVertex,prefixFragment;if(material.isRawShaderMaterial){prefixVertex=[customDefines].filter(filterEmptyLine).join("\n");if(0<prefixVertex.length){prefixVertex+="\n"}prefixFragment=[customExtensions,customDefines].filter(filterEmptyLine).join("\n");if(0<prefixFragment.length){prefixFragment+="\n"}}else{prefixVertex=["precision "+parameters.precision+" float;","precision "+parameters.precision+" int;","#define SHADER_NAME "+shader.name,customDefines,parameters.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+gammaFactorDefine,"#define MAX_BONES "+parameters.maxBones,parameters.useFog&&parameters.fog?"#define USE_FOG":"",parameters.useFog&&parameters.fogExp?"#define FOG_EXP2":"",parameters.map?"#define USE_MAP":"",parameters.envMap?"#define USE_ENVMAP":"",parameters.envMap?"#define "+envMapModeDefine:"",parameters.lightMap?"#define USE_LIGHTMAP":"",parameters.aoMap?"#define USE_AOMAP":"",parameters.emissiveMap?"#define USE_EMISSIVEMAP":"",parameters.bumpMap?"#define USE_BUMPMAP":"",parameters.normalMap?"#define USE_NORMALMAP":"",parameters.normalMap&&parameters.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",parameters.displacementMap&&parameters.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",parameters.specularMap?"#define USE_SPECULARMAP":"",parameters.roughnessMap?"#define USE_ROUGHNESSMAP":"",parameters.metalnessMap?"#define USE_METALNESSMAP":"",parameters.alphaMap?"#define USE_ALPHAMAP":"",parameters.vertexColors?"#define USE_COLOR":"",parameters.flatShading?"#define FLAT_SHADED":"",parameters.skinning?"#define USE_SKINNING":"",parameters.useVertexTexture?"#define BONE_TEXTURE":"",parameters.morphTargets?"#define USE_MORPHTARGETS":"",parameters.morphNormals&&!1===parameters.flatShading?"#define USE_MORPHNORMALS":"",parameters.doubleSided?"#define DOUBLE_SIDED":"",parameters.flipSided?"#define FLIP_SIDED":"",parameters.shadowMapEnabled?"#define USE_SHADOWMAP":"",parameters.shadowMapEnabled?"#define "+shadowMapTypeDefine:"",parameters.sizeAttenuation?"#define USE_SIZEATTENUATION":"",parameters.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",parameters.logarithmicDepthBuffer&&(capabilities.isWebGL2||extensions.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(filterEmptyLine).join("\n");prefixFragment=[customExtensions,"precision "+parameters.precision+" float;","precision "+parameters.precision+" int;","#define SHADER_NAME "+shader.name,customDefines,parameters.alphaTest?"#define ALPHATEST "+parameters.alphaTest+(parameters.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+gammaFactorDefine,parameters.useFog&&parameters.fog?"#define USE_FOG":"",parameters.useFog&&parameters.fogExp?"#define FOG_EXP2":"",parameters.map?"#define USE_MAP":"",parameters.matcap?"#define USE_MATCAP":"",parameters.envMap?"#define USE_ENVMAP":"",parameters.envMap?"#define "+envMapTypeDefine:"",parameters.envMap?"#define "+envMapModeDefine:"",parameters.envMap?"#define "+envMapBlendingDefine:"",parameters.lightMap?"#define USE_LIGHTMAP":"",parameters.aoMap?"#define USE_AOMAP":"",parameters.emissiveMap?"#define USE_EMISSIVEMAP":"",parameters.bumpMap?"#define USE_BUMPMAP":"",parameters.normalMap?"#define USE_NORMALMAP":"",parameters.normalMap&&parameters.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",parameters.specularMap?"#define USE_SPECULARMAP":"",parameters.roughnessMap?"#define USE_ROUGHNESSMAP":"",parameters.metalnessMap?"#define USE_METALNESSMAP":"",parameters.alphaMap?"#define USE_ALPHAMAP":"",parameters.vertexColors?"#define USE_COLOR":"",parameters.gradientMap?"#define USE_GRADIENTMAP":"",parameters.flatShading?"#define FLAT_SHADED":"",parameters.doubleSided?"#define DOUBLE_SIDED":"",parameters.flipSided?"#define FLIP_SIDED":"",parameters.shadowMapEnabled?"#define USE_SHADOWMAP":"",parameters.shadowMapEnabled?"#define "+shadowMapTypeDefine:"",parameters.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",parameters.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",parameters.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",parameters.logarithmicDepthBuffer&&(capabilities.isWebGL2||extensions.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"",parameters.envMap&&(capabilities.isWebGL2||extensions.get("EXT_shader_texture_lod"))?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",parameters.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",parameters.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",parameters.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",parameters.toneMapping):"",parameters.dithering?"#define DITHERING":"",parameters.outputEncoding||parameters.mapEncoding||parameters.matcapEncoding||parameters.envMapEncoding||parameters.emissiveMapEncoding?ShaderChunk.encodings_pars_fragment:"",parameters.mapEncoding?getTexelDecodingFunction("mapTexelToLinear",parameters.mapEncoding):"",parameters.matcapEncoding?getTexelDecodingFunction("matcapTexelToLinear",parameters.matcapEncoding):"",parameters.envMapEncoding?getTexelDecodingFunction("envMapTexelToLinear",parameters.envMapEncoding):"",parameters.emissiveMapEncoding?getTexelDecodingFunction("emissiveMapTexelToLinear",parameters.emissiveMapEncoding):"",parameters.outputEncoding?getTexelEncodingFunction("linearToOutputTexel",parameters.outputEncoding):"",parameters.depthPacking?"#define DEPTH_PACKING "+material.depthPacking:"","\n"].filter(filterEmptyLine).join("\n")}vertexShader=parseIncludes(vertexShader);vertexShader=replaceLightNums(vertexShader,parameters);vertexShader=replaceClippingPlaneNums(vertexShader,parameters);fragmentShader=parseIncludes(fragmentShader);fragmentShader=replaceLightNums(fragmentShader,parameters);fragmentShader=replaceClippingPlaneNums(fragmentShader,parameters);vertexShader=unrollLoops(vertexShader);fragmentShader=unrollLoops(fragmentShader);if(capabilities.isWebGL2&&!material.isRawShaderMaterial){var isGLSL3ShaderMaterial=!1,versionRegex=/^\s*#version\s+300\s+es\s*\n/;if(material.isShaderMaterial&&null!==vertexShader.match(versionRegex)&&null!==fragmentShader.match(versionRegex)){isGLSL3ShaderMaterial=!0;vertexShader=vertexShader.replace(versionRegex,"");fragmentShader=fragmentShader.replace(versionRegex,"")}prefixVertex=["#version 300 es\n","#define attribute in","#define varying out","#define texture2D texture"].join("\n")+"\n"+prefixVertex;prefixFragment=["#version 300 es\n","#define varying in",isGLSL3ShaderMaterial?"":"out highp vec4 pc_fragColor;",isGLSL3ShaderMaterial?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+prefixFragment}var vertexGlsl=prefixVertex+vertexShader,fragmentGlsl=prefixFragment+fragmentShader,glVertexShader=WebGLShader(gl,gl.VERTEX_SHADER,vertexGlsl),glFragmentShader=WebGLShader(gl,gl.FRAGMENT_SHADER,fragmentGlsl);gl.attachShader(program,glVertexShader);gl.attachShader(program,glFragmentShader);if(material.index0AttributeName!==void 0){gl.bindAttribLocation(program,0,material.index0AttributeName)}else if(!0===parameters.morphTargets){gl.bindAttribLocation(program,0,"position")}gl.linkProgram(program);var programLog=gl.getProgramInfoLog(program).trim(),vertexLog=gl.getShaderInfoLog(glVertexShader).trim(),fragmentLog=gl.getShaderInfoLog(glFragmentShader).trim(),runnable=!0,haveDiagnostics=!0;if(!1===gl.getProgramParameter(program,gl.LINK_STATUS)){runnable=!1;console.error("THREE.WebGLProgram: shader error: ",gl.getError(),"gl.VALIDATE_STATUS",gl.getProgramParameter(program,gl.VALIDATE_STATUS),"gl.getProgramInfoLog",programLog,vertexLog,fragmentLog)}else if(""!==programLog){console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",programLog)}else if(""===vertexLog||""===fragmentLog){haveDiagnostics=!1}if(haveDiagnostics){this.diagnostics={runnable:runnable,material:material,programLog:programLog,vertexShader:{log:vertexLog,prefix:prefixVertex},fragmentShader:{log:fragmentLog,prefix:prefixFragment}}}gl.deleteShader(glVertexShader);gl.deleteShader(glFragmentShader);var cachedUniforms;this.getUniforms=function(){if(cachedUniforms===void 0){cachedUniforms=new WebGLUniforms(gl,program,renderer)}return cachedUniforms};var cachedAttributes;this.getAttributes=function(){if(cachedAttributes===void 0){cachedAttributes=fetchAttributeLocations(gl,program)}return cachedAttributes};this.destroy=function(){gl.deleteProgram(program);this.program=void 0};Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes()}}});this.name=shader.name;this.id=programIdCount++;this.code=code;this.usedTimes=1;this.program=program;this.vertexShader=glVertexShader;this.fragmentShader=glFragmentShader;return this}var WebGLProgram$1={WebGLProgram:WebGLProgram};_exports.$WebGLProgram=WebGLProgram$1;function WebGLPrograms(renderer,extensions,capabilities){var programs=[],shaderIDs={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},parameterNames=["precision","supportsVertexTextures","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","lightMap","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","fog","useFog","fogExp","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering"];function allocateBones(object){var skeleton=object.skeleton,bones=skeleton.bones;if(capabilities.floatVertexTextures){return 1024}else{var nVertexUniforms=capabilities.maxVertexUniforms,nVertexMatrices=_Mathfloor((nVertexUniforms-20)/4),maxBones=_Mathmin(nVertexMatrices,bones.length);if(maxBones<bones.length){console.warn("THREE.WebGLRenderer: Skeleton has "+bones.length+" bones. This GPU supports "+maxBones+".");return 0}return maxBones}}function getTextureEncodingFromMap(map,gammaOverrideLinear){var encoding;if(!map){encoding=LinearEncoding}else if(map.isTexture){encoding=map.encoding}else if(map.isWebGLRenderTarget){console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead.");encoding=map.texture.encoding}if(encoding===LinearEncoding&&gammaOverrideLinear){encoding=GammaEncoding}return encoding}this.getParameters=function(material,lights,shadows,fog,nClipPlanes,nClipIntersection,object){var shaderID=shaderIDs[material.type],maxBones=object.isSkinnedMesh?allocateBones(object):0,precision=capabilities.precision;if(null!==material.precision){precision=capabilities.getMaxPrecision(material.precision);if(precision!==material.precision){console.warn("THREE.WebGLProgram.getParameters:",material.precision,"not supported, using",precision,"instead.")}}var currentRenderTarget=renderer.getRenderTarget(),parameters={shaderID:shaderID,precision:precision,supportsVertexTextures:capabilities.vertexTextures,outputEncoding:getTextureEncodingFromMap(!currentRenderTarget?null:currentRenderTarget.texture,renderer.gammaOutput),map:!!material.map,mapEncoding:getTextureEncodingFromMap(material.map,renderer.gammaInput),matcap:!!material.matcap,matcapEncoding:getTextureEncodingFromMap(material.matcap,renderer.gammaInput),envMap:!!material.envMap,envMapMode:material.envMap&&material.envMap.mapping,envMapEncoding:getTextureEncodingFromMap(material.envMap,renderer.gammaInput),envMapCubeUV:!!material.envMap&&(material.envMap.mapping===CubeUVReflectionMapping||material.envMap.mapping===CubeUVRefractionMapping),lightMap:!!material.lightMap,aoMap:!!material.aoMap,emissiveMap:!!material.emissiveMap,emissiveMapEncoding:getTextureEncodingFromMap(material.emissiveMap,renderer.gammaInput),bumpMap:!!material.bumpMap,normalMap:!!material.normalMap,objectSpaceNormalMap:material.normalMapType===ObjectSpaceNormalMap,displacementMap:!!material.displacementMap,roughnessMap:!!material.roughnessMap,metalnessMap:!!material.metalnessMap,specularMap:!!material.specularMap,alphaMap:!!material.alphaMap,gradientMap:!!material.gradientMap,combine:material.combine,vertexColors:material.vertexColors,fog:!!fog,useFog:material.fog,fogExp:fog&&fog.isFogExp2,flatShading:material.flatShading,sizeAttenuation:material.sizeAttenuation,logarithmicDepthBuffer:capabilities.logarithmicDepthBuffer,skinning:material.skinning&&0<maxBones,maxBones:maxBones,useVertexTexture:capabilities.floatVertexTextures,morphTargets:material.morphTargets,morphNormals:material.morphNormals,maxMorphTargets:renderer.maxMorphTargets,maxMorphNormals:renderer.maxMorphNormals,numDirLights:lights.directional.length,numPointLights:lights.point.length,numSpotLights:lights.spot.length,numRectAreaLights:lights.rectArea.length,numHemiLights:lights.hemi.length,numClippingPlanes:nClipPlanes,numClipIntersection:nClipIntersection,dithering:material.dithering,shadowMapEnabled:renderer.shadowMap.enabled&&object.receiveShadow&&0<shadows.length,shadowMapType:renderer.shadowMap.type,toneMapping:renderer.toneMapping,physicallyCorrectLights:renderer.physicallyCorrectLights,premultipliedAlpha:material.premultipliedAlpha,alphaTest:material.alphaTest,doubleSided:material.side===DoubleSide,flipSided:material.side===BackSide,depthPacking:material.depthPacking!==void 0?material.depthPacking:!1};return parameters};this.getProgramCode=function(material,parameters){var array=[];if(parameters.shaderID){array.push(parameters.shaderID)}else{array.push(material.fragmentShader);array.push(material.vertexShader)}if(material.defines!==void 0){for(var name in material.defines){array.push(name);array.push(material.defines[name])}}for(var i=0;i<parameterNames.length;i++){array.push(parameters[parameterNames[i]])}array.push(material.onBeforeCompile.toString());array.push(renderer.gammaOutput);array.push(renderer.gammaFactor);return array.join()};this.acquireProgram=function(material,shader,parameters,code){for(var program,p=0,pl=programs.length,programInfo;p<pl;p++){programInfo=programs[p];if(programInfo.code===code){program=programInfo;++program.usedTimes;break}}if(program===void 0){program=new WebGLProgram(renderer,extensions,code,material,shader,parameters,capabilities);programs.push(program)}return program};this.releaseProgram=function(program){if(0===--program.usedTimes){var i=programs.indexOf(program);programs[i]=programs[programs.length-1];programs.pop();program.destroy()}};this.programs=programs}var WebGLPrograms$1={WebGLPrograms:WebGLPrograms};_exports.$WebGLPrograms=WebGLPrograms$1;function WebGLProperties(){var properties=new WeakMap;function get(object){var map=properties.get(object);if(map===void 0){map={};properties.set(object,map)}return map}function remove(object){properties.delete(object)}function update(object,key,value){properties.get(object)[key]=value}function dispose(){properties=new WeakMap}return{get:get,remove:remove,update:update,dispose:dispose}}var WebGLProperties$1={WebGLProperties:WebGLProperties};_exports.$WebGLProperties=WebGLProperties$1;function painterSortStable(a,b){if(a.groupOrder!==b.groupOrder){return a.groupOrder-b.groupOrder}else if(a.renderOrder!==b.renderOrder){return a.renderOrder-b.renderOrder}else if(a.program&&b.program&&a.program!==b.program){return a.program.id-b.program.id}else if(a.material.id!==b.material.id){return a.material.id-b.material.id}else if(a.z!==b.z){return a.z-b.z}else{return a.id-b.id}}function reversePainterSortStable(a,b){if(a.groupOrder!==b.groupOrder){return a.groupOrder-b.groupOrder}else if(a.renderOrder!==b.renderOrder){return a.renderOrder-b.renderOrder}if(a.z!==b.z){return b.z-a.z}else{return a.id-b.id}}function WebGLRenderList(){var renderItems=[],renderItemsIndex=0,opaque=[],transparent=[];function init(){renderItemsIndex=0;opaque.length=0;transparent.length=0}function getNextRenderItem(object,geometry,material,groupOrder,z,group){var renderItem=renderItems[renderItemsIndex];if(renderItem===void 0){renderItem={id:object.id,object:object,geometry:geometry,material:material,program:material.program,groupOrder:groupOrder,renderOrder:object.renderOrder,z:z,group:group};renderItems[renderItemsIndex]=renderItem}else{renderItem.id=object.id;renderItem.object=object;renderItem.geometry=geometry;renderItem.material=material;renderItem.program=material.program;renderItem.groupOrder=groupOrder;renderItem.renderOrder=object.renderOrder;renderItem.z=z;renderItem.group=group}renderItemsIndex++;return renderItem}function push(object,geometry,material,groupOrder,z,group){var renderItem=getNextRenderItem(object,geometry,material,groupOrder,z,group);(!0===material.transparent?transparent:opaque).push(renderItem)}function unshift(object,geometry,material,groupOrder,z,group){var renderItem=getNextRenderItem(object,geometry,material,groupOrder,z,group);(!0===material.transparent?transparent:opaque).unshift(renderItem)}function sort(){if(1<opaque.length)opaque.sort(painterSortStable);if(1<transparent.length)transparent.sort(reversePainterSortStable)}return{opaque:opaque,transparent:transparent,init:init,push:push,unshift:unshift,sort:sort}}function WebGLRenderLists(){var lists={};function onSceneDispose(event){var scene=event.target;scene.removeEventListener("dispose",onSceneDispose);delete lists[scene.id]}function get(scene,camera){var cameras=lists[scene.id],list;if(cameras===void 0){list=new WebGLRenderList;lists[scene.id]={};lists[scene.id][camera.id]=list;scene.addEventListener("dispose",onSceneDispose)}else{list=cameras[camera.id];if(list===void 0){list=new WebGLRenderList;cameras[camera.id]=list}}return list}function dispose(){lists={}}return{get:get,dispose:dispose}}var WebGLRenderLists$1={WebGLRenderLists:WebGLRenderLists};_exports.$WebGLRenderLists=WebGLRenderLists$1;function UniformsCache(){var lights={};return{get:function(light){if(lights[light.id]!==void 0){return lights[light.id]}var uniforms;switch(light.type){case"DirectionalLight":uniforms={direction:new Vector3,color:new Color,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":uniforms={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":uniforms={position:new Vector3,color:new Color,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break;case"HemisphereLight":uniforms={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":uniforms={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break;}lights[light.id]=uniforms;return uniforms}}}var count=0;function WebGLLights(){var cache=new UniformsCache,state={id:count++,hash:{stateID:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,shadowsLength:-1},ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},vector3=new Vector3,matrix4=new Matrix4,matrix42=new Matrix4;function setup(lights,shadows,camera){for(var r=0,g=0,b=0,directionalLength=0,pointLength=0,spotLength=0,rectAreaLength=0,hemiLength=0,viewMatrix=camera.matrixWorldInverse,i=0,l=lights.length;i<l;i++){var light=lights[i],color=light.color,intensity=light.intensity,distance=light.distance,shadowMap=light.shadow&&light.shadow.map?light.shadow.map.texture:null;if(light.isAmbientLight){r+=color.r*intensity;g+=color.g*intensity;b+=color.b*intensity}else if(light.isDirectionalLight){var uniforms=cache.get(light);uniforms.color.copy(light.color).multiplyScalar(light.intensity);uniforms.direction.setFromMatrixPosition(light.matrixWorld);vector3.setFromMatrixPosition(light.target.matrixWorld);uniforms.direction.sub(vector3);uniforms.direction.transformDirection(viewMatrix);uniforms.shadow=light.castShadow;if(light.castShadow){var shadow=light.shadow;uniforms.shadowBias=shadow.bias;uniforms.shadowRadius=shadow.radius;uniforms.shadowMapSize=shadow.mapSize}state.directionalShadowMap[directionalLength]=shadowMap;state.directionalShadowMatrix[directionalLength]=light.shadow.matrix;state.directional[directionalLength]=uniforms;directionalLength++}else if(light.isSpotLight){var uniforms=cache.get(light);uniforms.position.setFromMatrixPosition(light.matrixWorld);uniforms.position.applyMatrix4(viewMatrix);uniforms.color.copy(color).multiplyScalar(intensity);uniforms.distance=distance;uniforms.direction.setFromMatrixPosition(light.matrixWorld);vector3.setFromMatrixPosition(light.target.matrixWorld);uniforms.direction.sub(vector3);uniforms.direction.transformDirection(viewMatrix);uniforms.coneCos=_Mathcos(light.angle);uniforms.penumbraCos=_Mathcos(light.angle*(1-light.penumbra));uniforms.decay=light.decay;uniforms.shadow=light.castShadow;if(light.castShadow){var shadow=light.shadow;uniforms.shadowBias=shadow.bias;uniforms.shadowRadius=shadow.radius;uniforms.shadowMapSize=shadow.mapSize}state.spotShadowMap[spotLength]=shadowMap;state.spotShadowMatrix[spotLength]=light.shadow.matrix;state.spot[spotLength]=uniforms;spotLength++}else if(light.isRectAreaLight){var uniforms=cache.get(light);uniforms.color.copy(color).multiplyScalar(intensity);uniforms.position.setFromMatrixPosition(light.matrixWorld);uniforms.position.applyMatrix4(viewMatrix);matrix42.identity();matrix4.copy(light.matrixWorld);matrix4.premultiply(viewMatrix);matrix42.extractRotation(matrix4);uniforms.halfWidth.set(.5*light.width,0,0);uniforms.halfHeight.set(0,.5*light.height,0);uniforms.halfWidth.applyMatrix4(matrix42);uniforms.halfHeight.applyMatrix4(matrix42);state.rectArea[rectAreaLength]=uniforms;rectAreaLength++}else if(light.isPointLight){var uniforms=cache.get(light);uniforms.position.setFromMatrixPosition(light.matrixWorld);uniforms.position.applyMatrix4(viewMatrix);uniforms.color.copy(light.color).multiplyScalar(light.intensity);uniforms.distance=light.distance;uniforms.decay=light.decay;uniforms.shadow=light.castShadow;if(light.castShadow){var shadow=light.shadow;uniforms.shadowBias=shadow.bias;uniforms.shadowRadius=shadow.radius;uniforms.shadowMapSize=shadow.mapSize;uniforms.shadowCameraNear=shadow.camera.near;uniforms.shadowCameraFar=shadow.camera.far}state.pointShadowMap[pointLength]=shadowMap;state.pointShadowMatrix[pointLength]=light.shadow.matrix;state.point[pointLength]=uniforms;pointLength++}else if(light.isHemisphereLight){var uniforms=cache.get(light);uniforms.direction.setFromMatrixPosition(light.matrixWorld);uniforms.direction.transformDirection(viewMatrix);uniforms.direction.normalize();uniforms.skyColor.copy(light.color).multiplyScalar(intensity);uniforms.groundColor.copy(light.groundColor).multiplyScalar(intensity);state.hemi[hemiLength]=uniforms;hemiLength++}}state.ambient[0]=r;state.ambient[1]=g;state.ambient[2]=b;state.directional.length=directionalLength;state.spot.length=spotLength;state.rectArea.length=rectAreaLength;state.point.length=pointLength;state.hemi.length=hemiLength;state.hash.stateID=state.id;state.hash.directionalLength=directionalLength;state.hash.pointLength=pointLength;state.hash.spotLength=spotLength;state.hash.rectAreaLength=rectAreaLength;state.hash.hemiLength=hemiLength;state.hash.shadowsLength=shadows.length}return{setup:setup,state:state}}var WebGLLights$1={WebGLLights:WebGLLights};_exports.$WebGLLights=WebGLLights$1;function WebGLRenderState(){var lights=new WebGLLights,lightsArray=[],shadowsArray=[];function init(){lightsArray.length=0;shadowsArray.length=0}function pushLight(light){lightsArray.push(light)}function pushShadow(shadowLight){shadowsArray.push(shadowLight)}function setupLights(camera){lights.setup(lightsArray,shadowsArray,camera)}var state={lightsArray:lightsArray,shadowsArray:shadowsArray,lights:lights};return{init:init,state:state,setupLights:setupLights,pushLight:pushLight,pushShadow:pushShadow}}function WebGLRenderStates(){var renderStates={};function onSceneDispose(event){var scene=event.target;scene.removeEventListener("dispose",onSceneDispose);delete renderStates[scene.id]}function get(scene,camera){var renderState;if(renderStates[scene.id]===void 0){renderState=new WebGLRenderState;renderStates[scene.id]={};renderStates[scene.id][camera.id]=renderState;scene.addEventListener("dispose",onSceneDispose)}else{if(renderStates[scene.id][camera.id]===void 0){renderState=new WebGLRenderState;renderStates[scene.id][camera.id]=renderState}else{renderState=renderStates[scene.id][camera.id]}}return renderState}function dispose(){renderStates={}}return{get:get,dispose:dispose}}var WebGLRenderStates$1={WebGLRenderStates:WebGLRenderStates};_exports.$WebGLRenderStates=WebGLRenderStates$1;function WebGLShadowMap(_renderer,_objects,maxTextureSize){for(var _frustum=new Frustum,_projScreenMatrix=new Matrix4,_shadowMapSize=new Vector2,_maxShadowMapSize=new Vector2(maxTextureSize,maxTextureSize),_lookTarget=new Vector3,_lightPositionWorld=new Vector3,_MorphingFlag=1,_SkinningFlag=2,_NumberOfMaterialVariants=(_MorphingFlag|_SkinningFlag)+1,_depthMaterials=Array(_NumberOfMaterialVariants),_distanceMaterials=Array(_NumberOfMaterialVariants),_materialCache={},shadowSide={0:BackSide,1:FrontSide,2:DoubleSide},cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,1,0),new Vector3(0,-1,0)],cubeUps=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,0,1),new Vector3(0,0,-1)],cube2DViewPorts=[new Vector4,new Vector4,new Vector4,new Vector4,new Vector4,new Vector4],i=0;i!==_NumberOfMaterialVariants;++i){var useMorphing=0!==(i&_MorphingFlag),useSkinning=0!==(i&_SkinningFlag),depthMaterial=new MeshDepthMaterial({depthPacking:RGBADepthPacking,morphTargets:useMorphing,skinning:useSkinning});_depthMaterials[i]=depthMaterial;var distanceMaterial=new MeshDistanceMaterial({morphTargets:useMorphing,skinning:useSkinning});_distanceMaterials[i]=distanceMaterial}var scope=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=PCFShadowMap;this.render=function(lights,scene,camera){if(!1===scope.enabled)return;if(!1===scope.autoUpdate&&!1===scope.needsUpdate)return;if(0===lights.length)return;var _state=_renderer.state;_state.setBlending(NoBlending);_state.buffers.color.setClear(1,1,1,1);_state.buffers.depth.setTest(!0);_state.setScissorTest(!1);for(var faceCount,i=0,il=lights.length;i<il;i++){var light=lights[i],shadow=light.shadow,isPointLight=light&&light.isPointLight;if(shadow===void 0){console.warn("THREE.WebGLShadowMap:",light,"has no shadow.");continue}var shadowCamera=shadow.camera;_shadowMapSize.copy(shadow.mapSize);_shadowMapSize.min(_maxShadowMapSize);if(isPointLight){var vpWidth=_shadowMapSize.x,vpHeight=_shadowMapSize.y;cube2DViewPorts[0].set(2*vpWidth,vpHeight,vpWidth,vpHeight);cube2DViewPorts[1].set(0,vpHeight,vpWidth,vpHeight);cube2DViewPorts[2].set(3*vpWidth,vpHeight,vpWidth,vpHeight);cube2DViewPorts[3].set(vpWidth,vpHeight,vpWidth,vpHeight);cube2DViewPorts[4].set(3*vpWidth,0,vpWidth,vpHeight);cube2DViewPorts[5].set(vpWidth,0,vpWidth,vpHeight);_shadowMapSize.x*=4;_shadowMapSize.y*=2}if(null===shadow.map){var pars={minFilter:NearestFilter,magFilter:NearestFilter,format:RGBAFormat};shadow.map=new WebGLRenderTarget(_shadowMapSize.x,_shadowMapSize.y,pars);shadow.map.texture.name=light.name+".shadowMap";shadowCamera.updateProjectionMatrix()}if(shadow.isSpotLightShadow){shadow.update(light)}var shadowMap=shadow.map,shadowMatrix=shadow.matrix;_lightPositionWorld.setFromMatrixPosition(light.matrixWorld);shadowCamera.position.copy(_lightPositionWorld);if(isPointLight){faceCount=6;shadowMatrix.makeTranslation(-_lightPositionWorld.x,-_lightPositionWorld.y,-_lightPositionWorld.z)}else{faceCount=1;_lookTarget.setFromMatrixPosition(light.target.matrixWorld);shadowCamera.lookAt(_lookTarget);shadowCamera.updateMatrixWorld();shadowMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);shadowMatrix.multiply(shadowCamera.projectionMatrix);shadowMatrix.multiply(shadowCamera.matrixWorldInverse)}_renderer.setRenderTarget(shadowMap);_renderer.clear();for(var face=0;face<faceCount;face++){if(isPointLight){_lookTarget.copy(shadowCamera.position);_lookTarget.add(cubeDirections[face]);shadowCamera.up.copy(cubeUps[face]);shadowCamera.lookAt(_lookTarget);shadowCamera.updateMatrixWorld();var vpDimensions=cube2DViewPorts[face];_state.viewport(vpDimensions)}_projScreenMatrix.multiplyMatrices(shadowCamera.projectionMatrix,shadowCamera.matrixWorldInverse);_frustum.setFromMatrix(_projScreenMatrix);renderObject(scene,camera,shadowCamera,isPointLight)}}scope.needsUpdate=!1};function getDepthMaterial(object,material,isPointLight,lightPositionWorld,shadowCameraNear,shadowCameraFar){var geometry=object.geometry,result=null,materialVariants=_depthMaterials,customMaterial=object.customDepthMaterial;if(isPointLight){materialVariants=_distanceMaterials;customMaterial=object.customDistanceMaterial}if(!customMaterial){var useMorphing=!1;if(material.morphTargets){if(geometry&&geometry.isBufferGeometry){useMorphing=geometry.morphAttributes&&geometry.morphAttributes.position&&0<geometry.morphAttributes.position.length}else if(geometry&&geometry.isGeometry){useMorphing=geometry.morphTargets&&0<geometry.morphTargets.length}}if(object.isSkinnedMesh&&!1===material.skinning){console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",object)}var useSkinning=object.isSkinnedMesh&&material.skinning,variantIndex=0;if(useMorphing)variantIndex|=_MorphingFlag;if(useSkinning)variantIndex|=_SkinningFlag;result=materialVariants[variantIndex]}else{result=customMaterial}if(_renderer.localClippingEnabled&&!0===material.clipShadows&&0!==material.clippingPlanes.length){var keyA=result.uuid,keyB=material.uuid,materialsForVariant=_materialCache[keyA];if(materialsForVariant===void 0){materialsForVariant={};_materialCache[keyA]=materialsForVariant}var cachedMaterial=materialsForVariant[keyB];if(cachedMaterial===void 0){cachedMaterial=result.clone();materialsForVariant[keyB]=cachedMaterial}result=cachedMaterial}result.visible=material.visible;result.wireframe=material.wireframe;result.side=null!=material.shadowSide?material.shadowSide:shadowSide[material.side];result.clipShadows=material.clipShadows;result.clippingPlanes=material.clippingPlanes;result.clipIntersection=material.clipIntersection;result.wireframeLinewidth=material.wireframeLinewidth;result.linewidth=material.linewidth;if(isPointLight&&result.isMeshDistanceMaterial){result.referencePosition.copy(lightPositionWorld);result.nearDistance=shadowCameraNear;result.farDistance=shadowCameraFar}return result}function renderObject(object,camera,shadowCamera,isPointLight){if(!1===object.visible)return;var visible=object.layers.test(camera.layers);if(visible&&(object.isMesh||object.isLine||object.isPoints)){if(object.castShadow&&(!object.frustumCulled||_frustum.intersectsObject(object))){object.modelViewMatrix.multiplyMatrices(shadowCamera.matrixWorldInverse,object.matrixWorld);var geometry=_objects.update(object),material=object.material;if(Array.isArray(material)){for(var groups=geometry.groups,k=0,kl=groups.length;k<kl;k++){var group=groups[k],groupMaterial=material[group.materialIndex];if(groupMaterial&&groupMaterial.visible){var depthMaterial=getDepthMaterial(object,groupMaterial,isPointLight,_lightPositionWorld,shadowCamera.near,shadowCamera.far);_renderer.renderBufferDirect(shadowCamera,null,geometry,depthMaterial,object,group)}}}else if(material.visible){var depthMaterial=getDepthMaterial(object,material,isPointLight,_lightPositionWorld,shadowCamera.near,shadowCamera.far);_renderer.renderBufferDirect(shadowCamera,null,geometry,depthMaterial,object,null)}}}for(var children=object.children,i=0,l=children.length;i<l;i++){renderObject(children[i],camera,shadowCamera,isPointLight)}}}var WebGLShadowMap$1={WebGLShadowMap:WebGLShadowMap};_exports.$WebGLShadowMap=WebGLShadowMap$1;function WebGLState(gl,extensions,utils,capabilities){function ColorBuffer(){var locked=!1,color=new Vector4,currentColorMask=null,currentColorClear=new Vector4(0,0,0,0);return{setMask:function(colorMask){if(currentColorMask!==colorMask&&!locked){gl.colorMask(colorMask,colorMask,colorMask,colorMask);currentColorMask=colorMask}},setLocked:function(lock){locked=lock},setClear:function(r,g,b,a,premultipliedAlpha){if(!0===premultipliedAlpha){r*=a;g*=a;b*=a}color.set(r,g,b,a);if(!1===currentColorClear.equals(color)){gl.clearColor(r,g,b,a);currentColorClear.copy(color)}},reset:function(){locked=!1;currentColorMask=null;currentColorClear.set(-1,0,0,0)}}}function DepthBuffer(){var locked=!1,currentDepthMask=null,currentDepthFunc=null,currentDepthClear=null;return{setTest:function(depthTest){if(depthTest){enable(gl.DEPTH_TEST)}else{disable(gl.DEPTH_TEST)}},setMask:function(depthMask){if(currentDepthMask!==depthMask&&!locked){gl.depthMask(depthMask);currentDepthMask=depthMask}},setFunc:function(depthFunc){if(currentDepthFunc!==depthFunc){if(depthFunc){switch(depthFunc){case NeverDepth:gl.depthFunc(gl.NEVER);break;case AlwaysDepth:gl.depthFunc(gl.ALWAYS);break;case LessDepth:gl.depthFunc(gl.LESS);break;case LessEqualDepth:gl.depthFunc(gl.LEQUAL);break;case EqualDepth:gl.depthFunc(gl.EQUAL);break;case GreaterEqualDepth:gl.depthFunc(gl.GEQUAL);break;case GreaterDepth:gl.depthFunc(gl.GREATER);break;case NotEqualDepth:gl.depthFunc(gl.NOTEQUAL);break;default:gl.depthFunc(gl.LEQUAL);}}else{gl.depthFunc(gl.LEQUAL)}currentDepthFunc=depthFunc}},setLocked:function(lock){locked=lock},setClear:function(depth){if(currentDepthClear!==depth){gl.clearDepth(depth);currentDepthClear=depth}},reset:function(){locked=!1;currentDepthMask=null;currentDepthFunc=null;currentDepthClear=null}}}function StencilBuffer(){var locked=!1,currentStencilMask=null,currentStencilFunc=null,currentStencilRef=null,currentStencilFuncMask=null,currentStencilFail=null,currentStencilZFail=null,currentStencilZPass=null,currentStencilClear=null;return{setTest:function(stencilTest){if(stencilTest){enable(gl.STENCIL_TEST)}else{disable(gl.STENCIL_TEST)}},setMask:function(stencilMask){if(currentStencilMask!==stencilMask&&!locked){gl.stencilMask(stencilMask);currentStencilMask=stencilMask}},setFunc:function(stencilFunc,stencilRef,stencilMask){if(currentStencilFunc!==stencilFunc||currentStencilRef!==stencilRef||currentStencilFuncMask!==stencilMask){gl.stencilFunc(stencilFunc,stencilRef,stencilMask);currentStencilFunc=stencilFunc;currentStencilRef=stencilRef;currentStencilFuncMask=stencilMask}},setOp:function(stencilFail,stencilZFail,stencilZPass){if(currentStencilFail!==stencilFail||currentStencilZFail!==stencilZFail||currentStencilZPass!==stencilZPass){gl.stencilOp(stencilFail,stencilZFail,stencilZPass);currentStencilFail=stencilFail;currentStencilZFail=stencilZFail;currentStencilZPass=stencilZPass}},setLocked:function(lock){locked=lock},setClear:function(stencil){if(currentStencilClear!==stencil){gl.clearStencil(stencil);currentStencilClear=stencil}},reset:function(){locked=!1;currentStencilMask=null;currentStencilFunc=null;currentStencilRef=null;currentStencilFuncMask=null;currentStencilFail=null;currentStencilZFail=null;currentStencilZPass=null;currentStencilClear=null}}}var colorBuffer=new ColorBuffer,depthBuffer=new DepthBuffer,stencilBuffer=new StencilBuffer,maxVertexAttributes=gl.getParameter(gl.MAX_VERTEX_ATTRIBS),newAttributes=new Uint8Array(maxVertexAttributes),enabledAttributes=new Uint8Array(maxVertexAttributes),attributeDivisors=new Uint8Array(maxVertexAttributes),enabledCapabilities={},compressedTextureFormats=null,currentProgram=null,currentBlendingEnabled=null,currentBlending=null,currentBlendEquation=null,currentBlendSrc=null,currentBlendDst=null,currentBlendEquationAlpha=null,currentBlendSrcAlpha=null,currentBlendDstAlpha=null,currentPremultipledAlpha=!1,currentFlipSided=null,currentCullFace=null,currentLineWidth=null,currentPolygonOffsetFactor=null,currentPolygonOffsetUnits=null,maxTextures=gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),lineWidthAvailable=!1,version=0,glVersion=gl.getParameter(gl.VERSION);if(-1!==glVersion.indexOf("WebGL")){version=parseFloat(/^WebGL\ ([0-9])/.exec(glVersion)[1]);lineWidthAvailable=1<=version}else if(-1!==glVersion.indexOf("OpenGL ES")){version=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(glVersion)[1]);lineWidthAvailable=2<=version}var currentTextureSlot=null,currentBoundTextures={},currentScissor=new Vector4,currentViewport=new Vector4;function createTexture(type,target,count){var data=new Uint8Array(4),texture=gl.createTexture();gl.bindTexture(type,texture);gl.texParameteri(type,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(type,gl.TEXTURE_MAG_FILTER,gl.NEAREST);for(var i=0;i<count;i++){gl.texImage2D(target+i,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,data)}return texture}var emptyTextures={};emptyTextures[gl.TEXTURE_2D]=createTexture(gl.TEXTURE_2D,gl.TEXTURE_2D,1);emptyTextures[gl.TEXTURE_CUBE_MAP]=createTexture(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_CUBE_MAP_POSITIVE_X,6);colorBuffer.setClear(0,0,0,1);depthBuffer.setClear(1);stencilBuffer.setClear(0);enable(gl.DEPTH_TEST);depthBuffer.setFunc(LessEqualDepth);setFlipSided(!1);setCullFace(CullFaceBack);enable(gl.CULL_FACE);setBlending(NoBlending);function initAttributes(){for(var i=0,l=newAttributes.length;i<l;i++){newAttributes[i]=0}}function enableAttribute(attribute){enableAttributeAndDivisor(attribute,0)}function enableAttributeAndDivisor(attribute,meshPerAttribute){newAttributes[attribute]=1;if(0===enabledAttributes[attribute]){gl.enableVertexAttribArray(attribute);enabledAttributes[attribute]=1}if(attributeDivisors[attribute]!==meshPerAttribute){var extension=capabilities.isWebGL2?gl:extensions.get("ANGLE_instanced_arrays");extension[capabilities.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](attribute,meshPerAttribute);attributeDivisors[attribute]=meshPerAttribute}}function disableUnusedAttributes(){for(var i=0,l=enabledAttributes.length;i!==l;++i){if(enabledAttributes[i]!==newAttributes[i]){gl.disableVertexAttribArray(i);enabledAttributes[i]=0}}}function enable(id){if(!0!==enabledCapabilities[id]){gl.enable(id);enabledCapabilities[id]=!0}}function disable(id){if(!1!==enabledCapabilities[id]){gl.disable(id);enabledCapabilities[id]=!1}}function getCompressedTextureFormats(){if(null===compressedTextureFormats){compressedTextureFormats=[];if(extensions.get("WEBGL_compressed_texture_pvrtc")||extensions.get("WEBGL_compressed_texture_s3tc")||extensions.get("WEBGL_compressed_texture_etc1")||extensions.get("WEBGL_compressed_texture_astc")){for(var formats=gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS),i=0;i<formats.length;i++){compressedTextureFormats.push(formats[i])}}}return compressedTextureFormats}function useProgram(program){if(currentProgram!==program){gl.useProgram(program);currentProgram=program;return!0}return!1}function setBlending(blending,blendEquation,blendSrc,blendDst,blendEquationAlpha,blendSrcAlpha,blendDstAlpha,premultipliedAlpha){if(blending===NoBlending){if(currentBlendingEnabled){disable(gl.BLEND);currentBlendingEnabled=!1}return}if(!currentBlendingEnabled){enable(gl.BLEND);currentBlendingEnabled=!0}if(blending!==CustomBlending){if(blending!==currentBlending||premultipliedAlpha!==currentPremultipledAlpha){if(currentBlendEquation!==AddEquation||currentBlendEquationAlpha!==AddEquation){gl.blendEquation(gl.FUNC_ADD);currentBlendEquation=AddEquation;currentBlendEquationAlpha=AddEquation}if(premultipliedAlpha){switch(blending){case NormalBlending:gl.blendFuncSeparate(gl.ONE,gl.ONE_MINUS_SRC_ALPHA,gl.ONE,gl.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:gl.blendFunc(gl.ONE,gl.ONE);break;case SubtractiveBlending:gl.blendFuncSeparate(gl.ZERO,gl.ZERO,gl.ONE_MINUS_SRC_COLOR,gl.ONE_MINUS_SRC_ALPHA);break;case MultiplyBlending:gl.blendFuncSeparate(gl.ZERO,gl.SRC_COLOR,gl.ZERO,gl.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",blending);break;}}else{switch(blending){case NormalBlending:gl.blendFuncSeparate(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA,gl.ONE,gl.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:gl.blendFunc(gl.SRC_ALPHA,gl.ONE);break;case SubtractiveBlending:gl.blendFunc(gl.ZERO,gl.ONE_MINUS_SRC_COLOR);break;case MultiplyBlending:gl.blendFunc(gl.ZERO,gl.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",blending);break;}}currentBlendSrc=null;currentBlendDst=null;currentBlendSrcAlpha=null;currentBlendDstAlpha=null;currentBlending=blending;currentPremultipledAlpha=premultipliedAlpha}return}blendEquationAlpha=blendEquationAlpha||blendEquation;blendSrcAlpha=blendSrcAlpha||blendSrc;blendDstAlpha=blendDstAlpha||blendDst;if(blendEquation!==currentBlendEquation||blendEquationAlpha!==currentBlendEquationAlpha){gl.blendEquationSeparate(utils.convert(blendEquation),utils.convert(blendEquationAlpha));currentBlendEquation=blendEquation;currentBlendEquationAlpha=blendEquationAlpha}if(blendSrc!==currentBlendSrc||blendDst!==currentBlendDst||blendSrcAlpha!==currentBlendSrcAlpha||blendDstAlpha!==currentBlendDstAlpha){gl.blendFuncSeparate(utils.convert(blendSrc),utils.convert(blendDst),utils.convert(blendSrcAlpha),utils.convert(blendDstAlpha));currentBlendSrc=blendSrc;currentBlendDst=blendDst;currentBlendSrcAlpha=blendSrcAlpha;currentBlendDstAlpha=blendDstAlpha}currentBlending=blending;currentPremultipledAlpha=null}function setMaterial(material,frontFaceCW){material.side===DoubleSide?disable(gl.CULL_FACE):enable(gl.CULL_FACE);var flipSided=material.side===BackSide;if(frontFaceCW)flipSided=!flipSided;setFlipSided(flipSided);material.blending===NormalBlending&&!1===material.transparent?setBlending(NoBlending):setBlending(material.blending,material.blendEquation,material.blendSrc,material.blendDst,material.blendEquationAlpha,material.blendSrcAlpha,material.blendDstAlpha,material.premultipliedAlpha);depthBuffer.setFunc(material.depthFunc);depthBuffer.setTest(material.depthTest);depthBuffer.setMask(material.depthWrite);colorBuffer.setMask(material.colorWrite);setPolygonOffset(material.polygonOffset,material.polygonOffsetFactor,material.polygonOffsetUnits)}function setFlipSided(flipSided){if(currentFlipSided!==flipSided){if(flipSided){gl.frontFace(gl.CW)}else{gl.frontFace(gl.CCW)}currentFlipSided=flipSided}}function setCullFace(cullFace){if(cullFace!==CullFaceNone){enable(gl.CULL_FACE);if(cullFace!==currentCullFace){if(cullFace===CullFaceBack){gl.cullFace(gl.BACK)}else if(cullFace===CullFaceFront){gl.cullFace(gl.FRONT)}else{gl.cullFace(gl.FRONT_AND_BACK)}}}else{disable(gl.CULL_FACE)}currentCullFace=cullFace}function setLineWidth(width){if(width!==currentLineWidth){if(lineWidthAvailable)gl.lineWidth(width);currentLineWidth=width}}function setPolygonOffset(polygonOffset,factor,units){if(polygonOffset){enable(gl.POLYGON_OFFSET_FILL);if(currentPolygonOffsetFactor!==factor||currentPolygonOffsetUnits!==units){gl.polygonOffset(factor,units);currentPolygonOffsetFactor=factor;currentPolygonOffsetUnits=units}}else{disable(gl.POLYGON_OFFSET_FILL)}}function setScissorTest(scissorTest){if(scissorTest){enable(gl.SCISSOR_TEST)}else{disable(gl.SCISSOR_TEST)}}function activeTexture(webglSlot){if(webglSlot===void 0)webglSlot=gl.TEXTURE0+maxTextures-1;if(currentTextureSlot!==webglSlot){gl.activeTexture(webglSlot);currentTextureSlot=webglSlot}}function bindTexture(webglType,webglTexture){if(null===currentTextureSlot){activeTexture()}var boundTexture=currentBoundTextures[currentTextureSlot];if(boundTexture===void 0){boundTexture={type:void 0,texture:void 0};currentBoundTextures[currentTextureSlot]=boundTexture}if(boundTexture.type!==webglType||boundTexture.texture!==webglTexture){gl.bindTexture(webglType,webglTexture||emptyTextures[webglType]);boundTexture.type=webglType;boundTexture.texture=webglTexture}}function compressedTexImage2D(){try{gl.compressedTexImage2D.apply(gl,arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function texImage2D(){try{gl.texImage2D.apply(gl,arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function texImage3D(){try{gl.texImage3D.apply(gl,arguments)}catch(error){console.error("THREE.WebGLState:",error)}}function scissor(scissor){if(!1===currentScissor.equals(scissor)){gl.scissor(scissor.x,scissor.y,scissor.z,scissor.w);currentScissor.copy(scissor)}}function viewport(viewport){if(!1===currentViewport.equals(viewport)){gl.viewport(viewport.x,viewport.y,viewport.z,viewport.w);currentViewport.copy(viewport)}}function reset(){for(var i=0;i<enabledAttributes.length;i++){if(1===enabledAttributes[i]){gl.disableVertexAttribArray(i);enabledAttributes[i]=0}}enabledCapabilities={};compressedTextureFormats=null;currentTextureSlot=null;currentBoundTextures={};currentProgram=null;currentBlending=null;currentFlipSided=null;currentCullFace=null;colorBuffer.reset();depthBuffer.reset();stencilBuffer.reset()}return{buffers:{color:colorBuffer,depth:depthBuffer,stencil:stencilBuffer},initAttributes:initAttributes,enableAttribute:enableAttribute,enableAttributeAndDivisor:enableAttributeAndDivisor,disableUnusedAttributes:disableUnusedAttributes,enable:enable,disable:disable,getCompressedTextureFormats:getCompressedTextureFormats,useProgram:useProgram,setBlending:setBlending,setMaterial:setMaterial,setFlipSided:setFlipSided,setCullFace:setCullFace,setLineWidth:setLineWidth,setPolygonOffset:setPolygonOffset,setScissorTest:setScissorTest,activeTexture:activeTexture,bindTexture:bindTexture,compressedTexImage2D:compressedTexImage2D,texImage2D:texImage2D,texImage3D:texImage3D,scissor:scissor,viewport:viewport,reset:reset}}var WebGLState$1={WebGLState:WebGLState};_exports.$WebGLState=WebGLState$1;function WebGLTextures(_gl,extensions,state,properties,capabilities,utils,info){var _videoTextures={},_canvas;function resizeImage(image,needsPowerOfTwo,needsNewCanvas,maxSize){var scale=1;if(image.width>maxSize||image.height>maxSize){scale=maxSize/_Mathmax(image.width,image.height)}if(1>scale||!0===needsPowerOfTwo){if(image instanceof HTMLImageElement||image instanceof HTMLCanvasElement||image instanceof ImageBitmap){if(_canvas===void 0)_canvas=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");var canvas=needsNewCanvas?document.createElementNS("http://www.w3.org/1999/xhtml","canvas"):_canvas,floor=needsPowerOfTwo?_Math.floorPowerOfTwo:_Mathfloor;canvas.width=floor(scale*image.width);canvas.height=floor(scale*image.height);var context=canvas.getContext("2d");context.drawImage(image,0,0,canvas.width,canvas.height);console.warn("THREE.WebGLRenderer: Texture has been resized from ("+image.width+"x"+image.height+") to ("+canvas.width+"x"+canvas.height+").");return canvas}else{if("data"in image){console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+image.width+"x"+image.height+").")}return image}}return image}function isPowerOfTwo(image){return _Math.isPowerOfTwo(image.width)&&_Math.isPowerOfTwo(image.height)}function textureNeedsPowerOfTwo(texture){if(capabilities.isWebGL2)return!1;return texture.wrapS!==ClampToEdgeWrapping||texture.wrapT!==ClampToEdgeWrapping||texture.minFilter!==NearestFilter&&texture.minFilter!==LinearFilter}function textureNeedsGenerateMipmaps(texture,supportsMips){return texture.generateMipmaps&&supportsMips&&texture.minFilter!==NearestFilter&&texture.minFilter!==LinearFilter}function generateMipmap(target,texture,width,height){_gl.generateMipmap(target);var textureProperties=properties.get(texture);textureProperties.__maxMipLevel=_Mathlog(_Mathmax(width,height))*Math.LOG2E}function getInternalFormat(glFormat,glType){if(!capabilities.isWebGL2)return glFormat;var internalFormat=glFormat;if(glFormat===_gl.RED){if(glType===_gl.FLOAT)internalFormat=_gl.R32F;if(glType===_gl.HALF_FLOAT)internalFormat=_gl.R16F;if(glType===_gl.UNSIGNED_BYTE)internalFormat=_gl.R8}if(glFormat===_gl.RGB){if(glType===_gl.FLOAT)internalFormat=_gl.RGB32F;if(glType===_gl.HALF_FLOAT)internalFormat=_gl.RGB16F;if(glType===_gl.UNSIGNED_BYTE)internalFormat=_gl.RGB8}if(glFormat===_gl.RGBA){if(glType===_gl.FLOAT)internalFormat=_gl.RGBA32F;if(glType===_gl.HALF_FLOAT)internalFormat=_gl.RGBA16F;if(glType===_gl.UNSIGNED_BYTE)internalFormat=_gl.RGBA8}if(internalFormat===_gl.R16F||internalFormat===_gl.R32F||internalFormat===_gl.RGBA16F||internalFormat===_gl.RGBA32F){extensions.get("EXT_color_buffer_float")}else if(internalFormat===_gl.RGB16F||internalFormat===_gl.RGB32F){console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.")}return internalFormat}function filterFallback(f){if(f===NearestFilter||f===NearestMipMapNearestFilter||f===NearestMipMapLinearFilter){return _gl.NEAREST}return _gl.LINEAR}function onTextureDispose(event){var texture=event.target;texture.removeEventListener("dispose",onTextureDispose);deallocateTexture(texture);if(texture.isVideoTexture){delete _videoTextures[texture.id]}info.memory.textures--}function onRenderTargetDispose(event){var renderTarget=event.target;renderTarget.removeEventListener("dispose",onRenderTargetDispose);deallocateRenderTarget(renderTarget);info.memory.textures--}function deallocateTexture(texture){var textureProperties=properties.get(texture);if(texture.image&&textureProperties.__image__webglTextureCube){_gl.deleteTexture(textureProperties.__image__webglTextureCube)}else{if(textureProperties.__webglInit===void 0)return;_gl.deleteTexture(textureProperties.__webglTexture)}properties.remove(texture)}function deallocateRenderTarget(renderTarget){var renderTargetProperties=properties.get(renderTarget),textureProperties=properties.get(renderTarget.texture);if(!renderTarget)return;if(textureProperties.__webglTexture!==void 0){_gl.deleteTexture(textureProperties.__webglTexture)}if(renderTarget.depthTexture){renderTarget.depthTexture.dispose()}if(renderTarget.isWebGLRenderTargetCube){for(var i=0;6>i;i++){_gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer[i]);if(renderTargetProperties.__webglDepthbuffer)_gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer[i])}}else{_gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer);if(renderTargetProperties.__webglDepthbuffer)_gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer)}properties.remove(renderTarget.texture);properties.remove(renderTarget)}function setTexture2D(texture,slot){var textureProperties=properties.get(texture);if(texture.isVideoTexture)updateVideoTexture(texture);if(0<texture.version&&textureProperties.__version!==texture.version){var image=texture.image;if(image===void 0){console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined")}else if(!1===image.complete){console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}else{uploadTexture(textureProperties,texture,slot);return}}state.activeTexture(_gl.TEXTURE0+slot);state.bindTexture(_gl.TEXTURE_2D,textureProperties.__webglTexture)}function setTexture3D(texture,slot){var textureProperties=properties.get(texture);if(0<texture.version&&textureProperties.__version!==texture.version){uploadTexture(textureProperties,texture,slot);return}state.activeTexture(_gl.TEXTURE0+slot);state.bindTexture(_gl.TEXTURE_3D,textureProperties.__webglTexture)}function setTextureCube(texture,slot){var textureProperties=properties.get(texture);if(6===texture.image.length){if(0<texture.version&&textureProperties.__version!==texture.version){if(!textureProperties.__image__webglTextureCube){texture.addEventListener("dispose",onTextureDispose);textureProperties.__image__webglTextureCube=_gl.createTexture();info.memory.textures++}state.activeTexture(_gl.TEXTURE0+slot);state.bindTexture(_gl.TEXTURE_CUBE_MAP,textureProperties.__image__webglTextureCube);_gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL,texture.flipY);for(var isCompressed=texture&&texture.isCompressedTexture,isDataTexture=texture.image[0]&&texture.image[0].isDataTexture,cubeImage=[],i=0;6>i;i++){if(!isCompressed&&!isDataTexture){cubeImage[i]=resizeImage(texture.image[i],!1,!0,capabilities.maxCubemapSize)}else{cubeImage[i]=isDataTexture?texture.image[i].image:texture.image[i]}}var image=cubeImage[0],supportsMips=isPowerOfTwo(image)||capabilities.isWebGL2,glFormat=utils.convert(texture.format),glType=utils.convert(texture.type),glInternalFormat=getInternalFormat(glFormat,glType);setTextureParameters(_gl.TEXTURE_CUBE_MAP,texture,supportsMips);for(var i=0;6>i;i++){if(!isCompressed){if(isDataTexture){state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,glInternalFormat,cubeImage[i].width,cubeImage[i].height,0,glFormat,glType,cubeImage[i].data)}else{state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,glInternalFormat,glFormat,glType,cubeImage[i])}}else{for(var mipmap,mipmaps=cubeImage[i].mipmaps,j=0,jl=mipmaps.length;j<jl;j++){mipmap=mipmaps[j];if(texture.format!==RGBAFormat&&texture.format!==RGBFormat){if(-1<state.getCompressedTextureFormats().indexOf(glFormat)){state.compressedTexImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,j,glInternalFormat,mipmap.width,mipmap.height,0,mipmap.data)}else{console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()")}}else{state.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,j,glInternalFormat,mipmap.width,mipmap.height,0,glFormat,glType,mipmap.data)}}}}if(!isCompressed){textureProperties.__maxMipLevel=0}else{textureProperties.__maxMipLevel=mipmaps.length-1}if(textureNeedsGenerateMipmaps(texture,supportsMips)){generateMipmap(_gl.TEXTURE_CUBE_MAP,texture,image.width,image.height)}textureProperties.__version=texture.version;if(texture.onUpdate)texture.onUpdate(texture)}else{state.activeTexture(_gl.TEXTURE0+slot);state.bindTexture(_gl.TEXTURE_CUBE_MAP,textureProperties.__image__webglTextureCube)}}}function setTextureCubeDynamic(texture,slot){state.activeTexture(_gl.TEXTURE0+slot);state.bindTexture(_gl.TEXTURE_CUBE_MAP,properties.get(texture).__webglTexture)}function setTextureParameters(textureType,texture,supportsMips){var extension;if(supportsMips){_gl.texParameteri(textureType,_gl.TEXTURE_WRAP_S,utils.convert(texture.wrapS));_gl.texParameteri(textureType,_gl.TEXTURE_WRAP_T,utils.convert(texture.wrapT));_gl.texParameteri(textureType,_gl.TEXTURE_MAG_FILTER,utils.convert(texture.magFilter));_gl.texParameteri(textureType,_gl.TEXTURE_MIN_FILTER,utils.convert(texture.minFilter))}else{_gl.texParameteri(textureType,_gl.TEXTURE_WRAP_S,_gl.CLAMP_TO_EDGE);_gl.texParameteri(textureType,_gl.TEXTURE_WRAP_T,_gl.CLAMP_TO_EDGE);if(texture.wrapS!==ClampToEdgeWrapping||texture.wrapT!==ClampToEdgeWrapping){console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.")}_gl.texParameteri(textureType,_gl.TEXTURE_MAG_FILTER,filterFallback(texture.magFilter));_gl.texParameteri(textureType,_gl.TEXTURE_MIN_FILTER,filterFallback(texture.minFilter));if(texture.minFilter!==NearestFilter&&texture.minFilter!==LinearFilter){console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")}}extension=extensions.get("EXT_texture_filter_anisotropic");if(extension){if(texture.type===FloatType&&null===extensions.get("OES_texture_float_linear"))return;if(texture.type===HalfFloatType&&null===(capabilities.isWebGL2||extensions.get("OES_texture_half_float_linear")))return;if(1<texture.anisotropy||properties.get(texture).__currentAnisotropy){_gl.texParameterf(textureType,extension.TEXTURE_MAX_ANISOTROPY_EXT,_Mathmin(texture.anisotropy,capabilities.getMaxAnisotropy()));properties.get(texture).__currentAnisotropy=texture.anisotropy}}}function uploadTexture(textureProperties,texture,slot){var textureType;if(texture.isDataTexture3D){textureType=_gl.TEXTURE_3D}else{textureType=_gl.TEXTURE_2D}if(textureProperties.__webglInit===void 0){textureProperties.__webglInit=!0;texture.addEventListener("dispose",onTextureDispose);textureProperties.__webglTexture=_gl.createTexture();info.memory.textures++}state.activeTexture(_gl.TEXTURE0+slot);state.bindTexture(textureType,textureProperties.__webglTexture);_gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL,texture.flipY);_gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,texture.premultiplyAlpha);_gl.pixelStorei(_gl.UNPACK_ALIGNMENT,texture.unpackAlignment);var needsPowerOfTwo=textureNeedsPowerOfTwo(texture)&&!1===isPowerOfTwo(texture.image),image=resizeImage(texture.image,needsPowerOfTwo,!1,capabilities.maxTextureSize),supportsMips=isPowerOfTwo(image)||capabilities.isWebGL2,glFormat=utils.convert(texture.format),glType=utils.convert(texture.type),glInternalFormat=getInternalFormat(glFormat,glType);setTextureParameters(textureType,texture,supportsMips);var mipmap,mipmaps=texture.mipmaps;if(texture.isDepthTexture){glInternalFormat=_gl.DEPTH_COMPONENT;if(texture.type===FloatType){if(!capabilities.isWebGL2)throw new Error("Float Depth Texture only supported in WebGL2.0");glInternalFormat=_gl.DEPTH_COMPONENT32F}else if(capabilities.isWebGL2){glInternalFormat=_gl.DEPTH_COMPONENT16}if(texture.format===DepthFormat&&glInternalFormat===_gl.DEPTH_COMPONENT){if(texture.type!==UnsignedShortType&&texture.type!==UnsignedIntType){console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.");texture.type=UnsignedShortType;glType=utils.convert(texture.type)}}if(texture.format===DepthStencilFormat){glInternalFormat=_gl.DEPTH_STENCIL;if(texture.type!==UnsignedInt248Type){console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.");texture.type=UnsignedInt248Type;glType=utils.convert(texture.type)}}state.texImage2D(_gl.TEXTURE_2D,0,glInternalFormat,image.width,image.height,0,glFormat,glType,null)}else if(texture.isDataTexture){if(0<mipmaps.length&&supportsMips){for(var i=0,il=mipmaps.length;i<il;i++){mipmap=mipmaps[i];state.texImage2D(_gl.TEXTURE_2D,i,glInternalFormat,mipmap.width,mipmap.height,0,glFormat,glType,mipmap.data)}texture.generateMipmaps=!1;textureProperties.__maxMipLevel=mipmaps.length-1}else{state.texImage2D(_gl.TEXTURE_2D,0,glInternalFormat,image.width,image.height,0,glFormat,glType,image.data);textureProperties.__maxMipLevel=0}}else if(texture.isCompressedTexture){for(var i=0,il=mipmaps.length;i<il;i++){mipmap=mipmaps[i];if(texture.format!==RGBAFormat&&texture.format!==RGBFormat){if(-1<state.getCompressedTextureFormats().indexOf(glFormat)){state.compressedTexImage2D(_gl.TEXTURE_2D,i,glInternalFormat,mipmap.width,mipmap.height,0,mipmap.data)}else{console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()")}}else{state.texImage2D(_gl.TEXTURE_2D,i,glInternalFormat,mipmap.width,mipmap.height,0,glFormat,glType,mipmap.data)}}textureProperties.__maxMipLevel=mipmaps.length-1}else if(texture.isDataTexture3D){state.texImage3D(_gl.TEXTURE_3D,0,glInternalFormat,image.width,image.height,image.depth,0,glFormat,glType,image.data);textureProperties.__maxMipLevel=0}else{if(0<mipmaps.length&&supportsMips){for(var i=0,il=mipmaps.length;i<il;i++){mipmap=mipmaps[i];state.texImage2D(_gl.TEXTURE_2D,i,glInternalFormat,glFormat,glType,mipmap)}texture.generateMipmaps=!1;textureProperties.__maxMipLevel=mipmaps.length-1}else{state.texImage2D(_gl.TEXTURE_2D,0,glInternalFormat,glFormat,glType,image);textureProperties.__maxMipLevel=0}}if(textureNeedsGenerateMipmaps(texture,supportsMips)){generateMipmap(_gl.TEXTURE_2D,texture,image.width,image.height)}textureProperties.__version=texture.version;if(texture.onUpdate)texture.onUpdate(texture)}function setupFrameBufferTexture(framebuffer,renderTarget,attachment,textureTarget){var glFormat=utils.convert(renderTarget.texture.format),glType=utils.convert(renderTarget.texture.type),glInternalFormat=getInternalFormat(glFormat,glType);state.texImage2D(textureTarget,0,glInternalFormat,renderTarget.width,renderTarget.height,0,glFormat,glType,null);_gl.bindFramebuffer(_gl.FRAMEBUFFER,framebuffer);_gl.framebufferTexture2D(_gl.FRAMEBUFFER,attachment,textureTarget,properties.get(renderTarget.texture).__webglTexture,0);_gl.bindFramebuffer(_gl.FRAMEBUFFER,null)}function setupRenderBufferStorage(renderbuffer,renderTarget,isMultisample){_gl.bindRenderbuffer(_gl.RENDERBUFFER,renderbuffer);if(renderTarget.depthBuffer&&!renderTarget.stencilBuffer){if(isMultisample){var samples=getRenderTargetSamples(renderTarget);_gl.renderbufferStorageMultisample(_gl.RENDERBUFFER,samples,_gl.DEPTH_COMPONENT16,renderTarget.width,renderTarget.height)}else{_gl.renderbufferStorage(_gl.RENDERBUFFER,_gl.DEPTH_COMPONENT16,renderTarget.width,renderTarget.height)}_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER,_gl.DEPTH_ATTACHMENT,_gl.RENDERBUFFER,renderbuffer)}else if(renderTarget.depthBuffer&&renderTarget.stencilBuffer){if(isMultisample){var samples=getRenderTargetSamples(renderTarget);_gl.renderbufferStorageMultisample(_gl.RENDERBUFFER,samples,_gl.DEPTH_STENCIL,renderTarget.width,renderTarget.height)}else{_gl.renderbufferStorage(_gl.RENDERBUFFER,_gl.DEPTH_STENCIL,renderTarget.width,renderTarget.height)}_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER,_gl.DEPTH_STENCIL_ATTACHMENT,_gl.RENDERBUFFER,renderbuffer)}else{var glFormat=utils.convert(renderTarget.texture.format),glType=utils.convert(renderTarget.texture.type),glInternalFormat=getInternalFormat(glFormat,glType);if(isMultisample){var samples=getRenderTargetSamples(renderTarget);_gl.renderbufferStorageMultisample(_gl.RENDERBUFFER,samples,glInternalFormat,renderTarget.width,renderTarget.height)}else{_gl.renderbufferStorage(_gl.RENDERBUFFER,glInternalFormat,renderTarget.width,renderTarget.height)}}_gl.bindRenderbuffer(_gl.RENDERBUFFER,null)}function setupDepthTexture(framebuffer,renderTarget){var isCube=renderTarget&&renderTarget.isWebGLRenderTargetCube;if(isCube)throw new Error("Depth Texture with cube render targets is not supported");_gl.bindFramebuffer(_gl.FRAMEBUFFER,framebuffer);if(!(renderTarget.depthTexture&&renderTarget.depthTexture.isDepthTexture)){throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture")}if(!properties.get(renderTarget.depthTexture).__webglTexture||renderTarget.depthTexture.image.width!==renderTarget.width||renderTarget.depthTexture.image.height!==renderTarget.height){renderTarget.depthTexture.image.width=renderTarget.width;renderTarget.depthTexture.image.height=renderTarget.height;renderTarget.depthTexture.needsUpdate=!0}setTexture2D(renderTarget.depthTexture,0);var webglDepthTexture=properties.get(renderTarget.depthTexture).__webglTexture;if(renderTarget.depthTexture.format===DepthFormat){_gl.framebufferTexture2D(_gl.FRAMEBUFFER,_gl.DEPTH_ATTACHMENT,_gl.TEXTURE_2D,webglDepthTexture,0)}else if(renderTarget.depthTexture.format===DepthStencilFormat){_gl.framebufferTexture2D(_gl.FRAMEBUFFER,_gl.DEPTH_STENCIL_ATTACHMENT,_gl.TEXTURE_2D,webglDepthTexture,0)}else{throw new Error("Unknown depthTexture format")}}function setupDepthRenderbuffer(renderTarget){var renderTargetProperties=properties.get(renderTarget),isCube=!0===renderTarget.isWebGLRenderTargetCube;if(renderTarget.depthTexture){if(isCube)throw new Error("target.depthTexture not supported in Cube render targets");setupDepthTexture(renderTargetProperties.__webglFramebuffer,renderTarget)}else{if(isCube){renderTargetProperties.__webglDepthbuffer=[];for(var i=0;6>i;i++){_gl.bindFramebuffer(_gl.FRAMEBUFFER,renderTargetProperties.__webglFramebuffer[i]);renderTargetProperties.__webglDepthbuffer[i]=_gl.createRenderbuffer();setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer[i],renderTarget)}}else{_gl.bindFramebuffer(_gl.FRAMEBUFFER,renderTargetProperties.__webglFramebuffer);renderTargetProperties.__webglDepthbuffer=_gl.createRenderbuffer();setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer,renderTarget)}}_gl.bindFramebuffer(_gl.FRAMEBUFFER,null)}function setupRenderTarget(renderTarget){var renderTargetProperties=properties.get(renderTarget),textureProperties=properties.get(renderTarget.texture);renderTarget.addEventListener("dispose",onRenderTargetDispose);textureProperties.__webglTexture=_gl.createTexture();info.memory.textures++;var isCube=!0===renderTarget.isWebGLRenderTargetCube,isMultisample=!0===renderTarget.isWebGLMultisampleRenderTarget,supportsMips=isPowerOfTwo(renderTarget)||capabilities.isWebGL2;if(isCube){renderTargetProperties.__webglFramebuffer=[];for(var i=0;6>i;i++){renderTargetProperties.__webglFramebuffer[i]=_gl.createFramebuffer()}}else{renderTargetProperties.__webglFramebuffer=_gl.createFramebuffer();if(isMultisample){if(capabilities.isWebGL2){renderTargetProperties.__webglMultisampledFramebuffer=_gl.createFramebuffer();renderTargetProperties.__webglColorRenderbuffer=_gl.createRenderbuffer();_gl.bindRenderbuffer(_gl.RENDERBUFFER,renderTargetProperties.__webglColorRenderbuffer);var glFormat=utils.convert(renderTarget.texture.format),glType=utils.convert(renderTarget.texture.type),glInternalFormat=getInternalFormat(glFormat,glType),samples=getRenderTargetSamples(renderTarget);_gl.renderbufferStorageMultisample(_gl.RENDERBUFFER,samples,glInternalFormat,renderTarget.width,renderTarget.height);_gl.bindFramebuffer(_gl.FRAMEBUFFER,renderTargetProperties.__webglMultisampledFramebuffer);_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,_gl.RENDERBUFFER,renderTargetProperties.__webglColorRenderbuffer);_gl.bindRenderbuffer(_gl.RENDERBUFFER,null);if(renderTarget.depthBuffer){renderTargetProperties.__webglDepthRenderbuffer=_gl.createRenderbuffer();setupRenderBufferStorage(renderTargetProperties.__webglDepthRenderbuffer,renderTarget,!0)}_gl.bindFramebuffer(_gl.FRAMEBUFFER,null)}else{console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}}}if(isCube){state.bindTexture(_gl.TEXTURE_CUBE_MAP,textureProperties.__webglTexture);setTextureParameters(_gl.TEXTURE_CUBE_MAP,renderTarget.texture,supportsMips);for(var i=0;6>i;i++){setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer[i],renderTarget,_gl.COLOR_ATTACHMENT0,_gl.TEXTURE_CUBE_MAP_POSITIVE_X+i)}if(textureNeedsGenerateMipmaps(renderTarget.texture,supportsMips)){generateMipmap(_gl.TEXTURE_CUBE_MAP,renderTarget.texture,renderTarget.width,renderTarget.height)}state.bindTexture(_gl.TEXTURE_CUBE_MAP,null)}else{state.bindTexture(_gl.TEXTURE_2D,textureProperties.__webglTexture);setTextureParameters(_gl.TEXTURE_2D,renderTarget.texture,supportsMips);setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer,renderTarget,_gl.COLOR_ATTACHMENT0,_gl.TEXTURE_2D);if(textureNeedsGenerateMipmaps(renderTarget.texture,supportsMips)){generateMipmap(_gl.TEXTURE_2D,renderTarget.texture,renderTarget.width,renderTarget.height)}state.bindTexture(_gl.TEXTURE_2D,null)}if(renderTarget.depthBuffer){setupDepthRenderbuffer(renderTarget)}}function updateRenderTargetMipmap(renderTarget){var texture=renderTarget.texture,supportsMips=isPowerOfTwo(renderTarget)||capabilities.isWebGL2;if(textureNeedsGenerateMipmaps(texture,supportsMips)){var target=renderTarget.isWebGLRenderTargetCube?_gl.TEXTURE_CUBE_MAP:_gl.TEXTURE_2D,webglTexture=properties.get(texture).__webglTexture;state.bindTexture(target,webglTexture);generateMipmap(target,texture,renderTarget.width,renderTarget.height);state.bindTexture(target,null)}}function updateMultisampleRenderTarget(renderTarget){if(renderTarget.isWebGLMultisampleRenderTarget){if(capabilities.isWebGL2){var renderTargetProperties=properties.get(renderTarget);_gl.bindFramebuffer(_gl.READ_FRAMEBUFFER,renderTargetProperties.__webglMultisampledFramebuffer);_gl.bindFramebuffer(_gl.DRAW_FRAMEBUFFER,renderTargetProperties.__webglFramebuffer);var width=renderTarget.width,height=renderTarget.height,mask=_gl.COLOR_BUFFER_BIT;if(renderTarget.depthBuffer)mask|=_gl.DEPTH_BUFFER_BIT;if(renderTarget.stencilBuffer)mask|=_gl.STENCIL_BUFFER_BIT;_gl.blitFramebuffer(0,0,width,height,0,0,width,height,mask,_gl.NEAREST)}else{console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}}}function getRenderTargetSamples(renderTarget){return capabilities.isWebGL2&&renderTarget.isWebGLMultisampleRenderTarget?_Mathmin(capabilities.maxSamples,renderTarget.samples):0}function updateVideoTexture(texture){var id=texture.id,frame=info.render.frame;if(_videoTextures[id]!==frame){_videoTextures[id]=frame;texture.update()}}this.setTexture2D=setTexture2D;this.setTexture3D=setTexture3D;this.setTextureCube=setTextureCube;this.setTextureCubeDynamic=setTextureCubeDynamic;this.setupRenderTarget=setupRenderTarget;this.updateRenderTargetMipmap=updateRenderTargetMipmap;this.updateMultisampleRenderTarget=updateMultisampleRenderTarget}var WebGLTextures$1={WebGLTextures:WebGLTextures};_exports.$WebGLTextures=WebGLTextures$1;function WebGLUtils(gl,extensions,capabilities){function convert(p){var extension;if(p===RepeatWrapping)return gl.REPEAT;if(p===ClampToEdgeWrapping)return gl.CLAMP_TO_EDGE;if(p===MirroredRepeatWrapping)return gl.MIRRORED_REPEAT;if(p===NearestFilter)return gl.NEAREST;if(p===NearestMipMapNearestFilter)return gl.NEAREST_MIPMAP_NEAREST;if(p===NearestMipMapLinearFilter)return gl.NEAREST_MIPMAP_LINEAR;if(p===LinearFilter)return gl.LINEAR;if(p===LinearMipMapNearestFilter)return gl.LINEAR_MIPMAP_NEAREST;if(p===LinearMipMapLinearFilter)return gl.LINEAR_MIPMAP_LINEAR;if(p===UnsignedByteType)return gl.UNSIGNED_BYTE;if(p===UnsignedShort4444Type)return gl.UNSIGNED_SHORT_4_4_4_4;if(p===UnsignedShort5551Type)return gl.UNSIGNED_SHORT_5_5_5_1;if(p===UnsignedShort565Type)return gl.UNSIGNED_SHORT_5_6_5;if(p===ByteType)return gl.BYTE;if(p===ShortType)return gl.SHORT;if(p===UnsignedShortType)return gl.UNSIGNED_SHORT;if(p===IntType)return gl.INT;if(p===UnsignedIntType)return gl.UNSIGNED_INT;if(p===FloatType)return gl.FLOAT;if(p===HalfFloatType){if(capabilities.isWebGL2)return gl.HALF_FLOAT;extension=extensions.get("OES_texture_half_float");if(null!==extension)return extension.HALF_FLOAT_OES}if(p===AlphaFormat)return gl.ALPHA;if(p===RGBFormat)return gl.RGB;if(p===RGBAFormat)return gl.RGBA;if(p===LuminanceFormat)return gl.LUMINANCE;if(p===LuminanceAlphaFormat)return gl.LUMINANCE_ALPHA;if(p===DepthFormat)return gl.DEPTH_COMPONENT;if(p===DepthStencilFormat)return gl.DEPTH_STENCIL;if(p===RedFormat)return gl.RED;if(p===AddEquation)return gl.FUNC_ADD;if(p===SubtractEquation)return gl.FUNC_SUBTRACT;if(p===ReverseSubtractEquation)return gl.FUNC_REVERSE_SUBTRACT;if(p===ZeroFactor)return gl.ZERO;if(p===OneFactor)return gl.ONE;if(p===SrcColorFactor)return gl.SRC_COLOR;if(p===OneMinusSrcColorFactor)return gl.ONE_MINUS_SRC_COLOR;if(p===SrcAlphaFactor)return gl.SRC_ALPHA;if(p===OneMinusSrcAlphaFactor)return gl.ONE_MINUS_SRC_ALPHA;if(p===DstAlphaFactor)return gl.DST_ALPHA;if(p===OneMinusDstAlphaFactor)return gl.ONE_MINUS_DST_ALPHA;if(p===DstColorFactor)return gl.DST_COLOR;if(p===OneMinusDstColorFactor)return gl.ONE_MINUS_DST_COLOR;if(p===SrcAlphaSaturateFactor)return gl.SRC_ALPHA_SATURATE;if(p===RGB_S3TC_DXT1_Format||p===RGBA_S3TC_DXT1_Format||p===RGBA_S3TC_DXT3_Format||p===RGBA_S3TC_DXT5_Format){extension=extensions.get("WEBGL_compressed_texture_s3tc");if(null!==extension){if(p===RGB_S3TC_DXT1_Format)return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;if(p===RGBA_S3TC_DXT1_Format)return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(p===RGBA_S3TC_DXT3_Format)return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(p===RGBA_S3TC_DXT5_Format)return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT}}if(p===RGB_PVRTC_4BPPV1_Format||p===RGB_PVRTC_2BPPV1_Format||p===RGBA_PVRTC_4BPPV1_Format||p===RGBA_PVRTC_2BPPV1_Format){extension=extensions.get("WEBGL_compressed_texture_pvrtc");if(null!==extension){if(p===RGB_PVRTC_4BPPV1_Format)return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(p===RGB_PVRTC_2BPPV1_Format)return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(p===RGBA_PVRTC_4BPPV1_Format)return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(p===RGBA_PVRTC_2BPPV1_Format)return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}}if(p===RGB_ETC1_Format){extension=extensions.get("WEBGL_compressed_texture_etc1");if(null!==extension)return extension.COMPRESSED_RGB_ETC1_WEBGL}if(p===RGBA_ASTC_4x4_Format||p===RGBA_ASTC_5x4_Format||p===RGBA_ASTC_5x5_Format||p===RGBA_ASTC_6x5_Format||p===RGBA_ASTC_6x6_Format||p===RGBA_ASTC_8x5_Format||p===RGBA_ASTC_8x6_Format||p===RGBA_ASTC_8x8_Format||p===RGBA_ASTC_10x5_Format||p===RGBA_ASTC_10x6_Format||p===RGBA_ASTC_10x8_Format||p===RGBA_ASTC_10x10_Format||p===RGBA_ASTC_12x10_Format||p===RGBA_ASTC_12x12_Format){extension=extensions.get("WEBGL_compressed_texture_astc");if(null!==extension){return p}}if(p===MinEquation||p===MaxEquation){if(capabilities.isWebGL2){if(p===MinEquation)return gl.MIN;if(p===MaxEquation)return gl.MAX}extension=extensions.get("EXT_blend_minmax");if(null!==extension){if(p===MinEquation)return extension.MIN_EXT;if(p===MaxEquation)return extension.MAX_EXT}}if(p===UnsignedInt248Type){if(capabilities.isWebGL2)return gl.UNSIGNED_INT_24_8;extension=extensions.get("WEBGL_depth_texture");if(null!==extension)return extension.UNSIGNED_INT_24_8_WEBGL}return 0}return{convert:convert}}var WebGLUtils$1={WebGLUtils:WebGLUtils};_exports.$WebGLUtils=WebGLUtils$1;var cameraLPos=new Vector3,cameraRPos=new Vector3;function setProjectionFromUnion(camera,cameraL,cameraR){cameraLPos.setFromMatrixPosition(cameraL.matrixWorld);cameraRPos.setFromMatrixPosition(cameraR.matrixWorld);var ipd=cameraLPos.distanceTo(cameraRPos),projL=cameraL.projectionMatrix.elements,projR=cameraR.projectionMatrix.elements,near=projL[14]/(projL[10]-1),far=projL[14]/(projL[10]+1),topFov=(projL[9]+1)/projL[5],bottomFov=(projL[9]-1)/projL[5],leftFov=(projL[8]-1)/projL[0],rightFov=(projR[8]+1)/projR[0],left=near*leftFov,right=near*rightFov,zOffset=ipd/(-leftFov+rightFov),xOffset=zOffset*-leftFov;cameraL.matrixWorld.decompose(camera.position,camera.quaternion,camera.scale);camera.translateX(xOffset);camera.translateZ(zOffset);camera.matrixWorld.compose(camera.position,camera.quaternion,camera.scale);camera.matrixWorldInverse.getInverse(camera.matrixWorld);var near2=near+zOffset,far2=far+zOffset,left2=left-xOffset,right2=right+(ipd-xOffset),top2=topFov*far/far2*near2,bottom2=bottomFov*far/far2*near2;camera.projectionMatrix.makePerspective(left2,right2,top2,bottom2,near2,far2)}var WebVRUtils={setProjectionFromUnion:setProjectionFromUnion};_exports.$WebVRUtils=WebVRUtils;function WebVRManager(renderer){var scope=this,device=null,frameData=null,poseTarget=null,controllers=[],standingMatrix=new Matrix4,standingMatrixInverse=new Matrix4,framebufferScaleFactor=1,frameOfReferenceType="stage";if("undefined"!==typeof window&&"VRFrameData"in window){frameData=new window.VRFrameData;window.addEventListener("vrdisplaypresentchange",onVRDisplayPresentChange,!1)}var matrixWorldInverse=new Matrix4,tempQuaternion=new Quaternion,tempPosition=new Vector3,cameraL=new PerspectiveCamera;cameraL.bounds=new Vector4(0,0,.5,1);cameraL.layers.enable(1);var cameraR=new PerspectiveCamera;cameraR.bounds=new Vector4(.5,0,.5,1);cameraR.layers.enable(2);var cameraVR=new ArrayCamera([cameraL,cameraR]);cameraVR.layers.enable(1);cameraVR.layers.enable(2);function isPresenting(){return null!==device&&!0===device.isPresenting}var currentSize,currentPixelRatio;function onVRDisplayPresentChange(){if(isPresenting()){var eyeParameters=device.getEyeParameters("left"),renderWidth=eyeParameters.renderWidth*framebufferScaleFactor,renderHeight=eyeParameters.renderHeight*framebufferScaleFactor;currentPixelRatio=renderer.getPixelRatio();currentSize=renderer.getSize();renderer.setDrawingBufferSize(2*renderWidth,renderHeight,1);animation.start()}else{if(scope.enabled){renderer.setDrawingBufferSize(currentSize.width,currentSize.height,currentPixelRatio)}animation.stop()}}var triggers=[];function findGamepad(id){for(var gamepads=navigator.getGamepads&&navigator.getGamepads(),i=0,j=0,l=gamepads.length,gamepad;i<l;i++){gamepad=gamepads[i];if(gamepad&&("Daydream Controller"===gamepad.id||"Gear VR Controller"===gamepad.id||"Oculus Go Controller"===gamepad.id||"OpenVR Gamepad"===gamepad.id||gamepad.id.startsWith("Oculus Touch")||gamepad.id.startsWith("Spatial Controller"))){if(j===id)return gamepad;j++}}}function updateControllers(){for(var i=0;i<controllers.length;i++){var controller=controllers[i],gamepad=findGamepad(i);if(gamepad!==void 0&&gamepad.pose!==void 0){if(null===gamepad.pose)return;var pose=gamepad.pose;if(!1===pose.hasPosition)controller.position.set(.2,-.6,-.05);if(null!==pose.position)controller.position.fromArray(pose.position);if(null!==pose.orientation)controller.quaternion.fromArray(pose.orientation);controller.matrix.compose(controller.position,controller.quaternion,controller.scale);controller.matrix.premultiply(standingMatrix);controller.matrix.decompose(controller.position,controller.quaternion,controller.scale);controller.matrixWorldNeedsUpdate=!0;controller.visible=!0;var buttonId="Daydream Controller"===gamepad.id?0:1;if(triggers[i]!==gamepad.buttons[buttonId].pressed){triggers[i]=gamepad.buttons[buttonId].pressed;if(!0===triggers[i]){controller.dispatchEvent({type:"selectstart"})}else{controller.dispatchEvent({type:"selectend"});controller.dispatchEvent({type:"select"})}}}else{controller.visible=!1}}}this.enabled=!1;this.getController=function(id){var controller=controllers[id];if(controller===void 0){controller=new Group;controller.matrixAutoUpdate=!1;controller.visible=!1;controllers[id]=controller}return controller};this.getDevice=function(){return device};this.setDevice=function(value){if(value!==void 0)device=value;animation.setContext(value)};this.setFramebufferScaleFactor=function(value){framebufferScaleFactor=value};this.setFrameOfReferenceType=function(value){frameOfReferenceType=value};this.setPoseTarget=function(object){if(object!==void 0)poseTarget=object};this.getCamera=function(camera){var userHeight="stage"===frameOfReferenceType?1.6:0;if(null===device){camera.position.set(0,userHeight,0);return camera}device.depthNear=camera.near;device.depthFar=camera.far;device.getFrameData(frameData);if("stage"===frameOfReferenceType){var stageParameters=device.stageParameters;if(stageParameters){standingMatrix.fromArray(stageParameters.sittingToStandingTransform)}else{standingMatrix.makeTranslation(0,userHeight,0)}}var pose=frameData.pose,poseObject=null!==poseTarget?poseTarget:camera;poseObject.matrix.copy(standingMatrix);poseObject.matrix.decompose(poseObject.position,poseObject.quaternion,poseObject.scale);if(null!==pose.orientation){tempQuaternion.fromArray(pose.orientation);poseObject.quaternion.multiply(tempQuaternion)}if(null!==pose.position){tempQuaternion.setFromRotationMatrix(standingMatrix);tempPosition.fromArray(pose.position);tempPosition.applyQuaternion(tempQuaternion);poseObject.position.add(tempPosition)}poseObject.updateMatrixWorld();if(!1===device.isPresenting)return camera;cameraL.near=camera.near;cameraR.near=camera.near;cameraL.far=camera.far;cameraR.far=camera.far;cameraL.matrixWorldInverse.fromArray(frameData.leftViewMatrix);cameraR.matrixWorldInverse.fromArray(frameData.rightViewMatrix);standingMatrixInverse.getInverse(standingMatrix);if("stage"===frameOfReferenceType){cameraL.matrixWorldInverse.multiply(standingMatrixInverse);cameraR.matrixWorldInverse.multiply(standingMatrixInverse)}var parent=poseObject.parent;if(null!==parent){matrixWorldInverse.getInverse(parent.matrixWorld);cameraL.matrixWorldInverse.multiply(matrixWorldInverse);cameraR.matrixWorldInverse.multiply(matrixWorldInverse)}cameraL.matrixWorld.getInverse(cameraL.matrixWorldInverse);cameraR.matrixWorld.getInverse(cameraR.matrixWorldInverse);cameraL.projectionMatrix.fromArray(frameData.leftProjectionMatrix);cameraR.projectionMatrix.fromArray(frameData.rightProjectionMatrix);setProjectionFromUnion(cameraVR,cameraL,cameraR);var layers=device.getLayers();if(layers.length){var layer=layers[0];if(null!==layer.leftBounds&&4===layer.leftBounds.length){cameraL.bounds.fromArray(layer.leftBounds)}if(null!==layer.rightBounds&&4===layer.rightBounds.length){cameraR.bounds.fromArray(layer.rightBounds)}}updateControllers();return cameraVR};this.getStandingMatrix=function(){return standingMatrix};this.isPresenting=isPresenting;var animation=new WebGLAnimation;this.setAnimationLoop=function(callback){animation.setAnimationLoop(callback)};this.submitFrame=function(){if(isPresenting())device.submitFrame()};this.dispose=function(){if("undefined"!==typeof window){window.removeEventListener("vrdisplaypresentchange",onVRDisplayPresentChange)}}}var WebVRManager$1={WebVRManager:WebVRManager};_exports.$WebVRManager=WebVRManager$1;function WebXRManager(renderer){var gl=renderer.context,device=null,session=null,framebufferScaleFactor=1,frameOfReference=null,frameOfReferenceType="stage",pose=null,controllers=[],inputSources=[];function isPresenting(){return null!==session&&null!==frameOfReference}var cameraL=new PerspectiveCamera;cameraL.layers.enable(1);cameraL.viewport=new Vector4;var cameraR=new PerspectiveCamera;cameraR.layers.enable(2);cameraR.viewport=new Vector4;var cameraVR=new ArrayCamera([cameraL,cameraR]);cameraVR.layers.enable(1);cameraVR.layers.enable(2);this.enabled=!1;this.getController=function(id){var controller=controllers[id];if(controller===void 0){controller=new Group;controller.matrixAutoUpdate=!1;controller.visible=!1;controllers[id]=controller}return controller};this.getDevice=function(){return device};this.setDevice=function(value){if(value!==void 0)device=value;if(value instanceof XRDevice)gl.setCompatibleXRDevice(value)};function onSessionEvent(event){var controller=controllers[inputSources.indexOf(event.inputSource)];if(controller)controller.dispatchEvent({type:event.type})}function onSessionEnd(){renderer.setFramebuffer(null);animation.stop()}this.setFramebufferScaleFactor=function(value){framebufferScaleFactor=value};this.setFrameOfReferenceType=function(value){frameOfReferenceType=value};this.setSession=function(value){session=value;if(null!==session){session.addEventListener("select",onSessionEvent);session.addEventListener("selectstart",onSessionEvent);session.addEventListener("selectend",onSessionEvent);session.addEventListener("end",onSessionEnd);session.baseLayer=new XRWebGLLayer(session,gl,{framebufferScaleFactor:framebufferScaleFactor});session.requestFrameOfReference(frameOfReferenceType).then(function(value){frameOfReference=value;renderer.setFramebuffer(session.baseLayer.framebuffer);animation.setContext(session);animation.start()});inputSources=session.getInputSources();session.addEventListener("inputsourceschange",function(){inputSources=session.getInputSources();console.log(inputSources);for(var i=0,controller;i<controllers.length;i++){controller=controllers[i];controller.userData.inputSource=inputSources[i]}})}};function updateCamera(camera,parent){if(null===parent){camera.matrixWorld.copy(camera.matrix)}else{camera.matrixWorld.multiplyMatrices(parent.matrixWorld,camera.matrix)}camera.matrixWorldInverse.getInverse(camera.matrixWorld)}this.getCamera=function(camera){if(isPresenting()){var parent=camera.parent,cameras=cameraVR.cameras;updateCamera(cameraVR,parent);for(var i=0;i<cameras.length;i++){updateCamera(cameras[i],parent)}camera.matrixWorld.copy(cameraVR.matrixWorld);for(var children=camera.children,i=0,l=children.length;i<l;i++){children[i].updateMatrixWorld(!0)}setProjectionFromUnion(cameraVR,cameraL,cameraR);return cameraVR}return camera};this.isPresenting=isPresenting;var onAnimationFrameCallback=null;function onAnimationFrame(time,frame){pose=frame.getDevicePose(frameOfReference);if(null!==pose){for(var layer=session.baseLayer,views=frame.views,i=0;i<views.length;i++){var view=views[i],viewport=layer.getViewport(view),viewMatrix=pose.getViewMatrix(view),camera=cameraVR.cameras[i];camera.matrix.fromArray(viewMatrix).getInverse(camera.matrix);camera.projectionMatrix.fromArray(view.projectionMatrix);camera.viewport.set(viewport.x,viewport.y,viewport.width,viewport.height);if(0===i){cameraVR.matrix.copy(camera.matrix)}}}for(var i=0;i<controllers.length;i++){var controller=controllers[i],inputSource=inputSources[i];if(inputSource){var inputPose=frame.getInputPose(inputSource,frameOfReference);if(null!==inputPose){if("targetRay"in inputPose){controller.matrix.elements=inputPose.targetRay.transformMatrix}else if("pointerMatrix"in inputPose){controller.matrix.elements=inputPose.pointerMatrix}controller.matrix.decompose(controller.position,controller.rotation,controller.scale);controller.visible=!0;continue}}controller.visible=!1}if(onAnimationFrameCallback)onAnimationFrameCallback(time)}var animation=new WebGLAnimation;animation.setAnimationLoop(onAnimationFrame);this.setAnimationLoop=function(callback){onAnimationFrameCallback=callback};this.dispose=function(){};this.getStandingMatrix=function(){console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed.");return new THREE.Matrix4};this.submitFrame=function(){}}var WebXRManager$1={WebXRManager:WebXRManager};_exports.$WebXRManager=WebXRManager$1;function WebGLRenderer(parameters){console.log("THREE.WebGLRenderer",REVISION);parameters=parameters||{};var _canvas=parameters.canvas!==void 0?parameters.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),_context=parameters.context!==void 0?parameters.context:null,_alpha=parameters.alpha!==void 0?parameters.alpha:!1,_depth=parameters.depth!==void 0?parameters.depth:!0,_stencil=parameters.stencil!==void 0?parameters.stencil:!0,_antialias=parameters.antialias!==void 0?parameters.antialias:!1,_premultipliedAlpha=parameters.premultipliedAlpha!==void 0?parameters.premultipliedAlpha:!0,_preserveDrawingBuffer=parameters.preserveDrawingBuffer!==void 0?parameters.preserveDrawingBuffer:!1,_powerPreference=parameters.powerPreference!==void 0?parameters.powerPreference:"default",currentRenderList=null,currentRenderState=null;this.domElement=_canvas;this.context=null;this.autoClear=!0;this.autoClearColor=!0;this.autoClearDepth=!0;this.autoClearStencil=!0;this.sortObjects=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.gammaInput=!1;this.gammaOutput=!1;this.physicallyCorrectLights=!1;this.toneMapping=LinearToneMapping;this.toneMappingExposure=1;this.toneMappingWhitePoint=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var _this=this,_isContextLost=!1,_framebuffer=null,_currentRenderTarget=null,_currentFramebuffer=null,_currentMaterialId=-1,_currentGeometryProgram={geometry:null,program:null,wireframe:!1},_currentCamera=null,_currentArrayCamera=null,_currentViewport=new Vector4,_currentScissor=new Vector4,_currentScissorTest=null,_usedTextureUnits=0,_width=_canvas.width,_height=_canvas.height,_pixelRatio=1,_viewport=new Vector4(0,0,_width,_height),_scissor=new Vector4(0,0,_width,_height),_scissorTest=!1,_frustum=new Frustum,_clipping=new WebGLClipping,_clippingEnabled=!1,_localClippingEnabled=!1,_projScreenMatrix=new Matrix4,_vector3=new Vector3;function getTargetPixelRatio(){return null===_currentRenderTarget?_pixelRatio:1}var _gl;try{var contextAttributes={alpha:_alpha,depth:_depth,stencil:_stencil,antialias:_antialias,premultipliedAlpha:_premultipliedAlpha,preserveDrawingBuffer:_preserveDrawingBuffer,powerPreference:_powerPreference};_canvas.addEventListener("webglcontextlost",onContextLost,!1);_canvas.addEventListener("webglcontextrestored",onContextRestore,!1);_gl=_context||_canvas.getContext("webgl",contextAttributes)||_canvas.getContext("experimental-webgl",contextAttributes);if(null===_gl){if(null!==_canvas.getContext("webgl")){throw new Error("Error creating WebGL context with your selected attributes.")}else{throw new Error("Error creating WebGL context.")}}if(_gl.getShaderPrecisionFormat===void 0){_gl.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}}}catch(error){console.error("THREE.WebGLRenderer: "+error.message)}var extensions,capabilities,state,info,properties,textures,attributes,geometries,objects,programCache,renderLists,renderStates,background,morphtargets,bufferRenderer,indexedBufferRenderer,utils;function initGLContext(){extensions=new WebGLExtensions(_gl);capabilities=new WebGLCapabilities(_gl,extensions,parameters);if(!capabilities.isWebGL2){extensions.get("WEBGL_depth_texture");extensions.get("OES_texture_float");extensions.get("OES_texture_half_float");extensions.get("OES_texture_half_float_linear");extensions.get("OES_standard_derivatives");extensions.get("OES_element_index_uint");extensions.get("ANGLE_instanced_arrays")}extensions.get("OES_texture_float_linear");utils=new WebGLUtils(_gl,extensions,capabilities);state=new WebGLState(_gl,extensions,utils,capabilities);state.scissor(_currentScissor.copy(_scissor).multiplyScalar(_pixelRatio));state.viewport(_currentViewport.copy(_viewport).multiplyScalar(_pixelRatio));info=new WebGLInfo(_gl);properties=new WebGLProperties;textures=new WebGLTextures(_gl,extensions,state,properties,capabilities,utils,info);attributes=new WebGLAttributes(_gl);geometries=new WebGLGeometries(_gl,attributes,info);objects=new WebGLObjects(geometries,info);morphtargets=new WebGLMorphtargets(_gl);programCache=new WebGLPrograms(_this,extensions,capabilities);renderLists=new WebGLRenderLists;renderStates=new WebGLRenderStates;background=new WebGLBackground(_this,state,objects,_premultipliedAlpha);bufferRenderer=new WebGLBufferRenderer(_gl,extensions,info,capabilities);indexedBufferRenderer=new WebGLIndexedBufferRenderer(_gl,extensions,info,capabilities);info.programs=programCache.programs;_this.context=_gl;_this.capabilities=capabilities;_this.extensions=extensions;_this.properties=properties;_this.renderLists=renderLists;_this.state=state;_this.info=info}initGLContext();var vr=null;if("undefined"!==typeof navigator){vr="xr"in navigator?new WebXRManager(_this):new WebVRManager(_this)}this.vr=vr;var shadowMap=new WebGLShadowMap(_this,objects,capabilities.maxTextureSize);this.shadowMap=shadowMap;this.getContext=function(){return _gl};this.getContextAttributes=function(){return _gl.getContextAttributes()};this.forceContextLoss=function(){var extension=extensions.get("WEBGL_lose_context");if(extension)extension.loseContext()};this.forceContextRestore=function(){var extension=extensions.get("WEBGL_lose_context");if(extension)extension.restoreContext()};this.getPixelRatio=function(){return _pixelRatio};this.setPixelRatio=function(value){if(value===void 0)return;_pixelRatio=value;this.setSize(_width,_height,!1)};this.getSize=function(){return{width:_width,height:_height}};this.setSize=function(width,height,updateStyle){if(vr.isPresenting()){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}_width=width;_height=height;_canvas.width=width*_pixelRatio;_canvas.height=height*_pixelRatio;if(!1!==updateStyle){_canvas.style.width=width+"px";_canvas.style.height=height+"px"}this.setViewport(0,0,width,height)};this.getDrawingBufferSize=function(){return{width:_width*_pixelRatio,height:_height*_pixelRatio}};this.setDrawingBufferSize=function(width,height,pixelRatio){_width=width;_height=height;_pixelRatio=pixelRatio;_canvas.width=width*pixelRatio;_canvas.height=height*pixelRatio;this.setViewport(0,0,width,height)};this.getCurrentViewport=function(){return _currentViewport};this.setViewport=function(x,y,width,height){_viewport.set(x,_height-y-height,width,height);state.viewport(_currentViewport.copy(_viewport).multiplyScalar(_pixelRatio))};this.setScissor=function(x,y,width,height){_scissor.set(x,_height-y-height,width,height);state.scissor(_currentScissor.copy(_scissor).multiplyScalar(_pixelRatio))};this.setScissorTest=function(boolean){state.setScissorTest(_scissorTest=boolean)};this.getClearColor=function(){return background.getClearColor()};this.setClearColor=function(){background.setClearColor.apply(background,arguments)};this.getClearAlpha=function(){return background.getClearAlpha()};this.setClearAlpha=function(){background.setClearAlpha.apply(background,arguments)};this.clear=function(color,depth,stencil){var bits=0;if(color===void 0||color)bits|=_gl.COLOR_BUFFER_BIT;if(depth===void 0||depth)bits|=_gl.DEPTH_BUFFER_BIT;if(stencil===void 0||stencil)bits|=_gl.STENCIL_BUFFER_BIT;_gl.clear(bits)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.dispose=function(){_canvas.removeEventListener("webglcontextlost",onContextLost,!1);_canvas.removeEventListener("webglcontextrestored",onContextRestore,!1);renderLists.dispose();renderStates.dispose();properties.dispose();objects.dispose();vr.dispose();animation.stop()};function onContextLost(event){event.preventDefault();console.log("THREE.WebGLRenderer: Context Lost.");_isContextLost=!0}function onContextRestore(){console.log("THREE.WebGLRenderer: Context Restored.");_isContextLost=!1;initGLContext()}function onMaterialDispose(event){var material=event.target;material.removeEventListener("dispose",onMaterialDispose);deallocateMaterial(material)}function deallocateMaterial(material){releaseMaterialProgramReference(material);properties.remove(material)}function releaseMaterialProgramReference(material){var programInfo=properties.get(material).program;material.program=void 0;if(programInfo!==void 0){programCache.releaseProgram(programInfo)}}function renderObjectImmediate(object,program){object.render(function(object){_this.renderBufferImmediate(object,program)})}this.renderBufferImmediate=function(object,program){state.initAttributes();var buffers=properties.get(object);if(object.hasPositions&&!buffers.position)buffers.position=_gl.createBuffer();if(object.hasNormals&&!buffers.normal)buffers.normal=_gl.createBuffer();if(object.hasUvs&&!buffers.uv)buffers.uv=_gl.createBuffer();if(object.hasColors&&!buffers.color)buffers.color=_gl.createBuffer();var programAttributes=program.getAttributes();if(object.hasPositions){_gl.bindBuffer(_gl.ARRAY_BUFFER,buffers.position);_gl.bufferData(_gl.ARRAY_BUFFER,object.positionArray,_gl.DYNAMIC_DRAW);state.enableAttribute(programAttributes.position);_gl.vertexAttribPointer(programAttributes.position,3,_gl.FLOAT,!1,0,0)}if(object.hasNormals){_gl.bindBuffer(_gl.ARRAY_BUFFER,buffers.normal);_gl.bufferData(_gl.ARRAY_BUFFER,object.normalArray,_gl.DYNAMIC_DRAW);state.enableAttribute(programAttributes.normal);_gl.vertexAttribPointer(programAttributes.normal,3,_gl.FLOAT,!1,0,0)}if(object.hasUvs){_gl.bindBuffer(_gl.ARRAY_BUFFER,buffers.uv);_gl.bufferData(_gl.ARRAY_BUFFER,object.uvArray,_gl.DYNAMIC_DRAW);state.enableAttribute(programAttributes.uv);_gl.vertexAttribPointer(programAttributes.uv,2,_gl.FLOAT,!1,0,0)}if(object.hasColors){_gl.bindBuffer(_gl.ARRAY_BUFFER,buffers.color);_gl.bufferData(_gl.ARRAY_BUFFER,object.colorArray,_gl.DYNAMIC_DRAW);state.enableAttribute(programAttributes.color);_gl.vertexAttribPointer(programAttributes.color,3,_gl.FLOAT,!1,0,0)}state.disableUnusedAttributes();_gl.drawArrays(_gl.TRIANGLES,0,object.count);object.count=0};this.renderBufferDirect=function(camera,fog,geometry,material,object,group){var frontFaceCW=object.isMesh&&0>object.normalMatrix.determinant();state.setMaterial(material,frontFaceCW);var program=setProgram(camera,fog,material,object),updateBuffers=!1;if(_currentGeometryProgram.geometry!==geometry.id||_currentGeometryProgram.program!==program.id||_currentGeometryProgram.wireframe!==(!0===material.wireframe)){_currentGeometryProgram.geometry=geometry.id;_currentGeometryProgram.program=program.id;_currentGeometryProgram.wireframe=!0===material.wireframe;updateBuffers=!0}if(object.morphTargetInfluences){morphtargets.update(object,geometry,material,program);updateBuffers=!0}var index=geometry.index,position=geometry.attributes.position,rangeFactor=1;if(!0===material.wireframe){index=geometries.getWireframeAttribute(geometry);rangeFactor=2}var attribute,renderer=bufferRenderer;if(null!==index){attribute=attributes.get(index);renderer=indexedBufferRenderer;renderer.setIndex(attribute)}if(updateBuffers){setupVertexAttributes(material,program,geometry);if(null!==index){_gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER,attribute.buffer)}}var dataCount=1/0;if(null!==index){dataCount=index.count}else if(position!==void 0){dataCount=position.count}var rangeStart=geometry.drawRange.start*rangeFactor,rangeCount=geometry.drawRange.count*rangeFactor,groupStart=null!==group?group.start*rangeFactor:0,groupCount=null!==group?group.count*rangeFactor:1/0,drawStart=_Mathmax(rangeStart,groupStart),drawEnd=_Mathmin(dataCount,rangeStart+rangeCount,groupStart+groupCount)-1,drawCount=_Mathmax(0,drawEnd-drawStart+1);if(0===drawCount)return;if(object.isMesh){if(!0===material.wireframe){state.setLineWidth(material.wireframeLinewidth*getTargetPixelRatio());renderer.setMode(_gl.LINES)}else{switch(object.drawMode){case TrianglesDrawMode:renderer.setMode(_gl.TRIANGLES);break;case TriangleStripDrawMode:renderer.setMode(_gl.TRIANGLE_STRIP);break;case TriangleFanDrawMode:renderer.setMode(_gl.TRIANGLE_FAN);break;}}}else if(object.isLine){var lineWidth=material.linewidth;if(lineWidth===void 0)lineWidth=1;state.setLineWidth(lineWidth*getTargetPixelRatio());if(object.isLineSegments){renderer.setMode(_gl.LINES)}else if(object.isLineLoop){renderer.setMode(_gl.LINE_LOOP)}else{renderer.setMode(_gl.LINE_STRIP)}}else if(object.isPoints){renderer.setMode(_gl.POINTS)}else if(object.isSprite){renderer.setMode(_gl.TRIANGLES)}if(geometry&&geometry.isInstancedBufferGeometry){if(0<geometry.maxInstancedCount){renderer.renderInstances(geometry,drawStart,drawCount)}}else{renderer.render(drawStart,drawCount)}};function setupVertexAttributes(material,program,geometry){if(geometry&&geometry.isInstancedBufferGeometry&!capabilities.isWebGL2){if(null===extensions.get("ANGLE_instanced_arrays")){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}}state.initAttributes();var geometryAttributes=geometry.attributes,programAttributes=program.getAttributes(),materialDefaultAttributeValues=material.defaultAttributeValues;for(var name in programAttributes){var programAttribute=programAttributes[name];if(0<=programAttribute){var geometryAttribute=geometryAttributes[name];if(geometryAttribute!==void 0){var normalized=geometryAttribute.normalized,size=geometryAttribute.itemSize,attribute=attributes.get(geometryAttribute);if(attribute===void 0)continue;var buffer=attribute.buffer,type=attribute.type,bytesPerElement=attribute.bytesPerElement;if(geometryAttribute.isInterleavedBufferAttribute){var data=geometryAttribute.data,stride=data.stride,offset=geometryAttribute.offset;if(data&&data.isInstancedInterleavedBuffer){state.enableAttributeAndDivisor(programAttribute,data.meshPerAttribute);if(geometry.maxInstancedCount===void 0){geometry.maxInstancedCount=data.meshPerAttribute*data.count}}else{state.enableAttribute(programAttribute)}_gl.bindBuffer(_gl.ARRAY_BUFFER,buffer);_gl.vertexAttribPointer(programAttribute,size,type,normalized,stride*bytesPerElement,offset*bytesPerElement)}else{if(geometryAttribute.isInstancedBufferAttribute){state.enableAttributeAndDivisor(programAttribute,geometryAttribute.meshPerAttribute);if(geometry.maxInstancedCount===void 0){geometry.maxInstancedCount=geometryAttribute.meshPerAttribute*geometryAttribute.count}}else{state.enableAttribute(programAttribute)}_gl.bindBuffer(_gl.ARRAY_BUFFER,buffer);_gl.vertexAttribPointer(programAttribute,size,type,normalized,0,0)}}else if(materialDefaultAttributeValues!==void 0){var value=materialDefaultAttributeValues[name];if(value!==void 0){switch(value.length){case 2:_gl.vertexAttrib2fv(programAttribute,value);break;case 3:_gl.vertexAttrib3fv(programAttribute,value);break;case 4:_gl.vertexAttrib4fv(programAttribute,value);break;default:_gl.vertexAttrib1fv(programAttribute,value);}}}}}state.disableUnusedAttributes()}this.compile=function(scene,camera){currentRenderState=renderStates.get(scene,camera);currentRenderState.init();scene.traverse(function(object){if(object.isLight){currentRenderState.pushLight(object);if(object.castShadow){currentRenderState.pushShadow(object)}}});currentRenderState.setupLights(camera);scene.traverse(function(object){if(object.material){if(Array.isArray(object.material)){for(var i=0;i<object.material.length;i++){initMaterial(object.material[i],scene.fog,object)}}else{initMaterial(object.material,scene.fog,object)}}})};var onAnimationFrameCallback=null;function onAnimationFrame(time){if(vr.isPresenting())return;if(onAnimationFrameCallback)onAnimationFrameCallback(time)}var animation=new WebGLAnimation;animation.setAnimationLoop(onAnimationFrame);if("undefined"!==typeof window)animation.setContext(window);this.setAnimationLoop=function(callback){onAnimationFrameCallback=callback;vr.setAnimationLoop(callback);animation.start()};this.render=function(scene,camera,renderTarget,forceClear){if(!(camera&&camera.isCamera)){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_isContextLost)return;_currentGeometryProgram.geometry=null;_currentGeometryProgram.program=null;_currentGeometryProgram.wireframe=!1;_currentMaterialId=-1;_currentCamera=null;if(!0===scene.autoUpdate)scene.updateMatrixWorld();if(null===camera.parent)camera.updateMatrixWorld();if(vr.enabled){camera=vr.getCamera(camera)}currentRenderState=renderStates.get(scene,camera);currentRenderState.init();scene.onBeforeRender(_this,scene,camera,renderTarget);_projScreenMatrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);_frustum.setFromMatrix(_projScreenMatrix);_localClippingEnabled=this.localClippingEnabled;_clippingEnabled=_clipping.init(this.clippingPlanes,_localClippingEnabled,camera);currentRenderList=renderLists.get(scene,camera);currentRenderList.init();projectObject(scene,camera,0,_this.sortObjects);if(!0===_this.sortObjects){currentRenderList.sort()}if(_clippingEnabled)_clipping.beginShadows();var shadowsArray=currentRenderState.state.shadowsArray;shadowMap.render(shadowsArray,scene,camera);currentRenderState.setupLights(camera);if(_clippingEnabled)_clipping.endShadows();if(this.info.autoReset)this.info.reset();if(renderTarget===void 0){renderTarget=null}this.setRenderTarget(renderTarget);background.render(currentRenderList,scene,camera,forceClear);var opaqueObjects=currentRenderList.opaque,transparentObjects=currentRenderList.transparent;if(scene.overrideMaterial){var overrideMaterial=scene.overrideMaterial;if(opaqueObjects.length)renderObjects(opaqueObjects,scene,camera,overrideMaterial);if(transparentObjects.length)renderObjects(transparentObjects,scene,camera,overrideMaterial)}else{if(opaqueObjects.length)renderObjects(opaqueObjects,scene,camera);if(transparentObjects.length)renderObjects(transparentObjects,scene,camera)}if(renderTarget){textures.updateRenderTargetMipmap(renderTarget);textures.updateMultisampleRenderTarget(renderTarget)}state.buffers.depth.setTest(!0);state.buffers.depth.setMask(!0);state.buffers.color.setMask(!0);state.setPolygonOffset(!1);scene.onAfterRender(_this,scene,camera);if(vr.enabled){vr.submitFrame()}currentRenderList=null;currentRenderState=null};function projectObject(object,camera,groupOrder,sortObjects){if(!1===object.visible)return;var visible=object.layers.test(camera.layers);if(visible){if(object.isGroup){groupOrder=object.renderOrder}else if(object.isLight){currentRenderState.pushLight(object);if(object.castShadow){currentRenderState.pushShadow(object)}}else if(object.isSprite){if(!object.frustumCulled||_frustum.intersectsSprite(object)){if(sortObjects){_vector3.setFromMatrixPosition(object.matrixWorld).applyMatrix4(_projScreenMatrix)}var geometry=objects.update(object),material=object.material;currentRenderList.push(object,geometry,material,groupOrder,_vector3.z,null)}}else if(object.isImmediateRenderObject){if(sortObjects){_vector3.setFromMatrixPosition(object.matrixWorld).applyMatrix4(_projScreenMatrix)}currentRenderList.push(object,null,object.material,groupOrder,_vector3.z,null)}else if(object.isMesh||object.isLine||object.isPoints){if(object.isSkinnedMesh){object.skeleton.update()}if(!object.frustumCulled||_frustum.intersectsObject(object)){if(sortObjects){_vector3.setFromMatrixPosition(object.matrixWorld).applyMatrix4(_projScreenMatrix)}var geometry=objects.update(object),material=object.material;if(Array.isArray(material)){for(var groups=geometry.groups,i=0,l=groups.length;i<l;i++){var group=groups[i],groupMaterial=material[group.materialIndex];if(groupMaterial&&groupMaterial.visible){currentRenderList.push(object,geometry,groupMaterial,groupOrder,_vector3.z,group)}}}else if(material.visible){currentRenderList.push(object,geometry,material,groupOrder,_vector3.z,null)}}}}for(var children=object.children,i=0,l=children.length;i<l;i++){projectObject(children[i],camera,groupOrder,sortObjects)}}function renderObjects(renderList,scene,camera,overrideMaterial){for(var i=0,l=renderList.length;i<l;i++){var renderItem=renderList[i],object=renderItem.object,geometry=renderItem.geometry,material=overrideMaterial===void 0?renderItem.material:overrideMaterial,group=renderItem.group;if(camera.isArrayCamera){_currentArrayCamera=camera;for(var cameras=camera.cameras,j=0,jl=cameras.length,camera2;j<jl;j++){camera2=cameras[j];if(object.layers.test(camera2.layers)){if("viewport"in camera2){state.viewport(_currentViewport.copy(camera2.viewport))}else{var bounds=camera2.bounds,x=bounds.x*_width,y=bounds.y*_height,width=bounds.z*_width,height=bounds.w*_height;state.viewport(_currentViewport.set(x,y,width,height).multiplyScalar(_pixelRatio))}currentRenderState.setupLights(camera2);renderObject(object,scene,camera2,geometry,material,group)}}}else{_currentArrayCamera=null;renderObject(object,scene,camera,geometry,material,group)}}}function renderObject(object,scene,camera,geometry,material,group){object.onBeforeRender(_this,scene,camera,geometry,material,group);currentRenderState=renderStates.get(scene,_currentArrayCamera||camera);object.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse,object.matrixWorld);object.normalMatrix.getNormalMatrix(object.modelViewMatrix);if(object.isImmediateRenderObject){state.setMaterial(material);var program=setProgram(camera,scene.fog,material,object);_currentGeometryProgram.geometry=null;_currentGeometryProgram.program=null;_currentGeometryProgram.wireframe=!1;renderObjectImmediate(object,program)}else{_this.renderBufferDirect(camera,scene.fog,geometry,material,object,group)}object.onAfterRender(_this,scene,camera,geometry,material,group);currentRenderState=renderStates.get(scene,_currentArrayCamera||camera)}function initMaterial(material,fog,object){var materialProperties=properties.get(material),lights=currentRenderState.state.lights,shadowsArray=currentRenderState.state.shadowsArray,lightsHash=materialProperties.lightsHash,lightsStateHash=lights.state.hash,parameters=programCache.getParameters(material,lights.state,shadowsArray,fog,_clipping.numPlanes,_clipping.numIntersection,object),code=programCache.getProgramCode(material,parameters),program=materialProperties.program,programChange=!0;if(program===void 0){material.addEventListener("dispose",onMaterialDispose)}else if(program.code!==code){releaseMaterialProgramReference(material)}else if(lightsHash.stateID!==lightsStateHash.stateID||lightsHash.directionalLength!==lightsStateHash.directionalLength||lightsHash.pointLength!==lightsStateHash.pointLength||lightsHash.spotLength!==lightsStateHash.spotLength||lightsHash.rectAreaLength!==lightsStateHash.rectAreaLength||lightsHash.hemiLength!==lightsStateHash.hemiLength||lightsHash.shadowsLength!==lightsStateHash.shadowsLength){lightsHash.stateID=lightsStateHash.stateID;lightsHash.directionalLength=lightsStateHash.directionalLength;lightsHash.pointLength=lightsStateHash.pointLength;lightsHash.spotLength=lightsStateHash.spotLength;lightsHash.rectAreaLength=lightsStateHash.rectAreaLength;lightsHash.hemiLength=lightsStateHash.hemiLength;lightsHash.shadowsLength=lightsStateHash.shadowsLength;programChange=!1}else if(parameters.shaderID!==void 0){return}else{programChange=!1}if(programChange){if(parameters.shaderID){var shader=ShaderLib[parameters.shaderID];materialProperties.shader={name:material.type,uniforms:cloneUniforms(shader.uniforms),vertexShader:shader.vertexShader,fragmentShader:shader.fragmentShader}}else{materialProperties.shader={name:material.type,uniforms:material.uniforms,vertexShader:material.vertexShader,fragmentShader:material.fragmentShader}}material.onBeforeCompile(materialProperties.shader,_this);code=programCache.getProgramCode(material,parameters);program=programCache.acquireProgram(material,materialProperties.shader,parameters,code);materialProperties.program=program;material.program=program}var programAttributes=program.getAttributes();if(material.morphTargets){material.numSupportedMorphTargets=0;for(var i=0;i<_this.maxMorphTargets;i++){if(0<=programAttributes["morphTarget"+i]){material.numSupportedMorphTargets++}}}if(material.morphNormals){material.numSupportedMorphNormals=0;for(var i=0;i<_this.maxMorphNormals;i++){if(0<=programAttributes["morphNormal"+i]){material.numSupportedMorphNormals++}}}var uniforms=materialProperties.shader.uniforms;if(!material.isShaderMaterial&&!material.isRawShaderMaterial||!0===material.clipping){materialProperties.numClippingPlanes=_clipping.numPlanes;materialProperties.numIntersection=_clipping.numIntersection;uniforms.clippingPlanes=_clipping.uniform}materialProperties.fog=fog;if(lightsHash===void 0){materialProperties.lightsHash=lightsHash={}}lightsHash.stateID=lightsStateHash.stateID;lightsHash.directionalLength=lightsStateHash.directionalLength;lightsHash.pointLength=lightsStateHash.pointLength;lightsHash.spotLength=lightsStateHash.spotLength;lightsHash.rectAreaLength=lightsStateHash.rectAreaLength;lightsHash.hemiLength=lightsStateHash.hemiLength;lightsHash.shadowsLength=lightsStateHash.shadowsLength;if(material.lights){uniforms.ambientLightColor.value=lights.state.ambient;uniforms.directionalLights.value=lights.state.directional;uniforms.spotLights.value=lights.state.spot;uniforms.rectAreaLights.value=lights.state.rectArea;uniforms.pointLights.value=lights.state.point;uniforms.hemisphereLights.value=lights.state.hemi;uniforms.directionalShadowMap.value=lights.state.directionalShadowMap;uniforms.directionalShadowMatrix.value=lights.state.directionalShadowMatrix;uniforms.spotShadowMap.value=lights.state.spotShadowMap;uniforms.spotShadowMatrix.value=lights.state.spotShadowMatrix;uniforms.pointShadowMap.value=lights.state.pointShadowMap;uniforms.pointShadowMatrix.value=lights.state.pointShadowMatrix}var progUniforms=materialProperties.program.getUniforms(),uniformsList=WebGLUniforms.seqWithValue(progUniforms.seq,uniforms);materialProperties.uniformsList=uniformsList}function setProgram(camera,fog,material,object){_usedTextureUnits=0;var materialProperties=properties.get(material),lights=currentRenderState.state.lights,lightsHash=materialProperties.lightsHash,lightsStateHash=lights.state.hash;if(_clippingEnabled){if(_localClippingEnabled||camera!==_currentCamera){var useCache=camera===_currentCamera&&material.id===_currentMaterialId;_clipping.setState(material.clippingPlanes,material.clipIntersection,material.clipShadows,camera,materialProperties,useCache)}}if(!1===material.needsUpdate){if(materialProperties.program===void 0){material.needsUpdate=!0}else if(material.fog&&materialProperties.fog!==fog){material.needsUpdate=!0}else if(material.lights&&(lightsHash.stateID!==lightsStateHash.stateID||lightsHash.directionalLength!==lightsStateHash.directionalLength||lightsHash.pointLength!==lightsStateHash.pointLength||lightsHash.spotLength!==lightsStateHash.spotLength||lightsHash.rectAreaLength!==lightsStateHash.rectAreaLength||lightsHash.hemiLength!==lightsStateHash.hemiLength||lightsHash.shadowsLength!==lightsStateHash.shadowsLength)){material.needsUpdate=!0}else if(materialProperties.numClippingPlanes!==void 0&&(materialProperties.numClippingPlanes!==_clipping.numPlanes||materialProperties.numIntersection!==_clipping.numIntersection)){material.needsUpdate=!0}}if(material.needsUpdate){initMaterial(material,fog,object);material.needsUpdate=!1}var refreshProgram=!1,refreshMaterial=!1,refreshLights=!1,program=materialProperties.program,p_uniforms=program.getUniforms(),m_uniforms=materialProperties.shader.uniforms;if(state.useProgram(program.program)){refreshProgram=!0;refreshMaterial=!0;refreshLights=!0}if(material.id!==_currentMaterialId){_currentMaterialId=material.id;refreshMaterial=!0}if(refreshProgram||_currentCamera!==camera){p_uniforms.setValue(_gl,"projectionMatrix",camera.projectionMatrix);if(capabilities.logarithmicDepthBuffer){p_uniforms.setValue(_gl,"logDepthBufFC",2/(_Mathlog(camera.far+1)/_MathLN))}if(_currentCamera!==camera){_currentCamera=camera;refreshMaterial=!0;refreshLights=!0}if(material.isShaderMaterial||material.isMeshPhongMaterial||material.isMeshStandardMaterial||material.envMap){var uCamPos=p_uniforms.map.cameraPosition;if(uCamPos!==void 0){uCamPos.setValue(_gl,_vector3.setFromMatrixPosition(camera.matrixWorld))}}if(material.isMeshPhongMaterial||material.isMeshLambertMaterial||material.isMeshBasicMaterial||material.isMeshStandardMaterial||material.isShaderMaterial||material.skinning){p_uniforms.setValue(_gl,"viewMatrix",camera.matrixWorldInverse)}}if(material.skinning){p_uniforms.setOptional(_gl,object,"bindMatrix");p_uniforms.setOptional(_gl,object,"bindMatrixInverse");var skeleton=object.skeleton;if(skeleton){var bones=skeleton.bones;if(capabilities.floatVertexTextures){if(skeleton.boneTexture===void 0){var size=_Mathsqrt(4*bones.length);size=_Math.ceilPowerOfTwo(size);size=_Mathmax(size,4);var boneMatrices=new Float32Array(4*(size*size));boneMatrices.set(skeleton.boneMatrices);var boneTexture=new DataTexture(boneMatrices,size,size,RGBAFormat,FloatType);boneTexture.needsUpdate=!0;skeleton.boneMatrices=boneMatrices;skeleton.boneTexture=boneTexture;skeleton.boneTextureSize=size}p_uniforms.setValue(_gl,"boneTexture",skeleton.boneTexture);p_uniforms.setValue(_gl,"boneTextureSize",skeleton.boneTextureSize)}else{p_uniforms.setOptional(_gl,skeleton,"boneMatrices")}}}if(refreshMaterial){p_uniforms.setValue(_gl,"toneMappingExposure",_this.toneMappingExposure);p_uniforms.setValue(_gl,"toneMappingWhitePoint",_this.toneMappingWhitePoint);if(material.lights){markUniformsLightsNeedsUpdate(m_uniforms,refreshLights)}if(fog&&material.fog){refreshUniformsFog(m_uniforms,fog)}if(material.isMeshBasicMaterial){refreshUniformsCommon(m_uniforms,material)}else if(material.isMeshLambertMaterial){refreshUniformsCommon(m_uniforms,material);refreshUniformsLambert(m_uniforms,material)}else if(material.isMeshPhongMaterial){refreshUniformsCommon(m_uniforms,material);if(material.isMeshToonMaterial){refreshUniformsToon(m_uniforms,material)}else{refreshUniformsPhong(m_uniforms,material)}}else if(material.isMeshStandardMaterial){refreshUniformsCommon(m_uniforms,material);if(material.isMeshPhysicalMaterial){refreshUniformsPhysical(m_uniforms,material)}else{refreshUniformsStandard(m_uniforms,material)}}else if(material.isMeshMatcapMaterial){refreshUniformsCommon(m_uniforms,material);refreshUniformsMatcap(m_uniforms,material)}else if(material.isMeshDepthMaterial){refreshUniformsCommon(m_uniforms,material);refreshUniformsDepth(m_uniforms,material)}else if(material.isMeshDistanceMaterial){refreshUniformsCommon(m_uniforms,material);refreshUniformsDistance(m_uniforms,material)}else if(material.isMeshNormalMaterial){refreshUniformsCommon(m_uniforms,material);refreshUniformsNormal(m_uniforms,material)}else if(material.isLineBasicMaterial){refreshUniformsLine(m_uniforms,material);if(material.isLineDashedMaterial){refreshUniformsDash(m_uniforms,material)}}else if(material.isPointsMaterial){refreshUniformsPoints(m_uniforms,material)}else if(material.isSpriteMaterial){refreshUniformsSprites(m_uniforms,material)}else if(material.isShadowMaterial){m_uniforms.color.value=material.color;m_uniforms.opacity.value=material.opacity}if(m_uniforms.ltc_1!==void 0)m_uniforms.ltc_1.value=UniformsLib.LTC_1;if(m_uniforms.ltc_2!==void 0)m_uniforms.ltc_2.value=UniformsLib.LTC_2;WebGLUniforms.upload(_gl,materialProperties.uniformsList,m_uniforms,_this)}if(material.isShaderMaterial&&!0===material.uniformsNeedUpdate){WebGLUniforms.upload(_gl,materialProperties.uniformsList,m_uniforms,_this);material.uniformsNeedUpdate=!1}if(material.isSpriteMaterial){p_uniforms.setValue(_gl,"center",object.center)}p_uniforms.setValue(_gl,"modelViewMatrix",object.modelViewMatrix);p_uniforms.setValue(_gl,"normalMatrix",object.normalMatrix);p_uniforms.setValue(_gl,"modelMatrix",object.matrixWorld);return program}function refreshUniformsCommon(uniforms,material){uniforms.opacity.value=material.opacity;if(material.color){uniforms.diffuse.value=material.color}if(material.emissive){uniforms.emissive.value.copy(material.emissive).multiplyScalar(material.emissiveIntensity)}if(material.map){uniforms.map.value=material.map}if(material.alphaMap){uniforms.alphaMap.value=material.alphaMap}if(material.specularMap){uniforms.specularMap.value=material.specularMap}if(material.envMap){uniforms.envMap.value=material.envMap;uniforms.flipEnvMap.value=material.envMap.isCubeTexture?-1:1;uniforms.reflectivity.value=material.reflectivity;uniforms.refractionRatio.value=material.refractionRatio;uniforms.maxMipLevel.value=properties.get(material.envMap).__maxMipLevel}if(material.lightMap){uniforms.lightMap.value=material.lightMap;uniforms.lightMapIntensity.value=material.lightMapIntensity}if(material.aoMap){uniforms.aoMap.value=material.aoMap;uniforms.aoMapIntensity.value=material.aoMapIntensity}var uvScaleMap;if(material.map){uvScaleMap=material.map}else if(material.specularMap){uvScaleMap=material.specularMap}else if(material.displacementMap){uvScaleMap=material.displacementMap}else if(material.normalMap){uvScaleMap=material.normalMap}else if(material.bumpMap){uvScaleMap=material.bumpMap}else if(material.roughnessMap){uvScaleMap=material.roughnessMap}else if(material.metalnessMap){uvScaleMap=material.metalnessMap}else if(material.alphaMap){uvScaleMap=material.alphaMap}else if(material.emissiveMap){uvScaleMap=material.emissiveMap}if(uvScaleMap!==void 0){if(uvScaleMap.isWebGLRenderTarget){uvScaleMap=uvScaleMap.texture}if(!0===uvScaleMap.matrixAutoUpdate){uvScaleMap.updateMatrix()}uniforms.uvTransform.value.copy(uvScaleMap.matrix)}}function refreshUniformsLine(uniforms,material){uniforms.diffuse.value=material.color;uniforms.opacity.value=material.opacity}function refreshUniformsDash(uniforms,material){uniforms.dashSize.value=material.dashSize;uniforms.totalSize.value=material.dashSize+material.gapSize;uniforms.scale.value=material.scale}function refreshUniformsPoints(uniforms,material){uniforms.diffuse.value=material.color;uniforms.opacity.value=material.opacity;uniforms.size.value=material.size*_pixelRatio;uniforms.scale.value=.5*_height;uniforms.map.value=material.map;if(null!==material.map){if(!0===material.map.matrixAutoUpdate){material.map.updateMatrix()}uniforms.uvTransform.value.copy(material.map.matrix)}}function refreshUniformsSprites(uniforms,material){uniforms.diffuse.value=material.color;uniforms.opacity.value=material.opacity;uniforms.rotation.value=material.rotation;uniforms.map.value=material.map;if(null!==material.map){if(!0===material.map.matrixAutoUpdate){material.map.updateMatrix()}uniforms.uvTransform.value.copy(material.map.matrix)}}function refreshUniformsFog(uniforms,fog){uniforms.fogColor.value=fog.color;if(fog.isFog){uniforms.fogNear.value=fog.near;uniforms.fogFar.value=fog.far}else if(fog.isFogExp2){uniforms.fogDensity.value=fog.density}}function refreshUniformsLambert(uniforms,material){if(material.emissiveMap){uniforms.emissiveMap.value=material.emissiveMap}}function refreshUniformsPhong(uniforms,material){uniforms.specular.value=material.specular;uniforms.shininess.value=_Mathmax(material.shininess,1e-4);if(material.emissiveMap){uniforms.emissiveMap.value=material.emissiveMap}if(material.bumpMap){uniforms.bumpMap.value=material.bumpMap;uniforms.bumpScale.value=material.bumpScale;if(material.side===BackSide)uniforms.bumpScale.value*=-1}if(material.normalMap){uniforms.normalMap.value=material.normalMap;uniforms.normalScale.value.copy(material.normalScale);if(material.side===BackSide)uniforms.normalScale.value.negate()}if(material.displacementMap){uniforms.displacementMap.value=material.displacementMap;uniforms.displacementScale.value=material.displacementScale;uniforms.displacementBias.value=material.displacementBias}}function refreshUniformsToon(uniforms,material){refreshUniformsPhong(uniforms,material);if(material.gradientMap){uniforms.gradientMap.value=material.gradientMap}}function refreshUniformsStandard(uniforms,material){uniforms.roughness.value=material.roughness;uniforms.metalness.value=material.metalness;if(material.roughnessMap){uniforms.roughnessMap.value=material.roughnessMap}if(material.metalnessMap){uniforms.metalnessMap.value=material.metalnessMap}if(material.emissiveMap){uniforms.emissiveMap.value=material.emissiveMap}if(material.bumpMap){uniforms.bumpMap.value=material.bumpMap;uniforms.bumpScale.value=material.bumpScale;if(material.side===BackSide)uniforms.bumpScale.value*=-1}if(material.normalMap){uniforms.normalMap.value=material.normalMap;uniforms.normalScale.value.copy(material.normalScale);if(material.side===BackSide)uniforms.normalScale.value.negate()}if(material.displacementMap){uniforms.displacementMap.value=material.displacementMap;uniforms.displacementScale.value=material.displacementScale;uniforms.displacementBias.value=material.displacementBias}if(material.envMap){uniforms.envMapIntensity.value=material.envMapIntensity}}function refreshUniformsPhysical(uniforms,material){refreshUniformsStandard(uniforms,material);uniforms.reflectivity.value=material.reflectivity;uniforms.clearCoat.value=material.clearCoat;uniforms.clearCoatRoughness.value=material.clearCoatRoughness}function refreshUniformsMatcap(uniforms,material){if(material.matcap){uniforms.matcap.value=material.matcap}if(material.bumpMap){uniforms.bumpMap.value=material.bumpMap;uniforms.bumpScale.value=material.bumpScale;if(material.side===BackSide)uniforms.bumpScale.value*=-1}if(material.normalMap){uniforms.normalMap.value=material.normalMap;uniforms.normalScale.value.copy(material.normalScale);if(material.side===BackSide)uniforms.normalScale.value.negate()}if(material.displacementMap){uniforms.displacementMap.value=material.displacementMap;uniforms.displacementScale.value=material.displacementScale;uniforms.displacementBias.value=material.displacementBias}}function refreshUniformsDepth(uniforms,material){if(material.displacementMap){uniforms.displacementMap.value=material.displacementMap;uniforms.displacementScale.value=material.displacementScale;uniforms.displacementBias.value=material.displacementBias}}function refreshUniformsDistance(uniforms,material){if(material.displacementMap){uniforms.displacementMap.value=material.displacementMap;uniforms.displacementScale.value=material.displacementScale;uniforms.displacementBias.value=material.displacementBias}uniforms.referencePosition.value.copy(material.referencePosition);uniforms.nearDistance.value=material.nearDistance;uniforms.farDistance.value=material.farDistance}function refreshUniformsNormal(uniforms,material){if(material.bumpMap){uniforms.bumpMap.value=material.bumpMap;uniforms.bumpScale.value=material.bumpScale;if(material.side===BackSide)uniforms.bumpScale.value*=-1}if(material.normalMap){uniforms.normalMap.value=material.normalMap;uniforms.normalScale.value.copy(material.normalScale);if(material.side===BackSide)uniforms.normalScale.value.negate()}if(material.displacementMap){uniforms.displacementMap.value=material.displacementMap;uniforms.displacementScale.value=material.displacementScale;uniforms.displacementBias.value=material.displacementBias}}function markUniformsLightsNeedsUpdate(uniforms,value){uniforms.ambientLightColor.needsUpdate=value;uniforms.directionalLights.needsUpdate=value;uniforms.pointLights.needsUpdate=value;uniforms.spotLights.needsUpdate=value;uniforms.rectAreaLights.needsUpdate=value;uniforms.hemisphereLights.needsUpdate=value}function allocTextureUnit(){var textureUnit=_usedTextureUnits;if(textureUnit>=capabilities.maxTextures){console.warn("THREE.WebGLRenderer: Trying to use "+textureUnit+" texture units while this GPU supports only "+capabilities.maxTextures)}_usedTextureUnits+=1;return textureUnit}this.allocTextureUnit=allocTextureUnit;this.setTexture2D=function(){var warned=!1;return function setTexture2D(texture,slot){if(texture&&texture.isWebGLRenderTarget){if(!warned){console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead.");warned=!0}texture=texture.texture}textures.setTexture2D(texture,slot)}}();this.setTexture3D=function(){return function setTexture3D(texture,slot){textures.setTexture3D(texture,slot)}}();this.setTexture=function(){var warned=!1;return function setTexture(texture,slot){if(!warned){console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead.");warned=!0}textures.setTexture2D(texture,slot)}}();this.setTextureCube=function(){var warned=!1;return function setTextureCube(texture,slot){if(texture&&texture.isWebGLRenderTargetCube){if(!warned){console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead.");warned=!0}texture=texture.texture}if(texture&&texture.isCubeTexture||Array.isArray(texture.image)&&6===texture.image.length){textures.setTextureCube(texture,slot)}else{textures.setTextureCubeDynamic(texture,slot)}}}();this.setFramebuffer=function(value){_framebuffer=value};this.getRenderTarget=function(){return _currentRenderTarget};this.setRenderTarget=function(renderTarget){_currentRenderTarget=renderTarget;if(renderTarget&&properties.get(renderTarget).__webglFramebuffer===void 0){textures.setupRenderTarget(renderTarget)}var framebuffer=_framebuffer,isCube=!1;if(renderTarget){var __webglFramebuffer=properties.get(renderTarget).__webglFramebuffer;if(renderTarget.isWebGLRenderTargetCube){framebuffer=__webglFramebuffer[renderTarget.activeCubeFace];isCube=!0}else if(renderTarget.isWebGLMultisampleRenderTarget){framebuffer=properties.get(renderTarget).__webglMultisampledFramebuffer}else{framebuffer=__webglFramebuffer}_currentViewport.copy(renderTarget.viewport);_currentScissor.copy(renderTarget.scissor);_currentScissorTest=renderTarget.scissorTest}else{_currentViewport.copy(_viewport).multiplyScalar(_pixelRatio);_currentScissor.copy(_scissor).multiplyScalar(_pixelRatio);_currentScissorTest=_scissorTest}if(_currentFramebuffer!==framebuffer){_gl.bindFramebuffer(_gl.FRAMEBUFFER,framebuffer);_currentFramebuffer=framebuffer}state.viewport(_currentViewport);state.scissor(_currentScissor);state.setScissorTest(_currentScissorTest);if(isCube){var textureProperties=properties.get(renderTarget.texture);_gl.framebufferTexture2D(_gl.FRAMEBUFFER,_gl.COLOR_ATTACHMENT0,_gl.TEXTURE_CUBE_MAP_POSITIVE_X+renderTarget.activeCubeFace,textureProperties.__webglTexture,renderTarget.activeMipMapLevel)}};this.readRenderTargetPixels=function(renderTarget,x,y,width,height,buffer){if(!(renderTarget&&renderTarget.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}var framebuffer=properties.get(renderTarget).__webglFramebuffer;if(framebuffer){var restore=!1;if(framebuffer!==_currentFramebuffer){_gl.bindFramebuffer(_gl.FRAMEBUFFER,framebuffer);restore=!0}try{var texture=renderTarget.texture,textureFormat=texture.format,textureType=texture.type;if(textureFormat!==RGBAFormat&&utils.convert(textureFormat)!==_gl.getParameter(_gl.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(textureType!==UnsignedByteType&&utils.convert(textureType)!==_gl.getParameter(_gl.IMPLEMENTATION_COLOR_READ_TYPE)&&!(textureType===FloatType&&(capabilities.isWebGL2||extensions.get("OES_texture_float")||extensions.get("WEBGL_color_buffer_float")))&&!(textureType===HalfFloatType&&(capabilities.isWebGL2?extensions.get("EXT_color_buffer_float"):extensions.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(_gl.checkFramebufferStatus(_gl.FRAMEBUFFER)===_gl.FRAMEBUFFER_COMPLETE){if(0<=x&&x<=renderTarget.width-width&&0<=y&&y<=renderTarget.height-height){_gl.readPixels(x,y,width,height,utils.convert(textureFormat),utils.convert(textureType),buffer)}}else{console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}}finally{if(restore){_gl.bindFramebuffer(_gl.FRAMEBUFFER,_currentFramebuffer)}}}};this.copyFramebufferToTexture=function(position,texture,level){var width=texture.image.width,height=texture.image.height,glFormat=utils.convert(texture.format);this.setTexture2D(texture,0);_gl.copyTexImage2D(_gl.TEXTURE_2D,level||0,glFormat,position.x,position.y,width,height,0)};this.copyTextureToTexture=function(position,srcTexture,dstTexture,level){var width=srcTexture.image.width,height=srcTexture.image.height,glFormat=utils.convert(dstTexture.format),glType=utils.convert(dstTexture.type);this.setTexture2D(dstTexture,0);if(srcTexture.isDataTexture){_gl.texSubImage2D(_gl.TEXTURE_2D,level||0,position.x,position.y,width,height,glFormat,glType,srcTexture.image.data)}else{_gl.texSubImage2D(_gl.TEXTURE_2D,level||0,position.x,position.y,glFormat,glType,srcTexture.image)}}}var WebGLRenderer$1={WebGLRenderer:WebGLRenderer};_exports.$WebGLRenderer=WebGLRenderer$1;function Scene(){Object3D.call(this);this.type="Scene";this.background=null;this.fog=null;this.overrideMaterial=null;this.autoUpdate=!0}Scene.prototype=Object.assign(Object.create(Object3D.prototype),{constructor:Scene,isScene:!0,copy:function(source,recursive){Object3D.prototype.copy.call(this,source,recursive);if(null!==source.background)this.background=source.background.clone();if(null!==source.fog)this.fog=source.fog.clone();if(null!==source.overrideMaterial)this.overrideMaterial=source.overrideMaterial.clone();this.autoUpdate=source.autoUpdate;this.matrixAutoUpdate=source.matrixAutoUpdate;return this},toJSON:function(meta){var data=Object3D.prototype.toJSON.call(this,meta);if(null!==this.background)data.object.background=this.background.toJSON(meta);if(null!==this.fog)data.object.fog=this.fog.toJSON();return data},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Scene$1={Scene:Scene};_exports.$Scene=Scene$1;class BaseElement extends LitElement{emit(evtType,evtData,shouldBubble=!1){const evt=new CustomEvent(evtType,{detail:evtData,bubbles:shouldBubble,composed:!0});this.dispatchEvent(evt)}}_exports.BaseElement=BaseElement;var baseElement={BaseElement:BaseElement,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions,html:html,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css,LitElement:LitElement};_exports.$baseElement=baseElement;class SimpleMaterial{constructor(){const material=new MeshPhongMaterial({side:DoubleSide});material.color.setHSL(Math.random(),1,.5);return material}}_exports.SimpleMaterial=SimpleMaterial;var SimpleMaterial$1={SimpleMaterial:SimpleMaterial};_exports.$SimpleMaterial=SimpleMaterial$1;class Tube{constructor(material,params={}){const shape=new Shape,path=new Path;shape.absarc(0,0,2,0,2*_MathPI,!1);path.absarc(0,0,1.8,0,2*_MathPI,!0);shape.holes.push(path);const geometry=new ExtrudeBufferGeometry(shape,{depth:params.depth,steps:1,bevelEnabled:!1,curveSegments:64});return new Mesh(geometry,material)}}_exports.Tube=Tube;var Tube$1={Tube:Tube};_exports.$Tube=Tube$1;function OrbitControls(object,domElement){this.object=object;this.domElement=domElement!==void 0?domElement:document;this.enabled=!0;this.target=new Vector3;this.minDistance=0;this.maxDistance=1/0;this.minZoom=0;this.maxZoom=1/0;this.minPolarAngle=0;this.maxPolarAngle=_MathPI;this.minAzimuthAngle=-Infinity;this.maxAzimuthAngle=1/0;this.enableDamping=!1;this.dampingFactor=.25;this.enableZoom=!0;this.zoomSpeed=1;this.enableRotate=!0;this.rotateSpeed=1;this.enablePan=!0;this.panSpeed=1;this.screenSpacePanning=!1;this.keyPanSpeed=7;this.autoRotate=!1;this.autoRotateSpeed=2;this.enableKeys=!0;this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40};this.mouseButtons={LEFT:MOUSE.LEFT,MIDDLE:MOUSE.MIDDLE,RIGHT:MOUSE.RIGHT};this.target0=this.target.clone();this.position0=this.object.position.clone();this.zoom0=this.object.zoom;this.getPolarAngle=function(){return spherical.phi};this.getAzimuthalAngle=function(){return spherical.theta};this.saveState=function(){scope.target0.copy(scope.target);scope.position0.copy(scope.object.position);scope.zoom0=scope.object.zoom};this.reset=function(){scope.target.copy(scope.target0);scope.object.position.copy(scope.position0);scope.object.zoom=scope.zoom0;scope.object.updateProjectionMatrix();scope.dispatchEvent(changeEvent);scope.update();state=STATE.NONE};this.update=function(){var offset=new Vector3,quat=new Quaternion().setFromUnitVectors(object.up,new Vector3(0,1,0)),quatInverse=quat.clone().inverse(),lastPosition=new Vector3,lastQuaternion=new Quaternion;return function update(){var position=scope.object.position;offset.copy(position).sub(scope.target);offset.applyQuaternion(quat);spherical.setFromVector3(offset);if(scope.autoRotate&&state===STATE.NONE){rotateLeft(getAutoRotationAngle())}spherical.theta+=sphericalDelta.theta;spherical.phi+=sphericalDelta.phi;spherical.theta=_Mathmax(scope.minAzimuthAngle,_Mathmin(scope.maxAzimuthAngle,spherical.theta));spherical.phi=_Mathmax(scope.minPolarAngle,_Mathmin(scope.maxPolarAngle,spherical.phi));spherical.makeSafe();spherical.radius*=scale;spherical.radius=_Mathmax(scope.minDistance,_Mathmin(scope.maxDistance,spherical.radius));scope.target.add(panOffset);offset.setFromSpherical(spherical);offset.applyQuaternion(quatInverse);position.copy(scope.target).add(offset);scope.object.lookAt(scope.target);if(!0===scope.enableDamping){sphericalDelta.theta*=1-scope.dampingFactor;sphericalDelta.phi*=1-scope.dampingFactor;panOffset.multiplyScalar(1-scope.dampingFactor)}else{sphericalDelta.set(0,0,0);panOffset.set(0,0,0)}scale=1;if(zoomChanged||lastPosition.distanceToSquared(scope.object.position)>EPS||8*(1-lastQuaternion.dot(scope.object.quaternion))>EPS){scope.dispatchEvent(changeEvent);lastPosition.copy(scope.object.position);lastQuaternion.copy(scope.object.quaternion);zoomChanged=!1;return!0}return!1}}();this.dispose=function(){scope.domElement.removeEventListener("contextmenu",onContextMenu,!1);scope.domElement.removeEventListener("mousedown",onMouseDown,!1);scope.domElement.removeEventListener("wheel",onMouseWheel,!1);scope.domElement.removeEventListener("touchstart",onTouchStart,!1);scope.domElement.removeEventListener("touchend",onTouchEnd,!1);scope.domElement.removeEventListener("touchmove",onTouchMove,!1);document.removeEventListener("mousemove",onMouseMove,!1);document.removeEventListener("mouseup",onMouseUp,!1);window.removeEventListener("keydown",onKeyDown,!1)};var scope=this,changeEvent={type:"change"},startEvent={type:"start"},endEvent={type:"end"},STATE={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY_PAN:4},state=STATE.NONE,EPS=1e-6,spherical=new Spherical,sphericalDelta=new Spherical,scale=1,panOffset=new Vector3,zoomChanged=!1,rotateStart=new Vector2,rotateEnd=new Vector2,rotateDelta=new Vector2,panStart=new Vector2,panEnd=new Vector2,panDelta=new Vector2,dollyStart=new Vector2,dollyEnd=new Vector2,dollyDelta=new Vector2;function getAutoRotationAngle(){return 2*_MathPI/60/60*scope.autoRotateSpeed}function getZoomScale(){return _Mathpow(.95,scope.zoomSpeed)}function rotateLeft(angle){sphericalDelta.theta-=angle}function rotateUp(angle){sphericalDelta.phi-=angle}var panLeft=function(){var v=new Vector3;return function panLeft(distance,objectMatrix){v.setFromMatrixColumn(objectMatrix,0);v.multiplyScalar(-distance);panOffset.add(v)}}(),panUp=function(){var v=new Vector3;return function panUp(distance,objectMatrix){if(!0===scope.screenSpacePanning){v.setFromMatrixColumn(objectMatrix,1)}else{v.setFromMatrixColumn(objectMatrix,0);v.crossVectors(scope.object.up,v)}v.multiplyScalar(distance);panOffset.add(v)}}(),pan=function(){var offset=new Vector3;return function pan(deltaX,deltaY){var element=scope.domElement===document?scope.domElement.body:scope.domElement;if(scope.object.isPerspectiveCamera){var position=scope.object.position;offset.copy(position).sub(scope.target);var targetDistance=offset.length();targetDistance*=_Mathtan(scope.object.fov/2*_MathPI/180);panLeft(2*deltaX*targetDistance/element.clientHeight,scope.object.matrix);panUp(2*deltaY*targetDistance/element.clientHeight,scope.object.matrix)}else if(scope.object.isOrthographicCamera){panLeft(deltaX*(scope.object.right-scope.object.left)/scope.object.zoom/element.clientWidth,scope.object.matrix);panUp(deltaY*(scope.object.top-scope.object.bottom)/scope.object.zoom/element.clientHeight,scope.object.matrix)}else{console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");scope.enablePan=!1}}}();function dollyIn(dollyScale){if(scope.object.isPerspectiveCamera){scale/=dollyScale}else if(scope.object.isOrthographicCamera){scope.object.zoom=_Mathmax(scope.minZoom,_Mathmin(scope.maxZoom,scope.object.zoom*dollyScale));scope.object.updateProjectionMatrix();zoomChanged=!0}else{console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");scope.enableZoom=!1}}function dollyOut(dollyScale){if(scope.object.isPerspectiveCamera){scale*=dollyScale}else if(scope.object.isOrthographicCamera){scope.object.zoom=_Mathmax(scope.minZoom,_Mathmin(scope.maxZoom,scope.object.zoom/dollyScale));scope.object.updateProjectionMatrix();zoomChanged=!0}else{console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");scope.enableZoom=!1}}function handleMouseDownRotate(event){rotateStart.set(event.clientX,event.clientY)}function handleMouseDownDolly(event){dollyStart.set(event.clientX,event.clientY)}function handleMouseDownPan(event){panStart.set(event.clientX,event.clientY)}function handleMouseMoveRotate(event){rotateEnd.set(event.clientX,event.clientY);rotateDelta.subVectors(rotateEnd,rotateStart).multiplyScalar(scope.rotateSpeed);var element=scope.domElement===document?scope.domElement.body:scope.domElement;rotateLeft(2*_MathPI*rotateDelta.x/element.clientHeight);rotateUp(2*_MathPI*rotateDelta.y/element.clientHeight);rotateStart.copy(rotateEnd);scope.update()}function handleMouseMoveDolly(event){dollyEnd.set(event.clientX,event.clientY);dollyDelta.subVectors(dollyEnd,dollyStart);if(0<dollyDelta.y){dollyIn(getZoomScale())}else if(0>dollyDelta.y){dollyOut(getZoomScale())}dollyStart.copy(dollyEnd);scope.update()}function handleMouseMovePan(event){panEnd.set(event.clientX,event.clientY);panDelta.subVectors(panEnd,panStart).multiplyScalar(scope.panSpeed);pan(panDelta.x,panDelta.y);panStart.copy(panEnd);scope.update()}function handleMouseUp(event){}function handleMouseWheel(event){if(0>event.deltaY){dollyOut(getZoomScale())}else if(0<event.deltaY){dollyIn(getZoomScale())}scope.update()}function handleKeyDown(event){event.preventDefault();switch(event.keyCode){case scope.keys.UP:pan(0,scope.keyPanSpeed);scope.update();break;case scope.keys.BOTTOM:pan(0,-scope.keyPanSpeed);scope.update();break;case scope.keys.LEFT:pan(scope.keyPanSpeed,0);scope.update();break;case scope.keys.RIGHT:pan(-scope.keyPanSpeed,0);scope.update();break;}}function handleTouchStartRotate(event){rotateStart.set(event.touches[0].pageX,event.touches[0].pageY)}function handleTouchStartDollyPan(event){if(scope.enableZoom){var dx=event.touches[0].pageX-event.touches[1].pageX,dy=event.touches[0].pageY-event.touches[1].pageY,distance=_Mathsqrt(dx*dx+dy*dy);dollyStart.set(0,distance)}if(scope.enablePan){var x=.5*(event.touches[0].pageX+event.touches[1].pageX),y=.5*(event.touches[0].pageY+event.touches[1].pageY);panStart.set(x,y)}}function handleTouchMoveRotate(event){rotateEnd.set(event.touches[0].pageX,event.touches[0].pageY);rotateDelta.subVectors(rotateEnd,rotateStart).multiplyScalar(scope.rotateSpeed);var element=scope.domElement===document?scope.domElement.body:scope.domElement;rotateLeft(2*_MathPI*rotateDelta.x/element.clientHeight);rotateUp(2*_MathPI*rotateDelta.y/element.clientHeight);rotateStart.copy(rotateEnd);scope.update()}function handleTouchMoveDollyPan(event){if(scope.enableZoom){var dx=event.touches[0].pageX-event.touches[1].pageX,dy=event.touches[0].pageY-event.touches[1].pageY,distance=_Mathsqrt(dx*dx+dy*dy);dollyEnd.set(0,distance);dollyDelta.set(0,_Mathpow(dollyEnd.y/dollyStart.y,scope.zoomSpeed));dollyIn(dollyDelta.y);dollyStart.copy(dollyEnd)}if(scope.enablePan){var x=.5*(event.touches[0].pageX+event.touches[1].pageX),y=.5*(event.touches[0].pageY+event.touches[1].pageY);panEnd.set(x,y);panDelta.subVectors(panEnd,panStart).multiplyScalar(scope.panSpeed);pan(panDelta.x,panDelta.y);panStart.copy(panEnd)}scope.update()}function handleTouchEnd(event){}function onMouseDown(event){if(!1===scope.enabled)return;event.preventDefault();scope.domElement.focus?scope.domElement.focus():window.focus();switch(event.button){case scope.mouseButtons.LEFT:if(event.ctrlKey||event.metaKey||event.shiftKey){if(!1===scope.enablePan)return;handleMouseDownPan(event);state=STATE.PAN}else{if(!1===scope.enableRotate)return;handleMouseDownRotate(event);state=STATE.ROTATE}break;case scope.mouseButtons.MIDDLE:if(!1===scope.enableZoom)return;handleMouseDownDolly(event);state=STATE.DOLLY;break;case scope.mouseButtons.RIGHT:if(!1===scope.enablePan)return;handleMouseDownPan(event);state=STATE.PAN;break;}if(state!==STATE.NONE){document.addEventListener("mousemove",onMouseMove,!1);document.addEventListener("mouseup",onMouseUp,!1);scope.dispatchEvent(startEvent)}}function onMouseMove(event){if(!1===scope.enabled)return;event.preventDefault();switch(state){case STATE.ROTATE:if(!1===scope.enableRotate)return;handleMouseMoveRotate(event);break;case STATE.DOLLY:if(!1===scope.enableZoom)return;handleMouseMoveDolly(event);break;case STATE.PAN:if(!1===scope.enablePan)return;handleMouseMovePan(event);break;}}function onMouseUp(event){if(!1===scope.enabled)return;handleMouseUp(event);document.removeEventListener("mousemove",onMouseMove,!1);document.removeEventListener("mouseup",onMouseUp,!1);scope.dispatchEvent(endEvent);state=STATE.NONE}function onMouseWheel(event){if(!1===scope.enabled||!1===scope.enableZoom||state!==STATE.NONE&&state!==STATE.ROTATE)return;event.preventDefault();event.stopPropagation();scope.dispatchEvent(startEvent);handleMouseWheel(event);scope.dispatchEvent(endEvent)}function onKeyDown(event){if(!1===scope.enabled||!1===scope.enableKeys||!1===scope.enablePan)return;handleKeyDown(event)}function onTouchStart(event){if(!1===scope.enabled)return;event.preventDefault();switch(event.touches.length){case 1:if(!1===scope.enableRotate)return;handleTouchStartRotate(event);state=STATE.TOUCH_ROTATE;break;case 2:if(!1===scope.enableZoom&&!1===scope.enablePan)return;handleTouchStartDollyPan(event);state=STATE.TOUCH_DOLLY_PAN;break;default:state=STATE.NONE;}if(state!==STATE.NONE){scope.dispatchEvent(startEvent)}}function onTouchMove(event){if(!1===scope.enabled)return;event.preventDefault();event.stopPropagation();switch(event.touches.length){case 1:if(!1===scope.enableRotate)return;if(state!==STATE.TOUCH_ROTATE)return;handleTouchMoveRotate(event);break;case 2:if(!1===scope.enableZoom&&!1===scope.enablePan)return;if(state!==STATE.TOUCH_DOLLY_PAN)return;handleTouchMoveDollyPan(event);break;default:state=STATE.NONE;}}function onTouchEnd(event){if(!1===scope.enabled)return;handleTouchEnd(event);scope.dispatchEvent(endEvent);state=STATE.NONE}function onContextMenu(event){if(!1===scope.enabled)return;event.preventDefault()}scope.domElement.addEventListener("contextmenu",onContextMenu,!1);scope.domElement.addEventListener("mousedown",onMouseDown,!1);scope.domElement.addEventListener("wheel",onMouseWheel,!1);scope.domElement.addEventListener("touchstart",onTouchStart,!1);scope.domElement.addEventListener("touchend",onTouchEnd,!1);scope.domElement.addEventListener("touchmove",onTouchMove,!1);window.addEventListener("keydown",onKeyDown,!1);this.update()}OrbitControls.prototype=Object.create(EventDispatcher.prototype);OrbitControls.prototype.constructor=OrbitControls;Object.defineProperties(OrbitControls.prototype,{center:{get:function(){console.warn("THREE.OrbitControls: .center has been renamed to .target");return this.target}},noZoom:{get:function(){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.");return!this.enableZoom},set:function(value){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.");this.enableZoom=!value}},noRotate:{get:function(){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.");return!this.enableRotate},set:function(value){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.");this.enableRotate=!value}},noPan:{get:function(){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.");return!this.enablePan},set:function(value){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.");this.enablePan=!value}},noKeys:{get:function(){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.");return!this.enableKeys},set:function(value){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.");this.enableKeys=!value}},staticMoving:{get:function(){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.");return!this.enableDamping},set:function(value){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.");this.enableDamping=!value}},dynamicDampingFactor:{get:function(){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.");return this.dampingFactor},set:function(value){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.");this.dampingFactor=value}}});var OrbitControls$1={default:OrbitControls};_exports.$OrbitControls=OrbitControls$1;class ViewPanel extends BaseElement{static get properties(){return{selected:{type:Object}}}constructor(){super();this.objects=[];this.scene=new Scene;this.renderer=new WebGLRenderer;this.camera=new PerspectiveCamera(100,2,.1,1e3);this.light1=new DirectionalLight(16777215,1);this.light2=new DirectionalLight(16777215,1)}firstUpdated(_changedProperties){super.firstUpdated(_changedProperties);this.containerElement=this.shadowRoot.querySelector("#container");this.camera.position.set(20,20,20);this.light1.position.set(-1,2,4);this.light2.position.set(1,-2,-4);this.renderer.setSize(this.containerElement.clientWidth,this.containerElement.clientHeight);this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.enableKeys=!1;this.containerElement.appendChild(this.renderer.domElement);this.controls.update();this.axesHelper=new AxesHelper(20);this.scene.background=new Color(16777215);this.scene.add(this.light1);this.scene.add(this.light2);this.scene.add(this.axesHelper);window.addEventListener("resize",this.handleWindowResize.bind(this),!1);this.containerElement.addEventListener("mousedown",this.handleDocumentMouseDown.bind(this),!1);this.render3d()}addObject(obj){this.objects.push(obj);this.scene.add(obj)}handleWindowResize(){const dom=this.containerElement;this.camera.aspect=dom.clientWidth/dom.clientHeight;this.camera.updateProjectionMatrix();this.renderer.setSize(dom.clientWidth,dom.clientHeight)}handleDocumentMouseDown(event){event.preventDefault();const dom=this.renderer.domElement,mouse=new Vector2,raycaster=new Raycaster;mouse.x=2*((event.clientX-dom.offsetLeft)/dom.width)-1;mouse.y=2*-((event.clientY-dom.offsetTop)/dom.height)+1;raycaster.setFromCamera(mouse,this.camera);const intersects=raycaster.intersectObjects(this.objects,!0);if(0<intersects.length){this.selected=intersects[0].object;this.emit("selected-changed",this.selected);event.preventDefault()}}render3d(){requestAnimationFrame(this.render3d.bind(this));this.controls.update();this.renderer.render(this.scene,this.camera)}clean3d(){this.objects.forEach(obj=>{this.scene.remove(obj)});this.objects=[];this.selected=null;this.emit("objects-changed",this.objects);this.emit("selected-changed",this.selected)}static get styles(){return css`
      :host,
      #container {
        display: flex;
        width: 100%;
        height: 100%;
      }
    `}render(){return html`
      <div id="container"></div>
    `}}_exports.ViewPanel=ViewPanel;customElements.define("view-panel",ViewPanel);var viewPanel={ViewPanel:ViewPanel};_exports.$viewPanel=viewPanel;class ElButton extends BaseElement{static get properties(){return{type:{type:String},label:{type:String},variant:{type:String},disabled:{type:Boolean}}}static get styles(){return css`
      :host {
        display: inline-block;
      }
      
      .el-button {
        position: relative;
        display: inline-flex;
        box-sizing: border-box;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        border-radius: var(--app-border-radius);
        outline: none;
        cursor: pointer;
        height: var(--app-size-height-md);
        font-weight: 600;
        font-size: var(--app-font-size-md);
        padding: 0 12px;
      }
     
      .primary {
        background-color: var(--el-button-primary-background);
        color: var(--el-button-primary-text);      
      }
      
      .primary:hover {
        background-color: var(--el-button-primary-background--hover);
      }
      
      .primary:focus {
        background-color: var(--el-button-primary-background--focus);
        outline: none;
      }
      
      .primary:active {
        background-color: var(--el-button-primary-background--active);
      }
      
      .primary[disabled] {
        background-color: var(--el-button-primary-background--disabled);
        color: var(--el-button-primary-text--disabled);
        pointer-events: none;
      }
      

      .secondary {
        background-color: var(--el-button-secondary-background);
        color: var(--el-button-secondary-text);      
      }
      
      .secondary:hover {
        background-color: var(--el-button-secondary-background--hover);
      }
      
      .secondary:focus {
        background-color: var(--el-button-secondary-background--focus);
        outline: none;
      }
      
      .secondary:active {
        background-color: var(--el-button-secondary-background--active);
      }
      
      .secondary[disabled] {
        background-color: var(--el-button-secondary-background--disabled);
        color: var(--el-button-secondary-text--disabled);
        pointer-events: none;
      }
  `}constructor(){super();this.type="button";this.variant="primary"}render(){const{type,label,variant,disabled}=this;return html`
      <button
        type="${type}"
        class="el-button ${variant}"
        aria-label="${label}"
        ?disabled="${disabled}"
      >
        ${label}
        <slot></slot>
      </button>
    `}}customElements.define("el-button",ElButton);const add=svg`<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>`;_exports.add=add;const save=svg`<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>`;_exports.save=save;var iconset={add:add,save:save};_exports.$iconset=iconset;class ElIcon extends LitElement{static get properties(){return{icon:{type:String},color:{type:String},size:{type:Number}}}static get styles(){return css`
      :host {
        display: inline-flex;
        line-height: 18px;
      }
  `}constructor(){super();this.color="currentColor";this.size="24"}render(){const{icon,color,size}=this;return html`
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="${size}"
        height="${size}"
      >
        <g fill="${color}">
          ${iconset[icon]}
        </g>
      </svg>
    `}}customElements.define("el-icon",ElIcon);class ElTextfield extends BaseElement{static get properties(){return{type:{type:String},label:{type:String},value:{type:String},variant:{type:String},placeholder:{type:String},disabled:{type:Boolean},min:{type:Number},max:{type:Number}}}static get styles(){return css`
      :host {
        display: flex;
        margin-bottom: var(--app-margin-y-md);
      }

      .input-container {
        display: flex;
        align-items: center;
        width: 100%;
      }
        
      label {
        white-space: nowrap;
        margin-right: 16px;
        margin-bottom: 0;
        font-weight: 400;
      }
      
      input {
        font: var(--app-font-family);
        box-sizing: border-box;
        height: 32px;
        padding: 0 12px;
        width: 100%;
        outline: none;
        border: 1px solid #DCDEE1;
        border-radius: 4px;
        color: #1D2734;
        line-height: 1.15;
        margin: 0;
        overflow:visible;
      }
      
      .suffix::slotted(*) {
        margin-left: 12px;
      }
  `}constructor(){super();this.type="text"}render(){const{type,label,value,placeholder,min,max}=this;return html`
      <div class="input-container">
        <label>${label}</label>
        <input
          type="${type}" 
          .value="${value}"
          placeholder="${placeholder}" 
          @input=${e=>this._handleInput(e)} 
          @keypress=${this._handleKeyPress}
          aria-label="${label}"
          min="${min}"
          max="${max}"
        >
      </div>
      <slot class="suffix" name="suffix"></slot>
    `}_handleInput(e){this.value=e.currentTarget.value}_handleKeyPress(e){if(""!==e.target.value){if("Enter"===e.key){this.emit("key-enter",{value:e.target.value})}}}updated(changedProps){if(changedProps.has("value")){this.emit("value-changed",{value:this.value})}}}customElements.define("el-textfield",ElTextfield);class AppEditor extends BaseElement{static get properties(){return{depth:{type:Number},objects:{type:Array},selected:{type:Object}}}constructor(){super();this.objects=[]}firstUpdated(_changedProperties){super.firstUpdated(_changedProperties);this.viewPanel=this.shadowRoot.querySelector("view-panel")}handleDepthChanged(e){this.depth=e.detail.value}handleSelected(e){var _this3=this;return babelHelpers.asyncToGenerator(function*(){_this3.selected=e.detail;if(!_this3.selected)return;try{yield fetch("api/selected",{method:"POST",body:JSON.stringify({index:_this3.objects.indexOf(_this3.selected),depth:_this3.selected.geometry.parameters.options.depth,color:_this3.selected.material.color.getHexString()})})}catch(err){console.error(err)}})()}handleObjects(e){this.objects=e.detail}getNextPosition(){let z=0;if(0<this.objects.length){const prev=this.objects[this.objects.length-1];z=prev.position.z+prev.geometry.parameters.options.depth}return{x:0,y:0,z}}generateName(){return`Труба ${this.objects.length+1}`}addTube(){var _this4=this;return babelHelpers.asyncToGenerator(function*(){if(0>=_this4.depth){return}const material=new SimpleMaterial,tube=new Tube(material,{depth:+_this4.depth}),position=_this4.getNextPosition();tube.name=_this4.generateName();tube.position.set(position.x,position.y,position.z);_this4.depth="";_this4.viewPanel.addObject(tube)})()}save(){var _this5=this;return babelHelpers.asyncToGenerator(function*(){const metadata=[];_this5.objects.forEach((obj,index)=>{metadata.push({index,depth:obj.geometry.parameters.options.depth,color:obj.material.color.getHexString()})});try{yield fetch("api/save",{method:"PUT",body:JSON.stringify(metadata)})}catch(err){console.error(err)}})()}clean(){var _this6=this;return babelHelpers.asyncToGenerator(function*(){_this6.viewPanel.clean3d()})()}static get styles(){return css`
      :host {
        display: flex;
        width: 100%;
        height: 100%;
      }
      el-toolbar {
        width: var(--el-toolbar-width);
      }
      #container {
        display: flex;
        align-self: stretch;
        flex: 1;
      }
      .toolbar {
        display: flex;
        flex-direction: column;
        width: var(--el-toolbar-width);
        min-width: var(--el-toolbar-width);
        background-color: var(--el-toolbar-bg-color);
        padding: var(--app-padding-x-md) 0;
      }
      section {
        padding: 0 var(--app-padding-y-md);
      }
      hr {
        border: 0;
        border-top: 1px solid #DDE1E6;
        margin: 12px 0;
        height: 1px;
      }
    `}render(){return html`
      <div class="toolbar">
        <section>
          <el-button label="Сохранить" @click=${this.save}></el-button>
          <el-button label="Очистить" variant="secondary" @click=${this.clean}></el-button>
        </section>
        <hr>
        <section>
          <h3>Объекты</h3>
          <ul>
            ${this.objects.map(obj=>html`
              <li>${obj.name} (${obj.geometry.parameters.options.depth} пт)</li>
            `)}
          </ul>
          <el-textfield 
            label=""
            placeholder="Длина (пт)"
            type="number" 
            min="1"
            value="${this.depth}" 
            @value-changed=${this.handleDepthChanged}
            @key-enter=${this.addTube}
          >
            <el-button slot="suffix" variant="secondary" @click="${this.addTube}">
              <el-icon icon="add"></el-icon>
            </el-button>
          </el-textfield>
        </section>
         ${this.selected&&html`
            <section>
              <h3>Свойства</h3>
              ${this.selected.name}
              <ul>
                <li>Длина: ${this.selected.geometry.parameters.options.depth} пт</li> 
                <li>Цвет: 0x${this.selected.material.color.getHexString()}</li>
              </ul>
            </section>
          `}
      </div>
      <view-panel 
        .objects="${this.objects}"
        @selected-changed=${this.handleSelected}
        @objects-changed=${this.handleObjects}
      >
      </view-panel>
    `}}customElements.define("app-editor",AppEditor)});