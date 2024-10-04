import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ quote, fetchQuote, saveQuote }) => {
  return (
    <div className="quote-card">
      <p className="quote-text">"{quote}"</p>
      <div className="quote-buttons">
        <button className="btn" onClick={fetchQuote}>
          New Quote
        </button>
        <button className="btn" onClick={saveQuote}>
          Save to List
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
