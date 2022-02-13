import React from "react";
import styles from "./styles/PlayList.module.css";
import AudiosCard from "./AudioCard";

const PlayList = ({ tracks, currentState }) => {
  return (
    <div className={styles.playList}>
      <ul className={styles.audioList}>
        <li>
          {tracks.map((track) => (
            <AudiosCard
              key={track.id}
              id={track.id}
              audioSrc={track.audioSrc}
              cover={track.cover}
              title={track.title}
              artist={track.artist}
              currentState={currentState}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default PlayList;
