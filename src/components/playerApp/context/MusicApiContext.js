import axios from "axios";
import React, { useEffect, useState, createContext } from "react";

export const musicContext = createContext();
const MusicApiContext = (props) => {
  const [musicData, setMusicData] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/track/1562681",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "5480f5b92cmsh8e709d9e2d96596p1ac83bjsn018fea8509af",
      },
    };

    axios
      .request(options)
      .then((response) => setMusicData(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(musicData);

  return (
    <div>
      <musicContext.Provider value={musicData}>
        {props.children}
      </musicContext.Provider>
    </div>
  );
};

export default MusicApiContext;
