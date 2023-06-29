import { useMemo, useState } from "react";
import { button, useControls } from "leva";

import Terrain from "./Terrain";

const TerrainManager = ({
  res,
  levs,
  h,
  sca,
  offX,
  offZ
}) => {
  const [seed, setSeed] = useState(Date.now());

  const { resolution, height, levels, scale, offsetX, offsetZ } = useControls({
    generate: button(() => setSeed(Date.now())),
    resolution: { value: res ?? 100, min: 10, max: 500, step: 1 },
    height: { value: h ?? 0.02, min: 0, max: 1 },
    levels: { value: levs ?? 3, min: 1, max: 16, step: 1 },
    scale: { value: sca ?? 1, min: 1, max: 16, step: 1 },
    offsetX: offX ?? 0,
    offsetZ: offZ ?? 0,
  });

  const offset = useMemo(
    () => ({ x: offsetX, z: offsetZ }),
    [offsetX, offsetZ]
  );

  return (
    <Terrain
      seed={seed}
      size={resolution}
      height={height}
      levels={levels}
      scale={scale}
      offset={offset}
    />
  );
};

export default TerrainManager;