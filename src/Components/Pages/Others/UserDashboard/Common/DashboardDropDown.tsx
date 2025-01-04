import { DashboardDropdownProps } from "@/Types/OtherType";
import React, { FC, useState } from "react";
import { Button, Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const DashboardDropDown: FC<DashboardDropdownProps> = ({ options, label, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className='form-input'>
      <label>{label}</label>
      <Dropdown className='select-dropdown'>
        <DropdownToggle color="secondary" onClick={toggleDropdown}  >
          {selectedOption || "Select an Option"}
        </DropdownToggle>
        <DropdownMenu className={`${isOpen ? "show" : ""}`} aria-labelledby='dropdownMenuButton'>
          {options.map((option, index) => (
            <li key={index}>
              <a
                className='dropdown-item'
                href='#'
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload
                  handleSelect(option); // Handle option selection
                }}
              >
                {option}
              </a>
            </li>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DashboardDropDown;
