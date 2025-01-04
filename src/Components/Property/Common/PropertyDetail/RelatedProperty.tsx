import Property1DetailBox from "@/Components/CommonComponents/ProductBox/Property1DetailBox";
import { DetailCarSlider, DetailPropertySlider } from "@/Data/Property";
import { useAppSelector } from "@/Redux/Hooks";
import { DetailBodyItemType } from "@/Types/ProductType";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { FC, Fragment, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Job1DetailBox from "@/Components/CommonComponents/ProductBox/Job1DetailBox";
import { DetailJobSlider } from "@/Data/Job";

const RelatedProperty: FC<DetailBodyItemType> = ({ type }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const showProperty = productItem.filter((data) => data.type === type);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <div className={`section-t-space ${type === "car" ? "car-product-section" : ""}`}>
      {type === "car" ? (
        <Fragment>
          <div className='detail-flex-title'>
            <h3>Recommended used cars</h3>
            <div className='swiper-flex car-arrow'>
              <div className='swiper-button-prev car-related-prev'>
                <ArrowLeft2 className='iconsax' color='white' size={20} />
              </div>
              <div className='swiper-button-next car-related-next'>
                <ArrowRight2 className='iconsax' color='white' size={20} />
              </div>
            </div>
          </div>
          <Swiper {...DetailCarSlider} className='car-related-slider ratio_65' onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
            {showProperty.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Property1DetailBox data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Fragment>
      ) : type === "job" ? (
        <div>
          <h5 className='description-title'>Similar job opportunities</h5>
          <div className='detail-swiper-section'>
            <Swiper {...DetailJobSlider} className='detail-swiper-slider'  >
              {showProperty.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Job1DetailBox data={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className='swiper-button-next detail-next'>
              <i className='ri-arrow-right-wide-line' />
            </div>
            <div className='swiper-button-prev detail-prev'>
              <i className='ri-arrow-left-wide-line' />
            </div>
          </div>
        </div>
      ) : (
        <Fragment>
          <h4 className='detail-page-title'>Related Properties</h4>
          <Swiper {...DetailPropertySlider} className='detail-property-slider ratio_landscape'>
            {showProperty.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Property1DetailBox data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Fragment>
      )}
    </div>
  );
};

export default RelatedProperty;
