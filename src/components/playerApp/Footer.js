import React from 'react';
import styles from "./styles/Footer.module.css";
import { Icon } from "@iconify/react";
import { musicLogo } from "./assets/index.js";



const Footer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={musicLogo} alt="logo" />
        </div>
        <div className={styles.searchContaienr}>
         
          
        </div>
      </div>
    );
};

export default Footer;