import React from 'react';
import styles from "./styles/app.scss";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
      <div className={styles.app}>
        <Header />
        <Body />
      </div>
  );
}

export default App;