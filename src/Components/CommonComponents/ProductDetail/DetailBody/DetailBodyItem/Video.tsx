import VideoModal from "@/Components/CommonComponents/Modal/VideoModal";
import { ImagePath, VideoTitle } from "@/Constants/Constants";
import { useAppDispatch } from "@/Redux/Hooks";
import { setVideoModal } from "@/Redux/Layout/LayoutReducers";
import { DetailBodyItemType } from "@/Types/ProductType";
import { Play } from "iconsax-react";
import { FC, Fragment } from "react";

const Video: FC<DetailBodyItemType> = () => {
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <div className='detail-body ratio_60' id="video">
        <h4 className='detail-page-title'>{VideoTitle}</h4>
        <div className='video-img'>
          <img src={`${ImagePath}/property/detail/4.jpg`} alt='v-1' className='img-fluid bg-img' />
          <a href='#videomodal' className='play-btn' onClick={() => dispatch(setVideoModal())}>
            <Play className='iconsax' color='white' size={24} />
          </a>
        </div>
      </div>
      <VideoModal />
    </Fragment>
  );
};

export default Video;
