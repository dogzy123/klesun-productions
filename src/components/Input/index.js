import React, {useEffect, useState} from 'react'
import styles from "../Modal/style.module.scss";
import classNames from "classnames";

export default function Input (props) {
    const {value, onChange, style, required, className, placeholder, containerClassname, isInvalid,
        content, label = false, labelStyle, ...other} = props;
    const [placeholderShown, setPlaceholderShown] = useState(true);

    useEffect( () => {
        if (value && value.length && !label) {
            setPlaceholderShown(false);
        }
    }, [] );

    const handleFocus = e => {
        if (!label) {
            setPlaceholderShown(false);
        }
    };

    const handleBlur = e => {
        if ((!value || !value.length) && !label) {
            setPlaceholderShown(true);
        }
    };

    return (
        <div className={classNames(styles.inputContainer, label ? styles.inputContainerLeft : null, containerClassname)}>
            {
                placeholderShown
                    ? (
                        <span
                            className={classNames(styles.inputPlaceholder, label ? styles.left : null)}
                            style={label ? {...labelStyle} : {}}
                        >
                            {label ? label : placeholder}
                            {
                                required
                                    ? (
                                        <span style={{color: 'red'}}>*</span>
                                    )
                                    : null
                            }
                        </span>
                    )
                    : null
            }
            <input
                className={classNames(styles.klesunInput, className)}
                value={value}
                onChange={onChange}
                placeholder={label ? placeholder : ''}
                style={{...style, margin: 0}}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...other}
            />
            {content}
            {
                isInvalid
                    ? (
                        <div className={styles.invalidDescr} style={{minWidth: 130}}>
                            <span className={styles.invalidText}>Price is mandatory field</span>
                        </div>
                    )
                    : null
            }
        </div>
    );
}