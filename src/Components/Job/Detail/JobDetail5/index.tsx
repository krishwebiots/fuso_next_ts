'use client';
import React, { Fragment } from 'react'
import JobDetailBreadCrumb from '../../Common/JobDetailBreadCrumb';
import JobDetail from '@/Components/Property/Common/PropertyDetail/JobDetail';

const JobDetail5Container = () => {
  return (
    <Fragment>
      <JobDetailBreadCrumb detailtype={"detail-4"} />
      <JobDetail detailtype={"detail-5"} />
    </Fragment>
  )
}

export default JobDetail5Container