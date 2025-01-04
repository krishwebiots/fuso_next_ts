'use client';
import React, { Fragment } from "react";
import JobDetailBreadCrumb from "../../Common/JobDetailBreadCrumb";
import JobDetail from "@/Components/Property/Common/PropertyDetail/JobDetail";

const JobDetail3Container = () => {
  return (
    <Fragment>
      <JobDetailBreadCrumb detailtype={"detail-3"} />
      <JobDetail detailtype={"detail-3"} />
    </Fragment>
  );
};

export default JobDetail3Container;
