import React, { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideos] = useState(null);

  useEffect(() => {
    onSubmit("buildings"); //default search
  }, []);

  const onSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideos(response.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
