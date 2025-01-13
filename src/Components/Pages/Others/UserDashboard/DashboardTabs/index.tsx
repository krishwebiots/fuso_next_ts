import { SettingMenu } from "@/Constants/Constants";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setUserDashboardSidebar } from "@/Redux/Layout/LayoutReducers";
import Link from "next/link";
import { Col, TabContent, TabPane } from "reactstrap";
import CreateProperty from "../CreateProperty";
import MyFavorites from "../MyFavorites";
import MyProperty from "../MyProperty";
import Privacy from "../Privacy";
import Profile from "../Profile";
import Dashboard from "./Dashboard";

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
          <CreateProperty />
        </TabPane>
        <TabPane tabId={"profile"}>
          <Profile />
        </TabPane>
        <TabPane tabId={"favorites"}>
          <MyFavorites />
        </TabPane>
        <TabPane tabId={"privacy"}>
          <Privacy />
        </TabPane>
      </TabContent>
    </Col>
  );
};

export default DashboardTabs;
