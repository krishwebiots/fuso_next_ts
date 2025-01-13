import AddressModal from "@/Components/CommonComponents/Modal/AddressModal";
import PersonalModal from "@/Components/CommonComponents/Modal/PersonalModal";
import { addressInfo, personalInfo } from "@/Data/Pages/Others";
import CommonProfileDetail from "../Common/CommonProfileDetail";
import UserMainProfile from "./UserMainProfile";

const Profile = () => {
  return (
    <div className='profile-main'>
      <UserMainProfile />
      <CommonProfileDetail title='Personal Information' data={personalInfo} modalId={1} />
      <CommonProfileDetail title='Address' data={addressInfo} modalId={2} />
      <PersonalModal />
      <AddressModal />
    </div>
  );
};

export default Profile;
