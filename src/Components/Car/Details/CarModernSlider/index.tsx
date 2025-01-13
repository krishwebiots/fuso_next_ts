'use client';
import React, { Fragment } from 'react'
import CarBreadCrumb from '../../Common/CarBreadCrumb'
import CarDetail from '@/Components/CommonComponents/ProductDetail/CarDetails'

const CarModernSliderContainer = () => {
  return (
    <Fragment>
      <CarBreadCrumb modern mainClass='car-home-section' />
      <CarDetail type='car' />
    </Fragment>
  )
}

export default CarModernSliderContainer