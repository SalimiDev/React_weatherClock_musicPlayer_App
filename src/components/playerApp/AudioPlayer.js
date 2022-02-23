import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./styles/AudioPlayer.module.css";
import FullScreenPlayer from "./FullScreenPlayer";
import PlayList from "./PlayList";
import MiniPlayer from "./MiniPlayer";
//Context
import { musicContext } from "./context/MusicApiContext";

const AudioPlayer = ({ tracks }) => {
  // States from context
  const { favListBtn, fullScreen } = useContext(musicContext);
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { id, title, artist, color, cover, audioSrc } = tracks[trackIndex];
  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);
  // Destructure for conciseness
  const { duration } = audioRef.current;
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const currentState = {
    id: id,
    cover: cover,
    title: title,
    artist: artist,
    color: color,
    trackIndex: trackIndex,
    setTrackIndex: setTrackIndex,
    duration: duration,
    isPlaying: isPlaying,
    setIsPlaying: setIsPlaying,
    trackProgress: trackProgress,
    toPrevTrack: toPrevTrack,
    toNextTrack: toNextTrack,
    onScrub: onScrub,
    onScrubEnd: onScrubEnd,
    trackStyling: trackStyling,
  };

  return (
    <div className={styles.container}>
      {fullScreen || favListBtn ? (
        <div className={styles.playList}>
          <PlayList tracks={tracks} currentState={currentState} />
          <MiniPlayer currentState={currentState} />
        </div>
      ) : (
        <div className={styles.fullScreen}>
          <FullScreenPlayer currentState={currentState} />
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
