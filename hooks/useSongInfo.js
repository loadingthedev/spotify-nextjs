import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CurrentTrackIdState } from "../atoms/SongAtom";
import useSpotify from "./useSpotify";

const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(CurrentTrackIdState);
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentTrackId) {
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${currentTrackId}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
            },
          }
        ).then((res) => res.json());
        setSongInfo(trackInfo);
      }
    };
    fetchSongInfo();
  }, [currentTrackId, spotifyApi]);

  return songInfo;
};

export default useSongInfo;
