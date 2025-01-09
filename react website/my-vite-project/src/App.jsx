// src/App.jsx
import React from 'react';
import '/src/App.css';


function Header() {
  return (
    <header>
      <h1>Welcome to NextStep</h1>
      <p>Your one-stop solution for everything.</p>
    </header>
  );
}

function About() {
  return (
    <section>
      <h2>About</h2>
      <p>At NextStep, we are passionate about empowering women to take charge of their lives and reach new heights. Our services are designed to support women in every aspect of their journey—from personal growth and career development to health and wellness. We aim to create a welcoming, inclusive environment where women can thrive, connect, and take the next step toward a brighter future.</p>
    </section>
  );
}
function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
        <img src="/images/coaching.jpg" alt="Personal Coaching" />

          <h3>Personal Coaching & Mentorship</h3>
        </div>
        <div className="service-item">
          <img src="images/career.jpg" alt="Career Development" />
          <h3>Career Development</h3>
        </div>
        <div className="service-item">
          <img src="/images/wellness.jpg" alt="Health & Wellness" />
          <h3>Health & Wellness Programs</h3>
        </div>
        <div className="service-item">
          <img src="/images/workshops.jpg" alt="Workshops & Events" />
          <h3>Workshops & Events</h3>
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>We are here to assist you! Please fill out the form below, or feel free to reach out via email or social media.</p>

        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-details">
          <p>Or reach us directly:</p>
          <p>Email: <strong>ap5711799@gmail.com</strong></p>
          <div className="social-links">
            
            <a href="https://github.com/Ankita735/internship/tree/main/sample%20project" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
            <a href="https://www.linkedin.com/in/ankita-pawar-b66a80258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <img src="/images/sarah.jpg" alt="Sarah Johnson" className="testimonial-photo" />
          <p className="testimonial-message">"This is the best service I’ve ever used! It helped me grow personally and professionally."</p>
          <h3 className="client-name">Sarah Johnson</h3>
          <p className="client-title">Entrepreneur</p>
        </div>

        <div className="testimonial-item">
          <img src="/images/emily.jpg" alt="Emily Turner" className="testimonial-photo" />
          <p className="testimonial-message">"The coaching was fantastic! I feel more confident in my career than ever."</p>
          <h3 className="client-name">Emily Turner</h3>
          <p className="client-title">Marketing Specialist</p>
        </div>
      </div>
    </section>
  );
}




function Features() {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="features-list">
        <div className="feature-item">
          <h3 className="feature-title">Fast and Responsive</h3>
          <p className="feature-description">Our platform ensures lightning-fast performance and responsiveness on any device.</p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">Easy to Use</h3>
          <p className="feature-description">User-friendly design that makes navigation simple and intuitive.</p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">Highly Customizable</h3>
          <p className="feature-description">Tailor the features and interface to suit your specific needs.</p>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';

function Gallery() {
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <p>Explore our amazing work below!</p>

      <div className="slider-container">
        <button className="prev" onClick={prevImage}>❮</button>
        <div className="slider">
          <img src={images[currentIndex]} alt="Gallery Image" className="slider-image" />
        </div>
        <button className="next" onClick={nextImage}>❯</button>
      </div>
    </section>
  );
}

function Team() {
  const teamMembers = [
    {
      name: "Ankita Pawar",
      position: "CEO & Founder",
      image: "/images/ankita.jpg"
    },
    {
      name: "Priya Desai",
      position: "Marketing Manager",
      image: "/images/priya.jpg"
    },
    {
      name: "Neha Sharma",
      position: "Lead Developer",
      image: "/images/neha.jpg"
    },
    {
      name: "Rita Patel",
      position: "HR Manager",
      image: "/images/rita.jpg"
    }
  ];

  return (
    <section className="team">
      <h2>Meet Our Team</h2>
      <p>Our team consists of highly skilled professionals dedicated to your success.</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



function Blog() {
  return (
    <section>
      <h2>Latest Blog Posts</h2>
      <p>Stay updated with our latest news and blog posts.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Nextstep company</p>
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Services />
      <Testimonials />
      <Features />
      <Gallery />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
