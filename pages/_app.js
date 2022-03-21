import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>News App - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" hr ef="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"></link>
      </Head>
      <header>newsapi</header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp