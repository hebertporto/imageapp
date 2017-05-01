import { HELLO, SAVE_CLASS } from './types';


export function sayHello() {
  return (dispatch) => {
    const msg = { hello: 'Eu vim da Action Class' };
    dispatch(hello(msg));
  };
}

export function saveClass({horaInicio, horaFim, diaSemana, nome}) {
  return (dispatch) => {
    const msg = { hello: 'Eu vim da Action Class' };
    dispatch(save(msg));
  };
}

export function hello(payload) {
  return {
    type: HELLO,
    payload
  };
}

export function save(payload) {
  return {
    type: SAVE_CLASS,
    payload
  };
}
