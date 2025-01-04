import { Href, ImagePath } from "@/Constants/Constants";
import { instaImages } from "@/Data/Demo/CarDemo2";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Instagram = () => {
  return (
    <section className='section-t-lg-space car2-insta-section'>
      <Swiper slidesPerView={9} className='car2-insta-slider ratio_square'>
        <div className='swiper-wrapper'>
          {instaImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Link href={Href} className='insta-img'>
                <Image height={211} width={211} src={`${ImagePath}/car2/insta/${image}.jpg`} alt='i-1' className='bg-img' />
                <div className='insta-overlay'>
                  <i className='ri-instagram-line' />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Instagram;
