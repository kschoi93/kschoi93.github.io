import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function Varo() {
    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 70vw;
    padding: 50px 0;
    margin: 0 auto;
`;