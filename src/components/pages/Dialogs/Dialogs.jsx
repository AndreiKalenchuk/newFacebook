import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./messages/Messages";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {
    const state = props.store.getState().dialogsPage;
    const dialogsItems = state.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                                                          id={dialog.id}/>);
    const messagesItems = state.messages.map(messages => <Messages msg={messages.message}
                                                                                            id={messages.id}/>);
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    const onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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
                        <button onClick={onSendMessageClick}>Sent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;