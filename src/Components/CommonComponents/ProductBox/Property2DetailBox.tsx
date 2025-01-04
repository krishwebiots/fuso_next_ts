import { ImagePath } from "@/Constants/Constants";
import { Property2SwiperSetting } from "@/Data/Demo/PropertyDemo2";
import { PropertyCardType } from "@/Types/ProductType";
import { RouteList } from "@/utils/RouteList";
import SvgIcon from "@/utils/SvgIcon";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Property2DetailBox: FC<PropertyCardType> = ({ data, label, index }) => {
  return (
    <div className='car2-featured-box property2-featured-box'>
      <Link href={RouteList.Property.Listing.PropertyRightList} className='car2-featured-img'>
        <Swiper {...Property2SwiperSetting}>
          <div className='swiper-wrapper'>
            {data.image.map((src, i) => {
              return (
                <SwiperSlide key={i}>
                  <Image width={448} height={268} src={`${ImagePath}/${src}`} alt='f-img' className='bg-img' />
                </SwiperSlide>
              );
            })}
          </div>
          <div className='swiper-button-next' />
          <div className='swiper-button-prev' />
        </Swiper>
        <div className='car2-label-flex'>
          <span className='bg-white'>{label}</span>
          {index === 0 ? <span className='text-white'>For Rent</span> : ""}
        </div>
      </Link>
      <div className='car2-featured-content'>
        <Link href={RouteList.Property.Grid.PropertyGridNoSidebar}>
          <h4>{data.title}</h4>
        </Link>
        <div className='location-flex'>
          <SvgIcon iconId="/property/sprite/featured.svg#4"/>          
          <h6>{data.location}</h6>
        </div>
        <ul className='featured-list'>
          {data.features.map((item, i) => {
            return (
              <li key={i}>
                <SvgIcon iconId={`/property/sprite/featured.svg#${item.icon}`} />
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
        <div className='price-flex'>
          <h4>
            ${data.price}/<span>month</span>
          </h4>
          <Link href={RouteList.Property.Grid.PropertyGridNoSidebar} className='btn-solid'>
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Property2DetailBox;
