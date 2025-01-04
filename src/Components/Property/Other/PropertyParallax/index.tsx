"use client";
import { Fragment } from "react";
import PropertyBreadCrumb from "../../Common/PropertyBreadCrumb";
import TopFilter from "../../Common/TopFilter";
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
