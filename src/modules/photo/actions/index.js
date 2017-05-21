import { HELLO, CONFIRM_SAVE_PHOTO } from './types';
import { realm } from './../../../models/Models';

export function sayHello() {
  return (dispatch) => {
    const msg = { hello: 'Eu vim da Action' };
    dispatch(hello(msg));
  };
}

export function savePhoto({ url }) {
  return async (dispatch) => {
    const date = new Date();
    const diaSemana = date.getDay();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const dateFoto = `${date.getDay()}/${date.getMonth()}/${date.getYear()}`;
    const horaFoto = `${hour}${minutes}`;
    let name = 'Categoria Geral';
    let foundCurso = false;

    const cursos = await realm.objects('Cursos').filtered(`dia = "${diaSemana}"`);

    cursos.forEach((item) => {
      const hours = item.horario.split('-');
      if (parseInt(horaFoto, 10) >= parseInt(hours[0], 10) && parseInt(horaFoto, 10) <= parseInt(hours[1], 10)) {
        foundCurso = true;
        name = item.name;
      }
    });

    if (foundCurso) {
      await realm.write(() => {
        realm.create('Galeria', { name, dateFoto, url });
      });
    } else {
      await realm.write(() => {
        realm.create('Galeria', { name, dateFoto, url });
      });
    }

    const photo = await Array.from(realm.objects('Galeria'));
    console.log('resultado de photo', photo);
    dispatch(responseSavePhoto(photo));
  };
}

export function hello(payload) {
  return {
    type: HELLO,
    payload
  };
}

export function responseSavePhoto(payload) {
  return {
    type: CONFIRM_SAVE_PHOTO,
    payload
  };
}
