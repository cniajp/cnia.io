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
      text: 'PFEM',
      href: '/pfem',
    },
    {
      text: 'FAQ',
      href: '/#faq',
    },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  ],
};
  
export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  ],
  footNote: `
    Copyright &copy; クラウドネイティブイノベーターズ協会
  `,
};
