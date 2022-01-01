import React from "react";
import styles from "./MainTemplate.module.css";
//Components

const MainTemplate = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.clockContainer}>
        clock and celender and weather
      </div>
      <div className={styles.musicAppContainer}>MusicApp</div>
    </div>
  );
};

export default MainTemplate;
