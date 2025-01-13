"use client";
import { Fragment } from "react";
import GridView from "@/Components/CommonComponents/GridView";
import PropertyBreadCrumb from "../../../CommonComponents/PropertyBreadCrumb";
import TopFilter from "../../../CommonComponents/TopFilter";
const PropertyThumbListContainer = () => {
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type='property' view='multiple' sectionClass='property-list property-thumb-section property-inner-section' gridType='list-view' gridSize={1} />
    </Fragment>
  );
};

export default PropertyThumbListContainer;
