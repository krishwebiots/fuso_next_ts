import { getTrackBackground, Range } from "react-range";
import { FC, useEffect, useState } from "react";
import { RangeInputFieldsType } from "@/Types/ProductType";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { STEP } from "@/Constants/Constants";
import { setBudgetStatus, setKmsDriven, setPriceStatus, setSalaryStatus } from "@/Redux/Reducers/FilterSlice";

const RangeInputFields: FC<RangeInputFieldsType> = ({ type }) => {
  const dispatch = useAppDispatch();
  const { minAndMaxPrice, budgetStatus, priceStatus, kmsDriven, minAndMaxKilometers, minAndMaxSalary, salaryStatus } = useAppSelector((state) => state.filter);
  const [rangePrice, setRangePrice] = useState<number[]>([40000, 500000]);
  const [value, setValue] = useState<number[]>(minAndMaxPrice || minAndMaxKilometers || minAndMaxSalary);

  const handlePriceChange = (values: number[]) => {
    const action = type === "car" ? setBudgetStatus : type === "job" ? setSalaryStatus : type === "KMS" ? setKmsDriven : setPriceStatus;
    dispatch(action(values));
  };

  useEffect(() => {
    setRangePrice(type === "car" ? budgetStatus : type === "job" ? salaryStatus : type === "KMS" ? kmsDriven : priceStatus);
    setValue(type === "KMS" ? minAndMaxKilometers : type === "job" ? minAndMaxSalary : minAndMaxPrice);
  }, [budgetStatus, priceStatus, type, minAndMaxPrice, kmsDriven, minAndMaxKilometers, salaryStatus, minAndMaxSalary]);

  return (
    <Range
      values={rangePrice}
      step={type === "job" ? 1 : STEP}
      min={value[0] || 10}
      max={value[1] || 1000000}
      onChange={(values) => handlePriceChange(values)}
      renderTrack={({ props, children }) => (
        <div onTouchStart={props.onTouchStart} onMouseDown={props.onMouseDown} style={{ ...props.style, height: "36px", display: "flex", width: "100%" }}>
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: rangePrice,
                colors: ["#ccc", "rgba(var(--theme-color), 1)", "#ccc"],
                min: value[0] || 1000,
                max: value[1] || 1000000,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ index, props }) => (
        <div {...props} key={index} style={{ ...props.style, height: "12px", width: "7px", top: "15px", borderRadius: "60px", backgroundColor: "rgba(var(--theme-color), 1)", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 2px 6px #AAA" }}>
          <div style={{ position: "absolute", top: "-30px", color: "#fff", fontWeight: "bold", fontSize: "12px", fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif", padding: "4px", borderRadius: "4px", backgroundColor: "rgba(var(--theme-color), 1)",width:'50px' }}>
            {rangePrice[index]} {type === "job" ? "K" : ""}
          </div>
        </div>
      )}
    />
  );
};

export default RangeInputFields;
