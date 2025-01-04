"use client";
import GridView from "@/Components/Property/Common/GridView";
import { JobTitle } from "@/Constants/Constants";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import JobBreadCrumb from "../../Common/JobBreadCrumb";

const JobFilterContainer = () => {
  return (
    <Fragment>
      <JobBreadCrumb title={JobTitle} subTitle={JobTitle} url={RouteList.Home.JobDemo1} />
      <GridView type='job' sectionClass='job-grid-section section-b-space' filterclass='job-sidebar' tagclass='job-list-header' tagfilter/>
    </Fragment>
  );
};

export default JobFilterContainer;
