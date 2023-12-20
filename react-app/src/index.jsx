import React from "react";
import { ImageSets } from "./components/ImageSets/ImageSets.jsx";
import "./index.css";

export const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <img className="carl-pics" alt="Carl pics" src="carl-pics.png" />
        <img className="contact" alt="Contact" src="contact.png" />
        <img className="about-us" alt="About us" src="about-us.png" />
      </header>
      <div className="body">
        <div className="padding">
          <p className="title">Select An Image Set To Begin</p>
          <ImageSets className="image-sets-instance" />
        </div>
      </div>
    </div>
  );
};

export default Home;