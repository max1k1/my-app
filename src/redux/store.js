import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './Profile-reducer';
import dialogsReducer from './Dialog-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from "./Users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
}); 

let store = createStore(reducers);
window.store = store;

export default store;