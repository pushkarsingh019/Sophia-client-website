import React from "react";

// importing components for home screen
import Navbar from "../components/Navbar";

export default function HomeScreen() {
  function Hero() {
    return (
      <section className="hero">
        <h1 className="hero-text">
          I'm here to help you be the hero of your own movie called <b>Life</b>.
          <br />
          <br />
          It's simple. <br /> I want to empower all of us to get out of our
          comfort zones and live our best life.
        </h1>
      </section>
    );
  }

  function YouTubeSection() {
    return (
      <section className="section youtube-section">
        <h1>YouTube</h1>
        <br />
        <h3>Self-Development, Lifestyle, Post-Grad Content.</h3>
        <div className="section-grid">
          <iframe
            width="344"
            height="193"
            src="https://www.youtube.com/embed/ezEABthX1_o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="344"
            height="193"
            src="https://www.youtube.com/embed/6EbWYNxuufg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="344"
            height="193"
            src="https://www.youtube.com/embed/kYTzNuYfIBc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    );
  }

  return (
    <div className="screen">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <YouTubeSection />
      </main>
    </div>
  );
}
