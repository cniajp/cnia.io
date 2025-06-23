// 年度別API URL生成
export const getForteeApiUrl = (year: number) => `https://fortee.jp/platform-engineering-kaigi-${year}/api/proposals`;

// 会社名/所属団体名
export const getAffiliation = (str: string) => {
  const affiliationRegex = /■会社名\/所属団体名 - Company\/Organizations□\s*(.*?)(\s*■|$)/g;
  const affiliationMatch = affiliationRegex.exec(str);
  const affiliation = affiliationMatch ? affiliationMatch[1].trim() : '';
  return affiliation;
};

// 役職
export const getJobTitle = (str: string) => {
  const jobTitleRegex = /■役職 - Job Title□\s*(.*?)(\s*■|$)/g;
  const jobTitleMatch = jobTitleRegex.exec(str);
  const jobTitle = jobTitleMatch ? jobTitleMatch[1].trim() : '';
  return jobTitle;
};

// スピーカープロフィール
export const getSpeakerProfile = (str: string) => {
  const speakerProfileRegex =
    /■スピーカープロフィール \(200文字以内\) - Biography \(Less than 400 letters\)□\s*(.*?)(\s*■|$)/s;
  const speakerProfileMatch = speakerProfileRegex.exec(str);
  const speakerProfile = speakerProfileMatch ? speakerProfileMatch[1].trim() : '';
  return speakerProfile;
};

// トーク概要
export const getTalkAbstract = (str: string) => {
  const abstractRegex = /■ トーク概要 \(400文字以内\) - Abstract \(Less than 800 letters\)□\s*(.*?)(\s*■|$)/s;
  const abstractMatch = abstractRegex.exec(str);
  const talkAbstract = abstractMatch ? abstractMatch[1].trim() : '';
  return talkAbstract;
};
