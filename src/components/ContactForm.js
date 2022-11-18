import React, { useRef } from 'react'
import Topbar from "./Topbar";
import classes from "./Contacts.css";
import emailjs from '@emailjs/browser';
import validator from 'validator';
const required = (value) => {
    if (!value.toString().trim().length) {
      // We can return string or jsx as the 'error' prop for the validated Component
      return 'require';
    }
  };
   
  const email = (value) => {
    if (!validator.isEmail(value)) {
      return `${value} is not a valid email.`
    }
  };
  
const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cxwkq47', 'template_mupmcs8', form.current, 'Liw2w8rPjgfSodMH7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
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
                    <form ref={form} onSubmit={sendEmail} id="formid">
                        <h2>Leave us a feedback</h2>
                        <div>
                            <label className="row" for="name">
                                <div className="undefined inputHead">
                                    Name
                                </div>
                            </label>
                        <div>
                        <input  required validations={[required]} class="row ml-0" type="text" id="name" name="user_name" placeholder="Jayesh" />
                        </div>
                        </div>
                        <div>
                            <label className="row" for="email">
                                <div className="undefined inputHead">
                                    E-mail
                                </div>
                            </label>
                       
                        <div>
                        <input required validations={[required, email]} class="row ml-0" type="email" id="email" name="user_email" placeholder="abc@xyz.com"></input>
                            
                          </div>
                        </div>
                        <div>
                        <label class="row" for="message">
                        <div class="undefined inputHead">Message</div>
                        </label>
                        <div>
                            <textarea required validations={[required]} className="row ml-0" id="message" name = "message"
                                rows="4" cols="50" placeholder="Hey there, I wanted to say hi and that..."/>
                        </div>
                        </div>
                        <button className="button" type="submit" value="send" onclick={() => {
                            document.getElementById("name").innerHTML = "";
                            document.getElementById("email").value = "";
                            document.getElementById("message").value = "";
                        }}  style={{marginTop:"1rem"}}>Send message</button>
                        
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
