"use client";
import { Fragment } from "react";
import GridView from "@/Components/CommonComponents/GridView";
import PropertyBreadCrumb from "../../../CommonComponents/PropertyBreadCrumb";
import TopFilter from "../../../CommonComponents/TopFilter";

const PropertyRightListContainer = () => {
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type='property' sectionClass='property-list property-inner-section' side='right' gridType='list-view' gridSize={1} />
    </Fragment>
  );
};

export default PropertyRightListContainer;
