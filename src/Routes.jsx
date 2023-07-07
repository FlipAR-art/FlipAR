import {Suspense} from 'react';
import loadable from '@loadable/component';
import {
    Routes,
    Route,
  } from "react-router-dom";

///////////////////
// Pages
////////////////

const Home = loadable(() => import('./page/Home'));
const Editor = loadable(() => import('./page/Editor'));
const Player = loadable(() => import('./page/Player'));
const Phoenix = loadable(() => import('./fileLoader/GLTF'));

// const FBX = loadable(() => import('./page/fileLoader/FBX'));
// const OBJ = loadable(() => import('./page/fileLoader/OBJ'));
// const JsxObject = loadable(() => import('./page/fileLoader/JsxObject'));
// const GLTF = loadable(() => import('./page/fileLoader/GLTF'));
// const Grass = loadable(() => import('./page/elements/Grass'));
// const Terrain = loadable(() => import('./page/elements/Terrain'));
// const Scenes = loadable(() => import('./page/Scenes')); 
// const Lights = loadable(() => import('./page/elements/Lights'));
// const Camera = loadable(() => import('./page/elements/Camera'));
// const Fire = loadable(() => import('./page/elements/Fire'));
// const Water = loadable(() => import('./page/elements/Water'));
// const Rain = loadable(() => import('./page/elements/Rain'));
// const Postprocessing = loadable(() => import('./page/elements/Postprocessing'));
// const AudioPlayer = loadable(() => import('./audio/AudioPlayer'));
// const Catalog = loadable(() => import('./page/Catalog'));
// const Category = loadable(() => import('./page/Category'));

////////////////
// Routes
////////////////

const MyRoutes = () => {
    return (
        <Routes>
          <Route exact path="/" element={<Suspense fallback={null}><Home /></Suspense>} />
          <Route exact path="/editor" element={<Suspense fallback={null}><Editor /></Suspense>} />  
          <Route exact path="/player" element={<Suspense fallback={null}><Player /></Suspense>} />
          <Route exact path="/phoenix" element={<Suspense fallback={null}><Phoenix /></Suspense>} />          
        </Routes>
    )
}

export default MyRoutes;