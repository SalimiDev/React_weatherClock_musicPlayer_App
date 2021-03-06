import React, { useState, useContext } from "react";
import styles from "./styles/Header.module.css";
import { musicLogo } from "./assets/index.js";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
//Context
import { musicContext } from "./context/MusicApiContext";

const Header = () => {
  // States from context
  const { setSearchedWord } = useContext(musicContext);
  //States
  const [searchBtn, setSearchBtn] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={musicLogo} alt="logo" />
      </div>
      <div className={styles.searchContaienr}>
        <Link to="/playlist">
          <input
            type="text"
            placeholder="Find music.."
            className={searchBtn ? styles.inputShow : styles.inputHide}
            onChange={(e) => setSearchedWord(e.target.value)}
          />
        </Link>

        <button className={styles.searchIcon}>
          <Icon
            icon="feather:search"
            onClick={() => setSearchBtn(!searchBtn)}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
