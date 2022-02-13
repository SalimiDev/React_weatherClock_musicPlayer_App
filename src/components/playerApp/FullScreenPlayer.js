import React, { useState } from "react";
import styles from "./styles/FullScreenPLayer.module.css";
import AudioControls from "./AudioControls";
import { Icon } from "@iconify/react";

const FullScreenPlayer = (props) => {
  const [favorite, setFavorite] = useState({
    isChecked: false,
  });
  const {
    cover,
    title,
    artist,
    color,
    isPlaying,
    toPrevTrack,
    toNextTrack,
    setIsPlaying,
    trackProgress,
    duration,
    onScrub,
    onScrubEnd,
    trackStyling,
    trackIndex,
    toFullScreen,
  } = props.currentState;

  const toFavoriteList = () => {
    setFavorite({ isChecked: !favorite.isChecked});
  };
  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={styles.artistCover} />
      <div className={styles.musicInfo}>
        <h2>{title}</h2>
        <button
          className={
            favorite.isChecked ? styles.likeChecked : styles.likeUnCheck
          }
          onClick={toFavoriteList}>
          <Icon icon="wpf:like" />
        </button>
      </div>
      <br />
      <p>{artist}</p>
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
        <Icon icon="carbon:user-favorite-alt-filled" className={styles.liked} />
        <div className={styles.controlBtn}>
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
          />
        </div>
        <Icon
          icon="bx:bxs-playlist"
          className={styles.list}
          onClick={toFullScreen}
        />
      </div>
    </div>
  );
};

export default FullScreenPlayer;
