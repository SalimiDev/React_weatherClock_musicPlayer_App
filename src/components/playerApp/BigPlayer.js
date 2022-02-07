import React, { useState, useContext } from "react";
import styles from "./styles/BigPlayer.module.css";
import { Icon } from "@iconify/react";
//Context
import { musicContext } from "./context/MusicApiContext";

const BigPlayer = (props) => {
  const { musicData } = useContext(musicContext);

  const [favorite, setFavorite] = useState({
    isChecked: false,
  });
  const { cover, title1, info, audioSrc } = musicData;

  const likeHandler = () => {
    setFavorite({
      isChecked: !favorite.isChecked,
    });
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.artistCover}
        style={{
          backgroundImage: `url(${cover})`,
        }}></div>
      <div className={styles.musicInfo}>
        <h2>{title1}</h2>

        <button
          className={
            favorite.isChecked ? styles.likeChecked : styles.likeUnCheck
          }
          onClick={likeHandler}>
          <Icon icon="wpf:like" />
        </button>
      </div>
      <br />
      <p>{info}</p>
      <div className={styles.audioProgress}>
        <input type="range" min={"0"} max={"100"} />
      </div>
      <div className={styles.controlBtn}>
        <Icon icon="carbon:user-favorite-alt-filled" className={styles.liked} />
        <Icon icon="ic:round-skip-next" hFlip={true} className={styles.prev} />
        <Icon icon="fluent:pause-circle-24-filled" className={styles.pause} />
        <Icon icon="ic:round-skip-next" className={styles.next} />
        <Icon
          icon="bx:bxs-playlist"
          className={styles.list}
          onClick={() => props.turnToFull()}
        />
      </div>
    </div>
  );
};

export default BigPlayer;
