import { NavType } from "@/Types/HomeDemo";
import { Building, Calendar1, Car, Location, SearchNormal1, Wallet } from "iconsax-react";

export const HomeTabData: NavType[] = [
  {
    id: 1,
    icon: <SearchNormal1 className='iconsax' color='white' size={20} />,
    label: "Search",
    inputLabel: "Enter Keyword...",
    dropdownMenu: [
      { title: "City,Locality", icon: <i className='ri-map-pin-line' /> },
      { title: "Area (like a Salmina)", icon: <i className='ri-map-pin-4-line' /> },
      { title: "Project or Builder name", icon: <i className='ri-building-4-line' /> },
    ],
  },
  {
    id: 2,
    icon: <Location className='iconsax' color='white' size={20} />,
    label: "Location",
    inputLabel: "Enter Location",
    dropdownMenu: [{ title: "Apartment" }, { title: "Kansas City" }, { title: "Santiago" }, { title: "Lisbon" }, { title: "Los Angeles" }, { title: "Sydney" }, { title: "Beijing" }],
  },
  {
    id: 3,
    icon: <Calendar1 className='iconsax' color='black' size={20} />,
    label: "Pick up Date",
    inputLabel: "Choose your Date",
  },
  {
    id: 4,
    icon: <Calendar1 className='iconsax' color='black' size={20} />,
    label: "Pick up Time",
    inputLabel: "Choose your Time",
  },
  {
    id: 5,
    icon: <Car className='iconsax' color='white' size={20} />,
    label: "Car Type",
    inputLabel: "Enter Car Type",
    dropdownMenu: [{ title: "Hatchback" }, { title: "SUV" }, { title: "Convertible" }, { title: "Sedan" }, { title: "Crossover" }],
  },
  {
    id: 6,
    icon: <Wallet className='iconsax' color='white' size={20} />,
    label: "Price",
    inputLabel: "Enter Your Price",
  },
  {
    id: 7,
    icon: <Building className='iconsax' color='white' size={20} />,
    label: "All Categories",
    inputLabel: "Enter Category Type",
    dropdownMenu: [{ title: "Education" }, { title: "Law & government" }, { title: "Arts" }, { title: "Construction" }, { title: "Finance" }, { title: "Technology" }, { title: "Communications" }, { title: "Health care" }],
  },
  {
    id: 8,
    icon: <Wallet className='iconsax' color='white' size={20} />,
    label: "Job Type",
    inputLabel: "Enter Job Type",
    dropdownMenu: [{ title: "Freelance" }, { title: "Full Time" }, { title: "Internship" }, { title: "Part Time" }],
  },
  {
    id: 9,
    icon: <Wallet className='iconsax' color='white' size={20} />,
    label: "Salary",
    inputLabel: "Enter Salary",
  },
  {
    id: 10,
    icon: <Building className='iconsax' size={20} />,
    label: "Property Type",
    inputLabel: "Enter Property Type",
    dropdownMenu: [{ title: "Apartment" }, { title: "House" }, { title: "Vila" }, { title: "Office" }, { title: "Farmhouse" }],
  },
  {
    id: 11,
    icon: <Wallet className='iconsax' size={20} />,
    label: "Price",
    inputLabel: "Enter Your Price",
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    iconClass: "ri-facebook-line",
  },
  {
    name: "Twitter",
    url: "https://x.com/",
    iconClass: "ri-twitter-line",
  },
  {
    name: "LinkedIn",
    url: "https://in.linkedin.com/",
    iconClass: "ri-linkedin-line",
  },
  {
    name: "WhatsApp",
    url: "https://web.whatsapp.com/",
    iconClass: "ri-whatsapp-line",
  },
  {
    name: "Email",
    url: "https://mail.google.com/",
    iconClass: "ri-mail-line",
  },
];