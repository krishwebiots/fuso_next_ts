import { FC, Fragment } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Search } from "@/Constants/Constants";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setSearchModal } from "@/Redux/Layout/LayoutReducers";
import CloseBtn from "../CloseBtn";
import { setAmenities, setBedsRooms, setPopular, setPriceStatus, setPropertyType, setSortBy, setSquareFeetStatus, setYearBuiltStatus } from "@/Redux/Reducers/FilterSlice";
import FilterSidebar from "@/Components/CommonComponents/GridView/Filter";
import { SearchModalType } from "@/Types/CommonComponentsType";

const SearchModal: FC<SearchModalType> = ({ type }) => {
  const { searchModal } = useAppSelector((state) => state.layout);
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const showProduct = productItem.filter((item) => item.type === type);

  const toggle = () => dispatch(setSearchModal());

  const handleReset = () => {
    const resetActions = [setPropertyType([]), setBedsRooms([]), setAmenities([]), setSortBy(null), setPopular(null), setPriceStatus([40000, 500000]), setSquareFeetStatus([400, 4000]), setYearBuiltStatus([2019, 2024])];
    resetActions.forEach(dispatch);
  };

  return (
    <Fragment>
      <div className='mobile-space' />
      <Modal scrollable fade modalClassName='theme-modal search-modal' isOpen={searchModal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
        <ModalBody>
          <div className='filter-header'>
            <h3>Search</h3>
            <span onClick={handleReset}>Reset</span>
          </div>
          <FilterSidebar type={type}   value={showProduct} />
        </ModalBody>
        <ModalFooter>
          <Button className='btn-solid'>{Search}</Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default SearchModal;
