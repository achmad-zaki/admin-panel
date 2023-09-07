import Head from 'next/head'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
