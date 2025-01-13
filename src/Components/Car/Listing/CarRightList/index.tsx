"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import GridView from "@/Components/CommonComponents/GridView";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";

const CarRightListContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainclass='car-breadcrumbs-section' title='Car Shop' subTitle='Car Shop' url={RouteList.Home.CarDemo1} />
      <GridView type={"car"} side='right' sectionClass='car-shop-section car-product-section' filterclass='car-shop-sidebar' gridType='list-view' gridSize={1} cardShow={9} tagclass='car-list-header' />
    </Fragment>
  );
};

export default CarRightListContainer;
