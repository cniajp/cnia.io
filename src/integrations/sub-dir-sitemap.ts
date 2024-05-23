import type { AstroIntegration } from "astro";
import { SitemapStream } from "sitemap";
import { createWriteStream } from "fs";
import { fileURLToPath } from "url";

export const subDirSitemap = (options: {outputDir: string, basePath: string}): AstroIntegration => {
  const { outputDir, basePath } = options;
  return {
    name: "cnia.io/sitemap",
    hooks: {
      "astro:build:done": async ({ dir, pages }) => {
        const hostname = "https://www.cnia.io/";
        const sms = new SitemapStream({
          hostname,
        });
        const excludeSlugs = ["404"];
        const destinationDir = fileURLToPath(dir);
        const outputFileName =  outputDir + "/sitemap.xml";

        pages.forEach(({ pathname }) => {
          const slug = pathname.slice(0, -1);
          if (excludeSlugs.includes(slug)) {
            return;
          }
          if (pathname.startsWith(basePath)) {
            sms.write(hostname + pathname);
          }
        });
        sms.end();
        sms.pipe(createWriteStream(destinationDir + outputFileName));

        console.log(`%s${outputFileName} is generated!\n`, "\x1b[32m");
      },
    },
  };
};
