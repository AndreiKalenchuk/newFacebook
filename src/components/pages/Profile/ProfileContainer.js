import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getUserProfile} from "../../redux/profile_reducer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.auth.userId;
        if (userId) {
            this.props.getUserProfile(userId);
        }
    }

    render() {
        return (<Profile {...this.props}/>)
    }
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    auth: state.auth
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile}))
(ProfileContainer);