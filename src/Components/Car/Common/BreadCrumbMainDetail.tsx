import { CarSvgData } from "@/Data/Car";
import { setShareModal } from "@/Redux/Layout/LayoutReducers";
import SvgIcon from "@/utils/SvgIcon";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "reactstrap";

const BreadCrumbMainDetail = () => {
  const dispatch = useDispatch();
  const [saveProp, setsaveProp] = useState<boolean>();
  const [tooltipOpen, setTooltipOpen] = useState({
    share: false,
    print: false,
    save: false,
  });

  const toggleTooltip = (key: "share" | "print" | "save") => {
    setTooltipOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <div className='car-top-title'>
      <div className='car-title-flex'>
        <div className='car-title mb-0'>
          <h3>Velocity Racer Pro</h3>
          <p>{`Shifts gears automatically based on the car's speed and acceleration.`}</p>
          <ul className='car-title-list'>
            {CarSvgData.map((item, i) => {
              return (
                <li key={i}>
                  <SvgIcon iconId={`/car/sprite/detail.svg#${item.icon}`} />
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='price-box'>
          <ul className='detail-social-list'>
            <li>
              <Link href='#sharemodal' onClick={() => dispatch(setShareModal())} id='tooltipShare'>
                <i className='ri-share-line' />
              </Link>
              <Tooltip placement='top' isOpen={tooltipOpen.share} target='tooltipShare' toggle={() => toggleTooltip("share")}>
                Share
              </Tooltip>
            </li>
            <li>
              <Link href='#!' className='print-button' onClick={() => window.print()} id='tooltipPrint'>
                <i className='ri-printer-line' />
              </Link>
              <Tooltip placement='top' isOpen={tooltipOpen.print} target='tooltipPrint' toggle={() => toggleTooltip("print")}>
                Print
              </Tooltip>
            </li>
            <li>
              <Link href='#!' className={`${saveProp ? "clicked" : ""} add-to-fav`} onClick={() => setsaveProp(!saveProp)} id='tooltipSave'>
                {!saveProp ? <i className='ri-bookmark-line save-outline' /> : <i className='ri-bookmark-fill save-icon' />}
              </Link>
              <Tooltip placement='top' isOpen={tooltipOpen.save} target='tooltipSave' toggle={() => toggleTooltip("save")}>
                Save
              </Tooltip>
            </li>
          </ul>
          <h4>
            $25,200 <span>/ EMI - ₹ 1.58L</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbMainDetail;
