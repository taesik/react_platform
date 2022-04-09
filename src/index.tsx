import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { bindActionCreators } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './app';
import initStore from './config/store';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from "./shared/error/error-boundary";
import { clearAuthentication } from './shared/reducers/authentication';
import setupAxiosInterceptors from './config/axios-interceptor';
import { loadIcons } from './config/icon-loader';
import { initPublish } from './init-publish';
import { hideLoading, showLoading } from './shared/reducers/axios';
import { getSearchPlaceholder,

        getRcmdKeyword} from './shared/reducers/api';

const store = initStore(); // 스토어 셋팅

// 사용자 세션 확인 및 초기화
const actions = bindActionCreators({
                                                showLoading,
                                                hideLoading,
                                                }, store.dispatch);

setupAxiosInterceptors(actions);
loadIcons(); // fontawesome 셋팅
initPublish(); // 퍼블리싱 코드 초기화

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
