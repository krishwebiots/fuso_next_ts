'use client';
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import GridView from "@/Components/CommonComponents/GridView";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";

const CarTopFilterContainer = () => {
  return (
    <Fragment>
       <Breadcrumbs mainclass='car-breadcrumbs-section' title='Car Shop' subTitle='Car Shop' url={RouteList.Home.CarDemo1} />
       <GridView type={"car"} side="nosidebar" sectionClass='car-shop-section car-product-section' filterclass='filter-sidebar' gridSize={3} tagclass='car-list-header' filter />
    </Fragment>
  )
}

export default CarTopFilterContainer