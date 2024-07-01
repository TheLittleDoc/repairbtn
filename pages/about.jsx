import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
    return (
        <>
        <Head>
            <title>About - Burlington Electronics Repair</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <Header />
            <content>
            <h1>About Us</h1>
            <p>
                Burlington Electronics Repair is a small business located in downtown Burlington, Vermont, specializing in
                the repair of consumer electronics. We are dedicated to reducing the amount of electronic waste created
                as a result of fixable, but not often fixed, devices. Few in numbers but big in heart, our technicians
                are committed to providing exemplary service while returning your tech to working order.
            </p>
            <h1>Mission</h1>
            <h2>Right-to-Repair</h2>
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