import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

export default function Home(){

    const img = () => {
        const imgArr = [];
        for ( let i = 0; i < 12; i++ ){
            imgArr.push(
                <Carousel.Item>
                    <img key={i} 
                         className="d-block w-100" 
                         src={require("../assets/img/main/"+i+".jpg")}/>
                </Carousel.Item>
            );
        }
        return imgArr;
    };

    return(
        <>
            <CarouselWrapper 
                fade 
                interval={'2000'} 
                slide={'false'} 
                indicators={'false'}>
              {img()}
            </CarouselWrapper>
        </>
    );
}


const CarouselWrapper = styled(Carousel)`
    width: 100%;
    position: relative; 
    zIndex: 1090;
`;