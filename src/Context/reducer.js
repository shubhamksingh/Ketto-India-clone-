function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isAuth: true };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  isAuth: false,
  token: null,
  isError: false,
  isLoading: false,
  data: [],
  isDataLoading: false,
};

export {reducer, INITIAL_STATE} ;