import React, { Fragment, useEffect } from "react";
import Property1HomeSection from "./Property1HomeSection";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import Feturesproperty from "./Feturesproperty";
import Property1About from "./Property1About";
import Categories from "../Common/Categories";
import Property1Service from "./Property1Service";
import Discovery from "./Discovery";
import Achievements from "./Achievements";
import PropertyTestimonial from "./PropertyTestimonial";
import PropertyNewsLetter from "./PropertyNewsLetter";

const PropertyDemo1Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Property1HomeSection />
      <Feturesproperty/>
      <Property1About/>
      <Categories type="property-1"/>
      <Property1Service/>
      <Discovery/>
      <Achievements/>
      <PropertyTestimonial/>
      <PropertyNewsLetter/>
    </Fragment>
  );
};

export default PropertyDemo1Container;
