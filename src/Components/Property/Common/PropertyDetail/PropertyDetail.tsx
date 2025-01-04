import { Sections } from "@/Data/Property";
import { PropertyDetailType } from "@/Types/ProductType";
import UseStickyBar from "@/utils/UseStickyBar";
import { FC, Fragment, useEffect } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import StickySlider from "../../Details/PropertySticky/StickySlider";
import DetailBody from "./DetailBody";
import DetailImages from "./DetailImages/DetailImages";
import DetailSidebar from "./DetailSidebar";
import MainDetail from "./MainDetail";
import RelatedProperty from "./RelatedProperty";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/ProductReducers";

const PropertyDetail: FC<PropertyDetailType> = ({ type, mainClass, thumb }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  const fix = UseStickyBar(300);
  return (
    <div className={`property-detail-section section-b-space ${mainClass ? mainClass : ""}`}>
      {type === "sidebar-layout" ? (
        <Fragment>
          <Container className={`${thumb ? "p-sm-0" : ""}`}>
            <DetailImages type={type} />
          </Container>
          <Container>
            <Row>
              <Col xl={9} lg={6}>
                <MainDetail />
                <DetailBody type={type} />
              </Col>
              <Col xl={3} lg={4}>
                <DetailSidebar />
              </Col>
            </Row>
            <RelatedProperty type={"property"}/>
          </Container>
        </Fragment>
      ) : type === "sticky" ? (
        <Fragment>
          <Container className='p-sm-0'>
            <div className={`sticky-tab sticky-header ${fix ? "sticky" : ""}`}>
              <Nav tabs>
                {Sections.map(({ id, label }) => (
                  <NavItem key={id}>
                    <NavLink data-to-scrollspy-id={id} href={`#${id}`}>
                      {label}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </div>
            <Row className='gx-xxl-5 gy-4 gy-xl-0'>
              <Col xl={6}>
                <StickySlider />
              </Col>
              <Col xl={6}>
                <ScrollSpy activeClass='active' updateHistoryStack={false} scrollThrottle={100}>
                  <DetailBody type={type} />
                </ScrollSpy>
              </Col>
              <RelatedProperty type={"property"}/>
            </Row>
          </Container>
        </Fragment>
      ) : (
        <Fragment>
          <div className='detail-images'>
            <Container fluid={thumb ? true : false} className={thumb ? "p-0" : ""}>
              <DetailImages type={type} thumb={thumb} />
            </Container>
          </div>
          <Container>
            <MainDetail />
            <Row>
              <Col xl={9} lg={8}>
                <DetailBody type={type} />
              </Col>
              <Col xl={3} lg={4}>
                <DetailSidebar />
              </Col>
            </Row>
            <RelatedProperty type={"property"}/>
          </Container>
        </Fragment>
      )}
    </div>
  );
};

export default PropertyDetail;
