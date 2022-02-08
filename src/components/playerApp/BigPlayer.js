import React, { useState, useContext } from "react";
import styles from "./styles/BigPlayer.module.css";
import AudioControls from "./AudioControls";
import { Icon } from "@iconify/react";
import defaultCover from "./assets/musicLogo.png";
//Context
import { musicContext } from "./context/MusicApiContext";

const BigPlayer = (props) => {
  const { currentMusicData } = useContext(musicContext);

  const [favorite, setFavorite] = useState({
    isChecked: false,
  });
  const { cover, title1, info, audioSrc } = currentMusicData;

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
          backgroundImage: cover ? `url(${cover})` : `url(${defaultCover})`,
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
      <div className={styles.btnContainer}>
        <Icon icon="carbon:user-favorite-alt-filled" className={styles.liked} />
        <div className={styles.controlBtn}>
          <AudioControls />
        </div>
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
