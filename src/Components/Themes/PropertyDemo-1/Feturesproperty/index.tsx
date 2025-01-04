import Property1DetailBox from "@/Components/CommonComponents/ProductBox/Property1DetailBox";
import { useAppSelector } from "@/Redux/Hooks";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import CommonHeader from "../../Common/CommonHeader";
import { OurFeaturedProperties } from "@/Constants/Constants";

const Feturesproperty = () => {
  const { productItem } = useAppSelector((state) => state.product);

  return (
    <section className='property-featured-section section-b-space bg-color'>
      <Container>        
        <CommonHeader headClass="title-style-1" view url={RouteList.Property.Grid.Property3Grid} title={OurFeaturedProperties} subClass="horizontal-title"/>
        <Row className='gy-4 ratio_landscape'>
          {productItem.filter(({ id }) => id >= 29 && id <= 36).map((item, i) => {
              return (
                <Col xxl={3} lg={4} sm={6} data-aos='fade-up' data-aos-duration={200 * (i + 1)} key={i}>
                  <Property1DetailBox data={item} />
                </Col>
              );
           })}
        </Row>
      </Container>
    </section>
  );
};

export default Feturesproperty;
