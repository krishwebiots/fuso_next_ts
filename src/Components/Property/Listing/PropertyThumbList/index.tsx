"use client";
import { Fragment } from "react";
import GridView from "../../Common/GridView";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import TopFilter from "../../Common/TopFilter";
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
