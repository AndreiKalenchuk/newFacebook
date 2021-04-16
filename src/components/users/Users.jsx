import React from "react";
import defaultPhoto from '../../../src/assets/imegess/unknownUser.png';
import css from './users.module.css'

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

    return <div>
        <div> {pagesCountTotal} </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                   <div> <img className={css.img} src={user.photos.small ? user.photos.small : defaultPhoto}/>
                   </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                props.unFollowUser(user.id)
                            }}> Unfollow</button>
                            : <button onClick={() => {
                                props.followUser(user.id)
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