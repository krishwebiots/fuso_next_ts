import { useAppSelector } from "@/Redux/Hooks";
import { FilterProductsType, ProductType } from "@/Types/ProductType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UseFilterProperty = ({ value }: FilterProductsType) => {
  const [showProduct, setShowProduct] = useState<ProductType[]>(value);
  const { propertyType, sortBy, popular, priceStatus, bedsRooms, squareFeetStatus, yearBuiltStatus, amenities } = useAppSelector((state) => state.filter);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const filteredProducts = value
      ?.filter((product) => {
        const filterPropertyType = propertyType.length === 0 || product.category === undefined || propertyType.some((prop) => product.category?.includes(prop) || propertyType.includes("all"));
        const filterBeadsRooms = bedsRooms.length === 0 || product.bhk === undefined || bedsRooms.includes(product.bhk);
        const filteredPrice = product.price !== undefined && priceStatus ? priceStatus[0] <= product.price && priceStatus[1] >= product.price && true : true;
        const filterSquareFeet = product.squareFeet !== undefined && squareFeetStatus ? squareFeetStatus[0] <= product.squareFeet && squareFeetStatus[1] >= product.squareFeet && true : true;
        const filterYearBuilt = product.year !== undefined && yearBuiltStatus ? yearBuiltStatus[0] <= product.year && yearBuiltStatus[1] >= product.year && true : true;
        const filterMostPopular = !popular || product.productState === popular;
        const filterAmenities = amenities.length === 0 || product.amenities === undefined || amenities.includes(product.amenities);
        

        return filterPropertyType && filterMostPopular && filteredPrice && filterBeadsRooms && filterSquareFeet && filterYearBuilt && filterAmenities;
      })
      .sort((product1, product2) => {
        if (sortBy === "Price (High to Low)") return (product2.price ?? 0) - (product1.price ?? 0);
        if (sortBy === "User Rating (High to Low)") return (product2.rating ?? 0) - (product1.rating ?? 0);
        if (sortBy === "Most Popular") return product2.rating ?? 2;
        return 0;
      });
      
    setShowProduct(filteredProducts);

    const newSearchParams = new URLSearchParams(searchParams);

    ["property", "price", "beds", "sqft", "year", "ameniti"].forEach((name) => newSearchParams.delete(name));

    newSearchParams.set("property", propertyType.join(","));
    if (priceStatus) newSearchParams.set("price", `${priceStatus[0]}-${priceStatus[1]}`);
    bedsRooms.forEach((room) => newSearchParams.append("beds", room));
    if (squareFeetStatus) newSearchParams.set("sqft", `${squareFeetStatus[0]}-${squareFeetStatus[1]}`);
    if (yearBuiltStatus) newSearchParams.set("year", `${yearBuiltStatus[0]}-${yearBuiltStatus[1]}`);
    amenities.forEach((ameniti) => newSearchParams.append("ameniti", ameniti));

    if (newSearchParams.toString() !== searchParams.toString()) {
      router.push(`${pathname}?${newSearchParams}`);
    }
  }, [bedsRooms, pathname, popular, priceStatus, propertyType, router, searchParams, sortBy, value, squareFeetStatus, yearBuiltStatus, amenities]);

  return showProduct;
};

export default UseFilterProperty;
 

 


 
