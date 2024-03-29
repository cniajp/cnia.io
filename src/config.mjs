import defaultImage from '../public/cnia_ogp.png';

const CONFIG = {
  name: '一般社団法人クラウドネイティブイノベーターズ協会',

  origin: 'https://www.cnia.io',
  basePathname: '/',
  trailingSlash: false,

  title: '一般社団法人クラウドネイティブイノベーターズ協会',
  description: 'クラウドネイティブ技術の発展・推進を支援するための一般社団法人です。',
  defaultImage: defaultImage,

  defaultTheme: 'light:only', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'ja',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('ja', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'JST',
  }),

  googleAnalyticsId: 'G-7YM9MHRMVM', // or false
  googleSiteVerificationId: 'foBATuG3bM4VH87zge4cdjnrJDjf2qOz-A0v4hGsQVg',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
