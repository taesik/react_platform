import axios from 'axios';

import { FAILURE, REQUEST, SUCCESS } from './../../shared/reducers/action-type.util';
import { INews, RcmdKwdJsonType } from '../model/news.model';
import { data } from 'jquery';


export enum ACTION_TYPES {
  GET_KEYWORD_NEWSLIST = "get_keyword_news_list",
  GET_RCMD_KEYWORD= 'get_rcmd_keyword',
  GET_USER_KEYWORD= 'get_user_keyword',
  GET_RELATION_NEWSLIST = 'get_relation_news_list',
  GET_SEARCH_PLACEHOLDER = 'get_search_placeholder',
  SET_USER_INFO = 'set_user_info',
  GET_USER_INFO = 'get_user_info',
};



const initialState = {
  loading: false,
  showModalLogin: false,
  errorMessage: (null as unknown) as string, // Errors returned from server side
  newsList: [] as ReadonlyArray<INews>,
  rcmdKeywords: {} as Readonly<RcmdKwdJsonType>,
  searchPlaceholder: "" as string,
  myKeywords: [""],
  isGetLoginType : false,
  userInfo:"" as string,
};

export type APIState = Readonly<typeof initialState>;

// Reducer
export default (state: APIState = initialState, action): APIState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_KEYWORD_NEWSLIST):
    case REQUEST(ACTION_TYPES.GET_RCMD_KEYWORD):
    case REQUEST(ACTION_TYPES.GET_USER_KEYWORD):
    case REQUEST(ACTION_TYPES.GET_RELATION_NEWSLIST):
    case REQUEST(ACTION_TYPES.SET_USER_INFO):
    case REQUEST(ACTION_TYPES.GET_USER_INFO):
    case REQUEST(ACTION_TYPES.GET_SEARCH_PLACEHOLDER):
      return {
        ...state,
        isGetLoginType: true,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_KEYWORD_NEWSLIST):
    case FAILURE(ACTION_TYPES.GET_RCMD_KEYWORD):
    case FAILURE(ACTION_TYPES.GET_USER_KEYWORD):
    case FAILURE(ACTION_TYPES.GET_RELATION_NEWSLIST):
    case FAILURE(ACTION_TYPES.SET_USER_INFO):
    case FAILURE(ACTION_TYPES.GET_USER_INFO):
    case FAILURE(ACTION_TYPES.GET_SEARCH_PLACEHOLDER):
      return {
        ...state,
        loading: false,
        isGetLoginType : true,
        errorMessage: action.payload,
      }
    case SUCCESS(ACTION_TYPES.GET_KEYWORD_NEWSLIST):
      return {
        ...state,
        loading: false,
				newsList: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.GET_USER_KEYWORD):
      return {
        ...state,
        loading: false,
        myKeywords: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.GET_RCMD_KEYWORD):
      return {
        ...state,
        loading: false,
        rcmdKeywords: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_RELATION_NEWSLIST):
      return {
        ...state,
        loading: false
      };
    case SUCCESS(ACTION_TYPES.SET_USER_INFO):
      return {
        ...state,
        loading: false
      };
    case SUCCESS(ACTION_TYPES.GET_SEARCH_PLACEHOLDER):
      return {
        ...state,
        loading: false,
        searchPlaceholder: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_USER_INFO):
      return {
        ...state,
        loading: false,
        userInfo: action.payload.data
      };

    default:
      return state;
  }
};


export const getKeywordNewsList: (keywords:string[]) => void = (keywords:string[]) => async (dispatch, getState) => {

	let keyParam = '';
  keywords.map(keyword => {
    keyParam = keyParam + ('entities='+keyword+'&')
  });

	const requestUrl = `/documents/?${keyParam}skip=0&limit=200`;

  await dispatch({
    type: ACTION_TYPES.GET_KEYWORD_NEWSLIST,
    payload: axios.post(requestUrl,data({searchKeyword:keywords}))
  });
};

export const _getKeywordNewsList: (keywords:string[]) => void = (keywords:string[]) => async (dispatch, getState) => {

  const requestUrl = `/getKeywordNewsList`;
  await dispatch({
    type: ACTION_TYPES.GET_KEYWORD_NEWSLIST,
    payload: axios.post(requestUrl,data({ searchKeyword:keywords }))
  });
};


export const getSearchPlaceholder:  () => void = () => async (dispatch, getState) => {

  await dispatch({
    type: ACTION_TYPES.GET_SEARCH_PLACEHOLDER,
    payload: axios.post(`/getSearchPlaceholder`)
  });
};

export const getRcmdKeyword: () => void =  () => async (dispatch, getState) => {

  await dispatch({
    type: ACTION_TYPES.GET_RCMD_KEYWORD,
    payload: axios.post(`/keyword/getRecommendKeywordList`)
  });
};

export const getUserKeyword: () => void =  () => async (dispatch, getState) => {

  await dispatch({
    type: ACTION_TYPES.GET_USER_KEYWORD,
    payload: axios.post(`/keyword/getUserKeyword`)
  });
};

export const getRelationNewsList: () => void = () => async (dispatch, getState) => {
  const data = 'id=admin';
  await dispatch({
    type: ACTION_TYPES.GET_KEYWORD_NEWSLIST,
    payload: axios.get('/getRelationNewsList?'),
  });
};

export const getUserInfo:  () => void = () => async (dispatch, getState) => {
  await dispatch({
    type: ACTION_TYPES.GET_KEYWORD_NEWSLIST,
    payload: axios.post(`/login/setUserInfo`)
  });
};

export const setUserInfo:  (userNum:string) => void = (userNum:string) => async (dispatch, getState) => {
  let user = { id:userNum};
  await dispatch({
    type: ACTION_TYPES.GET_KEYWORD_NEWSLIST,
    payload: axios.post(`/login/setUserInfo?id=${userNum}`)
  });
};

