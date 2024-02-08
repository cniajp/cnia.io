import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/pek2024',
    },
    {
      text: 'Sessions',
      href: '/pek2024/sessions',
    },
    {
      text: 'TimeTable',
      href: '/pek2024/timetable',
    },
    {
      text: 'JobBoard',
      href: '/pek2024/jobboard',
    },
    {
      text: 'Staff',
      href: '/pek2024/staff',
    },
    {
      text: 'Policies',
      href: '/pek2024/policies',
    },
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'プライバシーポリシー', href: getPermalink('/privacy') },
    { text: 'お問い合わせ', href: getPermalink('/form') },
  ],
  socialLinks: [],
  footNote: `
    Copyright &copy; 一般社団法人クラウドネイティブイノベーターズ協会
  `,
};

// スポンサーデータ
export const sponsorsData = {
  Diamond: [
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
  ],
  Platinum: [
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
  ],
  Gold: [
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
  ],
  Silver: [
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
  ],
  Bronze: [
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_holizontal.png'), href: 'https://www.cnia.io/' },
  ],
};

// スポンサーランクごとのグリッド設定
export const rankGridSettings = {
  Diamond: { default: '1', md: '1' },
  Platinum: { default: '1', md: '2' },
  Gold: { default: '2', md: '2' },
  Silver: { default: '2', md: '4' },
  Bronze: { default: '3', md: '4' },
};
