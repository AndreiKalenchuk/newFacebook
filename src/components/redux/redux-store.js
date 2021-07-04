import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import usersReducer from "./users-reducer";
import usReducer from './us-reducer'
import authReducer from "./auth_reduser";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    us: usReducer,
    auth: authReducer
});

let store = createStore(reducers);
window.store = store;

export default store;