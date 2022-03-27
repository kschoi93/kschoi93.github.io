import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SideMenu(){
    /** Side Menu OffCanvas */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <ButtonWrapper onClick={handleShow} >
                <img src={require('../../assets/berger.svg')} style={{verticalAlign:"middle", width:'35px', height:'35px'}}/>
            </ButtonWrapper>
            <Offcanvas show={show} onHide={handleClose} placement={'end'} name={'end'} style={{zIndex:2090}} width={100} transitionDuration={100}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>바로엔터테인먼트</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <LinkMenu to="/" onMouseDown={()=>{setShow(false)}}>HOME</LinkMenu>
                    <LinkMenu to="artist/1" onMouseDown={()=>{setShow(false)}}>ARTIST</LinkMenu>
                        <LinkSubMenu to="artist/1" onMouseDown={()=>{setShow(false)}}>- GONG SEUNG YEON</LinkSubMenu>
                        <LinkSubMenu to="artist/2" onMouseDown={()=>{setShow(false)}}>- BYEON WOO SEOK</LinkSubMenu>
                        <LinkSubMenu to="artist/3" onMouseDown={()=>{setShow(false)}}>- PARK JUNG WOO</LinkSubMenu>
                        <LinkSubMenu to="artist/4" onMouseDown={()=>{setShow(false)}}>- LEE YOU MI</LinkSubMenu>
                        <LinkSubMenu to="artist/5" onMouseDown={()=>{setShow(false)}}>- LEE JINI</LinkSubMenu>
                        <LinkSubMenu to="artist/6" onMouseDown={()=>{setShow(false)}}>- JIN GOO</LinkSubMenu>
                        <LinkSubMenu to="artist/7" onMouseDown={()=>{setShow(false)}}>- LEE HONG NAE</LinkSubMenu>
                        
                    <LinkMenu to="company/about-us" onMouseDown={()=>{setShow(false)}}>COMPANY</LinkMenu>
                        <LinkSubMenu to="company/about-us" onMouseDown={()=>{setShow(false)}}>- ABOUT US</LinkSubMenu>
                        <LinkSubMenu to="company/ci" onMouseDown={()=>{setShow(false)}}>- CI</LinkSubMenu>
                        <LinkSubMenu to="company/contact" onMouseDown={()=>{setShow(false)}}>- CONTACT</LinkSubMenu>

                    <LinkMenu to="audition" onMouseDown={()=>{setShow(false)}}>AUDITION</LinkMenu>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

const ButtonWrapper = styled.div`
    height: 50px;
    &:hover { 
        color: black; 
        text-decoration: underline;
        cursor:pointer;
    }
    background-color:white;
    border:none;
    padding-right: 20px;
`;


const LinkSubMenu = styled(Link)`
    display:block;
    height: 40px;
    line-height: 40px;
    text-decoration: none;
    color: gray;
    &:hover{
        color: black;
    }
    text-indent: 1rem;
`;


const LinkMenu = styled(Link)`
    display:block;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #D8D8D8;
    text-decoration: none;
    color: gray;
    &:hover{
        color: black;
    }
    text-indent: 1rem;
    font-weight: bold;
    margin-top: 20px;
`;