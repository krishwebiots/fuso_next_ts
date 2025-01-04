"use client";
import Customizer from "@/Layout/Customizer";
import Footer from "@/Layout/Footer";
import FooterDemo2 from "@/Layout/Footer/FooterDemo2";
import Header from "@/Layout/Header";
import MobileMenu from "@/Layout/MobileMenu";
import TapTop from "@/Layout/TapTop";
import { PathSettings } from "@/Types/LayoutType";
import { setFavicon } from "@/utils/setFavicon";
import { CustomToaster } from "@/utils/Toaster";
import Aos from "aos";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const symbolRegex = /[!@#\$%\^\*\(\)_\+\{\}\[\]:;"'<>,.?/\\|`~=]/g;
  const [firstPart] = pathname.split("/").slice(1).map((item) => item.replace(symbolRegex, " "));

  const pathSettings: Record<string, PathSettings> = {
    "car-2": { className: "car2-color", favicon: "favicon-4.png" },
    job: { className: "job-color", favicon: "favicon-5.png" },
    "job-2": { className: "job2-color large-container", favicon: "favicon-6.png" },
    "job-3": { className: "job3-color large-container", favicon: "favicon-7.png" },
    property: { className: "", favicon: "favicon-1.png" },
    "property-2": { className: "property2-color", favicon: "favicon-2.png" },
    default: { className: "car-color", favicon: "favicon-3.png" },
  };

  const { className, favicon } = pathSettings[firstPart] || pathSettings.default;

  useEffect(() => {
    document.body.className = className;
    setFavicon(`/assets/images/logo/${favicon}`);
    Aos.init({ once: true });

    return () => setFavicon(`/assets/images/logo/favicon-3.png`);
  }, [className, favicon]);
  const isJobOrProperty = ["car-2", "job-3", "job-2", "property-2"].some((item) => firstPart.includes(item));

  return (
    <div>
      <Header part={firstPart} />
      <MobileMenu />
      {children}
      {isJobOrProperty ? <FooterDemo2 part={firstPart} /> : <Footer part={firstPart} />}
      <TapTop part={firstPart} />
      <Customizer part={firstPart} />      
      <CustomToaster/>
    </div>
  );
}
