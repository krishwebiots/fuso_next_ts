import React, { Fragment } from 'react'
import CarBreadCrumb from '../../Common/CarBreadCrumb'
import CarDetail from '@/Components/CommonComponents/ProductDetail/CarDetails'

const CarVideoContainer = () => {
  return (
    <Fragment>
    <CarBreadCrumb detailimages type='car-video' mainClass='video-breadcrumbs' />
    <CarDetail type='car' />
  </Fragment>
  )
}

export default CarVideoContainer