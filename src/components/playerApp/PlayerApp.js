import React from "react";
import styles from "./styles/PlayerApp.module.css";
import Header from "./Header";
import AudioPlayer from "./AudioPlayer";
import Footer from "./Footer";
import tracks from "./tracks";


const PlayerApp = () => {
  

  return (
    <div className={styles.playerApp}>
      <Header />
      <AudioPlayer tracks={tracks} />
      <Footer />
    </div>
  );
};;

export default PlayerApp;
