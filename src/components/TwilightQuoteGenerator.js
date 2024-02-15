import React, { useState } from 'react';
import "./TwilightQuoteGenerator.css";

const quotes = [
    { text: "You better hold on tight, spider monkey.", speaker: "Edward Cullen", movie: "Twilight" },
    { text: "I feel very protective of you.", speaker: "Edward Cullen", movie: "Twilight" },
    { text: "I'm the world's most dangerous predator.", speaker: "Edward Cullen", movie: "Twilight" },
    { text: "You're imprinted on me. It's not gonna change.", speaker: "Jacob Black", movie: "Breaking Dawn - Part 1" },
    { text: "I'm from Jacksonville.", speaker: "Bella Swan", movie: "Twilight" },
    { text: "About three things I was absolutely positive. First, Edward was a vampire. Second, there was a part of him—and I didn't know how dominant that part might be—that thirsted for my blood. And third, I was unconditionally and irrevocably in love with him.", speaker: "Bella Swan", movie: "Twilight" },
    { text: "I'd never given much thought to how I would die—though I'd had reason enough in the last few months—but even if I had, I would not have imagined it like this.", speaker: "Bella Swan", movie: "Twilight" },
    { text: "I can't believe you'd give up everything for me!", speaker: "Bella Swan", movie: "New Moon" },
    { text: "When life offers you a dream so far beyond any of your expectations, it's not reasonable to grieve when it comes to an end.", speaker: "Bella Swan", movie: "Twilight" },
    { text: "It will be as if I'd never existed.", speaker: "Edward Cullen", movie: "New Moon" },
    { text: "I'm not afraid of you. I'm only afraid of losing you.", speaker: "Bella Swan", movie: "Twilight" },
    { text: "I've fallen in love with you. I'm in love with you, and I want you.", speaker: "Edward Cullen", movie: "Eclipse" },
    { text: "It doesn't matter what you believe. It's true.", speaker: "Edward Cullen", movie: "New Moon" },
    { text: "You can't hurt me, not badly. You're too human.", speaker: "Bella Swan", movie: "Eclipse" },
    { text: "I'm not wasted on you, Edward.", speaker: "Bella Swan", movie: "Eclipse" },
    { text: "I love you.", speaker: "Edward Cullen", movie: "Twilight" },
    { text: "I love you, too.", speaker: "Bella Swan", movie: "Twilight" },
  ];
  

  const defaultQuote = quotes[0];

  const TwilightQuoteGenerator = () => {
    const [quote, setQuote] = useState(defaultQuote);
  
    const generateQuote = () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    };
  
    return (
    <>
    <div className="characters-hero">
      <h1>Quotes</h1>
    </div>
      <div className="quote-generator">
        <h2>Hotgirl Quote Generator</h2>
        <div className="quote">
          <p>"{quote.text}"</p>
          <p><strong>- {quote.speaker}, {quote.movie}</strong></p>
          <button className="new-quote-button" onClick={generateQuote}>
            New Quote
          </button>
        </div>
      </div>
      </>
    );
  };
  
  export default TwilightQuoteGenerator;