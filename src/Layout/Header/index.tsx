import { Href } from "@/Constants/Constants";
import { containerClassMap, headerClassMap } from "@/Data/Layout/Header";
import { useAppSelector } from "@/Redux/Hooks";
import { PathTypes } from "@/Types/LayoutType";
import Link from "next/link";
import { Container } from "reactstrap";
import LeftHeader from "./LeftHeader/Index";
import MainMenu from "./Mainmenu";
import RightHeader from "./RightHeader/Index";
import TopBar from "./TopBar";

const Header: React.FC<PathTypes> = ({ part }) => {
  const { sidebarOpen } = useAppSelector((state) => state.layout);
  const isTopBar = ["car-2", "property-2"].some((item) => part?.includes(item));
  const isJobOrProperty = ["job-2", "job-3", "property-2"].some((item) => part?.includes(item));

  return (
    <header className={`px-0${headerClassMap[part] || ""}`} id='header'>
      {isTopBar && <TopBar part={part} />}
      <Container className={containerClassMap[part] || ""}>
        <div className='header-flex'>
          <LeftHeader sidebarOpen={sidebarOpen} part={part} isJobOrProperty={isJobOrProperty} />
          <MainMenu />
          <RightHeader part={part} isJobOrProperty={isJobOrProperty} />
        </div>
      </Container>
      <Link href={Href} className={`overlay${sidebarOpen ? " overlay--active" : ""}`} />
    </header>
  );
};

export default Header;
