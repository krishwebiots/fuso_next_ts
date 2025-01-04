import { AboutGetInTouchData } from "@/Data/Pages/Others";
import { FC, Fragment } from "react";
import { Col, Row } from "reactstrap";
import Followus from "./Followus";

const GetInTouch: FC<{ type?: string }> = ({ type }) => {
  return (
    <Fragment>
      {type === "contact-1" && (
        <Row className='gy-4'>
          {AboutGetInTouchData.map((item, i) => {
            return (
              <Col xxl={3} md={6} key={i}>
                <div key={i} className='contact-box'>
                  <div className='contact-info'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className='contact-icon'>{item.icon}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      )}

      {type === "contact-2" && (
        <Fragment>
          <ul className='contact-form-list'>
            {AboutGetInTouchData.map((item, i) => {
              return (
                <li className='contact-box' key={i}>
                  <div className='contact-info'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className='contact-icon'>{item.icon}</div>
                </li>
              );
            })}
          </ul>
          <Followus />
        </Fragment>
      )}

      {type === "contact-3" && (
        <Fragment>
          <ul className='contact-list'>
            {AboutGetInTouchData.slice(0, 3).map((item, i) => {
              return (
                <li className='contact-box' key={i}>
                  <div className='contact-icon'>{item.icon}</div>
                  <div className='contact-info'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Followus />
        </Fragment>
      )}
    </Fragment>
  );
};

export default GetInTouch;
