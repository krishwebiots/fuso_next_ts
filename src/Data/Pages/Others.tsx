import { RouteList } from "@/utils/RouteList";
import { ApexOptions } from "apexcharts";
import { Call, CallCalling, Car, Driving, Global, Location, Message, MessageQuestion, Mobile, ReceiptText, Sms, Tag2 } from "iconsax-react";
import { Autoplay, Navigation } from "swiper/modules";

export const AboutBottomContent = [
  {
    iconSrc: "/car/about/timer.svg",
    iconAlt: "timer",
    text: "Mileage unlimited",
  },
  {
    iconSrc: "/car/about/driving.svg",
    iconAlt: "timer",
    text: "Pick up service",
  },
  {
    iconSrc: "/car/about/door.svg",
    iconAlt: "timer",
    text: "Delivery to door",
  },
];

export const About1content = "We provide free consultation to help you find a tenant for your new house.We provide free consultation to help you find a tenant for your new house.We provide free consultation to help .";

export const BrowseCategoryData = [
  {
    id: 1,
    category: "Car for rent",
    description: "Rent a car for flexible travel and the freedom to explore at your own pace.",
    icon: <Driving size={42} color='#188aec' />,
    image: "job/job-box/dots-category.svg",
  },
  {
    id: 2,
    category: "Car for sale",
    description: "Reliable car for sale: low mileage, excellent condition, great value—test drive now!",
    icon: <Tag2 size={42} color='#188aec' />,
    image: "job/job-box/dots-category.svg",
  },
  {
    id: 3,
    category: "Book your car",
    description: "Book your car now to enjoy personalized travel with convenience and freedom.",
    icon: <Car size={42} color='#188aec' />,
    image: "job/job-box/dots-category.svg",
  },
  {
    id: 4,
    category: "Support 24/7*",
    description: "Our help is accessible around-the-clock to make sure you get help when you need it.",
    icon: <Call size={42} color='#188aec' />,
    image: "job/job-box/dots-category.svg",
  },
];

export const PrimeCarRentalsContent = "At Prime Car Rentals, we pride ourselves on delivering top-tier car rental services that cater to a wide range of needs, from business trips to family vacations.";

export const About2List = [
  {
    id: 1,
    feature: "Extensive Fleet",
    icon: "ri-check-line",
  },
  {
    id: 2,
    feature: "Convenient Locations",
    icon: "ri-check-line",
  },
  {
    id: 3,
    feature: "Affordable Rates",
    icon: "ri-check-line",
  },
  {
    id: 4,
    feature: "Flexible Rental Options",
    icon: "ri-check-line",
  },
  {
    id: 5,
    feature: "Exceptional Customer Service",
    icon: "ri-check-line",
  },
];

export const About3Startimg = [[{ src: "job/about/1.png" }, { src: "job/about/2.png" }], [{ src: "job/about/3.png" }]];

export const AboutTeamData = [
  { name: "Daniel Thompson", image: "other/about/p-1.jpg" },
  { name: "James Miller", image: "other/about/p-2.jpg" },
  { name: "Ryan Clark", image: "other/about/p-3.jpg" },
  { name: "Amanda Rodriguez", image: "other/about/p-4.jpg" },
  { name: "Justin Martin", image: "other/about/p-5.jpg" },
  { name: "John Miller", image: "property2/team/1.jpg" },
  { name: "Mia Thomas", image: "property2/team/2.jpg" },
  { name: "Daniel Lewis", image: "property2/team/3.jpg" },
  { name: "Robert Taylor", image: "property2/team/4.jpg" },
  { name: "Alice Johnson", type: "Project Manager", image: "other/team/t-1.jpg" },
  { name: "Bob Smith", type: "Senior Developer", image: "other/team/t-2.jpg" },
  { name: "Cathy Brown", type: "UX/UI Designer", image: "other/team/t-3.jpg" },
  { name: "David Lee", type: "QA Engineer", image: "other/team/t-4.jpg" },
  { name: "Jack Taylor", type: "Sales Executive", image: "other/team/t-5.jpg" },
  { name: "Emma Davis", type: "Product Owner", image: "other/team/t-6.jpg" },
  { name: "John Deo", type: "Web Design", image: "other/team/t-7.jpg" },
  { name: "Liam Harris", type: "Data Analyst", image: "other/team/t-8.jpg" },
];

export const AboutTeamSlider = {
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".about-team-next",
    prevEl: ".about-team-prev",
  },
  modules: [Navigation],
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1299: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};

export const AboutGetInTouchData = [
  {
    id: 1,
    title: "Our Location",
    description: "05 West St, Suite New York 10016",
    icon: <Location size='24' color='#188aec' />,
  },
  {
    id: 2,
    title: "Our Email Address",
    description: "maryjrios@rhyta.com",
    icon: <Sms size='24' color='#188aec' />,
    link: "#!",
  },
  {
    id: 3,
    title: "Contact Number",
    description: "860-349-8349",
    icon: <CallCalling size='24' color='#188aec' />,
    link: "#!",
  },
  {
    id: 4,
    title: "Our Website",
    description: "www.fuso.com",
    icon: <Global size='24' color='#188aec' />,
    link: "#!",
  },
];

export const ContactPlaceholder = [
  { label: "First Name", type: "text" },
  { label: "Last Name", type: "text" },
  { label: "PhoneNumber", type: "number" },
  { label: "Email", type: "email" },
];

export const Contact1Description = "For any questions or feedback, reach out to us via phone, email, or the form below. Your satisfaction is our priority. We look forward to hearing from you!";

export const Contact2MainData = [
  {
    id: 1,
    title: "Chat To Sales",
    description: "See our frequently asked questions.",
    link: RouteList.Pages.Other.ContactUs1,
    linkText: "Chat to sales",
    icon: <Message className='iconsax' size={50} color='#188aec' />,
  },
  {
    id: 2,
    title: "Our Location",
    description: "Speak to someone from our sales team today.",
    link: "https://www.google.com/maps",
    linkText: "visit location",
    icon: <Location className='iconsax' size={50} color='#188aec' />,
  },
  {
    id: 3,
    title: "Get Help Center",
    description: "Speak to our team today and ask anything about Coast.",
    link: RouteList.Pages.Other.ContactUs1,
    linkText: "Get Answer",
    icon: <MessageQuestion className='iconsax' size={50} color='#188aec' />,
    col: "4",
  },
  {
    id: 4,
    title: "Call Us",
    description: "See how Coast can help your business by getting early access.",
    link: RouteList.Pages.Other.ContactUs1,
    linkText: "Call our team",
    icon: <CallCalling className='iconsax' size={50} color='#188aec' />,
    col: "4",
  },
  {
    id: 5,
    title: "Press & Media",
    description: "Get in touch with our PR team today.",
    link: RouteList.Pages.Other.ContactUs1,
    linkText: "Get Answer",
    icon: <ReceiptText className='iconsax' size={50} color='#188aec' />,
    col: "4",
  },
];
export const contactus3Description = "For any questions or feedback, reach out to us via phone, email, or the form below. Your satisfaction is our priority. We look forward to hearing from you!";

export const ServiceCount = [
  {
    id: 1,
    value: 10,
    suffix: <i className='ri-add-line' />,
    title: "Years in Business",
  },
  {
    id: 2,
    value: 98,
    suffix: "%",
    title: "Positive Reaction",
  },
  {
    id: 3,
    value: 4,
    suffix: <i className='ri-add-line' />,
    title: "Successful Projects",
  },
  {
    id: 4,
    value: 152,
    suffix: <i className='ri-add-line' />,
    title: "Satisfied Client",
  },
];

export const TeamSectionDescription = `Greetings from our team, which brings empathy and creativity! Our
                    unique skill set of motivated people are linked by a common desire
                    for success and dedication to achieving the team's goals.`;

export const OtherTeamData = [
  {
    name: "Alice Johnson",
    designation: "Project Manager",
    image: "/other/team/t-1.jpg",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
  },
  {
    name: "Bob Smith",
    designation: "Senior Developer",
    image: "/other/team/t-2.jpg",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
  },
  {
    name: "Cathy Brown",
    designation: "UX/UI Designer",
    image: "/other/team/t-3.jpg",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
  },
  {
    name: "David Lee",
    designation: "QA Engineer",
    image: "/other/team/t-4.jpg",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
  },
  {
    name: "Jack Taylor",
    designation: "Sales Executive",
    image: "/other/team/t-5.jpg",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
  },
  {
    name: "Emma Davis",
    designation: "Product Owner",
    image: "/other/team/t-6.jpg",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
  },
  {
    name: "John Deo",
    designation: "Web Design",
    image: "/other/team/t-7.jpg",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
  },
  {
    name: "Liam Harris",
    designation: "Data Analyst",
    image: "/other/team/t-8.jpg",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
  },
];

export const PersonsDetail = [
  {
    id: 1,
    image: "/other/person2.png",
    alt: "Noah Evans",
    quote: "Designing Insightful Solutions for Creative Applications.",
    description: `Welcome to Fuso, where quality meets creativity. We're proud to provide tailored solutions designed to meet a wide range of client needs. Our business was founded with a mission to redefine industry standards, blending insight with innovative design to deliver exceptional results.`,
    name: "Noah Evans",
    title: "Marketing Manager",
    isRightAligned: false,
  },
  {
    id: 2,
    image: "/other/person.png",
    alt: "Jessica Doe",
    quote: "The bridge that connects understanding with knowledge is design.",
    description: `Welcome to Fuso, the place where quality and creativity combine. We take great satisfaction knowing that we offer creative suggestions that are customized in order to meet an extensive variety of demands of our clients. The business we operate originated to redefine standards in the industry.`,
    name: "Jessica Doe",
    title: "Design Manager",
    isRightAligned: true,
  },
];

export const pricingPlans = [
  {
    id: 1,
    title: "Free",
    description: "To discover our product and its features",
    price: "$0",
    priceNote: "per editor / per month",
    buttonLabel: "Current Plan",
    features: ["Basic access to core features", "Limited usage or access restrictions", "Community support"],
    isActive: false,
    isPopular: false,
  },
  {
    id: 2,
    title: "Team",
    description: "To discover our product and its features",
    price: "$15",
    priceNote: "per editor / per month",
    buttonLabel: "Upgrade",
    features: ["All Free plan features", "Enhanced collaboration tools", "Increased usage limits", "Priority support"],

    isPopular: true,
    popularLabel: "Most Popular",
  },
  {
    id: 3,
    title: "Enterprise",
    description: "To discover our product and its features",
    price: "Custom",
    buttonLabel: "Contact Us",
    features: ["All Team plan features", "Advanced security and compliance options", "Custom integrations and solutions", "Dedicated account manager", "24/7 premium support"],
    isActive: false,
    isPopular: false,
  },
];

export const PricingDescription = "Discover the perfect solution for all your needs with our range of pricing packages designed to exceed your expectations.";

export const FaqNav = [
  { title: "General", type: "general" },
  { title: "Service", type: "service" },
  { title: "Payment", type: "payment" },
  { title: "Vehicles", type: "vehicles" },
  { title: "Refund", type: "refund" },
];

export const FAQAccordionData = [
  {
    type: "general",
    data: [
      {
        id: 1,
        question: "What is the best type of car for me?",
        answer: "The best car for you depends on your needs, such as budget, fuel efficiency, space requirements, and driving conditions. Consider whether you need a sedan, SUV, truck, or electric vehicle.",
      },
      {
        id: 2,
        question: "How often should I get my car serviced?",
        answer: "Regular maintenance typically includes oil changes every 3,000 to 7,500 miles, tire rotations every 6,000 to 8,000 miles, and annual check-ups. Always refer to your car's owner manual for specific recommendations.",
      },
      {
        id: 3,
        question: "What is the difference between leasing and buying a car?",
        answer: "Leasing means paying for the car's depreciation and returning it at the end, while buying means owning the car outright once the loan is paid off. Leasing often has lower monthly payments, but buying is generally more cost-effective in the long run.",
      },
      {
        id: 4,
        question: "How can I improve my car’s fuel efficiency?",
        answer: "Regular maintenance, maintaining proper tire pressure, using high-quality fuel, and driving smoothly can help improve fuel efficiency. Avoiding heavy acceleration and excessive idling also contributes.",
      },
      {
        id: 5,
        question: "What should I check before buying a used car?",
        answer: "Inspect the car’s history report, check for any signs of damage or wear, test drive the vehicle, and have it inspected by a trusted mechanic. Ensure that the vehicle has a clean title and no outstanding recalls.",
      },
      {
        id: 6,
        question: "How can I tell if my car needs new tires?",
        answer: "Check the tread depth using a tread gauge or the penny test (insert a penny into the tread; if you can see the top of Lincoln’s head, it’s time for new tires). Also, look for uneven wear or any bulges and cracks.",
      },
      {
        id: 7,
        question: "How do I choose the right car battery?",
        answer: "Choose a battery with the correct size, type, and specifications for your vehicle as indicated in the owner’s manual. Consider factors like cold-cranking amps (CCA) and reserve capacity (RC) for your driving conditions.",
      },
    ],
  },
  {
    type: "service",
    data: [
      {
        id: 1,
        question: "What should I check before a long road trip?",
        answer: "Before a long trip, check your tire pressure, oil level, coolant, brakes, lights, and windshield wipers. Make sure your spare tire and jack are in good condition. Also, ensure your car's battery is fully charged and that you have a full tank of gas.",
      },
      {
        id: 2,
        question: "How often should I change my oil?",
        answer: "Generally, you should change your oil every 3,000 to 5,000 miles, but it’s best to check your vehicle’s owner’s manual for the manufacturer’s recommendation. Modern cars with synthetic oil can often go up to 7,500 miles between changes.",
      },
      {
        id: 3,
        question: "Why is my car’s check engine light on?",
        answer: "The check engine light can indicate a variety of issues, from a loose gas cap to more serious problems like engine misfires or emissions system failures. It's important to have your car diagnosed by a professional to identify the exact issue.",
      },
      {
        id: 4,
        question: "How can I improve my car’s fuel efficiency?",
        answer: "To improve fuel efficiency, maintain proper tire pressure, avoid aggressive driving, reduce excess weight in the car, use cruise control on highways, and keep up with regular maintenance such as oil changes and air filter replacements.",
      },
      {
        id: 5,
        question: "What should I do if my car overheats?",
        answer: "If your car overheats, pull over safely and turn off the engine. Allow the car to cool before opening the hood. Check the coolant level and top it up if necessary. If the problem persists, contact a tow service to get your car to a mechanic.",
      },
      {
        id: 6,
        question: "What’s the importance of regular brake maintenance?",
        answer: "Regular brake maintenance is crucial for safety. Worn brake pads or other issues can reduce braking efficiency and increase stopping distances, which can lead to accidents. Have your brakes inspected regularly and replace components as needed.",
      },
      {
        id: 7,
        question: "How can I keep my car’s interior clean?",
        answer: "Regularly vacuum and wipe down surfaces with appropriate cleaners. Use seat covers and floor mats to protect the upholstery and carpets. Keep a trash bag in your car to avoid clutter, and clean spills promptly to prevent stains.",
      },
    ],
  },
  {
    type: "payment",
    data: [
      {
        id: 1,
        question: "What should I check before a long road trip?",
        answer: "Before a long trip, check your tire pressure, oil level, coolant, brakes, lights, and windshield wipers. Make sure your spare tire and jack are in good condition. Also, ensure your car's battery is fully charged and that you have a full tank of gas.",
      },
      {
        id: 2,
        question: "How often should I change my oil?",
        answer: "Generally, you should change your oil every 3,000 to 5,000 miles, but it’s best to check your vehicle’s owner’s manual for the manufacturer’s recommendation. Modern cars with synthetic oil can often go up to 7,500 miles between changes.",
      },
      {
        id: 3,
        question: "Why is my car’s check engine light on?",
        answer: "The check engine light can indicate a variety of issues, from a loose gas cap to more serious problems like engine misfires or emissions system failures. It's important to have your car diagnosed by a professional to identify the exact issue.",
      },
      {
        id: 4,
        question: "How can I improve my car’s fuel efficiency?",
        answer: "To improve fuel efficiency, maintain proper tire pressure, avoid aggressive driving, reduce excess weight in the car, use cruise control on highways, and keep up with regular maintenance such as oil changes and air filter replacements.",
      },
      {
        id: 5,
        question: "What should I do if my car overheats?",
        answer: "If your car overheats, pull over safely and turn off the engine. Allow the car to cool before opening the hood. Check the coolant level and top it up if necessary. If the problem persists, contact a tow service to get your car to a mechanic.",
      },
      {
        id: 6,
        question: "What’s the importance of regular brake maintenance?",
        answer: "Regular brake maintenance is crucial for safety. Worn brake pads or other issues can reduce braking efficiency and increase stopping distances, which can lead to accidents. Have your brakes inspected regularly and replace components as needed.",
      },
      {
        id: 7,
        question: "How can I keep my car’s interior clean?",
        answer: "Regularly vacuum and wipe down surfaces with appropriate cleaners. Use seat covers and floor mats to protect the upholstery and carpets. Keep a trash bag in your car to avoid clutter, and clean spills promptly to prevent stains.",
      },
    ],
  },
  {
    type: "vehicles",
    data: [
      {
        id: 1,
        question: "What are the key factors to consider when buying a new car?",
        answer: "When buying a car, consider your budget, fuel efficiency, safety features, reliability, and maintenance costs. Match the vehicle to your lifestyle—compact for city driving, SUV for family trips, or truck for heavy-duty tasks. Research resale value, warranty, and financing options to make an informed decision.",
      },
      {
        id: 2,
        question: "What should I do if my car breaks down on the road?",
        answer: "If your car breaks down on the road, the first step is to safely pull over to the side of the road, preferably away from traffic. Turn on your hazard lights to alert other drivers. If possible, place a warning triangle or flares behind your car to increase visibility.",
      },
      {
        id: 3,
        question: "What are the benefits of electric cars compared to traditional gasoline cars?",
        answer: "Electric cars offer several advantages over traditional gasoline cars. They are more environmentally friendly as they produce zero tailpipe emissions, reducing your carbon footprint. Electric vehicles (EVs) also have lower operating costs since electricity is cheaper than gasoline and they require less maintenance due to fewer moving parts.",
      },
      {
        id: 4,
        question: "What are some common car maintenance tasks that I should perform regularly?",
        answer: "Regular car maintenance is crucial to extend the life of your vehicle and ensure your safety on the road. Regular tasks include checking oil levels, tire pressure, and brake pads. You should also replace your air filter, wiper blades, and spark plugs as needed. Don't forget to schedule regular tune-ups and inspections with a trusted mechanic.",
      },
      {
        id: 5,
        question: "What are some common car safety features that I should look for when buying a new car?",
        answer: "When shopping for a new car, look for safety features such as airbags, anti-lock brakes (ABS), electronic stability control (ESC), and a rearview camera. You should also consider features like lane departure warning, blind spot monitoring, and forward collision warning. Additionally, check the car's safety ratings from reputable organizations like the National Highway Traffic Safety Administration (NHTSA) and the Insurance Institute for Highway Safety (IIHS).",
      },
      {
        id: 6,
        question: "What are some common car insurance options that I should consider?",
        answer: "When choosing car insurance, consider options like liability coverage, collision coverage, comprehensive coverage, and personal injury protection (PIP). You should also think about additional features like roadside assistance, rental car coverage, and gap insurance.",
      },
      {
        id: 7,
        question: "What are the signs that my car battery needs to be replaced?",
        answer: "If your car's battery is struggling, you might notice signs like slow engine cranking, dim headlights, or electrical issues such as faulty power windows. A clicking sound when turning the key or a warning light on the dashboard can also indicate battery trouble. If the battery is over three years old, testing it regularly is a good idea.",
      },
    ],
  },
  {
    type: "refund",
    data: [
      {
        id: 1,
        question: "How do I request a refund for my car purchase?",
        answer: "To request a refund for your car purchase, please contact our customer service team within 30 days of your purchase. Include your order number, a brief issue description, and any supporting documents.",
      },
      {
        id: 2,
        question: "What is the refund policy for a car purchase?",
        answer: "Our refund policy allows for returns within 30 days of purchase. The vehicle must be in its original condition with no modifications or damages. Refunds will be processed after a thorough inspection.",
      },
      {
        id: 3,
        question: "Can I get a refund if I’ve used the car?",
        answer: "Refunds are typically only available if the car has not been used. If you have used the car, please contact customer service to discuss potential options, such as a trade-in or exchange.",
      },
      {
        id: 4,
        question: "How long does it take to process a refund?",
        answer: "Refunds are usually processed within 7-10 business days after the return has been inspected and approved. The time may vary depending on your payment method.",
      },
      {
        id: 5,
        question: "Are there any fees associated with a refund?",
        answer: "Depending on the return policy, there may be a restocking fee or other charges. Please review our policy or contact customer service for detailed information about potential fees.",
      },
      {
        id: 6,
        question: "Can I return a car that was purchased as a special order?",
        answer: "Special orders are generally non-refundable. Please refer to the terms provided at the time of purchase or contact our customer service for specific details regarding your order.",
      },
      {
        id: 7,
        question: "What should I do if I receive a defective car?",
        answer: "If you receive a defective car, contact our customer service immediately to report the issue. We will arrange for a return or repair and guide you through the process based on our warranty and return policies.",
      },
      {
        id: 8,
        question: "Can I request a refund for additional services purchased with the car?",
        answer: "Refunds for additional services, such as extended warranties or maintenance plans, are subject to the terms outlined in the service agreement. Please review the agreement or contact customer service for details.",
      },
      {
        id: 9,
        question: "What documents are required for a refund?",
        answer: "Required documents include your original receipt, order confirmation, proof of payment, and any relevant communication or agreements. Contact customer service for a complete list of necessary documentation.",
      },
      {
        id: 10,
        question: "Can I cancel a refund request once it has been submitted?",
        answer: "Yes, you can cancel a refund request as long as the process has not been finalized. Contact our customer service team immediately to withdraw your request.",
      },
      {
        id: 11,
        question: "What happens if I am not eligible for a refund?",
        answer: "If you are not eligible for a refund, we will provide alternative solutions, such as repair services or exchange options, depending on the circumstances. Contact customer service to discuss your case.",
      },
      {
        id: 12,
        question: "Are refunds available for leased cars?",
        answer: "Refunds for leased cars are subject to the terms of the lease agreement. Typically, refunds are not available, but early termination options or adjustments may be offered.",
      },
      {
        id: 13,
        question: "Can I transfer my refund to another purchase?",
        answer: "In some cases, refunds can be applied as a credit towards a new purchase. Please contact customer service to explore this option and review the terms.",
      },
      {
        id: 14,
        question: "Is there a deadline for initiating a refund request?",
        answer: "Refund requests must be initiated within 30 days of the purchase date. Exceptions may apply in specific cases; contact customer service for more information.",
      },
      {
        id: 15,
        question: "What should I do if my refund has not been processed?",
        answer: "If your refund has not been processed within the expected timeframe, contact our customer service team with your refund request details for further assistance.",
      },
    ],
  },
];

export const sidebarItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "listing", label: "My Properties" },
  { id: "property", label: "Create Property" },
  { id: "profile", label: "My Profile" },
  { id: "favorites", label: "Favorites" },
  { id: "privacy", label: "Privacy" },
];

export const salesData = [
  {
    id: 1,
    name: "Sports Car",
    price: "$31,415",
    trendIcon: "/other/plus-trend.svg",
    trendText: "25% From Last Week",
    mainImage: "/other/user-dashboard/1.svg",
    trendPositive: true,
  },
  {
    id: 2,
    name: "Electric Car",
    price: "$78,812",
    trendIcon: "/other/minus-trend.svg",
    trendText: "-15% From Last Week",
    mainImage: "/other/user-dashboard/2.svg",
    trendPositive: false,
  },
  {
    id: 3,
    name: "Luxury Car",
    price: "$67,810",
    trendIcon: "/other/plus-trend.svg",
    trendText: "36% From Last Week",
    mainImage: "/other/user-dashboard/3.svg",
    trendPositive: true,
    visibleOnLargeScreensOnly: true,
  },
];

export const dealchart: ApexOptions = {
  series: [
    {
      name: "Sell",
      data: [18, 10, 70, 18, 28, 10],
    },
    {
      name: "Rent",
      data: [25, 50, 30, 30, 25, 45],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 6,
    colors: ["transparent"],
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: ["#FFA941", "var(--chart-theme)"],
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    tickAmount: 4,
    tickPlacement: "between",
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    // tickPlacement: "between",
    labels: {
      style: {
        fontFamily: "outfit, sans-serif",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "outfit, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    itemMargin: {
      horizontal: 10,
    },
  },
  responsive: [
    {
      breakpoint: 1639,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 235,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "70%",
          },
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "70%",
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "60%",
          },
        },
        grid: {
          padding: {
            right: 5,
          },
        },
      },
    },
  ],
};

export const LayesteOrderCategories = [
  { id: "sedan", title: "Sedan", imgSrc: "/car/category/1.svg", defaultActive: true },
  { id: "jeep", title: "Jeep", imgSrc: "/car/category/2.svg" },
  { id: "hatchback", title: "Hatchback", imgSrc: "/car/category/4.svg" },
  { id: "convertible", title: "Convertible", imgSrc: "/car/category/7.svg" },
  { id: "suv", title: "SUV", imgSrc: "/car/category/3.svg" },
];

export const TableHead = ["Item", "Modal", "Price"];

export const OrderTabData = [
  {
    id: "sedan",
    label: "Sedan",
    items: [
      {
        id: 1,
        image: "/other/user-dashboard/order/1.jpg",
        title: "Comfortable Interior",
        modal: "Phantom",
        price: "$67,810",
      },
      {
        id: 2,
        image: "/other/user-dashboard/order/2.jpg",
        title: "Smooth Ride",
        modal: "Dawn",
        price: "$55,654",
      },
    ],
  },
  {
    id: "jeep",
    label: "Jeep",
    items: [
      {
        id: 1,
        image: "/other/user-dashboard/order/3.jpg",
        title: "Comfortable Interior",
        modal: "Phantom",
        price: "$67,810",
      },
      {
        id: 2,
        image: "/other/user-dashboard/order/4.jpg",
        title: "Smooth Ride",
        modal: "Dawn",
        price: "$55,654",
      },
    ],
  },
  {
    id: "hatchback",
    label: "Hatchback",
    items: [
      {
        id: 1,
        image: "/other/user-dashboard/order/5.jpg",
        title: "Comfortable Interior",
        modal: "Phantom",
        price: "$67,810",
      },
      {
        id: 2,
        image: "/other/user-dashboard/order/6.jpg",
        title: "Smooth Ride",
        modal: "Dawn",
        price: "$55,654",
      },
    ],
  },
  {
    id: "convertible",
    label: "Convertible",
    items: [
      {
        id: 1,
        image: "/other/user-dashboard/order/7.jpg",
        title: "Comfortable Interior",
        modal: "Phantom",
        price: "$67,810",
      },
      {
        id: 2,
        image: "/other/user-dashboard/order/8.jpg",
        title: "Smooth Ride",
        modal: "Dawn",
        price: "$55,654",
      },
    ],
  },
  {
    id: "suv",
    label: "SUV",
    items: [
      {
        id: 1,
        image: "/other/user-dashboard/order/9.jpg",
        title: "Comfortable Interior",
        modal: "Phantom",
        price: "$67,810",
      },
      {
        id: 2,
        image: "/other/user-dashboard/order/10.jpg",
        title: "Smooth Ride",
        modal: "Dawn",
        price: "$55,654",
      },
    ],
  },
];

export const ModalSwiperSlider = {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
};
 
export const WhiteCardData = [1,10,1,6,1]

export const options_earning:ApexOptions = {
  series: [
    {
      data: [20, 40, 60, 20, 100, 60, 20, 80, 40, 10, 80, 100, 100],
    },
  ],
  chart: {
    type: "line",
    height: 158,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 20,
      color: "var(--chart-theme)",
      opacity: 0.5,
    },
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    strokeDashArray: 6,
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  stroke: {
    curve: "stepline",
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    min: 0,
    tickAmount: 5,
    
  },
  markers: {
    size: 3,
    colors: "var(--chart-white)",
    strokeColors: "#188aec",
    strokeWidth: 2,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    shape: "circle",
    offsetX: 2,
    offsetY: 2,  
    hover: {
      size: 3,
    },
  },
  colors: ["#188aec"],

  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 122,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 160,
        },
      },
    },
  ],
};

export const UserJobSwiper = {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 1,
    },
    1460: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
};

export const MypropertiesHead = ['Id','Property Name','Views','Response','Option']
export const Myproperties = [
  {
    id: 1,
    image: '/property/detail-main/1.jpg',
    title: 'Xatalya Land Residence',
    availableUnits: 25,
    soldUnits: 15,
  },
  {
    id: 2,
    image: '/property/detail-main/2.jpg',
    title: 'Dream Garden Jakarta',
    availableUnits: 45,
    soldUnits: 23,
  },
  {
    id: 3,
    image: '/property/detail-main/3.jpg',
    title: 'Mahogany Neighborhood',
    availableUnits: 58,
    soldUnits: 25,
  },
  {
    id: 4,
    image: '/property/detail-main/1.jpg',
    title: 'Xatalya Land Residence',
    availableUnits: 25,
    soldUnits: 15,
  },
  {
    id: 5,
    image: '/property/detail-main/2.jpg',
    title: 'Dream Garden Jakarta',
    availableUnits: 45,
    soldUnits: 23,
  },
  {
    id: 6,
    image: '/property/detail-main/3.jpg',
    title: 'Mahogany Neighborhood',
    availableUnits: 58,
    soldUnits: 25,
  },
];
