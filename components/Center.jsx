import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useRecoilValue } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";

const colors = [
  "from-indigo-500",
  "from-red-500",
  "from-blue-500",
  "from-green-500",
  "from-pink-500",
  "from-purple-500",
  "from-yellow-500",
];

const Center = () => {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center space-x-3 bg-red-400 opacity-90 hover:opacity-80 rounded-full cursor-pointer p-1 pr-2">
          <img
            className="w-10 h-10 rounded-full"
            src={session?.user?.image}
            alt=""
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-br to-black ${color} h-80 text-white padding-8`}
      >
        <h1>alt</h1>
      </section>
    </div>
  );
};

export default Center;
