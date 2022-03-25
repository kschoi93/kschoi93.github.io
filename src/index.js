import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './container/Home';
import Varo from './container/varo/Varo';
import AboutUs from './container/varo/AboutUs';
import Ci from './container/varo/Ci';
import Contact from './container/varo/Contact';

import Artist from './container/artist/Artist';
import Audition from './container/audition/Audition';

import ScrollToTop from './components/ScrollToTop';

const rootElement = document.getElementById("root");
render( 
  <BrowserRouter>
    <ScrollToTop />
      <Routes>
          <Route path="/" element={ <App /> }>
            <Route index element={ <Home /> } />
            <Route path="varo" element={ <Varo /> }>
              <Route path="about-us" index element={ <AboutUs /> } />
              <Route path="ci" element={ <Ci /> } />
              <Route path="contact" element={ <Contact /> }/>
            </Route>
            <Route path="artist" element={ <Artist /> } />
            <Route path="audition" element={ <Audition /> } />
          </Route>
      </Routes>
  </BrowserRouter>
  , rootElement 
);