import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./messages/Messages";

class Dialogs extends React.Component {

    dialogsItems = this.props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                            id={dialog.id}/>);
    messagesItems = this.props.dialogsPage.messages.map(messages => <Messages key={messages.id} msg={messages.message}
                                                                              id={messages.id}/>);

    onSendMessageClick = () => {
        if (this.props.dialogsPage.newMessageBody) {
            this.props.sendMessage();
        }
    }
    onNewMessageChange = (event) => {
        let body = event.target.value;
        this.props.updateNewMessageBody(body);
    }

    render() {
        return (
            <div className={css.dialogs_box}>
                <div className={css.dialogs_items}>
                    {this.dialogsItems}
                </div>
                <div>
                    <div> {this.messagesItems}</div>
                    <div>

                        <div>< textarea value={this.props.dialogsPage.newMessageBody}
                                        placeholder='Enter a message'
                                        onChange={this.onNewMessageChange}>message</textarea>
                        </div>
                        <div>
                            <button onClick={this.onSendMessageClick}>Send</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Dialogs;