"use client";
import { ImagePath } from "@/Constants/Constants";
import RatioImage from "@/utils/RatioImage";
import { Container } from "reactstrap";
import LoginMain from "../Common/LoginMain";

const Login2Container = () => {
  return (
    <section className='pt-0 login-section login-2 overflow-hidden'>
      <RatioImage src={`${ImagePath}/other/s-1.jpg`} alt='s1' className='bg-img' />
      <Container className='h-100'>
        <div className='position-relative h-100'>
          <LoginMain />
        </div>
      </Container>
    </section>
  );
};

export default Login2Container;
