"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import GridView from "@/Components/Property/Common/GridView";
import { RouteList } from "@/utils/RouteList";
import React, { Fragment } from "react";

const CarLoadMoreContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainclass='car-breadcrumbs-section' title='Car Shop' subTitle='Car Shop' url={RouteList.Home.CarDemo1} />
      <GridView type={"car"} scrollType='load-more' sectionClass='car-shop-section car-product-section' filterclass='filter-sidebar' gridSize={3} tagclass='car-list-header' />
    </Fragment>
  );
};

export default CarLoadMoreContainer;
