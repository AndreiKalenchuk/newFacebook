import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {setUserProfile} from "../../redux/profile_reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data);
            })
    }

    render() {
        return (<Profile {...this.props}/>)
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const WithRouterUrlDataContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithRouterUrlDataContainer);
