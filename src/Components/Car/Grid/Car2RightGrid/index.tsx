'use client';
import Breadcrumbs from '@/Components/CommonComponents/BreadCrumb'
import GridView from "@/Components/CommonComponents/GridView";
import { RouteList } from '@/utils/RouteList'
import React, { Fragment } from 'react'

const Car2RightGridContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainclass='car-breadcrumbs-section' title='Car Shop' subTitle='Car Shop' url={RouteList.Home.CarDemo1} />
      <GridView type={"car"} sectionClass='car-shop-section car-product-section' filterclass='filter-sidebar' side='right' tagclass='car-list-header' />
    </Fragment>
  )
}

export default Car2RightGridContainer