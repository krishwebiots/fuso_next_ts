import { Href, ImagePath, Search } from "@/Constants/Constants";
import { Cityes } from "@/Data/Demo/JobDemo2";
import { dynamicNumber } from "@/utils";
import RatioImage from "@/utils/RatioImage";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Dropdown, DropdownMenu, DropdownToggle, Input, Row } from "reactstrap";
import CitySelectMenu from "../../Common/CitySelectMenu";

const Job2HomeSection = () => {
  const [selectedCity, setSelectedCity] = useState("Location");
  const [open, setopen] = useState(false);
  const toggle = () => setopen((prevState) => !prevState);
  const homeMoveRef = useRef<NodeListOf<HTMLLIElement> | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const ivalueX = (e.pageX * -1) / 60;
      const ivalueY = (e.pageY * -1) / 60;
      const cvalueX = (e.pageX * -1) / 80;
      const cvalueY = (e.pageY * -1) / 90;

      homeMoveRef.current?.forEach((item) => {
        item.style.transform = `translate3d(${ivalueX}px, ${ivalueY}px, 0)`;
        item.style.transform = `translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
      });
    };

    const layerElement = layerRef.current;
    if (layerElement) layerElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (layerElement) layerElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    homeMoveRef.current = document.querySelectorAll(".dark-job-img li");
  }, []);

  return (
    <div className='dark-job-home' ref={layerRef}>
      <Container>
        <ul className='dark-job-img'>
          {dynamicNumber(7).map((image, index) => (
            <li key={index}>
              <RatioImage src={`${ImagePath}/dark-job/home-img/${image}.jpg`} alt={`img-${image}`} className='img-fluid' data-aos='zoom-in' />
            </li>
          ))}
        </ul>
        <Row className='justify-content-center'>
          <Col lg={8}>
            <div className='home-content'>
              <div>
                <h1>Find your Next Job and Make your Own Goal</h1>
                <p>Discover trusted job opportunities tailored to your skills and aspirations. Join our community and let us guide you towards success.</p>
                <div className='search-input-home'>
                  <div className='animated-line-section'>
                    <span className='animated-line' />
                    <span className='animated-line' />
                  </div>
                  <Dropdown isOpen={open} toggle={toggle} className='select-dropdown'>
                    <DropdownToggle className='select-button' caret color='transparent'>
                      {selectedCity}
                    </DropdownToggle>
                    <DropdownMenu>
                      <Row>
                        {Cityes.map((cityList, i) => (
                          <CitySelectMenu key={i} multiColumn cityList={cityList} selectedCity={selectedCity} onSelectCity={(city: string) => setSelectedCity(city)} href={Href} />
                        ))}
                      </Row>
                    </DropdownMenu>
                  </Dropdown>
                  <Input type='text' className='form-control' />
                  <Link href={RouteList.Job.Grid.JobGrid2} className='btn-pills'>
                    {Search}
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Job2HomeSection;
