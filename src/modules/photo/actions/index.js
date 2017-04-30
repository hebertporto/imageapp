import { HELLO, CONFIRM_SAVE_PHOTO } from './types';
import { gallery } from './../../../models/Gallery';

export function sayHello() {
  return (dispatch) => {
    const msg = { hello: 'Eu vim da Action' };
    dispatch(hello(msg));
  };
}

export function savePhoto({ url }) {
  return async (dispatch) => {
    const name = 'Web';
    const date = '02/06/2017';

    await gallery.write(() => {
      gallery.create('Galeria', { name, date, url });
    });

    const photo = await Array.from(gallery.objects('Galeria'));
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
