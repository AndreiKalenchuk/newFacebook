import React from 'react';
import css from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    const postsItems = props.posts.map(post => <Post message={post.msg} id={post.id} likesCount={post.likesCount}/>);

    return (
        <div className={css.content}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea placeholder='type a message'
                              name="text">
                    </textarea>
                    </div>
                    <div>
                        <button className={css.submitBtn}> Add post</button>
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