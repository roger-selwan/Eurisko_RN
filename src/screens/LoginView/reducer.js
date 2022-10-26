import {
  LOGIN_DATA_UPDATE
} from './types';

const INITAL_STATE = {
  loading: false,
  username: '',
  password: ''
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
