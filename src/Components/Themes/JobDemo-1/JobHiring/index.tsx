import { JobHiringTitle } from "@/Constants/Constants";
import { JobHiringTitleContent } from "@/Data/Demo/JobDemo1";
import { useAppSelector } from "@/Redux/Hooks";
import { Col, Container, Row } from "reactstrap";
import CommonHeader from "../../Common/CommonHeader";
import JobHireCard from "../../Common/JobHireCard";

const JobHiring = () => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <section className='job-hire-section section-b-space'>
      <Container>       
        <CommonHeader title={JobHiringTitle} content={JobHiringTitleContent} headClass="title-style-3 text-center"/>
        <Row className='gy-4 justify-content-center'>
          {productItem.filter(({ id }) => [17, 19, 21, 22, 23, 24, 25, 26].includes(id)).map((job, i) => (
              <Col xl={3} lg={4} sm={6} data-aos='fade-up' key={i}>
                <JobHireCard key={job.id} data={job} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default JobHiring;
