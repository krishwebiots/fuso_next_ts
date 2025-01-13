'use client';
import React, { Fragment } from 'react'
import JobBreadCrumb from '../../Common/JobBreadCrumb'
import GridView from '@/Components/CommonComponents/GridView'
import { JobTitle } from '@/Constants/Constants'
import { RouteList } from '@/utils/RouteList'

const JobGridType3Container = () => {
  return (
    <Fragment>
      <JobBreadCrumb title={JobTitle} subTitle={JobTitle} url={RouteList.Home.JobDemo1} />
      <GridView type='job' sectionClass='job-grid-section section-b-space' filterclass='job-sidebar' tagclass='job-list-header' detailboxstyle="style-3" gridSize={3} cardShow={12}/>
    </Fragment>
  )
}

export default JobGridType3Container