"use client";
import { Fragment } from "react";
import GridView from "../../Common/GridView";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import TopFilter from "../../Common/TopFilter";

const MapListContainer = () => {
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type={"property"} side='nosidebar' sectionClass='property-list property-inner-section' gridType='list-view' gridSize={1} map cardShow={4} />
    </Fragment>
  );
};

export default MapListContainer;
