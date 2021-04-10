import React from "react";
import * as axios from "axios";
import defaultPhoto from '../../../src/assets/imegess/unknownUser.png';
import css from './users.module.css'

class UsersClass extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers(res.data.items);
        })
    }

    render() {
        return <div>
            {
                this.props.users.map(user => <div key={user.id}>
                <span>
                   <div> <img className={css.img} src={user.photos.small ? user.photos.small : defaultPhoto}/>
                   </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.unFollowUser(user.id)
                            }}> Unfollow</button>
                            : <button onClick={() => {
                                this.props.followUser(user.id)
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

}

export default UsersClass;