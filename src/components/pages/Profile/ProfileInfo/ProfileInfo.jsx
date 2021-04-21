import React from 'react';
import tree from '../../../../tree.jpg'
import css from './ProfileInfo.module.css'
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
                <img src={props.profile.photos.large}/>
                </span>

                <span>About me:</span>
                <span>{props.profile.aboutMe}</span>

            </div>

        </div>
    )
}
export default ProfileInfo;