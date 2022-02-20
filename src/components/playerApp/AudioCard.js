import React from "react";
import styles from "./styles/AudioCard.module.css";
import { Icon } from "@iconify/react";

const AudioCard = (props) => {
  // Destructure for conciseness
  const { title, artist, cover, id, toFavorites, favExist } = props;
  const { setIsPlaying, setTrackIndex } = props.currentState;
  //Set onClick to play music with click on tracks in playlist
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
        id={id}
        onClick={toFavorites()}
        name="favorite"
        className={favExist ? styles.likeChecked : styles.likeUnCheck}>
        <Icon icon="wpf:like" />
      </button>
    </div>
  );
};

export default AudioCard;
