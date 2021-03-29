import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./messages/Messages";

const Dialogs = (props) => {
    const dialogsPage = props.dialogsPage;
    const dialogsItems = dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesItems = dialogsPage.messages.map(messages => <Messages msg={messages.message} id={messages.id}/>);
    const newMessageBody = dialogsPage.newMessageBody;

    const onSendMessageClick = () => {
        if (newMessageBody) {
            props.sendMessage();
        }
    }
    const onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={css.dialogs_box}>
            <div className={css.dialogs_items}>
                {dialogsItems}
            </div>
            <div>
                <div> {messagesItems}</div>
                <div>
                    <div>< textarea value={newMessageBody}
                                    placeholder='Enter a message'
                                    onChange={onNewMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;