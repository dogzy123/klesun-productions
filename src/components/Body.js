import React from "react";
import styles from "../styles/main.module.scss";

function Body() {

    return (
        <main className={styles.mainSection}>
            <section className={styles.introSection}>
                <div className={styles.introSectionInner}>
                    <h1 className={styles.introSectionTitle}>klesun-productions</h1>
                </div>
            </section>
            <section className={styles.secondarySection}>
                <div className={styles.container}>
                    <div className={styles.secondarySectionMain}>
                        <div className={styles.secondarySectionMainContainer}>
                            <div className={styles.secondarySectionMainHeader}>
                                <h3 className={styles.secondarySectionMainTitle}>Programming odd jobs.</h3>
                            </div>
                            <div className={styles.secondarySectionMainDescription}>
                                <p className={styles.secondarySectionMainText}>
                                    A "write a program for me" service. Taking orders of any scale on any technology.
                                    The job price is case-to-case matter of discussion, but in general it's around $20 per estimated working hour.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondaryPointsDivider}>
                        <div className={styles.secondaryPointsDividerPoint} style={{borderColor: '#7e94e4'}} />
                        <div className={styles.secondaryPointsDividerPoint} style={{borderColor: '#87a9bf'}}/>
                        <div className={styles.secondaryPointsDividerPoint} style={{borderColor: '#8db7a6'}}/>
                    </div>
                    <div className={styles.secondarySectionColumns}>
                        <div className={styles.secondarySectionInnerColumn}>
                            <div className={styles.secondaryColumnContainer}>
                                <div className={styles.secondaryColumnContainerHeader}>
                                    <h2 className={styles.secondaryColumnContainerTitle}>Title number one</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.secondarySectionInnerColumn}>
                            <div className={styles.secondaryColumnContainer}>
                                <div className={styles.secondaryColumnContainerHeader}>
                                    <h2 className={styles.secondaryColumnContainerTitle}>Title number two</h2>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.lastSection}>
                <div className={styles.container}>
                    <div className={styles.secondarySectionMain}>
                        <div className={styles.lastSectionMainContainer}>
                            <div className={styles.secondarySectionMainHeader}>
                                <h3 className={styles.secondarySectionMainTitle}>Programming odd jobs.</h3>
                            </div>
                            <div className={styles.secondarySectionMainDescription}>
                                <p className={styles.secondarySectionMainText}>
                                    A "write a program for me" service. Taking orders of any scale on any technology.
                                    The job price is case-to-case matter of discussion, but in general it's around $20 per estimated working hour.
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