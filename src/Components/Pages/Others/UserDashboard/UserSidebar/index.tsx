import ModalLogout from "@/Components/CommonComponents/Modal/ModalLogout";
import { Href, Logout } from "@/Constants/Constants";
import { sidebarItems } from "@/Data/Pages/Others";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setActiveTab, setLogoutModal, setUserDashboardSidebar } from "@/Redux/Layout/LayoutReducers";
import { Button, Col, Nav, NavItem, NavLink } from "reactstrap";
import UserProfile from "./UserProfile";

const UserSidebar = () => {
  const { UserDashboardSidebar, activeTab } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  return (
    <Col lg={3}>
      <div className={`left-sidebar filter-sidebar ${UserDashboardSidebar ? "open" : ""}`}>
        <Button className='close-btn' onClick={() => dispatch(setUserDashboardSidebar())}>
          <i className='ri-close-line' />
        </Button>
        <UserProfile />
        <Nav pills className='flex-column sidebar-list'>
          {sidebarItems.map((item, i) => {
            return (
              <NavItem key={i}>
                <NavLink className={`${item.id === activeTab ? " active" : ""}`} color='transparent' onClick={() => dispatch(setActiveTab(item.id))}>
                  {item.label}
                </NavLink>
              </NavItem>
            );
          })}
          <li>
            <a href={Href} className='btn-border' onClick={() => dispatch(setLogoutModal())}>
              {Logout}
            </a>
          </li>
        </Nav>
      </div>
      <ModalLogout />
    </Col>
  );
};

export default UserSidebar;
