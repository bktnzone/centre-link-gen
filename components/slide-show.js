import React from 'react';
import { Fade,Zoom } from 'react-slideshow-image';



    const fadeImages = [
        "img/slide1.jpeg",
        "img/slide2.jpeg",  
        "img/slide3.jpeg",
        "img/slide4.jpeg",
        "img/slide5.jpeg"
      ];

      
const fadeProperties = {
    duration: 1000,
    transitionDuration: 2000,
    indicators: false,
    arrows: false
  };

const Slideshow = () => {
    return (
        <div className="border-solid hover:border-dotted">

        <center>
          <div className="slide-container " >
          <Fade {...fadeProperties}>
        {fadeImages.map((each, index) => (
          <img key={index} src={each} className='rounded-md border-4 border-white-600'/>
        ))}
      </Fade>
          </div>
          </center>  
        </div>
      );
}

export default Slideshow