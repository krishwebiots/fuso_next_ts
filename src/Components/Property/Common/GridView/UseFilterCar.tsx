import { useAppSelector } from "@/Redux/Hooks";
import { FilterProductsType, ProductType } from "@/Types/ProductType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UseFilterCar = ({ value }: FilterProductsType) => {
  const [showProduct, setShowProduct] = useState<ProductType[]>(value);
  const { carBrandModel, sortBy, budgetStatus, popular, categories, fuelType, modelYear, seats, color, kmsDriven, cartransmitions,ownerDetail } = useAppSelector((state) => state.filter);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const filteredProducts = value
      ?.filter((product) => {
        const BrandModel = carBrandModel.length === 0 || product.category === undefined || carBrandModel.some((prop) => product.category?.includes(prop));
        const BudgetPrice = product.price !== undefined && budgetStatus ? budgetStatus[0] <= product.price && budgetStatus[1] >= product.price && true : true;
        const CategoryFilter = categories.length === 0 || product.category === undefined || product.category?.includes(categories) || categories.includes("all");
        const FuelTypes = fuelType.length === 0 || product.fuel === undefined || fuelType.includes(product.fuel);
        const ModelYears = product.year === undefined || modelYear <= product.year;
        const AvilableSeats = seats.length === 0 || product.seats === undefined || seats.includes(product.seats);
        const AvilableColor = color.length === 0 || product.color === undefined || color.includes(product.color);
        const KMSDriven = product.kilometers !== undefined && kmsDriven ? kmsDriven[0] <= product.kilometers && kmsDriven[1] >= product.kilometers && true : true;
        const Transmition = cartransmitions.length === 0 || product.transmission === undefined || cartransmitions.includes(product.transmission);
        const OwnerDetail = ownerDetail.length === 0 || product.owner === undefined || ownerDetail.includes(product.owner);
        const MostPopular = !popular || product.productState === popular;

        return BrandModel && BudgetPrice && MostPopular && CategoryFilter && FuelTypes && ModelYears && AvilableSeats && AvilableColor && KMSDriven && Transmition && OwnerDetail;
      })
      .sort((product1, product2) => {
        if (sortBy === "$ High To Low") return (product2.price ?? 0) - (product1.price ?? 0);
        if (sortBy === "Alphabetical A-Z") return product1.title.localeCompare(product2.title);
        if (sortBy === "Alphabetical Z-A") return product2.title.localeCompare(product1.title);
        return 0;
      });

    setShowProduct(filteredProducts);
    const newSearchParams = new URLSearchParams(searchParams);

    ["brandmodel", "budget", "categories", "fueltype", "modelYear", "seats", "colors", "kilomiters", "transmitions","owner"].forEach((name) => newSearchParams.delete(name));

    if (carBrandModel.length !== 0) newSearchParams.set("brandmodel", carBrandModel.join(","));
    if (budgetStatus) newSearchParams.set("budget", `${budgetStatus[0]}-${budgetStatus[1]}`);
    if (categories.length !== 0) newSearchParams.set("categories", categories);
    if (fuelType.length !== 0) newSearchParams.set("fuelType", fuelType.join(","));
    if (modelYear) newSearchParams.set("modelYear", modelYear);
    if (seats.length !== 0) newSearchParams.set("seats", seats.join("or"));
    if (color.length !== 0) newSearchParams.set("colors", color.join(","));
    if (kmsDriven) newSearchParams.set("kilomiters", `${kmsDriven[0]}-${kmsDriven[1]}`);
    if (cartransmitions.length !== 0) newSearchParams.set("transmitions", cartransmitions.join(","));
    if (ownerDetail.length !== 0) newSearchParams.set("owner", ownerDetail.join(","));
    if (newSearchParams.toString() !== searchParams.toString()) {
      router.push(`${pathname}?${newSearchParams}`);
    }
  }, [budgetStatus, carBrandModel, categories, color, fuelType, kmsDriven, modelYear, pathname, popular, router, searchParams, seats, sortBy, cartransmitions, value, ownerDetail]);

  return showProduct;
};

export default UseFilterCar;
