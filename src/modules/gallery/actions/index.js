import _ from 'lodash';
import { HELLO } from './types';
import { realm } from './../../../models/Models';

export function sayHello() {
  return async (dispatch) => {
    const photo = await Array.from(realm.objects('Galeria'));
    const ok = await _.groupBy(photo, 'date');
    console.log('query original', photo);
    console.log('query group by', ok);
    dispatch(hello(ok));
  };
}

export function hello(payload) {
  return {
    type: HELLO,
    payload
  };
}
