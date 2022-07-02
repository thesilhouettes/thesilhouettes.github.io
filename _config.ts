import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import imagick from "lume/plugins/imagick.ts";
import sass from "lume/plugins/sass.ts";
import search from "lume/plugins/search.ts";

const site = lume({
  server: {
    page404: "./404.html",
  },
});

site.use(code_highlight());
site.use(imagick());
site.use(sass());
site.use(search());

export default site;
