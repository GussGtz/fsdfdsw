import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Gallina from './pages/Gallina';
import Pato from './pages/Pato';
import Codorniz from './pages/Codorniz';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/gallina" element={<Gallina/>} />
        <Route exact path="/pato" element={<Pato/>} />
        <Route exact path="/codorniz" element={<Codorniz />} />
      </Routes>
    </>
  );
}

export default App;
