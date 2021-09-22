import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, logout, setUserAuthDataAC} from '../redux/auth_reduser'

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

export default connect(mapStateToProps, {setUserAuthDataAC, authMe, logout})(HeaderContainer);