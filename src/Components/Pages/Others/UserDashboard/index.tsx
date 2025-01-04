"use client";
import Breadcrumbs from "@/Components/CommonComponents/BreadCrumb";
import { RouteList } from "@/utils/RouteList";
import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import UserSidebar from "./UserSidebar";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Href } from "@/Constants/Constants";
import DashboardTabs from "./DashboardTabs";

const UserDashboardContainer = () => {
  const { UserDashboardSidebar } = useAppSelector((state) => state.layout);

  return (
    <Fragment>
      <Breadcrumbs title='User Dashboard' subTitle='Dashboards' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' image />
      <section className='section-b-space user-dashboard-section'>
        <Container>
          <Row>
            <UserSidebar />
            <DashboardTabs/>
          </Row>
        </Container>
      </section>
      <Link href={Href} className={`filter-overlay ${UserDashboardSidebar ? "show" : ""}`} />
    </Fragment>
  );
};

export default UserDashboardContainer;
