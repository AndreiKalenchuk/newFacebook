import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    setFollowUnfollowUser, toggleFollowingInProgress
} from "../redux/us-reducer";
import US from "./US"
import {usersApi} from "../../api/api";

class UsContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setIsFetching(false);
            })
            .catch(error => console.log(error));
    }

    onPageClick = (currentPage) => {
        this.props.setIsFetching(true);
        usersApi.getUsers(currentPage).then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setCurrentPage(currentPage);
                this.props.setIsFetching(false);

            })
            .catch(error => console.log(error));
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
    setUsers, setTotalUsersCount, setCurrentPage, setIsFetching: toggleIsFetching,
    setFollowUnfollowUser, setFollowingInProgress: toggleFollowingInProgress
})(UsContainer)