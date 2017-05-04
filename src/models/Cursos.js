import Realm from 'realm';

export const gallery = new Realm({
  schema: [
    { name: 'Cursos',
      properties: {
        name: 'string',
        dia: 'string',
        horario: 'string'
      } }
  ]
});
