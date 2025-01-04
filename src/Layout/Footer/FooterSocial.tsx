import { SocialMediaData } from "@/Data/Layout/Footer";
import Link from "next/link";
import { FC, Fragment } from "react";
import FooterLogo from "./FooterLogo";

const FooterSocial:FC<{endPoint:number,details:string}> = ({endPoint,details}) => {
  return (
    <Fragment>
      <FooterLogo />
      <p>{details}</p>
      <ul className='dark-footer-social'>
        {SocialMediaData.slice(0, endPoint).map((item, index) => (
          <li key={index}>
            <Link href={item.url} target='_blank'>
              <i className={item.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default FooterSocial;
