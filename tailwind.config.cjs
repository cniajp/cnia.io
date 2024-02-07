const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        themeColor: {
          blue: '#006FB8',
          purple: '#5F5F9D',
          orange: '#ED951D',
          yellow: '#F4BD00',
        },
      },
      fontFamily: {
        sans: [
          'Quicksand',
          '游ゴシック体',
          'Yu Gothic',
          'YuGothic',
          'ヒラギノ角ゴシック Pro',
          'Hiragino Kaku Gothic Pro',
          'メイリオ',
          'Meiryo',
          'Osaka',
          'ＭＳ Ｐゴシック',
          'MS PGothic',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: [
          'Quicksand',
          '游ゴシック体',
          'Yu Gothic',
          'YuGothic',
          'ヒラギノ角ゴシック Pro',
          'Hiragino Kaku Gothic Pro',
          'メイリオ',
          'Meiryo',
          'Osaka',
          'ＭＳ Ｐゴシック',
          'MS PGothic',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
