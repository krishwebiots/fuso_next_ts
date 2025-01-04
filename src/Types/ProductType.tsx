export interface Feature {
  icon: string;
  text: string;
}

export interface Label {
  text: string;
  icon?: string;
  class?: string;
}

export interface ProductType {
  id: number;
  image: string[];
  title: string;
  emi?: string;
  type: string;
  category?: string[] | string;
  features: Feature[];
  price?: number;
  label?: Label;
  description?: string;
  company?: string;
  jobType?: string[];
  location?: string;
  time?: string;
  salary?: number;
  applied?: string;
  rating?: number;
  fuel?: string;
  jobTags: string[];
  bhk?: string;
  amenities?: string;
  squareFeet?: number;
  year?: number;
  productState?: string;
  video?: string;
  wishlist: boolean;
  seats: string;
  color: string;
  kilometers: number;
  transmission:string;
  owner:string;
  progress?: number;
  workType?:string;
  companyType?: string;
  education?: string;
  byJob?:string;
  jobLocation?: string;
  topCompanies?: string;
  skills?: string[];
  moreDescription?: string;
}

export interface ProductCardType {
  data: ProductType;
  view?: string;
  label?: string;
  index?: number;
  wishlist?: boolean;
  propertyid?: number;
  gridType?:string;
  carid?: number;
  jobads?:boolean;
  jobid?:number;
  userdashboard?:boolean;
}

export interface Job3CardType {
  data: ProductType;
  activeTab: string;
}

export interface JobCardType {
  jobData: ProductType;
}

export interface PropertyCardType {
  data: ProductType;
  label: string;
  index: number;
}
export interface ProductSliceProp {
  productItem: ProductType[];
  categoryItem: CategoryType[];
}

export interface CategoryType {
  id: number;
  type: string;
  value: string;
  label: string;
  categoryImage: string;
  categoryLogo: string;
  jobList?: string;
  propertyList?: string;
}

export interface GridViewType {
  type: string;
  side?: string;
  gridSize?: number;
  sectionClass?: string;
  gridType?: string;
  view?: string;
  topFilter?: boolean;
  offcanvasSide?: string;
  scrollType?: string;
  map?: boolean;
  mapSide?: string;
  modalType?: string;
  filterclass?: string;
  tagclass?: string;
  cardShow?: number;
  category?:boolean;
  filter?: boolean;
  detailboxstyle?: string;
  jobads?:boolean;
  tagfilter?:boolean;
  fluid?:boolean;
}

export interface GridLayoutType {
  value: ProductType[];
  type: string;
  gridSize?: number;
  gridType?: string;
  view?: string;
  scrollType?: string;
  map?: boolean;
  detailboxstyle?: string;
  jobads?:boolean;
}

export interface FilterProductsType {
  value: ProductType[];
}

export interface TopPanelType {
  side?: string;
  topFilter?: boolean;
  type?: string;
  mainclass?: string;
}

export interface FilterSidebarType {
  value: ProductType[];
  modalType?: string;
  filterclass?: string;
  type?: string;
}

export interface PriceType {
  value: any;
  price: number;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  type?: string;
}

export interface FilterSliceType {
  propertyType: string[];
  amenities: string[];
  priceStatus: number[];
  bedsRooms: string[];
  sortBy: null;
  popular: null;
  squareFeetStatus: number[];
  yearBuiltStatus: number[];
  carBrandModel: string[];
  minAndMaxPrice: number[];
  budgetStatus: number[];
  categories: string;
  fuelType: string[];
  modelYear: number | any;
  seats: string[];
  color: string[];
  kmsDriven:number[];
  minAndMaxKilometers: number[];
  cartransmitions: string[];
  ownerDetail: string[];
  jobAllCategory:string[];
  minAndMaxSalary:number[];
  salaryStatus:number[];
  JobWorkMode:string;
  JobCompanytype:string[];
  JobEducation:string[];
  JobbyCheck:string[];
  JobLocation:string[];
  JobTopCompnies:string[];
  JobType: string[];
  [key: string]: any;
}

export interface FilterDataType {
  id: string;
  label: string;
  type: string;
  count?: number;
}

export interface CommonFilterType {
  title: string;
  id: string;
  data?: FilterDataType[];
  checkValue?: string | string[];
  priceRange?: boolean;
  squareFeet?: boolean;
  values?: number[];
  minPrice?: number;
  maxPrice?: number;
  modalType?: string;
  type?: string;
  radio?: boolean;
  colors?: boolean;
}

export interface GridViewType {
  type: string;
  side?: string;
  gridSize?: number;
  sectionClass?: string;
  gridType?: string;
  view?: string;
  topFilter?: boolean;
  offcanvasSide?: string;
  scrollType?: string;
  map?: boolean;
  mapSide?: string;
  modalType?: string;
}

export interface PropertyBoxSliderType {
  view?: string;
  data: ProductType;
}

export interface RangeInputFieldsType {
  min?: number;
  max?: number;
  type?: string;
}

export interface DetailBodyItemType {
  label?: boolean;
  type?: string;
  detailtype?:string;
}

export type ReviewFormInputs = {
  name: string;
  email: string;
  message: string;
};

export type ScheduleFormInputs = {
  name: string;
  email: string;
  message: string;
  time: string | number;
  number: number | string;
};

export interface PropertyDetailType {
  type?: string;
  mainClass?: string;
  thumb?: boolean;
  multiple?: boolean;
  detailimages?: boolean;
  modern?: boolean;
  scrollspy?: boolean;
  classicSlider?: boolean;
  detailtype?:string;
}

export interface RenderImageType {
  item: number;
  type?: string;
  multiple?: boolean;
  key?: number;
}

export interface JobDetail {
  title: string;
  content:string[];
  list?:boolean;
}

export interface RightJobBox {
  title?: string;
  type?:string;
}

export interface BlogDescriptionBoxType {
  title: string;
  data: {
    title?: string;
    description: string;
  }[];
  list?: boolean;
}
