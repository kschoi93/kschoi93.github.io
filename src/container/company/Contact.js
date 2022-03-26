import React from 'react';
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';

export default function Contact(){
    const isMobile = useMediaQuery({ query: "(min-width: 776px)"});
    const isTablet = useMediaQuery({ query: "(min-width: 1024px)"});
    const isPc = useMediaQuery({ query: "(min-width: 1300px)"});
    return(
        <>
            { isMobile ? 
                <>
                <Title>CONTACT</Title>
                <a href="http://naver.me/xjeU8LZM"  target='_blank'>
                    <ImageWrapper src={require("../../assets/img/varo/contact/map.png")}/>
                </a><br/>
                <div style={{display: 'flex'}}>
                    <Phone>T : +82 2) 518 0008</Phone><Phone>F : +82 2) 518 0009</Phone>
                </div>
                <Title>MANAGER</Title>
                <MangarWrapper>[ 매니지먼트 총괄(섭외 등) / 영화·드라마 사업부(제작) / 광고 제안 및 문의 ]</MangarWrapper>
                <ManagerSubWrapper>▶ varo-ent@naver.com</ManagerSubWrapper>
                <MangarWrapper>[ 홍보팀 / 팬 커뮤니케이션(서포트 및 기타 관련) 문의 ]</MangarWrapper>
                <ManagerSubWrapper>▶ varoent@daum.net</ManagerSubWrapper>
                <MangarWrapper>[ 오디션, 프로필 접수 ]</MangarWrapper>
                <ManagerSubWrapper>▶ varoaudition@daum.net</ManagerSubWrapper>
                </>
            : 
                <>
                <TitleMobile>CONTACT</TitleMobile>
                <a href="http://naver.me/xjeU8LZM"  target='_blank'>
                    <ImageWrapperMobile src={require("../../assets/img/varo/contact/map.png")}/>
                </a><br/>
                <div style={{display: 'flex'}}>
                    <PhoneMobile>T : +82 2) 518 0008</PhoneMobile>
                    <PhoneMobile>F : +82 2) 518 0009</PhoneMobile>
                </div>
                <TitleMobile>MANAGER</TitleMobile>
                <MangarWrapperMobile>[ 매니지먼트 총괄(섭외 등) / 영화·드라마 사업부(제작) / 광고 제안 및 문의 ]</MangarWrapperMobile>
                <ManagerSubWrapperMobile>▶ varo-ent@naver.com</ManagerSubWrapperMobile>
                <MangarWrapperMobile>[ 홍보팀 / 팬 커뮤니케이션(서포트 및 기타 관련) 문의 ]</MangarWrapperMobile>
                <ManagerSubWrapperMobile>▶ varoent@daum.net</ManagerSubWrapperMobile>
                <MangarWrapperMobile>[ 오디션, 프로필 접수 ]</MangarWrapperMobile>
                <ManagerSubWrapperMobile>▶ varoaudition@daum.net</ManagerSubWrapperMobile>
                </>
            }
        </>
    );
}

const ManagerSubWrapperMobile = styled.div`
    padding: 10px 0;
    font-size: 12px;
`;

const MangarWrapperMobile = styled.div`
    padding: 10px 0;
    font-size: 12px;
`;

const PhoneMobile = styled.p`
    padding: 30px 50px 50px 0;
    text-align: start;
    font-size: 15px;
`;


const ImageWrapperMobile = styled.img`
    width: 100%;
    height: 30vh;
`;

const TitleMobile = styled.div`
    width: 100%;
    text-align: start;
    font-size: 20px;
    padding-bottom: 20px;
`;



const ManagerSubWrapper = styled.div`
    padding: 10px 0;
    font-size: 18px;
`;

const MangarWrapper = styled.div`
    padding: 10px 0;
    font-size: 16px;
`;

const Phone = styled.p`
    padding: 30px 50px 50px 0;
    text-align: start;
    font-size: 22px;
`;


const ImageWrapper = styled.img`
    width: 100%;
    height: 40vh;
`;

const Title = styled.div`
    width: 100%;
    text-align: start;
    font-size: 34px;
    padding-bottom: 20px;
`;