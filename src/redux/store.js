import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './Profile-reducer';
import dialogsReducer from './Dialog-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
}); 

let store = createStore(reducers);

export default store;