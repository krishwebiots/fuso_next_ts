"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import Car2Testimonial from "@/Components/Themes/Cardemo-2/Car2Testimonial";
import ServiceSection from "@/Components/Themes/Cardemo-2/Service";
import StepBooking from "@/Components/Themes/Cardemo-2/StepBooking";
import { RouteList } from "@/utils/RouteList";
import React, { Fragment } from "react";
import TeamAbout from "./TeamAbout";

const About3Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title='About' subTitle='About' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image/>
      <ServiceSection about />
      <StepBooking/>
      <Car2Testimonial about/>
      <TeamAbout/>
    </Fragment>
  );
};

export default About3Container;
