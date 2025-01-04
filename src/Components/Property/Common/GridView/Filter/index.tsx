import { AmenitiesData, BhkOptions, PropertyTypeData } from "@/Data/Property";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { FilterSidebarType } from "@/Types/ProductType";
import { FC, Fragment, useEffect, useState } from "react";
import { UncontrolledAccordion } from "reactstrap";
import CommonAccrodian from "./Common/CommonAccrodian";
import BrandsFilter from "./BrandsFilter";
import { setMinAndMaxKilometers, setMinAndMaxPrice, setMinAndMaxSalary } from "@/Redux/Reducers/FilterSlice";
import { ColorData, FilterCategory, FuelType, ModelYearData, OwnerData, SeatsData, TransmitionData } from "@/Data/Car";
import { AllCategoriesData, ByData, CompanyTypeData, EducationData, JobTypeData, LocationData, TopCompaniesData, WorkModeData } from "@/Data/Job";

const FilterSidebar: FC<FilterSidebarType> = ({ value, modalType, filterclass, type }) => {
  const dispatch = useAppDispatch();
  const { propertyType, bedsRooms, squareFeetStatus, yearBuiltStatus, amenities, categories, fuelType, modelYear, seats, color, cartransmitions, ownerDetail, jobAllCategory,JobWorkMode ,JobCompanytype ,JobEducation ,JobbyCheck,JobLocation,JobTopCompnies,JobType} = useAppSelector((state) => state.filter);
  const [openItems, setOpenItems] = useState<string[]>(["1", "2", "3", "4", "5", "6", "7"]);
  const toggle = (id: string) => setOpenItems((openItems) => (openItems.includes(id) ? openItems.filter((item) => item !== id) : [...openItems, id]));

  let minPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) < Math.round(res?.price) ? obj : res)) : undefined;
  let maxPrice = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.price) > Math.round(res?.price) ? obj : res)) : undefined;

  let minKilomiters = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.kilometers) < Math.round(res?.kilometers) ? obj : res)) : undefined;
  let maxKilomiters = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.kilometers) > Math.round(res?.kilometers) ? obj : res)) : undefined;

  let minSalary = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.salary) < Math.round(res?.salary) ? obj : res)) : undefined;
  let maxSalary = Array.isArray(value) && value.length > 0 ? value.reduce((res: any, obj: any) => (Math.round(obj?.salary) > Math.round(res?.salary) ? obj : res)) : undefined;

  useEffect(() => {
    dispatch(setMinAndMaxPrice([minPrice?.price, maxPrice?.price]));
    dispatch(setMinAndMaxKilometers([minKilomiters?.kilometers, maxKilomiters?.kilometers]));
    dispatch(setMinAndMaxSalary([minSalary?.salary, maxSalary?.salary]));
  }, [dispatch, maxKilomiters, maxPrice, maxSalary?.salary, minKilomiters, minPrice, minSalary?.salary]);

  return (
    <div className={`${filterclass ? filterclass : ""} property-sidebar`}>
      <UncontrolledAccordion defaultOpen={openItems} stayOpen toggle={toggle} className={`${type === "car" ? "car" : type === "job" ? "car-accordion job" : ""}-accordion`}>
        {type === "property" ? (
          <Fragment>
            {modalType === "modal" && <CommonAccrodian title='Map Modal' id='7' modalType={modalType} />}
            <CommonAccrodian title='Property Type' id='1' data={PropertyTypeData} checkValue={propertyType} />
            <CommonAccrodian title='Price range' id='2' priceRange maxPrice={maxPrice?.price} minPrice={minPrice?.price} />
            <CommonAccrodian title='beds rooms' id='3' data={BhkOptions} checkValue={bedsRooms} />
            <CommonAccrodian title='Square Feet' id='4' squareFeet values={squareFeetStatus} />
            <CommonAccrodian title='Year Built' id='5' squareFeet values={yearBuiltStatus} />
            <CommonAccrodian title='Amenities' id='6' data={AmenitiesData} checkValue={amenities} />
          </Fragment>
        ) : type === "job" ? (
          <Fragment>
            <CommonAccrodian title='All Categories' id='1' data={AllCategoriesData} checkValue={jobAllCategory} type={type}/>
            <CommonAccrodian title='Salary' id='2' priceRange type={type} />
            <CommonAccrodian title='Work Mode' id='3' data={WorkModeData} checkValue={JobWorkMode} type={type} radio/>
            <CommonAccrodian title='Company Type' id='4' data={CompanyTypeData} checkValue={JobCompanytype} type={type}/>
            <CommonAccrodian title='Education' id='5' data={EducationData} checkValue={JobEducation} type={type}/>
            <CommonAccrodian title='by' id='6' data={ByData} checkValue={JobbyCheck} type={type}/>
            <CommonAccrodian title='Location' id='7' data={LocationData} checkValue={JobLocation} type={type}/>
            <CommonAccrodian title="Top Companies" id="8" data={TopCompaniesData} checkValue={JobTopCompnies} type={type}/>
            <CommonAccrodian title="Job Type" id="9" data={JobTypeData} checkValue={JobType} type={type}/>
          </Fragment>
        ) : (
          <Fragment>
            <BrandsFilter id='1' />
            <CommonAccrodian title='Budget' id='2' priceRange type={type} />
            <CommonAccrodian title='Categories' id='3' data={FilterCategory} checkValue={categories} type={type} radio />
            <CommonAccrodian title='Fuel Type' id='4' data={FuelType} checkValue={fuelType} type={type} />
            <CommonAccrodian title='Modal Year' id='5' data={ModelYearData} checkValue={modelYear} type={type} radio />
            <CommonAccrodian title='Seats' id='6' data={SeatsData} checkValue={seats} type={type} />
            <CommonAccrodian title='Color' id='7' data={ColorData} checkValue={color} type={type} colors />
            <CommonAccrodian title='KMS Driven' id='8' priceRange type='KMS' />
            <CommonAccrodian title='Transmission' id='9' data={TransmitionData} checkValue={cartransmitions} type={type} />
            <CommonAccrodian title='Owner' id='10' data={OwnerData} checkValue={ownerDetail} type={type} />
          </Fragment>
        )}
      </UncontrolledAccordion>
    </div>
  );
};

export default FilterSidebar;
