import { AboutTitle, FollowUsForMore, FusoCarRental, ImagePath, LuxuryCar, SVGPath } from "@/Constants/Constants";
import { AboutContentData, AboutData, LuxuryCarContentData } from "@/Data/Demo/Demo1";
import { RouteList } from "@/utils/RouteList";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import CommonHeader from "../../Common/CommonHeader";
import Image from "next/image";
import RatioImage from "@/utils/RatioImage";
import { FC } from "react";

const About: FC<{ header?: boolean }> = ({ header }) => {
  return (
    <section className='car-about-section section-b-space'>
      <Container>
        {!header && <CommonHeader title={AboutTitle} content={AboutContentData} headClass='title-style-2' animation />}
        <Row className='align-items-center gy-xl-0 gy-3'>
          <Col xl='9' lg='8'>
            <div className='about-top-img'>
              <Image width={1026} height={393} src={`${ImagePath}/car/about/1.jpg`} alt='a-1' className='img-fluid' />
            </div>
          </Col>
          <Col xl='3' lg='4'>
            <div className='about-top-content'>
              <h2>{FusoCarRental}</h2>
              <Link href={RouteList.Pages.Other.AboutUs2} className='simple-btn'>
                {FollowUsForMore}
                <ArrowRight />
              </Link>
            </div>
          </Col>
          <Col xl='5' lg='6' className='order-lg-0 order-1'>
            <div className='about-bottom-content'>
              <CommonHeader title={LuxuryCar} content={LuxuryCarContentData} />
              <ul className='about-list'>
                {AboutData.map((item, index) => (
                  <li key={index}>
                    <div className='about-list-icon'>
                      <RatioImage src={`${SVGPath}/${item.image}`} alt='timer' className='img-fluid' />
                    </div>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xl='7' lg='6'>
            <div className='about-bottom-img'>
              <Image width={756} height={432} src={`${ImagePath}/car/about/2.jpg`} alt='a-2' className='img-fluid' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
