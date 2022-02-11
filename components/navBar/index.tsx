import React, { useState } from "react";
import { navBarItems } from "./consts";
import styles from "./styles.module.scss";

const NavBar = () => {
  const [isMobileNavListVisible, setIsMobileNavListVisible] =
    useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navListWrapper}>
        {navBarItems.map((el, idx) => {
          if (idx === 1) {
            return (
              <>
                <li key={idx} className={styles.navItem}>
                  <a>{el}</a>
                </li>
                <li className={styles.navBarLogo}>
                  <img src="assets/images/logo.svg" width="80px" />
                </li>
              </>
            );
          }
          return (
            <li key={idx} className={styles.navItem}>
              <a>{el}</a>
            </li>
          );
        })}
      </ul>
      {isMobileNavListVisible && (
        <ul className={styles.navListMobileWrapper}>
          {navBarItems.map((el, idx) => {
            return (
              <li key={idx} className={styles.navMobileItem}>
                <a>{el}</a>
              </li>
            );
          })}
        </ul>
      )}
      <button
        className={styles.navMobileMenuIcon}
        onClick={() => setIsMobileNavListVisible(!isMobileNavListVisible)}
      >
        x
      </button>
    </nav>
  );
};

export default NavBar;
