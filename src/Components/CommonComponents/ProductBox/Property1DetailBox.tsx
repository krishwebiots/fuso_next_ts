import { Href, VideoPath } from "@/Constants/Constants";
import { useAppDispatch } from "@/Redux/Hooks";
import { deleteProduct } from "@/Redux/Reducers/ProductReducers";
import { ProductCardType } from "@/Types/ProductType";
import { RouteList } from "@/utils/RouteList";
import SvgIcon from "@/utils/SvgIcon";
import { Trash } from "iconsax-react";
import Link from "next/link";
import { FC } from "react";
import toast from "react-hot-toast";
import { Label } from "reactstrap";
import PropertyBoxSlider from "./Common/PropertyBoxSlider";

const Property1DetailBox: FC<ProductCardType> = ({ data, view, wishlist, propertyid }) => {
  const dispatch = useAppDispatch();
  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
    toast.success("Property successfully Removed !");
  };
  return (
    <div className='featured-box'>
      {view === "video" ? (
        <div className='featured-video'>
          <video autoPlay muted loop>
            <source src={data.video ? `${VideoPath}/${data.video}` : `${VideoPath}/1.mp4`} type='video/mp4' />
            <source src={data.video ? `${VideoPath}/${data.video}` : `${VideoPath}/1.mp4`} type='video/ogg' />
          </video>
        </div>
      ) : (
        <div className='featured-main-img'>
          <a href={view === "multiple" ? Href : RouteList.Property.Detail.PropertySidebarLayout} className={"featured-img"}>
            <PropertyBoxSlider view={view} data={data} />
          </a>
          {data.label && <Label className='save-btn'>{data.label.text}</Label>}
          {wishlist ? (
            <Link href={Href} className='remove-button' onClick={() => propertyid && handleDelete(propertyid)}>
              <Trash className='iconsax' size={20} color='black' />
            </Link>
          ) : (
            <Link href={Href} className='wishlist-btn'>
              <i className='ri-bookmark-line'></i>
            </Link>
          )}
        </div>
      )}
      <div className='featured-content'>
        <Link href={RouteList.Property.Detail.PropertySidebarLayout}>{data.title}</Link>
        <p>{data.location}</p>
        <ul className='featured-list'>
          {data?.features?.map((item, i) => {
            return (
              <li key={i}>
                <SvgIcon iconId={`/property/sprite/featured.svg#${item.icon}`} />
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
        <div className='featured-price'>
          <h5>${data.price}</h5>
          <Link href={RouteList.Property.Detail.PropertySidebarLayout} className='btn-solid'>
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Property1DetailBox;
