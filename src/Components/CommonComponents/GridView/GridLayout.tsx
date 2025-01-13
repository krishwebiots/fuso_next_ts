import CarProductBox1 from "@/Components/CommonComponents/ProductBox/CarProductBox1";
import Job4DetailBox from "@/Components/CommonComponents/ProductBox/Job4DetailBox";
import NotFound from "@/Components/CommonComponents/ProductBox/NotFound";
import Property1DetailBox from "@/Components/CommonComponents/ProductBox/Property1DetailBox";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setCardToShow, setTotalProduct } from "@/Redux/Layout/LayoutReducers";
import { FC, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button, Col, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { GridLayoutType, ProductCardType, ProductType } from "@/Types/ProductType";
import Pagination from "./Filter/Pagination";
import UseFilterCar from "./UseFilterCar";
import UseFilterJob from "./UseFilterJob";
import UseFilterProperty from "./UseFilterProperty";
import Job5DetailBox from "@/Components/CommonComponents/ProductBox/Job5DetailBox";
import Job1DetailBox from "@/Components/CommonComponents/ProductBox/Job1DetailBox";
import Job6DetailBox from "@/Components/CommonComponents/ProductBox/Job6DetailBox";
import Job7DetailBox from "@/Components/CommonComponents/ProductBox/Job7DetailBox";
import JobAdsBox from "./JobAdsBox";
import { useParams, useSearchParams } from "next/navigation";
import Job8DetailBox from "@/Components/CommonComponents/ProductBox/Job8DetailBox";

const GridLayout: FC<GridLayoutType> = ({ value, type, gridType, gridSize, view, scrollType, map, detailboxstyle, jobads }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { cardToShow } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const Product = type === "property" ? UseFilterProperty({ value }) : type === "car" ? UseFilterCar({ value }) : type === "job" ? UseFilterJob({ value }) : [];
  const totalPages = Math.ceil(Product.length / cardToShow);
  const showProduct = scrollType === "infinite" ? Product.slice(0, cardToShow * currentPage) : Product?.slice(cardToShow * currentPage - cardToShow, cardToShow * currentPage);
  const Coldata = gridSize === 3 ? "col-lg-4 col-sm-6" : gridSize === 4 ? "col-xxl-3 col-lg-4" : gridSize === 1 ? "col-xl-12" : "col-sm-6";
  const RowData = `gy-4 ${gridType === "list-view" ? (type === "car" ? "car-list-section ratio_65" : "ratio3_2") : view === "multiple" ? "ratio_65" : "ratio_landscape"} ${scrollType === "load_more" ? "load-more-list" : ""}`;
  const renderjobbox = (data: ProductType, index: number) => (detailboxstyle === "style-progress" ? <Job4DetailBox data={data} /> : detailboxstyle === "style-2" ? <Job5DetailBox data={data} /> : detailboxstyle === "style-3" ? <Job6DetailBox data={data} /> : detailboxstyle === "style-4" || detailboxstyle === "job-ads" ? <Job7DetailBox data={data} index={index} jobads /> :detailboxstyle === "both" ? <Job8DetailBox data={data} /> : <Job1DetailBox data={data} />);
  const fetchMoreData = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const infiniteScroolClass = { dataLength: showProduct.length, next: fetchMoreData, hasMore: currentPage < totalPages, className: "row", loader: <h4 className='spinner'>Loading...</h4> };
  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };   

  useEffect(() => {
    dispatch(setTotalProduct(Product.length || 0));
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [Product.length, dispatch, totalPages, currentPage]);

  return (
    <div className={`${map ? "col-xl-6" : ""} ${scrollType === "load-more" ? "featured-wrapper" : ""}`}>
      <Row className={RowData}>
        {type === "property" &&
          (scrollType === "infinite" ? (
            <InfiniteScroll {...infiniteScroolClass}>
              {showProduct.map((data, index) => (
                <Col className={Coldata} key={data.id || index}>
                  <Property1DetailBox data={data} view={view} />
                </Col>
              ))}
            </InfiniteScroll>
          ) : (
            showProduct.map((data, index) => (
              <Col className={Coldata} key={data.id || index}>
                <Property1DetailBox data={data} view={view} />
              </Col>
            ))
          ))}

        {type === "car" &&
          (scrollType === "infinite" ? (
            <InfiniteScroll {...infiniteScroolClass}>
              {showProduct.map((data, index) => (
                <Col className={Coldata} key={data.id || index}>
                  <CarProductBox1 data={data} view={view} />
                </Col>
              ))}
            </InfiniteScroll>
          ) : (
            showProduct.map((data, index) => (
              <Col className={Coldata} key={data.id || index}>
                <CarProductBox1 data={data} view={view} gridType={gridType} />
              </Col>
            ))
          ))}

        {type === "job" && (scrollType === "infinite" ? (
          <InfiniteScroll {...infiniteScroolClass}>
            {showProduct.map((data, index) => (
              <Col className={Coldata} key={data.id || index}>
                {renderjobbox(data, index)}
              </Col>
            ))}
          </InfiniteScroll>
        ) : (
          showProduct.map((data, index) => (
            <Col className={Coldata} key={data.id || index}>
              {renderjobbox(data, index)}
              {detailboxstyle === "job-ads" && index % 2 === 1 ? <JobAdsBox id={index} /> : ""}
            </Col>
          ))
        ))}
        {showProduct.length === 0 && <NotFound word='No Property found' />}
      </Row>

      {scrollType === "load-more" ? (
        showProduct.length >= cardToShow ? (
          <Button className='btn-solid load-more' onClick={() => dispatch(setCardToShow(cardToShow + 3))}>
            LOAD MORE
          </Button>
        ) : (
          <p id='no-more-products' style={{ display: "block" }}>
            No more products available.
          </p>
        )
      ) : (
        scrollType !== "infinite" && (
          <div className={`${type === "job" ? "text-center" : ""}`}>
            <Pagination type={type} currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        )
      )}
    </div>
  );
};

export default GridLayout;
