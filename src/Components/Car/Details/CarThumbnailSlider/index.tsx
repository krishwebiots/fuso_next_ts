"use client";
import React, { Fragment } from "react";
import CarBreadCrumb from "../../Common/CarBreadCrumb";
import CarDetail from "@/Components/CommonComponents/ProductDetail/CarDetails";
import { Container } from "reactstrap";
import BreadCrumbMainDetail from "../../Common/BreadCrumbMainDetail";

const CarThumbnailSliderContainer = () => {
  return (
    <Fragment>
      <CarBreadCrumb type='car-thumbnail' detailimages />
      <div className='car-detail-section half-breadcrumbs'>
        <Container>
          <BreadCrumbMainDetail />
        </Container>
      </div>
      <CarDetail type='car'/>
    </Fragment>
  );
};

export default CarThumbnailSliderContainer;
