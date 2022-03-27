import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import SideMenu from './SideMenu';

export default function Header(){
    const isMobile = useMediaQuery({ query: "(min-width: 776px)"});

    /** SubMenu */
    const [varoVisible, setVaroVisible] = useState('none');
    const [artistVisible, setArtistVisible] = useState('none');

    const headerPcStyle = {
        width: '100%',
        height: '100px',
        margin: '0 auto',
        padding: '0px 50px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    const headerMobileStyle = {
        width: '100%',
        height: '100px',
        margin: '0 auto',
        paddingLeft: '20px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    
    const HeaderWrapperMobile ={
        height: '80px',
        lineHeight: '80px',
        boxShadow: '0px 0px 10px #D8D8D8'
    };

    const HeaderWrapper = {
        height: '100px',
        lineHeight: '100px',
        boxShadow: '0px 0px 10px #D8D8D8'
    };

    const LogoWrapperMobile = {
        width: '100px',
        verticalAlign: 'middle'
    };

    const LogoWrapper = {
        width: '180px',
        verticalAlign: 'middle'
    };

    return(
        <div style={isMobile ? HeaderWrapper : HeaderWrapperMobile}>
            <header style={isMobile ? headerPcStyle : headerMobileStyle} >            
                <Link to="/"><img src={require('../../assets/logo.svg')} style={isMobile ? LogoWrapper : LogoWrapperMobile}/></Link>
                { isMobile ?
                <MainMenu>
                    <MainMenuItem onMouseEnter={()=>{setArtistVisible('block')}} onMouseLeave={()=>{setArtistVisible('none')}}>
                        <LinkStyle to="artist/1">ARTIST</LinkStyle>
                        <SubMenu style={{display:artistVisible}}>
                            <SubMenuItem><LinkStyle to="artist/1">GONG SEUNG YEON</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/2">BYEON WOO SEOK</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/3">PARK JUNG WOO</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/4">LEE YOU MI</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/5">LEE JINI</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/6">JIN GOO</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="artist/7">LEE HONG NAE</LinkStyle></SubMenuItem>
                        </SubMenu>
                    </MainMenuItem>
                    <MainMenuItem onMouseEnter={()=>{setVaroVisible('block')}} onMouseLeave={()=>{setVaroVisible('none')}}>
                        <LinkStyle to='company/about-us'>COMPANY</LinkStyle>
                        <SubMenu style={{display:varoVisible}}>
                            <SubMenuItem><LinkStyle to="company/about-us">ABOUT US</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="company/ci">CI</LinkStyle></SubMenuItem>
                            <SubMenuItem><LinkStyle to="company/contact">CONTACT</LinkStyle></SubMenuItem>
                        </SubMenu>
                    </MainMenuItem>
                    <MainMenuItem>
                        <LinkStyle to="audition">AUDITION</LinkStyle>
                    </MainMenuItem>
                </MainMenu>
                : <SideMenu/>
                }
            </header>
        </div>
    );
}


const SubMenuItem = styled.li`
	text-align: center;
	width: 150px;
	height: 35px;
	line-height: 35px;
	padding: 0;
	margin: 0;
	position: relative;
	z-index: 2000;
	list-style: none;
	font-size: 0.7em;
	color: #ECECEC;
	&:hover{
	    color: black;
	}
`;

const SubMenu = styled.ul`
	padding: 0;
	margin: 0;
	display: none;
	list-style: none;
    transition:visibility 0.3s linear,opacity 0.3s linear;
`;

const MainMenuItem = styled.li`
    width: 150px;
    text-align: center;
    margin: 0;
	list-style: none;
`;

const MainMenu = styled.ul`
    text-align: center;
    margin: 0;
    padding: 0 30px;
	list-style: none;
    font-size: 1.4em;
    display: flex;
    a{
        text-decoration:none;
        color: rgba(0, 0, 0, 0.55);
    }

    &:hover{
    }
`;

const LinkStyle = styled(Link)`
    textDecoration: none;
    color: gray;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover{
        color: black;
    }
`;
