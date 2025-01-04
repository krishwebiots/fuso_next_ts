import React, { FC, Fragment, useEffect, useState } from "react";
import Breadcrumbs from "../BreadCrumb";
import { RouteList } from "@/utils/RouteList";
import { NavPortfolio, portfolioItems } from "@/Data/Pages/Portfolio";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import { ImagePath, PortfolioTitle } from "@/Constants/Constants";
import { useAppDispatch } from "@/Redux/Hooks";
import { setCardToShow } from "@/Redux/Layout/LayoutReducers";
import { PortfolioType } from "@/Types/PortfolioType";
import PortfolioBox from "./PortfolioBox";

const Portfolio: FC<PortfolioType> = ({ cardShow, gridSize, type, sectionClass }) => {
  const [activeTab, setActiveTab] = useState("all");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCardToShow(cardShow || 6));
  }, [cardShow, dispatch]);
  return (
    <Fragment>
      <Breadcrumbs title='Blog' subTitle='Blog' url={RouteList.Pages.Blog.Detail.BlogLeftClassic} mainclass='car-breadcrumbs-section' />
      <section className={`portfolio-section section-b-space ${sectionClass ? sectionClass : ""}`}>
        <Container>
          <h3>{PortfolioTitle}</h3>
          <div className='nav-tabs-portfolio'>
            <Nav pills>
              {NavPortfolio.map((tab) => (
                <NavItem key={tab.id} role='presentation'>
                  <NavLink className={`tab-filter ${activeTab === tab.id ? "active" : ""}`} id={tab.id} type='button' onClick={() => setActiveTab(tab.id)}>
                    {tab.label}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
          <PortfolioBox activeTab={activeTab} gridSize={gridSize} type={type} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Portfolio;
