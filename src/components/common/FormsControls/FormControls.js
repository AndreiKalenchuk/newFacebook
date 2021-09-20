import React from "react";
import styles from "./FormControls.module.css";

const FormControl = ({input, meta, Formtype, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <Formtype {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    )
}

export const Textarea = (props) => {
    return <FormControl {...props} Formtype='textarea'/>
}


export const Input = (props) => {
    return <FormControl {...props} Formtype='input'/>
}