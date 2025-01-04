import { ImagePath, SVGPath } from "@/Constants/Constants";
import { ServiceData } from "@/Data/Demo/Demo1";
import RatioImage from "@/utils/RatioImage";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const AboutService = () => {
  return (
    <section className='car2-about job-category-section car-about-category section-b-space position-relative'>
      <Container>
        <Row className='m-auto align-items-center justify-content-between'>
          <Col lg={6} className='p-0 d-lg-inline-block d-none'>
            <div className='about-img'>
              <RatioImage src={`${ImagePath}/car2/service-img.jpg`} alt='about-img' className='img-fluid' />
            </div>
          </Col>
          <Col lg={6}>
            <div className='about-content'>
              <Row className='g-4'>
                {ServiceData.map((item, i) => {
                  return (
                    <Col key={i} sm={6}>
                      <div className='category-box'>
                        <Image width={54} height={74} src={`${SVGPath}/job/job-box/dots-category.svg`} alt='dots-category' className='img-fluid dot-img' />
                        <div className='category-icon'>{item.icon}</div>
                        <div className='category-title'>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutService;
