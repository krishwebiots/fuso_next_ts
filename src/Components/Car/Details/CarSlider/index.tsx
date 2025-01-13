"use client";
import React, { Fragment } from "react";
import CarBreadCrumb from "../../Common/CarBreadCrumb";
import CarDetail from "@/Components/CommonComponents/ProductDetail/CarDetails";

const CarSliderContainer = () => {
  return (
    <Fragment>
      <CarBreadCrumb detailimages type='car-image-slider' mainClass='style-breadcrumbs-2' />
      <CarDetail type='car' />
    </Fragment>
  );
};

export default CarSliderContainer;
