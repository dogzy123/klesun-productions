import React from "react";
import classNames from "classnames";
import styles from "../styles/main.module.scss";

function Footer() {
    return (
        <footer className={styles.footerMain}>
            <div className={classNames(styles.container, styles.footerContainer)}>
                <div className={classNames(styles.footerRow, styles.linksRow)}>
                    <div className={styles.linksColumn}>
                        <h4 className={styles.linksTitle}>Development</h4>
                        <ul className={styles.links}>
                            <li>
                                <a href='#'>Github</a>
                            </li>
                            <li>
                                <a href='#'>Stackowerflow</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h4 className={styles.linksTitle}>Social</h4>
                        <ul className={styles.links}>
                            <li>
                                <a href='#'>Facebook</a>
                            </li>
                            <li>
                                <a href='#'>Instagram</a>
                            </li>
                            <li>
                                <a href='#'>Twitter</a>
                            </li>
                            <li>
                                <a href='#'>LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h4 className={styles.linksTitle}>Information</h4>
                        <ul className={styles.links}>
                            <li>
                                <a href='#'>About Us</a>
                            </li>
                            <li>
                                <a href='#'>Privacy Policy</a>
                            </li>
                            <li>
                                <a href='#'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerRow}>
                    <div className={styles.copyright}>
                        <h4 className={styles.copyrightText}>Copyright © klesun-productions 2019</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;