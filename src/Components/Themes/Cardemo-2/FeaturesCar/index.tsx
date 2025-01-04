import { FeaturedCarTitle, ImagePath } from "@/Constants/Constants";
import RatioImage from "@/utils/RatioImage";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonHeader from "../../Common/CommonHeader";
import { FeaturedCarContentData } from "@/Data/Demo/CarDemo2";
import { useAppSelector } from "@/Redux/Hooks";
import CarProductBox2 from "@/Components/CommonComponents/ProductBox/CarProductBox2";

const FeaturesCar = () => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <section className='car2-featured-section section-t-lg-space section-b-lg-space overflow-hidden'>
      <RatioImage src={`${ImagePath}/car2/bg-effect/featured-bg.png`} alt='featured-bg' className='bg-img' />
      <Container>
        <CommonHeader title={FeaturedCarTitle} content={FeaturedCarContentData} headClass='title-style-5' titleClass='text-white' />
        <Row className='gy-4 justify-content-center'>
          {productItem.filter(({ id }) => [13, 14, 15].includes(id)).map((car, key) => (
              <Col xl='4' md='6' key={key}>
                <CarProductBox2 data={car} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesCar;
