import { parse } from "flag";
import { ensureDir } from "fs";
import { basename, dirname, join } from "path";

const parsed = parse(Deno.args);

if (parsed._.length === 0) {
  console.error("Sorry! You must provide a file path for it to work!");
  Deno.exit(1);
}

const stringed = parsed._.map((elem) => elem.toString());

const filename = stringed[0].toString();

const filepath = join("posts", filename);

function capitalize(str: string) {
  const parts = str.split(" ");
  let result = "";
  for (const part of parts) {
    result += part[0].toUpperCase() + part.slice(1) + " ";
  }
  return result.slice(0, -1);
}

function createTags(arr: string[]) {
  if (arr.length === 0) {
    return "[]";
  }
  let result = "[";
  for (const elem of arr) {
    result += `"${elem}", `;
  }
  return result.slice(0, -2) + "]";
}

const basepath = basename(filename).replace(/\.[a-zA-Z]*$/, "");

function makeTitle() {
  return capitalize(basepath.replaceAll(/-/g, " "));
}

function zeroPad(num: number) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num.toString();
  }
}

// generate the text
console.log(filename);
let frontmatter = "---\n";
frontmatter += `title: ${makeTitle()}\n`;
const today = new Date();
frontmatter += `date: ${today.getFullYear()}-${zeroPad(
  today.getMonth() + 1
)}-${zeroPad(today.getDate())}\n`;
frontmatter += `tags: ${createTags(stringed.slice(1))}\n`;
frontmatter += `layout: post.njk\n`;
frontmatter += `url: /posts/${basepath}/index.html\n`;
frontmatter += `---\n`;

// check if the folder is created, if not create them
const dirs = dirname(filepath);
await ensureDir(dirs);
await Deno.writeTextFile(filepath, frontmatter);

console.log("File generated");
