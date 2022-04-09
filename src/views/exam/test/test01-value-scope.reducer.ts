import moment from 'moment';
import axios from 'axios';
import { FAILURE, SUCCESS } from '../../../shared/reducers/action-type.util';

export const ACTION_TYPES = {
  TEST: 'exam/test/test01/TEST',
};

const initialState = {
  testValue: 0
};

export type Test01State = Readonly<typeof initialState>;

// Reducer
export default (state: Test01State = initialState, action): Test01State => {
  switch (action.type) {
    case ACTION_TYPES.TEST:
    case ACTION_TYPES.TEST:
      console.log('action: ', action);
      return {
        ...state,
        testValue: action.payload
      }
    default:
      return state;
  }
}

// Action
export const test01Redux: () => void = () => async (dispatch) => {
  console.log('test01Redux');
  await dispatch({
    type: ACTION_TYPES.TEST,
    // payload: axios.get('/getLogin_userInfo?id=admin')
    payload: moment().format('ss')
  });
}
