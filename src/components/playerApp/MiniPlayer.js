import React, { useContext, useEffect, useState } from "react";
import styles from "./styles/MiniPlayer.module.css";
import { Icon } from "@iconify/react";
import defaultCover from "./assets/musicLogo.png";
//context
import { musicContext } from "./context/MusicApiContext";

const MiniPlayer = (props) => {
  const { musicData } = useContext(musicContext);
  const { cover, title1, info, audioSrc } = musicData;


  return (
    <div className={styles.container}>
      <div className={styles.turnToFull}>
        <button onClick={() => props.turnToFull()}></button>
      </div>
      <div className={styles.top}>
        <div
          className={styles.artistCover}
          style={{
            backgroundImage: cover ? `url(${cover})` : `url(${defaultCover})`,
          }}></div>
        <div className={styles.left}>
          <h1>{title1}</h1>
          <div className={styles.controlBtn}>
            <Icon
              icon="ic:round-skip-next"
              hFlip={true}
              className={styles.prev}
            />
            <Icon
              icon="fluent:pause-circle-24-filled"
              className={styles.pause}
            />
            <Icon icon="ic:round-skip-next" className={styles.next} />
          </div>
        </div>
      </div>
      <div className={styles.audioProgress}>
        <input type="range" />
      </div>
    </div>
  );
};

export default MiniPlayer;
