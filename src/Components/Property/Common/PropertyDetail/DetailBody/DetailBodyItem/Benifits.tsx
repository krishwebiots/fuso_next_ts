import { Benefits, SVGPath } from "@/Constants/Constants";
import { BenifitsData } from "@/Data/Job";
import Image from "next/image";
import React from "react";

const Benifits = () => {
  return (
    <div className='description-box'>
      <h5 className='description-title'>{Benefits}:</h5>
      <ul className='features-list'>
        {BenifitsData.map((item,i) => (
            <li key={i}>
              <Image height={30} width={30} src={`${SVGPath}/job/job-detail/${i+1}.svg`} alt={`j-${i+1}`} />
              <h5>{item}</h5>
            </li>
          )
        )}        
      </ul>
    </div>
  );
};

export default Benifits;
