const defaultState = {
  count: 1,
};

const reducer = (state = defaultState, action) => {
  // console.log(action, 'action');
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    default: return state;
  }
};

export default reducer;
