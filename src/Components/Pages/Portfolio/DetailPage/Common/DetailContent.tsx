import { ImagePath } from "@/Constants/Constants";
import { PortfolioTitle } from "@/Types/PortfolioType";
import RatioImage from "@/utils/RatioImage";
import React, { FC } from "react";
import { Col, Row } from "reactstrap";

const PortfolioDetailContent: FC<PortfolioTitle> = ({ title, darkmode, rightside, data, image }) => {
  return (
    <Row className={` ratio3_2`}>
      <Col md={7} className={`${!rightside ? "order-lg-0" : ""}  order-1`}>
        <div className={darkmode ? "portfolio-content-box text-start" : "portfolio-detail-content"}>
          {darkmode && <span className='border-bg'></span>}
          <h2>{title}</h2>
          {darkmode ? (
            <p>{data}</p>
          ) : (
            data?.map((item, i) => {
              return (
                <ul className='portfolio-listing' key={i}>
                  <li>
                    <p>{item}</p>
                  </li>
                </ul>
              );
            })
          )}
        </div>
      </Col>
      <Col md={5}>
        <div className='portfolio-image '>
          <RatioImage src={`${ImagePath}/portfolio/detail-images/${image}.jpg`} alt='pd-3' className={`img-fluid bg-img`} />
        </div>
      </Col>
    </Row>
  );
};

export default PortfolioDetailContent;
