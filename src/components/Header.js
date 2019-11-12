import React from "react";
import classNames from "classnames";
import styles from "../styles/main.module.scss";

function Header() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const modalRef = React.useRef(null);

    function handleClick (e) {
        setModalOpen( prevState => !prevState );
    }

    function close () {
        setModalOpen(false);
    }

    React.useEffect( () => {
        const closeOnEscape = e => {
            if (e && e.keyCode === 27)
            {
                close();
            }
        };

        const closeOnClick = e => {
            if (modalRef.current && !modalRef.current.contains(e.target))
            {
                close();
            }
        };

        if (modalOpen)
        {
            document.body.addEventListener('keydown', closeOnEscape);
            document.body.addEventListener('click', closeOnClick);
        }

        return () => {
            document.body.removeEventListener('keydown', closeOnEscape);
            document.body.removeEventListener('click', closeOnClick);
        };
    }, [modalOpen] );

    return (
        <React.Fragment>
            <header className={styles.header}>
                <div className={classNames(styles.container, styles.headerContainer)}>
                    <div className={styles.logoContainer}>
                        <a href='/' className={styles.logoLink}>
                            <span className={styles.logoImage} />
                            <span className={styles.logoTitle}>klesun-productions</span>
                        </a>
                    </div>
                    <div className={styles.headerBlockDivider} />
                    <div className={styles.contactUsContainer}>
                        <button
                            onClick={handleClick}
                            className={styles.contactUsBtn}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </header>
            {
                modalOpen
                    ? (
                        <React.Fragment>
                            <div className={styles.modalContactBackdrop} />
                            <div className={styles.modalBody} ref={modalRef}>
                                <div className={styles.modalBodyContainer}>

                                </div>
                            </div>
                        </React.Fragment>
                    )
                    : null
            }
        </React.Fragment>
    );
}

export default Header;