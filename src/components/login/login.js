import react from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {maxLengthValidator, requiredField} from "../utils/formValidators/validators";
import {connect} from "react-redux";
import {loginThunk} from "../redux/auth_reduser";
import {Redirect} from "react-router";

const maxLength30 = maxLengthValidator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       placeholder='email'
                       name='email'
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <Field placeholder='password' component={Input} name='password' type='password'
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <Field type='Checkbox' component='input' name='rememberMe'/> remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
// container component
export default connect(mapStateToProps, {login: loginThunk})(Login);