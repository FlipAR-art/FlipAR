import React, { useRef , Suspense} from 'react';
import {OrbitControls, Cloud} from '@react-three/drei';

const MyCloud = () => {
  
  return (
    <>
    <Suspense fallback={null}>
      <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} />
      <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
      <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} />
      <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />
      <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.75} />
    </Suspense>
    <OrbitControls enablePan={false} zoomSpeed={0.5} />
  </>
  )
};
export default MyCloud;