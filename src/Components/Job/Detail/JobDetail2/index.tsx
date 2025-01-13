'use client';
import React, { Fragment } from 'react'
import JobDetailBreadCrumb from '../../Common/JobDetailBreadCrumb';
import JobDetail from '@/Components/CommonComponents/ProductDetail/JobDetail';

const JobDetail2Container = () => {
  return (
    <Fragment>
      <JobDetailBreadCrumb detailtype={'detail-2'}/>
      <JobDetail detailtype={'detail-2'}/>
    </Fragment>
  )
}

export default JobDetail2Container