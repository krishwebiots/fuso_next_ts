import { DashboardTitle, SVGPath } from "@/Constants/Constants";
import { salesData } from "@/Data/Pages/Others";
import Image from "next/image";
import { Col } from "reactstrap";

const SalesData = () => {
  return (
    <Col xs={12}>
      <h4 className='dashboard-title'>{DashboardTitle}</h4>
      <ul className='sales-layout-list'>
        {salesData.map((sale) => (
          <li key={sale.id} className={sale.visibleOnLargeScreensOnly ? "d-xl-block d-md-none d-block" : ""}>
            <div className='sale-flex'>
              <div>
                <span>{sale.name}</span>
                <h4>{sale.price}</h4>
                <h6>
                  <Image height={80} width={80} src={`${SVGPath}/${sale.trendIcon}`} alt={sale.trendPositive ? "positive-trend" : "negative-trend"} className='img-fluid' />
                  {sale.trendText}
                </h6>
              </div>
              <div className='sale-img'>
                <Image height={80} width={80} src={`${SVGPath}/${sale.mainImage}`} alt={`${sale.name} sales`} className='img-fluid' />
                <Image height={100} width={100} src={`${SVGPath}/${sale.mainImage}`} alt={`${sale.name} sales overlay`} className='img-fluid sale-opacity' />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default SalesData;
