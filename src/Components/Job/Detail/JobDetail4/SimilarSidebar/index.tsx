import SimilarJobs from "@/Components/CommonComponents/ProductDetail/DetailBody/DetailBodyItem/SimilarJobs";
import { SimilarJobsData } from "@/Data/Job";
import { useAppSelector } from "@/Redux/Hooks";
import React, { Fragment } from "react";

const SimilarSidebar = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const similiarData = productItem.filter((item) => item.type === "job");
  return (
    <div className='detail-right-sidebar similar-sidebar'>
      {SimilarJobsData.map((item, index) => {
        return (
          <Fragment key={index}>
            <h6 className={`job-title ${index === 1 ? "mt-lg-5 mt-4" : ""}`}>{item}</h6>
            <div className='similar-bg'>
              {similiarData.slice(index === 0 ? 0 : 4, index === 0 ? 4 : 8).map((item, i) => (
                <Fragment key={i}>
                  <SimilarJobs data={item} />
                </Fragment>
              ))}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default SimilarSidebar;
