import { Href, SVGPath } from "@/Constants/Constants";
import { CarCategoryData } from "@/Data/Car";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";

const CarCategory = () => {
  return (
    <div className='category-inner-section'>
      <Container>
        <Swiper slidesPerView={6} className='category-inner-slider'>
          {CarCategoryData.map((data, i) => (
            <SwiperSlide key={i}>
              <Link href={Href} className='category-box'>
                <Fragment>
                  <div className='category-icon'>
                    <Image height={60} width={60} src={`${SVGPath}/car/category/${i + 1}.svg`} alt={`c-${i + 1}`} className='img-fluid' key={i} />
                  </div>
                  <h5>{data}</h5>
                </Fragment>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default CarCategory;
