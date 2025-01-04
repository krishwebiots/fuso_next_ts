import { ApplyNow, ImagePath, SVGPath } from "@/Constants/Constants";
import { ProductCardType } from "@/Types/ProductType";
import { dynamicNumber } from "@/utils";
import { RouteList } from "@/utils/RouteList";
import { Clock, Location } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Job2DetailBox: FC<ProductCardType> = ({ data }) => {
  return (
    <div className='job-box dark-job-box'>
      <span className='border-bg' />
      <div className='job-title-flex'>
        <div className='job-title'>
          <div className='job-icon'>
            {data.image.map((srcImage, i) => {
              return <Image height={50} width={50} key={i} src={`${SVGPath}/${srcImage}`} alt='j-1' className='img-fluid' />;
            })}
          </div>
          <Link href={RouteList.Job.Detail.JobDetail1} className='job-detail'>
            <span>{data.company}</span>
            <h5>{data.title}</h5>
          </Link>
        </div>
        <div className='post-time'>
          <Clock className='iconsax' size={16} color='white' />
          <span>{data.time}</span>
        </div>
      </div>
      <p>{data.description}</p>
      <div className='btn-flex'>
        <ul className='round-photo'>
          {dynamicNumber(4).map((item, i) => {
            return (
              <li key={i}>
                <Image height={36} width={36} src={`${ImagePath}/job/job-box/${item}.jpg`} alt='j-1' className='img-fluid' />
              </li>
            );
          })}
        </ul>
        <div className='post-time'>
          <Location className='iconsax' size={16} color='white' />
          <span>{data.location}</span>
        </div>
      </div>
      <div className='job-tag'>
        <label>Part Time</label>
        <label>Full Time</label>
        <Link href={RouteList.Pages.Other.ContactUs1} className='border-pills'>
          {ApplyNow}
        </Link>
      </div>
    </div>
  );
};

export default Job2DetailBox;
