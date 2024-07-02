import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function R2R() {
    return (
        <>
        <Head>
            <title>Right-to-Repair - Burlington Electronics Repair</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <Header />
            <content>
            <h1>Right-to-Repair</h1>
            <p>
                We seek to offer affordable repair services on electronics you have bought and own. We, as many others
                do now, believe that consumers should be guaranteed the right to repair products they purchase in any
                way they see fit, rather than replacing said products or simply being at the mercy of the manufacturer.
            </p>
            </content>
        </main>

        <Footer/>
        </>
    )
}