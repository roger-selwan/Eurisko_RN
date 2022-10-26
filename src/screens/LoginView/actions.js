import {LOGIN_DATA_UPDATE} from './types';
import axios from 'src/axiosConfig';
import realm from 'src/models';

import {Navigation} from 'react-native-navigation';
import {mainRoot} from 'src/navigation/navigationStructures';

// Function to change the states in the reducer
export const loginChangeValue = object => {
  return async dispatch => {
    dispatch({
      type: LOGIN_DATA_UPDATE,
      payload: object,
    });
  };
};

// Function to generate a uuid
export const getUuid = () => {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    },
  );
  return uuid;
};

// Function to login
export const login = (username, password) => {
  return async dispatch => {
    dispatch({
      type: LOGIN_DATA_UPDATE,
      payload: {
        loading: true,
      },
    });
    try {
      // gathering the parameters as data
      let data = {
        username: username,
        password: password,
      };

      // Get the uuid
      const uuid = await getUuid();

      // Calling the api
      const res = await axios.post('/auth/signin', data);

      // Saving the new user to the local db so in case he closes the app and reopen it, he will not go through the login process and directly redirected to the home page
      await realm.write(() => {
        realm.create(
          'User',
          {
            id: uuid, // since we arent getting any id from the payload
            token: res.data.accessToken,
          },
          true,
        );
      });

      Navigation.setRoot(mainRoot);

      dispatch({
        type: LOGIN_DATA_UPDATE,
        payload: {
          loading: false,
        },
      });

      const user = realm.objects('User')[0];
      console.log('-----', user);
    } catch (e) {
      console.log('Error in logging in', e);

      dispatch({
        type: LOGIN_DATA_UPDATE,
        payload: {
          loading: false,
        },
      });
    }
  };
};
