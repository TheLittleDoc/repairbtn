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
        <form name="contact" action="/hidden.html" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />

          <fieldset>

            <legend>Service Inquiry</legend>

            <div>
              <label>Full Name</label>
              <div>
                <input id="name" name="name" type="text" placeholder="first and last"
                       required=""/>

              </div>
            </div>

            <div>
              <label>Phone Number</label>
              <div>
                <input id="phone" name="phone" type="text" placeholder="(123) 456-7890"
                       required=""/>

              </div>
            </div>

            <div>
              <label>Email Address</label>
              <div>
                <div>
                  <input id="email" name="email" type="text" placeholder="you@example.com"
                         required=""/>
                  <span>
                    <input type="checkbox" name="contact-by" id="contact-mode" value="Email Preferred"/>
                  </span>
                </div>
                <p>We generally make contact by phone. Check the box if email is preferred.</p>
              </div>
            </div>
            <fieldset>

              <legend>Select Services</legend>
              <div>
                <div>

                  <div>
                    <input type="checkbox" name="services" id="services-0" value="General"/>
                    <label>General Maintenance</label>
                  </div>
                  <div>
                    <input type="checkbox" name="services" id="services-1" value="Electrical"/>
                    <label>Electrical Repair</label>
                  </div>
                  <div>
                    <input type="checkbox" name="services" id="services-2" value="Mechanical"/>
                    <label>Mechanical Repair</label>
                  </div>
                  <div>
                    <input type="checkbox" name="services" id="services-3" value="Cleaning"/>
                    <label>Cleaning</label>
                  </div>
                  <div>
                    <input type="checkbox" name="services" id="services-4" value="Help"/>
                    <label>Help me decide</label>
                  </div>
                </div>
              </div>
            </fieldset>

              <div>
                <label>Message</label>
                <div>
                  <textarea id="message" name="message"></textarea>
                </div>

              </div>

              <div>
                <label>Submit</label>
                <div>
                  <button id="submit" name="submit" type="submit">Button</button>
                </div>
              </div>

            </fieldset>
        </form>


      </main>

      <Footer/>
    </>
  )
}
