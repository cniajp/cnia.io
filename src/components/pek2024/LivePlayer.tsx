import { useState } from "react";

type Track = 'Track A' | 'Track B';
// TODO: url を実際のものに変更
const YOUTUBE_URLS: Record<Track, string> = {
  'Track A': 'https://www.youtube.com/embed/SNffM5YJ8t8?si=mMTrdIOMZJCMh3wl',
  'Track B': 'https://www.youtube.com/embed/93f7oRkDvJQ?si=HYs3ulAkD2Uy9pl8'
}

export const LivePlayer = () => {
  const [
    track,
    setTrack,
  ] = useState<Track>('Track A');

  return <div className="flex flex-col items-center w-full">
      <div className="flex justify-center my-4 w-full">
        <button
          className={`w-1/2 md:w-1/4 mx-1 px-4 py-2 rounded-md ${track === 'Track A' ? 'bg-themeColor-purple' : 'bg-gray-300'}`}
          onClick={() => setTrack('Track A')}
        >
          <p className="text-lg font-semibold text-white text-center">Track A</p>
        </button>
        <button
          className={`w-1/2 md:w-1/4 mx-1 px-4 py-2 rounded-md ${track === 'Track B' ? 'bg-themeColor-orange' : 'bg-gray-300'}`}
          onClick={() => setTrack('Track B')}
        >
          <p className="text-lg font-semibold text-white text-center">Track B</p>
          
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <iframe
          src={YOUTUBE_URLS[track]}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video w-full h-auto"
        >
        </iframe>
      </div>
    </div>
};