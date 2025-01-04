import React, { FC, Fragment, useEffect, useRef } from "react";
import { Col, Container, Row } from "reactstrap";
import CommonHeader from "./CommonHeader";
import { BrowseByCategory, CategoriesTitle, ExploreByCategory, ImagePath, JobCategoryTitle, SVGPath } from "@/Constants/Constants";
import { CategoriesContentData, CategoriesSettingData } from "@/Data/Demo/Demo1";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import { dynamicNumber } from "@/utils";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type
import RatioImage from "@/utils/RatioImage";
import { JobCategoryContentData } from "@/Data/Demo/JobDemo1";
import { BrowseByCategoryContent, CategoriesSwiperData } from "@/Data/Demo/JobDemo2";

const Categories: FC<{ type?: string }> = ({ type }) => {
  const { categoryItem } = useAppSelector((state) => state.product);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <Fragment>
      {/* car demo-1 category */}
      {type == "cardemo-1" && (
        <section className='car-categories-section bg-color section-t-lg-space'>
          <Container>
            <CommonHeader title={CategoriesTitle} content={CategoriesContentData} headClass='title-style-2' animation />
            <Swiper {...CategoriesSettingData} className='car-categories-slider'>
              {categoryItem
                .filter((e) => dynamicNumber(7).includes(e.id))
                .map((car, index) => (
                  <SwiperSlide key={index}>
                    <div className='categories-box'>
                      <Link href={RouteList.Car.Listing.CarLeftList} className='categories-img'>
                        <Image width={200} height={82} src={`${ImagePath}/${car.categoryImage}`} alt={`car-${index + 1}`} className='img-fluid' />
                      </Link>
                      <div className='categories-board'>
                        <span>{car.label}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </Container>
        </section>
      )}
      {/* car demo-2 category */}
      {type == "cardemo-2" && (
        <section className='car2-category-section section-t-lg-space section-b-lg-space'>
          <Container>
            <CommonHeader title={ExploreByCategory} content={CategoriesContentData} headClass='title-style-2' />
            <div className='arrow-style-2 position-relative'>
              <Swiper {...CategoriesSettingData} navigation={true} className='car2-category-slider ratio3_2' onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
                {categoryItem
                  .filter(({ id }) => id >= 8 && id <= 13)
                  .map((car, index) => (
                    <SwiperSlide key={index}>
                      <div className='category-box'>
                        <Link href={RouteList.Car.Grid.Car3Grid} className='category-img'>
                          <RatioImage src={`${ImagePath}/${car.categoryImage}`} alt={`car-${index + 1}`} className='img-fluid bg-img' />
                        </Link>
                        <Link href={RouteList.Car.Grid.Car3Grid} className='category-title'>
                          {car.label}
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                <div className='swiper-button-next car2-category-next' />
                <div className='swiper-button-prev car2-category-prev' />
              </Swiper>
            </div>
          </Container>
        </section>
      )}
      {/* Job Job-1 category */}
      {type == "job-1" && (
        <section className='job-category-section section-b-space'>
          <Container>
            <CommonHeader title={JobCategoryTitle} content={JobCategoryContentData} headClass='title-style-3 text-center' />
            <Row className='gy-4'>
              {categoryItem
                .filter(({ id }) => id >= 14 && id <= 21)
                .map((category) => (
                  <Col xl={3} lg={4} sm={6} key={category.id}>
                    <div className='category-box'>
                      <Image height={74} width={54} src={`${SVGPath}/job/job-box/dots-category.svg`} alt='dots-category' className='img-fluid dot-img' />
                      <div className='category-icon'>
                        <Image height={42} width={42} src={`${SVGPath}/${category.categoryImage}`} alt={`category-${category.id}`} className='img-fluid' />
                      </div>
                      <div className='category-title'>
                        <Link href={RouteList.Job.Grid.JobGrid2}>
                          <h5>{category.label}</h5>
                        </Link>
                        <span>{category.jobList}</span>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
      )}
      {/* Job Job-2 category */}
      {type == "job-2" && (
        <section className='category-dark-section bg-transparent job-category-section'>
          <Container>
            <CommonHeader title={BrowseByCategory} content={BrowseByCategoryContent} headClass='title-style-4' />
            <div className='job-arrow position-relative'>
              <Swiper {...CategoriesSwiperData} className='dark-category-slider' onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
                {categoryItem
                  .filter(({ id }) => id >= 14 && id <= 21)
                  .map((category, index) => (
                    <SwiperSlide key={index}>
                      <div className='category-box'>
                        <div className='category-icon'>
                          <Image height={36} width={36} src={`${SVGPath}/${category.categoryImage}`} alt='c-1' className='img-fluid' />
                        </div>
                        <div className='category-title'>
                          <Link href={RouteList.Job.Grid.JobGrid2}>
                            <h5>{category.label}</h5>
                          </Link>
                          <span>{category.jobList}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className='swiper-button-next dark-category-next' />
              <div className='swiper-button-prev dark-category-prev' />
            </div>
          </Container>
        </section>
      )}
      {/* Property Property-1 category */}
      {type == "property-1" && (
        <section className='property-categories-section section-b-space bg-color'>
          <Container>
            <div className='title-style-1'>
              <h2>Categories</h2>
            </div>
            <Row className='row-cols-xl-5 row-cols-sm-3 row-cols-2 justify-content-center gy-xl-0 g-3'>
              {categoryItem
                .filter(({ id }) => id >= 29 && id <= 33)
                .map((item, i) => {
                  return (
                    <Col key={i}>
                      <Link href={RouteList.Property.Grid.Property2Grid}>
                        <div className='categories-box'>
                          <Image width={262} height={373} src={`${ImagePath}/${item.categoryImage}`} alt={item.label} className='img-fluid' />
                          <div className='categories-box-border'>
                            <div className='icon-name'>
                              <h5>{item.label}</h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </section>
      )}
      {/* Property Property-2 category */}
      {type == "property-2" && (
        <section className='section-t-lg-space property2-categories-section'>
          <Container>
            <div className='title-style-1 title-style-6'>
              <h2>Categories</h2>
            </div>
            <Row className='gy-xl-0 gy-md-4 g-3 justify-content-center'>
              {categoryItem.filter(({id}) => (id>=34 && id<=37)).map((item,i) =>{
                return (
                  <Col lg={3} xs={6} key={i}>
                    <Link href={RouteList.Property.Grid.Property3Grid}>
                      <div className='categories-box'>
                        <Image width={332} height={387} src={`${ImagePath}/${item.categoryImage}`} alt={item.label} className='img-fluid' />
                        <div className='categories-info'>
                          <h4>{item.label}</h4>
                          <h6>{item.propertyList}</h6>
                        </div>
                      </div>
                    </Link>
                  </Col>
                );
              })}              
            </Row>
          </Container>
        </section>
      )}
    </Fragment>
  );
};

export default Categories;
