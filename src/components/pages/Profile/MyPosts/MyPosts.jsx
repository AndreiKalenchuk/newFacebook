import React from 'react';
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";

const MyPosts = (props) => {
    const postsItems = props.posts.map(post => <Post message={post.msg} id={post.id} likesCount={post.likesCount} dispatch={props.dispatch}/>);

    const newElementText = React.createRef();
    const addNewPost = () => {
        if (newElementText.current.value !== '') {
            props.dispatch(addPostActionCreator());
        }
    }
    const onPostChange = () => {
        const text = newElementText.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={css.content}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea onChange={onPostChange}
                              ref={newElementText}
                              placedholder='type a message'
                              value={props.value}/>
                    </div>
                    <div>
                        <button className={css.submitBtn}
                                onClick={addNewPost}> Add post
                        </button>
                    </div>
                </div>
                <div>
                    {postsItems}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;