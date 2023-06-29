
const Grass = () => {
  return (
    <mesh
      geometry={nodes.Grass.geometry}
      material={nodes.Grass.material}
      position={[0, 0, 0]}
    />
  );
};
const Water = () => {
  return (
    <mesh
      geometry={nodes.Water.geometry}
      material={nodes.Water.material}
      position={[0, 0, 0]}
    />
  );
};
const Fire = () => {
  return (
    <mesh
      geometry={nodes.Fire.geometry}
      material={nodes.Fire.material}
      position={[0, 0, 0]}
    />
  );  
};
const Smoke = () => {
  return (
    <mesh
      geometry={nodes.Smoke.geometry}
      material={nodes.Smoke.material}
      position={[0, 0, 0]}
    />
  );
}
export { Grass, Water, Fire, Smoke };