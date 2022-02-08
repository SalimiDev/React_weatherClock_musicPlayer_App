import axios from "axios";
import React, {  useState, createContext } from "react";
//Export the Music Data Using Context.
export const musicContext = createContext();

const MusicApiContext = (props) => {
  const [musicData, setMusicData] = useState({ status: true });
  const [currentMusicData, setCurrentMusicData] = useState({});

  console.log(musicData);

  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/playlist/5339994342",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "5480f5b92cmsh8e709d9e2d96596p1ac83bjsn018fea8509af",
    },
  };

  if (musicData.status) {
    const getData = async () => {
      const response = await axios.request(options);

      return response.data;
    };
    getData();
    const fetchAPI = async () => {
      setMusicData(await getData());
    };
    fetchAPI();
  }

  return (
    <div>
      <musicContext.Provider
        value={{
          musicData,
          setMusicData,
          currentMusicData,
          setCurrentMusicData,
        }}>
        {props.children}
      </musicContext.Provider>
    </div>
  );
};

export default MusicApiContext;
//"https://deezerdevs-deezer.p.rapidapi.com/playlist/5339994342"
//"https://deezerdevs-deezer.p.rapidapi.com/playlist/785141981"
