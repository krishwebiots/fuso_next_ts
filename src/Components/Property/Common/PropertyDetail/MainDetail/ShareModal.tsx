import CloseBtn from "@/Components/CommonComponents/CloseBtn";
import { socialLinks } from "@/Data/Demo/Common";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setShareModal } from "@/Redux/Layout/LayoutReducers";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShareModal = () => {
  const { shareModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  const toggle = () => dispatch(setShareModal());

  return (
    <Fragment>
      <Modal fade centered modalClassName='theme-modal' isOpen={shareModal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
        <ModalBody>
          <h4 className='modal-title'>Share It</h4>
          <ul className='modal-share-list'>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url} target='_blank'>
                  <i className={link.iconClass}></i>
                </Link>
              </li>
            ))}
          </ul>
          <div className='d-flex align-items-center position-relative copy-input'>
            <Input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <CopyToClipboard text={inputValue}>
              <Button className='btn-solid position-absolute top-0 end-0'>Copy Link</Button>
            </CopyToClipboard>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default ShareModal;
