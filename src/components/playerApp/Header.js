import React, { useState } from "react";
import styles from "./styles/Header.module.css";
import { musicLogo } from "./assets/index.js";
import { Icon } from "@iconify/react";

const Header = () => {
  const [searchInput, setSearchInput] = useState({
    isActive: false,
  });

  const searchHandler = () => {
    setSearchInput({
      isActive: !searchInput.isActive,
    });
  };

  const findHandler = () => {
    setSearchInput({
      isActive: !searchInput.isActive,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={musicLogo} alt="logo" />
      </div>
      <div className={styles.searchContaienr}>
        <input
          type="text"
          placeholder="Find music.."
          className={searchInput.isActive ? styles.inputShow : styles.inputHide}
        />
        <button className={styles.searchIcon}>
          {searchInput.isActive ? (
            <Icon icon="feather:search" onClick={findHandler} />
          ) : (
            <Icon icon="feather:search" onClick={searchHandler} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
