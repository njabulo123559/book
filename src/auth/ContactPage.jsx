import React, {useState} from "react";
import '../Style.css'
import {NavigationBar} from "../auth/NavigationBar";
import { Footer } from "./footer.jsx"


function ContactPage() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    });

    let name, value;
    const postUserData = (event) => {
      name = event.target.name;
      value = event.target.value;

      setUserData({...userData, [name]: value});

    };

    // connect with firebase
    const submitData = async (event) => {
      event.preventDefault();
      const { name, email, subject, message } = userData;

      if(name && email && subject && message){
      const res = await fetch('https://ebook-b1fdf-default-rtdb.firebaseio.com/userDataRecords.json',
      {
      method : "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    }

      );

      if (res){
        alert("Thank you for taking your time and contact us, your message will be reviewed.");
      }else{
        alert("Please fill the missing information")
      }

      }else{
        alert("please fill the missing information")
      }
    

    };
  
  return (
    <div >
      <NavigationBar/>
      
      {/* First Div Section */}
      <div className="contact-section">
        <div className="left-section">
          <h2 className="text0">Feel free to keep in touch</h2>
          <p>
            We are here to help you with any inquiries you may have about our products and services. Please feel free to call or email us, or use our contact form to get in touch with us. We look forward to hearing from you!
          </p>
        </div>
        <div className="right-section">
          {/* Contact Form */}
          <form method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={userData.name} onChange={postUserData} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={userData.email} onChange={postUserData} />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={userData.subject} onChange={postUserData} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" value={userData.message} onChange={postUserData}></textarea>
            </div>
            <button className="btnSend" type="submit" onClick={submitData} >Send Message</button>
          </form>
        </div>
      </div>

      {/* Second Div Section */}
     <Footer/>
    </div>
  );
}

export { ContactPage };
