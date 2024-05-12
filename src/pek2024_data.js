import { getPermalink } from './utils/permalinks';
const today = new Date();

export const sessionStatus = 'proposal';

export const headerData = {
  links: [
    {
      text: 'HOME',
      href: '/pek2024',
    },
    {
      text: 'ABOUT',
      href: '/pek2024#about',
    },
    {
      text: 'SPONSORS',
      href: '/pek2024#sponsors',
    },
    {
      text: 'JOBS',
      href: '/pek2024/jobs',
    },
    {
      text: 'INFORMATION',
      href: '/pek2024#info',
    },
    {
      text: 'SCHEDULE',
      href: '/pek2024/schedules',
    },
    {
      text: 'SPEAKERS',
      href: '/pek2024/speakers',
    },
    {
      text: 'BLOG',
      href: '/pek2024/blog',
    },
    // {
    //   text: 'TimeTable',
    //   href: '/pek2024/timetable',
    // },
    // {
    //   text: 'JobBoard',
    //   href: '/pek2024/jobboard',
    // },
    // {
    //   text: 'Staff',
    //   href: '/pek2024/staff',
    // },
    {
      text: 'CODE OF CONDUCT',
      href: '/pek2024/codeOfConduct',
    },
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  ],
};

export const footerData = {
  title: 'Platform Engineering Kaigi 2024',
  titleLink: getPermalink('/pek2024'),
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'HOME', href: getPermalink('/pek2024') },
        { text: 'ABOUT', href: getPermalink('/pek2024#about') },
        { text: 'SPONSORS', href: getPermalink('/pek2024#sponsors') },
        { text: 'INFORMATION', href: getPermalink('/pek2024#info') },
        { text: 'BLOG', href: getPermalink('/pek2024/blog') },
        { text: 'CODE OF CONDUCT', href: getPermalink('/pek2024/codeOfConduct') },
      ],
    },
    {
      title: 'Sessions',
      links: [
        { text: 'SESSIONS', href: getPermalink('/pek2024/sessions') },
        { text: 'SPEAKERS', href: getPermalink('/pek2024/speakers') },
        // { text: 'TIME TABLE', href: getPermalink('/pek2024/timeTable') },
      ],
    },
  ],
  secondaryLinks: [{ text: 'CONTACT', href: 'https://forms.gle/NZ3d3r4wCBytBmWt9' }],
  socialLinks: [],
  footNote: ` © ${today.getFullYear()} Platform Engineering Kaigi Team / All rights reserved.`,
};

// スポンサーデータ
export const sponsorsData = {
  Platinum: [
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
  ],
  Gold: [
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
  ],
  Silver: [
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
  ],
  Bronze: [
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
  ],
  Lunch: [
    { name: 'XXX', src: import('~/assets/images/pek2024/pek2024_horizontal.png'), href: 'https://www.cnia.io/' },
  ],
};
