import { ImagePath } from "@/Constants/Constants";
import { dynamicNumber } from "@/utils";
import RatioImage from "@/utils/RatioImage";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { FreeMode, Mousewheel, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

const StickySlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className='detail-images'>
      <Row>
        <Col md={2} className='order-md-0 order-1'>
          <Swiper slidesPerView={6} direction={"vertical"} onSwiper={setThumbsSwiper} modules={[FreeMode, Thumbs]} spaceBetween={30} className='sub-vertical-image ratio_asos'>
            <div className='swiper-wrapper'>
              {dynamicNumber(10).map((img, i) => (
                <SwiperSlide key={i}>
                  <Link href='#!' className='detail-sub-image'>
                    <RatioImage src={`${ImagePath}/property/detail-main/${img}.jpg`} alt={`ds-${img}`} className='img-fluid bg-img' />
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </Col>
        <Col md={10}>
          <Swiper direction={"vertical"} watchSlidesProgress={true} slidesPerView={1} mousewheel={true} thumbs={{ swiper: thumbsSwiper }} modules={[Mousewheel, Thumbs]} className='main-vertical-image ratio_asos'>
            {dynamicNumber(10).map((img, i) => (
              <SwiperSlide key={i}>
                <Link href='#!' className='detail-sub-image'>
                  <RatioImage src={`${ImagePath}/property/detail-main/${img}.jpg`} alt={`ds-${img}`} className='img-fluid bg-img' />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </div>
  );
};

export default StickySlider;
