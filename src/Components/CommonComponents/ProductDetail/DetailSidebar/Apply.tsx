import CommonFileUpload from "@/Components/CommonComponents/CommonFileUpload";
import { ApplyNow, Email, Name, Phone, UploadCV } from "@/Constants/Constants";
import React from "react";
import { Button, Input, Label } from "reactstrap";

const Apply = () => {
  return (
    <div className='detail-sidebar-box'>
      <h3>Ready to apply ?</h3>
      <div className='input-box'>
        <Label>{Name} *</Label>
        <Input type='text' required />
      </div>
      <div className='input-box'>
        <Label>{Phone} *</Label>
        <Input type='number' required />
      </div>
      <div className='input-box'>
        <Label>{Email} *</Label>
        <Input type='email' required />
      </div>
      <div className='input-box'>
        <Label>{UploadCV} *</Label>
        <CommonFileUpload  />         
      </div>
      <div className='input-box'>
        <Button className='btn-solid'>{ApplyNow}</Button>
      </div>
    </div>
  );
};

export default Apply;
