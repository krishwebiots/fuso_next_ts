import { Heart, House, Profile, SearchNormal1 } from "iconsax-react";
import { Href } from "../Constants/Constants";
import Link from "next/link";
import { RouteList } from "@/utils/RouteList";

const MobileMenu = () => {
  return (
    <ul className="mobile-menu">
      <li className="active">
        <Link href={RouteList.Home.CarDemo1}>
          <House />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href={Href}>
          <SearchNormal1 />
          <span>Search</span>
        </Link>
      </li>
      <li>
        <Link href={RouteList.Car.CarWishlist}>
          <Heart />
          <span>Shortlist</span>
        </Link>
      </li>
      <li>
        <Link href={RouteList.Pages.Other.UserDashboard}>
          <Profile />
          <span>Profile</span>
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
