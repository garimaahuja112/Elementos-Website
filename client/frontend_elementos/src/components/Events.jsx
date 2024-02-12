import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel';

import image3 from "../images/image3.png";


export default function App() {
    
    
  const images = [
    {
      src: image3,
      alt: 'sample-image',
    },
    {
      src: image3,
      alt: '',
    },
    {
        src: image3,
        alt: '',
      }
    
    // Add more images as needed
  ];

  const carouselSettings = {
    slideSize: 3, // Set the size according to your requirement
  };

  const customStyle = {
    // Add your custom styles here
    width: '800px', // Adjust the width
    height: '80%', // Adjust the height
    margin: 'auto', // Center the element horizontally
    spread: 'narrow'
    // Add more styles as needed
  };

  return (
    <div>
    <h3  id="Events"className='text-white  text-center text-sky-300 mt-64 text-6xl mb-20' style={{fontFamily:'coiny'}}>Events</h3>
    <Carousel images={images} {...carouselSettings} spread='wide' width='800px' height='700px' showStatus={false} showIndicators={false}>
      {images.map((image, index) => (
        <div key={index} style={customStyle}>
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ))}
    </Carousel>
   
    </div>
  );
}
