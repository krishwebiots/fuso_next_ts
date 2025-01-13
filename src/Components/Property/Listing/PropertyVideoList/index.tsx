"use client";
import { Fragment } from "react";
import GridView from "@/Components/CommonComponents/GridView";
import PropertyBreadCrumb from "../../../CommonComponents/PropertyBreadCrumb";
import TopFilter from "../../../CommonComponents/TopFilter";

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
