import Head from 'next/head'

const titleDefault = 'Chris Ragland 🚀'
const url = 'https://chrisragland.io/'
const description = 'Chris Ragland, a Computer Science student located in Tampa, Florida'
const author = 'Chris Ragland'

export default function Header({ title = titleDefault }) {
  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta
        name='language'
        content='english'
      />
      <meta
        httpEquiv='content-type'
        content='text/html'
      />
      <meta
        name='author'
        content={author}
      />
      <meta
        name='designer'
        content={author}
      />
      <meta
        name='publisher'
        content={author}
      />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta
        name='description'
        content={description}
      />
      <meta
        name='keywords'
        content='Software Engineer,Computer Scientist, Computer Science Student, Chris Ragland, Internship, Frontend Engineer'
      />
      <meta
        name='robots'
        content='index,follow'
      />
      <meta
        name='distribution'
        content='web'
      />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta
        name='og:title'
        content={title}
      />
      <meta
        name='og:type'
        content='site'
      />
      <meta
        name='og:url'
        content={url}
      />
      <meta
        name='og:site_name'
        content={title}
      />
      <meta
        name='og:description'
        content={description}
      />
      <link
        rel='manifest'
        href='/manifest.json'
      />
      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta
        name='viewport'
        content='width=device-width, minimum-scale=1, initial-scale=1.0'
      />
      <meta
        name='theme-color'
        content='#000'
      />
      <link
        rel='shortcut icon'
        href='/icons/favicon.ico'
      />

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta
        name='twitter:card'
        content='summary'
      />
      <meta
        name='twitter:site'
        content='@onirenaud'
      />
    </Head>
  )
}
