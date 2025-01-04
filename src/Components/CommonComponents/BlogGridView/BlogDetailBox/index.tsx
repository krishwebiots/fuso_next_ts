import Pagination from "@/Components/Property/Common/GridView/Filter/Pagination";
import { BlogData } from "@/Data/Pages";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setCardToShow } from "@/Redux/Layout/LayoutReducers";
import { BlogGridViewType } from "@/Types/CommonComponentsType";
import { FC, Fragment, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import { Gallery } from "react-photoswipe-gallery";
import { Button, Col } from "reactstrap";
import BlogGridCard from "./BlogGridCard";
import BlogTitleBox from "./BlogTitlePage";

const BlogDetailBox: FC<BlogGridViewType> = ({ type, gridSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { cardToShow } = useAppSelector((state) => state.layout);
  const totalPages = Math.ceil(BlogData.length / cardToShow);
  const showProduct = type === "infinite-scroll" ? BlogData?.slice(0, cardToShow * currentPage) : BlogData?.slice(cardToShow * currentPage - cardToShow, cardToShow * currentPage);;
  const ColBoxClass = gridSize === 1 ? "col-12" : gridSize === 2 ? "col-6" : gridSize === 3 ? "col-6 col-xl-4" : gridSize === 4 ? "col-6 col-xl-3" : type === "title_box" ? "col-md-6 col-12" : "";
  const BreakpointColumnsObj = { default: 3, 1199: 3, 700: 2, 500: 1 };
  const dispatch = useAppDispatch();
  const fetchMoreData = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const infiniteScroolClass = { dataLength: showProduct.length, next: fetchMoreData, hasMore: currentPage < totalPages, className: "row", loader: <h4 className='spinner'>Loading...</h4> };
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  return (
    <Fragment>
      <div className={type !== "masonry" ? "g-sm-4 g-3 ratio3_2 row" : ""}>
        {type === "masonry" ? (
          <Gallery>
            <Masonry breakpointCols={BreakpointColumnsObj} className='row grid g-3 g-xl-4' columnClassName={`grid-item ${ColBoxClass} w-sm-100`}>
              {showProduct.map((data, index) => (
                <BlogGridCard data={data} type={type} index={index} key={index} />
              ))}
            </Masonry>
          </Gallery>
        ) : type === "infinite-scroll" ? (
          <InfiniteScroll {...infiniteScroolClass}>
            {showProduct.map((data, index) => (
              <Col className={ColBoxClass} key={index}>
                <BlogGridCard data={data} type={type} index={index} />
              </Col>
            ))}
          </InfiniteScroll>
        ) : (
          <Fragment>
            {showProduct.map((item, i) => {
              return (
                <Col key={i} className={`w-sm-100 ${ColBoxClass} ${type === "layout-1" ? (i === 0 ? "col-xxl-3 col-lg-4 col-6 w-sm-100 order-lg-0 order-1" : i === 1 ? "col-xxl-9 col-lg-8" : "col-xxl-3 col-lg-4 col-6") : ""} `}>
                  {type === "title" ? <BlogTitleBox data={item} /> : <BlogGridCard data={item} index={i} />}
                </Col>
              );
            })}
          </Fragment>
        )}
      </div>       

      {type === "load-more" ? (
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
        type !== "infinite-scroll" && <Pagination type={type} currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </Fragment>
  );
};

export default BlogDetailBox;
