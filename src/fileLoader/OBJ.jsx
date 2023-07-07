import { useRef } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader, Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import {css} from '../../layout/css';
import { MyGizmoHelper } from '../../hooks/useHelper';
import MySparkles from '../../particule/Sparkles';

const ObjectModel = ({filePath, scale, position}) => {
  scale = scale || 1;
  position = position || [0,0,0];
  const ref = useRef();
  const model = useLoader(OBJLoader, filePath);
  return (
    <mesh
      ref={ref}
      scale={scale}
      position={position}
    >
      <primitive object={model} />
    </mesh>
  )
}
const OBJ = () => {
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
    <ObjectModel 
      filePath="./load/objects/casa-soca.obj" 
    />
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <OrbitControls />
    <Sky/>
  </Canvas>
  );
};
export default OBJ;