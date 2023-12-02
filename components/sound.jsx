import React, { useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { AiFillSound } from "react-icons/ai";
import styles from '@/styles/Home.module.css';

const AudioPlayer = ({id_sound}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const youtubePlayer = useRef(null);

  const togglePlayPause = () => {
    if (youtubePlayer.current && playerReady) {
      if (isPlaying) {
        youtubePlayer.current.pauseVideo();
      } else {
        youtubePlayer.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const opts = {
    height: '1',
    width: '1',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <YouTube
        videoId={id_sound}  // Reemplaza con el ID del video de YouTube
        opts={opts}
        onReady={(event) => {
          youtubePlayer.current = event.target;
          setPlayerReady(true);
        }}
      />

      <button className={styles.sound} onClick={togglePlayPause}>
        <AiFillSound />
        {isPlaying ? 'Pausar' : 'Reproducir'}
      </button>
    </div>
  );
};

export default AudioPlayer;

