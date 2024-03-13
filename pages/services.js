import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Services() {
  return (
    <div className="container">
      <Head>
        <title>Burlington Electronics Repair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main>
        <Header />
        <h1>Services</h1>
        <p className="description">
          Give your electronics a second chance -- don't toss them, fix them!
        </p>
      </main>

      <Footer />
    </div>
  )
}
