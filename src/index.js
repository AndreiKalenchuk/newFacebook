import React from 'react';
import ReactDOM from 'react-dom';
import {state, addPost, updateNewPostText, subscribe} from "./components/redux/state";
import App from './App';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
