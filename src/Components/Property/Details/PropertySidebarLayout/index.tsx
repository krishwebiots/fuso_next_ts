"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import PropertyDetail from "../../../CommonComponents/ProductDetail/PropertyDetail";

const SidebarLayoutContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Property Details' subTitle='Property Details' url={RouteList.Home.PropertyDemo1} />
      <PropertyDetail mainClass='property-sidebar-section section-t-space ratio_30' type='sidebar-layout' />
    </Fragment>
  );
};

export default SidebarLayoutContainer;
