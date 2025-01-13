"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { ConditionsTitle } from "@/Constants/Constants";
import { ConditionData, ConditionNavListData } from "@/Data/Pages/Others";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import Scrollspy from "../Common/Scrollspy";

const ConditionContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Conditions' subTitle='Conditions' url={RouteList.Home.CarDemo1} mainclass='car-breadcrumbs-section' image />
      <Scrollspy title={ConditionsTitle} list={ConditionNavListData} content={ConditionData} />
    </Fragment>
  );
};

export default ConditionContainer;
