import { useAppDispatch } from "@/Redux/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import { Fragment, useEffect } from "react";
import LogoSection from "../Common/LogoSection";
import ExplorByCity from "./ExplorByCity";
import InterViewQuestion from "./InterViewQuestion";
import Job3HomeSection from "./Job3HomeSection";
import Job3NewsLetter from "./Job3NewsLetteer";
import JobOpeningandAbout from "./JobOpeningandAbout";
import TopCompany from "./TopCompany";

const JobDemo3Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Job3HomeSection />
      <LogoSection swiperClass='logo-job3-slider' title='World best companies are hiring on hireup' />
      <JobOpeningandAbout />
      <ExplorByCity />
      <TopCompany />
      <InterViewQuestion />
      <Job3NewsLetter />
    </Fragment>
  );
};

export default JobDemo3Container;
