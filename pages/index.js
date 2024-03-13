import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Burlington Electronics Repair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Burlington Electronics Repair" />
        <p className="description">
          Give your electronics a second chance -- don't toss them, fix them!
        </p>
      </main>

      <Footer />
    </div>
  )
}
