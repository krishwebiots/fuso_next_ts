import JobMainDetail from "@/Components/Job/Detail/JobDetail2/MainDetail/JobMainDetail";
import { AboutRoleTitle, HowCanApplyTitle, IntroductionTitle, JobLikeTitle } from "@/Constants/Constants";
import { AboutRoleContent, HowCanApplyContent, IntroductionContent, JobLikeTitleContent } from "@/Data/Job";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import { PropertyDetailType } from "@/Types/ProductType";
import { FC, Fragment, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Benifits from "./DetailBody/DetailBodyItem/Benifits";
import JobDetailBox from "./DetailBody/DetailBodyItem/JobDetailBox";
import DetailSidebar from "./DetailSidebar";
import RelatedProperty from "./RelatedProperty";

const JobDetail: FC<PropertyDetailType> = ({ detailtype }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);

  return (
    <section className={`job-detail-section section-b-space ${detailtype === "detail-2" ? "pt-0" : ""}`}>
      <Fragment>
        <Container>
          {detailtype === "detail-2" && <JobMainDetail type={detailtype} />}
          <Row className='gy-lg-0 gy-4'>
            <Col className={`${detailtype === "detail-2" || detailtype === "detail-5" ? "col-xl-9 col-lg-8" : detailtype === "detail-3" ? "col-lg-7" : detailtype === "detail-4" ? "col-lg-8" : "col-lg-8"}`}>
              {detailtype === "detail-4" || detailtype === "detail-5"  ?<JobMainDetail type={detailtype} />:<></>}
              <div className='job-description'>
                {detailtype === "detail-3" && <JobDetailBox title={IntroductionTitle} content={IntroductionContent} />}
                <JobDetailBox title={AboutRoleTitle} content={AboutRoleContent} />
                {detailtype === "detail-2" || (detailtype === "detail-3" && <Benifits />)}
                <JobDetailBox title={JobLikeTitle} content={JobLikeTitleContent} list />
                <JobDetailBox title={HowCanApplyTitle} content={HowCanApplyContent} list />
              </div>
            </Col>
            <Col className={`${detailtype === "detail-2" || detailtype === "detail-5" ? "col-xl-3 col-lg-4" : detailtype === "detail-3" ? "col-lg-5" : detailtype === "detail-4" ? "col-lg-4" : "col-lg-4"}`}>
              <DetailSidebar type='job' detailtype={detailtype} />
            </Col>
            <RelatedProperty type='job' />
          </Row>
        </Container>
      </Fragment>
    </section>
  );
};

export default JobDetail;
