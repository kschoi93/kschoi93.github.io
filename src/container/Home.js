import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';

export default function Home(){
    const isMobile = useMediaQuery({ query: "(min-width: 776px)"});

    const img = (forder) => {
        const imgArr = [];
        for ( let i = 0; i < 12; i++ ){
            imgArr.push(
                <Carousel.Item>
                    <img key={i} 
                         className="d-block w-100" 
                         src={require("../assets/img/"+ forder +"/"+i+".jpg")}/>
                </Carousel.Item>
            );
        }
        return imgArr;
    };

    return(
        <>
            <CarouselWrapper 
                fade 
                interval={'3000'} 
                slide={'false'} 
                indicators={'false'}>
            {isMobile ?
              img('main')
            :
              img('sub')
            }
            </CarouselWrapper>
        </>
    );
}


const CarouselWrapper = styled(Carousel)`
    width: 100%;
    position: relative; 
    zIndex: 1090;
`;