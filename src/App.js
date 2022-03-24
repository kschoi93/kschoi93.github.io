import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './container/layout/Header';
import Footer from './container/layout/Footer';

import './styles/bootstrap.css';


export default function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}