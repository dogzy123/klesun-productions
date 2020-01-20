import React, {useState, useEffect, useRef} from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import {ArrowDown} from "../Icons";

function Select(props) {
    const { options, value, onChange } = props;
    const [popupOpen, setPopupOpen] = useState(false);
    const popupRef = useRef(null);

    const getOptionName = () => options.filter(el => el.value === value)[0].title;

    useEffect( () => {
        const clickOutside = e => {
            if (popupRef && popupRef.current && !popupRef.current.contains(e.target))
            {
                setPopupOpen(false);
            }
        };

        if (popupOpen)
        {
            document.body.addEventListener('click', clickOutside);
        }

        return () => {
            document.body.removeEventListener('click', clickOutside);
        };
    }, [popupOpen] );

    return (
        <React.Fragment>
            <select
                value={value}
                style={{display: 'none'}}
                readOnly
            >
                {
                    options.map( (el, i) => (
                        <option key={i} value={el.value}>{el.title}</option>
                    ) )
                }
            </select>
            <div
                className={styles.selectBody}
                onClick={ () => setPopupOpen(prev => !prev) }
            >
                <div className={styles.selectContainer}>
                    <span className={styles.selectTitle}>{getOptionName()}</span>
                    <span className={styles.arrowIcon}>
                        <ArrowDown style={{height: '10px', width: '10px', color: 'rgba(115, 27, 60, 1)'}}/>
                    </span>
                </div>
            </div>
            {
                popupOpen
                    ? (
                        <div className={styles.selectPopup} ref={popupRef}>
                            <div className={styles.selectPopupContainer}>
                                {
                                    options.map( (el, i) => (
                                        <div
                                            key={i}
                                            className={styles.selectPopupItem}
                                            onMouseUp={ () => {
                                                onChange(el.value);
                                                setPopupOpen(false);
                                            } }
                                        >
                                            <span className={classNames(styles.selectPopupItemText, el.value === value ? styles.active : '')}>{el.title}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                    : null
            }
        </React.Fragment>
    )
}

export default Select;