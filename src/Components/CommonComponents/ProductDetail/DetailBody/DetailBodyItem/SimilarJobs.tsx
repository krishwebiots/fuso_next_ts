import { SVGPath } from "@/Constants/Constants";
import { ProductCardType } from "@/Types/ProductType";
import { Clock } from "iconsax-react";
import Image from "next/image";
import React, { FC } from "react";

const SimilarJobs: FC<ProductCardType> = ({ data }) => {
  return (
    <div className='sidebar-job-box'>
      <div className='job-title-flex'>
        <div className='job-title'>
          {data.image.map((srcImage, i) => {
            return <Image height={50} width={50} key={i} src={`${SVGPath}/${srcImage}`} alt='j-1' className='img-fluid' />;
          })}
          <a href='job-left-sidebar.html' className='job-detail'>
            <h5>{data.title}</h5>
            <span>
              {data.company} <span>{data.location}</span>
            </span>
          </a>
        </div>
        <a href='#!' className='save-btn'>
          <i className='ri-bookmark-line' />
        </a>
      </div>
      <div className='job-flex'>
        <div className='job-tag'>
          <label>
            <Image height={18} width={18} src={`${SVGPath}/job/job-box/dollar-circle.svg`} alt='dollar-circle' className='img-fluid' />
            {data.salary}K USD
          </label>
          <label>
            <Image height={18} width={18} src={`${SVGPath}/job/job-box/briefcase.svg`} alt='briefcase' className='img-fluid' />
            {data.jobType?.slice(0, 1).map((job) => job.replace("_", " "))}
          </label>
        </div>
        <div className='post-time'>
          <span>
            <Clock className='iconsax' size={18} color='black' />
            {data.time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SimilarJobs;
