import { MostSearchedTitle } from "@/Constants/Constants";
import { useAppSelector } from "@/Redux/Hooks";
import { useEffect, useRef } from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { MostSearchedContentData } from "@/Data/Demo/Demo1";
import CarProductBox1 from "@/Components/CommonComponents/ProductBox/CarProductBox1";
import CommonHeader from "../../Common/CommonHeader";

const CarDemoProduct = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { productItem } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <section className='car-product-section section-b-space'>
      <Container>
        <CommonHeader title={MostSearchedTitle} content={MostSearchedContentData} headClass='title-style-2' animation />
        <Row className='gy-4 ratio_65'>
          {productItem.filter(({ id }) => (id<=8)).map((item, index) => (
              <Col xxl='3' lg='4' sm='6' data-aos='fade-up' data-aos-duration={200 * (index + 1)} key={index}>
                <CarProductBox1 data={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default CarDemoProduct;
