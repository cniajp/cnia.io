import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '#',
    },
    {
      text: 'Activity',
      href: '#activity',
    },
    {
      text: 'PFEM',
      href: '#pfem',
    },
    {
      text: 'FAQ',
      href: '#faq',
    },
  ]
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
    Copyright &copy; Cloud Native Innovators Association
  `,
};
