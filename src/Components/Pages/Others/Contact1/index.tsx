"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { GetInTouchTitle, ImagePath } from "@/Constants/Constants";
import { Contact1Description } from "@/Data/Pages/Others";
import RatioImage from "@/utils/RatioImage";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import ContactForm from "../Common/ContactForm";
import GetInTouch from "../Common/GetInTouch";
import Map from "../Common/Map";

const Contact1Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Contact Us' subTitle='Contact Us' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image />
      <section className='contact-section'>
        <Container>
          <div className='content-title'>
            <h2>{GetInTouchTitle}</h2>
            <p>{Contact1Description}</p>
          </div>
          <GetInTouch type='contact-1' />
          <div className='section-t-md-space'>
            <Row className='g-lg-5 gy-4'>
              <Col lg={7} md={6}>
                <ContactForm />
              </Col>
              <Col lg={5} md={6}>
                <Map subclass='height-map' />
              </Col>
            </Row>
          </div>
        </Container>
        <div className='text-center section-t-space overflow-hidden'>
          <RatioImage src={`${ImagePath}/other/contact.png`} alt='contact' className='img-fluid contact-image' />
        </div>
      </section>
    </Fragment>
  );
};

export default Contact1Container;
