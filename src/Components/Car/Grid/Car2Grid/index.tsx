import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import GridView from "@/Components/CommonComponents/GridView";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";

const Car2GridContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainclass='car-breadcrumbs-section' title='Car Shop' subTitle='Car Shop' url={RouteList.Home.CarDemo1} />
      <GridView type={"car"} sectionClass='car-shop-section car-product-section' filterclass='filter-sidebar' tagclass='car-list-header' />
    </Fragment>
  );
};

export default Car2GridContainer;
