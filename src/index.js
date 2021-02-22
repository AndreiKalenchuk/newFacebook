import React from 'react';
import ReactDOM from 'react-dom';
import store from "./components/redux/state";
import App from './App';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)}
                 updatePostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
