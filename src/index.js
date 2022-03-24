import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './container/Home';
import Varo from './container/varo/Varo';
import ScrollToTop from './components/ScrollToTop';
import Artist from './container/artist/Artist';

const rootElement = document.getElementById("root");
render( 
  <BrowserRouter>
    <ScrollToTop />
      <Routes>
          <Route path="/" element={ <App /> }>
            <Route index element={ <Home /> } />
            <Route path="varo" element={ <Varo /> }/>
            <Route path="artist" element={ <Artist /> }/>
          </Route>
      </Routes>
  </BrowserRouter>, 
  rootElement 
);