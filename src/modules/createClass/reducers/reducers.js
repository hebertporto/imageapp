export function getHello(state, action) {
  return { ...state, ...{ msg: action.payload } };
}

export function fetchCursosCadastrados(state, action) {
  return { ...state, ...{ cursosCadastrados: action.payload } };
}
