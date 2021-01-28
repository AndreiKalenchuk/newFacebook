import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14.jpeg?m6aZMJ2FuRNdIJhw9MbIpcGgJvY3yzW6&size=770:433"
                alt=""/>
            {props.message}
            <span>
               <img className={s.like}
                    src="https://img.favpng.com/5/2/10/facebook-like-button-facebook-like-button-computer-icons-png-favpng-H5LqiPv5maswHD0dXSyfhWCjW.jpg"
                    alt="like"/>
                {props.likesCount}
            </span>
        </div>

    )
}
export default Post;