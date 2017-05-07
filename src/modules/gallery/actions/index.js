import _ from 'lodash';
import { LIST_AULAS_REGISTRADAS } from './types';
import { realm } from './../../../models/Models';

export function fecthCursos() {
  return async (dispatch) => {
    const cursos = await Array.from(realm.objects('Cursos'));
  //  const ok = await _.groupBy(cursos, 'date');
    console.log('query original', cursos);

    dispatch(sendCursos(cursos));
  };
}

export function sendCursos(payload) {
  return {
    type: LIST_AULAS_REGISTRADAS,
    payload
  };
}
