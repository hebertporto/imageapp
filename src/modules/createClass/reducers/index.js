import * as types from '../actions/types';
import * as main from './reducers';

const initialState = {
  msg: '',
  cursosCadastrados: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.HELLO:
      return main.getHello(state, action);
    case types.FETCH_CURSOS_CADASTRADOS:
      return main.fetchCursosCadastrados(state, action);
    default:
      return state;
  }
}

