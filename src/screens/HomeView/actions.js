import {
  HOME_STATUS_CHANGE,
} from './types';
import {Platform} from 'react-native';
import axios from 'src/axiosConfig';
import realm from 'src/models';

import { Navigation } from 'react-native-navigation';

import {loginRoot} from 'src/navigation/navigationStructures';

// Function to change the states in the reducer
export const homeChangeValue = object => {
  return async dispatch => {
    dispatch({
      type: HOME_STATUS_CHANGE,
      payload: object,
    });
  };
};

export const loadData = (page) => {
  return async dispatch => {

    dispatch({
      type: HOME_STATUS_CHANGE,
      payload: {
        loading: true
      },
    });
    
    try {
      const res = await axios.get(`/articles?page=${page}`)

      dispatch({
        type: HOME_STATUS_CHANGE,
        payload: {
          loading: false,
          data: res.data.response.docs
        },
      });
    } catch (e) {
      console.log('Error in loading articles', e);
      dispatch({
        type: HOME_STATUS_CHANGE,
        payload: {
          loading: false,
        },
      });
    }
  };
};

export const loadMoreData = (data, page) => {
  return async dispatch => {

    dispatch({
      type: HOME_STATUS_CHANGE,
      payload: {
        footerLoader: true
      },
    });
    
    try {

      let array = [];

      const res = await axios.get(`/articles?page=${page}`)

      console.log('res', res.data.response.docs)

      for (let i in data) {
        const row = data[i];
        array.push(row)

        for (let j in res.data.response.docs) {
          const newRow = res.data.response.docs[j]
          array.push(newRow)
        }
      }      

      dispatch({
        type: HOME_STATUS_CHANGE,
        payload: {
          footerLoader: false,
          data: array
        },
      });
    } catch (e) {
      console.log('Error in loading articles', e);
      dispatch({
        type: HOME_STATUS_CHANGE,
        payload: {
          footerLoader: false,
        },
      });
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      const user = realm.objects('User');

      // clean realm
      await realm.write(() => {
        const user = realm.objects('User');
        realm.delete(user);
      });

      Navigation.setRoot(loginRoot)

    } catch (e) {
      console.log('Error in logging out', e);
    }
  }
}

export const search = (text, data) => {
  return async dispatch => {
    dispatch({
      type: HOME_STATUS_CHANGE,
      payload: {
        loading: false
      },
    });

    try {
      let searchArray = [];

      console.log('text', text)

      for (let i in data) {
        const row = data[i];

        if (row.headline.main.includes(text)) {
          searchArray.push(row)
        }

        if (row.abstract.includes(text)) {
          searchArray.push(row)
        }
      }

      dispatch({
        type: HOME_STATUS_CHANGE,
        payload: {
          loading: false,
          data: searchArray
        },
      });

    } catch (e) {
      console.log('Error in searching for the data', e);
      dispatch({
        type: HOME_STATUS_CHANGE,
        payload: {
          loading: false
        },
      });
    }
  }
}
