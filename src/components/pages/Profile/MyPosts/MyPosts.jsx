import React from 'react';
import css from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    const postsItems = props.posts.map(post => <Post message={post.msg} id={post.id} likesCount={post.likesCount}/>);

    const newElementText = React.createRef();
    const addNewPost = () => {
        props.dispatch({
            type: 'ADD-POST'
        });

    }
    const onPostChange = () => {
        const text = newElementText.current.value;
        const action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
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
                              value={props.newPostText}/>
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