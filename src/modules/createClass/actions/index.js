import { HELLO, SAVE_CLASS } from './types';
import { realm } from './../../../models/Models';


export function sayHello() {
  return (dispatch) => {
    const msg = { hello: 'Eu vim da Action Class' };
    dispatch(hello(msg));
  };
}

export function saveClass({ horaInicio, horaFim, diaSemana, nomeAula }) {
  console.log(horaFim, horaInicio, diaSemana, nomeAula);
  return async (dispatch) => {
    const horario = `${horaInicio}-${horaFim}`;
    const cursos = await realm.objects('Cursos').filtered(`dia = "${diaSemana}"`);
    let disponibilidade = true;

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
      realm.write(() => {
        realm.create('Cursos', { name: nomeAula, dia: diaSemana, horario });
      });
      alert(' * cadastrado *');
    } else {
      alert(' * horario ocupado *');
    }

    dispatch(save({ status: 'curso' }));
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
