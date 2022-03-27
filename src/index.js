import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './container/Home';
import Company from './container/company/Company';
import AboutUs from './container/company/AboutUs';
import Ci from './container/company/Ci';
import Contact from './container/company/Contact';

import ArtistContainer from './container/artist/ArtistContainer';
import Artist from './container/artist/Artist';
import Audition from './container/audition/Audition';

import ScrollToTop from './components/ScrollToTop';

const rootElement = document.getElementById("root");
render( 
  <HashRouter>
    <ScrollToTop />
      <Routes>
          <Route path="/" element={ <App /> }>
            <Route index element={ <Home /> } />
            <Route path="company" element={ <Company /> }>
              <Route path="about-us" index element={ <AboutUs /> } />
              <Route path="ci" element={ <Ci /> } />
              <Route path="contact" element={ <Contact /> }/>
            </Route>
            <Route path="artist" element={ <ArtistContainer/> } >
              <Route path="1" index element={ <Artist number={1}/> } />
              <Route path="2" element={ <Artist number={2}/> } />
              <Route path="3" element={ <Artist number={3}/> } />
              <Route path="4" element={ <Artist number={4}/> } />
              <Route path="5" element={ <Artist number={5}/> } />
              <Route path="6" element={ <Artist number={6}/> } />
              <Route path="7" element={ <Artist number={7}/> } />
              <Route path="8" element={ <Artist number={8}/> } />
            </Route>
            <Route path="audition" element={ <Audition /> } />
          </Route>
          <Route path="*" element={<App/>}></Route>
      </Routes>
  </HashRouter>
  , rootElement 
);