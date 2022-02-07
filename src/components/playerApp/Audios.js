import React, { useState, useRef ,useContext} from "react";
import styles from "./styles/Audios.module.css";
import { Icon } from "@iconify/react";
import { musicContext } from "./context/MusicApiContext";

const Audios = (props) => {
  const { musicData, setMusicData } = useContext(musicContext);

  const [favorite, setFavorite] = useState({
    isChecked: false,
  });

  const likeHandler = () => {
    setFavorite({
      isChecked: !favorite.isChecked,
    });
  };
  const { cover, title, info, audioSrc } = props;

  const [audio] = useState(new Audio(audioSrc));
  const [isplay, setPlay] = useState(false);
  // const audio = useRef(new Audio(SRC));
  const playHandler = () => {
    setPlay(!isplay);
    // isplay ? audio.current.pause() : audio.current.play();
  // const audio = new Audio(SRC);

    isplay ? audio.pause() : audio.play();
    setMusicData({
      ...musicData,
      cover: cover,
      title1: title,
      info: info,
      audioSrc: audioSrc,
      audio: audio,
    });
  };

  return (
    <div className={styles.container} onClick={playHandler}>
      <div
        className={styles.artistCover}
        style={{
          backgroundImage: `url(${cover})`,
        }}></div>

      <div className={styles.musicInfo}>
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
      <button
        name="favorite"
        className={favorite.isChecked ? styles.likeChecked : styles.likeUnCheck}
        onClick={likeHandler}>
        <Icon icon="wpf:like" />
      </button>
    </div>
  );
};

export default Audios;
