import { BreadcrumbsType } from "@/Types/CommonComponentsType";
import Link from "next/link";
import { FC } from "react";
import { Container } from "reactstrap";

const JobBreadCrumb: FC<BreadcrumbsType> = ({title,subTitle,url}) => {
  return (
    <div className='job-breadcrumbs-section'>
      <Container>
        <h2>{title}</h2>
        <ul className='breadcrumbs-list'>
          <li>
            <Link href={url}>Home</Link>
          </li>
          <li>{subTitle}</li>
        </ul>
      </Container>
    </div>
  );
};

export default JobBreadCrumb;
