import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/#about',
    },
    {
      text: 'Activity',
      href: '/#activity',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'PFEM',
      href: '/pfem',
      links: [
        {
          text: 'PFEMトップ',
          href: '/pfem',
        },
        {
          text: '過去セッション一覧',
          href: '/pfem/sessions',
        },
      ],
    },
    {
      text: 'PEK2025',
      href: '/pek2025',
    },
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  ],
};

export const footerData = {
  secondaryLinks: [
    { text: 'プライバシーポリシー', href: getPermalink('/privacy') },
    { text: 'お問い合わせ', href: getPermalink('/form') },
  ],
  socialLinks: [],
  footNote: `
    Copyright &copy; 一般社団法人クラウドネイティブイノベーターズ協会
  `,
};
