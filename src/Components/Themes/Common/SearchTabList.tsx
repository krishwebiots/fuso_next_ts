import RangeInputFields from "@/Components/CommonComponents/GridView/Filter/Common/RangeInputFields";
import { GifPath, Search } from "@/Constants/Constants";
import { HomeTabData } from "@/Data/Demo/Common";
import { HomeNavData } from "@/Data/Demo/Demo1";
import { useAppDispatch } from "@/Redux/Hooks";
import { setSearchModal } from "@/Redux/Layout/LayoutReducers";
import { SearchTabListType } from "@/Types/HomeDemo";
import { RouteList } from "@/utils/RouteList";
import UseOutsideDropdown from "@/utils/UseOutsideDropdown";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FC, Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import { Button, Dropdown, DropdownItem, DropdownMenu, Input, Label, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const SearchTabList: FC<SearchTabListType> = ({ showTab, datePicker, scrollDown, form, pills, endPoint, tabs, showNav, button, icon }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [selected, setSelected] = useState(HomeTabData.filter(({ id }) => showTab?.includes(id)));
  const [basicTab, setBasicTab] = useState(1);
  const dispatch = useAppDispatch();

  const dropdownRefs = selected.map(() => UseOutsideDropdown(false));

  const handleSelect = (id: number, value: string) => {
    setSelected((prev) => prev.map((item) => (item.id === id ? { ...item, inputLabel: value } : item)));
  };

  const handleChange = (date: Date, id: number) => {
    setStartDate(date);
    handleSelect(id, format(date, "MM/dd/yyyy"));
  };

  return (
    <Fragment>
      {!showNav && (
        <Nav pills={pills} tabs={tabs}>
          {HomeNavData.slice(0, endPoint || 3).map((item, index) =>
            datePicker ? (
              <NavItem key={index}>
                <NavLink className={basicTab === item.id ? "active" : ""} color='transparent' onClick={() => setBasicTab(item.id)} key={index}>
                  {item.title}
                  {!icon && <i className='ri-arrow-right-line' />}
                </NavLink>
              </NavItem>
            ) : button ? (
              <NavItem key={index}>
                <Button className={`nav-link ${basicTab === item.id ? "active" : ""}`} color='transparent' onClick={() => setBasicTab(item.id)} key={index}>
                  {item.title}
                  {!icon && <i className='ri-arrow-right-line' />}
                </Button>
              </NavItem>
            ) : (
              <NavLink className={basicTab === item.id ? "active" : ""} color='transparent' onClick={() => setBasicTab(item.id)} key={index}>
                {item.title}
                {!icon && <i className='ri-arrow-right-line' />}
              </NavLink>
            )
          )}
        </Nav>
      )}
      <TabContent activeTab={basicTab}>
        <TabPane className={`fade ${basicTab === basicTab ? "show" : ""}`} tabId={basicTab}>
          <ul className={form ? "home-form" : "tab-list"}>
            {selected.map((item, index) => (
              <li className={form ? "input-box" : "tab-item"} key={item.id}>
                {!form && (
                  <div className='label-flex'>
                    {item.icon}
                    <Label>{item.label}</Label>
                  </div>
                )}
                <div ref={dropdownRefs[index].ref} className='select-dropdown'>
                  <Dropdown isOpen={dropdownRefs[index].isComponentVisible} toggle={() => dropdownRefs[index].setIsComponentVisible(!dropdownRefs[index].isComponentVisible)}>
                    <div className='select-button' onClick={() => dropdownRefs[index].setIsComponentVisible(true)}>
                      <Input type='text' value={item.inputLabel} placeholder={item.inputLabel || "Select an option"} readOnly />
                    </div>
                    <DropdownMenu className='select-menu'>
                      {item.dropdownMenu ? (
                        item.dropdownMenu?.map((list, idx) => (
                          <DropdownItem
                            key={idx}
                            onClick={() => {
                              handleSelect(item.id, list.title);
                              dropdownRefs[index].setIsComponentVisible(false);
                            }}
                          >
                            {list.icon && list.icon}
                            {list.title}
                          </DropdownItem>
                        ))
                      ) : datePicker ? (
                        <DatePicker selected={startDate} onChange={(date: Date | null) => date && handleChange(date, item.id)} inline />
                      ) : (
                        <RangeInputFields />
                      )}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </li>
            ))}
            {form && (
              <li className='input-box select-button' onClick={() => dispatch(setSearchModal())}>
                <Input type='text' placeholder='Advanced' readOnly />
              </li>
            )}
            <li className='tab-item'>
              <Link href={RouteList.Car.Grid.Car3Grid} className={`btn-solid ${form ? "property2-change" : ""}`}>
                {Search}
              </Link>
            </li>
            {scrollDown && (
              <li className='scroll-down tab-item'>
                <Image width={83} height={99} src={`${GifPath}/mouse-animation.gif`} unoptimized alt='mouse-animation' className='img-fluid' />
              </li>
            )}
          </ul>
        </TabPane>
      </TabContent>
    </Fragment>
  );
};

export default SearchTabList;
