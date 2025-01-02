// src/App.jsx
import React from 'react';
import './App.css';


function Header() {
  return (
    <header>
      <h1>Welcome to My  Website</h1>
      <p>Your one-stop solution for everything.</p>
    </header>
  );
}

function About() {
  return (
    <section>
      <h2>About</h2>
      <p>This is a simple one-page website created using React.</p>
    </section>
  );
}

function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <ul>
        <li>Web Design</li>
        <li>Development</li>
        <li>SEO Optimization</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Contact Us</h2>
      <p>Email: ankitapawar@123.com</p>
    </section>
  );
}

function Testimonials() {
  return (
    <section>
      <h2>What Our Clients Say</h2>
      <p>"This is the best service I've ever used!"</p>
    </section>
  );
}

function Features() {
  return (
    <section>
      <h2>Features</h2>
      <ul>
        <li>Fast and Responsive</li>
        <li>Easy to Use</li>
        <li>Highly Customizable</li>
      </ul>
    </section>
  );
}

function Gallery() {
  return (
    <section>
      <h2>Gallery</h2>
      <p>Check out our amazing work below!</p>
    </section>
  );
}

function Team() {
  return (
    <section>
      <h2>Meet Our Team</h2>
      <p>Our team consists of highly skilled professionals.</p>
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
      <p>&copy; 2025 My One Page Website</p>
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
