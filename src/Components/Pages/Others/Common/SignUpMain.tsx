import CommonInput from "@/Components/CommonComponents/CommonInput";
import { AlreadyAnAccount, aswellasthe, ConditionAccept, CreateAnAccount, ImagePath, LogIn, LogInWithFacebook, LogInWithGoogle, PrivacyPolicy, SignUpAccoumt, Terms, Welcome } from "@/Constants/Constants";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import { FC } from "react";
import { Button } from "reactstrap";

const SignUpMain: FC<{ classname?: string }> = ({ classname }) => {
  return (
    <div className={`${classname ? classname : ""} form-box`}>
      <div className='login-title'>
        <h3>{Welcome}</h3>
        <h5>{SignUpAccoumt}</h5>
      </div>
      <form className='login-form'>
        <CommonInput inputType='text' placeholder='Enter Your Full Name' />
        <CommonInput inputType='email' placeholder='Enter Your Email' />
        <CommonInput inputType='password' placeholder='Enter Your password' />
        <div className='form-check-box align-items-start'>
          <input type='checkbox' id='Remember' />
          <label htmlFor='Remember' className='line-height-change'>
            {ConditionAccept}
            <Link href={RouteList.Pages.Other.Condition} className='text-decoration-underline theme-color'>
              {Terms}
            </Link>
            {aswellasthe}
            <Link href={RouteList.Pages.Other.Privacy} className='text-decoration-underline theme-color'>
              {PrivacyPolicy}
            </Link>
          </label>
        </div>
        <Button className='btn-solid'>{CreateAnAccount}</Button>
        <div className='text-divider'>
          <span>OR</span>
        </div>
        <ul className='login-social'>
          <li>
            <Link href='https://www.google.com/' target='_blank'>
              <img src={`${ImagePath}/other/google.png`} alt='facebook' className='img-fluid' />
              <span>{LogInWithGoogle}</span>
            </Link>
          </li>
          <li>
            <Link href='https://www.facebook.com/' target='_blank'>
              <img src={`${ImagePath}/other/facebook.png`} alt='facebook' className='img-fluid' />
              <span>{LogInWithFacebook}</span>
            </Link>
          </li>
        </ul>
        <div className='signup-box'>
          <h6>{AlreadyAnAccount}</h6>
          <Link href={RouteList.Pages.Other.Login1}>{LogIn}</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpMain;
