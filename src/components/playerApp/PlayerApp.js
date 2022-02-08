import React from "react";
import styles from "./styles/PlayerApp.module.css";
import Header from "./Header";
import PlayerBody from "./PlayerBody";
import Footer from "./Footer";

const PlayerApp = () => {
  return (
    <div className={styles.playerApp}>
      <Header />
      <PlayerBody/>
      <Footer />
    </div>
  );
};

export default PlayerApp;
