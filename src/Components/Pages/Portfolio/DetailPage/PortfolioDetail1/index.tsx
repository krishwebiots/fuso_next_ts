"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { RouteList } from "@/utils/RouteList";
import React from "react";
import DetailContent from "../Common/DetailContent";
import PortfolioDetailContent from "../Common/DetailContent";
import { OurApproachData, ResultsImpactData, TheChallengeData, ThesolutionData } from "@/Data/Pages/Portfolio";
import { Container } from "reactstrap";
import { ImagePath } from "@/Constants/Constants";
import RatioImage from "@/utils/RatioImage";

const PortfolioDetail1Container = () => {
  return (
    <div>
      <Breadcrumbs title='Portfolio' subTitle='Portfolio' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' />
      <section className='section-b-space portfolio-detail-section'>
        <Container>
          <div className='top-section section-b-space ratio_45'>
            <div className='main-top-image'>
              <RatioImage src={`${ImagePath}/portfolio/detail-images/1.jpg`} alt='pd-1' className='img-fluid bg-img' />
            </div>
            <div className='brand-flex'>
              <span>
                <strong>Brand: </strong>Mercedes-Benz
              </span>
              <span>
                <strong>Date: </strong>28-08-2024
              </span>
            </div>
          </div>
          <PortfolioDetailContent title='The Challenge' image='2' data={TheChallengeData} />
          <PortfolioDetailContent title='Our Approach' image='3' data={OurApproachData} rightside />
          <PortfolioDetailContent title='The Solution' image='4' data={ThesolutionData} />
          <PortfolioDetailContent title='Results &amp; Impact' image='5' data={ResultsImpactData} rightside />
        </Container>
      </section>
    </div>
  );
};

export default PortfolioDetail1Container;
