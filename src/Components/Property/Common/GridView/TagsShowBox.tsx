import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { removeFilter, clearAllFilters } from "@/Redux/Reducers/FilterSlice";
import Link from "next/link";
import React from "react";

const TagsShowBox = () => {
  const dispatch = useAppDispatch();

  const { salaryStatus, jobAllCategory, JobWorkMode, JobCompanytype, JobEducation, JobbyCheck, JobLocation, JobTopCompnies, JobType } = useAppSelector((state) => state.filter);

  const selectedFilters = [
    { label: "salaryStatus", value: `${salaryStatus[0]}-${salaryStatus[1]}` },
    { label: "JobWorkMode", value: JobWorkMode },
     ...jobAllCategory.map((category) => ({ label: "jobAllCategory", value: category })),
     ...JobCompanytype.map((companyType) => ({ label: "JobCompanytype", value: companyType })),
     ...JobEducation.map((education) => ({ label: "JobEducation", value: education })),
     ...JobbyCheck.map((byCheck) => ({ label: "JobbyCheck", value: byCheck })),
     ...JobLocation.map((location) => ({ label: "JobLocation", value: location })),
     ...JobTopCompnies.map((company) => ({ label: "JobTopCompnies", value: company })), 
     ...JobType.map((jobType) => ({ label: "JobType", value: jobType }))];

  return (
    <div className='job-list-header'>
      <div className='filter-header'>
        <h4>Filters</h4>
        <div className='job-header-box'>
          <ul className='job-filter-list'>
            {selectedFilters.map((filter, index) => (
              <li key={index}>
                <Link href='#!' onClick={() => dispatch(removeFilter({ label: filter.label, value: filter.value }))} style={{ cursor: "pointer" }}>
                  {`${filter.label.replace(/([A-Z])/g, " $1").trim()} : ${filter.value}`}
                  <i className='ri-close-line' />
                </Link>
              </li>
            ))}
          </ul>
          <Link href='#!' className='text-btn' onClick={() => dispatch(clearAllFilters())}>
            Clear All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TagsShowBox;

 
