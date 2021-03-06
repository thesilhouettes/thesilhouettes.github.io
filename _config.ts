import bracketSpan from "https://jspm.dev/markdown-it-bracketed-spans";
import texMath from "https://jspm.dev/markdown-it-texmath";
import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import imagick from "lume/plugins/imagick.ts";
import sass from "lume/plugins/sass.ts";
import search from "lume/plugins/search.ts";

const site = lume(
  {
    server: {
      page404: "./404.html",
    },
    location: new URL("https://thesilhouettes.github.io"),
  },
  {
    markdown: {
      plugins: [texMath, bracketSpan],
      keepDefaultPlugins: true,
    },
  }
);

site.copy("assets");
site.copy("styles");

site.use(code_highlight());
site.use(imagick());
site.use(sass());
site.use(search());
site.use(
  date({
    formats: {
      BRIT_DATE: "dd/MM/yyyy",
      // e.g. 2003-12-13T18:30:02Z
      RSS_ATOM_DATE: "yyyy-MM-dd'T'HH:mm:ssxxxxx",
      RSS_ATOM_SHORT: "yyyy-MM-dd",
    },
  })
);

export default site;
