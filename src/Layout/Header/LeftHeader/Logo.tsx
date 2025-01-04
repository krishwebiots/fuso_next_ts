import { ImagePath } from "@/Constants/Constants";
import { RouteList } from "@/utils/RouteList";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC<{ part?: string }> = ({ part }) => {
  return (
    <Link href={RouteList.Home.CarDemo1} className='header-logo'>
      <Image height={30} width={110} src={`${ImagePath}/logo/${part?.includes("property-2") ? "2" : "1"}.png`} alt='logo' className='img-fluid' />
    </Link>
  );
};

export default Logo;
