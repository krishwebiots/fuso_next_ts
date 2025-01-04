import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setAmenities, setBedsRooms, setCategories, setColor, setFuelType, setJobAllCategory, setJobByCheck, setJobCompanytype, setJobEducation, setJobLocation, setJobTopCompanies, setJobType, setJobWorkMode, setModelYear, setOwner, setPropertyType, setSeats, setSquareFeetStatus, setTransmitions, setYearBuiltStatus } from "@/Redux/Reducers/FilterSlice";
import { CommonFilterType } from "@/Types/ProductType";
import { ChangeEvent, FC } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Input, Label } from "reactstrap";
import RangeInputFields from "./RangeInputFields";
import Link from "next/link";
import { ImagePath } from "@/Constants/Constants";
import { setMapModal } from "@/Redux/Layout/LayoutReducers";

const CommonFilter: FC<CommonFilterType> = ({ title, colors, id, data, checkValue, priceRange, squareFeet, values, modalType, type, radio }) => {
  const dispatch = useAppDispatch();
  const { propertyType, bedsRooms, amenities, categories, fuelType, modelYear, seats, color, cartransmitions, ownerDetail,jobAllCategory,JobWorkMode,JobCompanytype,JobEducation,JobbyCheck ,JobLocation,JobTopCompnies,JobType} = useAppSelector((state) => state.filter);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, title: string, field?: string) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    const actionCreator = (option?: string[] | string) => {
      if (Array.isArray(option)) return isChecked ? [...option, value] : option.filter((v) => v !== value);
      else if (typeof option === "string") return isChecked ? value : option !== value;
      else return [field === "min" ? +value : values?.[0], field === "max" ? +value : values?.[1]];
    };

    const updateState = {
      "Property Type": () => {
        let updatedPropertyType: string[] = [];
        if (isChecked) {
          if (value === "all") updatedPropertyType = ["all", "apartment", "house", "villa", "office", "farmhouse"];
          else updatedPropertyType = propertyType.includes("all") ? [value] : [...propertyType, value];
        } else {
          if (value === "all") updatedPropertyType = [];
          else {
            updatedPropertyType = propertyType.filter((selectedValue) => selectedValue !== value);
            if (updatedPropertyType.includes("all")) {
              updatedPropertyType = updatedPropertyType.filter((type) => type !== "all");
            }
          }
        }
        if (updatedPropertyType.length >= 5 && !updatedPropertyType.includes("all")) updatedPropertyType = ["all", "apartment", "house", "villa", "office", "farmhouse"];
        dispatch(setPropertyType(updatedPropertyType));
      },
      "beds rooms": () => dispatch(setBedsRooms(actionCreator(bedsRooms))),
      Amenities: () => dispatch(setAmenities(actionCreator(amenities))),
      "Square Feet": () => dispatch(setSquareFeetStatus(actionCreator())),
      "Year Built": () => dispatch(setYearBuiltStatus(actionCreator())),
      Categories: () => dispatch(setCategories(actionCreator(categories))),
      "Fuel Type": () => dispatch(setFuelType(actionCreator(fuelType))),
      "Modal Year": () => dispatch(setModelYear(actionCreator(modelYear))),
      Seats: () => dispatch(setSeats(actionCreator(seats))),
      Color: () => dispatch(setColor(actionCreator(color))),
      Transmission: () => dispatch(setTransmitions(actionCreator(cartransmitions))),
      Owner: () => dispatch(setOwner(actionCreator(ownerDetail))),
      "All Categories": () => dispatch(setJobAllCategory(actionCreator(jobAllCategory))),
      "Work Mode":() => dispatch(setJobWorkMode(actionCreator(JobWorkMode))),
      "Company Type": () => dispatch(setJobCompanytype(actionCreator(JobCompanytype))),
      "Education": () => dispatch(setJobEducation(actionCreator(JobEducation))),
      "by": () => dispatch(setJobByCheck(actionCreator(JobbyCheck))),
      "Location": () => dispatch(setJobLocation(actionCreator(JobLocation))),
      "Top Companies": () => dispatch(setJobTopCompanies(actionCreator(JobTopCompnies))),
      "Job Type": () => dispatch(setJobType(actionCreator(JobType))),
    };

    updateState[title as keyof typeof updateState]?.();
  };

  return (
    <AccordionItem>
      <AccordionHeader targetId={id}>{title}</AccordionHeader>
      <AccordionBody accordionId={id}>
        {priceRange ? (
          <RangeInputFields type={type} />
        ) : modalType ? (
          <Link href='#mapModal' className='map-image'>
            <img src={`${ImagePath}/property/map.png`} alt='map' className='img-fluid' />
            <span className='btn-border' onClick={() => dispatch(setMapModal())}>
              Explore on map
            </span>
          </Link>
        ) : squareFeet ? (
          <div className='main-number'>
            <div className='input-number range-number'>
              <Input type='number' placeholder='Min' value={values ? values[0] : 0} onChange={(event) => handleCheckboxChange(event, title, "min")} />
            </div>
            -
            <div className='input-number range-number'>
              <Input type='number' placeholder='Max' value={values ? values[1] : 0} onChange={(event) => handleCheckboxChange(event, title, "max")} />
            </div>
          </div>
        ) : type === "car" || type === "job"? (
          <div className={`sidebar-choose-list categories-list ${colors ? "filter-color" : ""}`}>
            {data?.map((item, index) => (
              <div className='main-choose-item' key={index}>
                <div className='choose-item'>
                  <Input type={radio ? "radio" : "checkbox"} name={radio ? `category-${id}` : ""} id={item.id} value={item.type} checked={checkValue?.includes(item.type)} onChange={(event) => handleCheckboxChange(event, title)} />
                  <Label htmlFor={item.id} className='label-flex'>
                    <span>{item.label}</span>
                  </Label>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ul className={`most-rating ${id !== "1" && "scroll-box"}`}>
            {data?.map((item, index) => (
              <li key={index}>
                <Input type='checkbox' id={item.id} value={item.type} checked={checkValue?.includes(item.type)} onChange={(event) => handleCheckboxChange(event, title)} />
                <Label htmlFor={item.id}>
                  <span>{item.label}</span>
                </Label>
              </li>
            ))}
          </ul>
        )}
      </AccordionBody>
    </AccordionItem>
  );
};

export default CommonFilter;
