import { SVGPath, ViewDetails } from "@/Constants/Constants";
import { Job3CardType } from "@/Types/ProductType";
import { RouteList } from "@/utils/RouteList";
import { Clock, Location } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Job3DetailBox: FC<Job3CardType> = ({ data, activeTab }) => {
  return (
    <div className='job-box demo-job-box3'>
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
        <Clock className='iconsax' size={16} color='#999999' />
          <span>{data.time}</span>
        </div>
      </div>
      <p>{data.description}</p>
      <div className='job-tag'>
        <label>{activeTab}</label>
        <label>{data.salary}</label>
      </div>
      <div className='location-flex'>
        <div className='post-time'>
        <Location className='iconsax' size={16} color='#999999' />
          <span>{data.location}</span>
        </div>
        <Link href={RouteList.Job.Detail.JobDetail1} className='text-btn'>
          {ViewDetails}
        </Link>
      </div>
    </div>
  );
};

export default Job3DetailBox;
