import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function goToServices() {
    console.log("Hello")
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Burlington Electronics Repair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main>
        <Header />
        <h1>Contact Us</h1>
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
                </select></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>

        

      </main>

      <Footer />
    </>
  )
}
