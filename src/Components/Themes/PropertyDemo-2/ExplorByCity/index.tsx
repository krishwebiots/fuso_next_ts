import { CityTitle, ImagePath } from "@/Constants/Constants";
import { CityList } from "@/Data/Demo/PropertyDemo2";
import { RouteList } from "@/utils/RouteList";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import CommonHeader from "../../Common/CommonHeader";

const ExplorByCitys = () => {
  return (
    <section className='section-t-space property2-city-section section-b-space'>
      <Container>
        <CommonHeader title={CityTitle} headClass='title-style-1 title-style-6' subClass='horizontal-title' url={RouteList.Property.Grid.Property3Grid} view />
        <Row className='gy-xl-0 gy-md-4 g-3 justify-content-center ratio_125'>
          {CityList.map((item, i) => {
            return (
              <Col xl={3} md={6} key={i}>
                <Link href={RouteList.Property.Grid.Property3Grid} className='city-box'>
                  <div className='city-img'>
                    <Image width={332} height={415} src={`${ImagePath}/property2/city/${i + 1}.jpg`} alt='city-img' className='bg-img' />
                  </div>
                  <div className='city-content'>
                    <h4>{item.country}</h4>
                    <h6>{item.properties} Properties</h6>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default ExplorByCitys;
