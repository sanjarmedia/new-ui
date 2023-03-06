import '../src/assets/styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>New ELD World - The best platform for fleet management</title>
        <meta name='description' content='We are launching NEW platform very soon. Stay tuned.' />
        <meta name='title' content='New ELD World - The best platform for fleet management' />
        <meta name='description' content='A comprehensive suite of tools to manage your fleet.' />

        <meta name='keywords' content='NEW ELD, eld, tracking, ELD compliance solution, fleet management' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.neweldworld.com/' />
        <meta property='og:title' content='New ELD World - The best platform for fleet management' />
        <meta property='og:description' content='A comprehensive suite of tools to manage your fleet.' />
        <meta property='og:image' content='https://www.neweldworld.com/seo.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.neweldworld.com/' />
        <meta property='twitter:title' content='New ELD World - The best platform for fleet management' />
        <meta property='twitter:description' content='A comprehensive suite of tools to manage your fleet.' />
        <meta property='twitter:image' content='https://www.neweldworld.com/seo.png' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
