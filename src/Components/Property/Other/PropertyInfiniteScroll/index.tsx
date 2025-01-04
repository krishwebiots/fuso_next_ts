"use client";
import GridView from "../../Common/GridView";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import TopFilter from "../../Common/TopFilter";

const PropertyInfiniteScrollContainer = () => {
  return (
    <div>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type={"property"} gridSize={3} scrollType='infinite' />
    </div>
  );
};

export default PropertyInfiniteScrollContainer;
