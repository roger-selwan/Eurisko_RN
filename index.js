/**
 * @format
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import RegisterScreens from 'src/navigation/registerScreens';
import {loginRoot, mainRoot} from 'src/navigation/navigationStructures';

import realm from 'src/models';

Navigation.setDefaultOptions({
  statusBar: {
    drawBehind: true,
  },
  bottomTabs: {
    backgroundColor: 'white',
  },
  bottomTab: {
    fontSize: 10,
    selectedFontSize: 10,
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  // before anything else we need to register all the screens
  RegisterScreens();

  //the user didnt opened the app throught deepl link
  Navigation.setRoot(!isLoggedIn() ? loginRoot : mainRoot);
});

/*
  defining the logic of log in
  reading the following link: https://wix.github.io/react-native-navigation/docs/advanced-navigation
*/
function isLoggedIn() {
  // check if the user record is saved in realm
  const user = realm.objects('User');
  return user.length > 0;
}
