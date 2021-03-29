import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    const sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    const updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (<Dialogs dialogsPage={state}
                     sendMessage={sendMessage} updateNewMessageBody={updateNewMessageBody}/>)
}

export default DialogsContainer;