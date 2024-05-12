import { type PEK2024Proposal } from '../../types';

// 会社名/所属団体名
export const getAffiliation = (session: PEK2024Proposal) => {
  const affiliationRegex = /■会社名\/所属団体名 - Company\/Organizations□\s*(.*?)(\s*■|$)/g;
  const affiliationMatch = session?.speaker.kana ? affiliationRegex.exec(session.speaker.kana) : null;
  const affiliation = affiliationMatch ? affiliationMatch[1].trim() : '';
  return affiliation;
};

// 役職
export const getJobTitle = (session: PEK2024Proposal) => {
  const jobTitleRegex = /■役職 - Job Title□\s*(.*?)(\s*■|$)/g;
  const jobTitleMatch = session?.speaker.kana ? jobTitleRegex.exec(session.speaker.kana) : null;
  const jobTitle = jobTitleMatch ? jobTitleMatch[1].trim() : '';
  return jobTitle;
};

// スピーカープロフィール
export const getSpeakerProfile = (session: PEK2024Proposal) => {
  const speakerProfileRegex =
    /■スピーカープロフィール \(200文字以内\) - Biography \(Less than 400 letters\)□\s*(.*?)(\s*■|$)/s;
  const speakerProfileMatch = session.abstract ? speakerProfileRegex.exec(session.abstract) : null;
  const speakerProfile = speakerProfileMatch ? speakerProfileMatch[1].trim() : '';
  return speakerProfile;
};

// トーク概要
export const getTalkAbstract = (session: PEK2024Proposal) => {
  const abstractRegex = /■ トーク概要 \(400文字以内\) - Abstract \(Less than 800 letters\)□\s*(.*?)(\s*■|$)/s;
  const abstractMatch = session.abstract ? abstractRegex.exec(session.abstract) : null;
  const talkAbstract = abstractMatch ? abstractMatch[1].trim() : '';
  return talkAbstract;
}