import { useEffect, useState } from "react";
import youtube from "../api/youtube";

//Custom hook, it is easy to re-use this hook.
const useVideos = (defaultWord) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultWord);
  }, [defaultWord]);

  const search = async (words) => {
    const res = await youtube.get("/search", {
      params: {
        q: words,
      },
    });
    setVideos(res.data.items);
  };

  return [videos, search];
};

export default useVideos;
