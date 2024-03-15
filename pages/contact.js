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
        // html form 
        <form class="form-horizontal" netlify>
            <fieldset>

            <legend>Form Name</legend>

            <div class="form-group">
            <label class="col-md-4 control-label" for="name">Full Name</label>  
            <div class="col-md-4">
            <input id="name" name="name" type="text" placeholder="first and last" class="form-control input-md" required="" />
                
            </div>
            </div>

            <div class="form-group">
            <label class="col-md-4 control-label" for="phone">Phone Number</label>  
            <div class="col-md-4">
            <input id="phone" name="phone" type="text" placeholder="(123) 456-7890" class="form-control input-md" required="" />
                
            </div>
            </div>

            <div class="form-group">
            <label class="col-md-4 control-label" for="email">Email Address</label>
            <div class="col-md-4">
                <div class="input-group">
                <input id="email" name="email" class="form-control" type="text" placeholder="you@example.com" required="" />
                        <span class="input-group-addon">     
                    <input type="checkbox" />     
                </span>
                </div>
                <p class="help-block">We generally make contact by phone. Check the box if email is preferred.</p>
            </div>
            </div>

            <div class="form-group">
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
            </div>

            <div class="form-group">
            <label class="col-md-4 control-label" for="message">Message</label>
            <div class="col-md-4">                     
                <textarea class="form-control" id="message" name="message"></textarea>
            </div>

            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" for="submit">Submit</label>
                <div class="col-md-4">
                    <button id="submit" name="submit" class="btn btn-primary">Button</button>
                </div>
            </div>

            </fieldset>
            </form>

      </main>

      <Footer />
    </>
  )
}
