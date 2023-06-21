import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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
    }
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  ],
};
  
export const footerData = {
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
  ],
  footNote: `
    Copyright &copy; 一般社団法人クラウドネイティブイノベーターズ協会
  `,
};
