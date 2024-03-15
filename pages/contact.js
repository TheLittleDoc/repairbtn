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

        <form class="form-horizontal" method="POST" data-netlify="true">
            <fieldset>

            <legend>Form Name</legend>

            <label class="col-md-4 control-label" for="name">Full Name</label>
            <input id="name" name="name" type="text" placeholder="first and last" class="form-control input-md" required="" />
    
            <label class="col-md-4 control-label" for="phone">Phone Number</label>  
            <input id="phone" name="phone" type="text" placeholder="(123) 456-7890" class="form-control input-md" required="" />
                

            <label class="col-md-4 control-label" for="email">Email Address</label>
                <div class="input-group">
                <input id="email" name="email" class="form-control" type="text" placeholder="you@example.com" required="" />
                        <span class="input-group-addon">     
                    <input type="checkbox" />     
                </span>
                </div>
                <p class="help-block">We generally make contact by phone. Check the box if email is preferred.</p>


            <label class="col-md-4 control-label" for="services">Select Services</label>
            <div class="col-md-4">
                <select id="services" name="services" class="form-control" multiple="multiple">
                <option value="1">General Maintenance</option>
                <option value="2">Electrical Repair</option>
                <option value="3">Mechanical Repair</option>
                <option value="4">Cleaning</option>
                <option value="">Help me decide</option>
                </select>
                <p class="help-block">Hold Ctrl to select multiple</p>
            </div>

            <label class="col-md-4 control-label" for="message">Message</label>               
                <textarea class="form-control" id="message" name="message"></textarea>


                <label class="col-md-4 control-label" for="submit">Submit</label>
                    <button id="submit" name="submit" type="submit" class="btn btn-primary">Button</button>
        

            </fieldset>
            </form>

      </main>

      <Footer />
    </>
  )
}
