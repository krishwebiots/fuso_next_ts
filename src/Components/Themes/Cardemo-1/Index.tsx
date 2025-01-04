import { Fragment, useEffect } from "react";
import CarHomeSection from "./CarHomeSection";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import Categories from "../Common/Categories";
import CarDemoProduct from "./Product";
import Services from "./Services";
import Offer from "./Offer";
import Work from "./Work";
import Experience from "./Experience";
import About from "./About";
import Testimonials from "./Testimonials";

const Cardemo1Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <CarHomeSection />
      <Categories type="cardemo-1"/>
      <CarDemoProduct/>
      <Services/>
      <Offer/>
      <Work/>
      <Experience/>
      <About/>
      <Testimonials/>
    </Fragment>
  );
};

export default Cardemo1Container;
