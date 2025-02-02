"use client";
import { Fragment } from "react";
import CarBreadCrumb from "../../Common/CarBreadCrumb";
import CarDetail from "@/Components/CommonComponents/ProductDetail/CarDetails";

const CarClassicContainers = () => {
  return (
    <Fragment>
      <CarBreadCrumb />
      <CarDetail type='car' detailimages />
    </Fragment>
  );
};

export default CarClassicContainers;
