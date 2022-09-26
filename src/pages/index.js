import Moment from 'moment'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'

Moment.locale('fr')

const posts = getAllPostPreviews()

export default function Home() {
  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yvesdesign" />
        <meta name="twitter:creator" content="@yvesdesign" />
        <meta name="twitter:title" content="Blog – Bee Interactive" />
        <meta name="twitter:description" content="Toutes les dernières actualités de Bee Interactive." />
        <meta name="twitter:image" content={`https://blog.bee-interactive.ch${twitterCard}`} />
        <meta property="og:url" content="https://blog.bee-interactive.ch" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Bee Interactive" />
        <meta property="og:description" content="Toutes les dernières actualités de Bee Interactive." />
        <meta property="og:image" content={`https://blog.bee-interactive.ch${twitterCard}`} />
        <title>Blog – Bee Interactive</title>
        <meta name="description" content="Toutes les dernières actualités de Bee Interactive." />
      </Head>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Bienvenue sur le blog
        </h1>
        <p className="text-lg leading-7 text-gray-500">
            Une collection de chouettes articles et messages, ainsi que des trucs un peu geek et des activités de l'entreprise.
        </p>
      </div>
      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
        <ul className="space-y-2 col-span-4 xl:items-baseline divide-y divide-gray-200">
          {posts.map(({ link, module: { default: Component, meta } }) => {
            return (
              <li key={link} className="py-12">
                <article className="">
                    <dl className="mb-2">
                      <dt className="sr-only">Publié le</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500">
                        <time dateTime={meta.date}>{Moment(meta.date).format('D MMMM, YYYY')}</time>
                      </dd>
                    </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <h2 className="text-3xl leading-8 font-bold tracking-tight md:text-5xl md:leading-10">
                        <Link href={link}>
                          <a className="text-gray-900">{meta.title}</a>
                        </Link>
                      </h2>
                      <div className="prose max-w-none text-gray-600">
                        <Component />
                      </div>
                    </div>
                    <div className="text-base leading-6 font-medium">
                      <Link href={link}>
                        <a
                          className="text-beeinteractive-700 hover:text-beeinteractive-600"
                          aria-label={`Read "${meta.title}"`}
                        >
                          Lire la suite &rarr;
                        </a>
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
