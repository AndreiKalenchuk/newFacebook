import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./messages/Messages";
import {Field, reduxForm} from "redux-form";


class Dialogs extends React.Component {

    dialogsItems = this.props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                            id={dialog.id}/>);
    messagesItems = this.props.dialogsPage.messages.map(messages => <Messages key={messages.id} msg={messages.message}
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

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                < Field component='textarea'
                        name='message'
                        placeholder='Enter a message'
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogsMessage'})(AddMessageForm);
export default Dialogs;