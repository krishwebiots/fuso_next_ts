import { ImagePath } from "@/Constants/Constants";
import { ProductCardType } from "@/Types/ProductType";
import RatioImage from "@/utils/RatioImage";
import { RouteList } from "@/utils/RouteList";
import SvgIcon from "@/utils/SvgIcon";
import Link from "next/link";
import React, { FC } from "react";

const ParallaxCardContent: FC<ProductCardType> = ({ data, index }) => {
  return (
    <div className='featured-box featured-parallax'>
      <div className='parallax-img'>
        <RatioImage src={`${ImagePath}/property/dark-property/${(index ?? 0) + 1}.jpg`} alt='featured-img' className='bg-img' />
      </div>
      <div className='parallax-content'>
        <div className='featured-content'>
          <Link href={RouteList.Property.Detail.PropertySidebarLayout}>{data.title}</Link>
          <p>{data.location}</p>
          <ul className='featured-list'>
            {data?.features?.map((item, i) => {
              return (
                <li key={i}>
                  <SvgIcon iconId={`/property/sprite/featured.svg#${item.icon}`} />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='featured-price'>
          <h5>${data.price}</h5>
          <Link href={RouteList.Property.Detail.PropertySidebarLayout} className='btn-solid'>
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParallaxCardContent;
