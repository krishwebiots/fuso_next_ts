import Job6DetailBox from "@/Components/CommonComponents/ProductBox/Job6DetailBox";
import { UserJobSwiper } from "@/Data/Pages/Others";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import { useEffect } from "react";
import { Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";

const JobApplySlider = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const showproperty = productItem.filter((item) => item.type === "job");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);

  return (
    <Col xl={7}>
      <Swiper className='user-job-swiper job-hire-section' {...UserJobSwiper}>      
          {showproperty.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Job6DetailBox data={item} userdashboard/>
              </SwiperSlide>
            );
          })}        
      </Swiper>
    </Col>
  );
};

export default JobApplySlider;
