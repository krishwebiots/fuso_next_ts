"use client";
import { Fragment } from "react";
import JobDetailBreadCrumb from "../../Common/JobDetailBreadCrumb";
import JobDetail from "@/Components/Property/Common/PropertyDetail/JobDetail";

const JobDetail1Container = () => {
  return (
    <Fragment>
      <JobDetailBreadCrumb />
      <JobDetail/>
    </Fragment>
  );
};

export default JobDetail1Container;
