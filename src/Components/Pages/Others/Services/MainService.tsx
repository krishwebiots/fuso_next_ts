import CommonHeader from "@/Components/Themes/Common/CommonHeader";
import { ImagePath, ServiceTitle } from "@/Constants/Constants";
import { ServiceContentData, ServiceData } from "@/Data/Demo/Demo1";
import { Col, Container, Row } from "reactstrap";

const MainService = () => {
  return (
    <section className='service-page-first-section car-service-section'>
      <Container>
        <Row className='g-lg-5 gy-4'>
          <Col lg={6}>
            <div className='service-main-content'>
              <CommonHeader title={ServiceTitle} content={ServiceContentData} headClass='service-main-content' />
              <Row className='gy-4'>
                {ServiceData.map((service, index) => (
                  <Col sm='6' key={index}>
                    <div className='service-box'>
                      <div className='service-icon'>{service.icon}</div>
                      <div className='service-content'>
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className='service-img'>
              <img src={`${ImagePath}/other/s-1.jpg`} alt='s-1' className='img-fluid main-img' />
              <img src={`${ImagePath}/other/s-2.jpg`} alt='s-2' className='img-fluid sub-img' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainService;
