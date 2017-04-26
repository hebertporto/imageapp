import Realm from 'realm';
import { HELLO, CONFIRM_SAVE_PHOTO } from './types';

export function sayHello() {
  return (dispatch) => {
    const msg = { hello: 'Eu vim da Action' };
    dispatch(hello(msg));
  };
}

export function savePhoto({ url }) {
  return async (dispatch) => {
    const realm = new Realm({
      schema: [
        { name: 'Galeria',
          properties: {
            url: 'string'
          } }
      ]
    });

    await realm.write(() => {
      realm.create('Galeria', { url });
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
