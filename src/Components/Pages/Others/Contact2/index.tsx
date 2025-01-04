"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import CommonHeader from "@/Components/Themes/Common/CommonHeader";
import { GetInTouchTitle } from "@/Constants/Constants";
import { Contact1Description } from "@/Data/Pages/Others";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import ContactForm from "../Common/ContactForm";
import GetInTouch from "../Common/GetInTouch";
import Map from "../Common/Map";
import ContactInfoCard from "./ContactInfoCard";

const Contact2Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Contact Us' subTitle='Contact Us' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image />
      <section className='contact-section section-b-space'>
        <Container>
          <CommonHeader title={GetInTouchTitle} content={Contact1Description} headClass='content-title text-start' />
          <Row className='gy-4 justify-content-center'>
            <ContactInfoCard />
          </Row>
          <div className='section-t-md-space right-contact'>
            <Row className='g-lg-5 gy-4'>
              <Col lg={5} md={6}>
                <GetInTouch type='contact-2' />
              </Col>
              <Col lg={7} md={6}>
                <ContactForm />
              </Col>
            </Row>
          </div>
          <div className='section-t-md-space'>
            <Map subclass='height-map' />
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Contact2Container;
