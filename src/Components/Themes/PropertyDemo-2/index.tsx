import React, { Fragment, useEffect } from "react";
import Property2homeSection from "./Property2HomeSection";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import Categories from "../Common/Categories";
import FeaturedProperty from "./FeaturedProperty";
import Experience from "./Experience";
import { FeaturedProperties, OurFeaturedProperties, RecentlyAddedProperties } from "@/Constants/Constants";
import OurService from "./OurService";
import ExplorByCitys from "./ExplorByCity";
import Counter from "./Counter";
import Testimonial from "./Testimonial";
import Team from "./Team";
import SearchModal from "@/Components/CommonComponents/Modal/SearchModal";

const PropertyDemo2Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Property2homeSection />
      <Categories type='property-2' />
      <FeaturedProperty title={FeaturedProperties} data={[41, 42, 43]} label='Featured' />
      <Experience />
      <FeaturedProperty title={RecentlyAddedProperties} data={[44, 45, 46]} label='New' />
      <OurService/>
      <ExplorByCitys/>
      <Counter/>
      <Testimonial/>
      <Team/>
      <SearchModal type="property" />
    </Fragment>
  );
};

export default PropertyDemo2Container;
