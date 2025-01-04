import CarProductBox1 from "@/Components/CommonComponents/ProductBox/CarProductBox1";
import Job1DetailBox from "@/Components/CommonComponents/ProductBox/Job1DetailBox";
import NotFound from "@/Components/CommonComponents/ProductBox/NotFound";
import Property1DetailBox from "@/Components/CommonComponents/ProductBox/Property1DetailBox";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import React, { FC, Fragment, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

const WishListContent: FC<{ type?: string }> = ({ type }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const showproperty = productItem.filter((item) => item.type === type);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <section className={`${type === "car" ? "car-shop-section car-product-section" : type === "job" ? "section-b-space" : ""} section-t-md-space section-b-md-space`}>
      <Container>
        <Row className={`gy-4 ${type === "car" ? "ratio_65" : type === "car" ? "g-4" : "ratio_landscape"} `}>
          {showproperty.length >= 0 ? (
            showproperty.map((item, i) => {
              return (
                <Fragment key={i}>
                  {type === "car" ? (
                    <Col xxl={3} lg={4} sm={6} className='table-row' data-aos='fade-up' data-aos-duration={100 * (i + 1)}>
                      <CarProductBox1 data={item} wishlist index={i} carid={item.id} />
                    </Col>
                  ) : type === "job" ? (
                    <Col xl={4} md={6} className='table-row' data-aos='fade-up' data-aos-duration={100 * (i + 1)}>
                      <Job1DetailBox data={item} wishlist index={i} jobid={item.id} />
                    </Col>
                  ) : (
                    <Col xxl={3} lg={4} sm={6} className='table-row' data-aos='fade-up' data-aos-duration={100 * (i + 1)}>
                      <Property1DetailBox data={item} wishlist index={i} propertyid={item.id} />
                    </Col>
                  )}
                </Fragment>
              );
            })
          ) : (
            <NotFound word='No items found in Wishlist' />
          )}
        </Row>
      </Container>
    </section>
  );
};

export default WishListContent;
