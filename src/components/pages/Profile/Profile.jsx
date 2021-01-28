import React from 'react';
import tree from '../../../tree.jpg'
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <div>
                <img src={tree}/>
            </div>
            <div>
                ava + personal info
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;