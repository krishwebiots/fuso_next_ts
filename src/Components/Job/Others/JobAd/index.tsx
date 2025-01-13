'use client';
import { JobTitle } from '@/Constants/Constants';
import React, { Fragment } from 'react'
import JobBreadCrumb from '../../Common/JobBreadCrumb';
import { RouteList } from '@/utils/RouteList';
import GridView from "@/Components/CommonComponents/GridView";

const JobAdContainer = () => {
  return (
    <Fragment>
      <JobBreadCrumb title={JobTitle} subTitle={JobTitle} url={RouteList.Home.JobDemo1} />
      <GridView type='job' sectionClass='job-list-section section-b-space' filterclass='job-sidebar' tagclass='job-list-header' detailboxstyle='job-ads' gridSize={1} cardShow={8}  />
    </Fragment>
  )
}

export default JobAdContainer