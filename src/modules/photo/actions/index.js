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
    const dateFoto = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    const horaFoto = `${hour}${minutes}`;
    let name = 'Categoria Geral';
    console.log('data cadastrada', dateFoto);
    console.log('dia Semana', diaSemana);

    const cursos = await Array.from(realm.objects('Cursos').filtered(`dia = "${diaSemana}"`));
    const todosCursos = await Array.from(realm.objects('Cursos'));
    console.log('cursos', cursos);
    console.log('todos os cursos', todosCursos);
    cursos.forEach((item) => {
      const hours = item.horario.split('-');
      console.log('hora incial', parseInt(hours[0], 10), 'hora final', parseInt(hours[1], 10), 'hora Foto', parseInt(horaFoto, 10));
      if (parseInt(horaFoto, 10) >= parseInt(hours[0], 10) && parseInt(horaFoto, 10) <= parseInt(hours[1], 10)) {
        name = item.name;
      }
    });

    await realm.write(() => {
      realm.create('Galeria', { name, date: dateFoto, url });
    });


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
