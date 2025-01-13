import { AmazingDeals } from "@/Constants/Constants";
import { dealchart } from "@/Data/Pages/Others";
import ReactApexChart from "react-apexcharts";
import { Col } from "reactstrap";

const AmazingDeal = () => {
  return (
    <Col xl={5}>
      <div className='white-card'>
        <h4 className='dashboard-inner-title'>{AmazingDeals}</h4>
        <div className='dealChart'>
          <ReactApexChart type='bar' options={dealchart} series={dealchart.series} height={250} />
        </div>
      </div>
    </Col>
  );
};

export default AmazingDeal;
