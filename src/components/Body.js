import React from "react";
import styles from "../styles/main.module.scss";

function Body() {
    return (
        <main className={styles.mainSection}>
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <div className={styles.introSectionMain}>
                        <div className={styles.introSectionMainContainer}>
                            <div className={styles.introSectionMainHeader}>
                                <h3 className={styles.introSectionTitle}>Programming odd jobs.</h3>
                            </div>
                            <div className={styles.introSectionMainDescription}>
                                <p className={styles.sectionMainText}>
                                    A "write a program for me" service. Taking orders of any scale on any technology.
                                    The job price is case-to-case matter of discussion, but in general it's around $20 per estimated working hour.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.introPointsDivider}>
                        <div className={styles.introPointsDividerPoint} />
                        <div className={styles.introPointsDividerPoint} />
                        <div className={styles.introPointsDividerPoint} />
                    </div>
                    <div className={styles.introSectionColumns}>
                        <div className={styles.introSectionInnerColumn}>
                            <div className={styles.introColumnContainer}>
                                <div className={styles.introColumnContainerHeader}>
                                    <h2 className={styles.introColumnContainerTitle}>What exactly we do?</h2>
                                    <p>Ever had a genius money-maker idea, but had no programming knowledge to implement it? You've come to right place</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.introSectionInnerColumn}>
                            <div className={styles.introColumnContainer}>
                                <div className={styles.introColumnContainerHeader}>
                                    <h2 className={styles.introColumnContainerTitle}>Title number two</h2>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.lastSection}>
                <div className={styles.container}>
                    <div className={styles.lastSectionMain}>
                        <div className={styles.lastSectionMainContainer}>
                            <div className={styles.introColumnContainerHeader}>
                                <h3 className={styles.lastSectionMainTitle}>Dirty deeds done dirty cheep.</h3>
                            </div>
                            <div className={styles.secondarySectionMainDescription}>
                                <p className={styles.lastSectionParagraph}>
                                    To make an order, you can contact us on safronevev@gmail.com (email address subject to change)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Body;