import React from 'react';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
    increaseLikeCountActionCreator
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const state = props.store.getState();

    const addNewPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    const increaseLikeCount = (index) => {
        props.store.dispatch(increaseLikeCountActionCreator(index));
    }


    return (<MyPosts addNewPost={addNewPost} updateNewPostText={updateNewPostText}
                     posts={state.profilePage.posts} value={state.profilePage.newPostText}
                     increaseLikeCount={increaseLikeCount}/>)
}
export default MyPostsContainer;