import * as types from '../actions/types';
import * as reducers from './reducers';

const initialState = {
  cursosList: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LIST_AULAS_REGISTRADAS:
      return reducers.fetchCursos(state, action);
    default:
      return state;
  }
}

