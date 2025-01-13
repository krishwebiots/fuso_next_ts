import { No, Yes } from "@/Constants/Constants";
import { FeatureItemType } from "@/Types/CommonComponentsType";
import { FC } from "react";
import { Input, Label } from "reactstrap";


const FeatureItem: FC<FeatureItemType> = ({ label, name }) => {
  return (
    <li>
      <span>{label}</span>
      <div className="flex-radio">
        <Input type="radio" name={name} id={`${name}-yes`} />
        <Label htmlFor={`${name}-yes`}>{Yes}</Label>
      </div>
      <div className="flex-radio">
        <Input type="radio" name={name} id={`${name}-no`} />
        <Label htmlFor={`${name}-no`}>{No}</Label>
      </div>
    </li>
  );
};

export default FeatureItem;
