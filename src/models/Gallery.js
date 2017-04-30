import Realm from 'realm';

export const gallery = new Realm({
  schema: [
    { name: 'Galeria',
      properties: {
        name: 'string',
        date: 'string',
        url: 'string'
      } }
  ]
});
