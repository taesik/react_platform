import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import SwichButton from '../button/swichButton';


const NewsDetailModal = (props) => {

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
            <h5 className="modal-title">{props.newsTitle}</h5>
            <div className="modal-title-desc">
              <ul className="item-desc">
                <span><i className="bi bi-clock" /></span>
                <li>{props.newsDate}</li>
              </ul>
              <ul className="item-desc">
                <span><i className="bi bi-link-45deg" /></span>
                <li>{props.newsMedia}</li>
              </ul>
            </div>
          </>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <div className="modal-item">
            {/*{props.newsID ? <img className="modal-item-images" src={props.newsID ? "" : ""} />:<></>}*/}

            <p className="modal-item-text">{props.newsContent}</p>
          </div>
          <ul className="toggle-list">
            {props.newsEntities.map(item => {
              console.log(props.newsEntities);
              let cID = item.length;
              let id = itemID(props.newsID, cID);
              return (
               props.newsEntities?
                 <></>
                 :
                 <SwichButton isKeyword={false} btnName={item} id={id} />
              )
            })
            }
          </ul>
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

export default NewsDetailModal;
