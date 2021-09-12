import React from "react";
import defaultPhoto from '../../../src/assets/imegess/unknownUser.png';
import css from './users.module.css'
import Preloader from "../common/preloaders/preloader";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    const pagesCount = Math.ceil(props.usersCount / props.pageSize);
    const pagesCountTotal = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesCountTotal.push(
            <span className={props.currentPage === i && css.selectedPage}
                  onClick={() => {
                      props.onPageChange(i)
                  }}>{' ' + i}
                    </span>)
    }
    const onFollowBtnClick = (userId) => {
        props.setFollowUser(userId);
    }

    const onUnfollowBtnClick = (userId) => {
        props.setUnFollowUser(userId);
    }

    return <div>
        <div> {pagesCountTotal} </div>
        {props.isFetching && <Preloader/>}
        {
            props.users.map(user => <div key={user.id}>
                <span>
                   <div>
                       <NavLink to={`profile/${user.id}`}>
                       <img className={css.img}
                            src={user.photos.small ? user.photos.small : defaultPhoto}/>
                       </NavLink>
                   </div>
                    <div>
                        {user.followed ? <button onClick={() => {
                                onUnfollowBtnClick(user.id)
                            }}> Unfollow</button>
                            : <button onClick={() => {
                                onFollowBtnClick(user.id)
                            }}> Follow </button>}
                    </div>

                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'Philadelphia'}</div>
                        <div>{'PA'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;