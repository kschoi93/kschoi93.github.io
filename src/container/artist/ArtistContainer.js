import React from 'react';
import { useMediaQuery } from "react-responsive";
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function ArtistContainer() {
    const isMobile = useMediaQuery({ query: "(min-width: 776px)"});
    const isTablet = useMediaQuery({ query: "(min-width: 1024px)"});
    const isPc = useMediaQuery({ query: "(min-width: 1300px)"});
    return (
        <>
        { isPc ?
        <>
        <Wrapper>
            <Outlet />
        </Wrapper>
        </>
        :
        <WrapperMobile>
            <Outlet />
        </WrapperMobile>
        }
        </>
    );
}

const WrapperMobile = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 50px 15px;
`;

const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
`;