import DetailImages from "@/Components/Property/Common/PropertyDetail/DetailImages/DetailImages";
import ShareModal from "@/Components/Property/Common/PropertyDetail/MainDetail/ShareModal";
import { PropertyDetailType } from "@/Types/ProductType";
import { FC, Fragment } from "react";
import { Container } from "reactstrap";
import MainDetail from "./BreadCrumbMainDetail";
import CarSlider from "@/Components/Themes/Cardemo-1/CarHomeSection/CarSlider";
import CarThumbnailSet from "../Details/CarThumbnailSlider/CarThumbnail/CarThumbnail";

const CarBreadCrumb: FC<PropertyDetailType> = ({ detailimages, mainClass, type, multiple, modern }) => {
  return (
    <Fragment>
      {type === "car-thumbnail" ? (
        <CarThumbnailSet />
      ) : (
        <div className={`car-breadcrumbs-section ${mainClass ? mainClass : ""}`}>
          <Container>
            {detailimages && (
              <div className='car-detail-image'>
                <DetailImages type={type} multiple={multiple} />
              </div>
            )}
            {modern && <CarSlider />}
            <MainDetail />
          </Container>
          <ShareModal />
        </div>
      )}
    </Fragment>
  );
};

export default CarBreadCrumb;
