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
        pek2025: {
          border: 'hsl(var(--pek2025-border))',
          input: 'hsl(var(--pek2025-input))',
          ring: 'hsl(var(--pek2025-ring))',
          background: 'hsl(var(--pek2025-background))',
          foreground: 'hsl(var(--pek2025-foreground))',
          primary: {
            DEFAULT: 'hsl(var(--pek2025-primary))',
            foreground: 'hsl(var(--pek2025-primary-foreground))',
            50: 'hsl(var(--pek2025-primary) / 0.05)',
            100: 'hsl(var(--pek2025-primary) / 0.1)',
            200: 'hsl(var(--pek2025-primary) / 0.2)',
            500: 'hsl(var(--pek2025-primary) / 0.5)',
            600: 'hsl(var(--pek2025-primary) / 0.6)',
            700: 'hsl(var(--pek2025-primary) / 0.7)',
          },
          secondary: {
            DEFAULT: 'hsl(var(--pek2025-secondary))',
            foreground: 'hsl(var(--pek2025-secondary-foreground))',
            50: 'hsl(var(--pek2025-secondary) / 0.05)',
            100: 'hsl(var(--pek2025-secondary) / 0.1)',
            600: 'hsl(var(--pek2025-secondary) / 0.6)',
            700: 'hsl(var(--pek2025-secondary) / 0.7)',
          },
          tertiary: {
            DEFAULT: 'hsl(var(--pek2025-accent))',
            foreground: 'hsl(var(--pek2025-accent-foreground))',
            600: 'hsl(var(--pek2025-accent) / 0.6)',
          },
          accent: {
            DEFAULT: 'hsl(var(--pek2025-accent))',
            foreground: 'hsl(var(--pek2025-accent-foreground))',
            50: 'hsl(var(--pek2025-accent) / 0.05)',
            100: 'hsl(var(--pek2025-accent) / 0.1)',
            500: 'hsl(var(--pek2025-accent) / 0.5)',
          },
          destructive: {
            DEFAULT: 'hsl(var(--pek2025-destructive))',
            foreground: 'hsl(var(--pek2025-destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--pek2025-muted))',
            foreground: 'hsl(var(--pek2025-muted-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--pek2025-popover))',
            foreground: 'hsl(var(--pek2025-popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--pek2025-card))',
            foreground: 'hsl(var(--pek2025-card-foreground))',
          },
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
