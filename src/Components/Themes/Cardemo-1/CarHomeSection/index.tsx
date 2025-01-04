import React from "react";
import SliderBanner from "./SliderBanner";
import CarHomeFillter from "./Filtersection";

const CarHomeSection = () => {
  return (
    <div className='car-home-section'>
      <SliderBanner />
      <CarHomeFillter />    
    </div>
  );
};

export default CarHomeSection;
