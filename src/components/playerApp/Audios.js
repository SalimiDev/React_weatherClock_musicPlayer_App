import React, { useState, useRef, useContext } from "react";
import styles from "./styles/Audios.module.css";
import { Icon } from "@iconify/react";
import defaultCover from "./assets/musicLogo.png";
//context
import { musicContext } from "./context/MusicApiContext";

const Audios = (props) => {
  //context
  const { currentMusicData, setCurrentMusicData } = useContext(musicContext);
  //state
  const [favorite, setFavorite] = useState({ isChecked: false });
  const [isplaying, setPlay] = useState(false);
  // Destructure for conciseness
  const { cover, title, info, audioSrc } = props;
   //refs
  const audio = useRef(new Audio(audioSrc));
  audio.current.preload = "none";
  //onclick handler
  const favoriteHandler = () => {setFavorite({ isChecked: !favorite.isChecked })};
const playHandler = () => {
    setPlay(!isplaying);
    isplaying ? audio.current.pause() : audio.current.play();

    setCurrentMusicData({
      ...currentMusicData,
      cover: cover,
      title1: title,
      info: info,
      audioSrc: audioSrc,
      audio: audio.current.duration,
      isPlaying: isplaying,
    });
  };
  
  return (
    <div className={styles.container} onClick={playHandler}>
      <div
        className={styles.artistCover}
        style={{
          backgroundImage: cover ? `url(${cover})` : `url(${defaultCover})`,
        }}></div>

      <div className={styles.musicInfo}>
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
      <button
        name="favorite"
        className={favorite.isChecked ? styles.likeChecked : styles.likeUnCheck}
        onClick={favoriteHandler}>
        <Icon icon="wpf:like" />
      </button>
    </div>
  );
};

export default Audios;
