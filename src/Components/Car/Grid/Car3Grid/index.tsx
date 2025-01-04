"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import GridView from "@/Components/Property/Common/GridView";
import { RouteList } from "@/utils/RouteList";
import React, { Fragment } from "react";

const Car3GridContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainclass='car-breadcrumbs-section' title='Car Shop' subTitle='Car Shop' url={RouteList.Home.CarDemo1} />
      <GridView type={"car"} sectionClass='car-shop-section car-product-section' filterclass='filter-sidebar' gridSize={3} cardShow={9} tagclass='car-list-header' />
    </Fragment>
  );
};

export default Car3GridContainer;
