import React from 'react';
import css from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={css.dialogs_box}>
            <div className={css.dialogs_items}>
                Andrey
            </div>
            <div className={css.messages}>
                <div>
                    hello
                </div>
            </div>
        </div>
    )
}

export default Dialogs;