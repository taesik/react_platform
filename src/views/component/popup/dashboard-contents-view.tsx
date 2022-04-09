import React, { FunctionComponent, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SwichButton from '../button/swichButton';


const DashboardDetailModal = (props) => {

  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="props." >
          <>
            신규사용자 추이
            <br/>(작성자의 사번) (작성일) (매일갱신)
            <button>좋아요</button>
            <button>구독</button>
            <button>공유</button>
          </>
        </Modal.Title>

      </Modal.Header>
      <Modal.Body>
        <>
          <iframe id={""}
                  title={"plot"}
                  width={"330"}
                  height={"300"}
                  src={"http://10.81.31.11/"}
          ></iframe>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>닫기</Button>
      </Modal.Footer>
    </Modal>
    </>
  );

  function itemID(mID: string, cID: number): string {
    return "item-keyword-" + mID + "-" + cID--;
  }

}

export default DashboardDetailModal;
