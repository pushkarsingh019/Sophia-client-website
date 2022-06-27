import React from "react";

// importing components for home screen
import Navbar from "../components/Navbar";

export default function HomeScreen() {
  function Hero() {
    return (
      <div className="hero">
        <h1 className="hero-text">
          I'm here to help you be the hero of your own movie called <b>Life</b>.
          <br />
          <br />
          It's simple. <br /> I want to empower all of us to get out of our
          comfort zones and live our best life.
        </h1>
      </div>
    );
  }

  return (
    <div className="screen">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}
