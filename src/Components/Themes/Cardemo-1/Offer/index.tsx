import CarProductBox1 from "@/Components/CommonComponents/ProductBox/CarProductBox1";
import { OfferTitle, SVGPath } from "@/Constants/Constants";
import { OfferContentData } from "@/Data/Demo/Demo1";
import { useAppSelector } from "@/Redux/Hooks";
import RatioImage from "@/utils/RatioImage";
import { RouteList } from "@/utils/RouteList";
import { useState } from "react";
import { Button, Container, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonHeader from "../../Common/CommonHeader";

const Offer = () => {
  const [activeTab, setActiveTab] = useState("honda");
  const { productItem, categoryItem } = useAppSelector((state) => state.product);
  return (
    <section className='car-offer-section car-product-section section-b-space bg-color'>
      <Container>
        <CommonHeader title={OfferTitle} content={OfferContentData} headClass='title-style-2' animation />
        <Nav pills className='nav nav-pills' id='myTab' role='tablist'>
          {categoryItem.filter(({ id }) => id <= 7).map((tab, index) => (
              <NavItem key={index}>
                <Button className={`nav-link${tab.value === activeTab ? " active" : ""}`} onClick={() => setActiveTab(tab.value)}>
                  <RatioImage src={`${SVGPath}/${tab.categoryLogo}`} alt={tab.label} className='img-fluid' />
                  {tab.label}
                </Button>
              </NavItem>
            ))}
          <NavItem>
            <NavLink href={RouteList.Car.Grid.Car3Grid}>More 10+</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          {categoryItem.filter(({ id }) => id <= 7).map((item, index) => (
              <TabPane className={`fade ${activeTab === item.value ? "show" : ""}`} tabId={item.value} key={index}>
                <Swiper slidesPerView={4} spaceBetween={30} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]} className="car-tab-slider ratio_65">
                  {productItem.filter(({ category }) => category?.includes(activeTab)).map((item, index) => (
                      <SwiperSlide key={index}>
                        <CarProductBox1 data={item} />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </TabPane>
            ))}
        </TabContent>
      </Container>
    </section>
  );
};

export default Offer;
