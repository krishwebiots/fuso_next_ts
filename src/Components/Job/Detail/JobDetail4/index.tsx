"use client";
import React, { Fragment } from "react";
import JobDetailBreadCrumb from "../../Common/JobDetailBreadCrumb";
import JobDetail from "@/Components/CommonComponents/ProductDetail/JobDetail";

const JobDetail4Container = () => {
  return (
    <Fragment>
      <JobDetailBreadCrumb detailtype={"detail-4"} />
      <JobDetail detailtype={"detail-4"} />
    </Fragment>
  );
};

export default JobDetail4Container;
