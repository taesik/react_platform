import React from 'react';
import {  Modal } from 'react-bootstrap';


const LoginViewModal = (props) => {

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
            <div className="modal-header">
              <h5 className="modal-title">로그인</h5>
            </div>
          </>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <div className="modal-body">
            <form className="row">
              <div className="col-12">
                <label htmlFor="id" className="form-label">계정</label>
                <input type="text" className="form-control mb-45" id="id"/>
              </div>
              <div className="col-12">
                <label htmlFor="password" className="form-label">비밀번호</label>
                <input type="text" className="form-control mb-06" id="password"/>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="password01"/>
                    <label className="form-check-label" htmlFor="password01">
                      비밀번호 표기
                    </label>
                </div>
              </div>
            </form>
          </div>
        </>
      </Modal.Body>
      <Modal.Footer>
        <div className="modal-footer">
          <button type="button" className="btn btn-cancel" data-bs-dismiss="modal" onClick={props.onHide}>취소</button>
          <button type="submit" className="btn btn-update">로그인</button>
        </div>
      </Modal.Footer>
    </Modal>
    </>
  );

}

export default LoginViewModal;
