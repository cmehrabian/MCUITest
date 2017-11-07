export const initialState = {
  'doves': [],
  'toggleForm': false,
  'searchTerm': ''
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOVES':
      return reduceSetDoves(state, action);
    case 'ADD_DOVE':
      return reduceAddDove(state, action);
    case 'REMOVE_DOVE':
      return reduceRemoveDove(state, action);
    case 'TOGGLE_FORM':
      return reduceToggleForm(state, action);
    case 'SET_SEARCH_TERM':
      return reduceSetSearchTerm(state, action);
    default:
      return state;
  }
}

const reduceSetDoves = (state, action) => {
  return Object.assign({}, state, { 'doves': action.value });
}

const reduceSetSearchTerm = (state, action) => {
  return Object.assign({}, state, { 'searchTerm': action.value });
}

const reduceToggleForm = (state, action) => {
  return Object.assign({}, state, { 'toggleForm': !state.toggleForm });
}

const reduceAddDove = (state, action) => {
  let updatedDoves = state.doves.concat(action.value);
  return Object.assign({}, state, { 'doves': updatedDoves });
}

const reduceRemoveDove = (state, action) => {
  let updatedDoves = state.doves.filter(dove => {
    return dove.id !== action.value;
  });
  return Object.assign({}, state, { 'doves': updatedDoves });
}
