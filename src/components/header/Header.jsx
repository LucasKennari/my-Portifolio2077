import React from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.divHeader}>
      <header className={styles.header}>
        <ul>
          <NavLink to="/desenvolvedor">Desenvolvedor</NavLink>
          <NavLink to="/artes">artes</NavLink>
        </ul>
      </header>
      ;
    </div>
  );
};

export default Header;
