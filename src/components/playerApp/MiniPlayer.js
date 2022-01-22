import React from "react";
import styles from "./styles/MiniPlayer.module.css";
import { Icon } from "@iconify/react";

const MiniPlayer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.close}>
        <button></button>
      </div>
      <div className={styles.top}>
        <div className={styles.artistCover}>cover</div>
        <div className={styles.left}>
          <h1>music name</h1>
          <p>music info</p>
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
