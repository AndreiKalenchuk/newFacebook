import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserAuthDataAC} from '../redux/auth_reduser'

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    const {id, email, login} = res.data.data;
                    this.props.setUserAuthDataAC(id, email, login);
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {setUserAuthDataAC})(HeaderContainer);