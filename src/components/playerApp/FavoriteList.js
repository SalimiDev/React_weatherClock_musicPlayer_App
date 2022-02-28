import React, { useContext } from "react";
import styles from "./styles/PlayList.module.css";
import AudiosCard from "./AudioCard";
//Context
import { musicContext } from "./context/MusicApiContext";

const FavoriteList = ({ currentState }) => {
  // States from context
  const { addToFavorites, favorites } = useContext(musicContext);
  return (
    <div className={styles.playList}>
      <ul className={styles.audioList}>
        {favorites.map((track) => (
          <li key={track.id}>
            <AudiosCard
              id={track.id}
              audioSrc={track.audioSrc}
              cover={track.cover}
              title={track.title}
              artist={track.artist}
              favExist={true}
              currentState={currentState}
              toFavorites={(onclick = () => addToFavorites)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
