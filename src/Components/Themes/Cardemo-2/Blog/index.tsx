import { BlogsTitle, ImagePath, ReadMore, SVGPath } from "@/Constants/Constants";
import { blogs, BlogsContentData } from "@/Data/Demo/CarDemo2";
import RatioImage from "@/utils/RatioImage";
import { RouteList } from "@/utils/RouteList";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Container, Row } from "reactstrap";
import CommonHeader from "../../Common/CommonHeader";
import { Fragment, useState } from "react";
import BlogModal from "./BlogModal";

const BlogSection = () => {
  const [videoCall, setVideoCall] = useState(false);
  const toggleClick = () => setVideoCall(!videoCall);
  return (
    <Fragment>
      <section className='car2-blog-section section-t-lg-space section-b-lg-space overflow-hidden'>
        <RatioImage src={`${ImagePath}/car2/bg-effect/featured-bg.png`} alt='featured-bg' className='bg-img' />
        <Container>
          <CommonHeader title={BlogsTitle} content={BlogsContentData} titleClass='text-white' headClass='title-style-5' />
          <Row className='justify-content-center gy-4'>
            <Col lg={6} sm={8} className='d-lg-block d-none'>
              <div className='main-blog-img position-relative'>
                <Image height={600} width={676} src={`${ImagePath}/car2/blog/1.jpg`} alt='b-1' className='img-fluid w-100 main-img' />
                <Button className='btn-play' onClick={toggleClick}>
                  <Image height={120} width={120} src={`${SVGPath}/car2/play.svg`} alt='play' className='img-fluid' />
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <ul className='blog-list'>
                {blogs.map((blog, index) => (
                  <li key={index}>
                    <Link href={blog.link} className='blog-img'>
                      <Image src={`${ImagePath}/${blog.image}`} alt={blog.title} className='img-fluid' width={200} height={150} />
                    </Link>
                    <div className='blog-content'>
                      <Link href={blog.link} className='blog-title'>
                        {blog.title}
                      </Link>
                      <p>{blog.description}</p>
                      <Link href={RouteList.Car.Detail.CarClassic} className='text-btn'>
                        {ReadMore} <i className='ri-arrow-right-line' />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <BlogModal videoCall={videoCall} toggleClick={toggleClick}/>
    </Fragment>
  );
};

export default BlogSection;
