import { OurServiceTitle, SVGPath } from "@/Constants/Constants";
import { PropertyServiceContent, PropertyServiceData, ProvideServices } from "@/Data/Demo/PropertyDemo1";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import CommonHeader from "../../Common/CommonHeader";

const Property1Service = () => {
  return (
    <section className='section-b-space property-service-section'>
      <Container>
        <Row className='gx-lg-5 gy-lg-0 gy-4 align-items-center'>
          <Col lg={9} className='order-lg-0 order-1'>
            <div className='service-main'>
              <Row className='g-0 justify-content-between'>
                {PropertyServiceData.map((item, index) => {
                  return (
                    <Col key={index} xl={4} md={6}>
                      <div className='service-box'>
                        <div className='service-icon'>
                          <Image width={98} height={98} src={`${SVGPath}/property/service/${index + 1}.svg`} alt='service-1' className='img-fluid' />
                        </div>
                        <div className='service-content'>
                          <h5>{item.title}</h5>
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
          <Col lg={3}>            
            <CommonHeader title={OurServiceTitle} content={PropertyServiceContent} headClass="title-style-1"/>
            <ul className='service-list'>
              {ProvideServices.map((item, index) => {
                return (
                  <li key={index}>
                    <Image width={16} height={16} src={`${SVGPath}/property/service/arrow_5.svg`} alt='service-1' className='img-fluid' />
                    <h6>{item}</h6>
                  </li>
                );
              })}
            </ul>
            <div className='service-circle'>
              <Image width={119} height={108} src={`${SVGPath}/property/service/service-circle.svg`} alt='' className='img-fluid' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Property1Service;
