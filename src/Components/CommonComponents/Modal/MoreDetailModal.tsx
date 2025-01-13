import { Cancel, FloorPlansTitle, Href, ImagePath, InteriorInspirations } from "@/Constants/Constants";
import { ModalSwiperSlider } from "@/Data/Pages/Others";
import { AmenitiesSliderData } from "@/Data/Property";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setMoreDetailModal } from "@/Redux/Layout/LayoutReducers";
import RatioImage from "@/utils/RatioImage";
import Link from "next/link";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import CloseBtn from "../CloseBtn";
import OverViewSection from "@/Components/CommonComponents/ProductDetail/DetailBody/DetailBodyItem/OverView";

const MoreDetailModal = () => {
  const { moredetailModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const toggle = () => dispatch(setMoreDetailModal());
  return (
    <Modal fade centered size='xl' modalClassName='theme-modal' className='property-detail-section' isOpen={moredetailModal} toggle={toggle}>
      <div className='modal-content'>
        <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
        <ModalBody className='detail-body'>
          <OverViewSection label />
          <Row>
            <Col xs={8}>
              <h4 className='modal-title'>{InteriorInspirations}</h4>
              <Swiper className='modal-swiper-slider ratio_square' {...ModalSwiperSlider}>
                {AmenitiesSliderData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link href={Href}>
                      <RatioImage src={`${ImagePath}/property/${item.image}.jpg`} alt='modal-img' className='bg-img' />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
            <Col xs={4}>
              <h4 className='modal-title'>{FloorPlansTitle}</h4>
              <div className='floor-plan'>
                <RatioImage src={`${ImagePath}/property/detail/floor.png`} alt='floor-plan' className='img-fluid' />
              </div>
            </Col>
          </Row>
          <div className='d-flex align-items-center justify-content-end gap-2 mt-4'>
            <Button className='btn-solid'>{Cancel}</Button>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default MoreDetailModal;
