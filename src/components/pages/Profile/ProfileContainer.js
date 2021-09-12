import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getUserProfile} from "../../redux/profile_reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.auth.userId;
        if (userId) {
            getUserProfile(userId);
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

const WithRouterUrlDataContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(WithRouterUrlDataContainer);
