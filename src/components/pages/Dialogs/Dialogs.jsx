import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./messages/Messages";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormControls";
import {maxLengthValidator, requiredField} from "../../utils/formValidators/validators";


class Dialogs extends React.Component {

    dialogsItems = this.props.dialogsPage.dialogs.map(
        dialog => <DialogItem key={dialog.id}
                              name={dialog.name}
                              id={dialog.id}/>);
    messagesItems = this.props.dialogsPage.messages.map(
        messages => <Messages key={messages.id}
                              msg={messages.message}
                              id={messages.id}/>);

    onSendMessage = (farmData) => {
        this.props.sendMessage(farmData.message);
    }

    render() {
        return (
            <div className={css.dialogs_box}>
                <div className={css.dialogs_items}>
                    {this.dialogsItems}
                </div>
                <div>
                    <div> {this.messagesItems}</div>
                </div>
                <AddMessageFormRedux onSubmit={this.onSendMessage}/>
            </div>
        )
    }
}

const maxLength100 = maxLengthValidator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            < Field component={Textarea}
                    name='message'
                    placeholder='Enter a message'
                    validate={[requiredField, maxLength100]}/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogsMessage'})(AddMessageForm);
export default Dialogs;