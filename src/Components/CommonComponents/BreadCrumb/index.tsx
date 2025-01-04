import { ImagePath } from "@/Constants/Constants";
import { BreadcrumbsType } from "@/Types/CommonComponentsType";
import RatioImage from "@/utils/RatioImage";
import Link from "next/link";
import { FC } from "react";
import { Container } from "reactstrap";

const Breadcrumbs: FC<BreadcrumbsType> = ({ title, image, subTitle, url, mainclass }) => {
  return (
    <div className={`${mainclass ? mainclass : "breadcrumbs-section without-search-breadcrumbs"} `}>
      {image && <RatioImage src={`${ImagePath}/other/breadcrumbs-img.jpg`} alt='b-1' className='img-fluid bg-img' />}
      <Container>
        <div className='breadcrumbs-main'>
          <h2>{title}</h2>
          <ul className='breadcrumbs-list'>
            <li>
              <Link href={url}>Home</Link>
            </li>
            <li>{subTitle}</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
