"use client";
import { Fragment } from "react";
import GridView from "../../Common/GridView";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import TopFilter from "../../Common/TopFilter";

const Property2RightGridContainer = () => {
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type={"property"} side='right' />
    </Fragment>
  );
};

export default Property2RightGridContainer;
