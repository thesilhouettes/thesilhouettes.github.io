export const layout = "tag_list.njk";

const tags = [
  "software",
  "programming",
  "computer science",
  "math",
  "fun",
  "music",
  "culture",
  "language",
  "games",
  "others",
];

export default function* () {
  for (const tag of tags) {
    yield {
      url: `/tags/${tag}/index.html`,
      tag,
    };
  }
}
