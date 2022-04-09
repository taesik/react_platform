import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IRootState } from '../shared/reducers';
import { getSession, login } from '../shared/reducers/authentication';
import { connect } from 'react-redux';
import { Storage } from '../shared/util/storage-util';

export interface ILoginProps extends StateProps, DispatchProps, RouteComponentProps {}

export const Login = (props: ILoginProps) => {


  const [loginInfo, setLoginInfo] = useState({
    id: '',
    pass: '',
    rememberMe: false,

  });

  const { id, pass, rememberMe } = loginInfo;

  const onChange = e => {
    const nextLoginInfo = {
      ...loginInfo,
      [e.target.name]: e.target.name === 'rememberMe' ? e.target.checked : e.target.value
    };
    setLoginInfo(nextLoginInfo);
  }

  useEffect(() => {
    let rememberId = Storage.local.get('rememberId') || '';
    setLoginInfo({
      ...loginInfo,
      id: rememberId,
      rememberMe: !!rememberId,
    })
  }, []);

  useEffect(() => {
    if (props.isAuthenticated) {
      props.history.push('/main');
    }
  }, [props.isAuthenticated]);

  const reqLogin = () => {
    if (loginInfo.rememberMe) {
      Storage.local.set('rememberId', loginInfo.id);
    } else {
      Storage.local.remove('rememberId');
    }
    props.login(id, pass, rememberMe);
  }

  return (
    <>
      <section className="login-left">

        <p>k</p>
      </section>
      <section className="login-right">
        <div className="logo">
          {/*<img src={LogoKepcoMain}/>*/}
        </div>
        <div className="input box">
          <h6>kboogle</h6>
          <input id="login_id" name="id" type="text" placeholder="ID"
                 value={id} onChange={onChange} />
          <input id="login_pw" name="pass" type="password" placeholder="PW"
                 value={pass} onChange={onChange} />
          {
            props.isLoginFailed ?
              <h3 style={{color:'red',marginBottom:'20px'}}>아이디 또는 패스워드가 잘못되었습니다.</h3>
              : ''
          }
          <input type="checkbox" id="remember-me" name="rememberMe"
                 checked={rememberMe} onChange={onChange}/>
          <label htmlFor="remember-me" >
            <div className="label-btn">
              <div className="jog"></div>
            </div>
            계정 기억하기
          </label>
          <label htmlFor="login_submit" onClick={reqLogin}>
            <a href="#">
              {/*<img src={IconLock} />*/}
              <span>LOGIN</span>
            </a>
            {/*<Link to={"/status"}  style={{width:'100%', display:'block'}}>*/}
            {/*  <img src={IconLock} /><span>LOGIN</span>*/}
            {/*</Link>*/}
          </label>
          {/*<input type="submit" value="LOGIN" id="login_submit"/>*/}
        </div>
      </section>
    </>
  );
}

const mapStateToProps = ({  }: IRootState) => ({
  isAuthenticated: false,
  isLoginFailed: false,
  // isAdmin: hasAnyAuthority(authentication.account.authorities, [AUTHORITIES.ADMIN]),
});

const mapDispatchToProps = { getSession, login };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
