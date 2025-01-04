import React, { Fragment, useEffect } from "react";
import Car2HomeSection from "./Car2HomeSection";
import LogoSection from "../Common/LogoSection";
import Aboutus from "./Aboutus";
import Categories from "../Common/Categories";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import FeaturesCar from "./FeaturesCar";
import StepBooking from "./StepBooking";
import ServiceSection from "./Service";
import BlogSection from "./Blog";
import Car2Testimonial from "./Car2Testimonial";
import Instagram from "./Car2Testimonial/Instagram";

const CarDemo2Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Car2HomeSection />
      <LogoSection swiperClass='logo-car2-slider' sectionClass='section-t-lg-space' />
      <Aboutus />
      <Categories type="cardemo-2"/>
      <FeaturesCar/>
      <StepBooking/>
      <ServiceSection/>
      <BlogSection/>
      <Car2Testimonial/>
      <Instagram/>
    </Fragment>
  );
};

export default CarDemo2Container;
