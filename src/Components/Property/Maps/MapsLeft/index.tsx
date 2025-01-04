"use client";
import { useAppDispatch } from "@/Redux/Hooks";
import { setCardToShow } from "@/Redux/Layout/LayoutReducers";
import { fetchCategoryApiData, fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import React, { Fragment, useEffect } from "react";
import TopFilter from "../../Common/TopFilter";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import GridView from "../../Common/GridView";

const MapsLeftContainer = () => {
  
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <GridView type={"property"} side="nosidebar" map cardShow={4}/>
    </Fragment>
  );
};

export default MapsLeftContainer;
