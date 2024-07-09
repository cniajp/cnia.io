import { useEffect, useState } from "react";
import { CurrentSessionInfo } from "./CurrentSessionInfo";
import type { ForteeTimeTableTalk } from "~/types"


type Track = 'Track A' | 'Track B';
// TODO: url を実際のものに変更
const YOUTUBE_URLS: Record<Track, string> = {
  'Track A': 'https://www.youtube.com/embed/53tNbf8Us78?si=5NFRLNaQk207yymx&autoplay=1&mute=1',
  'Track B': 'https://www.youtube.com/embed/Hsob6TGTAPo?si=OuEuLS9NTyNmBxCm&autoplay=1&mute=1'
}

const OPENING_TIME = {
  start_time: '2024-07-09T10:10:00+09:00',
  end_time: '2024-07-09T10:20:00+09:00',
}
const EVENT_END_TIME = '2024-07-09T18:00:00+09:00';
const DEBUG = false;

export const LivePlayer = (
  {
    timeTable
  }: {
    timeTable: ForteeTimeTableTalk[]
  }
) => {
  const [
    track,
    setTrack,
  ] = useState<Track>('Track A');
  const [
    isOpening,
    setIsOpening
  ] = useState<boolean>(false);
  const [
    isEventStarted,
    setIsEventStarted
  ] = useState<boolean>(false);
  const [
    debugTime
  ] = useState<Date>(new Date());
  // hh:mm 形式にフォーマットする関数
  const formatTime = (date: Date): string => {
    return Intl.DateTimeFormat('ja-JP', {
      hour: 'numeric',
      minute: 'numeric',
    }).format(date)
  }

  useEffect(() => {
    const checkOpening = () => {
      const currentTime = new Date();
      // DEBUG モードの場合、Opening 開始時間を10秒後、終了時間を20秒後に設定
      const openingStartTime = !DEBUG ? new Date(OPENING_TIME.start_time) : new Date(debugTime.getTime() + 10 * 1000);
      const openingEndTime = !DEBUG ? new Date(OPENING_TIME.end_time) : new Date(debugTime.getTime() + 20 * 1000);
      // DEBUG モードの場合、イベント終了時間を200秒後に設定
      const eventEndTime = !DEBUG ? new Date(EVENT_END_TIME) : new Date(debugTime.getTime() + 200 * 1000);

      setIsOpening(currentTime >= openingStartTime && currentTime <= openingEndTime);
      setIsEventStarted(currentTime > openingStartTime && currentTime < eventEndTime);
    };
    const intervalId = setInterval(checkOpening, 5000);
    
    return () => {
      clearInterval(intervalId);
    }
  }, []);

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
      <div className="w-full md:w-3/4">
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
      {
        // イベント開催中の場合、セッション情報を表示
        isEventStarted && (
          <div className="w-full md:w-3/4 mt-4" slot="actions">
            {
              // Opening 時間の場合、Opening 情報を表示
              isOpening ? (
                <div className="flex items-center flex-col mb-2 bg-gray-200 rounded p-2">
                  <p className="text-xl font-bold text-slate-600">Opening</p>
                  <p className="text-lg font-bold text-slate-600">
                    {formatTime(new Date(OPENING_TIME.start_time))} 〜 {formatTime(new Date(OPENING_TIME.end_time))}
                  </p>
                </div>
              ) : 
              // 現在時刻に応じてセッション情報を表示
              <CurrentSessionInfo
                timeTable={timeTable}
                track={track}
                debug={DEBUG}
              />
            }
          </div>
        )
      }
    </div>
};