import { FaqTitle, QuestionTitle } from "@/Constants/Constants";
import { PropertyAboutContent } from "@/Data/Demo/PropertyDemo1";
import { FaqNav } from "@/Data/Pages/Others";
import { Button, Container, Input, Nav, NavItem, TabContent, TabPane } from "reactstrap";
import FaqBox from "./FaqBox";
import { useState } from "react";

const FaqMain = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <section className='faq-section'>
      <Container>
        <div className='text-center content-title mb-0'>
          <h2>{FaqTitle}</h2>
          <p>{PropertyAboutContent}</p>
        </div>
        <div className='search-title'>
          <h3>{QuestionTitle}</h3>
          <div className='search-input'>
            <i className='iconsax' data-icon='search-normal-2'></i>
            <Input type='search' placeholder='Type Here Your Questions...' />
          </div>
        </div>
        <div className='nav-tabs-portfolio'>
          <Nav pills className='faq-tab'>
            {FaqNav.map((item, index) => (
              <NavItem key={index}>
                <Button className={`nav-link ${activeTab === item.type ? "active" : ""}`} color='transparent' onClick={() => setActiveTab(item.type)}>
                  {item.title}
                </Button>
              </NavItem>
            ))}
          </Nav>
        </div>
        <TabContent activeTab={activeTab}>
          {FaqNav.map((item, i) => (
            <TabPane tabId={item.type} key={i}>
              <FaqBox type={item.type} />
            </TabPane>
          ))}
        </TabContent>
      </Container>
    </section>
  );
};

export default FaqMain;
