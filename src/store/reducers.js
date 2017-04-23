import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import main from '../modules/main/reducers/index';
import photo from '../modules/photo/reducers/index';

export default combineReducers({
  main,
  photo,
  navigation: NavigationReducer
});

