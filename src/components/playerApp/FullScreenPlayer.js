import React, { useContext } from "react";
import styles from "./styles/FullScreenPLayer.module.css";
import AudioControls from "./AudioControls";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
//Context
import { musicContext } from "./context/MusicApiContext";

const FullScreenPlayer = (props) => {
  // States from context
  const { favorites, addToFavorites } = useContext(musicContext);
  // Destructure for conciseness
  const {
    id,
    cover,
    title,
    artist,
    isPlaying,
    toPrevTrack,
    toNextTrack,
    setIsPlaying,
    trackProgress,
    duration,
    onScrub,
    onScrubEnd,
    trackStyling,
  } = props.currentState;
  //Return true if track exist in favorites list
  const existInFavorites = favorites.find((fav) => fav.id === id);

  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={styles.artistCover} />
      <section className={styles.infoLikeContainer}>
        <div className={styles.musicInfo}>
          <h2>{title}</h2>
          <p>{artist}</p>
        </div>
        <button
          id={id}
          className={existInFavorites ? styles.likeChecked : styles.likeUnCheck}
          onClick={addToFavorites}>
          <Icon icon="wpf:like" />
        </button>
      </section>
      <div className={styles.audioProgress}>
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </div>
      <div className={styles.btnContainer}>
        <Link to="/favorites">
          <Icon
            icon="carbon:user-favorite-alt-filled"
            className={styles.liked}
          />
        </Link>
        <div className={styles.controlBtn}>
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
          />
        </div>
        <Link to="/playlist">
          <Icon
            icon="bx:bxs-playlist"
            className={styles.list}
          />
        </Link>
      </div>
    </div>
  );
};

export default FullScreenPlayer;
