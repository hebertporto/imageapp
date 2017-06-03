import _ from 'lodash';
import { HELLO, SAVE_CLASS, FETCH_CURSOS_CADASTRADOS } from './types';
import { realm } from './../../../models/Models';


export function sayHello() {
  return (dispatch) => {
    const msg = { hello: 'Eu vim da Action Class' };
    dispatch(hello(msg));
  };
}
export function fetchHorariosCadastrados() {
  return async (dispatch) => {
    const cursos = await Array.from(realm.objects('Cursos'));
    const cursosAgrupadosPorDiaDaSemana = await _.groupBy(cursos, 'dia');
    dispatch(sendFetchCursos(cursosAgrupadosPorDiaDaSemana));
  };
}

export function saveClass({ horaInicio, horaFim, diaSemana, nomeAula }) {
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

export function sendFetchCursos(payload) {
  return {
    type: FETCH_CURSOS_CADASTRADOS,
    payload
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
