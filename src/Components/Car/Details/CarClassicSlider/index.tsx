'use client';
import React, { Fragment } from 'react'
import CarBreadCrumb from '../../Common/CarBreadCrumb';
import CarDetail from '@/Components/Property/Common/PropertyDetail/CarDetails';

const CarClassicSliderContainer = () => {
  return (
    <Fragment>
    <CarBreadCrumb/>
    <CarDetail type='car' classicSlider/>
  </Fragment>
  )
}

export default CarClassicSliderContainer