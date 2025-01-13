'use client';
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { content404, GoBack, ImagePath, NotFoundTitle } from "@/Constants/Constants";
import RatioImage from "@/utils/RatioImage";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import { Fragment } from "react";
import { Container } from "reactstrap";

const Error404Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title='404' subTitle='404' url={RouteList.Home.CarDemo1} mainclass='car-breadcrumbs-section' image />
      <section className='section-b-space error-section'>
        <Container>
          <div className='error-box'>
            <div className='error-content'>
              <RatioImage src={`${ImagePath}/other/404.svg`} alt={"404"} className='img-fluid' />
              <h2>{NotFoundTitle}</h2>
              <p>{content404}</p>
              <Link href={RouteList.Home.CarDemo1} className='btn-solid'>
                {GoBack}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Error404Container;
