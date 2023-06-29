import { useRef } from 'react';
import { 
  Billboard, 
  Text 
} from '@react-three/drei';
import { useThree, useLoader } from '@react-three/fiber';
import billboardTexture from '../assets/textures/concrete.cast-in-place.exposed\ aggregate.coarse.jpg'
const Menu = () => {
  const ref = useRef();
  const meshBasicMaterial = useThree().meshBasicMaterial;
  return (
    <Billboard
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1, 1, 1]}
      position={[0,7,1]}
      args = {[44,30]}
      visible={true}
      follow={true}
      lockX={false}
      lockY={false}
      lockZ={false} // Lock the rotation on the z axis (default=false)
    >
        <meshBasicMaterial 
          attach="material" 
          map={billboardTexture}
          opacity={0.5}
          transparent={false}
        />
      <Text
        color={"black"} 
        fontSize={1}
        position={[0,.8,0]}
      >
        Menu
      </Text>
      <Text
        color={"black"} 
        fontSize={.8}
        position={[0,0,0]}
      >
        Piso 1
      </Text>
      <Text
        color={"black"} 
        fontSize={.7}
        position={[0,-.8,0]}
      >
        Sala 1
      </Text>
      <Text
        color={"black"} 
        fontSize={.7}
        position={[0,-1.6,0]}
      >
        Sala 2
      </Text>
      <Text
        color={"black"} 
        fontSize={.7}
        position={[0,-2.4,0]}
      >
        Sala 3
      </Text>
      <Text
        color={"black"} 
        fontSize={.7}
        position={[0,-3.2,0]}
      >
        Sala 4
      </Text>
      <Text
        color={"black"} 
        fontSize={.7}
        position={[0,-4.0,0]}
      >
        Sala 5
      </Text>
    </Billboard>
  );
};
export { Menu };
