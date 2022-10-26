import axios from 'axios';
import realm from 'src/models';
import store from 'src/store';
import {Navigation} from 'react-native-navigation';

// Add a request interceptor
axios.interceptors.request.use(
  async config => {
    config.baseURL = 'http://34.245.213.76:3000';

    // adding the token if the user exists in the local database
    const user = realm.objects('User');

    if (user.length > 0) {
      config.headers['accessToken'] = user[0].token;
      config.headers['Authorization'] = `Bearer ${user[0].token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return {...response};
  },
  function (error) {
    const originalRequest = error.config;

    Navigation.showOverlay({
      component: {
        name: 'LayoutView',
        passProps: {
          visible: true,
          type: error.response.data.statusCode,
          title: error.response.data.message
        },
        options: {
          layout: {
            componentBackgroundColor: 'transparent',
          },
          overlay: {
            interceptTouchOutside: false,
          },
        },
      },
    });


    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      console.log('trying to refresh token');

      const user = realm.objects('User');
      if (user.length > 0) {
        return axios
          .post('/v1/refresh_token', null, {
            headers: {
              Authorization: `Bearer ${user[0].refresh_token}`,
            },
          })
          .then(response => {
            realm.write(() => {
              let user = realm.objects('User')[0];
              user.token = response.data.token;
              user.refreshToken = response.data.refresh_token;
            });
            console.log('continue, request', originalRequest.url);
            return axios(originalRequest);
          });
      }
    }

    return Promise.reject(error);
  },
);

export default axios;
