import { ImagePath } from "@/Constants/Constants";
import { Details, FooterDetailData, HeaderClassMapfooter } from "@/Data/Layout/Footer";
import { PathTypes } from "@/Types/LayoutType";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import FooterSearch from "./FooterSearch";
import FooterSocial from "./FooterSocial";
import FooterDetailSection from "./FooterDetailSection";

const FooterDemo2: React.FC<PathTypes> = ({ part }) => {
  const slicedData = FooterDetailData.slice(2, 5).reverse();
  let footerClass = "job3-footer";

  if (part?.includes("job-2")) {
    footerClass = "dark-footer-section section-t-space";
  } else {
    footerClass += ` ${HeaderClassMapfooter[part || ""] || ""}`;
  }
  return (
    <footer className={`${footerClass}`}>
      <Container>
        {!part?.includes("job-2") && <FooterSearch part={part}  />}
        <div className='dark-job-footer'>
          <Row className='justify-content-between gy-lg-0 gy-sm-4 gy-3'>
            <Col lg='4'>
              <FooterSocial details={Details[1]} endPoint={4} />
            </Col>
            <FooterDetailSection data={slicedData} />
          </Row>
        </div>
        <div className='copyright-box'>
          <p>@ 2024 All Rights Reserved</p>
          <Image height={100} width={100} src={`${ImagePath}/dark-job/payment-img.png`} alt='payment-img' className='img-fluid' />
        </div>
      </Container>
    </footer>
  );
};

export default FooterDemo2;
