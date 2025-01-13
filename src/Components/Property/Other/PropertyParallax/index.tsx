"use client";
import { Fragment } from "react";
import PropertyBreadCrumb from "../../../CommonComponents/PropertyBreadCrumb";
import TopFilter from "../../../CommonComponents/TopFilter";
import ParallaxCard from "./ParallaxCard";

const PropertyParallaxContainer = () => {
  return (
    <Fragment>
      <TopFilter />
      <PropertyBreadCrumb />
      <ParallaxCard />
    </Fragment>
  );
};

export default PropertyParallaxContainer;
