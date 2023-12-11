// import React from 'react';

// function VideoPlayer({ videoId, title }) {
//   return (
//     <div className="video-player">
//       <iframe
//         title={title}
//         width="560"
//         height="315"
//         src={`https://www.youtube.com/embed/${videoId}`}
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// }

// export default VideoPlayer;

import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const VideoPlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    tag.onload = createPlayer;

    return () => {
      document.body.removeChild(tag);
    };
  }, []);

  const createPlayer = () => {
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerRef.current, {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
          'playsinline': 1
        }
      });
    };
  };

  return <div ref={playerRef}></div>;
};

export default VideoPlayer;

