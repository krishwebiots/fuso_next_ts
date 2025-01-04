"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import About from "@/Components/Themes/Cardemo-1/About";
import JobReview from "@/Components/Themes/JobDemo-1/JobReview";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import BrowseCategory from "./BrowseCategory";

const About1Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title='About' subTitle='About' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image/>
      <About header />
      <BrowseCategory />
      <JobReview />
    </Fragment>
  );
};

export default About1Container;
