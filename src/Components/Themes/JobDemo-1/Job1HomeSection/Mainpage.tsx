import { ImagePath, SVGPath } from "@/Constants/Constants";
import { JobCounterData, JobHomeSectionData } from "@/Data/Demo/JobDemo1";
import { JobHomeType } from "@/Types/HomeDemo";
import RatioImage from "@/utils/RatioImage";
import React from "react";
import CountUp from "react-countup";
import { Col, Row } from "reactstrap";

const Mainpage = () => {
  const renderImage: React.FC<JobHomeType> = (imageData, key) => {
    const src = imageData.type === "svg" ? `${SVGPath}/${imageData.image}` : `${ImagePath}/${imageData.image}`;
    return <RatioImage key={key} src={src} alt={imageData.image} className={`img-fluid ${imageData.class || ""}`} />;
  };
  return (
    <div className='home-block-space'>
      <Row className='align-items-center'>
        <Col xl='7' lg='6'>
          <div className='home-content'>
            <h3>Build your future with us</h3>
            <h1>Find your job &amp; make sure goal.</h1>
            <p>Your dream job is waiting for you Find the best real estate on your country Your dream job is waiting for you Find the best real estate on your country</p>
            <ul className='counter-list'>
              {JobCounterData.map((item, index) => (
                <li className='counter-box' key={index}>
                  <div className='counter-info'>
                    <h3>
                      <CountUp end={item.end} className='counter-count' delay={0} />
                      {item.suffix}
                    </h3>
                    <h4>{item.label}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xl='5' lg='6'>
          <div className='home-img'>
            {JobHomeSectionData.map((item, index) => {
              if ("meanClass" in item) {
                return (
                  <div key={index} className={item.meanClass}>
                    {item.multipleImage.map((imgData, imgIndex) => {
                      if ("childrenClass" in imgData) {
                        return (
                          <div key={imgIndex} className={imgData.childrenClass}>
                            {imgData.childrenImage.map((childImg, childIndex) => renderImage(childImg, childIndex))}
                          </div>
                        );
                      }
                      return renderImage(imgData, imgIndex);
                    })}
                  </div>
                );
              }
              return renderImage(item, index);
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Mainpage;
