import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";

const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
};

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return < Redirect to={'/login'}/>;
            return < Component {...this.props}/>;
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}
export default withAuthRedirect;