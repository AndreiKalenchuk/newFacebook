import React from "react";
import css from './Messages.module.css';

const Messages = (props) => {

    return (
        <div className={css.messages}>
            <div className={css.dialogWrapper}>
                {props.msg}
            </div>
        </div>
    )
}
export default Messages;