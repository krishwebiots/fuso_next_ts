"use client";
import React, { Fragment } from "react";
import JobBreadCrumb from "../../Common/JobBreadCrumb";
import GridView from "@/Components/CommonComponents/GridView";
import { JobTitle } from "@/Constants/Constants";
import { RouteList } from "@/utils/RouteList";

const JobLeftDrawerContainer = () => {
  return (
    <Fragment>
      <JobBreadCrumb title={JobTitle} subTitle={JobTitle} url={RouteList.Home.JobDemo1} />
      <GridView type='job' sectionClass='job-grid-section section-b-space' filterclass='job-sidebar' tagclass='job-list-header' side='nosidebar' gridSize={3} cardShow={9} jobads/>
    </Fragment>
  );
};

export default JobLeftDrawerContainer;
