"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import AboutService from "./AboutService";
import WelcomeSection from "./WelcomeSection";
import Testimonials from "@/Components/Themes/Cardemo-1/Testimonials";

const About2Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title='About' subTitle='About' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image/>
      <WelcomeSection />
      <AboutService />
      <Testimonials/>
    </Fragment>
  );
};

export default About2Container;
