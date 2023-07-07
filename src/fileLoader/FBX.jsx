import React, { useRef , Suspense} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls, CameraControls} from '@react-three/drei';
import {css} from '../../layout/css';
import { 
  MyGizmoHelper, 
  Presentation,  
  MyGrid
} from '../../hooks/useHelper';
import { Menu } from '../../hooks/useMenu';
import loadable from '@loadable/component';

const MySparkles = loadable(() => import('../../particule/Sparkles'));
const MyCloud = loadable(() => import('../../sky/Cloud'));
const MySky = loadable(() => import('../../sky/Sky'));

MySparkles.preload();
MyCloud.preload();
MySky.preload();

const FbxModel = ({filePath,model, scale, position}) => {
  scale = scale || 1;
  position = position || [0,0,0];
  const ref = useRef();
  const fbx = useLoader(FBXLoader, filePath);
  return (
    <Suspense fallback={null}>
      <Presentation >
        <mesh 
          ref={ref} 
          scale={scale} 
          position={position}
        >
          <primitive object={fbx} />
        </mesh>
      </Presentation>
    </Suspense>
  )
};

const FBX = () => {
  
  return (
    <Canvas
      shadows
      width={css.canvas.width}
      height={css.canvas.height}
      style={css.canvas}
      gl={{ alpha: true }}
      styles={{ backgroundColor: 'transparent'}}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
       <Menu />
      <MySparkles />
      <MyGizmoHelper />
      <gridHelper 
        args={[100, 100]}
      />
      <FbxModel 
        filePath="./load/objects/casa-soca.fbx" 
        model="casa-soca" 
        scale={.2}
        position={[0,0,0]}
      />
      <ambientLight 
        intensity={0.5}
        color="white"
        position={[10, 10, 10]}

      />
      <pointLight 
        position={[10, 10, 10]} 
        intensity={0.5}  
      />
      <OrbitControls makeDefault />
      <CameraControls  />
      <MyGrid />
      <MySky />
      <MyCloud />
     
  </Canvas>
  )
};
export default FBX;