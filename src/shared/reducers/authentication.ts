import axios from 'axios';

import { FAILURE, REQUEST, SUCCESS } from './../../shared/reducers/action-type.util';

export const ACTION_TYPES = {
  LOGIN: 'authentication/LOGIN',
  GET_SESSION: 'authentication/GET_SESSION',
  LOGOUT: 'authentication/LOGOUT',
  CLEAR_AUTH: 'authentication/CLEAR_AUTH',
  ERROR_MESSAGE: 'authentication/ERROR_MESSAGE',
};

const initialState = {
  loading: false,
  isLoginFailed: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false, // Errors returned from server side
  showModalLogin: false,
  account: {} as any,
  errorMessage: (null as unknown) as string, // Errors returned from server side
  redirectMessage: (null as unknown) as string,
  sessionHasBeenFetched: false,
  idToken: (null as unknown) as string,
  logoutUrl: (null as unknown) as string,
};

export type AuthenticationState = Readonly<typeof initialState>;

// Reducer

export default (state: AuthenticationState = initialState, action): AuthenticationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.LOGIN):
    case REQUEST(ACTION_TYPES.GET_SESSION):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.LOGIN):
      return {
        ...initialState,
        errorMessage: action.payload,
        showModalLogin: true,
        loginError: true,
      };
    case FAILURE(ACTION_TYPES.GET_SESSION):
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        sessionHasBeenFetched: true,
        showModalLogin: true,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.LOGIN):
      return {
        ...state,
        isLoginFailed: !action.payload.data,  // 로그인 실패 여부 (로그인 시 API 에서 응답 true|false)
        loading: false,
        loginError: false,
        showModalLogin: false,
        loginSuccess: true,
      };
    case SUCCESS(ACTION_TYPES.LOGOUT):
      return {
        ...initialState,
        showModalLogin: true,
      };
    case SUCCESS(ACTION_TYPES.GET_SESSION): {
      const userData = action.payload.data.data;
      const isAuthenticated = !!userData.length && userData[0].USER_ID;
      return {
        ...state,
        isAuthenticated,
        loading: false,
        sessionHasBeenFetched: true,
        account: userData.length ? userData[0] : null,
      };
    }
    case ACTION_TYPES.ERROR_MESSAGE:
      return {
        ...initialState,
        showModalLogin: true,
        redirectMessage: action.message,
      };
    case ACTION_TYPES.CLEAR_AUTH:
      return {
        ...state,
        loading: false,
        showModalLogin: true,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const displayAuthError = message => ({ type: ACTION_TYPES.ERROR_MESSAGE, message });

export const getSession: () => void = () => async (dispatch, getState) => {
  const data = 'id=admin';
  await dispatch({
    type: ACTION_TYPES.GET_SESSION,
    payload: axios.get('/getLogin_userInfo?' + data),
  });

  // const { account } = getState().authentication;
  // if (account && account.langKey) {
  //   const langKey = Storage.session.get('locale', account.langKey);
  //   await dispatch(setLocale(langKey));
  // }
};

export const login: (username: string, password: string, rememberMe?: boolean) => void = (username, password, rememberMe = false) => async (
  dispatch,
  getState
) => {
  // const data = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&remember-me=${rememberMe}&submit=Login`;
  const data = `id=${encodeURIComponent(username)}&pass=${encodeURIComponent(password)}`;
  await dispatch({
    type: ACTION_TYPES.LOGIN,
    // payload: axios.post('getLogin', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }),
    payload: axios.get('getLogin?' + data),
  });
  await dispatch(getSession());

};

export const logout: () => void = () => async dispatch => {
  await dispatch({
    type: ACTION_TYPES.LOGOUT,
    payload: axios.get('getLogout'),
  });

  // fetch new csrf token
  dispatch(getSession());
};

export const clearAuthentication = messageKey => (dispatch, getState) => {
  dispatch(displayAuthError(messageKey));
  dispatch({
    type: ACTION_TYPES.CLEAR_AUTH,
  });
};
