import { Href } from "@/Constants/Constants";
import { useAppDispatch } from "@/Redux/Hooks";
import { setCartData } from "@/Redux/Layout/LayoutReducers";
import { LeftHeaderProps } from "@/Types/LayoutType";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import PropertyDropDown from "./PropertyDropDown";

const LeftHeader: React.FC<LeftHeaderProps> = ({ sidebarOpen, part, isJobOrProperty }) => {
  const dispatch = useAppDispatch();
  return (
    <div className='left-side-header'>
      <Link href={Href} className={`toggle ${sidebarOpen ? "open" : ""}`} onClick={() => dispatch(setCartData())}>
        <i className='ri-menu-line' />
      </Link>
      <Logo part={part} />
      <PropertyDropDown part={part} isJobOrProperty={isJobOrProperty} />
    </div>
  );
};

export default LeftHeader;
