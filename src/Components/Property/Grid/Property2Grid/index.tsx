"use client";
import { Fragment } from "react";
import PropertyBreadCrumb from "../../../CommonComponents/PropertyBreadCrumb";
import TopFilter from "../../../CommonComponents/TopFilter";
import GridView from "@/Components/CommonComponents/GridView";

const Property2GridContainer = () => {   
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type={"property"}  />
    </Fragment>
  );
};

export default Property2GridContainer;
