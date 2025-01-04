'use client';
import React, { Fragment } from 'react'
import CarBreadCrumb from '../../Common/CarBreadCrumb';
import CarDetail from '@/Components/Property/Common/PropertyDetail/CarDetails';

const CarLayout2Container = () => {
  return (
    <Fragment>
      <CarBreadCrumb type='car-detail' detailimages mainClass='style-breadcrumbs-2' multiple/>
      <CarDetail type='car' />
    </Fragment>
  )
}

export default CarLayout2Container