import React from 'react';
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsList = [
        {id: 1, msg: 'Hello, how are you been', likesCount: 2},
        {id: 2, msg: 'Pass a hammer to me, please', likesCount: 24},
        {id: 3, msg: 'Hello, I\'m Ok!', likesCount: 25},
        {id: 4, msg: 'Hello, initial commit', likesCount: 12}
    ];
    const postsItems = postsList.map(post => <Post message={post.msg} id={post.id} likesCount={post.likesCount}/>);

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