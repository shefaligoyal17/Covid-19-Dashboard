import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavbarItem.module.css";
import Aux from "../../../hoc/Wrap/Wrap";

const NavbarItem = (props) => {
  return (
    <Aux>
      <li className={styles.NavbarList}>
        <NavLink
          className={styles.NavbarEle}
          to={props.link} 
          activeClassName={styles.active}
          exact={props.exact}
        >
          {props.children}
        </NavLink>
      </li>
    </Aux>
  );
};

export default NavbarItem;
