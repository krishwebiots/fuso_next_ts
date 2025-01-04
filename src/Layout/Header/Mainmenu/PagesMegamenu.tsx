import { MainMenu } from "@/Types/LayoutType";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";

const PagesMegamenu: React.FC<MainMenu> = ({ mainMenu }) => {
  const { t } = useTranslation("common");
  return (
    <div className='mega-menu sample'>
      <Row className='row-cols-xxl-5 gy-xl-4'>
        {mainMenu.map((child, index) => (
          <Col key={index}>
            {child.section &&
              child.section.map((item, index) => (
                <div key={index} className='link-section'>
                  <h5 className='menu-title'>{t(item.title ? item.title : "")}</h5>
                  <ul className='link-list'>
                    {item?.children?.map((subChild, subIndex) => (
                      <li key={subIndex}>
                        <Link className='menu-link' href={subChild.path ? subChild.path : RouteList.Home.CarDemo1}>
                          {t(subChild.title ? subChild.title : "")}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PagesMegamenu;
