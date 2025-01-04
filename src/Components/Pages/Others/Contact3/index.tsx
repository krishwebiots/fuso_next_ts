import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { RouteList } from "@/utils/RouteList";
import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import ContactForm from "../Common/ContactForm";
import GetInTouch from "../Common/GetInTouch";
import Map from "../Common/Map";
import { Talk } from "@/Constants/Constants";
import { contactus3Description } from "@/Data/Pages/Others";

const Contact3Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Contact Us' subTitle='Contact Us' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image />
      <section className='contact-section section-b-space'>
        <Container>
          <Row className='gx-md-5 gy-4'>
            <Col lg={7} md={6}>
              <div className='left-contact'>
                <div className='content-title text-start'>
                  <h2>{Talk}</h2>
                  <p className='mx-0'>{contactus3Description}</p>
                </div>
                <ContactForm />
              </div>
            </Col>
            <Col lg={5} md={6}>
              <div className='right-contact'>
                <Map />
                <GetInTouch type='contact-3' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Contact3Container;
