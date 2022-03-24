import React from 'react';
import styled from 'styled-components';

export default function Footer(){
    const address = ['https://www.instagram.com/varoent_official/',
                    'https://www.facebook.com/VAROENTERTAINMENT/',
                    'https://www.youtube.com/channel/UCYTKZ9XDIVIvPe8mvhSlg4Q/',
                    'https://m.post.naver.com/my.nhn?memberNo=51243517']

    const img = () => {
        const imgArr = [];
        for ( let i = 0; i < 4; i++ ){
            imgArr.push(<a href={address[i]}> <IconStyle key={i} src={require("../../styles/icon/icon"+i+".png")} /></a>);
        }

        return imgArr;
    };

    return(
        <FooterWrapper>
            {img()}
        </FooterWrapper>
    );
}

const IconStyle = styled.img`
    weight: 36px;
    height: 36px;
    margin: 0 20px;
`;

const FooterWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;