import { Href } from "@/Constants/Constants";
import { DashboardDropdownProps } from "@/Types/OtherType";
import UseOutsideDropdown from "@/utils/UseOutsideDropdown";
import { FC, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input } from "reactstrap";

const DashboardDropDown: FC<DashboardDropdownProps> = ({ options, label, placeholder }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = UseOutsideDropdown(false);
  const [selected, setSelected] = useState(placeholder);

  const toggleDropdown = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div ref={ref} className='form-input'>
      <label>{label}</label>
      <Dropdown className='select-dropdown' isOpen={isComponentVisible} toggle={toggleDropdown}>
        <DropdownToggle className='select-button' onClick={toggleDropdown}>
          <Input type='text' placeholder={selected} />
        </DropdownToggle>
        <DropdownMenu className='select-menu'>
          {options.map((option, index) => (
            <DropdownItem className='select-item' key={index} href={Href} onClick={() => setSelected(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DashboardDropDown;
