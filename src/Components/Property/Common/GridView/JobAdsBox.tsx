import { jobads1, jobads2, jobads3 } from "@/Data/Job";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import React, { FC, Fragment } from "react";

const JobAdsBox: FC<{ id: number }> = ({ id }) => {
  return (
    <Fragment>
      {id === 1 && (
        <div className='job-ad-box job-box light-purple'>
          <h5>How much experience do you have?</h5>
          <ul className='ad-list'>
            {jobads1.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={RouteList.Job.Detail.JobDetail1}>
                    {item} <i className='ri-arrow-right-double-line' />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {id === 3 && (
        <div className='job-ad-box job-box light-red'>
          <h5>Filter jobs by salary</h5>
          <ul className='ad-list price-filter'>
            {jobads2.map((item, i) => (
              <li key={i}>
                <Link href={RouteList.Job.Detail.JobDetail1}>
                  ${item.dolar}
                  <span>{item.rupee}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {id === 5 && (
        <div className='job-ad-box job-box light-blue'>
          <h5>How relevant do you find these jobs?</h5>
          <ul className='ad-list price-filter'>
            {jobads3.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={RouteList.Job.Detail.JobDetail1}>
                    {item.emoji}
                    <span>{item.tag}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default JobAdsBox;
