import { BreadcrumbsType } from "@/Types/CommonComponentsType";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import React, { FC } from "react";
import { Container } from "reactstrap";

const PropertyBreadCrumb = () => {
  return (
    <div className='sortby-section'>
      <Container>
        <div className='breadcrumb-content'>          
          <ul className='breadcrumbs-list'>
            <li>
              <Link href={RouteList.Property.Grid.Property2Grid}>Home</Link>
            </li>
            <li>House in Amsterdam</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default PropertyBreadCrumb;
