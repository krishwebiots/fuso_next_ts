import { SVGPath } from "@/Constants/Constants";
import { ProductCardType } from "@/Types/ProductType";
import { RouteList } from "@/utils/RouteList";
import { Clock, Location } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import toast from "react-hot-toast";
import { Label } from "reactstrap";

const Job8DetailBox: FC<ProductCardType> = ({ data }) => {
  const reviewdata = Math.floor(Math.random() * 100);
  return (
    <div className='job-box list-box-2'>
      <div className='job-title-flex'>
        <div className='job-title'>
          <div className='job-icon'>
            {data.image.map((srcImage, i) => {
              return <Image height={50} width={50} key={i} src={`${SVGPath}/${srcImage}`} alt='j-1' className='img-fluid' />;
            })}
          </div>
          <Link href={RouteList.Job.Detail.JobDetail1} className='job-detail'>
            <span>
              {data.company}
              <span>
                <i className='ri-star-fill' />
                {data.rating}
              </span>
              {reviewdata} Review
            </span>
            <h5>{data.title}</h5>
          </Link>
        </div>
        <Link href={RouteList.Job.JobWishlist} onClick={() => toast.success("successfully added in wishlist !")} className='save-btn'>
          <i className='ri-bookmark-line' />
        </Link>
      </div>
      <ul className='skill-list'>
        {data.skills?.map((item, i) => (
          <li key={i}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className='job-tag-flex'>
        <div className='job-tag'>
          <Label>
            <Image height={18} width={18} src={`${SVGPath}/job/job-box/dollar-circle.svg`} alt='dollar-circle' className='img-fluid' />
            {data.salary}K USD
          </Label>
          <Label>
            <Image height={18} width={18} src={`${SVGPath}/job/job-box/briefcase.svg`} alt='briefcase' className='img-fluid' />
            {data.jobType?.slice(0, 1).map((job) => job.replace("_", " "))}
          </Label>
          <Label>
            <Image height={18} width={18} src={`${SVGPath}/job/job-box/eye-line.svg`} alt='eye-line' className='img-fluid' />
            25 People View
          </Label>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-between flex-wrap'>
        <div className='post-time'>
          <div className='post-flex'>
            <div className='post-item'>
              <Location className='iconsax' size={18} color='black' />
              <span>{data.location}</span>
            </div>
            <div className='post-item'>
              <Clock className='iconsax' size={16} color='black' />
              <span>{data.time}</span>
            </div>
          </div>
        </div>
        <Link href={RouteList.Pages.Other.ContactUs1} className='arrow-btn'>
          Apply Now <i className='ri-arrow-right-up-line' />
        </Link>
      </div>
    </div>
  );
};

export default Job8DetailBox;
