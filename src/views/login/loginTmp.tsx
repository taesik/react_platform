import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { IRootState } from '../../shared/reducers';
import {
  KB_LOGO,
} from '../img';

const clientId = "770668449686-i5mf4epsaabqdae419c9cpsrlo9g4rq7.apps.googleusercontent.com";

export const Login = (props: any) => {

  const loginTypeParam = (props) => {
    console.log(JSON.stringify(props));
    let loginType = props.location.state.loginType;
    return loginType;
  }

  useEffect(()=>{
    loginTypeParam(props);
  },[])

  let googleClientId:string=clientId;

  const [userObj, setUserObj]=React.useState({
    email:"",
    name:""
  })

  //로그인 성공시 res처리
  const onLoginSuccess=(res:any)=>{
    setUserObj({...userObj,
      email:res.profileObj.email,
      name:res.profileObj.name
    })
    props.history.push('/main');
  }

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="bg-secondary-2">

        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-center g-0 min-vh-100">
            <div className="col-lg-5 col-md-8 py-8 py-xl-0">
              <div className="card shadow p-5 radius-2">
                <div className="card-header text-center bg-white p-0 border-0">
                  <img className="common-logo" src={KB_LOGO} />
                </div>
                <div className="card-body pt-2 pb-0 px-0">
                  <div className="d-grid">
                    <GoogleLogin
                      render={(renderProps) => (
                        <button className="btn btn-primary btn-md" id="login" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in</button>
                      )}
                      clientId = {googleClientId}
                      buttonText="Google"
                      onSuccess={result =>onLoginSuccess(result)}
                      onFailure={result => console.log(result)}
                    />
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
});

const mapDispatchToProps = {
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
