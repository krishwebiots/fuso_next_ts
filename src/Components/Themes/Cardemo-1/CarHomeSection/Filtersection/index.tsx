import SearchTabList from "@/Components/Themes/Common/SearchTabList";

const CarHomeFillter = () => {
  return (
    <div className='property-home-tab car-home-tab'>
      <div className='car-tab-flex'>
        <SearchTabList showTab={[1, 2, 5, 6]} endPoint={2} pills scrollDown />
      </div>
    </div>
  );
};

export default CarHomeFillter;
