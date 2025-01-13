"use client";
import React, { Fragment } from "react";
import CarBreadCrumb from "../../Common/CarBreadCrumb";
import CarDetail from "@/Components/CommonComponents/ProductDetail/CarDetails";

const CarScrollspyContainer = () => {
  return (
    <Fragment>
      <CarBreadCrumb />
      <CarDetail type='car' detailimages scrollspy />
    </Fragment>
  );
};

export default CarScrollspyContainer;
