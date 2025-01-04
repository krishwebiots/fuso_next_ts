import { FiltersData } from "@/Data/Car";
import { Input } from "reactstrap";

const CarTopFilter = () => {
  return (
    <div className='top-flex'>
      <h5>Filter:</h5>
      <ul className='top-filter'>
        {FiltersData?.map((filter, i) => (
          <li key={filter.id} className={`${i + 1 === 1 ? "simple-select" : ""}`}>
            <Input type='select' id={filter.id}>
              <option value=''>{filter.label}</option>
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Input>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarTopFilter;
