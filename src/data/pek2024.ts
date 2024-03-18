export const sessionsList = [
  {
    id: 999,
    title: 'タイトル',
    abstract: '概要\r\n\r\n概要',
    talkDifficulty: '初級者',
    talkCategory: 'Culture',
    videoUrl: '',
    documentUrl: '',
    speakers: [
      {
        name: 'Name',
        imagePath: 'imagePathName.{jpeg,jpg,png,gif}',
        company: 'Company Name',
        jobTitle: 'Job Title',
        profile: '登壇者プロフィール',
        githubId: 'GitHub Id',
        twitterId: 'Twitter Id',
      },
    ],
    status: 'sample', // pek2024_data.js の sessionStatus と同じ値の時にSession一覧に表示される
  },
];
