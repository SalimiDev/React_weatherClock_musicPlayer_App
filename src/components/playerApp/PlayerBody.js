import React from 'react';
import styles from "./styles/PlayerBody.module.css"
import BigPlayer from "./BigPlayer";
import PlayList from './PlayList';

const PlayerBody = () => {
    return (
        <div className={styles.body}>
            <PlayList/>
            <BigPlayer />
        </div>
    );
};

export default PlayerBody;