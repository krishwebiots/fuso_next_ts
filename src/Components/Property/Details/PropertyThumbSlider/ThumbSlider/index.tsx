import { ImagePath } from "@/Constants/Constants";
import { dynamicNumber } from "@/utils";
import RatioImage from "@/utils/RatioImage";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Container } from "reactstrap";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

const ThumbSliderSet = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <Fragment>
      <Swiper slidesPerView={1} thumbs={{ swiper: thumbsSwiper }} modules={[Thumbs]} className='breadcrumb-thumbs ratio_40 ratio_media_landscape'>
          {dynamicNumber(9).map((img, i) => (
            <SwiperSlide key={i} className="bg-size">
              <RatioImage src={`${ImagePath}/property/detail-main/${img}.jpg`} className='img-fluid bg-img' alt={`b-thumb-${i + 1}`} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className='thumb-set'>
        <Container>
          <Swiper slidesPerView={7} onSwiper={setThumbsSwiper} modules={[FreeMode, Thumbs]} spaceBetween={30} loop={true} className='breadcrumb-thumb'>
            {dynamicNumber(9).map((img, i) => (
              <SwiperSlide key={i}>
                <div className='small-breadcrumb-img'>
                  <Image height={179} width={179} src={`${ImagePath}/property/detail-main/${img}.jpg`} className='img-fluid bg-img' alt={`b-thumb-${i + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </Fragment>
  );
};

export default ThumbSliderSet;
