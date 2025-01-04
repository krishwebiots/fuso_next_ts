'use client';
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import PricingCard from "./PricingCard";
import NewsLetter from "@/Components/Themes/JobDemo-1/NewsLetter";

const PricingContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Team' subTitle='Team' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image />
      <PricingCard />
      <NewsLetter mainclass='car-newsletter'/>
    </Fragment>
  );
};

export default PricingContainer;
