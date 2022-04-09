import axios from 'axios';

import { FAILURE, REQUEST, SUCCESS } from '../../../shared/reducers/action-type.util';
import { IUser } from '../../../shared/model/user.model';
import { IUserUpdate } from '../../../shared/model/user-update.model';

export const ACTION_TYPES = {
  GET_SETTING_USER_LIST: 'settings/user/GET_SETTING_USER_LIST',
  SET_SETTING_USER_ADD: 'settings/user/SET_SETTING_USER_ADD',
  SET_SETTING_USER_UPDATE: 'settings/user/SET_SETTING_USER_UPDATE',
  SET_SETTING_USER_DEL: 'settings/user/SET_SETTING_USER_DEL',
  GET_SETTING_USER_UPDATE_LIST: 'settings/user/GET_SETTING_USER_UPDATE_LIST',
};

const initialState = {
  loading: false,
  errorMessage: null,
  userList: [] as ReadonlyArray<IUser>,
  userListTotalCount: 0,
  userUpdateList: [] as ReadonlyArray<IUserUpdate>,
  userUpdateListTotalCount: 0,
};

export type UserState = Readonly<typeof initialState>;

// Reducer
const user = (state: UserState = initialState, action): UserState => {

  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_SETTING_USER_LIST):
    case REQUEST(ACTION_TYPES.GET_SETTING_USER_UPDATE_LIST):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_SETTING_USER_LIST):
    case FAILURE(ACTION_TYPES.GET_SETTING_USER_UPDATE_LIST):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      }
    case SUCCESS(ACTION_TYPES.GET_SETTING_USER_LIST):
      return {
        ...state,
        loading: false,
        errorMessage: null,
        userList: action.payload.data.Records,
        userListTotalCount: action.payload.data.TotalCount,
      }
    case SUCCESS(ACTION_TYPES.GET_SETTING_USER_UPDATE_LIST):
      return {
        ...state,
        loading: false,
        errorMessage: null,
        userUpdateList: action.payload.data.Records,
        userUpdateListTotalCount: action.payload.data.TotalCount,
      }
    default:
      return state;
  }
}

export default user;

// Action
// 사용자 정보관리 - 사용자 현황 - 리스트
export const getSettingUserList: (page, top) => void = (page, top) => async (dispatch) => {
  const skipItem = (page - 1) * top;
  await dispatch({
    type: ACTION_TYPES.GET_SETTING_USER_LIST,
    payload: axios.get(`GetSetting_UserList?skip=${skipItem}&top=${top}`)
  })
}
// 사용자 정보관리 - 사용자 현황 - 추가
export const setSettingUserAdd: (userId, pass, userNm, org, phone, authLevel) =>
  void = (userId, pass, userNm, org, phone, authLevel) => async (dispatch) => {
  await dispatch({
    type: ACTION_TYPES.SET_SETTING_USER_ADD,
    payload: axios.get(`SetSetting_UserAdd?`+
      `userId=${userId}&pass=${pass}&userNm=${userNm}`+
      `&org=${org}&phone=${phone}&authLevel=${authLevel}`)
  })
}
// 사용자 정보관리 - 사용자 현황 - 수정
export const setSettingUserUpdate: (userId, pass, userNm, org, phone, authLevel) =>
  void = (userId, pass, userNm, org, phone, authLevel) => async (dispatch) => {
  await dispatch({
    type: ACTION_TYPES.SET_SETTING_USER_UPDATE,
    payload: axios.get(`SetSetting_UserUpdate?`+
      `userId=${userId}&pass=${pass}&userNm=${userNm}`+
      `&org=${org}&phone=${phone}&authLevel=${authLevel}`)
  })
}
// 사용자 정보관리 - 사용자 현황 - 삭제
export const setSettingUserDel: (userId) => void = (userId) => async (dispatch) => {
  await dispatch({
    type: ACTION_TYPES.SET_SETTING_USER_DEL,
    payload: axios.get(`SetSetting_UserDel?userId=${userId}`)
  })
}
// 사용자 정보관리 - 사용자 수정 이력
export const getSettingUserUpdateList: (page, top) => void = (page, top) => async (dispatch) => {
  const skipItem = (page - 1) * top;
  await dispatch({
    type: ACTION_TYPES.GET_SETTING_USER_UPDATE_LIST,
    payload: axios.get(`GetSetting_UserUpdateList?skip=${skipItem}&top=${top}`)
  })
}






