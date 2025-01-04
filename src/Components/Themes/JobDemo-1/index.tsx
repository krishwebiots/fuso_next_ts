import { useAppDispatch } from "@/Redux/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import { Fragment, useEffect } from "react";
import CompanyLogo from "./CompanyLogo";
import Job1HomeSection from "./Job1HomeSection";
import JobHere from "./JobHere";
import JobSteps from "./JobSteps";
import Categories from "../Common/Categories";
import JobHiring from "./JobHiring";
import JobAbout from "./JobAbout/JobAbout";
import JobReview from "./JobReview";
import NewsLetter from "./NewsLetter";

const JobDemo1Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Job1HomeSection />
      <CompanyLogo />
      <JobHere />
      <JobSteps />
      <Categories type='job-1' />
      <JobHiring />
      <JobAbout />
      <JobReview />
      <NewsLetter/>
    </Fragment>
  );
};

export default JobDemo1Container;
