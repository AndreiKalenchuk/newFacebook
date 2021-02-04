import React from 'react';
import tree from '../../../../tree.jpg'
import css from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src={tree}/>
            </div>
            <div className={css.description_block}>
                ava!! + personal info
            </div>
        </div>
    )
}
export default ProfileInfo;