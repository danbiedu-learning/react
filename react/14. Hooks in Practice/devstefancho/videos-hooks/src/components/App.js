import React, { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useSearch from "../hooks/useSearch";

const App = () => {
  const [selectedVideo, setSelectedVideos] = useState(null);
  const [videos, search] = useSearch("buildings");

  useEffect(() => {
    setSelectedVideos(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
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
