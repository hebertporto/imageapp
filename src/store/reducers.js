import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import main from '../modules/main/reducers/index';
import photo from '../modules/photo/reducers/index';
import gallery from '../modules/gallery/reducers/index';

export default combineReducers({
  main,
  photo,
  gallery,
  navigation: NavigationReducer
});

