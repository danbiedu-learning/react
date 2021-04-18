import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useSearch = (defaultSearch) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearch); //default search
  }, [defaultSearch]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useSearch;
