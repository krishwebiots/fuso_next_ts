"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import Testimonials from "@/Components/Themes/Cardemo-1/Testimonials";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import MainService from "./MainService";
import Score from "./Score";

const ServicesContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Services' subTitle='Services' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image />
      <MainService />
      <Score />
      <Testimonials service />
    </Fragment>
  );
};

export default ServicesContainer;
