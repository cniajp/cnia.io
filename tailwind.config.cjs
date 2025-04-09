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
        // PEK2025 colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: 'hsl(var(--primary) / 0.05)',
          100: 'hsl(var(--primary) / 0.1)',
          200: 'hsl(var(--primary) / 0.2)',
          500: 'hsl(var(--primary) / 0.5)',
          600: 'hsl(var(--primary) / 0.6)',
          700: 'hsl(var(--primary) / 0.7)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          50: 'hsl(var(--secondary) / 0.05)',
          100: 'hsl(var(--secondary) / 0.1)',
          600: 'hsl(var(--secondary) / 0.6)',
          700: 'hsl(var(--secondary) / 0.7)',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          600: 'hsl(var(--accent) / 0.6)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          50: 'hsl(var(--accent) / 0.05)',
          100: 'hsl(var(--accent) / 0.1)',
          500: 'hsl(var(--accent) / 0.5)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
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
