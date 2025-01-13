import LoginMain from "@/Components/Pages/Others/Common/LoginMain";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setLoginModal } from "@/Redux/Layout/LayoutReducers";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CloseBtn from "../CloseBtn";

const LoginModal = () => {
  const { loginModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setLoginModal());
  return (
    <div>
      <Modal fade centered modalClassName='theme-modal' isOpen={loginModal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
        <ModalBody>
          <LoginMain />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
