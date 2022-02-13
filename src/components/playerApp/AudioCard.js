import React, { useState } from "react";
import styles from "./styles/AudioCard.module.css";
import { Icon } from "@iconify/react";

const AudioCard = (props) => {
  //state
  const [favorite, setFavorite] = useState({ isChecked: false });

  // Destructure for conciseness
  const { title, artist, cover, id } = props;
  const { setIsPlaying, setTrackIndex } = props.currentState;

  //onclick handler
  const toFavoriteList = () => {
    setFavorite({ isChecked: !favorite.isChecked });
  };
  const playInList = () => {
    setTrackIndex(id);
    setIsPlaying(true);
  };

  return (
    <div className={styles.container}>
      <section onClick={playInList}>
        <img src={cover} alt={title} className={styles.artistCover} />
        <span className={styles.musicInfo}>
          <h3>{title}</h3>
          <p>{artist}</p>
        </span>
      </section>
      <button
        name="favorite"
        className={favorite.isChecked ? styles.likeChecked : styles.likeUnCheck}
        onClick={toFavoriteList}>
        <Icon icon="wpf:like" />
      </button>
    </div>
  );
};

export default AudioCard;
