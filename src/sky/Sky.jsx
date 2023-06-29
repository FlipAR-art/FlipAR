import {Sky, Stars} from '@react-three/drei';

const MySky = (props) => {
  return (
    <>
    <Sky 
      azimuth={0.1} 
      turbidity={10} 
      rayleigh={0.5} 
      inclination={0.6} 
      distance={1000}
      {...props} 
    />
    <Stars 
      radius={100} 
      depth={50} 
      count={5000} 
      factor={4} 
      saturation={0} 
      fade speed={1} 
    />
    </>
  )
};
export default MySky
