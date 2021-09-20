import React from 'react';
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidator, requiredField} from "../../../utils/formValidators/validators";
import {Textarea} from "../../../common/FormsControls/FormControls";

const maxLength10 = maxLengthValidator(10);

const MyPosts = (props) => {
    const postsItems = props.posts.map(post => <Post key={post.id} message={post.msg} id={post.id}
                                                     likesCount={post.likesCount}
                                                     increaseLikeCount={props.increaseLikeCount}/>);

    const onAddNewPost = (formData) => {
        props.addNewPost(formData.newPost);
    }

    return (
        <div className={css.content}>
            <div>
                <h3>My posts</h3>
                <AddPostFormRedux onSubmit={onAddNewPost}/>
                <div>
                    {postsItems}
                </div>
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name='newPost'
                   placedholder='type a message'
                   validate={[requiredField, maxLength10]}/>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: 'posts'})(AddPostForm);
export default MyPosts;