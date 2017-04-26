import Realm from 'realm';
import { HELLO } from './types';

const realm = new Realm({
      schema: [
        { name: 'Galeria',
          properties: {
            url: 'string'
          } }
      ]
    });

export function sayHello() {
  return async (dispatch) => {
    const photo = await Array.from(realm.objects('Galeria'));
    const msg = { hello: photo[0].url };
    console.log('msg action gallery', msg);
    dispatch(hello(msg));
  };
}

export function hello(payload) {
  return {
    type: HELLO,
    payload
  };
}
