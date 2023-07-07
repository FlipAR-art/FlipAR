import React, { useRef , Suspense} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
//import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { 
  OrbitControls, 
  Sky 
} from '@react-three/drei';
import {css} from '../../layout/css';
import { MyGizmoHelper } from '../../hooks/useHelper';
import MySparkles from '../../particule/Sparkles';
const JsxObject = () => {
  return (
    <Canvas
      width={css.canvas.width}
      height={css.canvas.height}
      style={css.canvas}
      gl={{ alpha: false }}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <gridHelper 
        args={[100, 100]}
      />
      <MySparkles />
      <MyGizmoHelper />

      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Sky/>
  </Canvas>
  );
};
export default JsxObject;