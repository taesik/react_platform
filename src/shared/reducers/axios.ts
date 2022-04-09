
export const ACTION_TYPES = {
  AXIOS_REQUEST: 'axios/AXIOS_REQUEST',
  AXIOS_RESPONSE: 'axios/AXIOS_RESPONSE',
}
const initRemainAxiosRequest = {
  remainAxiosRequest: 0,
}
export type AxiosRequestState = Readonly<typeof initRemainAxiosRequest>;

// Reducer
export default (state: AxiosRequestState = initRemainAxiosRequest, action): AxiosRequestState => {
  let remainCount;
  switch (action.type) {
    case ACTION_TYPES.AXIOS_REQUEST:
      remainCount = state.remainAxiosRequest + 1;
      return {
        ...state,
        remainAxiosRequest: remainCount
      };
    case ACTION_TYPES.AXIOS_RESPONSE:
      remainCount = state.remainAxiosRequest - 1;
      return {
        ...state,
        remainAxiosRequest: (remainCount < 0) ? 0 : remainCount
      }
    default:
      return state;
  }
}

export const showLoading = () => async (dispatch) => {
  await dispatch({
    type: ACTION_TYPES.AXIOS_REQUEST
  })
}
export const hideLoading = () => async (dispatch) => {
  await dispatch({
    type: ACTION_TYPES.AXIOS_RESPONSE
  })
}

