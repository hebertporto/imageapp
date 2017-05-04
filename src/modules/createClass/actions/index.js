import { HELLO, SAVE_CLASS } from './types';
import { gallery } from './../../../models/Gallery';


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

export function getCursos(dia) {  
  // let cursos = await gallery.objects('Galeria');
  // let cursos = realm.objects('Galeria').filtered(`make = "${dia}"`);
  // let tanDogs = dogs.filtered('color = "tan" AND name BEGINSWITH "B"');
}
