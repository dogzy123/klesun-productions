import React from "react";
import classNames from "classnames";
import Modal from "./Modal";
import styles from "../styles/main.module.scss";

function Header() {
    const [modalOpen, setModalOpen] = React.useState(false);

    function handleClick (e) {
        setModalOpen( prevState => !prevState );
    }

    function close () {
        setModalOpen(false);
    }

    return (
        <React.Fragment>
            <header className={styles.header}>
                <div className={classNames(styles.container, styles.headerContainer)}>
                    <div className={styles.logoContainer}>
                        <a href='https://klesun-productions.com/' className={styles.logoLink}>
                            <span className={styles.logoImage} />
                            <span className={styles.logoTitleFirst}>klesun-</span>
                            <span className={styles.logoTitleLast}>productions</span>
                        </a>
                    </div>
                    <div className={styles.headerBlockDivider} />
                    <div className={styles.contactUsContainer}>
                        <button
                            onClick={handleClick}
                            className={styles.klesunBtn}
                        >
                            Order Software
                        </button>
                    </div>
                </div>
            </header>
            <Modal
                open={modalOpen}
                onClose={close}
            />
        </React.Fragment>
    );
}

export default Header;