export const initialState = {
  'doves': [],
  'formToggle': false
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOVES':
      return reduceSetDoves(state, action);
    default:
      return state;
  }
}

const reduceSetDoves = (state, action) => {
  debugger;
  return Object.assign({}, state, { 'doves': action.value });
}
