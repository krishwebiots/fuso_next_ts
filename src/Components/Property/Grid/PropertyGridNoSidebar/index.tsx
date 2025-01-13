"use client";
import { Fragment } from "react";
import GridView from "@/Components/CommonComponents/GridView";
import PropertyBreadCrumb from "../../../CommonComponents/PropertyBreadCrumb";
import TopFilter from "../../../CommonComponents/TopFilter";

const PropertyGridNoSidebarContainer = () => {
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type={"property"} side='nosidebar' gridSize={3} topFilter />
    </Fragment>
  );
};

export default PropertyGridNoSidebarContainer;
