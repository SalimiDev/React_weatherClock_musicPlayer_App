import React, { useState, useEffect, useRef} from "react";
import styles from "./styles/PlayerBody.module.css";
import FullScreenPlayer from "./FullScreenPlayer";
import PlayList from "./PlayList";
import MiniPlayer from "./MiniPlayer";

const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fullScreen, setFullScreen] = useState(true);
  // Destructure for conciseness
  const { title, artist, color, cover, audioSrc } = tracks[trackIndex];
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

  const toFullScreen = () => {
    setFullScreen(!fullScreen);
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
    toFullScreen: toFullScreen,
  };

  return (
    <div className={styles.body}>
      {fullScreen ? (
        <div>
          <PlayList tracks={tracks} currentState={currentState} />
          <MiniPlayer currentState={currentState} />
        </div>
      ) : (
        <FullScreenPlayer currentState={currentState} />
      )}
    </div>
  );
};

export default AudioPlayer;
