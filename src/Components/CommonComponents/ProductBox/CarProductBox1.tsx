import { Href, ImagePath, ShowMore, SVGPath } from "@/Constants/Constants";
import { useEffect, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSwiperSetting } from "@/Data/Demo/Demo1";
import { ProductCardType } from "@/Types/ProductType";
import RatioImage from "@/utils/RatioImage";
import { RouteList } from "@/utils/RouteList";
import Image from "next/image";
import Link from "next/link";
import { Label } from "reactstrap";
import { Trash } from "iconsax-react";
import { useAppDispatch } from "@/Redux/Hooks";
import { deleteProduct } from "@/Redux/Reducers/ProductReducers";
import toast from "react-hot-toast";

const CarProductBox1: React.FC<ProductCardType> = ({ data, gridType, view, wishlist,carid }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const dispatch = useAppDispatch();
  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
    toast.success("Car successfully Removed !");
  };
  const singleimg = data.image.slice(0, 1).map((img) => {
    return img;
  });
  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);

  return (
    <div className='featured-box'>
      <div className='featured-main-img'>
        <Link href={RouteList.Car.Detail.CarClassic} className='featured-img'>
          {view === "noslider" ? (
            <RatioImage src={`${ImagePath}/${singleimg}`} alt='featured-img' className='img-fluid bg-img' />
          ) : (
            <Swiper {...ProductSwiperSetting} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
              {data.image.map((testimonial, index) => (
                <SwiperSlide key={index} className='bg-size'>
                  <RatioImage src={`${ImagePath}/${testimonial}`} alt='featured-img' className='img-fluid bg-img' />
                </SwiperSlide>
              ))}
              <div className='swiper-button-next' />
              <div className='swiper-button-prev' />
            </Swiper>
          )}
        </Link>
        {wishlist ? (
          <Link href={Href} className='remove-button' onClick={() => carid && handleDelete(carid)}>
            <Trash className='iconsax' color='black' size={20}/>
          </Link>
        ) : (
          <Link href={Href} className='save-btn'>
            <i className='ri-bookmark-line' />
          </Link>
        )}
        {data.label && (
          <Label className={data.label.class}>
            <i className={data.label.icon} />
            {data.label.text}
          </Label>
        )}
      </div>
      <div className='featured-content'>
        <Link href={RouteList.Car.Detail.CarClassic}>{data.title}</Link>
        {gridType === "list-view" && <p className='featured-detail'>{data.description}</p>}
        <p>{data.emi}</p>
        <ul className='featured-list'>
          {data.features.map((item, index) => (
            <li key={index}>
              <Image height={16} width={16} src={`${SVGPath}/${item.icon}`} alt='profile-2user' className='img-fluid' />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className='featured-price'>
          <h5>${data.price}</h5>
          <Link href={RouteList.Car.Detail.CarClassic} className='arrow-btn'>
            {ShowMore} <i className='ri-arrow-right-up-line' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarProductBox1;
