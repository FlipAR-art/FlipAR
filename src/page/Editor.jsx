import {useState, useRef, useEffect} from 'react';
import {
  Canvas
} from '@react-three/fiber';

import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';
import {
  SheetProvider, 
  editable as e, 
  PerspectiveCamera
} from '@theatre/r3f';

import { Perf } from "r3f-perf";

import {
  getProject
} from '@theatre/core';

import demoProjectState from './state.json';

import {css} from '../layout/css';


studio.initialize();
studio.extend(extension);

const Editor = () => {
  const [hovered, setHovered] = useState(false);
  const [project, setProject] = useState(getProject('Casa-Soca', {state: demoProjectState}));
  const [mySheet, setMySheet] = useState(project.sheet('Scene 1'));
  const ref = useRef();
  // sheet is a Sheet created earlier through Poject.sheet
  // project is a Project created earlier through getProject

  // useEffect(() => {
  //   project.project.ready.then(() => project.sequence.play({iterationCount: Infinity, range: [0, 1]}))
  // }, []);
  useEffect(() => {
    // our Theatre.js project sheet, we'll use this later
    // This will create a project called "My Project"
    // or return it if it already exists:
    setProject(getProject('Casa-Soca', {state: demoProjectState}));
    setMySheet(project.sheet('Scene 1'));
    // const cube = mySheet.object('Cube', { position: { x: 0, y: 0 }});
    // const camera = mySheet.object('Camera', { position: { x: 5, y: 5, z: -5 }});
    // const light = mySheet.object('Light', { position: { x: 10, y: 10 , z: 10}});

  }, [project]);

  return (
    <div
      style={css.main}
    >
      <Canvas 
        ref={ref}
        width={css.theatre.width}
        height={css.theatre.height}
        style={css.theatre}
        dpr={window.devicePixelRatio}
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
        gl={{
          alpha: true, 
          preserveDrawingBuffer: true
        }}
        camera={{
          position: [5, 5, -5],
          fov: 75
        }}
      >
        <Perf  
          position="bottom-right"
          antialias={true}
          colorBliend={true}
          style={{
            backgroundColor: 'transparent',
            left: 0,
          }}

        />
        {/* Provide sheet created earlier with `const demoSheet = getProject('Demo Project').sheet('Demo Sheet')` */}
        <SheetProvider sheet={mySheet}>
          <PerspectiveCamera 
            theatreKey="Camera" 
            makeDefault 
            position={[5, 5, -5]} 
            fov={75}
          />
          <ambientLight />
          <e.pointLight 
            theatreKey="Light" 
            position={[10, 10, 10]}
          />
          <e.mesh 
            theatreKey="Cube"
            position={[0, 0, 0]}
            visible="editor"
          >
            <boxGeometry 
              args={[1, 1, 1]}
            />
            <meshStandardMaterial 
              color="orange"
            />
          </e.mesh>
        </SheetProvider>
      </Canvas>
    </div>
    
  )
};
export default Editor;
