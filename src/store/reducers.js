import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import main from '../modules/main/reducers/index';

export default combineReducers({
  main,
  navigation: NavigationReducer
});

