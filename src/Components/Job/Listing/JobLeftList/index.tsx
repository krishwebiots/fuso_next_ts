'use client';
import React, { Fragment } from 'react'
import JobBreadCrumb from '../../Common/JobBreadCrumb'
import GridView from '@/Components/CommonComponents/GridView'
import { JobTitle } from '@/Constants/Constants'
import { RouteList } from '@/utils/RouteList'

const JobLeftListContainer = () => {
  return (
    <Fragment>
      <JobBreadCrumb title={JobTitle} subTitle={JobTitle} url={RouteList.Home.JobDemo1} />
      <GridView type='job' sectionClass='job-list-section section-b-space' filterclass='job-sidebar' tagclass='job-list-header' detailboxstyle='style-4' gridSize={1} cardShow={9} />
    </Fragment>
  )
}

export default JobLeftListContainer