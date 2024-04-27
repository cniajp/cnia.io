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
          blue: 'var(--aw-themeColor-blue)',
          purple: 'var(--aw-themeColor-purple)',
          orange: 'var(--aw-themeColor-orange)',
          yellow: 'var(--aw-themeColor-yellow)',
        },
      },
      fontFamily: {
        sans: [
          'Quicksand',
          'Helvetica Neue',
          'Arial',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Meiryo',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: [
          'Quicksand',
          'Helvetica Neue',
          'Arial',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Meiryo',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
        display: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
