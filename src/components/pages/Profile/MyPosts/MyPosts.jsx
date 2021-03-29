import React from 'react';
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsItems = props.posts.map(post =>
        <Post message={post.msg} id={post.id} likesCount={post.likesCount}
              increaseLikeCount={props.increaseLikeCount}/>);

    const newElementText = React.createRef();

    const onAddNewPostClick = () => {
        if (newElementText.current.value !== '') {
            props.addNewPost();
        }
    }
    const onPostChange = () => {
        const text = newElementText.current.value;
        props.updateNewPostText(text);
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