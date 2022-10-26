import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../store';

// import from here
import {
  HomeView,
  LoginView,
  LayoutView,
  ArticleDetailsView
} from 'src/screens';

import {LogoutItem, BackButton} from 'src/sharedComponents';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
    return <EnhancedComponent />;
  };
}

export default function () {
  // add all screens below

  Navigation.registerComponent('Login', () => WrappedComponent(LoginView));
  Navigation.registerComponent('Home', () => WrappedComponent(HomeView));
  Navigation.registerComponent('LayoutView', () => WrappedComponent(LayoutView));
  Navigation.registerComponent('LogoutItem', () => WrappedComponent(LogoutItem));
  Navigation.registerComponent('BackButton', () => WrappedComponent(BackButton));
  Navigation.registerComponent('ArticleDetailsView', () => WrappedComponent(ArticleDetailsView));

  console.info('All screens have been registered...');
}
