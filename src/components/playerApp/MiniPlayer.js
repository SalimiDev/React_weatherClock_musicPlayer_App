import React, { useContext} from "react";
import styles from "./styles/MiniPlayer.module.css";
import AudioControls from "./AudioControls";
import { Icon } from "@iconify/react";
import defaultCover from "./assets/musicLogo.png";
//context
import { musicContext } from "./context/MusicApiContext";

const MiniPlayer = (props) => {
  //Api data
  const { currentMusicData } = useContext(musicContext);

  // Destructure for conciseness
  const { cover, title1, info, audioSrc, audio, isPlaying } = currentMusicData;
// console.log(audio);

  return (
    <div className={styles.container}>
      <div className={styles.turnToFull}>
        <button onClick={() => props.turnToFull()}></button>
      </div>
      <div className={styles.top}>
        <div
          className={styles.artistCover}
          style={{
            backgroundImage: cover ? `url(${cover})` : `url(${defaultCover})`,
          }}></div>
        <div className={styles.titleBtnContainer}>
          <h1>{title1}</h1>
          <AudioControls />
        </div>
      </div>
      <div className={styles.audioProgress}>
        <input type="range" step="1" min="0" />
      </div>
    </div>
  );
};

export default MiniPlayer;
