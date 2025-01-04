import CarCategory from "@/Components/Car/Others/CarTopCategory/CarCategory";
import CarTopFilter from "@/Components/Car/Others/CarTopFilter/TopFilter";
import JobRightSideBar from "@/Components/Job/Others/JobBothSidebar/RightSide";
import { Filters } from "@/Constants/Constants";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setCardToShow, setOpenFilterSidebar } from "@/Redux/Layout/LayoutReducers";
import { fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import { GridViewType } from "@/Types/ProductType";
import { FC, Fragment, useEffect } from "react";
import { Col, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import FilterSidebar from "./Filter";
import FilterTags from "./Filter/FilterTags";
import GridLayout from "./GridLayout";
import TagsShowBox from "./TagsShowBox";

const GridView: FC<GridViewType> = ({ type, gridSize, gridType, view, scrollType, map, modalType, offcanvasSide, side, topFilter, sectionClass, cardShow, tagclass, mapSide, filterclass, category, filter, detailboxstyle, tagfilter, fluid }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const { openFilterSidebar } = useAppSelector((state) => state.layout);
  const showProduct = productItem.filter((item) => item.type === type);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(setCardToShow(cardShow || 6));
  }, [cardShow, dispatch]);
  return (
    <Fragment>
      <section className={`${type !== "job" ? "section-t-md-space section-b-md-space" : ""} ${sectionClass ? sectionClass : ""}`}>
        {category && <CarCategory />}
        <div className={`${gridSize === 4 ? "custom-container" : fluid ? "container-fluid" : "container"}`}>
          <Row>
            {filter && <CarTopFilter />}
            {side != "nosidebar" && (
              <Col xl={3} className={`filter-sidebar ${side === "right" ? "order-1" : ""}`}>
                <FilterSidebar value={showProduct} modalType={modalType} filterclass={filterclass} type={type} />
              </Col>
            )}
            <Col className={`${side === "nosidebar" ? "col-lg-12" : side === "both-side" ? "col-xl-6" : "col-xl-9"}`}>
              {tagfilter && <TagsShowBox />}
              <FilterTags side={side} topFilter={topFilter} type={type} mainclass={tagclass} />
              {map ? (
                <Fragment>
                  <Row className='gy-4'>
                    <Col xl={6} className={`map-section ${mapSide === "right" ? "order-1" : ""}`}>
                      <div id='map'>
                        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20281.52037088709!2d56.051818439171534!3d25.89548611084295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef67bc7d52f2459%3A0xa922da11fbe1044d!2zQWxqb29kIFJlc29ydCDYpdiz2KrYsdin2K3YqSDYp9mE2KzZiNiv!5e0!3m2!1sen!2sin!4v1731671548714!5m2!1sen!2sin' width={650} height={800} style={{ border: 0 }} allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade' title='Google Maps Embed of Toronto' />
                      </div>
                    </Col>
                    <GridLayout value={showProduct} type={type} gridSize={gridSize} gridType={gridType} view={view} scrollType={scrollType} map={map} />
                  </Row>
                </Fragment>
              ) : (
                <GridLayout value={showProduct} type={type} gridSize={gridSize} gridType={gridType} view={view} scrollType={scrollType} map={map} detailboxstyle={detailboxstyle} jobads />
              )}
            </Col>
            {side === "both-side" && <JobRightSideBar />}
          </Row>
        </div>
      </section>
      <Offcanvas fade direction={offcanvasSide === "right" ? "end" : "start"} isOpen={openFilterSidebar} toggle={() => dispatch(setOpenFilterSidebar())}>
        <OffcanvasHeader toggle={() => dispatch(setOpenFilterSidebar())}>{Filters}</OffcanvasHeader>
        <OffcanvasBody>
          <FilterSidebar value={showProduct} modalType={modalType} type={type} />
        </OffcanvasBody>
      </Offcanvas>
    </Fragment>
  );
};

export default GridView;
