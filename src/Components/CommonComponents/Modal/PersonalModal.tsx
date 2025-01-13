import { PersonalInformation, SaveChanges } from "@/Constants/Constants";
import { personalInfo } from "@/Data/Pages/Others";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setPersonInfoModal } from "@/Redux/Layout/LayoutReducers";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import CloseBtn from "../CloseBtn";
import CommonInput from "../CommonInput";

const PersonalModal = () => {
  const { personInfoModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setPersonInfoModal());
  return (
    <Modal fade centered size='lg' modalClassName='theme-modal' isOpen={personInfoModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <h4 className='modal-title'>{PersonalInformation}</h4>
        <Row className='gy-sm-4 gy-3'>
          {personalInfo.map((data, index) => (
            <CommonInput label={data.label} placeholder={data.value} ColClass='col-lg-6' key={index} review />
          ))}
          <Col xs='12'>
            <div className='review-input text-end'>
              <Button className='btn-solid' onClick={toggle}>
                {SaveChanges}
              </Button>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default PersonalModal;
