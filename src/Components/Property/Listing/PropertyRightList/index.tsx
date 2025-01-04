"use client";
import { Fragment } from "react";
import GridView from "../../Common/GridView";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import TopFilter from "../../Common/TopFilter";

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
