import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import profileReducer from "./profile-reducer.ts";
import dialogsReducer from "./dialogs-reducer.ts";
import sidebarReducer from "./sidebar-reducer.ts";
import usersReducer from "./users-reducer.ts";
import authReducer from "./auth-reducer.ts";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer.ts";
import { reducer as formReducer } from "redux-form";
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
window._store = store;
export default store;
