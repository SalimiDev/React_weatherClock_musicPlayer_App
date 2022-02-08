import React, { useState } from "react";
import styles from "./styles/PlayerBody.module.css";
import BigPlayer from "./BigPlayer";
import PlayList from "./PlayList";
import MiniPlayer from "./MiniPlayer";

const PlayerBody = () => {
  const [turnToFull, setTurnToFull] = useState(true);
  const turnToFullHandler = () => {
    setTurnToFull(!turnToFull);
  };

  return (
    <div className={styles.body}>
      {turnToFull ? (
        <div>
          <PlayList />
          <MiniPlayer turnToFull={turnToFullHandler} />
        </div>
      ) : (
        <BigPlayer turnToFull={turnToFullHandler} />
      )}
    </div>
  );
};

export default PlayerBody;
