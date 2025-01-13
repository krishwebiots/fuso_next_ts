import { JobApplyBannerTitle } from "@/Constants/Constants";
import { options_earning, WhiteCardData } from "@/Data/Pages/Others";
import ReactApexChart from "react-apexcharts";
import { Col } from "reactstrap";

const JobApplyBanner = () => {
  return (
    <Col xl={5}>
      <div className='white-card'>
        <h4 className='dashboard-inner-title'>{JobApplyBannerTitle}</h4>
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
  );
};

export default JobApplyBanner;
