export function getHello(state, action) {
  return { ...state, ...{ msg: action.payload } };
}

export function savePhoto(state, action) {
  return { ...state, ...{ photos: action.payload } };
}
