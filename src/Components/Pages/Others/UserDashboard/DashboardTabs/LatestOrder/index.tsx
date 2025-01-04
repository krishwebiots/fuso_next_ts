import { LatestOrderTitle, SVGPath } from "@/Constants/Constants";
import { LayesteOrderCategories, OrderTabData } from "@/Data/Pages/Others";
import Image from "next/image";
import { useState } from "react";
import { Button, Col, Nav, NavItem, TabContent, TabPane } from "reactstrap";
import TableOrder from "./TableOrder";

const LatestOrder = () => {
  const [activeTab, setActiveTab] = useState("sedan");

  return (
    <Col xl={7}>
      <div className='white-card'>
        <h4 className='dashboard-inner-title'>{LatestOrderTitle}</h4>
        <Nav pills>
          {LayesteOrderCategories.map((item, i) => {
            return (
              <NavItem key={i}>
                <Button className={`nav-link ${activeTab === item.id ? "active" : ""}`} onClick={() => setActiveTab(item.id)}>
                  <Image width={40} height={40} src={`${SVGPath}/${item.imgSrc}`} alt='sedan' className='img-fluid' />
                </Button>
              </NavItem>
            );
          })}
        </Nav>
        <TabContent activeTab={activeTab}>
          {OrderTabData.map((item, i) => {
            return (
              <TabPane key={i} tabId={item.id}>
                <TableOrder type={item.id} />
              </TabPane>
            );
          })}
        </TabContent>
      </div>
    </Col>
  );
};

export default LatestOrder;
