

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const videoId = 'jNqhUIYZM8Q'; // Replace with your unlisted video ID
  const apiKey = 'AIzaSyAoYbI043n3ICQNNLmygPaMFvRMKWrDzBA'; // Replace with your YouTube Data API key

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`)
      .then((response) => {
        setVideoInfo(response.data.items[0].snippet);
      })
      .catch((error) => {
        console.error('Error fetching video information:', error);
      });
  }, [videoId, apiKey]);

  return (
    <div className="App">
      {videoInfo && (
        <div>
          <h1>{videoInfo.title}</h1>
          <VideoPlayer videoId={videoId} />
        </div>
      )}
    </div>
  );
};

export default App;

