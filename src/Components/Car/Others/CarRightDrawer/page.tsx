"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import GridView from "@/Components/Property/Common/GridView";
import { RouteList } from "@/utils/RouteList";
import React, { Fragment } from "react";

const CarRightDrawerContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainclass='car-breadcrumbs-section' title='Car Shop' subTitle='Car Shop' url={RouteList.Home.CarDemo1} />
      <GridView type={"car"} side='nosidebar' sectionClass='car-shop-section car-product-section' filterclass='car-shop-sidebar' offcanvasSide='right' gridSize={3} cardShow={9} tagclass='car-list-header' />
    </Fragment>
  );
};

export default CarRightDrawerContainer;
