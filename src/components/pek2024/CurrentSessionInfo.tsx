import { useEffect, useState } from 'react';
import type { ForteeTimeTableTalk } from '~/types';
import * as forteeHelper from '~/utils/fortee';

export const CurrentSessionInfo = ({
  timeTable,
  track,
  debug = false,
}: {
  timeTable: ForteeTimeTableTalk[];
  track: 'Track A' | 'Track B';
  debug?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [debugTime] = useState<Date>(new Date());
  const [currentSession, setCurrentSession] = useState<ForteeTimeTableTalk | undefined>(undefined);
  const [nextSession, setNextSession] = useState<ForteeTimeTableTalk | undefined>(undefined);

  const debugData: ForteeTimeTableTalk[] = [];
  // デバッグ用のデータを生成
  if (debug) {
    // セッション時間10秒, 休憩時間10秒のインターバルでタイムテーブルを書き換える
    let count = 0;
    for (let i = 0; i < timeTable.length; i++) {
      const item = timeTable[i];
      if (item.type === 'talk' && item.track.name === 'Track A') {
        debugData.push({
          ...item,
          starts_at: new Date(debugTime.getTime() + 20 * 1000 * count).toISOString(),
          length_min: 1 / 6,
        });
        count++;
      }
    }
    // 実際のタイムテーブルと同じように、Track B は後半から始まるようにする
    count = 3;
    for (let i = 0; i < timeTable.length; i++) {
      const item = timeTable[i];
      if (item.type === 'talk' && item.track.name === 'Track B') {
        debugData.push({
          ...item,
          starts_at: new Date(debugTime.getTime() + 20 * 1000 * count).toISOString(),
          length_min: 1 / 6,
        });
        count++;
      }
    }
  }

  // hh:mm 形式にフォーマットする関数
  const formatTime = (date: Date): string => {
    return Intl.DateTimeFormat('ja-JP', {
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  };
  useEffect(() => {
    const getCurrentSession = () => {
      const now = new Date();
      const _currentSession = (debug ? debugData : timeTable).find((session) => {
        const startTime = new Date(session.starts_at);
        // starts_at から length_min 分後の時間を取得する
        const endTime = new Date(startTime.getTime() + session.length_min * 60 * 1000);
        // 現在の時間がセッションの開始時間から終了時間の間にあるかつ、トラックが一致するか
        return startTime <= now && now <= endTime && session.track.name === track;
      });
      if (_currentSession !== undefined) {
        setCurrentSession(_currentSession);
        setNextSession(undefined);
      } else {
        const _nextSession = (debug ? debugData : timeTable).find((session) => {
          const startTime = new Date(session.starts_at);
          // 現在の時間より後で、トラックが一致するセッションを取得する
          // 時系列順にソートされているので、最初に見つかったセッションが次のセッション
          return startTime > now && session.track.name === track;
        });
        setNextSession(_nextSession);
        setCurrentSession(undefined);
      }
    };
    getCurrentSession();
    // 5秒おきに現在の時間を取得して、それに応じて表示を変更する
    const intervalId = setInterval(() => {
      getCurrentSession();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [track]);
  const session = currentSession || nextSession;

  return (
    session !== undefined && (
      <div className="card h-full flex flex-col justify-between bg-white rounded-lg p-2 relative group">
        {nextSession && currentSession === undefined && (
          <div>
            <div className="flex items-center flex-col mb-2 bg-gray-200 rounded p-2">
              <p className="text-sm text-slate-600">次のセッションは</p>
              <p className="text-lg font-bold text-slate-600">
                {formatTime(new Date(session.starts_at))} から開始します
              </p>
            </div>
            <p className="text-xs">次のセッションは</p>
          </div>
        )}
        <div>
          <h3 className="text-md font-bold">{session.title}</h3>
        </div>
        <div className="flex flex-wrap items-center mt-1">
          {session.tags.map((tag, i) => {
            // 全角と半角のカッコとその中身を除去
            const processedText = tag.text.replace(/\s*[(（].*?[)）]\s*/g, '').trim();
            return (
              <p
                key={i}
                className="px-1.5 py-0.5 mr-2 mb-2 rounded"
                style={{
                  fontSize: '14px',
                  backgroundColor: tag.backgroundColor,
                  color: tag.color,
                }}
              >
                {processedText}
              </p>
            );
          })}
        </div>
        {currentSession && nextSession === undefined && (
          <div className="flex items-center">
            <p className="text-sm text-gray-500">
              セッション時間: {formatTime(new Date(session.starts_at))} ~{' '}
              {formatTime(new Date(new Date(session.starts_at).getTime() + session.length_min * 60 * 1000))}
            </p>
          </div>
        )}
        <div className="flex items-center mt-2">
          <img
            src={session.speaker.avatar_url}
            alt={`${session.speaker.name}のアイコン`}
            style={{ borderRadius: '50%' }}
            width={50}
            height={50}
          />
          <div className="ml-2">
            <p className="text-sm font-bold">{session.speaker.name}</p>
            <p className="text-xs">{forteeHelper.getAffiliation(session.speaker.kana)}</p>
          </div>
        </div>
        <div className="mt-2 text-sm">
          <span className="font-bold">トーク概要：</span>
          <span className={`${!isExpanded && 'hidden'}`}>{forteeHelper.getTalkAbstract(session.abstract)}</span>
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-themeColor-blue underline px-1">
            {!isExpanded ? '表示' : '非表示'}
          </button>
        </div>
      </div>
    )
  );
};
