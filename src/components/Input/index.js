import React, {useEffect, useState} from 'react'
import styles from "../Modal/style.module.scss";
import classNames from "classnames";

export default function Input (props) {
    const {value, onChange, style, required, className, placeholder, containerClassname, isInvalid, ...other} = props;
    const [placeholderShown, setPlaceholderShown] = useState(true);

    useEffect( () => {
        if (value && value.length) {
            setPlaceholderShown(false);
        }
    }, [] );

    const handleFocus = e => {
        setPlaceholderShown(false);
    };

    const handleBlur = e => {
        if (!value || !value.length) {
            setPlaceholderShown(true);
        }
    };

    return (
        <div className={classNames(styles.inputContainer, containerClassname)}>
            <input
                className={classNames(styles.klesunInput, className)}
                value={value}
                onChange={onChange}
                style={{...style, margin: 0}}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...other}
            />
            {
                isInvalid
                    ? (
                        <div className={styles.invalidDescr} style={{minWidth: 130}}>
                            <span className={styles.invalidText}>Price is mandatory field</span>
                        </div>
                    )
                    : null
            }
            {
                placeholderShown
                    ? (
                        <span className={styles.inputPlaceholder}>
                            {placeholder}
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
        </div>
    );
}