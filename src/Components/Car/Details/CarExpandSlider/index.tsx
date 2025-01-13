"use client";
import React, { Fragment } from "react";
import CarBreadCrumb from "../../Common/CarBreadCrumb";
import CarDetail from "@/Components/CommonComponents/ProductDetail/CarDetails";

const CarExpandSliderContainer = () => {
  return (
    <Fragment>
      <CarBreadCrumb detailimages type='expand-slider' mainClass='style-breadcrumbs-2' />
      <CarDetail type='car' />
    </Fragment>
  );
};

export default CarExpandSliderContainer;
