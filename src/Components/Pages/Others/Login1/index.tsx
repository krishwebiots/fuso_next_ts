"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { ImagePath } from "@/Constants/Constants";
import RatioImage from "@/utils/RatioImage";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import LoginMain from "../Common/LoginMain";

const Login1Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Log In' subTitle='Log In' url={RouteList.Home.CarDemo1} mainclass='car-breadcrumbs-section' image />
      <section className='section-b-space login-section'>
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col xl={7} lg={6} className='d-lg-inline-block d-none'>
              <div className='login-img'>
                <RatioImage src={`${ImagePath}/other/1.png`} alt='login-img' className='img-fluid' />
              </div>
            </Col>
            <Col xl={5} lg={6} sm={8}>
              <LoginMain/>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Login1Container;
