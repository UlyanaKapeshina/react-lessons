import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sideBarReducer from "./side-bar-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  sideBar: sideBarReducer,
  usersPage: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.state = store;
export default store;
