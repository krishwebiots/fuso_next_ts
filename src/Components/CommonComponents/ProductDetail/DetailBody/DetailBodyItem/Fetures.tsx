import { Feature } from "@/Constants/Constants";
import { CarFetures } from "@/Data/Car";
import React from "react";
import { Col, Row } from "reactstrap";

const Fetures = () => {
  return (
    <div className='detail-box' id="fetures">
      <h3 className='car-title'>{Feature}</h3>
      <Row>
        {CarFetures.map((section, index) => (
          <Col md={4} sm={6} key={index}>
            <div className='car-with-list'>
              <h5>{section.category}</h5>
              <ul className='feature-list'>
                {section.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Fetures;
