import React, {useState, useEffect, useRef} from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

const jobKind = [
    {title: 'Create new app', value: 'create'},
    {title: 'Improve existing app', value: 'improve'},
    {title: 'Consultation', value: 'consultation'},
];

function Modal (props) {
    const { open, onClose } = props;
    const modalRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [jobValue, setJobValue] = useState('create');
    const [jobSelect, setJobSelect] = useState(false);

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

        if (open)
        {
            document.body.addEventListener('keydown', closeOnEscape);
            document.body.addEventListener('click', closeOnClick);
        }

        return () => {
            document.body.removeEventListener('keydown', closeOnEscape);
            document.body.removeEventListener('click', closeOnClick);
        };
    }, [open] );

    const getJobName = () => jobKind.filter(el => el.value === jobValue)[0].title;

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
                                            <select
                                                value={jobValue}
                                                onChange={ (e) => setJobValue(e.target.value) }
                                                style={{display: 'none'}}
                                            >
                                                {
                                                    jobKind.map( (el, i) => (
                                                        <option key={i} value={el.value}>{el.title}</option>
                                                    ) )
                                                }
                                            </select>
                                            <div onClick={ () => setJobSelect(prev => !prev)}>{getJobName()}</div>
                                            {
                                                jobSelect
                                                    ? (
                                                        <div>
                                                            {
                                                                jobKind.map( (el, i) => (
                                                                    <div key={i} onClick={ () => {
                                                                        setJobValue(el.value);
                                                                        setJobSelect(false);
                                                                    } }>{el.title}</div>
                                                                ))
                                                            }
                                                        </div>
                                                    )
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.modalContainerFooter}>
                                <button className={styles.klesunBtn}>Submit</button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
            : null
    );
}

export { Modal as default };