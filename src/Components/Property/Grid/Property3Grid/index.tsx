"use client";
import { Fragment } from "react";
import PropertyBreadCrumb from "../../../CommonComponents/PropertyBreadCrumb";
import TopFilter from "../../../CommonComponents/TopFilter";
import GridView from "@/Components/CommonComponents/GridView";

const Property3GridContainer = () => {
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type={"property"} gridSize={3} cardShow={9} view="image"/>
    </Fragment>
  );
};

export default Property3GridContainer;
