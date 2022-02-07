import React, { useContext, useRef } from "react";
import styles from "./styles/PlayList.module.css";
import Audios from "./Audios";
import { musicContext } from "./context/MusicApiContext";

const PlayList = (props) => {
  const {musicData} = useContext(musicContext);
  const musicList = musicData?.tracks?.data;

  return (
   <div className={styles.playList}>
      <ul className={styles.audioList}>
        <li>
          {musicList?.map((track) => (
            <Audios
              key={track.id}
              audioSrc={track.preview}
              cover={track.album.cover}
              title={track.title_short}
              info={track.album.title}
            />
          ))}
        </li>
      </ul>
    </div>
    
  );
};

export default PlayList;
