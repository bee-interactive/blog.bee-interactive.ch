import fs from 'fs'
import ReactDOMServer from 'react-dom/server'
import { MDXProvider } from '@mdx-js/react'
import { Feed } from 'feed'

import { mdxComponents } from '../src/components/Post'
import { getAllPosts } from '../src/getAllPostPreviews'

const siteUrl = 'https://blog.bee-interactive.ch'

const feed = new Feed({
  title: 'Bee Interactive Blog',
  description: 'Toutes les dernières actualités de Bee Interactive.',
  id: siteUrl,
  link: siteUrl,
  language: 'fr',
  image: `${siteUrl}/favicon-32x32.png`,
  favicon: `${siteUrl}/favicon.ico`,
  copyright: `Tous droits réservés ${new Date().getFullYear()}, Bee Interactive`,
  feedLinks: {
    rss: `${siteUrl}/feed.xml`,
    json: `${siteUrl}/feed.json`,
    atom: `${siteUrl}/atom.xml`,
  },
  author: {
    name: 'Yves Engetschwiler',
    link: 'https://twitter.com/@yvedesign',
  },
})

getAllPosts().forEach(({ link, module: { meta, default: Content } }) => {
  const mdx = (
    <MDXProvider components={mdxComponents}>
      <Content />
    </MDXProvider>
  )
  const html = ReactDOMServer.renderToStaticMarkup(mdx)
  const postText = `<p><em>(le post <a href="${siteUrl + link}">${
    meta.title
  }</a> est apparu en premier sur <a href="${siteUrl}">Bee Interactive Blog</a>.)</em></p>`
  feed.addItem({
    title: meta.title,
    id: meta.title,
    link: siteUrl + link,
    description: meta.description,
    content: html + postText,
    author: meta.authors.map(({ name, twitter }) => ({
      name,
      link: `https://twitter.com/${twitter}`,
    })),
    date: new Date(meta.date),
    image: siteUrl + meta.image,
    ...(meta.discussion
      ? {
          comments: meta.discussion,
          extensions: [
            {
              name: '_comments',
              objects: {
                about: 'Link to discussion forum',
                comments: meta.discussion,
              },
            },
          ],
        }
      : {}),
  })
})

fs.writeFileSync('./out/feed.xml', feed.rss2())
fs.writeFileSync('./out/atom.xml', feed.atom1())
fs.writeFileSync('./out/feed.json', feed.json1())
