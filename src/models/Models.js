import Realm from 'realm';

const GellerySchema = {
  name: 'Galeria',
  properties: {
    name: 'string',
    date: 'string',
    url: 'string'
  }
};

const CursoSchema = {
  name: 'Cursos',
  properties: {
    name: 'string',
    dia: 'string',
    horario: 'string'
  }
};

export const realm = new Realm({ schema: [CursoSchema, GellerySchema] });
