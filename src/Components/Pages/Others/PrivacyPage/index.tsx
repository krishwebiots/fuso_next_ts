"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { UserPrivacy } from "@/Constants/Constants";
import { PrivacyNavListData, PrivacyPolicyData } from "@/Data/Pages/Others";
import { RouteList } from "@/utils/RouteList";
import { Fragment } from "react";
import Scrollspy from "../Common/Scrollspy";

const PrivacyPageContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Privacy' subTitle='About' url={RouteList.Home.CarDemo1} mainclass='car-breadcrumbs-section' image />
      <Scrollspy title={UserPrivacy} list={PrivacyNavListData} content={PrivacyPolicyData} />
    </Fragment>
  );
};

export default PrivacyPageContainer;
