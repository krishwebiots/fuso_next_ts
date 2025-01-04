import { ContactUs } from "@/Constants/Constants";
import { ContactFormInputs } from "@/Types/OtherType";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Col, Row } from "reactstrap";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();
  const onSubmitData: SubmitHandler<ContactFormInputs> = (data) => {
    console.log("Contact Submitted:", data);
    reset();
  };
  return (
    <div className='form-box'>
      <h3 className='contact-title'>{ContactUs}</h3>
      <form className='login-form contact-form' onSubmit={handleSubmit(onSubmitData)}>
        <Row>
          <Col lg={6}>
            <div className='form-input'>
              <input type='text' {...register("firstname", { required: "firstname is required" })} placeholder='First Name' className={`form-control ${errors.firstname ? "is-invalid" : ""}`} />
              {errors.firstname && <div className='invalid-feedback'>{errors.firstname.message}</div>}
            </div>
          </Col>
          <Col lg={6}>
            <div className='form-input'>
              <input type='text' {...register("lastname", { required: "lastname is required" })} placeholder='Last Name' className={`form-control ${errors.lastname ? "is-invalid" : ""}`} />
              {errors.lastname && <div className='invalid-feedback'>{errors.lastname.message}</div>}
            </div>
          </Col>
          <Col lg={6}>
            <div className='form-input'>
              <input
                type='number'
                {...register("number", {
                  required: "Number is required",
                  minLength: {
                    value: 10,
                    message: "Phone number must be at least 10 digits",
                  },
                  maxLength: {
                    value: 15,
                    message: "Phone number must not exceed 15 digits",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Phone number must contain only numbers",
                  },
                })}
                placeholder='Phone Number'
                className={`form-control ${errors.number ? "is-invalid" : ""}`}
              />
              {errors.number && <div className='invalid-feedback'>{errors.number.message}</div>}
            </div>
          </Col>
          <Col lg={6}>
            <div className='form-input'>
              <input type='email' {...register("email", { required: "email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email address" } })} placeholder='Email' className={`form-control ${errors.email ? "is-invalid" : ""}`} />
              {errors.email && <div className='invalid-feedback'>{errors.email.message}</div>}
            </div>
          </Col>
          <Col xs={12}>
            <div className='form-input'>
              <textarea {...register("message", { required: "message is required", min: 10, max: 10 })} placeholder='Message' className={`form-control mb-0 ${errors.message ? "is-invalid" : ""}`} defaultValue={""} />
              {errors.message && <div className='invalid-feedback'>{errors.message.message}</div>}
            </div>
          </Col>
          <Col xl={4} lg={5} xs={8}>
            <Button className='btn-solid'>Send Message</Button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default ContactForm;
