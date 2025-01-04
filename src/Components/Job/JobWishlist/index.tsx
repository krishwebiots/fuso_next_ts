'use client';
import { JobTitle } from '@/Constants/Constants'
import { RouteList } from '@/utils/RouteList'
import React, { Fragment } from 'react'
import JobBreadCrumb from '../Common/JobBreadCrumb'
import WishListContent from '@/Components/Property/PropertyWishlist/WishListContent'

const JobWishlistContainer = () => {
    
  return (
    <Fragment>
        <JobBreadCrumb title={JobTitle} subTitle={JobTitle} url={RouteList.Home.JobDemo1} />
        <WishListContent type='job' />
    </Fragment>
  )
}

export default JobWishlistContainer