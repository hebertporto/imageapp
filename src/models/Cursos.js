import Realm from 'realm';

export const cursos = new Realm({
  schema: [
    { name: 'Cursos',
      properties: {
        name: 'string',
        dia: 'string',
        horario: 'string'
      } }
  ]
});
