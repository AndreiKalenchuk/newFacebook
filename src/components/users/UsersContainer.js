import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import {followUserAC, setCurrentPageAC, setUsersAC, unFollowUserAC, setUsersTotalCountAC} from "../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        const currentPage = this.props.currentPage;
        const count = this.props.pageSize;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${count}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setUsersTotalCount(res.data.totalCount);
            })
    }

    onPageChange = (i) => {
        this.props.setCurrentPage(i);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            })
    }

    render() {
        return <Users usersCount={this.props.usersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChange={this.onPageChange}
                      users={this.props.users}
                      unFollowUser={this.props.unFollowUser}
                      followUser={this.props.followUser}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersTotalCount: (usersCount) => {
            dispatch(setUsersTotalCountAC(usersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
