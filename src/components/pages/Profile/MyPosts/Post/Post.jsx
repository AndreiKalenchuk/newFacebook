import React from 'react';
import css from './Post.module.css';
import {increaseLikeCountActionCreator} from "../../../../redux/profile_reducer";

const Post = (props) => {
    const onLikeClick = () => {
        const index = props.id;
        props.dispatch(increaseLikeCountActionCreator(index));
    }

    return (
        <div>
            <div className={css.item}>
                <img
                    src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14.jpeg?m6aZMJ2FuRNdIJhw9MbIpcGgJvY3yzW6&size=770:433"
                    alt="profile photo"/>
                <span>  {props.message} </span>
            </div>

            <div className={css.like}>
                <button onClick={onLikeClick}>
                    like
                </button>
                <img
                    src="https://img.favpng.com/5/2/10/facebook-like-button-facebook-like-button-computer-icons-png-favpng-H5LqiPv5maswHD0dXSyfhWCjW.jpg"
                    alt="like"/>
                <span> {props.likesCount} </span>
            </div>
        </div>
    )
}
export default Post;