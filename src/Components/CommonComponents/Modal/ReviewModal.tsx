import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setReviewModal } from "@/Redux/Layout/LayoutReducers";
import { DetailBodyItemType, ReviewFormInputs } from "@/Types/ProductType";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import CloseBtn from "../CloseBtn";
import { FC } from "react";
import { InitialModalRatings } from "@/Data/Car";
import { Rating } from "react-simple-star-rating";

const ReviewModal: FC<DetailBodyItemType> = ({ type, label }) => {
  const dispatch = useAppDispatch();
  const { reviewModal } = useAppSelector((state) => state.layout);
  const toggle = () => dispatch(setReviewModal());
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReviewFormInputs>();
  const onSubmit: SubmitHandler<ReviewFormInputs> = (data) => {
    console.log("Review Submitted:", data);
    reset();
    toggle();
  };

  return (
    <Modal size='lg' scrollable fade modalClassName='theme-modal review-modal' isOpen={reviewModal} toggle={toggle}>
      <div className='modal-content'>
        <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
        <ModalBody>
          <div>
            <h4 className='detail-page-title'>{type === 'car' ?`Add a Review`:type === 'blog' ?`Leave a Comment`:'Write a Review'}</h4>
            {type === "car" && (
              <Row>
                <Col lg={6}>
                  {InitialModalRatings.slice(0, 3).map((item, i) => {
                    return (
                      <ul className='add-review-list' key={i}>
                        <li className='add-review-item'>
                          <span className="mb-2">{item.criteria}</span>
                          <ul className='rating'>
                            <Rating initialValue={item.rating} size={20}/>                             
                          </ul>
                        </li>
                      </ul>
                    );
                  })}
                </Col>
                <Col lg={6}>
                  {InitialModalRatings.slice(3).map((item, i) => {
                    return (
                      <ul className='add-review-list' key={i}>
                        <li className='add-review-item'>
                          <span className="mb-2">{item.criteria}</span>
                          <ul className='rating'>
                            <Rating initialValue={item.rating} size={20}/>                             
                          </ul>
                        </li>
                      </ul>
                    );
                  })}
                </Col>
              </Row>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className='row gy-sm-4 gy-3'>
              <Col sm={6}>
                <div className='review-input'>
                  <input type='text' className={`form-control ${errors.name ? "is-invalid" : ""}`} placeholder='Enter Your Name' {...register("name", { required: "Name is required" })} />
                  {errors.name && <div className='invalid-feedback'>{errors.name.message}</div>}
                </div>
              </Col>
              <Col sm={6}>
                <div className='review-input'>
                  <input
                    type='email'
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder='Enter Your E-mail'
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && <div className='invalid-feedback'>{errors.email.message}</div>}
                </div>
              </Col>
              <Col xs={12}>
                <div className='review-input'>
                  <textarea className={`form-control ${errors.message ? "is-invalid" : ""}`} placeholder='Message' {...register("message", { required: "Message is required" })} />
                  {errors.message && <div className='invalid-feedback'>{errors.message.message}</div>}
                </div>
              </Col>
              <Col xs={12}>
                <div className='review-input'>
                  <Button className='btn-solid'>Submit Review</Button>
                </div>
              </Col>
            </form>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default ReviewModal;
