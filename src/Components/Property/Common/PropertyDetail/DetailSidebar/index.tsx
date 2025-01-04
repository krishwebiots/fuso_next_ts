import OfferPriceModal from "@/Components/CommonComponents/Modal/OfferPriceModal";
import TestDriverModal from "@/Components/CommonComponents/Modal/TestDriverModal";
import SimilarSidebar from "@/Components/Job/Detail/JobDetail4/SimilarSidebar";
import { useAppDispatch } from "@/Redux/Hooks";
import { setOfferPriceModal, setTestDriverModal } from "@/Redux/Layout/LayoutReducers";
import { DetailBodyItemType } from "@/Types/ProductType";
import { FC, Fragment } from "react";
import { Button, Col } from "reactstrap";
import ApplyThisJob from "../DetailBody/DetailBodyItem/ApplyThisJob";
import Friends from "../DetailBody/DetailBodyItem/Friends";
import KeyJobDetail from "../DetailBody/DetailBodyItem/KeyJobDetail";
import Apply from "./Apply";
import ContactDetail from "./ContactDetail";
import FeaturedProperty from "./FeaturedProperty";
import RequestExplore from "./RequestExplore";
import RightJobsBox from "./RightJobsBox";

const DetailSidebar: FC<DetailBodyItemType> = ({ type, detailtype }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={`${type === "car" ? "car-detail-sidebar" : type === "job" ? "detail-right-sidebar" : "detail-sidebar"}`}>
      {type === "car" ? (
        <Fragment>
          <div className='sidebar-box'>
            <Button className='btn-solid' onClick={() => dispatch(setTestDriverModal())}>
              <i className='ri-steering-2-line' /> Schedule test driver
            </Button>
            <Button className='btn-border' onClick={() => dispatch(setOfferPriceModal())}>
              <i className='ri-price-tag-3-line' /> Make an offer price
            </Button>
          </div>
          <div className={`sidebar-box`}>
            <div className='detail-sub-sidebar'>
              <ContactDetail type={type} />
              <RequestExplore type={type} />
            </div>
          </div>
          <div className={` sidebar-box `}>
            <FeaturedProperty type={type} />
          </div>
          <TestDriverModal />
          <OfferPriceModal />
        </Fragment>
      ) : type === "job" ? (
        <Fragment>
          {detailtype === "detail-3" ? (
            <KeyJobDetail />
          ) : detailtype === "detail-4" ? (
            <SimilarSidebar />
          ) : (
            <Fragment>
              {detailtype === "detail-2" || detailtype === "detail-5" ? <ApplyThisJob /> : <Apply />}
              <RightJobsBox title='Other Opportunities' />
              {detailtype === "detail-2" || (detailtype === "detail-5" && <Friends />)}
            </Fragment>
          )}
        </Fragment>
      ) : (
        <div className='detail-sidebar'>
          <div className='detail-sub-sidebar'>
            <ContactDetail />
            <RequestExplore />
          </div>
          <FeaturedProperty type={'property'} />
        </div>
      )}
    </div>
  );
};

export default DetailSidebar;
