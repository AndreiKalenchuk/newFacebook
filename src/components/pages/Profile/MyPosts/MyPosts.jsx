import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                My posts
                <div>
                    <textarea placeholder='type a message'
                              name="text">
                    </textarea>
                    <button> Add post</button>
                </div>
                <div>
                    <Post message='Hello, how are you been?' likesCount='1'/>
                    <Post message='Pass a hammer to me, please' likesCount='4'/>
                    <Post message="I'm Ok!" likesCount='9'/>
                    <Post message='initial commit' likesCount='411'/>
                </div>
            </div>
        </div>
    )
}
export default MyPosts;