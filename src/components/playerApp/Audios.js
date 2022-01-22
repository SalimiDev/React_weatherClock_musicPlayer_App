import React from "react";
import styles from "./styles/Audios.module.css"

const Audios = () => {
  return (
 <div className={styles.container}>
     <div className={styles.artistCover}>cover</div>
     
     <div className={styles.musicInfo}>
         <h3>music title</h3>
         <p>music info</p>
     </div>
     <div className= {styles.likeBtn}>
         favorite btn
     </div>

 </div>
  );
};

export default Audios;
