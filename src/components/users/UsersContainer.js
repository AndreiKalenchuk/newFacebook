import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    setToggledIsFetching, setFollowUser, setUnFollowUser
} from "../redux/users-reducer";
import Users from "./Users";
import {usersApi} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setToggledIsFetching(true);
        const currentPage = this.props.currentPage;
        const count = this.props.pageSize;
        usersApi.getUsers(currentPage, count).then(data => {
            this.props.setToggledIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        })
            .catch(err => console.log(err));
    }

    onPageChange = (pageNumber) => {
        this.props.setToggledIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setToggledIsFetching(false);
            this.props.setUsers(data.items);
        })
            .catch(err => console.log(err));
    }

    render() {
        return <>
            <Users usersCount={this.props.usersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   setUnFollowUser={this.props.setUnFollowUser}
                   setFollowUser={this.props.setFollowUser}
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
    setFollowUser,
    setCurrentPage,
    setUsers,
    setUnFollowUser,
    setUsersTotalCount,
    setToggledIsFetching
})
(UsersContainer);
