"use client";
import { ImagePath } from "@/Constants/Constants";
import { ModernPortfolio } from "@/Data/Pages/Portfolio";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import { Container } from "reactstrap";
import { useEffect, useState } from "react";
import { animated } from "react-spring";
import RatioImage from "@/utils/RatioImage";

const PortfolioModernContainer = () => {
  const [style, setStyle] = useState({ left: 0, top: 500, scale: 1 });

  const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => { left: any; top: any } }; clientX: number; clientY: number }) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setStyle({
      left: e.clientX - left + 250,
      top: e.clientY - top,
      scale: 1.1,
    });
  };

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
    <div className='creative-bg-img h-auto overflow-hidden'>
      <RatioImage src={`${ImagePath}/car/bg-effect/service-bg.png`} alt='service-bg' className='img-fluid bg-img' />
      <Container>
        <ul className='creative-portfolio-list'>
          {ModernPortfolio.map((item, i) => (
            <li key={i} onMouseMove={handleMouseMove} onMouseLeave={() => setStyle({ left: 0, top: 0, scale: 1 })} style={{ position: "relative" }}>
              <Link href={RouteList.Pages.Portfolio.Detail.PortfolioDetail1} className='portfolio-link'>
                {item.title}
              </Link>
              <animated.div
                className='full-img'
                style={{
                  position: "absolute",
                  pointerEvents: "none",
                  left: style.left,
                  top: style.top,
                  transform: `scale(${style.scale})`,
                  transition: "all 0.3s ease-out",
                }}
              >
                <RatioImage src={`${ImagePath}/${item.imageSrc}`} alt={item.imageAlt} className='img-fluid' />
              </animated.div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default PortfolioModernContainer;
