import React from 'react';
import styled from 'styled-components';

export default function Ci(){
    const textTop = ["LOGOMARK", "LOGOMARK", "PRIMARY LOGO", "COLOUR PERSONA", "TYPEFACES"]
    const textBottom = ["BLACK", "MULTI COLOUR", "", "PALETTE", ""]

    const renderData = () => {
        const result = [];
        for(let i = 0; i < 5; i++){
            result.push(
                <>
                    <TextWrapper>{textTop[i]}</TextWrapper>
                    <TextWrapper>{textBottom[i]}</TextWrapper>
                    <Wrapper src={require("../../assets/img/varo/ci/ci"+i+".png")} />
                </>
            );
        }
        return result;
    }

    return(
        <>
            <Title>CI</Title>
            { renderData() }
        </>
    );
}

const Wrapper = styled.img`
    width: 70vw;
    padding-bottom: 50px;
`;

const TextWrapper = styled.div`
    font-size: 24px;
    text-align: start;
`;

const Title = styled.div`
    width: 100%;
    text-align: start;
    font-size: 40px;
    padding-bottom: 150px;
`;