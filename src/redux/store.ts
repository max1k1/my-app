import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import profileReducer from './profile-reducer.ts';
import dialogsReducer from './dialogs-reducer.ts';
import sidebarReducer from './sidebar-reducer.ts';
import usersReducer from './users-reducer.ts';
import authReducer from './auth-reducer.ts';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import appReducer from './app-reducer.ts';
import { reducer as formReducer } from 'redux-form';
let rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});
type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>;

// type ActionsPropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
// export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
//   ActionsPropertiesTypes<T>
// >;
// export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
//   T extends { [key: string]: infer U } ? U : never
// >;

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U }
  ? U
  : never;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window._store = store;
export default store;
