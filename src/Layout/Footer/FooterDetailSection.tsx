import { FooterSectionProps } from "@/Types/LayoutType";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Col } from "reactstrap";

const FooterDetailSection: React.FC<FooterSectionProps> = ({ data, footerDemo }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => setOpenSections((prevState) => ({ ...prevState, [title]: !prevState[title] }));

  return (
    <Fragment>
      {data.map((item, index) => {
        const Colclassname = item.contactList ? "col-lg-3 col-sm-5" : footerDemo ? "col-md-3 col-sm-6" : "col-md-2 col-sm-3";
        return (
          <Col key={index} className={`${Colclassname} ${openSections}[item.title] ? "open-footer-content" : ""`}>
            <div>
              <div className='footer-title'>
                <h4 onClick={() => toggleSection(item.title)}>{item.title}</h4>
              </div>
              <ul className={`footer-link ${item.contactList ? "footer-contact" : ""}`}>
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    {item.contactList ? (
                      <Fragment>
                        <i className={link.icon} />
                        <span>{link.title}</span>
                      </Fragment>
                    ) : (
                      <Link href={link.url ? link.url : ""}>{link.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        );
      })}
    </Fragment>
  );
};

export default FooterDetailSection;
