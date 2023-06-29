import { useState } from 'react'
import './App.css'
import loadable from '@loadable/component';
import {
  BrowserRouter as Router,
} from "react-router-dom";

///////////////
// Routes
////////////
const Routes = loadable(() => import('./Routes'));

//////////////
// Layout
///////////

const Layout = loadable(() => import('./layout/layout'));

//////////////
// App
///////////
const App = () => {

  return (
    <Router>
      <Layout  >
        <Routes />
      </Layout>
    </Router>
  )
};

export default App;
