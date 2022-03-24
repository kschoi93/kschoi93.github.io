import React, { Component } from 'react';
import AboutUsContainer from './AboutUs';
import Ci from './Ci';
import Contact from './Contact';

export default class Varo extends Component {
    render(){
        return (
            <>
                <AboutUsContainer />
                <Ci />
                <Contact />
            </>
        );
    }
}