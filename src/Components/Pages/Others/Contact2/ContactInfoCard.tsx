import { Contact2MainData } from "@/Data/Pages/Others";
import Link from "next/link";
import React, { Fragment } from "react";

const ContactInfoCard = () => {
  return (
    <Fragment>
      {Contact2MainData.map((item, i) => {
        return (
          <div key={i} className={`col-lg-${item.col} col-sm-6 text-center`}>
            <div className='contact-card'>
              <div className='icon-contact text-end'>{item.icon}</div>
              <div className='info-contact text-start'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={item.link} className='arrow-btn'>
                  <span>{item.linkText}</span>
                  <i className='ri-arrow-right-double-fill'></i>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ContactInfoCard;
