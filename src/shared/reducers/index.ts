import { combineReducers } from 'redux';
import test01, { Test01State } from '../../views/exam/test/test01-value-scope.reducer';
import authentication, { AuthenticationState } from './authentication';
import isLoading, { AxiosRequestState } from './axios';
import user, { UserState } from '../../views/settings/user/user.reducer';
import api,{ APIState } from './api'

export interface IRootState {
  // readonly authentication: AuthenticationState;
  readonly isLoading: AxiosRequestState;
  readonly user: UserState;
  readonly api: APIState;
  readonly test01: Test01State;
}

const rootReducer = combineReducers<IRootState>({
  // authentication,
  isLoading,
  user,
  api,
  test01,
});

export default rootReducer;
