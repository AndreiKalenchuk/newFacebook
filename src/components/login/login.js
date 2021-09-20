import react from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {maxLengthValidator, requiredField} from "../utils/formValidators/validators";

const maxLength30 = maxLengthValidator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       placeholder='email'
                       name='login'
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <Field placeholder='password' component={Input} name='password'
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <Field type='Checkbox' component='input' name='remember me'/> remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        // todo send api request
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login;