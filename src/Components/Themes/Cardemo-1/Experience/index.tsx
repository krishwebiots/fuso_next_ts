import { Col, Container, Row } from "reactstrap";
import CommonHeader from "../../Common/CommonHeader";
import { ExperienceTitle } from "@/Constants/Constants";
import { ExperienceContentData } from "@/Data/Demo/Demo1";
import CustomerExperience from "./CustomerExperience";
import FeaturesExperience from "./FeaturesExperience";

const Experience = () => {
  return (
    <section className='car-experience-section section-b-space'>
      <Container>
        <CommonHeader title={ExperienceTitle} content={ExperienceContentData} headClass='title-style-2 dark-title' animation />
        <CustomerExperience />
        <FeaturesExperience />
      </Container>
    </section>
  );
};

export default Experience;
