import {
  HOME_STATUS_CHANGE,
} from './types';

const INITAL_STATE = {
  loading: false,
  data: [],
  page: 0,
  searchText: '',
  footerLoader: false,
  page: 0
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case HOME_STATUS_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
