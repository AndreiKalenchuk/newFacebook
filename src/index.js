import React from 'react';
import ReactDOM from 'react-dom';
import store from "./components/redux/redux-store";
import App from './App';
import {Provider} from "react-redux";

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>, document.getElementById('root'));
window.store = store;