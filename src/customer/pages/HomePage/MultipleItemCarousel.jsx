import React from 'react'
import CarouselItem from './CarouselItem';
import Slider from 'react-slick';
import { mostliked } from './MostOrdered';
//import { Slide } from '@mui/material';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const MultipleItemCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll:1, 
        autoplay:true,
        authplayspeed:2000,
        
        
      };
  return (
    <div>
      <Slider {...settings}>
        {mostliked.map((item)=><CarouselItem image={item.image} title={item.title}/>)}

      </Slider>
    </div>
  )
}

export default MultipleItemCarousel
