export const layout = "tag_list.njk";

const tags = [
  "computing",
  "programming",
  "math",
  "fun",
  "music",
  "culture",
  "language",
  "games",
];

export default function* () {
  for (const tag of tags) {
    yield {
      url: `/tags/${tag}/index.html`,
      tag,
    };
  }
}
