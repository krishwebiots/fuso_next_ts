import { Sections, TabData } from "@/Data/Property";
import { PropertyDetailType } from "@/Types/ProductType";
import UseStickyBar from "@/utils/UseStickyBar";
import React, { FC, Fragment, useState } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { AccordionBody, AccordionHeader, AccordionItem, Container, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledAccordion } from "reactstrap";
import FAQ from "./DetailBodyItem/FAQ";
import Fetures from "./DetailBodyItem/Fetures";
import OverViewSection from "./DetailBodyItem/OverView";
import PropertyDescription from "./DetailBodyItem/PropertyDescription";
import ReviewProperty from "./DetailBodyItem/Review";
import ScheduleTour from "./DetailBodyItem/ScheduleTour";

const DetailBody: FC<PropertyDetailType> = ({ type }) => {
  const fix = UseStickyBar(300);
  const [activeTab, setActiveTab] = useState(TabData[0].id);
  const [open, setOpen] = useState(TabData[0].id);
  const toggleaccordion = (id: React.SetStateAction<string>) => {
    setOpen(id);
  };
  const toggle = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <Fragment>
      {type === "scrollspy" ? (
        <Fragment>
          <div className={`sticky-header ${fix ? "sticky" : ""}`}>
            <Container>
              <Nav tabs>
                {Sections.slice(0, 6).map(({ id, label }) => (
                  <NavItem key={id}>
                    <NavLink data-to-scrollspy-id={id} href={`#${id}`}>
                      {label}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Container>
          </div>
          <ScrollSpy activeClass='active' updateHistoryStack={false} scrollThrottle={100}>
            {Sections.map(({ labelComponent }, i) => (
              <Fragment key={i}>{labelComponent}</Fragment>
            ))}
          </ScrollSpy>
        </Fragment>
      ) : type === "tabs" ? (
        <Fragment>
          <Nav tabs>
            {Sections.slice(0, 6).map((tab) => (
              <NavItem key={tab.id}>
                <NavLink className={activeTab === tab.id ? "active" : ""} onClick={() => toggle(tab.id)}>
                  {tab.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={activeTab}>
            {Sections.map((tab) => (
              <TabPane tabId={tab.id} key={tab.id}>
                {tab.labelComponent}
              </TabPane>
            ))}
          </TabContent>
          <ReviewProperty label />
          <ScheduleTour label />
        </Fragment>
      ) : type === "accordion" ? (
        <Fragment>
          <UncontrolledAccordion defaultOpen={TabData[0].id} stayOpen toggle={toggleaccordion}>
            {Sections.map((item, i) => (
              <AccordionItem key={i}>
                <AccordionHeader targetId={item.id}>{item.label}</AccordionHeader>
                <AccordionBody accordionId={item.id}>{item.component}</AccordionBody>
              </AccordionItem>
            ))}
          </UncontrolledAccordion>
        </Fragment>
      ) : type === "car" ? (
        <Fragment>
          <OverViewSection type={type} />
          <PropertyDescription type={type} />
          <Fetures />
          <FAQ />
          <ReviewProperty type={type} />
        </Fragment>
      ) : (
        <>
          {Sections.map(({ labelComponent }, index) => (
            <Fragment key={index}>{labelComponent}</Fragment>
          ))}
        </>
      )}
    </Fragment>
  );
};

export default DetailBody;
