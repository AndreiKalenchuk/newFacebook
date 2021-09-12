import React from "react";
import {connect} from "react-redux";
import {
    followUser,
    getUsers, setCurrentPage, unFollowUser
} from "../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        const currentPage = this.props.currentPage;
        const count = this.props.pageSize;
        this.props.getUsers(currentPage, count);
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            <Users usersCount={this.props.usersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   setUnFollowUser={this.props.unFollowUser}
                   setFollowUser={this.props.followUser}
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
    getUsers,
    setCurrentPage, followUser, unFollowUser
})
(UsersContainer);
