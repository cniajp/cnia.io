import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import icon from "astro-icon";
import { subDirSitemap } from "./src/integrations/sub-dir-sitemap";
import { SITE } from './src/config.mjs';
import react from "@astrojs/react";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => SITE.googleAnalyticsId ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'static',
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin]
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap({
    // pek2024 は別ディレクトリに出力するため除外
    filter: page => !page.startsWith(SITE.origin + '/pek2024')
  }), subDirSitemap({
    outputDir: "pek2024",
    basePath: "pek2024"
  }), mdx(), ...whenExternalScripts(() => partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })), icon(), react()],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});