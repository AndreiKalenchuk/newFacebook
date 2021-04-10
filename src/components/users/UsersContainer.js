import {connect} from "react-redux";
import {followUserAC, setUsersAC, unFollowUserAC} from "../redux/users-reducer";
import Users from "./usersClass";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followUserAC(userId))
        },
        unFollowUser: (userId) => {
            dispatch(unFollowUserAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
