import React from 'react'
import Topbar from "./Topbar";
import classes from "./Contacts.css";
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <>
    <Topbar />
    <React.Fragment>
    <div className={`${classes.contactBody} contactBody container-fluid`}>
      
        <div className="row">
            <h1 id="top" className="mt-5">Contact Us</h1>
        </div>
        <div className="row">
            <div className="col-12 col-md mt-5">
                <h2>Points of Contact</h2>
                <div className="row mt-4">
                    <h3>Address</h3>
                    <p>BITS Pilani, Pilani Campus, Rajasthan-333031</p>
                </div>
                <div className="row mt-4">
                    <h3>Web Address</h3>
                    <p><a href="https://www.nssbitspilani.org">www.nssbitspilani.org</a></p>
                </div>
                <div className="row mt-4">
                    <h3>Email Address</h3>
                    <p><a href="mailto:nss@pilani.bits-pilani.ac.in">nss@pilani.bits-pilani.ac.in</a></p>
                </div>
                <div className="row mt-4">
                    <h3>President</h3>
                    <p>
                       "Nandalal Odedera"
                        <br />
                        "Phone:" 
                        <a href="tel:+919064412959">+91 9064412959</a>
                    </p>
                </div>
                <div class="row mt-4">
                <h3>Vice President</h3>
                <p>
                "Bhavay Goenka"
                <br/>
                "Phone:""
                 <a href="tel:+919820668301">+91 9509050522</a>
                 </p>
                </div>
                <div className="row mt-4">    
                    <h3>Secretary</h3>
                    <p>
                        "Shreya Kumari"
                        <br />
                    
                        Phone: <a href="tel:+918420752210">+91 8420752210</a>
                    </p>
                </div>
            </div>
            <div className="col-12 col-md mt-5">
                <div className="undefined contactForm">
                    <form action="#">
                        <h2>Leave us a feedback</h2>
                        <div>
                            <label className="row" for="name">
                                <div className="undefined inputHead">
                                    Name
                                </div>
                            </label>
                            
                          
                          
                        <div>
                        <input class="row ml-0" type="text" id="name" name="name" placeholder="James Bond" value/>
                        </div>
                        </div>
                        <div>
                            <label className="row" for="email">
                                <div className="undefined inputHead">
                                    E-mail
                                </div>
                            </label>
                       
                        <div>
                        <input class="row ml-0" type="text" id="email" name="email" placeholder="abc@xyz.com" value=""/>
                            
                          </div>
                        </div>
                        <div>
                        <label class="row" for="message">
                        <div class="undefined inputHead">Message</div>
                        </label>
                        <div>
                            <textarea className="row ml-0" id="message" name = "message"
                                rows="4" cols="50" placeholder="Hey there, I wanted to say hi and that..."/>
                        </div>
                        </div>
                        <button className="button" style={{marginTop:"1rem"}}>Send message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  
</React.Fragment>
    
    </>
  )
}
export default ContactForm
