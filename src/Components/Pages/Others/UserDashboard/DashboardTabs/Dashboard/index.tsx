import { AmazingDeals, ImagePath } from "@/Constants/Constants";
import { dealchart, options_earning, WhiteCardData } from "@/Data/Pages/Others";
import ReactApexChart from "react-apexcharts";
import { Col, Row } from "reactstrap";
import LatestOrder from "../LatestOrder";
import SaleBanner from "./SaleBanner";
import SalesData from "./SalesData";
import JobApplySlider from "./JobApplySlider";

const Dashboard = () => {
  return (
    <div className='common-card'>
      <Row className='gy-4'>
        <SalesData />
        <Col xl={5}>
          <div className='white-card'>
            <h4 className='dashboard-inner-title'>{AmazingDeals}</h4>
            <div className='dealChart'>
              <ReactApexChart type='bar' options={dealchart} series={dealchart.series} height={250} />
            </div>
          </div>
        </Col>
        <LatestOrder />
        <SaleBanner />
        <Col md={4}>
          <div className='map-card'>
            <img src={`${ImagePath}/other/map-card.jpg`} alt='map' className='img-fluid' />
          </div>
        </Col>
        <Col xl={5}>
          <div className='white-card'>
            <h4 className='dashboard-inner-title'>Job Applied</h4>
            <ul className='applied-buttons'>
              {WhiteCardData.map((item, i) => {
                return (
                  <li key={i}>
                    <button className='applied-btn' type='button'>
                      {item}d
                    </button>
                  </li>
                );
              })}
            </ul>
            <ReactApexChart type='line' options={options_earning} series={options_earning.series} height={158} />
          </div>
        </Col>
        <JobApplySlider/>        
      </Row>
    </div>
  );
};

export default Dashboard;
