import React from "react";
import '../Style.css'


function ContactPage() {
  return (
    <div >
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
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Second Div Section */}
     
    </div>
  );
}

export { ContactPage };
