import React from "react";
import defaultPhoto from "../../../src/assets/imegess/unknownUser.png"
import css from './users.module.css'
import Preloader from "../common/preloaders/preloader";
import {NavLink} from "react-router-dom";


const US = (props) => {
    const usersList = props.users.map(user => <div key={user.id}>
                       <span>
                   <div>
                       <NavLink to={`profile/${user.id}`}>
                       <img
                           src={user.photos.small ? user.photos.small : defaultPhoto}/>
                       </NavLink>

                   </div>
                    <div>
                     <button> click</button>
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
    </div>);
    const pages = [];
    const totalPages = Math.ceil(props.usersCount / props.pageSize)
    for (let i = 1; i <= totalPages; i++) {
        pages.push(<span className={props.currentPage === i ? css.selectedPage : ''}
                         onClick={() => {
                             props.onPageClick(i)
                         }} key={i}>
            {i + ' '}</span>)
    }


    return <>
        <div>{pages}</div>
        <div>{props.isFetching && <Preloader/>}</div>
        <div>{usersList}</div>
    </>
}
export default US;