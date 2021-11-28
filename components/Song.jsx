import useSpotify from "../hooks/useSpotify";
import Image from "next/image";
import { millisToMinutesAndSeconds } from "../lib/time";
const Song = ({ order, track }) => {
  const spotifyApi = useSpotify();
  const { track: song } = track;
  console.log(song);

  return (
    <div className="grid grid-cols-2 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer">
      <div className="flex item-center space-x-4">
        <p>{order + 1}</p>
        <img className="h-10 w-10" src={song.album.images[0].url} alt="" />
        <div>
          <p className="w-36 lg:w-64 truncate">{song.name}</p>
          <p className="w-40">{song.artists[0].name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-white ml-auto md:ml-0">
        <p className="w-40 hidden md:inline">{song.album.name}</p>
        <p>{millisToMinutesAndSeconds(song.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
