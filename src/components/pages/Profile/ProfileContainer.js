import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {setUserProfile} from "../../redux/profile_reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let myId = 2
        // if (this.props.auth.isAuth) {
        //     myId = this.props.auth.userId
        // }
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.auth.userId;
        if (userId) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(res => {
                    this.props.setUserProfile(res.data);
                })
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
export default connect(mapStateToProps, {setUserProfile})(WithRouterUrlDataContainer);
