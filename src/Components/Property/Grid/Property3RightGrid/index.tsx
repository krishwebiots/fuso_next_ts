"use client";
import { Fragment } from "react";
import GridView from "@/Components/CommonComponents/GridView";
import PropertyBreadCrumb from "../../../CommonComponents/PropertyBreadCrumb";
import TopFilter from "../../../CommonComponents/TopFilter";

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
