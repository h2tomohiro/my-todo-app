import React from "react";
import Header from "./components/header/Header";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
      </div>
    </div>
  );
};

export default App;
