import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import tracks from "../tracks";

//Export the Music Data Using Context.
export const musicContext = createContext();

const MusicApiContext = ({children}) => {
  //API State
  const [musicData, setMusicData] = useState({ status: true });
  //Local music State
  const [favorites, setFavorites] = useState([]);
  const [favListBtn, setFavListBtn] = useState(false);
  // Get saved data from Local storage
  const getStorage = JSON.parse(localStorage.getItem("favoriteTracks") || "0");
  useEffect(() => {
    if (getStorage !== 0) {
      setFavorites([...getStorage]);
    }
  }, []);

  //Set toggle Onclick to Add or remove musics from favorite list
  const toFavorites = (e) => {
    const favArray = favorites;
    const targetId = parseInt(e.currentTarget.id);
    const favTrack = favorites.filter((el) => el.id === targetId)[0];

    //Remove track from favorite list
    if (targetId === favTrack?.id) {
      const index = favorites.indexOf(favTrack);
      favArray.splice(index, 1);
    } else {
      favArray.push(tracks[targetId]);
    }
    setFavorites([...favArray]);
    localStorage.setItem("favoriteTracks", JSON.stringify(favorites));
  };
  //Set onClick for button to toggle rendering between favorite list and playlist
  const toFavList = () => {
    setFavListBtn(!favListBtn);
  };

  //Get data from Api
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/playlist/5339994342",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "5480f5b92cmsh8e709d9e2d96596p1ac83bjsn018fea8509af",
    },
  };

  if (musicData) {
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
  const context = {
    musicData: musicData,
    setMusicData: setMusicData,
    toFavorites: toFavorites,
    favorites: favorites,
    setFavorites: setFavorites,
    favListBtn: favListBtn,
    setFavListBtn: setFavListBtn,
    toFavList: toFavList,
  };

  return (
    <div>
      <musicContext.Provider
        value={context}>
        {children}
      </musicContext.Provider>
    </div>
  );
};

export default MusicApiContext;
//"https://deezerdevs-deezer.p.rapidapi.com/playlist/5339994342"
//"https://deezerdevs-deezer.p.rapidapi.com/playlist/785141981"
