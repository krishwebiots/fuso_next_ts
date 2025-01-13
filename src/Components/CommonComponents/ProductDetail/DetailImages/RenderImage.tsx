import { Href, ImagePath, VideoTitle } from "@/Constants/Constants";
import { setVideoModal } from "@/Redux/Layout/LayoutReducers";
import { RenderImageType } from "@/Types/ProductType";
import { Play } from "iconsax-react";
import Link from "next/link";
import { FC } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useDispatch } from "react-redux";
import { Button, Col } from "reactstrap";

const RenderImageItem: FC<RenderImageType> = ({ type, item, multiple }) => {
  const dispatch = useDispatch();
  const imageSrc = `${ImagePath}/${type === "car-detail" ? "car/product" : "property/detail-main"}/${item}.jpg`;
  const ImageBoxClass = multiple ? `col-md-4 col-6 ${item > 3 ? "col-lg-3" : ""}` : type === "car-detail" ? (item === 1 ? "col-lg-6 position-relative" : "col-6") : "col-xl-6 p-0";
  return (
    <Gallery>
      <Col className={ImageBoxClass} key={item}>
        <Item original={imageSrc} width='1300' height='800'>
          {({ ref, open }) => (
            <div className='gallery-img'>
              <Link href={Href} onClick={open} className={`bg-size ${type === "car-detail" ? "gallery-img" : ""}`} style={{ backgroundImage: `url(${imageSrc})` }}>
                <img className='img-fluid bg-img' ref={ref} src={imageSrc} alt='Image_description' style={{ display: "none" }} />
              </Link>
            </div>
          )}
        </Item>
        {item === 1 && type === "car-detail" && !multiple && (
          <Button className='video-modal-btn' onClick={() => dispatch(setVideoModal())}>
            <Play className='iconsax' />
            {VideoTitle}
          </Button>
        )}
      </Col>
    </Gallery>
  );
};

export default RenderImageItem;
