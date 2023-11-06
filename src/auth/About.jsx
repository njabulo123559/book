
import '../Style.css'
import {NavigationBar} from "../auth/NavigationBar";
import React, { useState } from "react";
import Image1 from "../assets/Ebook writing-min.jpg"
import {Footer} from "../auth/footer.jsx"


const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about">
    <NavigationBar />
    <div className='about-section black-bg'>
      <h1 className='about-title'>We're changing the way people think about Unizulu</h1>
      <div className='about-content'>
        <p>Welcome to Ebook Maker, your go-to platform for creating stunning ebooks and digital content with ease. We are passionate about empowering you to express your ideas, stories, and knowledge through professionally crafted digital publications.</p>
        <p className='para2'>Ebook Maker is constantly evolving with new features and enhancements. Stay tuned for exciting updates and explore the possibilities of ebook creation.</p>
      </div>

    </div>
    <div className='about-section blue-bg'>
      <h1 className='about-title2'>Our Mission</h1>
      <div className='about-content2'>
      <p className='about-text'>Our mission is to provide a user-friendly and accessible tool for authors, educators, businesses, and creative individuals to bring their content to life in a digital format. We believe that everyone should have the opportunity to share their unique voice and message with the world.</p>
      </div>
    </div>
    <div className='about-section white-bg'>
      <h1 className='about-title'>Leadership Team</h1>
      <ul className='team-list'>
        <li>******</li>
        <li>******</li>
        <li>******</li>
        <li>******</li>
        <li>******</li>
        <li>******</li>
      </ul>
    </div>
    
    <div className='footers'>
      <Footer />
    </div>
  </div>

    
  );
};





export { About };
