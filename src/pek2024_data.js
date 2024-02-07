import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/pek2024',
    },
    {
      text: 'TimeTable',
      href: '/pek2024/timetable',
    },
    {
      text: 'Sponsors',
      href: '/pek2024/sponsors',
    },
    {
      text: 'FAQ',
      href: '/pek2024/faq',
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
