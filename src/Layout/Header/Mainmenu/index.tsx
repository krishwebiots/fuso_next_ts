import { Href } from "@/Constants/Constants";
import { MenuItem } from "@/Data/Layout/Header";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setCartData } from "@/Redux/Layout/LayoutReducers";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ImageMenuList from "./ImageMenuList";
import PagesMegamenu from "./PagesMegamenu";
import SidebarSubMenu from "./SidebarSubMenu";

const MainMenu = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const { sidebarOpen } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const { t } = useTranslation("common");
  const toggleSection = (title: string) => setOpenSections((prevState) => ({ [title]: !prevState[title] }));
  return (
    <nav className={`sidebar-nav ${sidebarOpen ? "open" : ""}`}>
      <div className='menu-header'>
        <h5 className='menu-title'>Menu</h5>
        <Link href={Href} className='close-btn' onClick={() => dispatch(setCartData())}>
          <i className='ri-close-line' />
        </Link>
      </div>
      <ul className='menu-items'>
        {MenuItem &&
          MenuItem.map((mainMenu, index) => (
            <li className={`expand-btn ${!mainMenu.megaMenuImage && !mainMenu.megaMenu ? "dropdown-menus" : ""}`} key={index}>
              <Link href={Href} className={`menu-item ${openSections[mainMenu.title] ? "open" : ""}`} onClick={() => toggleSection(mainMenu.title)}>
                {t(mainMenu.title)}
              </Link>
              {mainMenu.megaMenuImage && <ImageMenuList mainMenu={mainMenu.children} />}
              {!mainMenu.megaMenuImage && !mainMenu.megaMenu && (
                <ul className='dropdown-megamenu sample link-list'>
                  <SidebarSubMenu menu={mainMenu.children} level={0} />
                </ul>
              )}
              {mainMenu.megaMenu && <PagesMegamenu mainMenu={mainMenu.children} />}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
