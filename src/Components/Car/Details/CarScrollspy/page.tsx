"use client";
import React, { Fragment } from "react";
import CarBreadCrumb from "../../Common/CarBreadCrumb";
import CarDetail from "@/Components/Property/Common/PropertyDetail/CarDetails";

const CarScrollspyContainer = () => {
  return (
    <Fragment>
      <CarBreadCrumb />
      <CarDetail type='car' detailimages scrollspy />
    </Fragment>
  );
};

export default CarScrollspyContainer;
