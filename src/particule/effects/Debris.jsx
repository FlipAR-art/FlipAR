import { useFrame } from "@react-three/fiber";
import { between, plusMinus, power } from "randomish";
import { Fragment, useRef, useState } from "react";
import { Color, MeshStandardMaterial } from "three";
import { Emitter, MeshParticles, ParticlesMaterial } from "vfx";

// const startColor = new Color("#ffe586");
// const endColor = new Color("#ffa500");

// TODO: import from vfx
export const Delay = ({ seconds, onComplete, children }) => {
  const ready = useDelay(seconds, onComplete);
  return ready ? <>{children}</> : null;
};

export const useDelay = (seconds, onComplete) => {
  const [ready, setReady] = useState(false);
  const timeRemaining = useRef(seconds);

  /*
  Hello! You might be wondering why we don't just use `setTimeout` here. We could do exactly that!
  But we're also preparing for a potential future where the deltatime passed into r3f's useFrame
  hook is scaled to something other than 1.0. Using system-level timeouts would entirely sidestep
  all of that.
  */

  useFrame((_, dt) => {
    if (ready) return;

    timeRemaining.current -= dt;

    if (timeRemaining.current <= 0) {
      onComplete?.();
      setReady(true);
    }
  });

  return ready;
};

// type RepeatProps = { children: ReactNode, times?: number, interval?: number };
export const Repeat = ({ children, times = 1, interval = 1 }) => {
  const [iteration, setIteration] = useState(1);

  return (
    <Fragment key={iteration}>
      {iteration < times && (
        <Delay
          seconds={interval}
          onComplete={() => setIteration(iteration + 1)}
        />
      )}
      {children}
    </Fragment>
  );
};

const startColor = new Color("#ffe586");
const endColor = new Color("#ffa500");

export const FireplaceVFX = () => {
  return (
    <MeshParticles>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <ParticlesMaterial color="#fff" baseMaterial={MeshStandardMaterial} />

      <Repeat times={Infinity} interval={1 / 40}>
        <Emitter
          initialParticles={40}
          setup={(c) => {
            c.position.set(between(-1, 1), 0, between(-1, 1));
            c.velocity.set(0, 1, 0);
            c.acceleration.copy(c.velocity).multiplyScalar(between(1, 1.25));
            c.lifetime = 2.0 * (1 - c.position.lengthSq(c.position.clone()));
            c.colorStart.copy(startColor);
            c.colorEnd.copy(endColor);
            c.alphaEnd = 0.75;
          }}
        />
      </Repeat>
    </MeshParticles>
  );
};

export const Debris = ({ size = 100, count = 500, ...props }) => {
  return (
    <MeshParticles {...props} renderOrder={1}>
      <boxGeometry args={[0.2, 0.2, 0.1]} />

      <ParticlesMaterial
        baseMaterial={MeshStandardMaterial}
        color="#fff"
        depthTest={true}
        depthWrite={false}
        billboard
      />

      <Emitter
        initialParticles={count}
        setup={(c) => {
          c.position.set(plusMinus(size), plusMinus(size), plusMinus(size));
          c.velocity.randomDirection().multiplyScalar(between(0, 1));
          c.colorStart.setScalar(0.2 + power(3) * 2);
          c.lifetime = Infinity;
          c.alphaStart = 0.5;
        }}
      />
    </MeshParticles>
  );
};
