import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import HomeReducer from 'src/screens/HomeView/reducer';
import LoginReducer from 'src/screens/LoginView/reducer';


const Reducers = combineReducers({
  // write all the reduceres here
  homeReducer: HomeReducer,
  loginReducer: LoginReducer,
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const Store = createStoreWithMiddleware(Reducers);

export default Store;
