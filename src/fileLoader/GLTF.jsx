import { useRef , Suspense} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls} from '@react-three/drei';
import {css} from '../layout/css';
import { 
  MyGizmoHelper, 
} from '../hooks/useHelper';


const GLTFModel = ({filePath,model, scale, position}) => {
  scale = scale || .2;
  position = position || [0,0,0];
  const gltf = useLoader(GLTFLoader, filePath);
  const ref = useRef();
  return (
    <Suspense fallback={null}>
        <mesh
          ref={ref}
          scale={scale}
          position={position}
        >
          <primitive object={gltf.scene} />
        </mesh>
    </Suspense>
  )
}
const GLTF = () => {
  return (
    <Canvas
      width={css.canvas.width}
      height={css.canvas.height}
      style={css.canvas}
      gl={{ alpha: true }}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <MyGizmoHelper />
      <GLTFModel 
        filePath="./load/phoenix/scene.gltf" 
        model="phoenix" 
        scale={.8}
        position={0,0,0}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
  </Canvas>
  )
};
export default GLTF;