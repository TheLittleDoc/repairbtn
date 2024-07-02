import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Burlington Electronics Repair</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header />
        <Hero imageSource={"/banner.png"} height={"600px"} />
          <content>
              <p className="description">
                  Give your electronics a second chance -- don't toss them, fix them!
              </p>
          </content>
      </main>

        <Footer/>
    </div>
  )
}
