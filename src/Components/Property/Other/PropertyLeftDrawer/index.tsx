"use client";
import { Fragment } from "react";
import GridView from "../../Common/GridView";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import TopFilter from "../../Common/TopFilter";

const PropertyLeftDrawerContainer = () => {
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type={"property"} side='nosidebar' gridSize={3} />
    </Fragment>
  );
};

export default PropertyLeftDrawerContainer;
