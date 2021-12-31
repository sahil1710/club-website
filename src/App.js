import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Index from './components/Index';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Event from './components/Event'


function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/club-website/#/home' element={<Home />}></Route>
          <Route path='/club-website/#/about' element={<About />}></Route>
          <Route path='/club-website/#/events' element={<Events />}></Route>
          <Route path='/club-website/#/team' element={<Team />}></Route>
          <Route path='/club-website/#/contact' element={<Contact />}></Route>
        <Route path='/club-website/#/events/event' element={<Event />}></Route>
        </Routes>
      </div>
  );
}

export default App;
