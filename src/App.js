import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Mission from './pages/Mission';
import Team from './pages/Team';
import Story from './pages/Story';
import Methods from './pages/Methods';
import StrategicFrameworks from './pages/StrategicFrameworks';
import OurValue from './pages/OurValue';
import Belief from './pages/Belief';
import Programs from './pages/Programs';
import Impact from './pages/Impact';
import News from './pages/News';
import Articles from './pages/Articles';
import Donate from './pages/Donate';
import JoinUs from './pages/JoinUs';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/story" element={<Story />} />
          <Route path="/methodology" element={<Methods />} />
          <Route path="/strategic-framework" element={<StrategicFrameworks />} />
          <Route path="/our-value" element={<OurValue />} />
          <Route path="/belief" element={<Belief />} />
          <Route path='/programs' element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/news" element={<News />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact-us" element={<Contact />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
