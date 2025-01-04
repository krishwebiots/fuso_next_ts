"use client";
import { ImagePath } from "@/Constants/Constants";
import { PortfolioItemsCreative } from "@/Data/Pages/Portfolio";
import RatioImage from "@/utils/RatioImage";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import { useEffect } from "react";
import { Container } from "reactstrap";

const PortfolioCreativeFullContainer = () => {
  const rowdata = [4, 3, 2];
  const startindex = 0;
  useEffect(() => {
    const navLinks = document.querySelectorAll(".portfolio-link");

    const handleMouseEnter = (link: Element) => {
      navLinks.forEach((l) => {
        if (l instanceof HTMLElement) {
          l.style.opacity = l === link ? "1" : "0.2";
        }
      });
    };

    const handleMouseLeave = () => {
      navLinks.forEach((l) => {
        if (l instanceof HTMLElement) {
          l.style.opacity = "1";
        }
      });
    };

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => handleMouseEnter(link));
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", () => handleMouseEnter(link));
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className='creative-bg-img'>
      <RatioImage src={`${ImagePath}/car/bg-effect/service-bg.png`} alt='service-bg' className='img-fluid bg-img' />
      <Container>
        {rowdata.map((data, i) => {
          const RowSlice = PortfolioItemsCreative.slice(startindex, startindex + data);
          return (
            <ul className='creative-portfolio' key={i}>
              {RowSlice.map((item, i) => {
                return (
                  <li key={i}>
                    <Link href={RouteList.Pages.Portfolio.Detail.PortfolioDetail1} className='portfolio-link'>
                      {item.title}
                    </Link>
                    <div className='full-img'>
                      <RatioImage src={`${ImagePath}/portfolio/full-img/${item.imgSrc}`} alt={item.alt} className='img-fluid bg-img' />
                    </div>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </Container>
    </div>
  );
};

export default PortfolioCreativeFullContainer;
