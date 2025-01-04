import React, { Fragment } from "react";
import { Col } from "reactstrap";
import Link from "next/link";
import { CitySelectMenuProps } from "@/Types/HomeDemo";

const CitySelectMenu: React.FC<CitySelectMenuProps> = ({ multiColumn, cityList, selectedCity, onSelectCity, href }) => {
  return (
    <Fragment>
      {multiColumn? (
        <Col xl={4} sm={6}>
          <ul className='select-menu'>
            {cityList.map((city, key) => (
              <li key={key}>
                <Link className={`select-item ${city === selectedCity ? "active" : ""}`} href={href} onClick={() => onSelectCity(city)}>
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      ):(
        <ul className='select-menu'>
          {cityList.map((city, key) => (
            <li key={key}>
              <Link className={`select-item ${city === selectedCity? "active" : ""}`} href={href} onClick={() => onSelectCity(city)}>
                {city}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default CitySelectMenu;
