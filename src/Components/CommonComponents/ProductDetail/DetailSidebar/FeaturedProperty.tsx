import { ImagePath } from "@/Constants/Constants";
import { useAppSelector } from "@/Redux/Hooks";
import { DetailBodyItemType } from "@/Types/ProductType";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import React, { FC } from "react";

const FeaturedProperty: FC<DetailBodyItemType> = ({ type }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const showProperty = productItem.filter((data) => data.type === type).slice(0, 4);
  return (
    <div className='featured-info-box'>
      <h4 className={`${type === "car" ? "car-title" : "detail-page-title"}`}>Featured Property</h4>
      <ul className='featured-detail-box'>
        {showProperty.map((item, i) => {
          return (
            <li key={i}>
              <Link href={RouteList.Property.Detail.PropertySidebarLayout} className='featured-detail-item'>
                {type === "car" ? <img src={`${ImagePath}/car/product/${i + 1}.jpg`} alt='f-1' className='img-fluid' /> : <img src={`${ImagePath}/property/featured/${i + 1}.jpg`} alt='f-1' className='img-fluid' />}
                <div className='featured-detail-info'>
                  <h6>{item.title}</h6>
                  <span>
                    ${item.price} <span> \ EMI-₹ 1.3{i * 2}L</span>
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeaturedProperty;
