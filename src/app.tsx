import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { IRootState } from 'shared/reducers';
import ErrorBoundaryRoute from 'shared/error/error-boundary-route';
import Login from './views/login/login';
import './app.css';
import Index from './shared/layout';
import InitPage from './views/init-page';
import axios from 'axios';
import MindMapPage from './views/component/mindmap/mindmap_page';


export enum LoginType {
  I = "important" ,
  S = "buniess"
}

export interface IAppProps extends StateProps, DispatchProps {}

export const App = (props: IAppProps) => {
  const [loginType, setLoginType] = useState({type:"",isGetType:false});
  const [isLogin, setIsLogin]= useState(false);
  const [userNo, setUserNo]= useState("");
  type LoginTypeJSON = {
    connectionPath : string
  }

  type LoginJSON = {
    isOK : boolean,
  }

  type UserInfoJSON = {
    isLogin : boolean,
    userInfo : {
      id: string
    },
  }

  useEffect(()=>{
    getUserInfoFunc();
    initIpEnvir();

  },[loginType.isGetType])

  const initIpEnvir=()=>{
    if(isLogin===false){
      axios.post('/login/connectionPath')
        .then(function(response) {
          let jsonStr:string = JSON.stringify(response.data)
          let type:LoginTypeJSON = JSON.parse(jsonStr);
          console.log("LOGIN TYPE : "+ type.connectionPath);
          let ltype:string = getLoginType(type.connectionPath);
          setLoginType({type:ltype,isGetType:true});
          console.log(`loginType : ${loginType.type} / isGetLoginType : ${loginType.isGetType}`);
        })
    }
  }

  const getUserInfoFunc =()=>{
    if(isLogin===false){
      axios.post('/login/getUserInfo')
        .then(function(response) {
          console.log(response.data)
          let jsonStr:string = JSON.stringify(response.data)
          let info:UserInfoJSON = JSON.parse(jsonStr);
          setIsLogin(info.isLogin);
          if(info.userInfo !== null)
            setUserNo(info.userInfo.id);
          // console.log(`info.isLogin : ${info.isLogin} / info.userInfo.id : ${info.userInfo.id}`);
        })
    }
  }

  const getLoginType = (type:string) => {
    switch (type) {
      case LoginType.S :
        return LoginType.S;
      case LoginType.I :
        return LoginType.I;
      default :
        return ;
    }
  }

  return (
    <>
      {
        isLogin ?
          <Switch>
            <ErrorBoundaryRoute path={["/main",
                                      "/dashboard",
                                      "/search-result",
                                      "/analysis-report",
                                      "/analysis-report-detail",
                                      "/keyword-news",
                                      "/result-keyword-news",
                                      "/admin-keyword",
                                      "/admin-dashboard"]} component={Index} />//에러시 페이지
            <ErrorBoundaryRoute path="/mindmap" component={MindMapPage} />
            <Redirect from="/" to={"/main"} />

          </Switch>
          :
          loginType.isGetType ?
            <Switch>

            <ErrorBoundaryRoute path="/mindmap" component={MindMapPage} />
            <ErrorBoundaryRoute path="/login" component={Login} />
            <Redirect from="/" to={
              {pathname: "/login",
                state: {loginType:loginType.type,
                  isLogin:isLogin,
                  userNo:userNo
                }
              }
            }  />
            </Switch>
            :
            <InitPage/>
      }
    </>
  );
}


const mapStateToProps = ({ api }: IRootState) => ({
  isGetLoginType: api.isGetLoginType,
});

const mapDispatchToProps = {
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(App);
