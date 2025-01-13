import CommonFileUpload from "@/Components/CommonComponents/CommonFileUpload";
import { AddProperty, GalleryTitle, Href } from "@/Constants/Constants";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className='user-form-box'>
      <h4 className='dashboard-title'>{GalleryTitle}</h4>
      <div className='upload-box'>
        <CommonFileUpload />
      </div>
      <div className='text-end mt-3'>
        <Link href={Href} className='btn-solid'>
          {AddProperty}
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
