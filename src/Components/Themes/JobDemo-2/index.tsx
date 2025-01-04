import { useAppDispatch } from "@/Redux/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import React, { Fragment, useEffect } from "react";
import Job2HomeSection from "./Job2HomeSection";
import LogoSection from "./LogoSection";
import Categories from "../Common/Categories";
import JobOpenings from "./JobOpenings";
import JobGoal from "./JobGoal";
import Job2Service from "./Job2Service";
import PeopleReview from "./PeopleReview/PeopleReview";

const JobDemo2Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Job2HomeSection />
      <LogoSection />
      <Categories type="job-2"/>
      <JobOpenings/>
      <JobGoal/>
      <Job2Service/>
      <PeopleReview/>
    </Fragment>
  );
};

export default JobDemo2Container;
