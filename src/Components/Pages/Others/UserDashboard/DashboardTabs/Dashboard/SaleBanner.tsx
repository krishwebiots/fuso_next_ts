import MoreDetailModal from "@/Components/CommonComponents/Modal/MoreDetailModal";
import { ImagePath, MoreDetails, MoreDetailsTitle } from "@/Constants/Constants";
import { setMoreDetailModal } from "@/Redux/Layout/LayoutReducers";
import RatioImage from "@/utils/RatioImage";
import { useDispatch } from "react-redux";
import { Button, Col } from "reactstrap";

const SaleBanner = () => {
  const dispacth = useDispatch();
  return (
    <Col md={8}>
      <div className='white-card property-card'>
        <div className='card-title'>
          <h5>{MoreDetailsTitle}</h5>
          <Button className='btn-solid' onClick={() => dispacth(setMoreDetailModal())}>
            {MoreDetails}
          </Button>
        </div>
        <RatioImage src={`${ImagePath}/other/user-dashboard/home-card.png`} alt='home-card' className='img-fluid' />
      </div>
      <MoreDetailModal />
    </Col>
  );
};

export default SaleBanner;
