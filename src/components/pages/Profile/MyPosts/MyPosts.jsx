import React from 'react';
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsItems = props.posts.map(post =>
        <Post message={post.msg} id={post.id} likesCount={post.likesCount}
              increaseLikeCount={props.increaseLikeCount}/>);

    const onAddNewPostClick = () => {
        if (props.value) {
            props.addNewPost();
        }
    }
    const onPostChange = (event) => {
        const text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={css.content}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea onChange={onPostChange}
                              placedholder='type a message'
                              value={props.value}/>
                    </div>
                    <div>
                        <button className={css.submitBtn}
                                onClick={onAddNewPostClick}> Add post
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