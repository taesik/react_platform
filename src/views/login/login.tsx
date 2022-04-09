import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { IRootState } from '../../shared/reducers';
import {
  KB_LOGO,
  KB
} from '../img';
import { LoginType } from '../../app';
import { RouteComponentProps } from 'react-router-dom';
import { setUserInfo,
        } from '../../shared/reducers/api';
import axios from 'axios';


export const Login = (props: any) => {

  const [userInfo, setUserInfo]= useState("");
  const [isLogin, setIsLogin]= useState(false);
  const [userNo, setUserNo]= useState("");

  useEffect(()=>{
    initProcess();
  },[])

  const initProcess=()=>{

    let ltype:string = props.location.state.loginType;
    let info:string = props.location.state.userNo;
    let _isLogin:boolean = props.location.state.isLogin;

    console.log("loginType : "+ltype+" / userInfo : "+info+"/ isLogin : "+_isLogin);

    if(ltype === LoginType.I){
      console.log("move ISIGN!!!");
      // window.location.href = 'http://10.216.49.49:8080/api/login/business'
    }else{

    }

  }
  const onChange = e => {
    setUserNo(e.target.value);
  }

  const setUserInfoAPI=()=>{
    console.log("userNo : "+userNo)

    axios.post(`/login/setUserInfo?id=${userNo}`)
      .then(function(response) {
        console.log("setUserInfo : "+response.data);
        window.location.href = 'http://10.216.49.49:8080/api/login/business'
      })
  }

  return (
    <>
      <div className="bg-secondary-2">
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-center g-0 min-vh-100">
            <div className="col-lg-5 col-md-8 py-8 py-xl-0">
              <div className="card shadow p-5 radius-2">
                <div className="card-header text-center bg-white p-0 border-0">
                  <img className="common-logo" src={KB_LOGO}/>
                </div>
                <div className="modal-header">
                  <h5 className="modal-title">로그인</h5>
                </div>

                <div className="modal-body">
                  <form className="row">
                    <div className="col-12">
                      <label htmlFor="id" className="form-label">계정</label>
                      <input type="text" className="form-control mb-45" id="id" value={userNo} onChange={onChange} />
                    </div>
                  </form>
                </div>
                <div className="card-body pt-2 pb-0 px-0">
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-md" onClick={setUserInfoAPI}>Sign in</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ api }: IRootState) => ({
  isLoading : api.loading
});

const mapDispatchToProps = {
  setUserInfo
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
