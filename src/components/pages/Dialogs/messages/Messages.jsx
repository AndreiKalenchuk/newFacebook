import React from "react";
import css from './Messages.module.css'

const Messages = (props) => {
    return(
        <div className={css.messages}>
            {props.msg}
        </div>
    )
}
export default Messages;