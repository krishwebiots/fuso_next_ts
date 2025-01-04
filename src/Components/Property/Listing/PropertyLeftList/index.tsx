"use client";
import { Fragment } from "react";
import GridView from "../../Common/GridView";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import TopFilter from "../../Common/TopFilter";

const PropertyLeftListContainer = () => {
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type='property' sectionClass='property-list property-inner-section' gridType='list-view' gridSize={1} />
    </Fragment>
  );
};

export default PropertyLeftListContainer;
