'use client';
import React, { Fragment } from 'react'
import { RouteList } from '@/utils/RouteList'
import { JobTitle } from '@/Constants/Constants'
import GridView from '@/Components/Property/Common/GridView';
import JobBreadCrumb from '../../Common/JobBreadCrumb';

const JobGridProgressContainer = () => {
  return (
    <Fragment>
        <JobBreadCrumb title={JobTitle} subTitle={JobTitle} url={RouteList.Home.JobDemo1}/>
        <GridView type='job' sectionClass='job-grid-section section-b-space' filterclass='job-sidebar' tagclass='job-list-header'detailboxstyle="style-progress" />
    </Fragment>
  )
}

export default JobGridProgressContainer