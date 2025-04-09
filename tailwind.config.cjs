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
            50: "#e6f3fb",
            100: "#cce7f7",
            200: "#99cfef",
            300: "#66b7e7",
            400: "#339fdf",
            500: "#0087d7",
            600: "#006FB8", // 指定された青色
            700: "#005a93",
            800: "#00426e",
            900: "#002c49",
            950: "#001624",
          },
          secondary: {
            DEFAULT: 'hsl(var(--pek2025-secondary))',
            foreground: 'hsl(var(--pek2025-secondary-foreground))',
            50: "#f0f0f7",
            100: "#e1e1ef",
            200: "#c3c3df",
            300: "#a5a5cf",
            400: "#8787bf",
            500: "#6969af",
            600: "#5F5F9D", // 指定された紫色
            700: "#4c4c7e",
            800: "#39395e",
            900: "#26263f",
            950: "#13131f",
          },
          tertiary: {
            DEFAULT: "#ED951D", // 指定されたオレンジ色
            50: "#fef7eb",
            100: "#fdefd7",
            200: "#fbdfaf",
            300: "#f9cf87",
            400: "#f7bf5f",
            500: "#f5af37",
            600: "#ED951D", // 指定されたオレンジ色
            700: "#be7717",
            800: "#8e5911",
            900: "#5f3c0b",
            950: "#2f1e06",
          },
          accent: {
            DEFAULT: 'hsl(var(--pek2025-accent))',
            foreground: 'hsl(var(--pek2025-accent-foreground))',
            50: "#fef9e6",
            100: "#fdf3cc",
            200: "#fbe799",
            300: "#f9db66",
            400: "#f7cf33",
            500: "#F4BD00", // 指定された黄色
            600: "#c39700",
            700: "#927100",
            800: "#624c00",
            900: "#312600",
            950: "#191300",
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
