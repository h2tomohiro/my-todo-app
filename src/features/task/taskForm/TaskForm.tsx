import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./Task.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <form className={styles.form} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="New Task" variant="outlined" />
      </form>
    </div>
  );
};

export default Header;
