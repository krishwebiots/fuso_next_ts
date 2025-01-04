import { CommentTitle, ImagePath, LeaveCommentTitle } from "@/Constants/Constants";
import { ReviewBlog } from "@/Data/Pages/Blog";
import { useAppDispatch } from "@/Redux/Hooks";
import { setReviewModal } from "@/Redux/Layout/LayoutReducers";
import { Clock, MessageEdit } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { Rating } from "react-simple-star-rating";
import { Button } from "reactstrap";
import ReviewModal from "../Modal/ReviewModal";

const BlogComment = () => {
  const dispatch = useAppDispatch();
  return (
    <div className='detail-box review-detail'>
      <div className='modal-btn-flex'>
        <h3 className='car-title'>{CommentTitle}</h3>
        <Button color='transperent' className='text-btn' onClick={() => dispatch(setReviewModal())}>
           <MessageEdit size={18} className='iconsax' color='#188AEC' /> {LeaveCommentTitle}
        </Button>
      </div>
      <ul className='review-main-list'>
        {ReviewBlog.map((item, i) => {
          return (
            <li className={`review-box ${i === 1 ? "replay-box" : ""}`} key={i}>
              <div className='review-profile'>
                <Image height={70} width={70} src={`${ImagePath}${item.profileImage}`} alt='p-1' className='img-fluid' />
                <div className='profile-flex'>
                  <div>
                    <h6>{item.name}</h6>
                    <ul className='rating'>
                      <Rating size={15} initialValue={item.rating} /> 
                      <li><span>{item.rating}</span></li>
                      </ul>
                  </div>
                  <span>
                    <Clock className='iconsax' size={16} color="#ADADAD"/> {item.reviewDate}
                  </span>
                </div>
              </div>
              <p>{item.reviewText}</p>
            </li>
          );
        })}        
      </ul>
      <ReviewModal type="blog"/>
    </div>
  );
};

export default BlogComment;
