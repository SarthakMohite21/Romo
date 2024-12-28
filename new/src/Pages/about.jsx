import React from 'react';
import './About.css';
import leader from '../assets/leader.jpg';
function About() {
  return (
    <div className="about-page">
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

      <div className="about-container">
      <section className="life-at-romo">
      <h1>
            LIFE AT <span className="orange">ROMO</span>
       </h1>
      <p>
               As true partners to our clients, we solve problems, not tickets. Our developers, strategists, and designers
                   are autonomous, outspoken, collaborative, and love doing the work. We've kept our team small and our org flat
               on purpose: that's how we stay nimble, transparent, and human-centric. We have a passionate team and are
              headquartered in [Your Location].
        </p>
       </section>


        <section className="leadership">
          <h2> ROMO <span className="orange">LEADERSHIP</span></h2>
          <div className="leadership-grid">
            {/* Leadership Cards */}
            <div className="leadership-card">
              <img src={leader} alt="Leader 1" />
            </div>
            <div className="leadership-card">
              <img src={leader}  alt="Leader 2" />
            </div>
            <div className="leadership-card">
              <img src={leader}  alt="Leader 3" />
            </div>
            <div className="leadership-card">
              <img src={leader}  alt="Leader 4" />
            </div>
            <div className="leadership-card">
              <img src={leader}  alt="Leader 5" />
            </div>
            <div className="leadership-card">
              <img src={leader}  alt="Leader 6" />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Romo Technologies. All rights reserved.</p>
          <div className="social-icons">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;








