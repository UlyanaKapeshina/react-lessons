import { getAuthUserData } from "./auth-reducer";

const INITIALIZE = "INITIALIZE";
let initialState = {
  initialize: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        initialize: true
      };
    default:
      return state;
  }
};

export const initialize = () => {
  return {
    type: INITIALIZE
  };
};

export const initializeApp = () => {
  return dispatch => {
    // debugger;
    let promise = dispatch(getAuthUserData());
    promise.then(() => dispatch(initialize()));
  };
};

export default appReducer;
