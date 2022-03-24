import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainContainer from './container/mainContainer';
import AboutUsContainer from './container/varo/aboutUsContainer';

const RouteCollect = () => {
    return (
        <>
            <Route index element={ <MainContainer /> } />
            <Route path="varo" element={ <AboutUsContainer /> }/>
            <Route path="about_us" element={ <AboutUsContainer /> }/>
        </>
    );
};

export default RouteCollect;