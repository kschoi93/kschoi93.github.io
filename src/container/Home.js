import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Home(){
    const img = () => {
        const imgArr = [];
        for ( let i = 0; i < 12; i++ ){
            imgArr.push(
                <Carousel.Item>
                    <img key={i} className="d-block w-100" src={require("../styles/img/"+i+".jpg")}/>
                </Carousel.Item>
            );
        }
        return imgArr;
    };

    return(
        <>
            <Carousel fade slide={'false'} indicators={'false'} style={{width:'100%', height:'400', position: 'relative', zIndex:1090}}>
              {img()}
            </Carousel>
        </>
    );
}
