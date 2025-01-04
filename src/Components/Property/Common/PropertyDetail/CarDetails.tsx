import { useAppDispatch } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import { PropertyDetailType } from "@/Types/ProductType";
import { FC, Fragment, useEffect } from "react";
import { Button, Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import DetailImages from "./DetailImages/DetailImages";
import DetailBody from "./DetailBody";
import DetailSidebar from "./DetailSidebar";
import RelatedProperty from "./RelatedProperty";
import UseStickyBar from "@/utils/UseStickyBar";
import { CarDetailTabs, classicsliderdata } from "@/Data/Car";
import ScrollSpy from "react-ui-scrollspy";
import { Swiper, SwiperSlide } from "swiper/react";
import { dynamicNumber } from "@/utils";
import { Href, ImagePath } from "@/Constants/Constants";
import RatioImage from "@/utils/RatioImage";
import { ArrowLeft2, ArrowRight2, Play } from "iconsax-react";
import { setVideoModal } from "@/Redux/Layout/LayoutReducers";
import VideoModal from "@/Components/CommonComponents/Modal/VideoModal";

const CarDetail: FC<PropertyDetailType> = ({ type, detailimages, scrollspy, classicSlider }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  const fix = UseStickyBar(300);

  return (
    <div className={`section-b-space car-detail-section`}>
      <Fragment>
        <Container>
          {detailimages && (
            <div className='car-detail-image'>
              <DetailImages type='car-detail' />
            </div>
          )}
          {classicSlider && (
            <Row className='custom-row'>
              <Col lg={8}>
                <div className='car-detail-image position-relative'>
                  <Swiper {...classicsliderdata} className='detail-simple-slider ratio2_3'>
                    {dynamicNumber(9).map((img, i) => (
                      <SwiperSlide key={i}>
                        <a href={Href}>
                          <RatioImage src={`${ImagePath}/car/product/${img}.jpg`} alt={`d-img-${img}`} className='img-fluid bg-img' />
                        </a>
                      </SwiperSlide>
                    ))}
                    <div className='swiper-button-next'>
                      <ArrowRight2 size={10} color='white' />
                    </div>
                    <div className='swiper-button-prev'>
                      <ArrowLeft2 size={10} color='white' />
                    </div>
                  </Swiper>
                  <Button className='video-modal-btn' onClick={() => dispatch(setVideoModal())}>
                    <Play className='iconsax' color='black' />
                    Video
                  </Button>
                </div>
                <div className='car-detail-right'>
                  <DetailBody type={type} />
                </div>
              </Col>
              <Col lg={4}>
                <DetailSidebar type={type} />
              </Col>
              <VideoModal />
            </Row>
          )}
          <Row className='custom-row'>
            <Col lg={9}>
              {scrollspy && (
                <div className={`sticky-nav ${fix ? "sticky" : ""}`}>
                  <Container>
                    <Nav pills>
                      {CarDetailTabs.map(({ id, label }) => (
                        <NavItem key={id}>
                          <NavLink data-to-scrollspy-id={id} href={`#${id}`}>
                            {label}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </Container>
                </div>
              )}
              <div className='car-detail-right'>
                {scrollspy ? (
                  <ScrollSpy activeClass='active' updateHistoryStack={false} scrollThrottle={100}>
                    <DetailBody type={type} />
                  </ScrollSpy>
                ) : (
                  <DetailBody type={type} />
                )}
              </div>
            </Col>
            <Col lg={3}>
              <DetailSidebar type={type} />
            </Col>
          </Row>
          <RelatedProperty type={type} />
        </Container>
      </Fragment>
    </div>
  );
};

export default CarDetail;
