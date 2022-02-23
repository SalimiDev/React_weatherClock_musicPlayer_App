import React, { useContext } from "react";
import styles from "./styles/PlayList.module.css";
import AudiosCard from "./AudioCard";
//Context
import { musicContext } from "./context/MusicApiContext";

const PlayList = ({ tracks, currentState }) => {
  // States from context
  const { addToFavorites, favorites, favListBtn, searchedWord } =
    useContext(musicContext);

  return (
    <div className={styles.playList}>
      <ul className={styles.audioList}>
        {favListBtn
          ? favorites.map((track) => (
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
            ))
          : tracks
              .filter((track) =>
                searchedWord === ""
                  ? track
                  : `${track.title}${track.artist}`
                      .toLowerCase()
                      .includes(searchedWord.toLowerCase())
              )

              .map((track) => (
                <li key={track.id}>
                  <AudiosCard
                    id={track.id}
                    audioSrc={track.audioSrc}
                    cover={track.cover}
                    title={track.title}
                    artist={track.artist}
                    favExist={favorites.find((fav) => fav.id === track.id)}
                    currentState={currentState}
                    toFavorites={(onclick = () => addToFavorites)}
                  />
                </li>
              ))}
      </ul>
    </div>
  );
};

export default PlayList;
