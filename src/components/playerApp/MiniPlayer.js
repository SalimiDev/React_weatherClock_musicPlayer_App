import React from "react";
import styles from "./styles/MiniPlayer.module.css";
import { Link } from "react-router-dom";
//Components
import AudioControls from "./AudioControls";

const MiniPlayer = (props) => {
  // Destructure for conciseness
  const {
    cover,
    title,
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

  return (
    <div className={styles.container}>
      <div className={styles.turnToFull}>
        <Link to="/">
          <button></button>
        </Link>
      </div>
      <div className={styles.top}>
        <img src={cover} alt={title} className={styles.artistCover} />
        <div className={styles.titleBtnContainer}>
          <h2>{title}</h2>
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
          />
        </div>
      </div>
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
    </div>
  );
};

export default MiniPlayer;
