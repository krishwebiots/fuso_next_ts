import { ImagePath, OurTestimonial, SVGPath } from "@/Constants/Constants";
import { PropertyTestimonialData } from "@/Data/Demo/PropertyDemo1";
import { RouteList } from "@/utils/RouteList";
import { Col, Container, Row } from "reactstrap";
import CommonHeader from "../../Common/CommonHeader";
import Image from "next/image";

const PropertyTestimonial = () => {
  return (
    <section className='property-testimonials-section section-b-space bg-color'>
      <Container>
        <CommonHeader title={OurTestimonial} headClass='title-style-1' subClass='horizontal-title' url={RouteList.Pages.Other.Testimonial} view />
        <Row className='justify-content-center gy-lg-0 gy-4'>
          {PropertyTestimonialData.map((item, i) => {
            return (
              <Col lg={4} md={6} key={i}>
                <div className='testimonials-box'>
                  <div className='testimonials-profile'>
                    <Image height={87} width={87} src={`${ImagePath}/property/testimonial/${i + 1}.jpg`} alt='testimonial-img' className='img-fluid' />
                    <div>
                      <h3>{item.name}</h3>
                      <h6>{item.name}</h6>
                    </div>
                  </div>
                  <div className='testimonial-content'>
                    <p>{item.review}</p>
                    <Image width={46} height={44} src={`${SVGPath}/property/quote.svg`} alt='quote' className='img-fluid' />
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default PropertyTestimonial;
