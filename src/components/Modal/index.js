import React, {useState, useEffect, useRef} from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import Select from "../Select";

const jobKind = [
    {title: 'Create new app', value: 'create'},
    {title: 'Improve existing app', value: 'improve'},
    {title: 'Consultation', value: 'consultation'},
];

const softwareKind = [
    {title: 'Web app', value: 'web'},
    {title: 'Desktop app', value: 'desktop'},
    {title: 'Android app', value: 'android'},
    {title: 'Plugin', value: 'plugin'},
    {title: 'Other', value: 'other'},
];

function Modal (props) {
    const { open, onClose } = props;
    const modalRef = useRef(null);
    const columnRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [jobValue, setJobValue] = useState('create');
    const [softwareValue, setSoftwareValue] = useState('web');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [descriptionWidth, setDescriptionWidth] = useState(null);

    const sendForm = () => {
        const form = {
            name,
            email,
            jobType: jobValue,
            softwareType: softwareValue,
            description: descriptionValue,
        };

        return fetch('https://klesun-productions.com/api/orderSoftware', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(form)
        })
    };

    const handleDescription = e => {
        setDescriptionValue(e.target.innerText);
    };

    const handleJobChange = value => {
        setJobValue(value);
    };

    const handleSoftwareChange = value => {
        setSoftwareValue(value);
    };

    useEffect( () => {
        const closeOnEscape = e => {
            if (e && e.keyCode === 27)
            {
                onClose();
            }
        };

        const closeOnClick = e => {
            if (modalRef.current && !modalRef.current.contains(e.target))
            {
                onClose();
            }
        };

        const handleDescriptionWidth = () => {
            setDescriptionWidth(columnRef.current.offsetWidth - 24 * 2);
        };

        if (columnRef.current)
        {
            handleDescriptionWidth();
            window.addEventListener('resize', handleDescriptionWidth);
        }

        if (open)
        {
            document.body.addEventListener('keydown', closeOnEscape);
            document.body.addEventListener('mouseup', closeOnClick);
        }

        return () => {
            document.body.removeEventListener('keydown', closeOnEscape);
            document.body.removeEventListener('mouseup', closeOnClick);
            window.removeEventListener('resize', handleDescriptionWidth);
        };
    }, [open] );

    return (
        open
            ? (
                <React.Fragment>
                    <div className={styles.modalContactBackdrop} />
                    <div className={styles.modalBody} ref={modalRef}>
                        <div className={styles.modalBodyContainer}>
                            <div className={styles.modalContainerHeader}>
                                <div className={styles.headerTitle}>
                                    <span>Order software</span>
                                </div>
                            </div>
                            <div className={styles.modalContainerBody}>
                                <div className={styles.bodyRow}>
                                    <div className={styles.bodyRowContainer}>
                                        <div className={styles.bodyCol}>
                                            <input
                                                className={classNames(styles.klesunInput, name.length ? styles.klesunInputActive : null)}
                                                value={name}
                                                placeholder='Name'
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className={styles.bodyCol}>
                                            <input
                                                className={classNames(styles.klesunInput, email.length ? styles.klesunInputActive : null)}
                                                value={email}
                                                placeholder='Email'
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.bodyRow}>
                                    <div className={styles.bodyRowContainer}>
                                        <div className={styles.bodyCol}>
                                            <Select
                                                value={jobValue}
                                                onChange={handleJobChange}
                                                options={jobKind}
                                            />
                                        </div>
                                        <div className={styles.bodyCol}>
                                            <Select
                                                value={softwareValue}
                                                onChange={handleSoftwareChange}
                                                options={softwareKind}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.bodyRow}>
                                    <div className={styles.bodyRowContainer}>
                                        <div className={styles.bodyCol} ref={columnRef}>
                                            <div className={styles.descriptionWrapper} style={{width: `${descriptionWidth}px`}}>
                                                <div
                                                    onInput={handleDescription}
                                                    className={styles.description}
                                                    contentEditable={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.modalContainerFooter}>
                                <button
                                    onClick={sendForm}
                                    className={styles.klesunBtn}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
            : null
    );
}

export { Modal as default };