"use client";
import VideoModal from "@/Components/CommonComponents/Modal/VideoModal";
import Portfolio from "@/Components/CommonComponents/Portfolio";
import { Fragment } from "react";

const PortfolioVideoModalContainer = () => {
  return (
    <Fragment>
      <Portfolio gridSize={3} cardShow={9} type='video' sectionClass='portfolio-video' />
      <VideoModal />
    </Fragment>
  );
};

export default PortfolioVideoModalContainer;
