import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./messages/Messages";


const Dialogs = (props) => {
    // data:
    const usersList = [
        {id: 1, name: 'SASA'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Vasily'},
        {id: 4, name: 'Ana'},
        {id: 5, name: 'Bedlla'},
    ];
    const messagesList = [
        {id: 1, message: 'Yoou'},
        {id: 2, message: 'What is up?'},
        {id: 3, message: 'What ?'},
        {id: 4, message: 'Go'},
        {id: 4, message: 'Go home'},
    ];

    const dialogsItems = usersList.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesItems = messagesList.map(message => <Messages msg={message.message} id={message.id}/>);

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