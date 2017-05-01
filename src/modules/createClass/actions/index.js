import { HELLO } from './types';


export function sayHello() {
  return (dispatch) => {
    const msg = { hello: 'Eu vim da Action Class' };
    dispatch(hello(msg));
  };
}

export function hello(payload) {
  return {
    type: HELLO,
    payload
  };
}
