import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

function HomePage() {
  return (
    <div>
      <header className="header">
        <h1>Welcome to Sho-Mo-Events</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#Register">Register</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Home Section</h2>
          <p>This is the home section.</p>
        </section>
        <section id="about">
          <h2>About Section</h2>
          <p>This is the about section.</p>
        </section>
        <section id="contact">
          <h2>Contact Section</h2>
          <p>This is the contact section.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
}

export default HomePage;
