import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import React from "react";
import { Col, TabContent, TabPane } from "reactstrap";
import Dashboard from "./Dashboard";
import { SettingMenu } from "@/Constants/Constants";
import { useDispatch } from "react-redux";
import { setUserDashboardSidebar } from "@/Redux/Layout/LayoutReducers";
import Link from "next/link";
import MyProperty from "../MyProperty";
import CreateProperty from "../CreateProperty";

const DashboardTabs = () => {
  const { activeTab } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  return (
    <Col lg={9}>
      <Link href='#!' className='btn-solid filter-btn mb-sm-4 mb-3' onClick={() => dispatch(setUserDashboardSidebar())}>
        {SettingMenu}
      </Link>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={"dashboard"}>
          <Dashboard />
        </TabPane>
        <TabPane tabId={"listing"}>
          <MyProperty />
        </TabPane>
        <TabPane tabId={"property"}>
          <CreateProperty/>
        </TabPane>
      </TabContent>
    </Col>
  );
};

export default DashboardTabs;
