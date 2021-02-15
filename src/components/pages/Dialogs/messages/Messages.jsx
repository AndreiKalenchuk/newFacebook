import React from "react";
import css from './Messages.module.css'

const Messages = (props) => {

    const newElement = React.createRef();

    const sendMessage = () => {
        const text = newElement.current.value;
        alert(text)
    };

    return (
        <div className={css.messages}>
            <div className={css.dialogWrapper}>
            <span>

            {props.msg}
            </span>

                <span>

                </span>




                <button className={css.submitButton}
                        onClick={sendMessage}>
                    Send
                </button>

            </div>
        </div>
    )
}
export default Messages;