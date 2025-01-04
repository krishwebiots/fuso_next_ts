import { CarOverview, GifPath, Overview, SymbolRegex } from "@/Constants/Constants";
import { CarOverViewDetail } from "@/Data/Car";
import { OverviewData } from "@/Data/Property";
import { DetailBodyItemType } from "@/Types/ProductType";
import SvgIcon from "@/utils/SvgIcon";
import { usePathname } from "next/navigation";
import React, { FC, Fragment } from "react";

const OverViewSection: FC<DetailBodyItemType> = ({ label, type }) => {
  const pathname = usePathname();
  const Part = pathname.split("/").map((item) => item.replace(SymbolRegex, " "));

  return (
    <Fragment>
      {type === "car" ? (
        <div className='detail-box' id='overview'>
          <h3 className='car-title'>{CarOverview}</h3>
          <ul className='overview-list'>
            {CarOverViewDetail.map((item, i) => {
              return (
                <li key={i}>
                  <div className='overview-icon'>
                    <SvgIcon iconId={`/car/sprite/detail.svg#${item.id}`} />
                  </div>
                  <div className='overview-info'>
                    <span>{item.label}</span>
                    <h6>{item.value}</h6>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className='detail-body' id='overview'>
          {label && <h4 className='detail-page-title'>{Overview}</h4>}
          <ul className='overview-list'>
            {OverviewData.map((item, index) => (
              <li className='overview-box' key={index}>
                <div className='overview-icon'>{Part[3] === "property-animated-icon" ? <img src={`${GifPath}/${item.gif}`} alt='g-1' className='img-fluid' /> : <SvgIcon iconId={`property/sprite/overview.svg#${item.svg}`} />}</div>
                <div className='overview-content'>
                  <h5>{item.title}</h5>
                  <span>{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default OverViewSection;
