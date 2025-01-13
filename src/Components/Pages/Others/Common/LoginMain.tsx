import CommonInput from "@/Components/CommonComponents/CommonInput";
import { DontAccount, ImagePath, LogIn, LogInWithFacebook, LogInWithGoogle, LogInYourAccount, Remember, SignUp, Welcome } from "@/Constants/Constants";
import { RouteList } from "@/utils/RouteList";
import Link from "next/link";
import { Button } from "reactstrap";

const LoginMain = () => {
  return (
    <div className='form-box'>
      <div className='login-title'>
        <h3>{Welcome}</h3>
        <h5>{LogInYourAccount}</h5>
      </div>
      <form className='login-form'>
        <CommonInput inputType='email' placeholder='Enter Your Email' />
        <CommonInput inputType='password' placeholder='Enter Your password' />
        <div className='form-check-box'>
          <input type='checkbox' id='Remember' />
          <label htmlFor='Remember'>{Remember}</label>
        </div>
        <Button className='btn-solid' type='button'>
          {LogIn}
        </Button>
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
          <h6>{DontAccount}</h6>
          <Link href={RouteList.Pages.Other.SignUp1}>{SignUp}</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginMain;
