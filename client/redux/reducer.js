const SET_EXAMPLE_VARIABLE = 'SET_EXAMPLE_VARIABLE';

export function setExampleVariable(variable) {
  return { type: SET_EXAMPLE_VARIABLE, variable };
}

const initialState = {
  variable: 'a girl has no name',
  random: 8
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXAMPLE_VARIABLE :
      return {
        ...state,
        variable: action.variable
      };
    default:
      return state;
  }
};

export default reducer;
