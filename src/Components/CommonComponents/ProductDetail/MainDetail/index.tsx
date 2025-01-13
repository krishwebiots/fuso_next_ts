import { useAppDispatch } from "@/Redux/Hooks";
import { setShareModal } from "@/Redux/Layout/LayoutReducers";
import { dynamicNumber } from "@/utils";
import Link from "next/link";
import React, { useState } from "react";
import ShareModal from "./ShareModal";

const MainDetail = () => {
  const dispatch = useAppDispatch();
  const [saveProp, setsaveProp] = useState<boolean>();
  return (
    <div className='property-detail-main'>
      <div className='main-detail-flex'>
        <div>
          <h3>Luxury 3-Bedroom Mansion with Pool</h3>
          <h6>Vasant Kunj, New Delhi, Vasant Kunj, New Delhi - South, Delhi NCR</h6>
          <div className='label-flex'>
            <ul className='rating'>
              {dynamicNumber(5).map((_) => {
                return (
                  <li key={_}>
                    <i className='ri-star-fill' />
                  </li>
                );
              })}
            </ul>
            <label className='detail-label'>For Sale</label>
          </div>
        </div>
        <div className='price-box'>
          <h4>
            $25,200 <span>/ EMI - ₹ 1.58L</span>
          </h4>
          <ul className='detail-social-list'>
            <li>
              <Link href='#sharemodal' onClick={() => dispatch(setShareModal())}>
                <i className='ri-share-line' />
                Share
              </Link>
            </li>
            <li>
              <Link href='#!' className='print-button' onClick={() => window.print()}>
                <i className='ri-printer-line' />
                Print
              </Link>
            </li>
            <li>
              <Link href='#!' className={`${saveProp ? "clicked" : ""} add-to-fav`} onClick={() => setsaveProp(!saveProp)}>
                {!saveProp ? <i className={`ri-bookmark-line save-outline`} /> : <i className='ri-bookmark-fill save-icon' />}
                Save
              </Link>
            </li>
          </ul>
        </div>
        <ShareModal />
      </div>
    </div>
  );
};

export default MainDetail;
