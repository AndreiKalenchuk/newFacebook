import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setFollowUnfollowUser,
    getUsersThunkCreator,
    followUser,
    unFollowUser
} from "../redux/us-reducer";
import US from "./US"

class UsContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.setIsFetching(true);
        // usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //         this.props.setIsFetching(false);
        //     })
        //    .catch(error => console.log(error));
    }

    onPageClick = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);
        // this.props.setIsFetching(true);
        // usersApi.getUsers(currentPage).then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //         this.props.setCurrentPage(currentPage);
        //         this.props.setIsFetching(false);
        //
        //     })
        //     .catch(error => console.log(error));
    }

    render() {
        return <>
            <US {...this.props}
                onPageClick={this.onPageClick}
            />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.us.users,
        pageSize: state.us.pageSize,
        usersCount: state.us.usersCount,
        currentPage: state.us.currentPage,
        isFetching: state.us.isFetching,
        followingInProgress: state.us.followingInProgress
    }
}

export default connect(mapStateToProps, {
    setCurrentPage, setFollowUnfollowUser,
    getUsers: getUsersThunkCreator,
    followUser, unFollowUser
})(UsContainer)