'use client';
import React, { Fragment } from 'react'
import JobBreadCrumb from '../../Common/JobBreadCrumb';
import GridView from '@/Components/Property/Common/GridView';
import { RouteList } from '@/utils/RouteList';
import { JobTitle } from '@/Constants/Constants';

const JobGrid2Container = () => {
  return (
    <Fragment>
      <JobBreadCrumb title={JobTitle} subTitle={JobTitle} url={RouteList.Home.JobDemo1} />
      <GridView type='job' sectionClass='job-grid-section section-b-space' filterclass='job-sidebar' tagclass='job-list-header' />
    </Fragment>
  )
}

export default JobGrid2Container