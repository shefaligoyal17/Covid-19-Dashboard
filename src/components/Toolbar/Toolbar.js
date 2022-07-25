import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/NavbarItems";
import { Link } from "react-router-dom";

const Toolbar = (props) => {
  return (
    <div className={styles.Toolbar}>
      <div className={styles.Logo}>
        <Link to="/" className={styles.Link}>
          <Logo />
          <span className={styles.Sitetag}>COVID'19</span>
        </Link>
      </div>

      <Navbar />
    </div>
  );
};

export default Toolbar;
