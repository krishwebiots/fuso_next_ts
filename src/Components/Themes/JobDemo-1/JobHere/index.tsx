import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonHeader from "../../Common/CommonHeader";
import { useAppSelector } from "@/Redux/Hooks";
import Job1DetailBox from "@/Components/CommonComponents/ProductBox/Job1DetailBox";
import { JobHereTitle } from "@/Constants/Constants";
import { JobHereContentData } from "@/Data/Demo/JobDemo1";

const JobHere = () => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <section className='job-box-section section-b-space'>
      <Container>
      <CommonHeader title={JobHereTitle} content={JobHereContentData} headClass="title-style-3 text-center" />
        <Row className='g-4'>
          {productItem.filter(({ id }) => id >= 16 && id <= 21).map((jobdata, i) => (
              <Col xl={4} md={6} key={i} data-aos="fade-up" data-aos-duration={200 * (i + 1)} >
                <Job1DetailBox data={jobdata} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default JobHere;
