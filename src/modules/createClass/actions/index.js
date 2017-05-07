import { HELLO, SAVE_CLASS } from './types';
import { cursos } from './../../../models/Models';


export function sayHello() {
  return (dispatch) => {
    const msg = { hello: 'Eu vim da Action Class' };
    dispatch(hello(msg));
  };
}

export function saveClass({ horaInicio, horaFim, diaSemana, nome }) {
  return async (dispatch) => {
    const cursos = await cursos.objects('Cursos').filtered(`dia = "${diaSemana}"`);
    let disponibilidade = true;
    const msg = { hello: 'Eu vim da Action Class' };
    await cursos.forEach((item) => {
      const hours = item.horario.split('-');
      if (parseInt(horaInicio, 10) >= parseInt(hours[0], 10) && parseInt(horaInicio, 10) <= parseInt(hours[1], 10)) {
        disponibilidade = false;
      }
      if (parseInt(horaFim, 10) >= parseInt(hours[0], 10) && parseInt(horaFim, 10) <= parseInt(hours[1], 10)) {
        disponibilidade = false;
      }
    });

    if (disponibilidade) {
      console.log(' * horario adicionado *');
    } else {
      console.log(' * horario ocupado *');
    }

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
