import React from "react";
import styles from "../styles/main.module.scss";

function Header() {
    console.log(styles);
    return (
        <header className={styles.header}></header>
    );
}

export default Header;