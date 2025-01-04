import React, { FC, Fragment, useEffect } from "react";
import Breadcrumbs from "../BreadCrumb";
import { RouteList } from "@/utils/RouteList";
import { Col, Container, Row } from "reactstrap";
import BlogSidebar from "./BlogSidebar";
import BlogDetailBox from "./BlogDetailBox";
import { useAppDispatch } from "@/Redux/Hooks";
import { setCardToShow } from "@/Redux/Layout/LayoutReducers";
import { BlogGridViewType } from "@/Types/CommonComponentsType";
import BlogTopSlider from "@/Components/Pages/Blog/BlogPage/BlogtopSlider/BlogSlider";

const BlogGridView: FC<BlogGridViewType> = ({ cardShow, side, gridSize, type, sectionClass, topslider }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCardToShow(cardShow || 9));
  }, [cardShow, dispatch]);
  return (
    <Fragment>
      <Breadcrumbs title='Blog' subTitle='Blog' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' />
      <section className={`${sectionClass ? sectionClass : ""} blog-grid-section section-b-space`}>
        <Container>
          {topslider && <BlogTopSlider />} 
          <Row className='custom-row gy-lg-0 gy-4'>
            {side !== "no" && (
              <Col lg={3} className={`${side !== "right" ? "order-lg-0" : ""} order-1`}>
                <BlogSidebar />
              </Col>
            )}
            <div className={side === "no" ? "col-lg-12" : "col-lg-9"}>
              <div className={`${type === "load-more" && "featured-wrapper"}`}>
                <BlogDetailBox type={type} gridSize={gridSize} />
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BlogGridView;
