"use client";
import React, { Fragment } from "react";
import CarBreadCrumb from "../../Common/CarBreadCrumb";
import CarDetail from "@/Components/CommonComponents/ProductDetail/CarDetails";

const CarLayout1Container = () => {
  return (
    <Fragment>
      <CarBreadCrumb type="car-detail" detailimages mainClass='style-breadcrumbs-2' />
      <CarDetail type='car' />
    </Fragment>
  );
};

export default CarLayout1Container;
