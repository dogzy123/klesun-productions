import React, {useState, useEffect, useRef} from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import Select from "../Select";
import { ReactComponent as CheckIcon } from "../../images/check_icon.svg";

const jobKind = [
    {title: 'Create new app', value: 'create'},
    {title: 'Improve existing app', value: 'improve'},
    {title: 'Consultation', value: 'consultation'},
    {title: 'Other', value: 'other'},
];

const softwareKind = [
    {title: 'Web app', value: 'web'},
    {title: 'Desktop app', value: 'desktop'},
    {title: 'Android app', value: 'android'},
    {title: 'Plugin', value: 'plugin'},
    {title: 'Command Line App', value: 'cli'},
    {title: 'Library', value: 'lib'},
    {title: 'Server', value: 'server'},
    {title: 'Other', value: 'other'},
];

const currencies = [
    {title: 'USD', value: 'usd'},
    {title: 'EUR', value: 'eur'},
];

function Modal (props) {
    const { open, onClose } = props;
    const modalRef = useRef(null);
    const columnRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [workPrice, setWorkPrice] = useState('')
    const [workHours, setWorkHours] = useState('');
    const [jobValue, setJobValue] = useState(-1);
    const [softwareValue, setSoftwareValue] = useState(-1);
    const [descriptionValue, setDescriptionValue] = useState('');
    const [descriptionWidth, setDescriptionWidth] = useState(null);
    const [offPrice, setOffPrice] = useState(false);
    const [publishDescription, setPublishDescription] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [animationPassed, setAnimationPassed] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [descriptionPlaceholderShown, setDescriptionPlaceholderShown] = useState(true);
    const [currency, setCurrency] = useState('usd');
    const [responseSuccess, setResponseSuccess] = useState(undefined);
    const [invalid, setInvalid] = useState({});

    const validate = () => {
        const invalids = {};

        if (!email || email.length < 1)
        {
            invalids.email = true;
        }

        if (!descriptionValue || descriptionValue.length < 1)
        {
            invalids.descriptionValue = true;
        }

        if (!jobValue || jobValue === -1)
        {
            invalids.jobValue = true;
        }

        if (!softwareValue || softwareValue === -1)
        {
            invalids.softwareValue = true;
        }

        if (!workPrice || workPrice.length < 1)
        {
            invalids.workPrice = true;
        }

        if (Object.keys(invalids).length > 0)
        {
            setInvalid({...invalids});
            return false;
        }

        return true;
    };

    const sendForm = () => {
        if (!validate())
            return;

        const form = {
            ordererPublishedName: name,
            ordererEmail: email,
            estimatedAmountOfWorkInHours: workHours,
            estimatedPriceForCompletedWork: {
                currency: currency.toLocaleUpperCase(),
                amount: parseFloat(workPrice).toFixed(2),
            },
            jobKind: jobValue,
            softwareKind: softwareValue,
            freeFormDescription: descriptionValue,
            allowPublishingAsOpenSource: offPrice,
            allowPublishingDescription: publishDescription,
        };

        setProcessing(true);

        return fetch('https://klesun-productions.com/api/orderSoftware', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(form)
        })
            .then( resp => resp.json() )
            .then( response => {
                if (response && response.status && response.status === "success")
                {
                    setResponseSuccess(true);
                }

                setSubmitted(true);
                setProcessing(false);
            } )
            .catch( e => {
                setSubmitted(true);
                setProcessing(false);
            } )
    };

    const handleDescription = e => {
        setInvalid( prev => ({...prev, descriptionValue: false}) );
        setDescriptionValue(e.target.innerText);
    };

    const handleJobChange = value => {
        setJobValue(value);
        setInvalid( prev => ({...prev, jobValue: false}) );
    };

    const handleSoftwareChange = value => {
        setSoftwareValue(value);
        setInvalid( prev => ({...prev, softwareValue: false}) );
    };

    const handleCurrencyChange = value => {
        setCurrency(value);
    };

    const handleOffPrice = e => {
        setOffPrice(e.target.checked);
    };

    const handlePublishDescription = e => {
        setPublishDescription(e.target.checked);
    };

    const handleDescriptionFocus = (e) => {
        setDescriptionPlaceholderShown(false);
    };

    const handleDescriptionFocusOut = (e) => {
        if (descriptionValue.length < 1)
        {
            setDescriptionPlaceholderShown(true);
        }
    };

    const handleEmail = (e) => {
        setInvalid( prev => ({...prev, email: false}) );
        setEmail(e.target.value)
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
                if (!descriptionValue.length)
                {
                    setDescriptionPlaceholderShown(true);
                }

                onClose();
                setSubmitted(false);
                setAnimationPassed(false);
                setProcessing(false);
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
            document.body.addEventListener('mousedown', closeOnClick);
        }

        return () => {
            document.body.removeEventListener('keydown', closeOnEscape);
            document.body.removeEventListener('mousedown', closeOnClick);
            window.removeEventListener('resize', handleDescriptionWidth);
        };
    }, [open] );

    useEffect( () => {
        if (submitted)
        {
            setTimeout( () => {
                setAnimationPassed(true);
            }, 450);
        }
    }, [submitted] );

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
                                {
                                    submitted && animationPassed && responseSuccess
                                        ? (
                                            <div className={styles.submittedBlock}>
                                                <CheckIcon />
                                                <span>We will contact you shortly!</span>
                                            </div>
                                        )
                                        : (
                                            <React.Fragment>
                                                {
                                                    processing
                                                        ? (
                                                            <div className={styles.postProcessing}>
                                                                <h1>Sending...</h1>
                                                            </div>
                                                        )
                                                        : null
                                                }
                                                <div className={classNames(styles.bodyRow, submitted ? styles.modalFadeOut : null)}>
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
                                                                className={classNames(styles.klesunInput, invalid.email ? styles.invalid : null, email.length ? styles.klesunInputActive : null)}
                                                                value={email}
                                                                placeholder='Email'
                                                                onChange={handleEmail}
                                                            />
                                                            {
                                                                invalid.email
                                                                    ? (
                                                                        <div className={classNames(styles.invalidDescr, styles.typeInput)}>
                                                                            <span className={styles.invalidText}>Email is mandatory field</span>
                                                                        </div>
                                                                    )
                                                                    : null
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classNames(styles.bodyRow, submitted ? styles.modalFadeOut : null)}>
                                                    <div className={styles.bodyRowContainer}>
                                                        <div className={styles.bodyCol}>
                                                            <Select
                                                                value={jobValue}
                                                                onChange={handleJobChange}
                                                                options={jobKind}
                                                                placeholder='Job Kind'
                                                                invalid={invalid.jobValue}
                                                            />
                                                            {
                                                                invalid.jobValue
                                                                    ? (
                                                                        <div className={classNames(styles.invalidDescr, styles.typeInput)}>
                                                                            <span className={styles.invalidText}>Please select Job Kind!</span>
                                                                        </div>
                                                                    )
                                                                    : null
                                                            }
                                                        </div>
                                                        <div className={styles.bodyCol}>
                                                            <Select
                                                                value={softwareValue}
                                                                onChange={handleSoftwareChange}
                                                                options={softwareKind}
                                                                placeholder='Software Kind'
                                                                invalid={invalid.softwareValue}
                                                            />
                                                            {
                                                                invalid.softwareValue
                                                                    ? (
                                                                        <div className={classNames(styles.invalidDescr, styles.typeInput)}>
                                                                            <span className={styles.invalidText}>Please select Software Kind!</span>
                                                                        </div>
                                                                    )
                                                                    : null
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classNames(styles.bodyRow, submitted ? styles.modalFadeOut : null)}>
                                                    <div className={styles.bodyRowContainer} style={{padding: '8px 24px'}}>
                                                        <div className={styles.bodyCol} ref={columnRef} style={{flexDirection: 'column', alignItems: 'center'}}>
                                                            <div className={styles.descriptionWrapper} style={{width: `${descriptionWidth}px`}}>
                                                                <div
                                                                    onFocus={handleDescriptionFocus}
                                                                    onBlur={handleDescriptionFocusOut}
                                                                    onInput={handleDescription}
                                                                    className={classNames(styles.description, invalid.descriptionValue ? styles.invalid : null)}
                                                                    contentEditable={true}
                                                                    placeholder='Free-Form Description'
                                                                />
                                                                {
                                                                    invalid.descriptionValue
                                                                        ? (
                                                                            <div className={styles.invalidDescr}>
                                                                                <span className={styles.invalidText}>Description is mandatory field</span>
                                                                            </div>
                                                                        )
                                                                        : null
                                                                }
                                                                {
                                                                    descriptionPlaceholderShown
                                                                        ? (
                                                                            <div className={styles.descriptionPlaceholder}>
                                                                                <span className={styles.placeholder}>Free-Form Description</span>
                                                                            </div>
                                                                        )
                                                                        : null
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classNames(styles.bodyRow, submitted ? styles.modalFadeOut : null)}>
                                                    <div className={styles.bodyRowContainer} style={{padding: '8px 24px'}}>
                                                        <div className={styles.bodyCol} style={{justifyContent: 'flex-start', flexDirection: 'column'}}>
                                                            <label className={styles.checkbox}>
                                                                <input type='checkbox' checked={publishDescription} onChange={handlePublishDescription}/>
                                                                <span>Allow publishing description</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classNames(styles.bodyRow, submitted ? styles.modalFadeOut : null)}>
                                                    <div className={styles.bodyRowContainer}>
                                                        <div className={styles.bodyCol}>
                                                            <input
                                                                className={classNames(styles.klesunInput)}
                                                                value={workHours}
                                                                placeholder='Est. amount of work in hours'
                                                                onChange={e => setWorkHours(e.target.value)}
                                                                style={{marginRight: 12}}
                                                            />
                                                        </div>
                                                        <div className={styles.bodyCol}>
                                                            <input
                                                                className={classNames(styles.klesunInput, invalid.workPrice ? styles.invalid : null)}
                                                                value={workPrice}
                                                                type='number'
                                                                step='0.01'
                                                                placeholder='Est. price for completed work'
                                                                onChange={e => {
                                                                    setInvalid( prev => ({...prev, workPrice: false}) );
                                                                    setWorkPrice(e.target.value);
                                                                }}
                                                                style={{marginRight: 12, marginLeft: 12}}
                                                            />
                                                            {
                                                                invalid.workPrice
                                                                    ? (
                                                                        <div className={styles.invalidDescr} style={{left: 14}}>
                                                                            <span className={styles.invalidText}>Price is mandatory field</span>
                                                                        </div>
                                                                    )
                                                                    : null
                                                            }
                                                        </div>
                                                        <div className={styles.bodyCol}>
                                                            <Select
                                                                value={currency}
                                                                onChange={handleCurrencyChange}
                                                                options={currencies}
                                                                style={{marginLeft: 12}}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={classNames(styles.bodyRow, submitted ? styles.modalFadeOut : null)}>
                                                    <div className={styles.bodyRowContainer}>
                                                        <div className={styles.bodyCol} style={{justifyContent: 'flex-start', flexDirection: 'column'}}>
                                                            <label className={styles.checkbox}>
                                                                <input type='checkbox' checked={offPrice} onChange={handleOffPrice}/>
                                                                <span>Allow publishing as Open Source (Tick to get 20% off price)</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )
                                }
                            </div>
                            <div className={styles.modalContainerFooter}>
                                {
                                    !submitted
                                        ? (
                                            <button
                                                onClick={sendForm}
                                                className={styles.klesunBtn}
                                            >
                                                Submit
                                            </button>
                                        )
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
            : null
    );
}

export { Modal as default };