"use client";
import { Fragment } from "react";
import GridView from "../../Common/GridView";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import TopFilter from "../../Common/TopFilter";

const PropertyVideoListContainer = () => {
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type='property' view='video' sectionClass='property-list property-list-video property-inner-section' gridType='list-view' gridSize={1} />
    </Fragment>
  );
};

export default PropertyVideoListContainer;
