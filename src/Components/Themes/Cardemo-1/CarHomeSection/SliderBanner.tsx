import { CarRental, Rental } from "@/Constants/Constants";
import CarSlider from "./CarSlider";

const SliderBanner = () => {
  return (
    <div className='home-section-box'>
      <div className='home-content'>
        <h3>{CarRental}</h3>
        <h1>{Rental}</h1>
      </div>
      <CarSlider />
    </div>
  );
};

export default SliderBanner;
