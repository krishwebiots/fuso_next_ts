"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/ProductReducers";
import { RouteList } from "@/utils/RouteList";
import { Fragment, useEffect } from "react";
import WishListContent from "./WishListContent";

const PropertyWishlistContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Breadcrumbs title='Wishlist' subTitle='Wishlist' url={RouteList.Home.PropertyDemo1} />
      <WishListContent type='property' />
    </Fragment>
  );
};

export default PropertyWishlistContainer;
