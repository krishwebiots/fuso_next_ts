import { Edit } from "@/Constants/Constants";
import { setAddressModal, setPersonInfoModal } from "@/Redux/Layout/LayoutReducers";
import { ProfileCardProps } from "@/Types/OtherType";
import { Edit2 } from "iconsax-react";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { Col, Row } from "reactstrap";

const CommonProfileDetail: React.FC<ProfileCardProps> = ({ title, data, modalId }) => {
  const dispatch = useDispatch();
  return (
    <div className='common-card'>
      <div className='edit-flex'>
        <h4 className='dashboard-title mb-0'>{title}</h4>
        {modalId === 1 && (
          <Link href={`#${modalId}`} className='edit-btn' onClick={() => dispatch(setPersonInfoModal())}>
            <Edit2 color='#188AEC' size={18} />
            {Edit}
          </Link>
        )}

        {modalId === 2 && (
          <Link href={`#${modalId}`} className='edit-btn' onClick={() => dispatch(setAddressModal())}>
            <Edit2 color='#188AEC' size={18} />
            {Edit}
          </Link>
        )}
      </div>
      <Row className='gy-lg-4 gy-3'>
        {data.map((item, index) => (
          <Col lg={6} key={index}>
            <div className='text-input'>
              <span>{item.label}</span>
              {item.isLink ? (
                <Link href='#!'>
                  <h5>{item.value}</h5>
                </Link>
              ) : (
                <h5>{item.value}</h5>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CommonProfileDetail;
