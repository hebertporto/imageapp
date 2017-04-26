import * as types from '../actions/types';
import * as main from './reducers';

const initialState = {
  msg: '',
  photos: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.HELLO:
      return main.getHello(state, action);
    case types.CONFIRM_SAVE_PHOTO:
      return main.savePhoto(state, action);
    default:
      return state;
  }
}

