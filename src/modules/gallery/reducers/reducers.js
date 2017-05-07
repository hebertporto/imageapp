export function fetchCursos(state, action) {
  return { ...state, ...{ cursosList: action.payload } };
}
