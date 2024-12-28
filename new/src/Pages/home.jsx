import React, { useState, useEffect,useRef } from "react";
import "./Home.css";
import bckg from "../assets/bckg.jpg";

function Home() { 
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const [activePoint, setActivePoint] = useState(0); // To track the active timeline point
  const timelineRef = useRef();

  const timelineData = [
    { year: "2021", icon: "", description: "Detailed description for 2021." },
    { year: "2020", icon: "", description: "Detailed description for 2020." },
    { year: "2019", icon: "", description: "Detailed description for 2019." },
    { year: "2018", icon: "", description: "Detailed description for 2018." },
    { year: "2017", icon: "", description: "Detailed description for 2017." },
  ];

  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    timelineItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Romo Technologies</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

     {/* Hero Section */}
     <section className="hero-section">
        <div
          className="hero-background"
          style={{
            transform: `translateY(${scrollPosition * 0.5}px)`,
          }}
        ></div>
      </section>

      {/* Solution Section */}
      <section className="website-solution-section">
      <div className="solution-container">
      {/* Left Side Content */}
      <div className="left-content">
      <h2>
        One of the best company of Nagpur for increasing{" "}
        <span className="highlight-text">your business</span>
      </h2>
    </div>
      {/* Right Side Content */}
    <div className="right-content">
      <p>We develop all website and application</p>
      <button className="orange-button">Get Started</button>
    </div>
    </div>
     </section>

{/* Timeline Section */}
<div className="timeline-section" ref={timelineRef}>
  <div className="timeline-title">
    <h2>
      <span className="highlight-white">Our</span>{" "}
      <span className="highlight-orange">Journey</span>
    </h2>
  </div>
  <div className="timeline-container">
    {/* Timeline on the Left */}
    <div className="timeline">
      {timelineData.map((point, index) => (
        <div
          key={index}
          className="timeline-item"
          onClick={() => setActivePoint(index)}
        >
          <div className="timeline-icon">{point.icon}</div>
          <div className="timeline-content">
            <h3>
              <span className="highlight-orange">{point.year}</span>
            </h3>
            <p>
              Click to view{" "}
              <span className="highlight-orange">details</span>
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Paragraph Container on the Right */}
    <div className="timeline-details">
      <p>{timelineData[activePoint].description}</p>
    </div>
  </div>
</div>

{/* Steps Section */}
<section className="steps-section">
  <h2 className="section-heading">
    <span className="highlight-white">3 Steps to Get</span>{" "}
    <span className="highlight-orange">Started</span>
  </h2>
  <div className="steps">
    <div className="step">
      <h3>
        <span className="highlight-white">1.</span>{" "}
        <span className="highlight-orange">Call</span>
      </h3>
      <p>
        <span className="highlight-white">The uniqueness of websites adds value to your business by clearing
        your </span><span className="highlight-orange">pre-registration</span>.
      </p>
    </div>
    <div className="step">
      <h3>
        <span className="highlight-white">2.</span>{" "}
        <span className="highlight-orange">Quote</span>
      </h3>
      <p>
        <span className="highlight-white">Pay the price of technologies instead of websites. Make decisions
        on values like time, cost, and</span>{" "}
        <span className="highlight-orange">yourself</span>.
      </p>
    </div>
    <div className="step">
      <h3>
        <span className="highlight-white">3.</span>{" "}
        <span className="highlight-orange">Enter the New World!</span>
      </h3>
      <p>
       <span className="highlight-white"> Plans, goals, and milestones to build what is best for your</span>{" "}
        <span className="highlight-orange">project</span>.
      </p>
      <button className="action-button">Get Started</button>
      </div>
    </div>
   </section>

   <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-title">Romo <span className="highlight-orange">Tech</span></h3>
          <p className="footer-address">
            123 Business Street<br />
            City, Country<br />
            Zip Code
          </p>
          <p className="footer-details">
            VAT-ID: 123456789<br />
            REGON: 987654321<br />
            KRS: 123456789
          </p>
          <a href="mailto:contact@yourcompany.com" className="footer-email">
            contact: @RomoTech.com
          </a>
        </div>
        <div className="footer-right">
          <h3 className="footer-title">Follow <span className="highlight-orange">Us</span></h3>
          <div className="social-icons">
            <a href="#" className="social-link">Bē</a>
            <a href="#" className="social-link">Dr</a>
            <a href="#" className="social-link">Fb</a>
            <a href="#" className="social-link">Git</a>
            <a href="#" className="social-link">Ln</a>
            <a href="#" className="social-link">Tw</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Home;




