"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import NewsLetter from "@/Components/Themes/JobDemo-1/NewsLetter";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import FaqMain from "./FaqMain";
import FaqAnswer from "./FaqAnswer";

const FaqPageContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title='FAQ' subTitle='FAQ' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image />
      <FaqMain />
      <NewsLetter mainclass='car-newsletter' />
      <FaqAnswer/>
    </Fragment>
  );
};

export default FaqPageContainer;
