import React, { useState } from "react";
import {NavigationBar} from "./NavigationBar";

function HomePage() {
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
            <img src="https://10web-site.ai/19/wp-content/uploads/sites/21/2023/10/barthelemy-de-mazenod-1Y5WpVfaAPQ-unsplash_gklUBh1K.webp" alt="Ebook" />
          </div>
          <div>
            <button className="btn1" type="button">Learn More</button>


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
            <input className="search" type="email" placeholder="Email"></input>
        </div>
        <div>
            <button class="btn1">Send</button>
        </div>


      </div>

      /* Footer Section */
    <div className="footer">
        <p>&copy; 2023 Ebook Maker</p>
        <p>University of Zululand</p>
        <p>Private Bag X1041</p>
        <p>Richards Bay 3900</p>
        <p>Tel: +27 35 902 6950</p>
    </div>


    </div>

  );
}

export { HomePage };
