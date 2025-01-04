"use client";
import React, { Fragment } from "react";
import CarBreadCrumb from "../../Common/CarBreadCrumb";
import CarDetail from "@/Components/Property/Common/PropertyDetail/CarDetails";

const CarSliderContainer = () => {
  return (
    <Fragment>
      <CarBreadCrumb detailimages type='car-image-slider' mainClass='style-breadcrumbs-2' />
      <CarDetail type='car' />
    </Fragment>
  );
};

export default CarSliderContainer;
