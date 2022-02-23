import React from "react";
import styles from "./styles/PlayerApp.module.css";
import Header from "./Header";
import AudioPlayer from "./AudioPlayer";
import Footer from "./Footer";
import tracks from "./tracks";

const PlayerApp = () => {
  return (
    <div className={styles.playerApp}>
      <header className={styles.header}>
        <Header />
      </header>
      <body className={styles.body}>
        <AudioPlayer tracks={tracks} />
      </body>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default PlayerApp;
