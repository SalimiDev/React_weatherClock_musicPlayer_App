import React, { useState, useContext } from "react";
import styles from "./styles/Header.module.css";
import { musicLogo } from "./assets/index.js";
import { Icon } from "@iconify/react";
//Context
import { musicContext } from "./context/MusicApiContext";

const Header = () => {
  // States from context
  const { setFullScreen, setSearchedWord, setFavListBtn } =
    useContext(musicContext);
  // Local States
  const [searchBtn, setSearchBtn] = useState(false);

  const SearchBtnClickHandler = () => {
    setSearchBtn(!searchBtn);
    setFullScreen(true);
    setFavListBtn(false)
  };
  const searchInputOnFocus = () => {
    setSearchBtn(true);
    setFullScreen(true);
    setFavListBtn(false);
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
          className={searchBtn ? styles.inputShow : styles.inputHide}
          onChange={(e) => setSearchedWord(e.target.value)}
          onFocus={searchInputOnFocus}
        />
        <button className={styles.searchIcon}>
          <Icon icon="feather:search" onClick={SearchBtnClickHandler} />
        </button>
      </div>
    </div>
  );
};

export default Header;
