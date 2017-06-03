import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import main from '../modules/main/reducers/index';
import photo from '../modules/photo/reducers/index';
import gallery from '../modules/gallery/reducers/index';
import createClass from '../modules/createClass/reducers/index';

export default combineReducers({
  main,
  photo,
  gallery,
  createClass,
  navigation: NavigationReducer
});
