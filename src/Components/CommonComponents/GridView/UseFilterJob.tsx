import { useAppSelector } from "@/Redux/Hooks";
import { FilterProductsType, ProductType } from "@/Types/ProductType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UseFilterJob = ({ value }: FilterProductsType) => {
  const [showProduct, setShowProduct] = useState<ProductType[]>(value);
  const { jobAllCategory, sortBy, ownerDetail, salaryStatus, JobWorkMode, JobCompanytype, JobEducation, JobbyCheck, JobLocation, JobTopCompnies, JobType } = useAppSelector((state) => state.filter);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const filteredProducts = value
      ?.filter((product) => {
        const AllCategory = jobAllCategory.length === 0 || product.category === undefined || jobAllCategory.some((prop) => product.category?.includes(prop));
        const SalaryDetails = product.salary !== undefined && salaryStatus ? salaryStatus[0] <= product.salary && salaryStatus[1] >= product.salary && true : true;
        const WorkMode =JobWorkMode.length === 0 || product.workType === undefined || product.workType?.includes(JobWorkMode);
        const CompanyType = JobCompanytype.length === 0 || product.companyType === undefined || JobCompanytype.some((props) => product.companyType?.includes(props));
        const Education = JobEducation.length === 0 || product.education === undefined || JobEducation.some((props) => product.education?.includes(props));
        const ByCheck = JobbyCheck.length === 0 || product.byJob === undefined || JobbyCheck.some((props) => product.byJob?.includes(props));
        const Location = JobLocation.length === 0 || product.jobLocation === undefined || JobLocation.some((props) => product.jobLocation?.includes(props));
        const TopCompany = JobTopCompnies.length === 0 || product.topCompanies === undefined || JobTopCompnies.some((props) => product.topCompanies?.includes(props));
        const Jobtypes = JobType.length === 0 || product.jobType === undefined || JobType.some((props) => product.jobType?.includes(props));

        return AllCategory && SalaryDetails && WorkMode && CompanyType && Education && ByCheck && Location && TopCompany && Jobtypes;
      })
      .sort((product1, product2) => {
        if (sortBy === "$ High To Low") return (product2.salary ?? 0) - (product1.salary ?? 0);
        if (sortBy === "Alphabetical A-Z") return product1.title.localeCompare(product2.title);
        if (sortBy === "Alphabetical Z-A") return product2.title.localeCompare(product1.title);
        return 0;
      });

    setShowProduct(filteredProducts);
    const newSearchParams = new URLSearchParams(searchParams);

    ["allcategory", "salary", "jobworkmode", "companytype", "education", "bycheck", "location", "topcompany", "jobtype"].forEach((name) => newSearchParams.delete(name));

    if (jobAllCategory.length !== 0) newSearchParams.set("allcategory", jobAllCategory.join(","));
    if (salaryStatus) newSearchParams.set("salary", `${salaryStatus[0]}-${salaryStatus[1]}`);
    if (JobWorkMode.length !== 0) newSearchParams.set("jobworkmode", JobWorkMode);
    if (JobCompanytype.length !== 0) newSearchParams.set("companytype", JobCompanytype.join(","));
    if (JobEducation.length !== 0) newSearchParams.set("education", JobEducation.join(","));
    if (JobbyCheck.length !== 0) newSearchParams.set("bycheck", JobbyCheck.join(","));
    if (JobLocation.length !== 0) newSearchParams.set("location", JobLocation.join(","));
    if (JobTopCompnies.length !== 0) newSearchParams.set("topcompany", JobTopCompnies.join(","));
    if (JobType.length !== 0) newSearchParams.set("jobtypes", JobType.join(","));

    if (newSearchParams.toString() !== searchParams.toString()) {
      router.push(`${pathname}?${newSearchParams}`);
    }
  }, [pathname, router, searchParams, sortBy, value, ownerDetail, jobAllCategory, salaryStatus, JobWorkMode, JobCompanytype, JobEducation, JobbyCheck, JobLocation, JobTopCompnies, JobType]);

  return showProduct;
};

export default UseFilterJob;
