import { FloorPlansTitle, ImagePath } from "@/Constants/Constants";
import { floorItems, FloorpalnsDescription } from "@/Data/Property";
import { DetailBodyItemType } from "@/Types/ProductType";
import SvgIcon from "@/utils/SvgIcon";
import React, { FC } from "react";

const FloorPlans: FC<DetailBodyItemType> = ({ label }) => {
  return (
    <div className='detail-body' id="floor">
      {label && <h4 className='detail-page-title'>{FloorPlansTitle}</h4>}
      <p className='p-0'>{FloorpalnsDescription}</p>
      <ul className='floor-list'>
        {floorItems.map((item, index) => (
          <li className='floor-item' key={index}>
            <div className='floor-icon'>
              <SvgIcon iconId={`/property/sprite/overview.svg#${item.icon}`} />
              <span>{item.count}</span>
            </div>
            <h5>{item.label}</h5>
          </li>
        ))}
      </ul>
      <div className='floor-img'>
        <img src={`${ImagePath}/property/detail/floor.png`} alt='f-2' className='img-fluid' />
      </div>
    </div>
  );
};

export default FloorPlans;
