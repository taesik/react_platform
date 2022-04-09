import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';


export interface  ModalProps {
  isShown: boolean;
  hide: ()=> void;
  modalContent: JSX.Element;

}

const ContentsViewModal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,

  }) => {

  const modal = (
    <></>
  )

  return isShown? ReactDOM.createPortal(modal, document.body) : null ;
}

export default ContentsViewModal;
