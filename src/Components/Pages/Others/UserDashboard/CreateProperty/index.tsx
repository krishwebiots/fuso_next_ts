import React, { useState } from "react";
import { Dropdown } from "reactstrap";
import DashboardDropDown from "../Common/DashboardDropDown";

const CreateProperty = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("");
  const propertyTypes = ["Apartment", "House", "Villa", "Office", "Farmhouse"];
  // Handle selection from the dropdown
  const handlePropertyTypeSelect = (value: string) => {
    setSelectedPropertyType(value);
    console.log("Selected Property Type:", value);
  };

  return (
    <div>
      <form>
        <div className='user-form-box'>
          <h4 className='dashboard-title'>Property Details</h4>
          <div className='row gy-lg-4 g-3'>
            <div className='col-md-4 col-sm-6'>
              <DashboardDropDown
                label='Property Type'
                options={propertyTypes}
                selectedValue={selectedPropertyType}
                onSelect={handlePropertyTypeSelect} // Pass the handler function
              />

              {/* <div className='form-input'>
                <label>Property Type</label>
                <div className='dropdown select-dropdown'>
                  <div className='select-button' data-bs-toggle='dropdown'>
                    <input type='text' className='form-control' placeholder='Enter Property Type' />
                  </div>
                  <ul className='dropdown-menu select-menu'>
                    <li>
                      <a className='select-item' href='#'>
                        {" "}
                        Apartment
                      </a>
                    </li>
                    <li>
                      <a className='select-item' href='#'>
                        {" "}
                        House
                      </a>
                    </li>
                    <li>
                      <a className='select-item' href='#'>
                        {" "}
                        Villa
                      </a>
                    </li>
                    <li>
                      <a className='select-item' href='#'>
                        {" "}
                        Office
                      </a>
                    </li>
                    <li>
                      <a className='select-item' href='#'>
                        {" "}
                        Farmhouse
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='form-input'>
                <label>Property Status</label>
                <div className='dropdown select-dropdown'>
                  <div className='select-button' data-bs-toggle='dropdown'>
                    <input type='text' className='form-control' placeholder='Enter Property Status' />
                  </div>
                  <ul className='dropdown-menu select-menu'>
                    <li>
                      <a className='select-item' href='#'>
                        {" "}
                        Sale
                      </a>
                    </li>
                    <li>
                      <a className='select-item' href='#'>
                        {" "}
                        Rent
                      </a>
                    </li>
                    <li>
                      <a className='select-item' href='#'>
                        {" "}
                        PG
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='form-input'>
                <label>Any City</label>
                <div className='select-button arrow-none'>
                  <input type='text' className='form-control' placeholder='Enter Your City' />
                </div>
              </div>
            </div>
            <div className='col-md-8 col-sm-6'>
              <div className='form-input'>
                <label>Address</label>
                <div className='select-button arrow-none'>
                  <input type='text' className='form-control' placeholder='Enter Your Address' />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='form-input'>
                <label>Any Country</label>
                <div className='select-button arrow-none'>
                  <input type='text' className='form-control' placeholder='Enter Your Country' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProperty;
