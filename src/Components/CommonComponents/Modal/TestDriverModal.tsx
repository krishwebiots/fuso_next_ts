import React from "react";
import { Button, Col, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import CloseBtn from "../CloseBtn";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setTestDriverModal } from "@/Redux/Layout/LayoutReducers";
import { Schedule, SendRequest } from "@/Constants/Constants";

const TestDriverModal = () => {
  const dispatch = useAppDispatch();
  const { testDriverModal } = useAppSelector((state) => state.layout);
  const toggle = () => dispatch(setTestDriverModal());
  return (
    <Modal scrollable fade modalClassName='theme-modal' isOpen={testDriverModal} toggle={toggle}>
      <div className='modal-content'>
        <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
        <ModalBody>
          <h3 className="car-title">{Schedule}</h3>
          <Row className='gy-3'>
            <Col xs={12}>
              <div className='review-input'>
                <Input type='text' placeholder='Enter Your Name' />
              </div>
            </Col>
            <Col xs={12}>
              <div className='review-input'>
                <Input type='text' placeholder='Your Phone' />
              </div>
            </Col>
            <Col xs={12}>
              <div className='review-input'>
                <Input type='date' id='date-input' placeholder='Select Date' />
                <div id='date-picker' />
              </div>
            </Col>
            <Col xs={12}>
              <div className='review-input'>
                <Input type='time' id='time-input' placeholder='Select Time' />
                <div id='time-picker' />
              </div>
            </Col>
            <Col xs={12}>
              <div className='review-input'>
                <Button className='btn-solid'>
                  {SendRequest}
                </Button>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default TestDriverModal;
