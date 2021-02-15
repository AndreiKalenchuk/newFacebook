import React from 'react';
import {renderEntireTree} from './render';
import {state, addPost, updateNewPostText} from "./components/redux/state";

renderEntireTree(state, addPost, updateNewPostText);


