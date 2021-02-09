import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./messages/Messages";

const Dialogs = (props) => {
    const dialogsItems = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesItems = props.state.messages.map(message => <Messages msg={message.message} id={message.id}/>);
    return (
        <div className={css.dialogs_box}>
            <div className={css.dialogs_items}>
                {dialogsItems}
            </div>
            <div>
                {messagesItems}
            </div>
        </div>
    )
}

export default Dialogs;