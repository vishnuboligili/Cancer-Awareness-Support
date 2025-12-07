import React, { useEffect, useState } from "react";
import "../styles/Home.css";

export const Home = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
  fetch("https://quoteslate.vercel.app/api/quotes/random")
    .then(res => res.json())
    .then(data => {
      setQuote(data.quote || data.text || "Stay hopeful! 💜");
    })
    .catch(err => {
      console.error(err);
      setQuote("Stay hopeful! 💜");
    });
}, []);



  return (
    <div className="home-container">
      <section className="banner-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNukMQNLcPDQnvr78iXVIRONJgbF6gv3tc-Q&s"
          alt="Cancer Awareness Banner"
          className="banner-image"
        />
        <h1>Together We Fight Cancer</h1>
        <p>Supporting awareness, prevention, and hope for everyone affected.</p>
      </section>

      <section className="quote-section">
        <h2>💜 Motivation of the Day</h2>
        <p>{quote || "Loading..."}</p>
      </section>
    </div>
  );
};
