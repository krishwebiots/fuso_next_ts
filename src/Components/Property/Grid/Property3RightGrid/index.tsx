"use client";
import { Fragment } from "react";
import GridView from "../../Common/GridView";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import TopFilter from "../../Common/TopFilter";

const Property3RightGridContainer = () => {
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type={"property"} side='right' gridSize={3} cardShow={9} />
    </Fragment>
  );
};

export default Property3RightGridContainer;
