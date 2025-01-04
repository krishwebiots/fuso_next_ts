"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import WishListContent from "@/Components/Property/PropertyWishlist/WishListContent";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";

const CarWishlistContainer = () => {   
  return (
    <Fragment>
      <Breadcrumbs mainclass='car-breadcrumbs-section' title='Car Wishlist' subTitle='Car Wishlist' url={RouteList.Home.CarDemo1} />
      <WishListContent type='car' />
    </Fragment>
  );
};

export default CarWishlistContainer;
