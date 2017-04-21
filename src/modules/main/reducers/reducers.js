export function getHello(state, action) {
  return { ...state, ...{ msg: action.payload } };
}