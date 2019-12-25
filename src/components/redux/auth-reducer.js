import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_DATA = "SET-AUTH-DATA";
let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};

export const setAuthUserData = data => {
  return {
    type: SET_AUTH_DATA,
    data: data
  };
};

export const getAuthUserData = () => {
  return dispatch => {
    return authAPI.getAuth().then(response => {
      if (response.data.resultCode === 0) {
        const { email, id, login } = response.data.data;
        dispatch(
          setAuthUserData({
            id,
            email,
            login,
            isAuth: true
          })
        );
      }
    });
  };
};
export const login = formData => {
  return dispatch => {
    authAPI.login(formData).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};
export const logout = () => {
  return dispatch => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
        // dispatch(getAuthUserData);
        dispatch(
          setAuthUserData({ id: null, email: null, login: null, isAuth: false })
        );
      }
    });
  };
};

export default authReducer;
