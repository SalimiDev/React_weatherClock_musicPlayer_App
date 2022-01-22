import React, { useState } from "react";
import styles from "./styles/BigPlayer.module.css";
import { Icon } from "@iconify/react";

const BigPlayer = () => {
  const [favorite, setFavorite] = useState({
    isChecked: false,
  });

  const likeHandler = () => {
    setFavorite({
      isChecked: !favorite.isChecked,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.artistCover}></div>
      <div className={styles.musicInfo}>
        <h2>Hello world</h2>
        <button
          className={
            favorite.isChecked ? styles.likeChecked : styles.likeUnCheck
          }
          onClick={likeHandler}>
          <Icon icon="wpf:like" />
        </button>
      </div>
      <div className={styles.audioProgress}>
        <input type="range" min={"0"} max={"100"} />
      </div>
      <div className={styles.controlBtn}>
        <Icon icon="carbon:user-favorite-alt-filled" className={styles.liked} />
        <Icon icon="ic:round-skip-next" hFlip={true} className={styles.prev} />
        <Icon icon="fluent:pause-circle-24-filled" className={styles.pause} />
        <Icon icon="ic:round-skip-next" className={styles.next} />
        <Icon icon="bx:bxs-playlist" className={styles.list} />
      </div>
    </div>
  );
};

export default BigPlayer;
