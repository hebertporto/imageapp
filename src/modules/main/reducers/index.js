import * as types from '../actions/types';
import * as main from './reducers';

const initialState = {
  msg: ""
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.HELLO:
      return main.getHello(state, action);
    default:
      return state;
  }
}

