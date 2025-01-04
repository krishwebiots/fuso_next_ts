import { FC, Fragment, useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href, ImagePath, VideoPath } from "../../../../Constants/Constants";
import { PropertyBoxSliderType } from "@/Types/ProductType";
import { SliderFor, SliderNav } from "@/Data/Property";
import RatioImage from "@/utils/RatioImage";
import Link from "next/link";
import { ProductSwiperSetting } from "@/Data/Demo/Demo1";
 
const PropertyBoxSlider: FC<PropertyBoxSliderType> = ({ view, data }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <Fragment>
      { view === "multiple" ? (
        <Fragment>
          <Swiper className="thumb-main-slider ratio_65" {...SliderFor} thumbs={{ swiper: thumbsSwiper }}>
            {data.image.map((testimonial, index) => (
              <SwiperSlide key={index} className="bg-size">
                <RatioImage src={`${ImagePath}/${testimonial}`} alt="featured-img" className="bg-img" />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </Swiper>
          <Swiper className="thumb-sub-slider" {...SliderNav} onSwiper={setThumbsSwiper} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
            {data.image.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <a href={Href}>
                  <RatioImage src={`${ImagePath}/${testimonial}`} alt="featured-img" className="img-fluid" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fragment>
      ) : view === "image" ? (
        <RatioImage src={`${ImagePath}/${data.image[0]}`} alt="featured-img" className="img-fluid bg-img" />
      ) : (
        <Swiper {...ProductSwiperSetting} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
          {data.image.map((testimonial, index) => (
            <SwiperSlide key={index} className="bg-size">
              <RatioImage src={`${ImagePath}/${testimonial}`} alt="featured-img" className="img-fluid bg-img" />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </Swiper>
      )}
    </Fragment>
  );
};

export default PropertyBoxSlider;
