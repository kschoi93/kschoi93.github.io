import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';

import GSY from './gongseungyeon.json';
import BWS from './byeonwooseok.json';
import PJW from './parkjungwoo.json';
import LYM from './leeyoumi.json';
import LJI from './leejini.json';
import JG from './jingoo.json';

import GSYImage from '../../assets/img/artist/gongseungyeon.jpg';
import BWSImage from '../../assets/img/artist/byeonwooseok.jpg';
import PJWImage from '../../assets/img/artist/parkjungwoo.jpg';
import LYMImage from '../../assets/img/artist/leeyoumi.jpg';
import LJIImage from '../../assets/img/artist/leejini.jpg';
import JGImage from '../../assets/img/artist/jingoo.jpg';


export default function Artist(props){
  const isMobile = useMediaQuery({ query: "(min-width: 776px)"});
  const isTablet = useMediaQuery({ query: "(min-width: 1024px)"});
  const isPc = useMediaQuery({ query: "(min-width: 1300px)"});
  const artistInfoData = (number) => {
    if(number === 1){
      setMainImage(GSYImage);
      return GSY;
    } else if(number === 2){
      setMainImage(BWSImage);
      return BWS;
    } else if(number === 3){
      setMainImage(PJWImage);
      return PJW;
    } else if(number === 4){
      setMainImage(LYMImage);
      return LYM;
    } else if(number === 5){
      setMainImage(LJIImage);
      return LJI;
    } else if(number === 6){
      setMainImage(JGImage);
      return JG;
    } else {
      setMainImage(GSYImage);
      return GSY;
    }
  }

  
  const number = props.number;
  const [mainImage,setMainImage] = useState(false);
  const [data, setData] = useState(() => artistInfoData(number));

  useEffect(() =>{
    if(number === 1){
      setMainImage(GSYImage);
      setData(GSY);
    } else if(number === 2){
      setMainImage(BWSImage);
      setData(BWS);
    } else if(number === 3){
      setMainImage(PJWImage);
      setData(PJW);
    } else if(number === 4){
      setMainImage(LYMImage);
      setData(LYM);
    } else if(number === 5){
      setMainImage(LJIImage);
      setData(LJI);
    } else if(number === 6){
      setMainImage(JGImage);
      setData(JG);
    } else {
      setMainImage(GSYImage);
      setData(GSY);
    }
  })

  
  const address = data['iconRef'];
  const img = () => {
    const imgArr = [];
    for ( let i = 0; i < 4; i++ ){
      imgArr.push(<a href={address[i]}> <IconStyle key={i} src={require("../../assets/icon/icon"+i+".png")} /></a>);
    }

    return imgArr;
  };

  const contentSectionRender = (contentList) =>{
    const result = [];
    for(let i = 0; i < contentList.length; i++){
      { isMobile ?
        result.push(<ContentSection>{contentList[i]}</ContentSection>)
        :
        result.push(<ContentSectionMobile>{contentList[i]}</ContentSectionMobile>)
      }
    }
    return result;
  }

  const content = data['Content'];
  const contentLen = content.length;
  const contentRender = () => {
    const result = [];
    for( let i = 0; i < contentLen; i++ ){
      const contentArr = [];
      const data = content[i];
      const title = data['contentTitle'];
      const contentList = data['contentSection'];
      
      { isMobile ? 
      contentArr.push(
        <InfoContentWrapper>
            <Content>
              <ContentTitle>{title}</ContentTitle>
              { contentSectionRender(contentList) }
            </Content>
        </InfoContentWrapper>
      )
      :
      contentArr.push(
        <InfoContentWrapperMobile>
          <Content>
            <ContentTitleMobile>{title}</ContentTitleMobile>
            { contentSectionRender(contentList) }
          </Content>
        </InfoContentWrapperMobile>
      )
      }

      const bool = ((i+1) %2) == 0 ? true : false;

      result.push(contentArr);
    }
    return result;
  };

  return (
    <>
      { isPc ?
      <Section>
          <Title>{data['title']}</Title>
          <IconWrapper>{ img() }</IconWrapper>
          <ImageWrapper src={mainImage}/>
          <ArtistInfo>{data['artistInfo']}</ArtistInfo>
          <InfoTitle>작품</InfoTitle>
          <hr/>
            { contentRender()}
      </Section>
      :
      isMobile
      ?
      <Section>
      <Title>{data['title']}</Title>
      <IconWrapper>{ img() }</IconWrapper>
      <ImageWrapperPc src={mainImage}/>
      <ArtistInfo>{data['artistInfo']}</ArtistInfo>
      <InfoTitle>작품</InfoTitle>
      <hr/>
        { contentRender()}
      </Section>
      :
      <Section>
      <TitleMobile>{data['title']}</TitleMobile>
      <IconWrapper>{ img() }</IconWrapper>
      <ImageWrapperPc src={mainImage}/>
      <ArtistInfoMobile>{data['artistInfo']}</ArtistInfoMobile>
      <InfoTitleMobile>작품</InfoTitleMobile>
      <hr/>
        { contentRender()}
      </Section>
      }
    </>
  );
  
}

const ContentSectionMobile = styled.div`
  text-indent: 1rem;
  font-size: 13px;
`;


const ContentTitleMobile = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const InfoContentWrapperMobile = styled.div`
  padding-bottom: 30px;
  vertical-align: top;
`;

const InfoTitleMobile = styled.div`
  font-size: 17px;
`;

const ArtistInfoMobile = styled.div`
  font-size: 17px;
  padding-bottom: 80px; 
`

const TitleMobile = styled.div`
    width: 100%;
    text-align: center;
    font-size: 24px;
    padding: 30px 0 20px 0;
`;

/**              Pc               */

const ImageWrapperPc = styled.img`
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
`;



/*               Main                */

const ContentSection = styled.div`
  text-indent: 1rem;
  font-size: 16px;
`;


const ContentTitle = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const Content = styled.div`
  width: 100%;
`;

const InfoContentWrapper = styled.div`
  padding-bottom: 30px;
  width:50%;
  display:inline-block;
  vertical-align: top;
`;

const InfoTitle = styled.div`
  font-size: 22px;
`;

const ArtistInfo = styled.div`
  font-size: 24px;
  padding-bottom: 80px; 
`;

const ImageWrapper = styled.img`
  width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
`;


const IconStyle = styled.img`
    weight: 36px;
    height: 36px;
    margin: 0 10px;
    opacity: 0.5;
    &:hover{
      opacity: 1;
    }
`;

const IconWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 32px;
    padding: 30px 0 20px 0;
`;

const Section = styled.div`
    margin: 0 auto;
`;