import React from 'react';
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';

export default function Ci(){
    const isMobile = useMediaQuery({ query: "(min-width: 776px)"});
    const isTablet = useMediaQuery({ query: "(min-width: 1024px)"});
    const isPc = useMediaQuery({ query: "(min-width: 1300px)"});

    const textTop = ["LOGOMARK", "LOGOMARK", "PRIMARY LOGO", "COLOUR PERSONA", "TYPEFACES"]
    const textBottom = ["BLACK", "MULTI COLOUR", "", "PALETTE", ""]

    const renderData = () => {
        const result = [];
        for(let i = 0; i < 5; i++){
            result.push(
                <>
                    { isPc ? 
                    <>
                    <TextWrapper>{textTop[i]}</TextWrapper>
                    <TextWrapper>{textBottom[i]}</TextWrapper>
                    <Wrapper src={require("../../assets/img/varo/ci/ci"+i+".png")} />
                    </>
                    :
                    isMobile
                    ?
                    <>
                    <TextWrapperPc>{textTop[i]}</TextWrapperPc>
                    <TextWrapperPc>{textBottom[i]}</TextWrapperPc>
                    <WrapperPc src={require("../../assets/img/varo/ci/ci"+i+".png")} />
                    </>
                    :
                    <>
                    <TextWrapperMobile>{textTop[i]}</TextWrapperMobile>
                    <TextWrapperMobile>{textBottom[i]}</TextWrapperMobile>
                    <WrapperMobile src={require("../../assets/img/varo/ci/ci"+i+".png")} />
                    </>
                    }
                </>
            );
        }
        return result;
    }

    return(
        <>
            { isMobile ?
            <Title>CI</Title>
            :
            <TitleMobile>CI</TitleMobile>
            }
            {renderData()}
        </>
    );
}

const WrapperMobile = styled.img`
    width: 100%;
    padding-bottom: 50px;
`;

const TextWrapperMobile = styled.div`
    font-size: 15px;
    text-align: start;
`;

const TitleMobile = styled.div`
    width: 100%;
    text-align: start;
    font-size: 20px;
    padding-bottom: 50px;
`;


const WrapperPc = styled.img`
    width: 100%;
    padding-bottom: 50px;
`;

const TextWrapperPc = styled.div`
    font-size: 24px;
    text-align: start;
`;


const Wrapper = styled.img`
    width: 1200px;
    padding-bottom: 50px;
`;

const TextWrapper = styled.div`
    font-size: 24px;
    text-align: start;
`;

const Title = styled.div`
    width: 100%;
    text-align: start;
    font-size: 34px;
    padding-bottom: 150px;
`;