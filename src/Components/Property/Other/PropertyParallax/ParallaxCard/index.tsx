import { useAppSelector } from "@/Redux/Hooks";
import React, { Fragment } from "react";
import ParallaxCardContent from "./ParallaxCardContent";

const ParallaxCard = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const showdata = productItem.filter((item) => item.type === "property").slice(0, 5);
  return (
    <section className='section-t-md-space section-b-md-space property-parallax property-inner-section'>
      {showdata.map((item, i) => {
        return (
          <Fragment key={i}>
            <ParallaxCardContent data={item} index={i}/>
          </Fragment>
        );
      })}
    </section>
  );
};

export default ParallaxCard;
