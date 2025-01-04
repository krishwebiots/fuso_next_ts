import React, { useState } from "react";
import Link from "next/link";
import { Href } from "@/Constants/Constants";
import { Cityes } from "@/Data/Layout/Header";
import { PropertyDropDownProps } from "@/Types/LayoutType";
import CitySelectMenu from "@/Components/Themes/Common/CitySelectMenu";

const PropertyDropDown: React.FC<PropertyDropDownProps> = ({ isJobOrProperty }) => {
  const [selectedCity, setSelectedCity] = useState("Amsterdam");
  return (
    <div>
      {!isJobOrProperty && (
        <div className='select-dropdown'>
          <Link href={Href} className='select-button'>
            {selectedCity}
          </Link>
          <div className='mega-menu-1'>
            <CitySelectMenu multiColumn={false} cityList={Cityes} selectedCity={selectedCity} onSelectCity={(city) => setSelectedCity(city)} href={Href} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDropDown;
