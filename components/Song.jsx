import useSpotify from "../hooks/useSpotify";
import { millisToMinutesAndSeconds } from "../lib/time";
import { useRecoilState } from "recoil";
import { CurrentTrackIdState, isPlayingState } from "../atoms/SongAtom";

const Song = ({ order, track }) => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(CurrentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const { track: song } = track;

  const playSong = () => {
    setCurrentTrackId(song.id);
    setIsPlaying(true);
    // spotifyApi.play({
    //   uris: [song.uri],
    // });
  };

  return (
    <div
      className="grid grid-cols-2 py-4 px-5 text-gray-500 hover:bg-gray-900 rounded-lg cursor-pointer"
      onClick={playSong}
    >
      <div className="flex item-center space-x-4">
        <p>{order + 1}</p>
        <img className="h-10 w-10" src={song.album.images[0].url} alt="" />
        <div>
          <p className="w-36 lg:w-64 text-white truncate">{song.name}</p>
          <p className="w-40">{song.artists[0].name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between  ml-auto md:ml-0">
        <p className="w-40 hidden md:inline">{song.album.name}</p>
        <p>{millisToMinutesAndSeconds(song.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
