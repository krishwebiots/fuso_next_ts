import React from "react";
import { Container } from "reactstrap";
import Mainpage from "./Mainpage";
import Job1Filter from "./Job1Filter";

const Job1HomeSection = () => {
  return (
    <section className='job-home-section'>
      <Container>
        <Mainpage/>
        <Job1Filter/>
      </Container>
    </section>
  );
};

export default Job1HomeSection;
