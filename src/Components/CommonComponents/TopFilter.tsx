import SearchTabList from "@/Components/Themes/Common/SearchTabList";
import { Container } from "reactstrap";
import ParticaleComponent from "./ParticaleComponent";

const TopFilter = () => {
  return (
    <div className='breadcrumbs-section'>
      <Container>
        <div className='breadcrumbs-main'>
          <div className='property-home-tab'>
            <SearchTabList endPoint={2} showTab={[1, 2, 10, 11]} showNav />
          </div>
        </div>
      </Container>
      <ParticaleComponent />
    </div>
  );
};

export default TopFilter;
