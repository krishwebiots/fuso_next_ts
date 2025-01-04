'use client';
import GridView from "@/Components/Property/Common/GridView";
import { JobTitle } from "@/Constants/Constants";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import JobBreadCrumb from "../../Common/JobBreadCrumb";

const JobFullListContainer = () => {
  return (
    <Fragment>
      <JobBreadCrumb title={JobTitle} subTitle={JobTitle} url={RouteList.Home.JobDemo1} />
      <GridView type='job' sectionClass='job-list-section full-padding section-b-space' filterclass='job-sidebar' tagclass='job-list-header' fluid />
    </Fragment>
  );
};

export default JobFullListContainer;
