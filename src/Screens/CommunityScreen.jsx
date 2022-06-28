import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CommunityScreen() {
  return (
    <div className="screen">
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Community</h1>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
}
