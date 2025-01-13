"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import PropertyDetail from "../../../CommonComponents/ProductDetail/PropertyDetail";
const PropertyStickyContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Property Details' subTitle='Property Details' url={RouteList.Home.PropertyDemo1} />
      <PropertyDetail mainClass='detail-sticky-section' type='sticky' />
    </Fragment>
  );
};

export default PropertyStickyContainer;
