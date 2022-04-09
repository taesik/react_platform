import axios from 'axios';

import { request } from '../env';

axios.defaults.timeout = request.TIMEOUT;
// 현재는 api에 호출하지 않음
axios.defaults.baseURL = request.PREFIX_URL;

const setupAxiosInterceptors = actions => {
  const onRequestSuccess = config => {
    if (config.params === undefined) {
      config.params = {};
    }
    // method get 인 경우 IE11에서 캐싱 문제로 인하여 추가
    if (config.method.toLowerCase() === 'get') {
      config.params['t'] = new Date().getTime();
    }

    if (!config.params.isHideLoading) { // isHideLoading 설정한 경우에만 보여주지 않는다.
      actions.showLoading();
    }
    return config;
  };

  const onResponseSuccess = response => {
    if (!response.config?.params?.isHideLoading) {
      actions.hideLoading();
    }
    return response;
  };
  const onResponseError = err => {
    const status = err.status || (err.response ? err.response.status : 0);
    if (status === 403 || status === 401) {
      // actions.clearAuthentication('login.error.unauthorized');
    }
    if (!err.request?.config?.params?.isHideLoading) {
      actions.hideLoading();
    }
    return Promise.reject(err);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
