import React, { useState } from "react";
import {NavigationBar} from "./NavigationBar";
import {Footer} from "./footer.jsx"
import image2 from "../assets/istockphoto-828507464-612x612.jpg"
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();
  const inputField = document.getElementById('myInput');


  const navigateToAbout = () => {
    navigate("/about");
  }

  const newsLetter = () => {
    if (inputField.value === ""){
      alert("Please enter your email address");
      // verify if the given eamil is a valid email addres format
     

      } else {
        alert(inputField.value + ", Thank you for subscribing to our Newsletter!");
  }
}

  
  return (
    <div>
        <NavigationBar />
      {/* First Section */}
      <div className="first-section">
        <div className="text-and-image">
          <div className="welcome-text">
            <h1 className="text1">Welcome to Unizulu Ebook Maker</h1>
            <p className="text2">Create stunning Ebooks with just a few clicks! Our user-friendly web application allows you to bring your ideas to life with ease. Choose from a wide range of templates, customize to your liking, and save your Ebook in any format. Get creative and start publishing your masterpiece today!</p>
          </div>
          <div className="ebook-image">
            <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/06/eBook-BP-Header.jpg"  alt="Ebook" />
          </div>
          <div>
            <button className="btn1" onClick={navigateToAbout} type="button">Learn More</button>


          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="second-section">
        <h2>Services We Provide</h2>
        <div className="service-grid">
          <div className="service-container">
            <div className="service">
              <h3>Ebook Creation</h3>
              <p>Create professional-looking Ebooks with our user-friendly platform that allows you to choose from a variety of design elements and customize your Ebook to fit your needs.</p>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <h3>Template Finder</h3>
              <p>Choose from a variety of templates that suit your needs and customize them to fit your Ebook’s style and content.</p>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <h3>Editing Tools</h3>
              <p>Our editing tools allow you to refine your Ebook’s content and design, ensuring that it’s polished and professional-looking.</p>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <h3>Embed Multimedia</h3>
              <p>Make your Ebook more engaging by embedding multimedia like videos, audio, and interactive elements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="third-section">
        <div>
            <h2>Subscribe to newsletter</h2>
            <p>Enter your email address to register to our newsletter subscription!</p>
        </div>
        <div>
            <input className="search" id="myInput" type="email" placeholder="Email"></input>
        </div>
        <div>
            <button onClick={newsLetter} class="btn1">Send</button>
        </div>


      </div>
      <div className="contact-section">
      <div className="contact-left">
        <h2>Get in contact with our team</h2>
        <img src={image2} alt="Contact" />
      </div>
      <div className="contact-right">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
        <button>Submit</button>
      </div>
    </div>

    <Footer/>


  </div>

  );
}

export { HomePage };
