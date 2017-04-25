import { HELLO } from './types';
import Realm from 'realm';

export function sayHello() {
  return async (dispatch) => {
    let realm = new Realm({
       schema: [{name: 'Dog', properties: {name: 'string'}}]
     });

    //  await realm.write(() => {
    //    realm.create('Dog', {name: 'Rex'});
    //  });
    //  await realm.write(() => {
    //    realm.create('Dog', {name: 'Bídu'});
    //  });

    let dogs = await Array.from(realm.objects('Dog'));
    console.log('dogs', dogs);
    const msg = { hello: 'Eu vim da Action' };
    dispatch(hello(dogs));
  };
}

export function hello(payload) {
  return {
    type: HELLO,
    payload
  };
}
