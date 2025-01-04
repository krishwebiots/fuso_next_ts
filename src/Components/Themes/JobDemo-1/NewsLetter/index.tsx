import React, { FC } from "react";
import { Button, Container, Input, InputGroup } from "reactstrap";
import CommonHeader from "../../Common/CommonHeader";
import { NewsletterTitle, Subscribe } from "@/Constants/Constants";
import { NewsletterContentData } from "@/Data/Demo/JobDemo1";

const NewsLetter: FC<{ mainclass?: string }> = ({ mainclass }) => {
  return (
    <section className={` ${mainclass ? mainclass : ""} job-newsletter-section section-b-space`}>
      <Container>
        <div className='job-newsletter-box'>
          <div className='newsletter-content'>
            <CommonHeader title={NewsletterTitle} content={NewsletterContentData} headClass='title-style-3 dark-title' />
            <InputGroup>
              <Input type='email' placeholder='Your mail address' />
              <Button className='btn-solid'>{Subscribe}</Button>
            </InputGroup>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
