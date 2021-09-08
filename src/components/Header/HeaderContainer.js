import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authMe, setUserAuthDataAC} from '../redux/auth_reduser'
import {authMeApi} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {setUserAuthDataAC, authMe})(HeaderContainer);