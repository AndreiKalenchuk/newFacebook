import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import {
    followUser,
    setCurrentPage,
    setUsers,
    unFollowUser,
    setUsersTotalCount,
    setToggledIsFetching
} from "../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setToggledIsFetching(true);
        const currentPage = this.props.currentPage;
        const count = this.props.pageSize;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${count}`)
            .then(res => {
                this.props.setToggledIsFetching(false);
                this.props.setUsers(res.data.items);
                this.props.setUsersTotalCount(res.data.totalCount);
            })
    }

    onPageChange = (i) => {
        this.props.setToggledIsFetching(true);
        this.props.setCurrentPage(i);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setToggledIsFetching(false);
                this.props.setUsers(res.data.items);
            })
    }

    render() {
        return <>
            <Users usersCount={this.props.usersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   unFollowUser={this.props.unFollowUser}
                   followUser={this.props.followUser}
                   isFetching={this.props.isFetching}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    followUser,
    setCurrentPage,
    setUsers,
    unFollowUser,
    setUsersTotalCount,
    setToggledIsFetching
})
(UsersContainer);
