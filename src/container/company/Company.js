import React from 'react';
import { useMediaQuery } from "react-responsive";
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function Varo() {
    const isMobile = useMediaQuery({ query: "(min-width: 776px)"});
    const isTablet = useMediaQuery({ query: "(min-width: 1024px)"});
    const isPc = useMediaQuery({ query: "(min-width: 1300px)"});
    
    return (
        <>
            { isMobile ? 
                <Wrapper>
                    <Outlet />
                </Wrapper>
            : 
                <WrapperPc>
                    <Outlet />
                </WrapperPc>
            }
        </>
    );
}

const WrapperPc = styled.div`
    width: 100%;
    padding: 80px 15px;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    width: 70vw;
    padding: 80px 0;
    margin: 0 auto;
`;