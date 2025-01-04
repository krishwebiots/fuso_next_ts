import { RouteList } from "@/utils/RouteList";
import { FC, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import Article from "../BlogGridView/BlogSidebar/Article";
import BlogCategories from "../BlogGridView/BlogSidebar/BlogCategories";
import Breadcrumbs from "../BreadCrumb";
import BlogAuthor from "./BlogAuthor";
import BlogBanner from "./BlogBanner";
import BlogComment from "./BlogComment";
import BlogContent from "./BlogContent";
import BlogContentTitle from "./BlogContentTitle";

const BlogDetail: FC<{ type?: string }> = ({ type }) => {
  return (
    <Fragment>
      <Breadcrumbs title='Blog' subTitle='Blog' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' />
      <section className='blog-grid-section section-b-space'>
        <Container>
          <Row className='custom-row g-xxl-5 g-4'>
            <Col lg={3} className={`${type !== "right" ? "order-lg-0 " : "order-1"} `}>
              <div className='blog-sidebar'>
                <Article />
                <BlogCategories />
              </div>
            </Col>
            <Col lg={9}>
              <div className='blog-content-sec ratio_45'>
                <BlogBanner type={type} />
                {type !== "blog-quote" && <BlogContentTitle />}
                <BlogContent />
                <BlogAuthor />
                <BlogComment />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BlogDetail;
