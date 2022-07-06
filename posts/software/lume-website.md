---
title: Lume, the static site generator (first post!)
date: 2022-07-03
tags: ["programming"]
layout: post.njk
featured: true
url: /posts/lume-website/index.html
---

## Introduction

Yes, this is my first post, and I am very excited. For the next couple of days,
the reader may see a half-dozen of posts. Why? I have scribbled some posts
before I started this site, and I am planing on releasing them. The dates in
this website are just publishing dates.

## Lume

Back to topic. What is Lume? Lume is a static site generator. You may be
wondering why another SSG since there are loads of them in the market. However,
Lume is pretty special since this is the first, and probably the only SSG
written in Deno.

## Interlude: Deno

In case you have not heard of Deno, it is a rewrite of Node. Due to Node's
popularity, people have been creating packages and uploading them to NPM
relentlessly. I have heard people playing "drinking games", which they will pick
an English word to see if it corresponds to a JavaScript library, if it is, they
need to drink a cup of water (or whatever).

With this immense amount of packages, a problem thus emerges. The quality of the
programs vary. The worse thing is that some people release malicious programs
(!!)
(see [this protestware](https://www.lunasec.io/docs/blog/node-ipc-protestware/))

So Mr. Ryan Dahl, the man behind Node.js, developed Deno. It

- is secure by default. You need permissions to access the file system and make HTTP requests etc.
- does not use NPM so no more `node_modules`, everything is imported by URL
- runs TypeScript programs without transpilation

To be honest I do not really care about if Lume is written for Deno. Finding
third-party modules in Deno is not so easy compared to Node. I had to use some
magic to include packages from NPM for markdown plugins. (see `_config.ts`)

## Is Lume Great?

Absolutely. It is my greatest joy to write in TypeScript instead of JavaScript.
I just never understand the rationale behind dynamic-typed languages. Deno is
such a live saver for me.

Some people write their blogs with React or some heavy JavaScript frameworks.
With Lume, you only output pure HTML (and your assets), say goodbye to single
page soy-dev "blogs". Can you imagine writing a blog with Gatsby?? Eww. (just
kidding, Gatsby is designed for large sites, not poor little blogs)

By default, Lume uses Nunjucks as their templating engine. I never liked
templating HTML, but this is an inescapable step if you are writing static
sites. At least, Nunjucks works great for me. I do not have any special about
Nunjucks since every templating engine looks similar.

The documentation is too terse. Sometimes I just hope they can explain more and
provide some examples. Occasionally I have to dump the variables to HTML (by the
way Nunjucks is very good at doing so) and figure out the properties.

## Final Words

I have spent the past two days writing this site, and it is already done. Now, I
just need to deploy it and hope the styles do not mess up. I have linked the
homepage of Lume in the footer. If you are interested, definitely try to build
sites with Lume. You will probably like it more than Eleventy or Jekyll.
