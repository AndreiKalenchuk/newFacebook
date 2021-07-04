import React from "react";
import {connect} from "react-redux";
import * as axios from "axios"
import {setCurrentPage, setTotalUsersCount, setUsers, setIsFetching} from "../redux/us-reducer";
import US from "./US"

class UsContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
                this.props.setIsFetching(false);
            })
            .catch(error => console.log(error));
    }

    onPageClick = (currentPage) => {
        this.props.setIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + currentPage)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
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
    }
}

export default connect(mapStateToProps, {
    setUsers, setTotalUsersCount, setCurrentPage, setIsFetching
})(UsContainer)