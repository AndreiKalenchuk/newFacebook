import React from 'react';
import tree from '../../../../tree.jpg'
import css from './ProfileInfo.module.css';
import unKnownUserPhoto from "../../../../assets/imegess/unknownUser.png"
import Preloader from "../../../common/preloaders/preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={tree}/>
            </div>

            <div className={css.description_block}>
                <span>
                <img src={props.profile.photos.large ? props.profile.photos.large : unKnownUserPhoto}/>
                </span>

                <span>
                <div> About me: {props.profile.aboutMe} </div>
                <div>Name: {props.profile.fullName}</div>
                <div>userId: {props.profile.userId}</div>
            </span>

            </div>


        </div>
    )
}
export default ProfileInfo;