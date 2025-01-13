"use client";
import GridView from "@/Components/CommonComponents/GridView";
import PropertyBreadCrumb from "../../../CommonComponents/PropertyBreadCrumb";
import TopFilter from "../../../CommonComponents/TopFilter";

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
