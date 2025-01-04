import { ApplyNow, Href, ImagePath, SVGPath } from "@/Constants/Constants";
import { useAppDispatch } from "@/Redux/Hooks";
import { deleteProduct } from "@/Redux/Reducers/ProductReducers";
import { ProductCardType } from "@/Types/ProductType";
import { dynamicNumber } from "@/utils";
import { RouteList } from "@/utils/RouteList";
import { Clock, Location, Trash } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import toast from "react-hot-toast";

const Job1DetailBox: FC<ProductCardType> = ({ data, wishlist,jobid }) => {
  const dispatch = useAppDispatch();
  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
    toast.success("Job successfully Removed !");
  };
  return (
    <div className='job-box'>
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

        {wishlist ? (
          <Link href={Href} className='remove-button' onClick={() => jobid && handleDelete(jobid)}>
            <Trash className='iconsax' color='black' size={20} />
          </Link>
        ) : (
          <Link href={RouteList.Job.JobWishlist} onClick={() => toast.success("successfully added in wishlist !")} className='save-btn'>
            <i className='ri-bookmark-line' />
          </Link>
        )}
      </div>
      <div className='job-tag'>
        <label>
          <Image height={18} width={18} src={`${SVGPath}/job/job-box/dollar-circle.svg`} alt='dollar-circle' className='img-fluid' />
          {data.salary}K USD
        </label>
        <label>
          <Image height={18} width={18} src={`${SVGPath}/job/job-box/briefcase.svg`} alt='briefcase' className='img-fluid' />
          {data.jobType?.slice(0, 1).map((job) => job)}
        </label>
      </div>
      <p className='text-wrap'>{data.description}</p>
      <ul className='post-time'>
        <li>
          <Location className='iconsax' size={18} color='black' />
          <span>{data.location}</span>
        </li>
        <li>
          <Clock className='iconsax' size={18} color='black' />
          <span>{data.time}</span>
        </li>
      </ul>
      <div className='btn-flex'>
        <ul className='round-photo'>
          {dynamicNumber(4).map((img, i) => {
            return (
              <li key={i}>
                <Image height={36} width={36} src={`${ImagePath}/job/job-box/${img}.jpg`} alt='j-1' className='img-fluid' />
              </li>
            );
          })}
        </ul>
        <Link href={RouteList.Pages.Other.ContactUs1} className='arrow-btn'>
          {ApplyNow} <i className='ri-arrow-right-up-line' />
        </Link>
      </div>
    </div>
  );
};

export default Job1DetailBox;
