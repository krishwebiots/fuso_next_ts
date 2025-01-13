import VideoModal from "@/Components/CommonComponents/Modal/VideoModal";
import { Href, ImagePath } from "@/Constants/Constants";
import { CarDetailTabs, classicsliderdata } from "@/Data/Car";
import { useAppDispatch } from "@/Redux/Hooks";
import { setVideoModal } from "@/Redux/Layout/LayoutReducers";
import { fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import { PropertyDetailType } from "@/Types/ProductType";
import { dynamicNumber } from "@/utils";
import RatioImage from "@/utils/RatioImage";
import UseStickyBar from "@/utils/UseStickyBar";
import { ArrowLeft2, ArrowRight2, Play } from "iconsax-react";
import { FC, Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import DetailBody from "./DetailBody";
import DetailImages from "./DetailImages/DetailImages";
import DetailSidebar from "./DetailSidebar";
import RelatedProperty from "./RelatedProperty";

const CarDetail: FC<PropertyDetailType> = ({ type, detailimages, scrollspy, classicSlider }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  const fix = UseStickyBar(300);
  const [activeTab, setActiveTab] = useState(CarDetailTabs[0].id);

  const toggle = (id: string) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" }); // Smooth scroll to section
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 20;

      CarDetailTabs.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
                        <NavItem key={id} onClick={() => toggle(id)}>
                          <NavLink className={`${activeTab === id ? "active" : ""}`} data-to-scrollspy-id={id} href={`#${id}`}>
                            {label}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </Container>
                </div>
              )}
              <div className='car-detail-right'>{scrollspy ? <DetailBody type={type} /> : <DetailBody type={type} />}</div>
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
