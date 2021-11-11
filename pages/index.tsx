import type { NextPage } from 'next'
import Head from 'next/head'
import HelloWorld from 'components/HelloWorld'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Baseline</title>
        <meta name="description" content="NextJs MUI Typescript baseline 🚀" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HelloWorld />
    </div>
  )
}

export default Home
