import React from 'react';
import styles from "./styles/PlayList.module.css"
import Audios from './Audios';
import MiniPlayer from "./MiniPlayer";

const PlayList = () => {
    return (
      <div className={styles.playList}>
        <div className={styles.audioList}>
          <Audios />
        </div>
        <MiniPlayer />
      </div>
    );
};

export default PlayList;