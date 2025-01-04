export type ContactFormInputs = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  number: number | string;
};

type TabItem = {
  image: string;
  title: string;
  reference: string;
  model: string;
  price: string;
};

type Tab = {
  items: TabItem[];
};

type TabsData = {
  tabs: Tab[]; // Array of Tab objects
};

export interface DashboardDropdownProps {
  label: string;                  
  options: string[];            
  selectedValue?: string;         
  onSelect: (value: string) => void; 
}
