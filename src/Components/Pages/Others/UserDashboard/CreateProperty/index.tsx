import AreaDetail from "./AreaDetail";
import CreatePropertyDetail from "./CreatePropertyDetail";
import Gallery from "./Gallery";
import PriceDetail from "./PriceDetail";
import PropertyAllDetails from "./PropertyAllDetails";
import PropertyCheckBox from "./PropertyCheckBox";

const CreateProperty = () => {
  return (
    <form>
      <PropertyAllDetails />
      <PropertyCheckBox />
      <AreaDetail />
      <CreatePropertyDetail />
      <PriceDetail />  
      <Gallery/>          
    </form>
  );
};

export default CreateProperty;
