import React from 'react';
import Header from './Header';
import MusicPlayer from "./MusicPlayer"
import Footer from "./Footer"
import styles from "./styles/PlayerApp.module.css"

const PlayerApp = () => {
    return (
        <div className={styles.playerApp}>
            <Header/>
            <MusicPlayer/>
            <Footer/>
        </div>
    );
};

export default PlayerApp;