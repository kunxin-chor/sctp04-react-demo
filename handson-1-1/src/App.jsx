import React from "react";
import "./App.css";
function App() {

  return (
    <>
      <header>
        <nav>
          <div className="logo">Wanderlust</div>
          <ul>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world with our curated travel experiences</p>
          <button className="cta-button">Start Planning</button>
        </section>

        <section id="destinations" className="destinations">
          <h2>Popular Destinations</h2>
          <div className="destination-grid">
            <div className="destination-card">
              <img src="https://placehold.co/400x300" alt="Tropical Beach"/>
                <h3>Tropical Paradise</h3>
                <p>Experience pristine beaches and crystal-clear waters</p>
            </div>
            <div className="destination-card">
              <img src="https://placehold.co/400x300" alt="Mountain Range"/>
                <h3>Mountain Escape</h3>
                <p>Breathtaking views and adventure await</p>
            </div>
            <div className="destination-card">
              <img src="https://placehold.co/400x300" alt="Historic City"/>
                <h3>Cultural Journey</h3>
                <p>Immerse yourself in history and tradition</p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default App;