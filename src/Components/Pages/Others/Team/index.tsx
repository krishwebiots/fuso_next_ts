"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import TeamGrid from "./TeamGrid";
import TeamDetail from "./TeamDetail";

const TeamContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Team' subTitle='Team' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image />
      <TeamGrid />
      <TeamDetail/>
    </Fragment>
  );
};

export default TeamContainer;
