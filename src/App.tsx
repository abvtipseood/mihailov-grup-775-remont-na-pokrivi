import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import RoofRepair from './pages/RoofRepair';
import Insulation from './pages/Insulation';
import InteriorRepairs from './pages/InteriorRepairs';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services/roof-repair" element={<RoofRepair />} />
          <Route path="services/insulation" element={<Insulation />} />
          <Route path="services/interior-repairs" element={<InteriorRepairs />} />
        </Route>
      </Routes>
    </Router>
  );
}
